module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@next/next'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'nextjs',
    'prettier/@typescript-eslint'
  ],
  env: {
    node: true
  },
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx', '.ts'] }
    ]
  },
  globals: {
    JSX: 'readonly',
    React: 'readonly'
  }
};
