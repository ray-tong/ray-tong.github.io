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
    <div className="min-h-screen bg-background text-foreground font-sans">
      <nav className="fixed top-0 w-full z-50 border-b border-accent-secondary bg-background/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/#insights" className="flex items-center gap-2 text-sm text-foreground/70 hover:text-accent transition-colors">
            <ArrowLeft size={16} /> Back to Insights
          </Link>
          <span className="font-bold text-lg tracking-tight hidden sm:inline-block">
            RAY TONG <span className="text-accent">/ BLOG</span>
          </span>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-accent mb-4 font-medium uppercase tracking-wider">
              <span>{category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
              {title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-foreground/70 text-sm border-y border-accent-secondary py-4">
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

          <div className="prose prose-invert prose-accent max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight
            prose-p:text-foreground/80 prose-p:leading-relaxed prose-p:mb-6
            prose-strong:text-foreground prose-code:text-accent
            prose-blockquote:border-l-accent prose-blockquote:bg-accent-secondary/20 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
          ">
            {content}
          </div>

          <footer className="mt-16 pt-8 border-t border-accent-secondary">
            <div className="flex flex-wrap justify-between items-center gap-6">
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-background border border-accent-secondary rounded-lg hover:border-accent/50 transition-all text-sm">
                  <Share2 size={16} /> Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-background border border-accent-secondary rounded-lg hover:border-accent/50 transition-all text-sm">
                  <MessageSquare size={16} /> Discuss
                </button>
              </div>
              <Link href="/#insights" className="text-accent hover:text-accent/80 font-medium flex items-center gap-2 transition-colors">
                Read more insights <ArrowLeft size={16} className="rotate-180" />
              </Link>
            </div>
          </footer>
        </article>
      </main>

      <footer className="py-12 px-6 text-center text-sm text-foreground/50 border-t border-accent-secondary bg-background">
        <p className="mb-4">Architecting the future of agentic systems.</p>
        &copy; {new Date().getFullYear()} Ray Tong.
      </footer>
    </div>
  );
}
