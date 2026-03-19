# AI Architect Portfolio: Architectural Proposal

## 1. Selected Framework
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** GitHub Pages (Static Site Generation - SSG)
- **Icons:** [Lucide React](https://lucide.dev/) or [React Icons]

## 2. Information Architecture
The site will follow a single-page scrolling structure (SPA-feel) with sections for deep dives:

- **Hero:**
    - Headline: "Experienced AI Architect"
    - Sub-headline: "Building Scalable Agentic Systems & Advanced RAG Architectures"
    - Primary CTA: View Projects / Contact
- **Expertise (AI Focus):**
    - LLM Fine-tuning & Optimization
    - Multi-agent Workflows (LangGraph, OpenClaw)
    - Vector Databases & RAG Pipelines
    - Production AI Infrastructure (Kubernetes, AWS/GCP)
- **Experience / Projects:**
    - High-impact AI projects with technical depth (architectural diagrams, results, stack).
- **Tech Stack:**
    - Categories: Languages (Python, TS), Frameworks (PyTorch, LangChain), Infrastructure (Terraform, Docker), Tools (Weights & Biases, Pinecone).
- **Blog/Insights:**
    - Integration with local Markdown files for easy maintenance.
- **Contact:**
    - Modern footer with social links.

## 3. Visual Design Strategy
- **Color Palette:** Professional Dark Mode by default (Sleek Slate/Indigo accents) or a high-contrast Light/Dark switch.
- **Typography:** Sans-serif (e.g., Inter or Geist) for readability.
- **Visuals:** Use abstract geometric patterns or neural network-inspired motifs as subtle backgrounds.

## 4. GitHub Pages Deployment Strategy
- Use `output: 'export'` in `next.config.ts`.
- GitHub Actions workflow for automated deployment on push to `main`.
