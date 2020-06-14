module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'references-empty': [2, 'never'],
    'scope-empty': [2, 'never'],
    'header-case': [2, 'never', 'sentence-case'],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['#'],
    },
  },
};
