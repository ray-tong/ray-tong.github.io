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
    <div className="min-h-screen bg-[#0a0a0a] text-[#00ff41] font-mono">
      <nav className="fixed top-0 w-full z-50 border-b border-[#003b00] bg-[#050505]/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/#insights" className="flex items-center gap-2 text-sm text-[#00ff41]/70 hover:text-[#00ff41] transition-colors">
            <ArrowLeft size={16} /> BACK_TO_INSIGHTS
          </Link>
          <span className="font-bold text-lg tracking-tight hidden sm:inline-block neon-glow">
            RAY TONG <span className="text-[#00ff41]">/ BLOG</span>
          </span>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-[#00ff41] mb-4 font-bold uppercase tracking-widest">
              <span>{category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight neon-glow text-white">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-[#00ff41]/60 text-sm border-y border-[#003b00] py-4">
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

          <div className="prose prose-invert prose-emerald max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
            prose-p:text-[#00ff41]/80 prose-p:leading-relaxed prose-p:mb-6
            prose-strong:text-white prose-code:text-[#00ff41]
            prose-blockquote:border-l-[#00ff41] prose-blockquote:bg-[#00ff41]/5 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-[#00ff41]
          ">
            {content}
          </div>

          <footer className="mt-16 pt-8 border-t border-[#003b00]">
            <div className="flex flex-wrap justify-between items-center gap-6">
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#050505] border border-[#003b00] rounded hover:border-[#00ff41] transition-all text-sm">
                  <Share2 size={16} /> SHARE
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#050505] border border-[#003b00] rounded hover:border-[#00ff41] transition-all text-sm">
                  <MessageSquare size={16} /> DISCUSS
                </button>
              </div>
              <Link href="/#insights" className="text-[#00ff41] hover:text-white font-bold flex items-center gap-2 transition-colors">
                READ_MORE <ArrowLeft size={16} className="rotate-180" />
              </Link>
            </div>
          </footer>
        </article>
      </main>

      <footer className="py-12 px-6 text-center text-sm text-[#00ff41]/30 border-t border-[#003b00] bg-[#050505]">
        <p className="mb-4">Architecting the future of agentic systems.</p>
        &copy; {new Date().getFullYear()} Ray Tong.
      </footer>
    </div>
  );
}
