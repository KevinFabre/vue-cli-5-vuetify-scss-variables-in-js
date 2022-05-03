> Demo for fixing `SassError: This file is already being loaded.`

https://stackoverflow.com/q/71709928/6277151

Components must avoid importing files that are already imported in the global variables stylesheet (`src/styles/variables.scss`). This was the case with `app.module.scss` (loaded in `src/styles/variables.scss` and in `src/components/HelloWorld.vue`), causing the error about the file being loaded twice.

One solution is to move the color definitions from `app.module.scss` into its own file, and import that in `variables.scss` instead of `app.module.scss`. Then, components could import `app.mdoule.scss` without running into the original problem.
