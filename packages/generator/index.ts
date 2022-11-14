import path from 'path'

import { Project } from 'ts-morph'

import { generatorHandler } from '@prisma/generator-helper'

import { generateBarrelFile, generateResourceFile } from './generators'

generatorHandler({
  onManifest() {
    return {
      version: '0.1.0',
      prettyName: 'Honcho',
      defaultOutput: 'honcho',
    }
  },
  onGenerate(options) {
    const project = new Project()

    const models = options.dmmf.datamodel.models
    const outDir = options.generator.output!.value

    // const { schemaPath } = options
    // const clientPath = options.otherGenerators.find((each) => each.provider.value === 'prisma-client-js')!.output!.value

    // const results = configSchema.safeParse(options.generator.config)
    // if (!results.success)
    //   throw new Error('Incorrect config provided. Please check the values you provided and try again.')
    // const config = results.data
    // const prismaOptions: PrismaOptions = {
    //   clientPath,
    //   outputPath,
    //   schemaPath,
    // }

    const indexFile = project.createSourceFile(path.join(outDir, 'index.ts'), {}, { overwrite: true })
    generateBarrelFile(models, indexFile)

    for (const model of models) {
      const file = project.createSourceFile(
        path.join(outDir, 'resources', `${model.name}.tsx`),
        {},
        { overwrite: true },
      )
      generateResourceFile(model, file)
    }

    return project.save()
  },
})
