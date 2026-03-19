'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Cpu, Search, CheckCircle2, ChevronRight, Play, RefreshCcw } from 'lucide-react';

type Step = {
  id: string;
  type: 'planning' | 'tool' | 'observation' | 'final';
  content: string;
  detail?: string;
  delay?: number;
};

const DEMO_STEPS: Step[] = [
  {
    id: '1',
    type: 'planning',
    content: 'Analyzing user request: "Find recent papers on LLM quantization and summarize their findings."',
    detail: 'Strategy: Search academic databases -> Filter by date -> Extract core findings -> Synthesize summary.',
    delay: 1000
  },
  {
    id: '2',
    type: 'tool',
    content: 'Calling SearchTool: { query: "LLM quantization 2024-2025 papers" }',
    detail: 'Connecting to Semantic Scholar API...',
    delay: 1500
  },
  {
    id: '3',
    type: 'observation',
    content: 'Found 12 matching papers. Top relevant results: "Efficient Bit-Level Quantization", "Quantized KV Cache Optimization".',
    delay: 1200
  },
  {
    id: '4',
    type: 'planning',
    content: 'Synthesizing summaries for selected papers.',
    detail: 'Focusing on hardware efficiency and perplexity trade-offs.',
    delay: 1000
  },
  {
    id: '5',
    type: 'final',
    content: 'Summary Complete: Recent trends show a shift towards 2-bit quantization and hybrid precision RAG systems.',
    detail: 'Successfully processed 12 sources in 4.2 seconds.',
    delay: 800
  }
];

export function AIDemo() {
  const [activeSteps, setActiveSteps] = useState<Step[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const startDemo = async () => {
    setIsPlaying(true);
    setActiveSteps([]);
    
    for (const step of DEMO_STEPS) {
      setIsTyping(true);
      await new Promise(r => setTimeout(r, step.delay || 1000));
      setActiveSteps(prev => [...prev, step]);
      setIsTyping(false);
    }
    setIsPlaying(false);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [activeSteps, isTyping]);

  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="px-6 py-4 bg-slate-800/50 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <span className="text-sm font-mono text-slate-400 ml-2">agent_orchestrator_v2.log</span>
        </div>
        <button 
          onClick={startDemo} 
          disabled={isPlaying}
          className="flex items-center gap-2 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:hover:bg-indigo-600 rounded text-xs font-bold transition-all uppercase tracking-wider"
        >
          {isPlaying ? <RefreshCcw size={14} className="animate-spin" /> : <Play size={14} />}
          {isPlaying ? 'Running' : 'Run Demo'}
        </button>
      </div>

      {/* Content */}
      <div 
        ref={scrollRef}
        className="h-[450px] overflow-y-auto p-6 space-y-4 scroll-smooth bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,1),rgba(15,23,42,1))]"
      >
        {activeSteps.length === 0 && !isTyping && (
          <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4">
            <Terminal size={48} strokeWidth={1} />
            <p className="text-sm font-mono">Initialize agentic workflow to see it in action.</p>
          </div>
        )}

        {activeSteps.map((step) => (
          <div key={step.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="flex gap-4">
              <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
                step.type === 'planning' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                step.type === 'tool' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                step.type === 'observation' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
              }`}>
                {step.type === 'planning' && <Cpu size={16} />}
                {step.type === 'tool' && <Terminal size={16} />}
                {step.type === 'observation' && <Search size={16} />}
                {step.type === 'final' && <CheckCircle2 size={16} />}
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] uppercase font-bold tracking-widest ${
                    step.type === 'planning' ? 'text-blue-500' :
                    step.type === 'tool' ? 'text-amber-500' :
                    step.type === 'observation' ? 'text-purple-500' :
                    'text-emerald-500'
                  }`}>
                    {step.type}
                  </span>
                  <div className="h-px flex-1 bg-slate-800/50" />
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">{step.content}</p>
                {step.detail && (
                  <p className="text-xs text-slate-500 font-mono pl-4 border-l border-slate-800">{step.detail}</p>
                )}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-4 animate-pulse">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-2 border-indigo-500/30 border-t-indigo-500 animate-spin" />
            </div>
            <div className="flex-1 space-y-2 py-1">
              <div className="h-2 w-24 bg-slate-800 rounded" />
              <div className="h-4 w-full bg-slate-800/50 rounded" />
            </div>
          </div>
        )}
      </div>

      {/* Footer / Workflow Path */}
      <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 flex items-center gap-4 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
        <span>Input</span>
        <ChevronRight size={12} />
        <span className={activeSteps.some(s => s.type === 'planning') ? 'text-indigo-400' : ''}>Planning</span>
        <ChevronRight size={12} />
        <span className={activeSteps.some(s => s.type === 'tool') ? 'text-indigo-400' : ''}>Tool Call</span>
        <ChevronRight size={12} />
        <span className={activeSteps.some(s => s.type === 'observation') ? 'text-indigo-400' : ''}>Observation</span>
        <ChevronRight size={12} />
        <span className={activeSteps.some(s => s.type === 'final') ? 'text-indigo-400' : ''}>Final Result</span>
      </div>
    </div>
  );
}
