module.exports = {
    "extends": "standard",
    // add your custom rules here
    plugins: ["json"],
    env: {
      es6: true,
      jasmine: true,
      jest: true,
    },
    rules: {
      // allow async-await
      'generator-star-spacing': 'off',
      // allow debugger during development
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'comma-dangle': [ 'error', 'always-multiline' ],
      'space-before-function-paren': [ 'warn', {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'ignore',
      } ],
    }
};
