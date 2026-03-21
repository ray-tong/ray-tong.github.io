"use client";

import { useState, useMemo } from "react";
import { Filter, Clock, Zap, ChevronRight } from "lucide-react";

interface Skill {
  name: string;
  category: string;
  level: 1 | 2 | 3 | 4 | 5;
  levelLabel: string;
  hoursInvested: number;
  tag?: string;
}

const SKILLS: Skill[] = [
  // LLMs
  { name: "OpenAI API", category: "LLMs", level: 5, levelLabel: "Expert", hoursInvested: 800 },
  { name: "LangChain", category: "LLMs", level: 5, levelLabel: "Expert", hoursInvested: 600 },
  { name: "LangGraph", category: "LLMs", level: 5, levelLabel: "Expert", hoursInvested: 500, tag: "Core" },
  { name: "Ollama", category: "LLMs", level: 4, levelLabel: "Advanced", hoursInvested: 300 },
  { name: "Hugging Face", category: "LLMs", level: 4, levelLabel: "Advanced", hoursInvested: 400 },
  { name: "Fine-Tuning", category: "LLMs", level: 3, levelLabel: "Intermediate", hoursInvested: 200 },
  { name: "Quantization", category: "LLMs", level: 3, levelLabel: "Intermediate", hoursInvested: 150 },
  { name: "LoRA / QLoRA", category: "LLMs", level: 3, levelLabel: "Intermediate", hoursInvested: 180 },

  // RAG & Vector DBs
  { name: "Pinecone", category: "RAG & Vector", level: 5, levelLabel: "Expert", hoursInvested: 400, tag: "Core" },
  { name: "Milvus", category: "RAG & Vector", level: 4, levelLabel: "Advanced", hoursInvested: 300 },
  { name: "pgvector", category: "RAG & Vector", level: 4, levelLabel: "Advanced", hoursInvested: 250 },
  { name: "Hybrid Search", category: "RAG & Vector", level: 5, levelLabel: "Expert", hoursInvested: 350 },
  { name: "Chroma", category: "RAG & Vector", level: 3, levelLabel: "Intermediate", hoursInvested: 120 },
  { name: "FAISS", category: "RAG & Vector", level: 3, levelLabel: "Intermediate", hoursInvested: 150 },

  // Infrastructure
  { name: "Docker", category: "Infrastructure", level: 5, levelLabel: "Expert", hoursInvested: 700, tag: "Core" },
  { name: "Kubernetes", category: "Infrastructure", level: 4, levelLabel: "Advanced", hoursInvested: 400 },
  { name: "AWS", category: "Infrastructure", level: 4, levelLabel: "Advanced", hoursInvested: 500 },
  { name: "GCP", category: "Infrastructure", level: 3, levelLabel: "Intermediate", hoursInvested: 200 },
  { name: "Terraform", category: "Infrastructure", level: 4, levelLabel: "Advanced", hoursInvested: 300 },
  { name: "CI/CD (GitHub Actions)", category: "Infrastructure", level: 4, levelLabel: "Advanced", hoursInvested: 350 },
  { name: "Nginx", category: "Infrastructure", level: 3, levelLabel: "Intermediate", hoursInvested: 150 },

  // Data Engineering
  { name: "Python", category: "Data Engineering", level: 5, levelLabel: "Expert", hoursInvested: 2000, tag: "Core" },
  { name: "PyTorch", category: "Data Engineering", level: 4, levelLabel: "Advanced", hoursInvested: 500 },
  { name: "Pandas", category: "Data Engineering", level: 5, levelLabel: "Expert", hoursInvested: 600 },
  { name: "PostgreSQL", category: "Data Engineering", level: 4, levelLabel: "Advanced", hoursInvested: 400 },
  { name: "Redis", category: "Data Engineering", level: 3, levelLabel: "Intermediate", hoursInvested: 200 },
  { name: "Apache Kafka", category: "Data Engineering", level: 3, levelLabel: "Intermediate", hoursInvested: 150 },

  // Frontend
  { name: "Next.js", category: "Frontend", level: 4, levelLabel: "Advanced", hoursInvested: 400, tag: "Core" },
  { name: "React", category: "Frontend", level: 4, levelLabel: "Advanced", hoursInvested: 500 },
  { name: "TypeScript", category: "Frontend", level: 4, levelLabel: "Advanced", hoursInvested: 400 },
  { name: "Tailwind CSS", category: "Frontend", level: 4, levelLabel: "Advanced", hoursInvested: 300 },

  // Backend / APIs
  { name: "FastAPI", category: "Backend", level: 5, levelLabel: "Expert", hoursInvested: 600, tag: "Core" },
  { name: "Node.js", category: "Backend", level: 3, levelLabel: "Intermediate", hoursInvested: 250 },
  { name: "REST / OpenAPI", category: "Backend", level: 5, levelLabel: "Expert", hoursInvested: 700 },
  { name: "GraphQL", category: "Backend", level: 2, levelLabel: "Beginner", hoursInvested: 80 },
  { name: "gRPC", category: "Backend", level: 3, levelLabel: "Intermediate", hoursInvested: 150 },
];

