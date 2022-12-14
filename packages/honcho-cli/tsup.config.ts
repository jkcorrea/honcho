import { defineConfig } from 'tsup'

// const commands = fg.sync('src/commands/*.ts')

export default defineConfig({
  entry: ['src/index.ts', 'src/commands/**/*.ts'],
  format: 'cjs',
  dts: true,
})
