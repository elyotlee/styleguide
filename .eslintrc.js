module.exports = {
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    serviceworker: true
  },
  extends: 'standard', // do not modify this option
  plugins: [
    "html"
  ],
  globals: {
    _: false
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