const CATEGORIES = ["All", ...Array.from(new Set(SKILLS.map(s => s.category)))];

const LEVEL_COLORS: Record<number, string> = {
  1: "bg-[#003b00] border-[#003b00]",
  2: "bg-[#005500] border-[#00ff41]/30",
  3: "bg-[#007700] border-[#00ff41]/50",
  4: "bg-[#00aa00] border-[#00ff41]/70",
  5: "bg-[#00ff41] border-[#00ff41]",
};

const LEVEL_TEXT: Record<number, string> = {
  1: "text-[#00ff41]/30",
  2: "text-[#00ff41]/50",
  3: "text-[#00ff41]/70",
  4: "text-[#00ff41]/90",
  5: "text-[#00ff41]",
};

const LEVEL_GLOW: Record<number, string> = {
  1: "",
  2: "",
  3: "shadow-[0_0_4px_rgba(0,255,65,0.2)]",
  4: "shadow-[0_0_8px_rgba(0,255,65,0.4)]",
  5: "shadow-[0_0_15px_rgba(0,255,65,0.7)]",
};

function ProficiencyBars({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5 items-end h-4">
      {[1, 2, 3, 4, 5].map(i => (
        <div
          key={i}
          className={`w-1.5 rounded-sm transition-all duration-300 border ${
            i <= level
              ? `${LEVEL_COLORS[level as keyof typeof LEVEL_COLORS]} ${LEVEL_GLOW[level as keyof typeof LEVEL_GLOW]}`
              : "bg-[#0a0a0a] border-[#003b00]"
          }`}
          style={{ height: `${(i / 5) * 100}%`, minHeight: "3px" }}
        />
      ))}
    </div>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div
      className={`
        relative p-4 border border-[#003b00] bg-[#050505] rounded
        hover:border-[#00ff41] hover:bg-[#003b00]/20
        transition-all duration-200 group cursor-default
        ${skill.level === 5 ? "shadow-[0_0_8px_rgba(0,255,65,0.15)]" : ""}
      `}
    >
      {skill.tag && (
        <span className="absolute top-2 right-2 text-[9px] font-bold tracking-widest uppercase text-[#00ff41] border border-[#00ff41]/40 rounded px-1.5 py-0.5 bg-[#00ff41]/5">
          {skill.tag}
        </span>
      )}
      <div className="flex items-start justify-between mb-3 pr-8">
        <span className={`font-bold text-sm leading-tight ${LEVEL_TEXT[skill.level]}`}>
          {skill.name}
        </span>
      </div>
      <div className="flex items-end justify-between mt-auto">
        <div className="flex flex-col gap-1.5">
          <ProficiencyBars level={skill.level} />
          <span className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
            {skill.levelLabel}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] opacity-40 group-hover:opacity-60 transition-opacity">
          <Clock size={10} />
          <span className="font-mono">{skill.hoursInvested >= 1000 ? `${(skill.hoursInvested / 1000).toFixed(1)}k` : skill.hoursInvested}h</span>
        </div>
      </div>
    </div>
  );
}

