module.exports = {
  root: true,
  plugins: ['json'],

  env: {
    es6: true,
    jasmine: true,
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['standard', 'plugin:react/recommended'],
  plugins: ['react', 'jest'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  // custom rules
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'space-before-function-paren': [
      'warn',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'ignore',
      },
    ],
    'no-unused-vars': 'warn',
    // Disable 'indent' rule so it doesn"t confkit with Prettier
    indent: 'off',
  },
}
