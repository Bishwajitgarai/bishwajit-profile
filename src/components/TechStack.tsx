"use client";

import { motion } from "framer-motion";
import { Cpu, Database, Server, Box, Binary, ShieldCheck, Zap } from "lucide-react";

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
    <section className="min-h-screen py-32 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6 mb-32"
      >
         <div className="flex items-center gap-4 text-cyber-green text-[10px] font-mono tracking-[0.4em] uppercase">
            <Zap className="w-4 h-4" />
            <span>Capability_Matrix_v4.2</span>
         </div>
         <h2 className="text-4xl sm:text-7xl font-bold text-white tracking-tighter uppercase leading-none">
           Technical <br /><span className="text-white/20 italic font-light lowercase">Ecosystem</span>
         </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12 relative">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none hidden lg:block">
           <div className="grid grid-cols-3 h-full border-x border-white/20">
              <div className="border-r border-white/20" />
              <div className="border-r border-white/20" />
           </div>
        </div>

        {skillMatrix.map((cat: any, i: number) => {
          const Icon = iconMap[cat.category] || Cpu;
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-10 group relative z-10"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                   <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl group-hover:border-cyber-green/40 transition-all">
                      <Icon className="w-8 h-8 text-white/20 group-hover:text-cyber-green transition-colors" />
                   </div>
                   <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">{cat.category.split(' ')[0]} / 0x{i}</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{cat.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                 {cat.skills.map((skill: string) => (
                   <span 
                     key={skill} 
                     className="px-4 py-2 bg-transparent rounded-lg text-xs font-mono font-medium text-white/40 border border-white/10 hover:border-cyber-green/40 hover:text-white transition-all cursor-default"
                   >
                     {skill}
                   </span>
                 ))}
              </div>

              <div className="pt-6 flex items-center gap-4 opacity-5">
                 <div className="h-px flex-1 bg-white" />
                 <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
