import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import { defineFlatConfig } from "eslint-define-config";
import configPrettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier/recommended";
export default defineFlatConfig([
  {
    ignores: ["**/node_modules", "**/assets", "**/public", "**/bin"],
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: true
      }
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    name: "global-config",
    plugins: {
      "react-hooks": pluginReactHooks
    },
    rules: {
      ...configPrettier.rules
    }
  },
  pluginPrettier
]);
