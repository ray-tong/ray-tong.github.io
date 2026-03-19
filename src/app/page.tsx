import { Github, Linkedin, Mail, Brain, Workflow, Database, Layers, ExternalLink, BookOpen, Clock, ArrowRight } from "lucide-react";
import { AIDemo } from "./AIDemo";

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
            <a href="#demo" className="hover:text-indigo-400 transition-colors">Agent Demo</a>
            <a href="#insights" className="hover:text-indigo-400 transition-colors">Insights</a>
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

        {/* Interactive Demo */}
        <section id="demo" className="py-24 px-6 border-b border-slate-800/50 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-500/5 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Inside the Agent's Mind</h2>
              <p className="text-slate-400 max-w-2xl">
                Experience how an AI agent decomposes a complex query into a chain of planning, tool execution, and strategic synthesis.
              </p>
            </div>
            <AIDemo />
          </div>
        </section>

        {/* Insights Section */}
        <section id="insights" className="py-24 px-6 bg-slate-900/30 border-b border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <BookOpen className="text-indigo-400" /> Architectural Insights
                </h2>
                <p className="text-slate-400 max-w-2xl">
                  Thought leadership and technical deep-dives into the future of agentic AI and RAG systems.
                </p>
              </div>
              <a href="#" className="hidden md:flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                View All Articles <ArrowRight size={20} />
              </a>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <InsightCard 
                title="RAG vs. Long Context: An Architect's Perspective"
                excerpt="Analyzing the trade-offs between dense retrieval systems and the emerging trend of massive context windows in production environments."
                date="Mar 15, 2026"
                readTime="6 min read"
                tag="Architecture"
              />
              <InsightCard 
                title="Orchestrating Autonomous Multi-Agent Workflows"
                excerpt="How to design resilient state machines for complex task decomposition using LangGraph and OpenClaw."
                date="Feb 28, 2026"
                readTime="8 min read"
                tag="Agentic AI"
              />
              <InsightCard 
                title="The Silent Killer: Evaluation in Non-Deterministic Systems"
                excerpt="Why traditional unit tests fail LLM applications and how to build robust evaluation loops for production agents."
                date="Feb 12, 2026"
                readTime="5 min read"
                tag="Engineering"
              />
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section id="projects" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Featured AI Architectures</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <ProjectCard 
                title="Enterprise RAG Orchestrator"
                stack={["Python", "LangChain", "Pinecone", "Terraform"]}
                description="Designed and implemented a scalable RAG architecture for a Fortune 500 company, reducing response latency by 40%."
              />
              <ProjectCard 
                title="Multi-Agent Research Assistant"
                stack={["Next.js", "LangGraph", "OpenClaw", "FastAPI"]}
                description="Built a distributed agentic framework for autonomous literature review and data synthesis."
              />
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section id="tech" className="py-24 px-6 bg-slate-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">The Toolbelt</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {["PyTorch", "TensorFlow", "LangChain", "LangGraph", "OpenClaw", "Pinecone", "Milvus", "Next.js", "Docker", "Kubernetes", "AWS", "GCP"].map(tech => (
                <span key={tech} className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm font-medium text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 px-6 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let's build the future of AI together.</h2>
            <p className="text-slate-400 mb-10">Available for high-stakes AI architectural consulting and strategic implementation.</p>
            <div className="flex justify-center gap-6">
              <a href="mailto:contact@ray-tong.com" className="p-4 bg-slate-900 border border-slate-800 rounded-full hover:border-indigo-400 text-indigo-400 transition-all">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/in/ray-tong" className="p-4 bg-slate-900 border border-slate-800 rounded-full hover:border-indigo-400 text-indigo-400 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/ray-tong" className="p-4 bg-slate-900 border border-slate-800 rounded-full hover:border-indigo-400 text-indigo-400 transition-all">
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

function ProjectCard({ title, description, stack }: { title: string, description: string, stack: string[] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8 hover:border-indigo-500/50 transition-all">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <ExternalLink size={20} className="text-slate-500 group-hover:text-indigo-400" />
      </div>
      <p className="text-slate-400 mb-8 leading-relaxed">
        {description}
      </p>
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

function InsightCard({ title, excerpt, date, readTime, tag }: { title: string, excerpt: string, date: string, readTime: string, tag: string }) {
  return (
    <div className="p-8 bg-slate-900/50 border border-slate-800/50 rounded-2xl hover:border-indigo-500/50 transition-all group flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <span className="text-xs font-mono px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded border border-indigo-500/20">
          {tag}
        </span>
        <div className="flex items-center gap-2 text-slate-500 text-xs">
          <Clock size={14} /> {readTime}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
        {excerpt}
      </p>
      <div className="flex justify-between items-center pt-6 border-t border-slate-800/50 text-xs font-medium">
        <span className="text-slate-500">{date}</span>
        <button className="flex items-center gap-1 text-indigo-400 group-hover:gap-2 transition-all">
          Read More <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
