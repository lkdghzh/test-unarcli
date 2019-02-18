// http://eslint.org/docs/user-guide/configuring
// https://vue-loader.vuejs.org/zh/guide/linting.html#eslint

module.exports = {
  root: true,
  extends: [
    "plugin:vue/essential"
  ],
  rules: {
    'indent': ["error", 2],
    'no-debugger': 'error',
    'no-console': 'error',
  }
}
