TODO
---
- codebase cleanup (get ready to put on GH)
  - move impl details to package/node_modules
  - find a nice place for generated code too
  - create cli wrapper
- handle relational columns
- start standard lib of cell renderers
- proper suspense/load/error boundaries
- editable cells
- filtering & sorting initial impl
- bugs
  - navigating btwn tables breaks telefunc
  - errors related to react streaming

NOTES
---
- Refactoring notes
  - Couldn't cleanly fit `generated` dir into `node_modules/.honcho/generated`
  - seems no easy way to re-export nested directories (import { ... } from 'honcho/generated/resources/table')
  - also seemed messy generating a tsconfig/package.json
  - for now it's easiest to generate it directly into user's project and git/eslint-ignore it
