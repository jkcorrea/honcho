import react, { Options as ReactPluginOptions } from '@vitejs/plugin-react'
import type { PluginOption } from 'vite'
import inspect from 'vite-plugin-inspect'
import tsconfigPaths from 'vite-tsconfig-paths'

import { babelTransformClientSideResources } from './babel-transform-client-side-resources'
import { resolveVirtualModules, stripResourcesExportRE } from './resolve-virtual-modules'

export interface HonchoOptions {
  /** Options passed to @vite/plugin-react */
  react?: ReactPluginOptions
}

export default function honcho(options: HonchoOptions = {}): PluginOption[] {
  return [
    inspect(),
    {
      name: 'honcho',

      configResolved(config) {
        console.log(config.plugins.map((p) => p.name).join('\n'))
      },
    },
    tsconfigPaths(),
    react({
      ...options.react,
      jsxRuntime: 'classic',
      babel(id, opts) {
        const inputOptions =
          typeof options.react?.babel === 'function' ? options.react.babel(id, opts) : options.react?.babel

        if (stripResourcesExportRE.test(id)) {
          return {
            ...inputOptions,
            plugins: [babelTransformClientSideResources(), ...(inputOptions?.plugins ?? [])],
          }
        } else {
          return inputOptions || {}
        }
      },
    }),
    resolveVirtualModules(),
  ]
}
