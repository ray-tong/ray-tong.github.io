import { ArrowLeft, Clock, Calendar, ArrowRight, Brain } from "lucide-react";
import Link from "next/link";

export default function BlogList() {
  const posts = [
    {
      slug: "rag-vs-long-context",
      title: "RAG vs. Long Context: An Architect's Perspective",
      excerpt: "Is the massive context window the end of RAG? We dive deep into why modern AI orchestration still relies on robust retrieval pipelines.",
      date: "Mar 19, 2026",
      readTime: "6 min read",
      category: "Architecture",
    },
    // Placeholders
    {
      slug: "#",
      title: "Designing Self-Correction Loops in Agentic Workflows",
      excerpt: "Strategies for autonomous verification and error-handling in LLM-driven pipelines.",
      date: "Coming Soon",
      readTime: "4 min read",
      category: "Multi-Agent",
      disabled: true,
    },
    {
      slug: "#",
      title: "Quantization Strategies for Edge AI Architecture",
      excerpt: "Balancing precision and performance on constrained hardware for production LLMs.",
      date: "Coming Soon",
      readTime: "5 min read",
      category: "Performance",
      disabled: true,
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <nav className="fixed top-0 w-full z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors">
            <ArrowLeft size={16} /> Home
          </Link>
          <span className="font-bold text-xl tracking-tight uppercase">RAY TONG <span className="text-indigo-400">/ INSIGHTS</span></span>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-20">
            <h1 className="text-5xl font-bold tracking-tight mb-6">AI Architecture & Insights</h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              Technical deep dives into the engineering challenges of building high-performance AI systems and autonomous agents.
            </p>
          </header>

          <div className="space-y-16">
            {posts.map((post, idx) => (
              <article key={idx} className={`group relative ${post.disabled ? 'opacity-50 grayscale select-none' : ''}`}>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/4">
                    <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest mb-2">
                       <Brain size={14} /> {post.category}
                    </div>
                    <div className="text-slate-500 text-sm font-medium flex flex-col gap-1">
                      <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    {post.disabled ? (
                      <div>
                        <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">{post.excerpt}</p>
                      </div>
                    ) : (
                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors leading-tight">{post.title}</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">{post.excerpt}</p>
                        <span className="text-indigo-400 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                          Read Full Article <ArrowRight size={18} />
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-12 px-6 text-center text-sm text-slate-500 border-t border-slate-900 bg-slate-900/20 mt-12">
        &copy; {new Date().getFullYear()} Ray Tong. Architecting with logic and precision.
      </footer>
    </div>
  );
}