export default function TechStackMatrix() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"level" | "hours">("level");

  const filtered = useMemo(() => {
    const base = activeCategory === "All"
      ? SKILLS
      : SKILLS.filter(s => s.category === activeCategory);

    return [...base].sort((a, b) =>
      sortBy === "level" ? b.level - a.level : b.hoursInvested - a.hoursInvested
    );
  }, [activeCategory, sortBy]);

  const totalHours = useMemo(
    () => filtered.reduce((acc, s) => acc + s.hoursInvested, 0),
    [filtered]
  );

  const expertCount = useMemo(
    () => filtered.filter(s => s.level >= 4).length,
    [filtered]
  );

  return (
    <div className="font-mono">
      {/* Header Stats */}
      <div className="flex flex-wrap gap-6 mb-8 p-4 border border-[#003b00] bg-[#050505] rounded">
        <div className="flex items-center gap-2">
          <Zap size={14} className="text-[#00ff41]" />
          <span className="text-xs uppercase tracking-widest opacity-50">Skills Loaded</span>
          <span className="text-lg font-bold text-white ml-1">{filtered.length}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={14} className="text-[#00ff41]" />
          <span className="text-xs uppercase tracking-widest opacity-50">Hours Invested</span>
          <span className="text-lg font-bold text-white ml-1">{(totalHours / 1000).toFixed(1)}k</span>
        </div>
        <div className="flex items-center gap-2">
          <ChevronRight size={14} className="text-[#00ff41]" />
          <span className="text-xs uppercase tracking-widest opacity-50">Adv+ Skills</span>
          <span className="text-lg font-bold text-white ml-1">{expertCount}</span>
        </div>
      </div>

      {/* Filter Controls */}
      <div className="flex flex-wrap gap-3 mb-6 items-center">
        <div className="flex items-center gap-2 mr-2 text-xs uppercase tracking-widest opacity-50">
          <Filter size={12} />
          <span>Filter:</span>
        </div>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`
              px-3 py-1.5 text-xs font-bold tracking-widest uppercase rounded transition-all duration-200 border
              ${activeCategory === cat
                ? "bg-[#00ff41] text-black border-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.4)]"
                : "bg-transparent text-[#00ff41]/60 border-[#003b00] hover:border-[#00ff41]/50 hover:text-[#00ff41]"
              }
            `}
          >
            {cat}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2">
          <span className="text-xs uppercase tracking-widest opacity-40">Sort:</span>
          <button
            onClick={() => setSortBy("level")}
            className={`text-xs px-2 py-1 border rounded transition-all ${sortBy === "level" ? "border-[#00ff41]/60 text-[#00ff41]" : "border-[#003b00] text-[#00ff41]/40 hover:border-[#00ff41]/30"}`}
          >
            Level
          </button>
          <button
            onClick={() => setSortBy("hours")}
            className={`text-xs px-2 py-1 border rounded transition-all ${sortBy === "hours" ? "border-[#00ff41]/60 text-[#00ff41]" : "border-[#003b00] text-[#00ff41]/40 hover:border-[#00ff41]/30"}`}
          >
            Hours
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6">
        {[1, 2, 3, 4, 5].map(lvl => (
          <div key={lvl} className="flex items-center gap-2">
            <ProficiencyBars level={lvl} />
            <span className={`text-[10px] uppercase tracking-widest ${LEVEL_TEXT[lvl]} opacity-70`}>
              {["Novice", "Beginner", "Intermediate", "Advanced", "Expert"][lvl - 1]}
            </span>
          </div>
        ))}
      </div>

      {/* Skills Grid */}
      <div
        key={activeCategory + sortBy}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
        style={{ animation: "fadeIn 0.25s ease-out" }}
      >
        {filtered.map(skill => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
