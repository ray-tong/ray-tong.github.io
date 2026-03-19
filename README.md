# AI Architect Portfolio — RTP Project (Ray Tong)

A high-end, professional showcase for an **AI Architect** specializing in agentic systems, advanced RAG architectures, and production-grade LLM workflows. This project serves as a technical portfolio to demonstrate expertise in building scalable, modern AI solutions.

## 🎯 Overview

This portfolio is designed to reflect an "AI Architect" persona. It focuses on technical depth, quantitative metrics, and interactive demonstrations of agentic behaviors. Built with a "dark mode first" aesthetic, it utilizes cutting-edge web technologies to ensure a performant and visually striking experience for visitors and potential collaborators.

## 🛠 Tech Stack

The application leverages the latest stable versions of industry-standard tools:

- **[Next.js](https://nextjs.org/) 16.2.0 (App Router)** — Modern React framework for high-performance web applications.
- **[Tailwind CSS](https://tailwindcss.com/) 4** — Utility-first CSS framework using new glow effects, advanced animations, and a simplified configuration engine.
- **[TypeScript](https://www.typescriptlang.org/)** — Ensuring type-safe development and a robust codebase.
- **[Lucide React](https://lucide.dev/)** — A clean and consistent icon set for professional UI design.

## 🏗 Architecture Highlights

### Static Site Generation (SSG)

To achieve maximum performance and zero-cost hosting, the project is configured for **Static Export**. All pages are pre-rendered at build time, allowing the site to be hosted directly on **GitHub Pages**.

**Key Config (`next.config.ts`):**
- `output: "export"`: Generates a static `out/` directory.
- `images.unoptimized: true`: Ensures images work correctly in a static environment.

### Component-Based Design

The codebase follows a modular architecture, promoting reusability and clean separation of concerns:

- **`src/app/`**: Contains the App Router structure, global styles, and the main entry point.
- **`src/components/`**: House reusable UI components (e.g., `AgentDemo`, `ProjectCards`).
- **`AgentDemo` Component**: An interactive demonstration of multi-agent workflows, simulating task decomposition, tool calls, and result synthesis in real-time.

### CI/CD Pipeline

Automated deployment is handled via **GitHub Actions** (`.github/workflows/deploy.yml`). On every push to the `main` branch, the workflow:
1. Sets up the Node.js environment.
2. Installs dependencies and runs the build command.
3. Exports the static site to the `out/` directory.
4. Deploys the content to the `gh-pages` branch for hosting.

## 📁 Project Structure

```text
ray-tong.github.io/
├── .github/workflows/      # CI/CD: GitHub Actions (deploy.yml)
├── public/                 # Static assets (images, logos, favicon)
├── src/
│   ├── app/                # Next.js App Router (layouts, main page, globals)
│   │   ├── layout.tsx      # Root layout and metadata
│   │   ├── page.tsx        # Homepage (Portfolio sections)
│   │   └── globals.css     # Global styles & Tailwind 4 imports
│   └── components/         # Reusable UI components
│       └── AgentDemo.tsx   # Multi-agent workflow simulation
├── next.config.ts          # Next.js configuration (SSG setup)
├── package.json            # Scripts and dependencies
├── tailwind.config.ts      # Tailwind CSS customization
└── README.md               # Application Architecture Documentation
```

## 🚀 Development Workflow

### Local Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run in development mode:**
   ```bash
   npm run dev
   ```
   Access the app at [http://localhost:3000](http://localhost:3000).

### Build & Export

To generate the static site locally:
```bash
npm run build
```
The static files will be located in the `out/` directory.

### Deployment

Deployment is automated via GitHub Actions. Simply push your changes to the `main` branch to trigger the production build and update the live site on GitHub Pages.

---

**Architect:** [Ray Tong](https://github.com/ray-tong)  
**Project:** RTP (Ray Tong Portfolio)  
**Status:** Production Ready
