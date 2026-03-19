"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Send, 
  Bot, 
  User, 
  Search, 
  Code, 
  CheckCircle2, 
  Loader2, 
  Brain, 
  Wand2,
  Terminal,
  Cpu
} from "lucide-react";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  steps?: AgentStep[];
};

type AgentStep = {
  type: "planning" | "tool" | "thinking" | "result";
  label: string;
  content: string;
  icon?: React.ReactNode;
};

const DEMO_SCENARIO: {
  userMessage: string;
  steps: AgentStep[];
  response: string;
} = {
  userMessage: "Can you analyze the sentiment of recent market trends and suggest an investment strategy?",
  steps: [
    {
      type: "planning",
      label: "Task Decomposition",
      content: "1. Fetch recent market sentiment data\n2. Analyze sector-specific trends\n3. Synthesize risk-adjusted strategy",
      icon: <Brain size={16} />
    },
    {
      type: "tool",
      label: "Tool Call: finance_search",
      content: "Searching for 'Q1 2026 market sentiment' and 'Fed rate outlook'...",
      icon: <Search size={16} />
    },
    {
      type: "thinking",
      label: "Analyzing Data",
      content: "Found 15 high-confidence signals. Bullish on Green Energy, Bearish on Legacy Auto. Core inflation is stabilizing.",
      icon: <Cpu size={16} />
    },
    {
      type: "result",
      label: "Final Synthesis",
      content: "Formulating balanced portfolio recommendation with 15% hedge in gold.",
      icon: <CheckCircle2 size={16} />
    }
  ],
  response: "Based on my analysis of current Q1 2026 market signals, I recommend a 'Barbell Strategy'. \n\nFocus on High-Growth Tech (specifically AI infrastructure) while maintaining a defensive position in Green Energy utilities. Market sentiment is cautiously optimistic as inflation targets are met."
};

export default function AgentDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentSteps, setCurrentSteps] = useState<AgentStep[]>([]);
  const [demoStarted, setDemoStarted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, currentSteps, isTyping]);

  const runDemo = async () => {
    if (demoStarted) return;
    setDemoStarted(true);
    
    // 1. User Message
    setMessages([{ id: "1", role: "user", content: DEMO_SCENARIO.userMessage }]);
    await new Promise(r => setTimeout(r, 1000));
    
    // 2. Start Agent Thinking
    setIsTyping(true);
    
    // 3. Show Steps one by one
    for (const step of DEMO_SCENARIO.steps) {
      await new Promise(r => setTimeout(r, 1500));
      setCurrentSteps(prev => [...prev, step]);
    }
    
    await new Promise(r => setTimeout(r, 1000));
    
    // 4. Final Response
    setMessages(prev => [...prev, { 
      id: "2", 
      role: "assistant", 
      content: DEMO_SCENARIO.response,
      steps: DEMO_SCENARIO.steps
    }]);
    
    setIsTyping(false);
    setCurrentSteps([]);
  };

  return (
    <div className="w-full max-w-4xl mx-auto border border-slate-800 rounded-2xl bg-slate-950 overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-slate-900/50 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-4 text-xs font-mono text-slate-500 uppercase tracking-widest">Agentic Workflow Simulator</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
          <Wand2 size={12} className="text-indigo-400" />
          <span className="text-[10px] font-bold text-indigo-400 uppercase">Live Demo</span>
        </div>
      </div>

      {/* Chat Area */}
      <div 
        ref={scrollRef}
        className="h-[500px] overflow-y-auto p-6 space-y-6 scroll-smooth bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/20 via-slate-950 to-slate-950"
      >
        {messages.length === 0 && !demoStarted && (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
            <div className="p-4 bg-indigo-500/10 rounded-full border border-indigo-500/20 animate-pulse">
              <Bot size={48} className="text-indigo-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Interactive AI Agent Demo</h3>
              <p className="text-slate-400 text-sm max-w-sm">
                Experience how a modern agentic workflow operates—decomposing tasks, utilizing tools, and synthesizing results.
              </p>
            </div>
            <button 
              onClick={runDemo}
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-semibold transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2"
            >
              Start Simulation
            </button>
          </div>
        )}

        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                msg.role === "user" ? "bg-slate-800" : "bg-indigo-600 shadow-lg shadow-indigo-500/20"
              }`}>
                {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className="space-y-4">
                <div className={`p-4 rounded-2xl ${
                  msg.role === "user" 
                    ? "bg-slate-800/80 text-slate-100 rounded-tr-none" 
                    : "bg-slate-900/80 border border-slate-800 text-slate-200 rounded-tl-none"
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                </div>
                
                {msg.role === "assistant" && msg.steps && (
                  <div className="grid grid-cols-1 gap-2">
                    {msg.steps.map((step, i) => (
                      <div key={i} className="flex items-center gap-3 px-3 py-2 bg-slate-900/40 border border-slate-800/50 rounded-lg text-[11px] text-slate-500">
                        <span className="text-indigo-400/70">{step.icon}</span>
                        <span className="font-mono uppercase tracking-tighter opacity-70">{step.label}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-700" />
                        <span className="truncate">{step.content.split('\n')[0]}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="max-w-[85%] flex gap-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0 animate-pulse">
                <Bot size={16} />
              </div>
              <div className="space-y-3 w-full">
                {/* Steps Timeline */}
                <div className="space-y-2">
                  {currentSteps.map((step, i) => (
                    <div 
                      key={i} 
                      className="flex flex-col gap-2 p-3 bg-slate-900/80 border border-indigo-500/20 rounded-xl animate-in slide-in-from-left-2 duration-300"
                    >
                      <div className="flex items-center gap-2 text-indigo-400 font-bold text-[10px] uppercase tracking-wider">
                        {step.icon}
                        {step.label}
                      </div>
                      <div className="text-xs text-slate-300 font-mono leading-relaxed pl-6 border-l border-slate-800 ml-2 py-1">
                        {step.content}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Active Loader */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/50 rounded-2xl border border-slate-800/50 w-fit">
                  <Loader2 size={14} className="animate-spin text-indigo-400" />
                  <span className="text-xs text-slate-400 font-medium">Agent is thinking...</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Placeholder */}
      <div className="p-4 bg-slate-900/30 border-t border-slate-800">
        <div className="flex gap-3">
          <div className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 flex items-center justify-between group">
            <span className="text-sm text-slate-600">Ask the agent anything...</span>
            <div className="flex gap-2">
              <Terminal size={14} className="text-slate-700 group-hover:text-indigo-500/50 transition-colors" />
              <Code size={14} className="text-slate-700 group-hover:text-indigo-500/50 transition-colors" />
            </div>
          </div>
          <button 
            disabled 
            className="w-12 h-12 bg-indigo-600/20 text-indigo-400 rounded-xl flex items-center justify-center cursor-not-allowed border border-indigo-500/10"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
