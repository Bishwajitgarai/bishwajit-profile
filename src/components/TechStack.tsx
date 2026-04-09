"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Server, GitBranch, Box } from "lucide-react";

export default function TechStack({ data }: { data: any }) {
  const { skillMatrix } = data;

  const icons = [Cpu, Database, Server, GitBranch, Box];

  return (
    <section className="min-h-screen py-24 px-8 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="space-y-4 mb-20 text-center md:text-left">
         <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
           Skill <span className="text-cyber-green">Matrix</span>
         </h2>
         <p className="text-white/40 max-w-lg">
           Multi-layered technical stack specializing in high-concurrency systems and AI orchestration.
         </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {skillMatrix.map((cat: any, i: number) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={cat.category}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-[32px] border-white/5 space-y-8 flex flex-col h-full"
            >
              <div className="flex items-center justify-between">
                 <div className="p-4 bg-cyber-green/5 rounded-2xl border border-cyber-green/10">
                    <Icon className="w-8 h-8 text-cyber-green" />
                 </div>
                 <span className="text-[10px] font-bold text-cyber-green/40 tracking-[0.4em] uppercase">Ready</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white tracking-tight">{cat.category}</h3>
              
              <div className="flex-1 flex flex-wrap gap-3 content-start">
                 {cat.skills.map((skill: string) => (
                   <span 
                     key={skill} 
                     className="px-4 py-2 bg-white/5 rounded-xl text-xs font-bold border border-white/5 hover:border-cyber-green/30 transition-all cursor-default"
                   >
                     {skill}
                   </span>
                 ))}
              </div>

              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                 <div className="flex gap-1">
                    {[1, 2, 3, 4].map(v => <div key={v} className="w-4 h-1 bg-cyber-green/20 rounded-full" />)}
                 </div>
                 <p className="text-[10px] opacity-30 font-bold uppercase tracking-widest">Core_Verified</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
