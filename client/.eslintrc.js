module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/errors',
    'prettier',
    'prettier/react',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'jsx-a11y'],
  rules: {
    'no-console': 1,
    'no-use-before-define': 'off',
    'prettier/prettier': 'warn',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'import/extensions': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        controlComponents: ['Field'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
