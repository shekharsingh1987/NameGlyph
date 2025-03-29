export default {
  types: [
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'chore', section: 'Maintenance' },
    { type: 'docs', section: 'Documentation' },
    { type: 'style', section: 'Styling' },
    { type: 'refactor', section: 'Refactoring' },
    { type: 'perf', section: 'Performance' },
    { type: 'test', section: 'Testing' },
    { type: 'build', section: 'Build System' },
    { type: 'ci', section: 'CI/CD' },
    { type: 'breaking', section: 'Breaking Changes' },
  ],
  commitUrlFormat: '{{host}}/{{owner}}/{{repository}}/commit/{{hash}}',
  compareUrlFormat:
    '{{host}}/{{owner}}/{{repository}}/compare/{{previousTag}}...{{currentTag}}',
  issueUrlFormat: '{{host}}/{{owner}}/{{repository}}/issues/{{id}}',
  userUrlFormat: '{{host}}/{{user}}',
}; 