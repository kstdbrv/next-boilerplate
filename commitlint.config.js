module.exports = { extends: ['@commitlint/config-conventional'] }

// in case you want jira

// module.exports = {
//   plugins: ['commitlint-plugin-jira-rules'],
//   extends: ['jira'],
//   rules: {
//     'jira-task-id-project-key': [2, 'always', 'RB'],
//   },
// }

// Do not forget to add devDependencies

// "devDependencies": {
// "commitlint-config-jira": "^1.5.1",
// "commitlint-plugin-jira-rules": "^1.5.1",
//  ///////
// }
