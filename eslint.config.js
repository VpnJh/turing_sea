import js from "@eslint/js";
import configPrettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";
import { defineFlatConfig } from "eslint-define-config";
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
export default defineFlatConfig([
  {
    ...js.configs.recommended,
    ignores: [
      "**/.*",
      "dist/*",
      "public/*",
      "src/assets/**",
      "src/**/iconfont/**"
    ],
    languageOptions: {
      globals: {
        // index.d.ts
        RefType: "readonly",
        EmitType: "readonly",
        TargetContext: "readonly",
        ComponentRef: "readonly",
        ElRef: "readonly",
        ForDataType: "readonly",
        AnyFunction: "readonly",
        PropType: "readonly",
        Writable: "readonly",
        Nullable: "readonly",
        NonNullable: "readonly",
        Recordable: "readonly",
        ReadonlyRecordable: "readonly",
        Indexable: "readonly",
        DeepPartial: "readonly",
        Without: "readonly",
        Exclusive: "readonly",
        TimeoutHandle: "readonly",
        IntervalHandle: "readonly",
        Effect: "readonly",
        ChangeEvent: "readonly",
        WheelEvent: "readonly",
        ImportMetaEnv: "readonly",
        Fn: "readonly",
        PromiseFn: "readonly",
        ComponentElRef: "readonly",
        parseInt: "readonly",
        parseFloat: "readonly"
      }
    },
    plugins: {
      prettier: pluginPrettier
    },
    rules: {
      ...configPrettier.rules,
      ...pluginPrettier.configs.recommended.rules,
      "no-debugger": "off",
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_"
        }
      ],
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto"
        }
      ]
    }
  },
  // {
  //   name: 'react-eslint',
  //   files: ['**/*.{jsx}'],
  //   plugins: {
  //     react: reactPlugin,
  //     'react-hooks': reactHooksPlugin,
  //   },
  //   languageOptions: {
  //     ...reactPlugin.configs.recommended.languageOptions,
  //   },
  //   rules: {
  //     ...reactPlugin.configs.recommended.rules,
  //     'react/react-in-jsx-scope': 0,
  //   },
  //   settings: {
  //     react: {
  //       // 需要显示安装 react
  //       version: 'detect',
  //     },
  //   },
  // }
]);
