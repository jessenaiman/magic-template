### **Project Style Guide: Best Practices**

This guide outlines the core principles for maintaining code quality, security, and consistency in this project.

---

## **1. TypeScript and Code Quality** ✨

We write clean, type-safe, and maintainable code. Our goal is to catch errors during development, not in production.

* **Embrace Strong Typing:** Always use specific types over `any`. This ensures predictability and leverages TypeScript's full power to prevent bugs.
    * **Example (`components/ui/button.tsx`):** Props are strongly typed using `React.ButtonHTMLAttributes<HTMLButtonElement>` and `VariantProps<typeof buttonVariants>`, which provides excellent autocompletion and error checking.
* **Trust the Type System:** Avoid using `@ts-ignore` or `@ts-expect-error`. If you encounter a type error, address the underlying issue rather than suppressing the warning.
    * **Example (`next.config.ts`):** The configuration is fully typed and validated without any type suppressions, leading to a stable build process.
* **Automate Quality Checks:** Integrate linting, testing, and formatting into the development workflow. This maintains a consistent style and catches issues early.
    * **Example (`.github/workflows/`):** The CI/CD workflows automatically validate code on push, ensuring that standards are met before merging.

---

## **2. Security First** 🛡️

Security is a fundamental part of our development process, not an afterthought. We protect our users and our application by adhering to proven security principles.

* **Secure Secrets with Environment Variables:** Never hardcode API keys, credentials, or other secrets. Use environment variables and provide an example file for guidance.
    * **Example (`.env.example` & `.gitignore`):** The `.env.example` file provides a template for required secrets, and the `.gitignore` file correctly prevents `.env` files from ever being committed to version control.
* **Always Validate User Input:** Treat all data coming from users as untrusted. Sanitize and validate it on both the client and server sides to prevent common vulnerabilities like XSS and SQL injection.
    * **Example (`app/templates/login/page.tsx`):** The login form is structured to easily integrate validation libraries, providing a secure foundation for handling user credentials.
* **Leverage Framework Security:** Utilize the built-in security features of your framework (e.g., Next.js). This includes protections against CSRF, XSS, and other common attacks.

---

## **3. Component Design and Accessibility** ♿

We build components that are reusable, robust, and accessible to everyone.

* **Build with Accessibility in Mind:** Use semantic HTML and ARIA attributes to ensure your components are usable by people with disabilities. Building on accessible primitives is a great way to start.
    * **Example (`components/ui/accordion.tsx`):** This component is built using Radix UI, which provides accessible accordion functionality out of the box, including proper keyboard navigation and ARIA roles.
* **Keep Dependencies Current:** Regularly update your project's dependencies to benefit from the latest features, performance improvements, and, most importantly, security patches.
    * **Example (`package.json`):** The project maintains up-to-date versions of key libraries like React and Next.js, which is crucial for a secure and modern application.
* **Ensure Consistent Rendering (SSR):** Write components that render identically on the server and the client to avoid hydration errors. This leads to a smoother user experience and better performance.
    * **Example (`components/magicui/animated-theme-provider.tsx`):** This component correctly handles theme changes in a server-side rendered environment without causing hydration mismatches.

By following these principles, we can continue to build a high-quality, secure, and user-friendly application. Let me know if you'd like to explore any of these areas in more detail!