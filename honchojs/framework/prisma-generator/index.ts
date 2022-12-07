import path from 'path'

import fs from 'fs-extra'
import { Project } from 'ts-morph'

import { generatorHandler } from '@prisma/generator-helper'

import { GENERATED_CODE_DIR, GENERATED_RESOURCES_DIR } from '../constants'
import { generateResourceFile } from './generate-resources'

generatorHandler({
  onManifest() {
    return {
      version: '0.1.0',
      prettyName: 'Honcho',
      defaultOutput: 'honcho',
    }
  },
  async onGenerate(options) {
    // Ensure node_modules/.honcho/generated exists & is empty
    await fs.emptydir(GENERATED_CODE_DIR)

    const project = new Project()
    const models = options.dmmf.datamodel.models

    for (const model of models) {
      const file = project.createSourceFile(
        path.join(GENERATED_RESOURCES_DIR, `${model.name}.tsx`),
        {},
        { overwrite: true },
      )
      generateResourceFile(model, file)
    }

    // const indexFile = project.createSourceFile(path.join(GENERATED_RESOURCES_DIR, 'index.ts'), {}, { overwrite: true })
    // generateResourcesIndex(models, indexFile)

    // NOTE: we need to .save() the source files so that we can analyze the exports with ts-morph in `buildMergedResources`
    await project.save()
  },
})
