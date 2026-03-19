# AI Architect Portfolio

A high-end, modern portfolio showcase for an experienced AI Architect specializing in agentic systems, advanced RAG architectures, and production-ready LLM workflows.

## 🎯 Overview

This portfolio demonstrates expertise in building scalable AI systems through interactive demos, architectural case studies, and thought leadership content. Built with cutting-edge web technologies to deliver a performant, visually striking experience.

## 🛠 Tech Stack

### Core Framework
- **[Next.js](https://nextjs.org/) 16.2.0** — React framework with App Router for optimal performance and SEO
- **[React](https://react.dev/) 19.2.4** — Latest React with improved rendering and developer experience
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe development for robust applications

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/) 4** — Utility-first CSS framework with new glow effects and animation utilities
- **[Lucide React](https://lucide.dev/)** — Beautiful, consistent icon system
- **Geist Fonts** — Modern typography optimized for digital displays

### Deployment
- **[GitHub Pages](https://pages.github.com/)** — Static site hosting via SSG
- **Static Site Generation (SSG)** — Pre-rendered at build time for maximum performance

## 🏗 Architecture Highlights

### Static Site Generation (SSG)

The application is configured for static export, enabling deployment to GitHub Pages without a server:

```typescript
// next.config.ts
export default {
  output: "export",
  images: {
    unoptimized: true,
  },
};
```

**Benefits:**
- Zero-cost hosting on GitHub Pages
- Instant page loads (no server-side computation)
- Global CDN distribution
- Enhanced security (no server-side attack surface)

### Component-Based Design

The codebase follows a modular component architecture:

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Global styles and Tailwind imports
└── components/
    └── AgentDemo.tsx       # Interactive agentic workflow simulator
```

**Key Components:**

- **`AgentDemo`** — Interactive demonstration of multi-agent workflows
  - Simulates task decomposition, tool calls, and result synthesis
  - Client-side component with real-time animation
  - Showcases agentic AI concepts to visitors

- **Page Sections** (in `page.tsx`):
  - Hero with gradient effects
  - Interactive Demo showcase
  - Core Expertise cards
  - Blog/Thought Leadership preview
  - Featured Projects with metrics
  - Tech Stack display
  - Contact section

### Tailwind CSS 4 Integration

Leveraging the latest Tailwind CSS 4 features:

```css
/* New glow effects for depth */
.glow-effect {
  box-shadow: 0 0 20px theme('colors.indigo.500' / 0.3);
}

/* Animation utilities */
@keyframes pulse-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

**Design Tokens:**
- Primary palette: Slate (dark mode base) + Indigo (accent)
- Glow effects for interactive elements
- Smooth transitions and hover states
- Responsive breakpoints for mobile-first design

## 📁 Project Structure

```
ray-tong.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD pipeline for GitHub Pages
├── public/                   # Static assets (images, favicon)
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout configuration
│   │   ├── page.tsx         # Main landing page
│   │   └── globals.css      # Global styles + Tailwind
│   └── components/
│       └── AgentDemo.tsx    # Interactive agent workflow demo
├── next.config.ts           # Next.js configuration (SSG export)
├── package.json             # Dependencies and scripts
├── tailwind.config.ts       # Tailwind customization
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## 🚀 Development Workflow

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build & Preview

1. **Create production build:**
   ```bash
   npm run build
   ```

2. **Preview production build:**
   ```bash
   npm run start
   ```

### Deployment

The project uses **GitHub Actions** for automated deployment to GitHub Pages:

**Workflow Trigger:** Push to `main` branch

**Process:**
1. GitHub Actions workflow runs on push
2. Installs dependencies and builds the project (`npm run build`)
3. Outputs static files to `out/` directory
4. Deploys to GitHub Pages branch
5. Site updates automatically at `https://ray-tong.github.io`

**Manual Deployment (if needed):**
```bash
# Build the project
npm run build

# The 'out' directory contains the static site
# Deploy this directory to GitHub Pages
```

## 🎨 Design Philosophy

The portfolio embodies the **AI Architect** persona through:

- **Dark Mode First** — Professional, technical aesthetic
- **Data Visualization** — Quantitative metrics in project cards (latency, throughput)
- **Interactive Demos** — Show agentic concepts, not just describe them
- **Technical Clarity** — Stack, architecture, and decisions clearly documented

## 🔧 Customization

### Updating Content

- **Hero Section:** Edit `src/app/page.tsx` → modify the `<section>` after `<nav>`
- **Projects:** Update `ProjectCard` components with new work
- **Tech Stack:** Add/remove items in the "Tech Stack" section array
- **Contact Info:** Update footer links and email address

### Styling

- **Colors:** Modify `tailwind.config.ts` for custom theme
- **Fonts:** Change font imports in `src/app/layout.tsx`
- **Components:** Edit component files in `src/components/`

## 📦 Key Dependencies

```json
{
  "dependencies": {
    "next": "16.2.0",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "lucide-react": "^0.577.0"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

## 🔍 Performance Considerations

- **Static Export:** All pages pre-rendered at build time
- **Optimized Images:** Configured for static export (`unoptimized: true`)
- **Minimal JavaScript:** Client-side only for interactive components
- **Fast Refresh:** Instant feedback during development
- **Tree Shaking:** Unused code eliminated in production builds

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome via GitHub Issues and Pull Requests.

## 📄 License

MIT © 2026 Ray Tong. Built with Next.js & Tailwind.

---

**Architect:** [Ray Tong](https://github.com/ray-tong)  
**Persona:** AI Architect specializing in agentic systems and production-grade LLM workflows  
**Built:** 2026
