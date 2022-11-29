import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: {
      'prisma-generator': './framework/prisma-generator/index.ts',
      'vite-plugin': './framework/vite-plugin/index.ts',
      cli: './framework/cli.ts',
      helpers: './helpers/index.ts',
      types: './types/index.ts',
    },
    format: ['esm', 'cjs'],
    clean: true,
    dts: true,
  },
  {
    entry: [
      './runtime/generated.ts',
      './runtime/db.ts',
      './runtime/renderer/_default.page.client.tsx',
      './runtime/renderer/_default.page.server.tsx',
      './runtime/renderer/_error.page.server.tsx',
      './runtime/pages/index.page.tsx',
      './runtime/pages/index.page.route.tsx',
      './runtime/pages/resource/resource.page.tsx',
      './runtime/pages/resource/resource.page.route.tsx',
    ],
    external: ['virtual:honcho', '.honcho/generated'],
    format: 'esm',
    sourcemap: true,
    dts: true,
    clean: true,
  },
])
