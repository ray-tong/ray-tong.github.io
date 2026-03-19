import { Github, Linkedin, Mail, Brain, Workflow, Database, Layers, ExternalLink, Sparkles, TrendingDown, TrendingUp, Zap, BarChart3, Scale, BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import AgentDemo from "@/components/AgentDemo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight">RAY TONG <span className="text-indigo-400">/ AI Architect</span></span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#expertise" className="hover:text-indigo-400 transition-colors">Expertise</a>
            <a href="#blog" className="hover:text-indigo-400 transition-colors">Insights</a>
            <a href="#demo" className="hover:text-indigo-400 transition-colors">Agent Demo</a>
            <a href="#tech" className="hover:text-indigo-400 transition-colors">Stack</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors underline underline-offset-4">Contact</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-4xl mx-auto relative text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Experienced <span className="text-indigo-400">AI Architect</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              Designing scalable agentic systems, advanced RAG architectures, and production-ready LLM workflows for high-impact engineering solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition-all shadow-lg shadow-indigo-500/20">
                View My Work
              </a>
              <a href="https://github.com/ray-tong" className="px-8 py-3 border border-slate-700 hover:bg-slate-900 rounded-lg font-semibold transition-all flex items-center gap-2">
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
        <section id="expertise" className="py-24 px-6 bg-slate-900/50 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
              <Brain className="text-indigo-400" /> Core Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <p className="text-slate-400 max-w-xl text-lg">
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
                description="Designed and implemented a scalable RAG architecture for a Fortune 500 company, reducing response latency by 40%."
                metrics={[
                  { label: "Latency", value: "-40%", icon: <TrendingDown size={14} />, color: "text-emerald-400" },
                  { label: "Scalability", value: "+300%", icon: <TrendingUp size={14} />, color: "text-indigo-400" },
                  { label: "Throughput", value: "2.5k req/s", icon: <Zap size={14} />, color: "text-amber-400" }
                ]}
              />
              <ProjectCard 
                title="Multi-Agent Research Assistant"
                stack={["Next.js", "LangGraph", "OpenClaw", "FastAPI"]}
                description="Built a distributed agentic framework for autonomous literature review and data synthesis."
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
        <section id="contact" className="py-24 px-6 border-t border-slate-800/50">
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

      <footer className="py-8 px-6 text-center text-sm text-slate-500 border-t border-slate-900">
        &copy; {new Date().getFullYear()} Ray Tong. Built with Next.js & Tailwind.
      </footer>
    </div>
  );
}

function ExpertiseCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-xl hover:border-indigo-500/50 transition-all group">
      <div className="mb-4 text-indigo-400 group-hover:scale-110 transition-transform inline-block">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function BlogCard({ title, description, date, readTime, category, slug }: { title: string, description: string, date: string, readTime: string, category: string, slug: string }) {
  return (
    <Link href={`/blog/${slug}`} className="flex flex-col p-6 bg-slate-900/30 border border-slate-800/50 rounded-2xl hover:border-indigo-500/50 hover:bg-slate-900/60 transition-all group">
      <div className="flex items-center gap-3 text-[10px] uppercase font-bold tracking-widest text-indigo-400 mb-4">
        <span className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded">{category}</span>
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-400 transition-colors leading-snug">{title}</h3>
      <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-2">
        {description}
      </p>
      <div className="flex items-center gap-4 text-slate-500 text-xs font-medium border-t border-slate-800/50 pt-4">
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
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:border-indigo-500/50 transition-all">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <ExternalLink size={20} className="text-slate-500 group-hover:text-indigo-400" />
      </div>
      <p className="text-slate-400 mb-8 leading-relaxed">
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
          <span key={s} className="text-xs font-mono px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded border border-indigo-500/20">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
