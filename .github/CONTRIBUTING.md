# Vue Material Contributing Guide

Before submitting your contribution please read the guidelines.

- [Issue Reporting Guidelines](#issue-reporting-guidelines)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Development Setup](#development-setup)

## Issue Reporting Guidelines

- Do not create questions. The issue list is exclusively for reports, bugs and feature requests. Use the [Discord server]( https://discord.gg/vuematerial) instead.

- Always search for your issue first. It may have already been answered, planned or fixed in some branch. New components and features will be planned on [Milestones](https://github.com/vuematerial/vue-material/milestones) or on [Projects](https://github.com/vuematerial/vue-material/projects).

- Only create issues for the newest version.

- Create a declarative title and describe clearly the steps necessary to reproduce the issue. If an issue labeled "need repro" receives no further input from the issue author for more than 3 days, it will be closed.

- If you want to show your code please use [Codepen](http://codepen.io/pen/) or [JSFiddle](https://jsfiddle.net/). You could start with [this template](https://codesandbox.io/s/github/vuematerial/examples/tree/master/examples/quick-start).

- In case you found a solution by yourself try to explain how you fixed it. It could be useful for somebody else. :)

## Pull Request Guidelines

- The `master` branch is basically just a snapshot of the latest stable release. All development should be done in dedicated branches. **Do not submit PRs against the `master` branch.**

- Work in the `src` or `docs` folder and **DO NOT** add `dist` in the commits.

- Make small commits as you work on the PR. They will be automatically squashed before merging.

- Provide convincing reason to add a new feature. Ideally you should open a suggestion/request issue first and have it greenlighted before working on it.

- If fixing a bug:
  - If you are resolving a special issue, add the GitHub ID to your commit. E.g. `(fix something really ugly #xxx)`
  - Provide detailed description of the bug in the PR.

## Development Setup

You will need [Node.js](http://nodejs.org) **version 6+**

After cloning the repo, run:

``` bash
$ yarn install
```

### Commonly used YARN scripts

``` bash
### Start dev server with hot reload
$ yarn dev

### Check for errors
$ yarn lint

### Build everything
$ yarn build

### Build docs only
$ yarn build:docs

### Build lib only
$ yarn build:lib
```

The other tasks on package.json **SHOULD NOT** be executed.
