import { ArrowLeft, Calendar, Clock, Tag, Share2, MessageSquare } from "lucide-react";
import Link from "next/link";

interface BlogPostProps {
  title: string;
  date: string;
  readTime: string;
  category: string;
  content: React.ReactNode;
  tags: string[];
}

export function BlogPostLayout({ title, date, readTime, category, content, tags }: BlogPostProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <nav className="fixed top-0 w-full z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/#insights" className="flex items-center gap-2 text-sm text-slate-400 hover:text-indigo-400 transition-colors">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <span className="font-bold text-lg tracking-tight hidden sm:inline-block">
            RAY TONG <span className="text-indigo-400">/ BLOG</span>
          </span>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-indigo-400 mb-4 font-medium uppercase tracking-wider">
              <span>{category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-slate-400 text-sm border-y border-slate-800/50 py-4">
              <div className="flex items-center gap-2">
                <Calendar size={16} /> {date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} /> {readTime}
              </div>
              <div className="flex items-center gap-2">
                <Tag size={16} /> {tags.join(", ")}
              </div>
            </div>
          </header>

          <div className="prose prose-invert prose-indigo max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight
            prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
            prose-strong:text-white prose-code:text-indigo-300
            prose-blockquote:border-l-indigo-500 prose-blockquote:bg-indigo-500/5 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
          ">
            {content}
          </div>

          <footer className="mt-16 pt-8 border-t border-slate-800/50">
            <div className="flex flex-wrap justify-between items-center gap-6">
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-indigo-500/50 transition-all text-sm">
                  <Share2 size={16} /> Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-indigo-500/50 transition-all text-sm">
                  <MessageSquare size={16} /> Discuss
                </button>
              </div>
              <Link href="/#insights" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-2 transition-colors">
                Read more insights <ArrowLeft size={16} className="rotate-180" />
              </Link>
            </div>
          </footer>
        </article>
      </main>

      <footer className="py-12 px-6 text-center text-sm text-slate-500 border-t border-slate-900 bg-slate-900/20">
        <p className="mb-4">Architecting the future of agentic systems.</p>
        &copy; {new Date().getFullYear()} Ray Tong.
      </footer>
    </div>
  );
}
