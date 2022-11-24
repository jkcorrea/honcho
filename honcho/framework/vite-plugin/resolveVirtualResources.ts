import fg from 'fast-glob'
import type { Plugin } from 'vite'

import { assert } from '~/honcho/utils/assert'

import { GENERATED_RESOURCES_GLOB, RESOURCES_OUTPUT_FILE, USER_RESOURCES_GLOB } from '../constants'

const VIRTUAL_MODULE_ID = 'virtual:honcho'
const stripResourcesExport = 'stripResourcesExport'
export const stripResourcesExportRE = new RegExp(`(\\?|&)${stripResourcesExport}(?:&|$)`)

export function resolveVirtualResources(): Plugin {
  let allResourceFiles: string[] = []

  return {
    name: 'honcho:resolveVirtualResources',
    enforce: 'pre',
    configResolved(config) {
      assert(config.root)
      const generatedFiles = fg.sync(GENERATED_RESOURCES_GLOB).map((f) => f.replace(config.root, ''))
      const overridesFiles = fg.sync(USER_RESOURCES_GLOB).map((f) => f.replace(config.root, ''))
      allResourceFiles = generatedFiles.concat(overridesFiles)
      console.log(allResourceFiles)
    },
    async resolveId(id, importer, options) {
      if (id === VIRTUAL_MODULE_ID) {
        return RESOURCES_OUTPUT_FILE
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
