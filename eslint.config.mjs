import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'prettier/prettier': [
        'warn',
        {
          printWidth: 120,
          trailingComma: 'es5',
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          bracketSpacing: true,
          jsxSingleQuote: false,
          bracketSameLine: false,
          arrowParens: 'always',
          endOfLine: 'auto',
        },
      ],
    },
    ignores: ['**/node_modules/', '**/dist/'],
  },
];
