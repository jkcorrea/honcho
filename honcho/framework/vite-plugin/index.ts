import react, { Options as ReactPluginOptions } from '@vitejs/plugin-react'
import telefunc from 'telefunc/vite'
import type { PluginOption } from 'vite'
import ssr from 'vite-plugin-ssr/plugin'
import tsconfigPaths from 'vite-tsconfig-paths'

import { babelTransformClientSideResources } from './babelTransformClientSideResources'
import { resolveVirtualResources, stripResourcesExportRE } from './resolveVirtualResources'

export interface HonchoOptions {
  /** Options passed to @vite/plugin-react */
  react?: ReactPluginOptions
}

export default function honcho(options: HonchoOptions = {}): PluginOption[] {
  return [
    tsconfigPaths(),
    ...react({
      babel(id, opts) {
        const inputOptions =
          typeof options.react?.babel === 'function' ? options.react.babel(id, opts) : options.react?.babel

        if (!opts?.ssr && stripResourcesExportRE.test(id)) {
          return {
            ...inputOptions,
            plugins: [babelTransformClientSideResources(), ...(inputOptions?.plugins ?? [])],
          }
        } else {
          return inputOptions || {}
        }
      },
    }),
    resolveVirtualResources(),
    ssr(),
    telefunc(),
  ]
}
