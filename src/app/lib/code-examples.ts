/**
 * Utility functions for creating code examples without repetition
 * This replaces the need for manual CodeBlock components everywhere
 */

export interface CodeExample {
  language: string;
  code: string;
  title?: string;
}

/**
 * Create a single code example
 */
export function createCodeExample(
  code: string, 
  language: string = "tsx", 
  title?: string
): CodeExample {
  return { code: code.trim(), language, title };
}

/**
 * Create multiple code examples from tuples
 */
export function createCodeExamples(...examples: Array<[string, string, string?]>): CodeExample[] {
  return examples.map(([code, language, title]) => createCodeExample(code, language, title));
}

/**
 * Common code examples for buttons
 */
export const buttonExamples = {
  basic: (className: string, children: string) => createCodeExample(
    `<button className="${className}">
  ${children}
</button>`,
    "html",
    "HTML"
  ),

  react: (className: string, children: string) => createCodeExample(
    `<Button className="${className}">
  ${children}
</Button>`,
    "tsx",
    "React"
  ),

  css: (selector: string, styles: string) => createCodeExample(
    `.${selector} {
${styles.split('\n').map(line => `  ${line}`).join('\n')}
}`,
    "css",
    "CSS"
  ),

  tailwind: (className: string) => createCodeExample(
    `// Tailwind classes used:
${className.split(' ').map(c => `// ${c}`).join('\n')}

<button className="${className}">
  Button Text
</button>`,
    "tsx",
    "Tailwind"
  )
};

/**
 * Generate common button code examples automatically
 */
export function generateButtonExamples(
  className: string,
  children: string = "Button",
  cssStyles?: string
): CodeExample[] {
  const examples = [
    buttonExamples.basic(className, children),
    buttonExamples.react(className, children)
  ];

  if (cssStyles) {
    examples.push(buttonExamples.css("btn-custom", cssStyles));
  }

  return examples;
}

/**
 * Generate installation command for common libraries
 */
export function getInstallCommand(library: "tailwind" | "shadcn" | "magicui" | "animate-ui"): string {
  switch (library) {
    case "tailwind":
      return "npm install tailwindcss";
    case "shadcn":
      return "npx shadcn-ui@latest add button";
    case "magicui":
      return "pnpm dlx shadcn@latest add https://magicui.design/r/[component].json";
    case "animate-ui":
      return "npx shadcn@canary add https://animate-ui.com/r/[component].json";
    default:
      return "";
  }
}

/**
 * Common CSS utility functions
 */
export const cssUtils = {
  transition: "transition-all duration-300",
  focus: "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
  hover: "hover:bg-blue-700",
  rounded: "rounded-lg",
  padding: "px-6 py-3",
  font: "font-medium"
};

/**
 * Generate common button CSS classes
 */
export function generateButtonClasses(variant: "primary" | "secondary" | "outline" = "primary"): string {
  const base = `${cssUtils.padding} ${cssUtils.font} ${cssUtils.rounded} ${cssUtils.transition} ${cssUtils.focus}`;
  
  switch (variant) {
    case "primary":
      return `${base} bg-blue-600 text-white hover:bg-blue-700`;
    case "secondary":
      return `${base} bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300`;
    case "outline":
      return `${base} border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white`;
    default:
      return base;
  }
}