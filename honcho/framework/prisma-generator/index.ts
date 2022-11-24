import path from 'path'

import { Project } from 'ts-morph'

import { generatorHandler } from '@prisma/generator-helper'

import { generateResourceFile, generateResourcesIndex } from './build-resource-dir'

generatorHandler({
  onManifest() {
    return {
      version: '0.1.0',
      prettyName: 'Honcho',
      defaultOutput: 'honcho',
    }
  },
  onGenerate(options) {
    const root = process.cwd()
    const outDir = path.join(root, 'node_modules/.honcho/generated')
    console.log(root, outDir)
    const project = new Project()
    const models = options.dmmf.datamodel.models

    for (const model of models) {
      const file = project.createSourceFile(path.join(outDir, `${model.name}.tsx`), {}, { overwrite: true })
      generateResourceFile(model, file)
    }

    const indexFile = project.createSourceFile(path.join(outDir, 'index.ts'), {}, { overwrite: true })
    generateResourcesIndex(models, indexFile)

    return project.save()
  },
})
