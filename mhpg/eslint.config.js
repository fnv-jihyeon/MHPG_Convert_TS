import { defineConfig } from 'eslint-define-config'

export default defineConfig({
  root: true,
  env: { 
    browser: true, 
    es2021: true 
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    semi: ['error', 'naver'],
    quotes: ['error', 'single'],
    'vue/multi-word-component-names': 'off'
  }
})