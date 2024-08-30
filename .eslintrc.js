module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ],
  plugins: ['@typescript-eslint', 'react'],
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    // Place to specify ESLint rules - can be used to overwrite rules specified from the extended configs
    '@typescript-eslint/no-unused-vars': ['error'],
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    'prettier/prettier': 'error', // Make Prettier errors show up as ESLint errors
  },
};
