import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPost() {
  // Placeholder data for a single post
  const post = {
    title: "RAG vs Long Context: An Architect's Perspective",
    date: "March 15, 2024",
    readTime: "8 min read",
    author: "Ray Tong",
    category: "Architecture",
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-300">
        The debate between Retrieval-Augmented Generation (RAG) and Long Context Windows has become a central theme in AI architecture. As model context windows expand to millions of tokens, some argue that RAG is becoming obsolete. However, a deeper architectural analysis reveals a more nuanced reality.
      </p>

      <h2 class="text-2xl font-bold mb-4 text-indigo-400">The Efficiency Paradox</h2>
      <p class="mb-6 leading-relaxed text-slate-400">
        While a 1M+ token window allows you to "dump everything in," it doesn't necessarily mean you should. Computational costs scale non-linearly with context length in many architectures. RAG remains the most cost-effective way to filter noise and provide only the most relevant signal to the model.
      </p>

      <h2 class="text-2xl font-bold mb-4 text-indigo-400">Dynamic Knowledge vs. Static Snapshots</h2>
      <p class="mb-6 leading-relaxed text-slate-400">
        One of RAG's greatest strengths is its ability to interface with living data. A vector database can be updated in milliseconds without re-stuffing a context window. For enterprise applications where data changes rapidly, RAG isn't just a retrieval method; it's a data synchronization strategy.
      </p>

      <blockquote class="border-l-4 border-indigo-500 pl-6 py-2 my-8 italic text-slate-300 bg-indigo-500/5 rounded-r-lg">
        "The future isn't RAG OR Long Context; it's intelligent orchestration between the two."
      </blockquote>

      <h2 class="text-2xl font-bold mb-4 text-indigo-400">Conclusion</h2>
      <p class="mb-6 leading-relaxed text-slate-400">
        As architects, our goal is to build systems that are robust, scalable, and cost-efficient. By using RAG for initial filtering and Long Context for deep reasoning over the retrieved set, we achieve the best of both worlds.
      </p>
    `
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <nav className="fixed top-0 w-full z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight hover:text-indigo-400 transition-colors">
            RAY TONG <span className="text-indigo-400">/ AI Architect</span>
          </Link>
          <Link href="/#blog" className="text-sm font-medium hover:text-indigo-400 transition-colors flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 text-sm text-indigo-400 font-medium mb-4 uppercase tracking-wider">
              <span>{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm border-y border-slate-800/50 py-6">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <div 
            className="prose prose-invert prose-indigo max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-12 border-t border-slate-800">
            <h3 className="text-xl font-bold mb-6 italic text-slate-400">Enjoyed this perspective?</h3>
            <p className="text-slate-500 mb-8">I regularly share architectural insights on the intersection of LLMs, agentic workflows, and enterprise infrastructure.</p>
            <Link href="/#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition-all">
              Discuss Architecture
            </Link>
          </div>
        </article>
      </main>

      <footer className="py-8 px-6 text-center text-sm text-slate-500 border-t border-slate-900">
        &copy; {new Date().getFullYear()} Ray Tong. All rights reserved.
      </footer>
    </div>
  );
}
