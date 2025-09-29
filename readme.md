# Shane Simpson Portfolio

This is a Next.js 15 application built with TypeScript, Tailwind CSS, and shadcn/ui, serving as a portfolio website.

## Features

*   **Modern UI:** Built with shadcn/ui components for a sleek and accessible user interface.
*   **Responsive Design:** Utilizes Tailwind CSS for a mobile-first and responsive layout.
*   **Theme Toggling:** Includes a theme toggle for light/dark mode functionality.
*   **Smooth Scrolling:** Integrated Lenis for smooth scrolling experiences.
*   **Collapsible Sections:** Interactive collapsible areas for content organization.
*   **Dynamic Studio Strip:** A component to display a strip of studios or projects.

## Technologies Used

*   **Next.js 15 (App Router):** React framework for building performant web applications.
*   **React 19:** JavaScript library for building user interfaces.
*   **TypeScript:** Strongly typed superset of JavaScript for enhanced code quality.
*   **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
*   **shadcn/ui:** Reusable UI components built with Radix UI and Tailwind CSS.
*   **Lenis:** A smooth scrolling library.

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://git.biohazardvfx.com/Nicholai/shane-simpson.git
    cd shane-simpson
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or yarn install
    # or pnpm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or yarn dev
    # or pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
.
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router (layout, pages, global styles)
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/         # Reusable UI components
│   │   ├── collapsible-area.tsx
│   │   ├── studios-strip.tsx
│   │   ├── theme-toggle.tsx
│   │   ├── footer/
│   │   │   └── site-footer.tsx
│   │   ├── providers/      # Context providers
│   │   │   ├── lenis-root.tsx
│   │   │   └── theme-provider.tsx
│   │   └── ui/             # shadcn/ui components
│   │       ├── aspect-ratio.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── scroll-area.tsx
│   │       ├── separator.tsx
│   │       └── tabs.tsx
│   ├── lib/                # Utility functions and configurations
│   │   ├── links.ts
│   │   └── utils.ts
│   └── types/              # TypeScript custom type definitions
│       └── css.d.ts
├── .gitignore              # Git ignore file
├── components.json         # shadcn/ui configuration
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── postcss.config.mjs      # PostCSS configuration
└── tsconfig.json           # TypeScript configuration
