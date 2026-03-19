import { Github, Linkedin, Mail, Brain, Workflow, Database, Layers, ExternalLink, Sparkles, TrendingDown, TrendingUp, Zap, BarChart3, Scale, BookOpen, Calendar, Clock, ArrowRight, Terminal } from "lucide-react";
import { AgentDemo } from "@/components/AgentDemo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-slate-100 font-mono selection:bg-neon-cyan selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-neon-cyan/20 bg-black/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter uppercase cyber-glow-cyan flex items-center gap-2">
            <Terminal size={24} className="text-neon-cyan" />
            RAY TONG <span className="text-neon-magenta">/ AI ARCHITECT</span>
          </span>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest">
            <a href="#projects" className="hover:text-neon-cyan transition-all duration-300 hover:scale-105">PROJECTS</a>
            <a href="#expertise" className="hover:text-neon-cyan transition-all duration-300 hover:scale-105">EXPERTISE</a>
            <a href="#blog" className="hover:text-neon-cyan transition-all duration-300 hover:scale-105">INSIGHTS</a>
            <a href="#demo" className="hover:text-neon-cyan transition-all duration-300 hover:scale-105">AGENT DEMO</a>
            <a href="#tech" className="hover:text-neon-cyan transition-all duration-300 hover:scale-105">STACK</a>
            <a href="#contact" className="text-neon-magenta hover:text-white transition-all underline underline-offset-4 decoration-neon-magenta hover:decoration-white">CONTACT</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute top-40 right-20 w-[400px] h-[400px] bg-neon-magenta/5 blur-[100px] rounded-full pointer-events-none animate-pulse" />
          <div className="max-w-4xl mx-auto relative">
            <div className="inline-block px-3 py-1 border border-neon-green/30 text-neon-green text-[10px] font-bold uppercase tracking-[0.2em] mb-6 animate-pulse">
              System Online // Architecture Ready
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 uppercase">
              <span className="block">CYBERNETIC</span>
              <span className="text-neon-cyan cyber-glow-cyan">AI ARCHITECT</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl font-mono border-l-2 border-neon-magenta pl-6">
              [ANALYSIS]: Designing autonomous multi-agent systems and high-throughput LLM infrastructure for the next generation of intelligence.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#projects" className="cyber-button">
                Initialize Search
              </a>
              <a href="https://github.com/ray-tong" className="px-8 py-3 border border-neon-magenta/50 text-neon-magenta hover:bg-neon-magenta/10 font-bold uppercase tracking-widest transition-all flex items-center gap-2 group">
                <Github size={20} className="group-hover:rotate-12 transition-transform" /> GitHub_Access
              </a>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="py-24 px-6 relative overflow-hidden bg-black border-y border-neon-cyan/20">
          <div className="absolute inset-0 bg-neon-cyan/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-neon-cyan/50" />
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter flex items-center gap-3">
                  <Sparkles className="text-neon-cyan animate-spin-slow" /> AGENTIC_WORKFLOW
                </h2>
                <div className="h-px w-12 bg-neon-cyan/50" />
              </div>
              <p className="text-slate-500 max-w-2xl mx-auto font-mono text-sm">
                RUNNING: Autonomous decomposition, real-time tool execution, and stateful orchestration loops.
              </p>
            </div>
            <div className="cyber-border-cyan p-1 bg-black overflow-hidden rounded-sm">
              <AgentDemo />
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="py-24 px-6 bg-black relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black mb-12 flex items-center gap-3 uppercase tracking-tighter">
              <Brain className="text-neon-magenta" /> CORE_MODALITIES
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ExpertiseCard 
                icon={<Workflow size={24} />}
                title="AGENTIC FLOWS"
                description="LangGraph, OpenClaw, and custom multi-agent orchestration for complex autonomy."
              />
              <ExpertiseCard 
                icon={<Database size={24} />}
                title="NEURAL RETRIEVAL"
                description="High-performance vector pipelines with hybrid search and dynamic reranking strategies."
              />
              <ExpertiseCard 
                icon={<Layers size={24} />}
                title="AI_INFRA"
                description="Production-grade LLM deployments via Kubernetes, Docker, and scalable cloud compute."
              />
              <ExpertiseCard 
                icon={<Brain size={24} />}
                title="MODEL_TUNING"
                description="Fine-tuning, LoRA, and quantization for high-efficiency domain-specific agents."
              />
            </div>
          </div>
        </section>

        {/* AI Insights / Blog Section */}
        <section id="blog" className="py-24 px-6 relative overflow-hidden border-t border-neon-magenta/10">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-magenta/20 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div className="mb-6 md:mb-0">
                <h2 className="text-3xl font-black mb-4 flex items-center gap-3 tracking-tighter uppercase">
                  <BookOpen className="text-neon-magenta" /> THOUGHT_LEADERSHIP
                </h2>
                <p className="text-slate-500 max-w-xl text-sm font-mono italic">
                   // DECRYPTING: Perspectives on the evolving landscape of production-grade AI architecture.
                </p>
              </div>
              <a href="#" className="text-neon-cyan font-bold uppercase text-xs tracking-widest hover:text-white flex items-center gap-2 group transition-all">
                Access_All_Logs <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BlogCard 
                title="RAG vs Long Context: Architecture"
                description="Analysis of density vs context window trade-offs in scalable production systems."
                date="2024.03.15"
                readTime="08:00 MIN"
                category="ARCH"
                slug="rag-vs-long-context"
              />
              <BlogCard 
                title="The Multi-Agent Orchestration Stack"
                description="Transitioning from static chains to dynamic planning with LangGraph and OpenClaw."
                date="2024.02.28"
                readTime="12:00 MIN"
                category="AGENT"
                slug="multi-agent-orchestration-stack"
              />
              <BlogCard 
                title="Scaling LLM Infrastructure"
                description="Best practices for high-throughput agentic deployments on K8s."
                date="2024.02.12"
                readTime="10:00 MIN"
                category="OPS"
                slug="scaling-llm-infrastructure"
              />
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-black mb-12 text-slate-100 tracking-tighter uppercase">FEATURED_ARCHITECTURES</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard 
                title="ENTERPRISE_RAG_CORE"
                stack={["Python", "LangChain", "Pinecone", "Terraform"]}
                description="High-scale RAG architecture for Fortune 500, optimized for 40% latency reduction."
                metrics={[
                  { label: "LATENCY", value: "-40%", icon: <TrendingDown size={14} />, color: "text-neon-green" },
                  { label: "SCALE", value: "+300%", icon: <TrendingUp size={14} />, color: "text-neon-cyan" },
                  { label: "OPS", value: "2.5K/S", icon: <Zap size={14} />, color: "text-neon-magenta" }
                ]}
              />
              <ProjectCard 
                title="MULTI_AGENT_SYNTHESIS"
                stack={["Next.js", "LangGraph", "OpenClaw", "FastAPI"]}
                description="Distributed framework for autonomous literature review and synthetic data generation."
                metrics={[
                  { label: "SUCCESS", value: "98%", icon: <BarChart3 size={14} />, color: "text-neon-green" },
                  { label: "COST", value: "+60%", icon: <TrendingUp size={14} />, color: "text-neon-cyan" },
                  { label: "SPEED", value: "x5", icon: <Zap size={14} />, color: "text-neon-magenta" }
                ]}
              />
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className="py-24 px-6 bg-black relative border-t border-neon-cyan/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-12 tracking-tighter uppercase">THE_TOOLBELT</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["PyTorch", "TensorFlow", "LangChain", "LangGraph", "OpenClaw", "Pinecone", "Milvus", "Next.js", "Docker", "Kubernetes", "AWS", "GCP"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-black border border-neon-cyan/30 text-neon-cyan font-bold text-[10px] uppercase tracking-widest hover:border-neon-cyan hover:bg-neon-cyan/5 transition-all">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6 border-t border-neon-magenta/20 bg-black relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-6 tracking-tighter uppercase">ESTABLISH_COMM_LINK</h2>
            <p className="text-slate-500 mb-10 text-sm font-mono">Available for high-stakes AI consulting and strategic implementation.</p>
            <div className="flex justify-center gap-8">
              <a href="mailto:contact@ray-tong.com" className="p-4 border border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-black transition-all cyber-glow-magenta rounded-sm">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/in/ray-tong" className="p-4 border border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-black transition-all cyber-glow-magenta rounded-sm">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/ray-tong" className="p-4 border border-neon-magenta text-neon-magenta hover:bg-neon-magenta hover:text-black transition-all cyber-glow-magenta rounded-sm">
                <Github size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-6 text-center text-[10px] font-bold tracking-[0.3em] uppercase text-slate-600 border-t border-slate-900">
        &copy; {new Date().getFullYear()} RAY TONG // BUILD_V: 1.0.42 // BUILT WITH NEXT.JS & TAILWIND
      </footer>
    </div>
  );
}

function ExpertiseCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="cyber-card group">
      <div className="mb-4 text-neon-cyan group-hover:cyber-glow-cyan transition-all inline-block">
        {icon}
      </div>
      <h3 className="text-sm font-black mb-2 uppercase tracking-tight">{title}</h3>
      <p className="text-slate-500 text-xs font-mono leading-relaxed">{description}</p>
    </div>
  );
}

function BlogCard({ title, description, date, readTime, category, slug }: { title: string, description: string, date: string, readTime: string, category: string, slug: string }) {
  return (
    <Link href={`/blog/${slug}`} className="cyber-card group flex flex-col hover:border-neon-magenta/50">
      <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest text-neon-magenta mb-4">
        <span className="px-2 py-1 border border-neon-magenta/30 bg-neon-magenta/5 rounded-sm">{category}</span>
      </div>
      <h3 className="text-lg font-black mb-3 group-hover:text-neon-magenta transition-colors leading-snug uppercase tracking-tighter">{title}</h3>
      <p className="text-slate-500 text-xs mb-6 flex-grow leading-relaxed line-clamp-2 font-mono italic">
        {description}
      </p>
      <div className="flex items-center gap-4 text-slate-600 text-[10px] font-bold border-t border-slate-900 pt-4 font-mono">
        <div className="flex items-center gap-1.5">
          <Calendar size={12} />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock size={12} />
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
    <div className="cyber-card group">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-xl font-black uppercase tracking-tighter text-neon-cyan group-hover:cyber-glow-cyan transition-all">{title}</h3>
        <ExternalLink size={18} className="text-slate-700 group-hover:text-neon-cyan transition-all" />
      </div>
      <p className="text-slate-400 text-xs mb-8 leading-relaxed font-mono">
        {description}
      </p>
      
      {metrics && (
        <div className="flex flex-wrap gap-6 mb-8 py-4 border-y border-neon-cyan/10">
          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-600 font-bold font-mono">{m.label}</span>
              <div className="flex items-center gap-1.5">
                <span className={m.color}>{m.icon}</span>
                <span className="text-md font-mono font-bold text-white">{m.value}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {stack.map(s => (
          <span key={s} className="text-[10px] font-bold font-mono px-2 py-0.5 border border-slate-800 text-slate-500 rounded-sm">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
