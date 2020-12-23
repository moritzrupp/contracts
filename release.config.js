module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ['@semantic-release/npm', { npmPublish: false }],
    '@semantic-release/git',
    [
      '@semantic-release/github',
      {
        labels: ['type:task', 'status:confirmed', 'prio:high'],
        releasedLabels: ['status:resolved'],
        assignees: ['moritzrupp']
      }
    ]
  ]
};
