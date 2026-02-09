// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [...compat.extends('next/core-web-vitals', 'next/typescript'), {
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    'no-console': 'warn',
  },
}, ...storybook.configs["flat/recommended"]];
