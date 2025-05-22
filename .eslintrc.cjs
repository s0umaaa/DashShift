module.exports = {
    root: true,
    env: { browser: true, es2024: true },
    parser: '@typescript-eslint/parser',
    parserOptions: { project: ['./tsconfig.json'] },
    extends: [
      'airbnb',
      'airbnb-typescript',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'prettier'
    ],
    plugins: ['react', '@typescript-eslint'],
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/require-default-props': 'off'
    }
  }
  