"use client";

import { motion } from "framer-motion";
import { ExternalLink, Box, Sparkles, ChevronRight } from "lucide-react";

export default function ProjectShowcase({ data }: { data: any }) {
  const { inventory } = data;

  return (
    <section className="min-h-screen py-24 px-8 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="space-y-4 mb-20">
         <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
           System <span className="text-cyber-violet">Inventory</span>
         </h2>
         <p className="text-white/40 max-w-lg">
           Key architectural artifacts and production-grade AI subsystems.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {inventory.map((item: any, i: number) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.02 }}
            className={`glass-card p-10 rounded-[40px] flex flex-col gap-10 group relative overflow-hidden ${
              i === 0 ? "border-cyber-violet/20" : "border-cyber-green/20"
            }`}
          >
            {/* Decors */}
            <div className={`absolute -top-12 -right-12 w-48 h-48 rounded-full blur-[80px] opacity-10 ${
              i === 1 ? "bg-cyber-green" : "bg-cyber-violet"
            }`} />

            <div className="flex justify-between items-start relative z-10">
               <div className={`p-5 rounded-2xl border ${
                 i === 1 ? "bg-cyber-green/5 border-cyber-green/20" : "bg-cyber-violet/5 border-cyber-violet/20"
               }`}>
                  <Box className={`w-10 h-10 ${i === 1 ? "text-cyber-green" : "text-cyber-violet"}`} />
               </div>
               <span className={`text-[10px] px-4 py-1 rounded-full font-bold uppercase tracking-widest border ${
                  i === 1 ? "bg-cyber-green/10 border-cyber-green/20 text-cyber-green" : "bg-cyber-violet/10 border-cyber-violet/20 text-cyber-violet"
               }`}>
                  Rarity: {item.rarity}
               </span>
            </div>

            <div className="space-y-4 relative z-10">
               <h3 className="text-4xl font-bold text-white group-hover:cyber-glow-text transition-all tracking-tight">
                 {item.name}
               </h3>
               <p className="text-white/60 text-lg leading-relaxed font-sans max-w-md">
                 {item.description}
               </p>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10">
               {item.stack.map((s: string) => (
                 <span key={s} className="text-[10px] font-mono text-white/40 border border-white/5 px-3 py-1 rounded-lg">
                   {s}
                 </span>
               ))}
            </div>

            <div className="pt-8 mt-auto flex justify-between items-center relative z-10">
               <button className="flex items-center gap-2 text-xs font-bold text-cyber-green hover:underline tracking-widest">
                  ACCESS REPOSITORY <ExternalLink className="w-3 h-3" />
               </button>
               <div className="flex items-center gap-2 opacity-20">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-[10px]">VERIFIED_BUILD</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
