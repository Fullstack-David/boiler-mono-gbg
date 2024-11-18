import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.node }},
  {extends: ["eslint:recommended", "plugin:react/recommended"]},
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];