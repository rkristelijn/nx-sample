# NX workspace

# Setting up from scratch

```bash
npx create-nx-workspace@latest

? Workspace name (e.g., org name)     myorg
? What to create in the new workspace angular-nest
? Application name                    sample
? Default stylesheet format           SASS
```

# End to end test

First start the backend: `nx service api`. Then in a separate sheel, start `nx e2e sample-e2e --watch`. You will see the browser executing the tests

# Add something to nx

```bash
nx list

>  NX  Installed plugins:

  @nrwl/angular (builders,schematics)
  @nrwl/cypress (builders,schematics)
  @nrwl/jest (builders,schematics)
  @nrwl/linter (builders)
  @nrwl/nest (schematics)
  @nrwl/node (builders,schematics)
  @nrwl/workspace (builders,schematics)


>  NX  Also available:

  @nrwl/bazel (schematics)
  @nrwl/express (builders,schematics)
  @nrwl/next (builders,schematics)
  @nrwl/nx-plugin (builders,schematics)
  @nrwl/react (builders,schematics)
  @nrwl/storybook (builders,schematics)
  @nrwl/web (builders,schematics)
```

# Resources

- nx tutorial https://nx.dev/angular/tutorial/01-create-application
