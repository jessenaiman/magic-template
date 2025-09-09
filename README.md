# Testing

This monorepo uses a modern, minimal test stack:

- **Unit:** [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) (jsdom)
- **E2E/Smoke/Links:** [Playwright](https://playwright.dev/)

## Quick Start

1. Add tests in `apps/web/tests/smoke/` (smoke) and `apps/web/tests/links/` (link checks).
2. Run unit tests:

    ```bash
    pnpm --filter apps/web test:unit
    ```

3. Run smoke tests (site must be running):

    ```bash
    PLAYWRIGHT_BASE_URL=http://localhost:3000 pnpm --filter apps/web test:smoke
    ```

4. Run link tests:

    ```bash
    PLAYWRIGHT_BASE_URL=http://localhost:3000 pnpm --filter apps/web test:links
    ```

## CI

See `.github/workflows/ci.yml` for the full pipeline: build → start → smoke → links.

## Shared Config

Test config is centralized in `packages/test` for easy reuse across apps.
# Web Design Workshop

**An interactive component gallery to accelerate creative development and bridge the gap between design and implementation.**

---

<br/>

**[Link to Live Demo]** <br/>

## 👋 Welcome!

Whether you're a seasoned developer, a designer, a manager, or just starting your coding journey, welcome! This project was born from a simple idea: to make communicating web design concepts easier, faster, and more interactive.

Often, countless hours are lost in back-and-forth revisions because static mockups and verbal descriptions can't capture the feeling of a live, interactive component. This workshop provides a collection of tangible, working examples that anyone can see, touch, and customize. It aims to be a common ground where developers, designers, and stakeholders can collaborate more effectively and bring ideas to life with less friction.

---

## 🚀 I'm Available for Hire!

I'm passionate about building beautiful, functional, and user-friendly web experiences. This project is a demonstration of my skills in front-end development, component architecture, and creating polished UI/UX.

**I am currently seeking new full-time and contract opportunities.** If you're looking for a developer who cares deeply about the craft and can bridge the gap between technical and creative teams, I'd love to connect.

-   **Email:** [your-email@example.com]
-   **LinkedIn:** [your-linkedin-url]
-   **Portfolio:** [your-portfolio-url]

---

## ✨ Features

-   **Extensive Component Library:** A wide variety of interactive components, from animations and backgrounds to UI effects and text elements.
-   **Live Customization:** Tweak parameters for many components in real-time to see how they look and feel.
-   **Modern Tech Stack:** Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion for a high-performance, developer-friendly experience.
-   **Built for Collaboration:** A tool designed to be shared across teams to get everyone on the same page.

---

## 💻 Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animation:** [Framer Motion](https://www.framer.com/motion/)
-   **UI:** [shadcn/ui](https://ui.shadcn.com/)

---

## 🤝 Let's Build Together: Contributing & Collaboration

### Development Issues

If you encounter build or development issues, check the available prompt files in `.github/prompts/`:

- **`fix-import-paths.prompt.md`** - For resolving Turborepo import path and module resolution issues

These prompts are designed to be used with AI coding agents for systematic problem resolution.

### Contributing

Contributions are always welcome! Here's how you can get involved:

This project is just getting started, and contributions are what make the open-source community such an amazing place to learn and create. I warmly welcome contributors of all skill levels.

### How You Can Help

Not sure where to start? Here are a few ideas for contributions that would make a huge impact (from easiest to more involved):

-   🎨 **Add a New Example:** Find a cool animation or component online? Try recreating it and adding it to the gallery.
-   📝 **Improve Documentation:** See a typo or an explanation that could be clearer? Fix it!
-   💾 **Implement a "Save Feature":** Add a button to the customization panel that allows users to save or export the code for their tweaked component.
-   🗂️ **Propose a New Category:** Think of a category of components we're missing? Open an issue to suggest it and help build it out.

If you're interested, please feel free to open an issue or submit a pull request!

Additionally, I'm always open to collaborating on other open-source projects. If you have an idea you're passionate about, please don't hesitate to reach out.

---

## 🙏 Acknowledgements & Inspiration

This project stands on the shoulders of giants. A huge thank you to the creators of these incredible open-source libraries, which were a major source of inspiration and provided a foundation for many of the components in this workshop. Please check out their amazing work:

-   **Magic UI:** Created by **[@dillionverma](https://twitter.com/dillionverma)**. An incredible collection of magical components.
    -   [Website](https://magicui.design/)
    -   [GitHub](https://github.com/magicui/magicui)
-   **Animate UI:** Created by **[@satnaing](https://twitter.com/satnaing)**. Beautifully crafted, customizable animations.
    -   [Website](https://animate-ui.vercel.app/)
    -   [GitHub](https://github.com/satnaing/animate-ui)
-   **React Bits:** Created by **[@goshacmd](https://twitter.com/goshacmd)**. A stunning collection of advanced React + Framer Motion components.
    -   [Website](https://react-bits.com/)
    -   [GitHub](https://github.com/goshacmd/react-bits)

---

## 🛠️ Getting Started Locally

Want to run this project on your own machine? Follow these simple steps.

1.  **Clone the repository:**
    ```bash
    git clone [your-repo-url]
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd [your-repo-name]
    ```
3.  **Install dependencies (using pnpm):**
    ```bash
    pnpm install
    ```
4.  **Run the development server:**
    ```bash
    pnpm dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## A Note on Third-Party Components

This project proudly uses components from the following open-source libraries:

-   [shadcn/ui](https://ui.shadcn.com/)
-   [Magic UI](https://magicui.design/)
-   [Animate UI](https://animate-ui.vercel.app/)

These components are distributed under the **MIT License**, which grants you the freedom to use, modify, and distribute the code.

Modify these at your own risk, they all depend on each other and will break in unmagical ways if they are altered in any way.

You are encouraged to adapt the components to meet the needs of your own projects. The only legal requirement is that the original copyright notice and license from these libraries must be preserved if you copy, modify, or distribute their source code. Misrepresenting the origin of the code or removing the required license attribution is prohibited.

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
