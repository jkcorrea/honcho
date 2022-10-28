# honcho.js

> This is a very early prototype. APIs, UI, and basically everything **will** break *frequently*.

Honcho.js is an opinionated but overridable CRUD admin interface for your SQL-based app (currently supporting only what [Prisma](https://www.prisma.io/docs/reference/database-reference/supported-databases) does).

The design goals for Honcho are:

- Sensible out-of-the-box experience
  - It shouldn't take more than 5 minutes, and 5 clicks to go from nothing to a "pretty good" admin dashboard for your app
  - Column types, cell components, filtering, sorting, search, etc should all just work & with sensible defaults (`DateTime` fields should print formatted dates, relational columns should link to the corresponding table, etc)
- Overridable
  - While sensible defaults are a good start, we can't capture every use case.
  - Where possible, users should be able to override sections with their own custom code
  - This is highly TBD, but likely candidates are:
    1. Cells (write custom react components to render different cell types)
    1. Resolvers (run your own queries or merge other datasources into a table)
    1. Detail pages (when clicking a row to view it in detail)
- Open-source & Ejectable
  - Users should be able to "eject" the project at any time & have a modern, well-typed codebase from which they can continue hacking away should overrides not give enough flexibility.
