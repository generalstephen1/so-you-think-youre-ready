module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended' // or 'plugin:ember/base'
  ],
  env: {
    browser: true
  },
  rules: {
    "parserOptions": {
        "ecmaVersion": 5,
        "sourceType": "script",
        "ecmaFeatures": {}
    },
    "rules": {
        "constructor-super": true,
        "no-case-declarations": true,
        "no-class-assign": true,
        "no-compare-neg-zero": true,
        "no-cond-assign": true,
        "no-console": true,
        "no-const-assign": true,
        "no-constant-condition": true,
        "no-control-regex": true,
        "no-debugger": true,
        "no-delete-var": true,
        "no-dupe-args": true,
        "no-dupe-class-members": true,
        "no-dupe-keys": true,
        "no-duplicate-case": true,
        "no-empty-character-class": true,
        "no-empty-pattern": true,
        "no-empty": true,
        "no-ex-assign": true,
        "no-extra-boolean-cast": true,
        "no-extra-semi": true,
        "no-fallthrough": true,
        "no-func-assign": true,
        "no-global-assign": true,
        "no-inner-declarations": true,
        "no-invalid-regexp": true,
        "no-irregular-whitespace": true,
        "no-mixed-spaces-and-tabs": true,
        "no-new-symbol": true,
        "no-obj-calls": true,
        "no-octal": true,
        "no-redeclare": true,
        "no-regex-spaces": true,
        "no-self-assign": true,
        "no-sparse-arrays": true,
        "no-this-before-super": true,
        "no-undef": true,
        "no-unexpected-multiline": true,
        "no-unreachable": true,
        "no-unsafe-finally": true,
        "no-unsafe-negation": true,
        "no-unused-labels": true,
        "no-unused-vars": true,
        "no-useless-escape": true,
        "require-yield": true,
        "use-isnan": true,
        "valid-typeof": true,
        "array-bracket-newline": true,
        "array-bracket-spacing": true,
        "camelcase": true,
        "capitalized-comments": true,
        "comma-dangle": true,
        "computed-property-spacing": true,
        "consistent-this": true,
        "consistent-return": true,
        "func-names": true,
        "id-length": true,
        "guard-for-in": true,
        "indent": true,
        "linebreak-style": true,
        "no-proto": true,
        "no-else-return": true,
        "no-undefined": true,
        "prefer-const": true,
        "prefer-spread": true,
        "sort-imports": true,
        "sort-vars": true
    },
    "env": {
        "browser": true,
        "mocha": false,
        "phantomjs": true,
        "es6": true
    }
  }
};
