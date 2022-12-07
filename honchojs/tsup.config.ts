import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['./index.ts'],
    format: ['esm', 'cjs'],
    clean: true,
    dts: true,
    sourcemap: true,
    external: ['virtual:honcho'],
  },
  {
    entry: {
      'prisma-generator': './framework/prisma-generator/index.ts',
      cli: './framework/cli.ts',
    },
    format: ['esm', 'cjs'],
    clean: true,
    dts: true,
  },
])
