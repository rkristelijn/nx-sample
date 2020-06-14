# Contributing to xn-sample

Loving this repo and want to get involved? Thanks! There are plenty of ways you can help.

Please take a moment to review this document in order to make the contribution process straightforward and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

## Core Ideas

As much as possible, we try to avoid adding configuration and flags. The purpose of this repo is to provide a full-stack Typescript solution that has simple, to the point examples.

## Submitting a Pull Request

Good pull requests, such as patches, improvements, and new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

Please **ask first** if somebody else is already working on this or the core developers think your feature is in-scope for Create React App. Generally always have a related issue with discussions for whatever you are including.

Please also provide a **test plan**, i.e. specify how you verified that your addition works.

## Principles

1. It should be easy to set up; We use [nx](https://nx.dev/angular) mono repo approach to keep things together
2. Code should be similar; We use [Angular](https://angular.io/) for the frontend and [NestJs](https://nestjs.com/) for the backend.
3. For everyone; Either the knowledge should be on the web (best practices and frameworks that you can learn) and/or there should be documentation together with the pull request in the `docs` folder.

- 3.1. Standards over Innovation; To keep it open, we use standard libs. Bring your innovation to libs contributions
- 3.2

4. Intend should be clear; create issue > create branch > work it > have it reviewed > merge
5. We keep it clean; no discussions on style needed because of [Prettier](https://prettier.io/), [commitlint](https://commitlint.js.org/#/) and [husky git hooks](https://www.npmjs.com/package/husky)

## Folder Structure of this repo

This is a `nx` monorepo, meaning it is divided into independent sub-packages.<br>

## Setting Up a Local Copy

<!-- todo: this is also in the main README -->

Prerequisites:

- node
- docker

to start:

- clone repo
- install: `npm i`
- database: `npm run db:up`
- frontend: `nx serve sample`
- backend: `nx serve api`

## Cutting a Release

No releases planned yet

## Using the issue tracker

The [issue tracker](https://github.com/rkristelijn/nx-sample/issues) is
the preferred channel for [bug reports](#bugs), [features requests](#features)
and [submitting pull requests](#pull-requests), but please respect the following
restrictions:

- Please **do not** use the issue tracker for personal support requests (use
  [Stack Overflow](https://stackoverflow.com/questions/tagged/nx-sample)).

- Please **do not** derail or troll issues. Keep the discussion on topic and
  respect the opinions of others.

- Please **do not** open issues or pull requests regarding libs used in this project. Take them to their own project.

<a name="bugs"></a>

## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `master` or development branch in the repository.

3. **Isolate the problem** &mdash; ideally create a [reduced test
   case](https://css-tricks.com/reduced-test-cases/) and a live example.

A good bug report shouldn't leave others needing to chase you up for more
information. Please try to be as detailed as possible in your report. What is
your environment? What steps will reproduce the issue? What browser(s) and OS
experience the problem? What would you expect to be the outcome? All these
details will help people to fix any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If
> suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case
>
> Any other information you want to share that is relevant to the issue being
> reported. This might include the lines of code that you have identified as
> causing the bug, and potential solutions (and your opinions on their
> merits).

<a name="features"></a>

## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of the project. It's up to _you_ to make a strong
case to convince the project's developers of the merits of this feature. Please
provide as much detail and context as possible.

<a name="pull-requests"></a>

## Pull requests

Good pull requests - patches, improvements, new features - are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code, porting to a different language),
otherwise you risk spending a lot of time working on something that the
project's developers might not want to merge into the project.

Please adhere to the coding conventions used throughout a project (indentation,
accurate comments, etc.) and any other requirements (such as test coverage).

Adhering to the following process is the best way to get your work
included in the project:

1. [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your
   fork, and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/nx-sample.git
   # Navigate to the newly cloned directory
   cd html5-boilerplate
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/rkristelijn/nx-sample.git
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout master
   git pull upstream master
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks. Please adhere to [conventinal commit](https://www.conventionalcommits.org/en/v1.0.0/) However husky will not let you 'break' this rule.
   Also you can squash commits when the PR is merged. Use Git's
   [interactive rebase](https://help.github.com/articles/about-git-rebase/)
   feature to tidy up your commits before making them public.

5. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream master
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
   with a clear title and description.

**IMPORTANT**: By submitting a patch, you agree to allow the project
owners to license your work under the terms of the [MIT License](LICENSE.txt).

# Resources

_Many thanks to [h5bp](https://github.com/h5bp/html5-boilerplate/blob/master/.github/CONTRIBUTING.md) for the inspiration with this contributing guide_
