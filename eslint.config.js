import eslintPluginAstro from "eslint-plugin-astro";
import typescriptParser from "@typescript-eslint/parser";

export default [
  ...eslintPluginAstro.configs["flat/recommended"],
  {
    files: ["**/*.{js,jsx,astro}"],
    rules: {
      "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    },
  },
  {
    ignores: [
      "dist",
      "node_modules",
      ".github",
      "types.generated.d.ts",
      ".astro",
    ],
  },
];
