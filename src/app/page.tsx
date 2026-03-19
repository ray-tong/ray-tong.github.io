"use client";
import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Brain, Workflow, Database, Layers, ExternalLink } from "lucide-react";
import { AIDemo } from "./AIDemo";

export default function Home() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.glow-card');
      cards.forEach(card => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background Texture/Grain */}
      <div className="bg-grain fixed inset-0 z-50 pointer-events-none mix-blend-soft-light opacity-5" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[60] border-b border-slate-800/40 bg-slate-950/70 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter hover:text-indigo-400 transition-colors cursor-default">
            RAY TONG <span className="text-indigo-400/80 font-medium">/ AI Architect</span>
          </span>
          <div className="hidden md:flex gap-10 text-xs uppercase tracking-widest font-semibold text-slate-400">
            <a href="#projects" className="hover:text-indigo-300 transition-all hover:tracking-[0.15em]">Projects</a>
            <a href="#expertise" className="hover:text-indigo-300 transition-all hover:tracking-[0.15em]">Expertise</a>
            <a href="#demo" className="hover:text-indigo-300 transition-all hover:tracking-[0.15em]">Agent Demo</a>
            <a href="#tech" className="hover:text-indigo-300 transition-all hover:tracking-[0.15em]">Stack</a>
            <a href="#contact" className="hover:text-indigo-400 transition-all text-slate-200 border-b border-indigo-500/50 pb-1">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-16 relative">
        {/* Hero */}
        <section className="relative py-32 px-6 overflow-hidden">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-600/15 glow-bg-animate rounded-full pointer-events-none blur-[120px]" />
          <div className="max-w-4xl mx-auto relative text-center">
            <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-400 text-xs font-bold tracking-[0.2em] uppercase">
              System Architecture & Agentic Workflows
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Experienced <br />
              <span className="bg-gradient-to-b from-indigo-300 to-indigo-600 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                AI Architect
              </span>
            </h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              Designing scalable agentic systems, advanced RAG architectures, and production-ready LLM workflows for high-impact engineering solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#projects" className="group relative px-10 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition-all shadow-[0_0_30px_-5px_rgba(79,70,229,0.5)] overflow-hidden">
                <span className="relative z-10 flex items-center gap-2 text-white">View My Work <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </a>
              <a href="https://github.com/ray-tong" className="px-10 py-4 border border-slate-800 hover:border-slate-600 hover:bg-slate-900/50 rounded-xl font-bold transition-all flex items-center gap-3 backdrop-blur-sm">
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-sm uppercase tracking-[0.3em] font-black text-indigo-500/80 mb-12 flex items-center gap-4">
              <span className="h-px w-12 bg-indigo-500/30" /> Core Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ExpertiseCard 
                icon={<Workflow size={24} />}
                title="Agentic Workflows"
                description="Building autonomous multi-agent systems using LangGraph, OpenClaw, and custom orchestrators."
              />
              <ExpertiseCard 
                icon={<Database size={24} />}
                title="Advanced RAG"
                description="Architecting high-performance retrieval pipelines with hybrid search and reranking."
              />
              <ExpertiseCard 
                icon={<Layers size={24} />}
                title="AI Infrastructure"
                description="Productionizing LLMs with Kubernetes, Docker, and scalable cloud-native deployments."
              />
              <ExpertiseCard 
                icon={<Brain size={24} />}
                title="Model Optimization"
                description="Fine-tuning and quantization strategies for domain-specific AI models."
              />
            </div>
          </div>
        </section>

        {/* Interactive Demo */}
        <section id="demo" className="py-24 px-6 relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 h-1/2 bg-indigo-500/5 blur-[120px] pointer-events-none" />
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
               <h2 className="text-sm uppercase tracking-[0.3em] font-black text-indigo-500/80 mb-4 flex items-center gap-4">
                <span className="h-px w-12 bg-indigo-500/30" /> Interactive Demo
              </h2>
              <h3 className="text-4xl font-bold mb-4 tracking-tight">Inside the Agent's Mind</h3>
              <p className="text-slate-400 max-w-2xl font-medium">
                Experience how an AI agent decomposes a complex query into a chain of planning, tool execution, and strategic synthesis.
              </p>
            </div>
            <div className="glow-card border border-slate-800/50 bg-slate-900/20 rounded-2xl overflow-hidden backdrop-blur-sm p-1">
              <AIDemo />
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-sm uppercase tracking-[0.3em] font-black text-indigo-500/80 mb-12 flex items-center gap-4">
              <span className="h-px w-12 bg-indigo-500/30" /> Featured Architectures
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard 
                title="Enterprise RAG Orchestrator"
                stack={["Python", "LangChain", "Pinecone", "Terraform"]}
                description="Designed and implemented a scalable RAG architecture for a Fortune 500 company, reducing response latency by 40% using advanced caching and hybrid search."
              />
              <ProjectCard 
                title="Multi-Agent Research Assistant"
                stack={["Next.js", "LangGraph", "OpenClaw", "FastAPI"]}
                description="Built a distributed agentic framework for autonomous literature review and data synthesis with sub-agent delegation and cross-tool communication."
              />
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className="py-32 px-6 relative">
          <div className="absolute inset-0 bg-indigo-500/[0.02] -skew-y-3 pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="text-sm uppercase tracking-[0.3em] font-black text-indigo-500/80 mb-16">The Toolbelt</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["PyTorch", "TensorFlow", "LangChain", "LangGraph", "OpenClaw", "Pinecone", "Milvus", "Next.js", "Docker", "Kubernetes", "AWS", "GCP"].map(tech => (
                <span key={tech} className="px-6 py-3 bg-slate-900/40 border border-slate-800/60 rounded-xl text-sm font-bold text-slate-300 hover:border-indigo-500/50 hover:text-indigo-300 transition-all cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6 border-t border-slate-800/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tighter">Let's build the future <br/>of AI together.</h2>
            <p className="text-slate-400 mb-12 text-lg font-medium">Available for high-stakes AI architectural consulting and strategic implementation.</p>
            <div className="flex justify-center gap-8">
              <a href="mailto:contact@ray-tong.com" className="p-5 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-indigo-500/60 text-indigo-400 hover:text-indigo-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all group">
                <Mail size={28} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/ray-tong" className="p-5 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-indigo-500/60 text-indigo-400 hover:text-indigo-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all group">
                <Linkedin size={28} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com/ray-tong" className="p-5 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-indigo-500/60 text-indigo-400 hover:text-indigo-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all group">
                <Github size={28} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 text-center text-xs tracking-widest uppercase font-bold text-slate-600">
        &copy; {new Date().getFullYear()} Ray Tong. Engineered for the Agentic Era.
      </footer>
    </div>
  );
}

function ExpertiseCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="glow-card p-8 bg-slate-900/30 border border-slate-800/40 rounded-2xl transition-all group">
      <div className="mb-6 text-indigo-500/80 group-hover:text-indigo-400 group-hover:scale-110 transition-all inline-block p-3 bg-indigo-500/5 rounded-xl border border-indigo-500/10">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-indigo-200 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed font-medium">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, stack }: { title: string, description: string, stack: string[] }) {
  return (
    <div className="glow-card group relative overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-900/30 p-10 hover:shadow-2xl transition-all">
      <div className="flex justify-between items-start mb-8">
        <h3 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-indigo-300 transition-all">{title}</h3>
        <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-all">
          <ExternalLink size={20} className="text-slate-500" />
        </div>
      </div>
      <p className="text-slate-400 mb-10 leading-relaxed font-medium">
        {description}
      </p>
      <div className="flex flex-wrap gap-2.5">
        {stack.map(s => (
          <span key={s} className="text-[10px] uppercase tracking-wider font-black px-3 py-1 bg-indigo-500/5 text-indigo-400/80 rounded-full border border-indigo-500/10 group-hover:border-indigo-500/30 transition-colors">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
