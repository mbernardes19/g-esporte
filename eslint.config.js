const globals = require("globals");
const pluginJs = require("@eslint/js");
const tseslint = require("typescript-eslint");
const pluginReact = require("eslint-plugin-react");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended")

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    },
    {
        languageOptions: {
            globals: globals.browser,
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ...pluginReact.configs.flat.recommended,
        rules: {
            ...pluginReact.configs.flat.recommended.rules,
            "react/react-in-jsx-scope": "off"
        },
        settings: {
            react: {
                version: "detect"
            },
        },
    },
    eslintPluginPrettierRecommended
];
