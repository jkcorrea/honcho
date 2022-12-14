import { NodePath, PluginItem } from '@babel/core'
import * as t from '@babel/types'

const SSR_EXPORTS = ['resolvers']

export function babelTransformClientSideResources(): PluginItem {
  return {
    visitor: {
      Program: {
        exit(program) {
          const alreadyUnreferenced = getAlreadyUnreferenced(program)
          let modified = false

          program.traverse({
            ExportNamedDeclaration: {
              enter(path) {
                if (
                  t.isFunctionDeclaration(path.node.declaration) &&
                  SSR_EXPORTS.includes(path.node.declaration.id!.name)
                ) {
                  path.remove()
                  modified = true
                } else if (t.isVariableDeclaration(path.node.declaration)) {
                  const declarations = path.get('declaration').get('declarations') as NodePath<t.VariableDeclarator>[]

                  for (const declaration of declarations) {
                    if (t.isIdentifier(declaration.node.id) && SSR_EXPORTS.includes(declaration.node.id.name)) {
                      declaration.remove()
                      modified = true
                    }
                  }
                } else if (path.node.specifiers.length) {
                  const specifiers = path.get('specifiers')

                  for (const specifier of specifiers) {
                    if (
                      t.isExportSpecifier(specifier) &&
                      t.isIdentifier(specifier.node.exported) &&
                      SSR_EXPORTS.includes(specifier.node.exported.name)
                    ) {
                      specifier.remove()
                      modified = true
                    }
                  }
                }
              },
            },
          })

          if (modified) {
            removeUnreferenced(program, alreadyUnreferenced)
          }
        },
      },
    },
  }
}

function getAlreadyUnreferenced(program: NodePath<t.Program>) {
  const alreadyUnreferenced = new Set<string>()

  for (const [name, binding] of Object.entries(program.scope.bindings)) {
    if (!binding.referenced) {
      alreadyUnreferenced.add(name)
    }
  }

  return alreadyUnreferenced
}

function removeUnreferenced(program: NodePath<t.Program>, alreadyUnreferenced: Set<string>) {
  for (;;) {
    // This for-ever loop + crawl call seems odd
    // Basically, .crawl() refreshes the list of bindings in scope
    // So we continually refresh and re-run the inner for loop
    // whenever we remove unreferenced code, until we stop removing code
    program.scope.crawl()

    let removed = false
    for (const [name, binding] of Object.entries(program.scope.bindings)) {
      if (binding.referenced || alreadyUnreferenced.has(name)) {
        continue
      }

      const parent = binding.path.parentPath
      if (parent?.isImportDeclaration() && parent.node.specifiers.length === 1) {
        parent.remove()
      } else {
        binding.path.remove()
      }

      removed = true
    }

    if (!removed) break
  }
}
