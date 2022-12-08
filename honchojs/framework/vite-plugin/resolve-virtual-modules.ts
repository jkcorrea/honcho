import fg from 'fast-glob'
import type { Plugin } from 'vite'

import { assert } from '../../shared/utils/assert'
import { GENERATED_RESOURCES_GLOB, RESOURCES_OUTPUT_FILE, USER_RESOURCES_GLOB } from '../constants'

const VIRTUAL_MODULE_ID = 'virtual:honcho'
const stripResourcesExport = 'stripResourcesExport'
export const stripResourcesExportRE = new RegExp(`(\\?|&)${stripResourcesExport}(?:&|$)`)

export function resolveVirtualModules(): Plugin {
  let allResourceFiles: string[] = []

  return {
    name: 'honcho:resolveVirtualModules',
    enforce: 'pre',
    configResolved(_config) {
      const generatedFiles = fg.sync(GENERATED_RESOURCES_GLOB)
      const overridesFiles = fg.sync(USER_RESOURCES_GLOB)
      allResourceFiles = generatedFiles.concat(overridesFiles).map((f) => f.replace('.tsx', ''))
    },
    async resolveId(id, importer, options) {
      if (id === VIRTUAL_MODULE_ID) {
        return RESOURCES_OUTPUT_FILE.replace('.ts', '.js')
      } else if (allResourceFiles.includes(id)) {
        const resolvedModule = await this.resolve(id, importer, { ...options, skipSelf: true })
        assert(resolvedModule)
        return `${resolvedModule.id}?${stripResourcesExport}`
      }
    },
    async transform(code, id, options) {
      if (!options?.ssr && stripResourcesExportRE.test(id)) {
        return `${code}\nexport const resolvers = {}`
      }
    },
  }
}
