import { defineConfig } from 'tsup'

export default defineConfig([
  {
    replaceNodeEnv: true,
    entry: ['./src/index.ts'],
    format: 'esm',
    platform: 'node',
    dts: true,
    external: [
      'virtual:honcho',
      'react',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
      'react-dom',
      'react-dom/server',
      'react-dom/server.browser',
    ],
  },
  {
    entry: {
      'vite-plugin': './src/framework/vite-plugin/index.ts',
    },
    format: 'esm',
    platform: 'node',
    dts: true,
    banner: {
      js: [
        `import { createRequire as topLevelCreateRequire } from 'module'`,
        `const require = topLevelCreateRequire(import.meta.url)`,
      ].join('\n'),
    },
  },
  {
    entry: {
      cli: './src/framework/cli.ts',
    },
    format: 'esm',
    platform: 'node',
  },
  {
    entry: {
      'prisma-generator': './src/framework/prisma-generator/index.ts',
    },
    format: 'cjs',
    platform: 'node',
  },
])
