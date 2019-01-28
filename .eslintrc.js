module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
 
  "env": { 
    "es6": true,
    "browser": true,
    "commonjs": true,
    "node": true, 
  },
 
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-process-env": 'off',
    'no-console': 'off',
    "indent": [
        "error",
        4
    ],
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    'vue/require-v-for-key': 'off',
    "vue/valid-v-for": 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
