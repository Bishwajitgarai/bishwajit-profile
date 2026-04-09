"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Server, GitBranch, Box, Binary, ShieldCheck } from "lucide-react";

export default function TechStack({ data }: { data: any }) {
  const { skillMatrix } = data;

  const iconMap: Record<string, any> = {
    "Languages & Backend": Binary,
    "GenAI & LLM": ShieldCheck,
    "Search & Data": Database,
    "Infra & DevOps": Server,
    "Others": Box
  };

  return (
    <section className="min-h-screen py-16 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="space-y-4 mb-16 sm:mb-24 text-center sm:text-left">
         <div className="flex flex-col sm:flex-row sm:items-end gap-2 overflow-hidden">
            <h2 className="text-4xl sm:text-8xl font-bold text-white tracking-tighter leading-none">
              Skill <span className="text-cyber-green">Matrix</span>
            </h2>
            <div className="h-[2px] flex-1 bg-cyber-green/20 mb-2 sm:mb-3 hidden sm:block" />
         </div>
         <p className="text-white/40 max-w-lg text-xs sm:text-base">
           Multi-layered technical stack specializing in production-ready backend logic and LLMOps.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
        {skillMatrix.map((cat: any, i: number) => {
          const Icon = iconMap[cat.category] || Cpu;
          return (
            <motion.div
              key={cat.category}
              whileHover={{ y: -10 }}
              className="glass-card p-8 sm:p-12 rounded-[32px] sm:rounded-[40px] border-white/5 space-y-6 sm:space-y-10 flex flex-col h-full relative group overflow-hidden"
            >
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-green/5 blur-3xl group-hover:bg-cyber-green/10 transition-colors" />

              <div className="flex items-center justify-between relative z-10">
                 <div className="p-4 sm:p-5 bg-cyber-green/10 rounded-2xl border border-cyber-green/20 shadow-[0_0_15px_rgba(0,255,157,0.1)]">
                    <Icon className="w-6 h-6 sm:w-10 sm:h-10 text-cyber-green" />
                 </div>
                 <span className="text-[10px] font-bold text-cyber-green/40 tracking-[0.4em] uppercase">Ready</span>
              </div>
              
              <div className="space-y-2 relative z-10">
                 <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyber-green transition-colors">{cat.category}</h3>
                 <div className="w-12 h-1 bg-cyber-green/20 rounded-full" />
              </div>
              
              <div className="flex-1 flex flex-wrap gap-2.5 sm:gap-3 content-start relative z-10">
                 {cat.skills.map((skill: string) => (
                   <span 
                     key={skill} 
                     className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white/[0.03] rounded-xl text-[10px] sm:text-xs font-bold border border-white/5 hover:border-cyber-green/40 hover:bg-cyber-green/5 transition-all cursor-default"
                   >
                     {skill}
                   </span>
                 ))}
              </div>

              <div className="pt-8 border-t border-white/5 flex items-center justify-between opacity-50 relative z-10">
                 <div className="flex gap-1.5">
                    {[1, 2, 3, 4].map(v => <div key={v} className="w-4 h-1 bg-cyber-green rounded-full opacity-40" />)}
                 </div>
                 <p className="text-[8px] sm:text-[10px] font-bold text-white uppercase tracking-widest">Verified_Stack</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
