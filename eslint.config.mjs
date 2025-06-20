import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
// import { rule } from "postcss/lib/postcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // "import/no-anonymous-default-export": [
      //   "error",
      //   {
      //     allowArray: true,
      //     allowArrowFunction: true,
      //     allowAnonymousClass: true,
      //     allowAnonymousFunction: true,
      //     allowCallExpression: true,
      //     allowLiteral: true,
      //     allowObject: true,
      //   },
      // ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off"
    }
  }
];

export default eslintConfig;
