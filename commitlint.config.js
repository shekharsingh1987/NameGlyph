import conventionalConfig from '@commitlint/config-conventional';

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    ...conventionalConfig.rules,
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'breaking',
      ],
    ],
    'scope-case': [2, 'always', 'kebab-case'],
    'subject-case': [2, 'always', 'sentence-case'],
    'body-max-line-length': [2, 'always', 100],
  },
}; 