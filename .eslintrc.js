// http://eslint.org/docs/user-guide/configuring
// https://vue-loader.vuejs.org/zh/guide/linting.html#eslint

module.exports = {
  root: true,
  extends: [
    "plugin:vue/essential"
  ],
  rules: {
     //'semi': ['error', 'never'],
    'indent': ["error", 2],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  }
}
