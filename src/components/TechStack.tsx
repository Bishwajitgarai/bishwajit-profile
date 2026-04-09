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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section className="min-h-[70vh] py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6 mb-20"
      >
         <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
           Technical <span className="text-cyber-green/60 italic font-light">Ecosystem</span>
         </h2>
         <div className="w-16 h-1 bg-cyber-green/30" />
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {skillMatrix.map((cat: any) => {
          const Icon = iconMap[cat.category] || Cpu;
          return (
            <motion.div
              key={cat.category}
              variants={item}
              className="premium-card p-8 sm:p-10 rounded-3xl space-y-8 flex flex-col group h-full"
            >
              <div className="flex items-center justify-between">
                 <Icon className="w-8 h-8 text-cyber-green opacity-40 group-hover:opacity-100 transition-opacity" />
                 <span className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-widest">Type: {cat.category.split(' ')[0]}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white tracking-tight">{cat.category}</h3>
              
              <div className="flex-1 flex flex-wrap gap-2 content-start">
                 {cat.skills.map((skill: string) => (
                   <span 
                     key={skill} 
                     className="px-4 py-2 bg-white/[0.02] rounded-lg text-xs font-medium text-white/60 border border-white/[0.05] hover:border-cyber-green/40 hover:text-white transition-all cursor-default"
                   >
                     {skill}
                   </span>
                 ))}
              </div>

              <div className="pt-6 border-t border-white/[0.05] flex items-center justify-between opacity-30">
                 <p className="text-[9px] font-bold uppercase tracking-widest">Stack_Component</p>
                 <div className="w-1.5 h-1.5 rounded-full bg-cyber-green" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
