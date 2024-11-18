import globals from "globals";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,ts}"]},
  {languageOptions: { globals: globals.node }},
  ...tseslint.configs.recommended,
];