import { Github, Linkedin, Mail, Brain, Workflow, Database, Layers, ExternalLink, Sparkles, TrendingDown, TrendingUp, Zap, BarChart3, Scale, BookOpen, Calendar, Clock, ArrowRight } from "lucide-react";
import AgentDemo from "@/components/AgentDemo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#00ff41] font-mono">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-[#003b00] bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight uppercase neon-glow">RAY TONG <span className="text-[#00ff41]">/ SYSTEM_ARCH</span></span>
          <div className="hidden md:flex gap-8 text-sm font-bold">
            <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
            <a href="#expertise" className="hover:text-white transition-colors">EXPERTISE</a>
            <Link href="/blog" className="hover:text-white transition-colors">INSIGHTS</Link>
            <a href="#demo" className="hover:text-white transition-colors">DEMO</a>
            <a href="#tech" className="hover:text-white transition-colors">STACK</a>
            <a href="#contact" className="hover:text-white transition-colors underline">CONTACT</a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero */}
        <section className="relative py-24 px-6 overflow-hidden">
          <div className="max-w-4xl mx-auto relative text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 neon-glow">
              <span className="text-white">AI ARCHITECT</span>
            </h1>
            <p className="text-xl text-[#00ff41]/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              [SYSTEM_INITIALIZED] Designing scalable agentic systems, advanced RAG architectures, and production-ready LLM workflows.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects" className="px-8 py-3 border border-[#00ff41] hover:bg-[#00ff41] hover:text-black rounded font-bold transition-all shadow-[0_0_15px_rgba(0,255,65,0.3)]">
                [EXEC_WORK]
              </a>
              <a href="https://github.com/ray-tong" className="px-8 py-3 border border-[#003b00] hover:bg-[#003b00] rounded font-bold transition-all flex items-center gap-2">
                <Github size={20} /> GITHUB
              </a>
            </div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section id="demo" className="py-24 px-6 relative overflow-hidden bg-[#050505] border-b border-[#003b00]">
          <div className="max-w-6xl mx-auto relative card p-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3 neon-glow text-white">
                <Sparkles /> AGENT_WORKFLOW_DEMO
              </h2>
            </div>
            <AgentDemo />
          </div>
        </section>

        {/* Expertise */}
        <section id="expertise" className="py-24 px-6 bg-[#050505] border-y border-[#003b00]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-3 neon-glow text-white">
              <Brain /> CORE_EXPERTISE
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ExpertiseCard 
                icon={<Workflow size={24} />}
                title="AGENTIC_WF"
                description="Autonomous multi-agent systems via LangGraph & OpenClaw."
              />
              <ExpertiseCard 
                icon={<Database size={24} />}
                title="ADV_RAG"
                description="High-perf retrieval pipelines with hybrid search."
              />
              <ExpertiseCard 
                icon={<Layers size={24} />}
                title="AI_INFRA"
                description="Productionizing LLMs via k8s & docker."
              />
              <ExpertiseCard 
                icon={<Brain size={24} />}
                title="OPTIMIZATION"
                description="Fine-tuning/quantization for domain-specific models."
              />
            </div>
          </div>
        </section>

        {/* AI Insights */}
        <section id="insights" className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 tracking-tight neon-glow text-white">
                  <BookOpen /> THOUGHT_LEADERSHIP
                </h2>
              </div>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
              <Link href="/blog/rag-vs-long-context" className="group">
                <article className="h-full p-8 card transition-all flex flex-col hover:bg-[#003b00]/20">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest mb-6 text-[#00ff41]">
                    <span className="px-2 py-1 border border-[#00ff41] rounded">Architecture</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> 6 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors leading-snug">
                    RAG vs. Long Context: An Architect's Perspective
                  </h3>
                  <p className="mb-8 flex-grow leading-relaxed opacity-80">
                    Why modern AI orchestration still relies on robust retrieval pipelines.
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#003b00]">
                    <span className="text-sm font-bold flex items-center gap-1 opacity-50">
                      Read Article <ArrowRight size={14} />
                    </span>
                  </div>
                </article>
              </Link>

              <div className="space-y-6">
                <div className="p-6 card opacity-60">
                  <h4 className="text-lg font-bold mb-2">Designing Self-Correction Loops</h4>
                  <p className="text-sm opacity-70">Strategies for autonomous error-handling in LLM-driven pipelines.</p>
                </div>
                <div className="p-6 card opacity-60">
                  <h4 className="text-lg font-bold mb-2">Quantization Strategies</h4>
                  <p className="text-sm opacity-70">Balancing performance on constrained hardware.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section id="projects" className="py-24 px-6 bg-[#050505]">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 tracking-tight neon-glow text-white">FEATURED_ARCHITECTURES</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <ProjectCard 
                title="Enterprise RAG Orchestrator"
                stack={["Python", "LangChain", "Pinecone", "Terraform"]}
                description="Scalable RAG architecture, reducing latency by 40%."
                metrics={[
                  { label: "Latency", value: "-40%", icon: <TrendingDown size={14} />, color: "text-white" },
                  { label: "Scalability", value: "+300%", icon: <TrendingUp size={14} />, color: "text-white" },
                ]}
              />
              <ProjectCard 
                title="Multi-Agent Research Assistant"
                stack={["Next.js", "LangGraph", "OpenClaw", "FastAPI"]}
                description="Distributed agentic framework for data synthesis."
                metrics={[
                  { label: "Efficiency", value: "98%", icon: <BarChart3 size={14} />, color: "text-white" },
                  { label: "Speedup", value: "x5", icon: <Zap size={14} />, color: "text-white" }
                ]}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function ExpertiseCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-6 card hover:bg-[#003b00]/20 transition-all group">
      <div className="mb-4 text-[#00ff41] transition-transform inline-block">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
      <p className="text-sm leading-relaxed opacity-70">{description}</p>
    </div>
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
    <div className="group relative overflow-hidden card p-8 hover:bg-[#003b00]/20 transition-all">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <ExternalLink size={20} className="opacity-50" />
      </div>
      <p className="mb-8 leading-relaxed opacity-80">
        {description}
      </p>
      
      {metrics && (
        <div className="flex flex-wrap gap-6 mb-8 py-4 border-y border-[#003b00]">
          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col gap-1">
              <span className="text-[10px] uppercase tracking-wider opacity-50 font-bold">{m.label}</span>
              <div className="flex items-center gap-1.5 text-white">
                <span className={m.color}>{m.icon}</span>
                <span className="text-lg font-mono font-bold">{m.value}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {stack.map(s => (
          <span key={s} className="text-xs font-mono px-2 py-1 border border-[#00ff41] text-[#00ff41] bg-[#00ff41]/5 rounded">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
