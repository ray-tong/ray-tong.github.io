"use client";
import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Brain, Workflow, Database, Layers, ExternalLink, Sparkles, TrendingDown, TrendingUp, Zap, BarChart3, Scale, BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import AgentDemo from "@/components/AgentDemo";
import { AIDemo } from "./AIDemo";
import Link from "next/link";

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
            <a href="#blog" className="hover:text-indigo-300 transition-all hover:tracking-[0.15em]">Insights</a>
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

        {/* Interactive Demo Section */}
        <section id="demo" className="py-24 px-6 relative overflow-hidden bg-slate-950 border-b border-slate-800/50">
          <div className="absolute inset-0 bg-indigo-500/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Sparkles className="text-indigo-400" /> Interactive Agentic Workflow
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Watch how an autonomous agent processes requests, decomposes tasks, and executes tool calls in real-time.
              </p>
            </div>
            <AgentDemo />
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

        {/* AI Insights / Blog Section */}
        <section id="blog" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 tracking-tight">
                  <BookOpen className="text-indigo-400" /> AI Thought Leadership
                </h2>
                <p className="text-slate-400 max-xl text-lg">
                  Perspectives on the rapidly evolving landscape of AI architecture and production-grade agentic systems.
                </p>
              </div>
              <a href="#" className="text-indigo-400 font-semibold hover:text-indigo-300 flex items-center gap-2 group transition-all">
                View All Articles <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BlogCard 
                title="RAG vs Long Context: An Architect's Perspective"
                description="Exploring the trade-offs between dense retrieval and expanded context windows in production systems."
                date="Mar 15, 2024"
                readTime="8 min read"
                category="Architecture"
                slug="rag-vs-long-context"
              />
              <BlogCard 
                title="The Multi-Agent Orchestration Stack"
                description="How we transitioned from static chains to dynamic planning with LangGraph and OpenClaw."
                date="Feb 28, 2024"
                readTime="12 min read"
                category="Agentic AI"
                slug="multi-agent-orchestration-stack"
              />
              <BlogCard 
                title="Scaling LLM Infrastructure for Real-time Ops"
                description="Best practices for deploying high-throughput agentic systems on Kubernetes."
                date="Feb 12, 2024"
                readTime="10 min read"
                category="DevOps"
                slug="scaling-llm-infrastructure"
              />
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-slate-100 tracking-tight">Featured AI Architectures</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <ProjectCard 
                title="Enterprise RAG Orchestrator"
                stack={["Python", "LangChain", "Pinecone", "Terraform"]}
                description="Designed and implemented a scalable RAG architecture for a Fortune 500 company, reducing response latency by 40% using advanced caching and hybrid search."
                metrics={[
                  { label: "Latency", value: "-40%", icon: <TrendingDown size={14} />, color: "text-emerald-400" },
                  { label: "Scalability", value: "+300%", icon: <TrendingUp size={14} />, color: "text-indigo-400" },
                  { label: "Throughput", value: "2.5k req/s", icon: <Zap size={14} />, color: "text-amber-400" }
                ]}
              />
              <ProjectCard 
                title="Multi-Agent Research Assistant"
                stack={["Next.js", "LangGraph", "OpenClaw", "FastAPI"]}
                description="Built a distributed agentic framework for autonomous literature review and data synthesis with sub-agent delegation and cross-tool communication."
                metrics={[
                  { label: "Task completion", value: "98%", icon: <BarChart3 size={14} />, color: "text-emerald-400" },
                  { label: "Cost Efficiency", value: "+60%", icon: <TrendingUp size={14} />, color: "text-indigo-400" },
                  { label: "Processing Speed", value: "x5", icon: <Zap size={14} />, color: "text-amber-400" }
                ]}
              />
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className="py-24 px-6 bg-slate-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 tracking-tight">The Toolbelt</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["PyTorch", "TensorFlow", "LangChain", "LangGraph", "OpenClaw", "Pinecone", "Milvus", "Next.js", "Docker", "Kubernetes", "AWS", "GCP"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm font-medium text-slate-300 hover:border-indigo-500/50 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6 border-t border-slate-800/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Let's build the future of AI together.</h2>
            <p className="text-slate-400 mb-10 text-lg">Available for high-stakes AI architectural consulting and strategic implementation.</p>
            <div className="flex justify-center gap-6">
              <a href="mailto:contact@ray-tong.com" className="p-4 bg-slate-900 border border-slate-800 rounded-full hover:border-indigo-400 hover:text-indigo-400 text-slate-400 transition-all">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/in/ray-tong" className="p-4 bg-slate-900 border border-slate-800 rounded-full hover:border-indigo-400 hover:text-indigo-400 text-slate-400 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/ray-tong" className="p-4 bg-slate-900 border border-slate-800 rounded-full hover:border-indigo-400 hover:text-indigo-400 text-slate-400 transition-all">
                <Github size={24} />
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
    <div className="glow-card p-8 bg-slate-900/30 border border-slate-800/40 rounded-2xl transition-all group overflow-hidden">
      <div className="mb-6 text-indigo-500/80 group-hover:text-indigo-400 group-hover:scale-110 transition-all inline-block p-3 bg-indigo-500/5 rounded-xl border border-indigo-500/10">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-indigo-200 transition-colors relative z-20">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed font-medium relative z-20">{description}</p>
    </div>
  );
}

function BlogCard({ title, description, date, readTime, category, slug }: { title: string, description: string, date: string, readTime: string, category: string, slug: string }) {
  return (
    <Link href={`/blog/${slug}`} className="glow-card flex flex-col p-6 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:bg-slate-900/60 transition-all group overflow-hidden">
      <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest text-indigo-400 mb-4 relative z-20">
        <span className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded">{category}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors leading-snug relative z-20">{title}</h3>
      <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-2 relative z-20">
        {description}
      </p>
      <div className="flex items-center gap-4 text-slate-500 text-xs font-medium border-t border-slate-800/50 pt-4 relative z-20">
        <div className="flex items-center gap-1.5">
          <Calendar size={14} />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={14} />
          <span>{readTime}</span>
        </div>
      </div>
    </Link>
  );
}

interface Metric {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

function ProjectCard({ title, description, stack, metrics }: { title: string, description: string, stack: string[], metrics?: Metric[] }) {
  return (
    <div className="glow-card group relative overflow-hidden rounded-2xl border border-slate-800/50 bg-slate-900/30 p-10 hover:shadow-2xl transition-all">
      <div className="relative z-20">
        <div className="flex justify-between items-start mb-8">
          <h3 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-indigo-300 transition-all">{title}</h3>
          <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-all">
            <ExternalLink size={20} className="text-slate-500" />
          </div>
        </div>
        <p className="text-slate-400 mb-10 leading-relaxed font-medium">
          {description}
        </p>
        
        {metrics && (
          <div className="flex flex-wrap gap-6 mb-8 py-4 border-y border-slate-800/50">
            {metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{m.label}</span>
                <div className="flex items-center gap-1.5">
                  <span className={m.color}>{m.icon}</span>
                  <span className="text-lg font-mono font-bold">{m.value}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {stack.map(s => (
            <span key={s} className="text-[10px] uppercase tracking-wider font-black px-3 py-1 bg-indigo-500/5 text-indigo-400/80 rounded-full border border-indigo-500/10 group-hover:border-indigo-500/30 transition-colors">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
