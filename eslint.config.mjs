import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});


const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "playwright-report/**",
      "**/trace/**",
      "**/dist/**",
      "**/build/**",
      "**/*.min.js",
      // Third-party components - locked and read-only per standards
      "src/components/ui/**",
      "src/components/magicui/**", 
      "src/components/animate-ui/**",
      // ReactBits components (UpperCase files)
      "src/components/[A-Z]*.tsx"
    ]
  }
];

export default eslintConfig;
