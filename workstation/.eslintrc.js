module.exports = {
  root: true,

  env: {
    es6: true,
    node: true
  },

  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "prettier/vue",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],

  parserOptions: {
    ecmaVersion: 2020
  },

  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "@typescript-eslint/no-explicit-any": ["off"],
    "camelcase": ["error", {"allow": ["aa_bb"]}]
  },

  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ]
}
