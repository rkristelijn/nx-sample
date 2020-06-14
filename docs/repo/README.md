# About this repository

We enforce using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) using `husky` and `commitlint`. Also there is an enforced `reference` and `scope` configured in `commitlint.config.js` using these [rules](https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md).

## Template

`type(scope): subject #reference`

## Motivation

- **scope** - If the scope is there, the commit message can be so much shorter. It also makes you write what you do to this `scope`.
- **reference** - there should always be an issue; the reason for the change
- **case** - because github already has a preferences when merging, we would like to put the first letter uppercase but this conflicts with the convention. so we keep it lowercase

## Type

```js
[
  'build',
  'ci',
  'chore',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test',
];
```

## Examples

- `docs(repo): add mention of reference #5`
- `style(commitlint): use prettier #5`
- `ci(issue-branch): add config #4`
- `feat(db) add postgres and docker #1`

# References

- configuring commitlint and husky https://github.com/conventional-changelog/commitlint (`npm install --save-dev @commitlint/{config-conventional,cli}` and add `husky` to `package.json`)
- configure `references-empty` in commitlint: https://stackoverflow.com/questions/11365554/jira-issue-number-in-git-commit-message
- writing good commit messages https://chris.beams.io/posts/git-commit/
