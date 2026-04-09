"use client";

import { motion } from "framer-motion";
import { ExternalLink, Box, Sparkles, ChevronRight, Terminal } from "lucide-react";

export default function ProjectShowcase({ data }: { data: any }) {
  const { inventory } = data;

  return (
    <section className="min-h-screen py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="space-y-4 mb-12 sm:mb-20 text-center sm:text-left">
         <h2 className="text-4xl sm:text-7xl font-bold text-white tracking-tighter">
           System <span className="text-cyber-violet">Inventory</span>
         </h2>
         <p className="text-white/40 max-w-lg text-sm sm:text-base">
           Full repository of production-grade backends, AI agents, and analytical subsystems.
         </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {inventory.map((item: any, i: number) => (
          <motion.div
            key={item.name}
            whileHover={{ y: -5 }}
            className={`glass-card p-6 sm:p-10 rounded-[32px] sm:rounded-[40px] flex flex-col gap-6 sm:gap-10 group relative overflow-hidden h-full ${
              i % 2 === 0 ? "border-cyber-violet/20" : "border-cyber-green/20"
            }`}
          >
            {/* Ambient Background Glow */}
            <div className={`absolute -top-12 -right-12 w-32 sm:w-48 h-32 sm:h-48 rounded-full blur-[60px] sm:blur-[80px] opacity-10 ${
              i % 2 === 1 ? "bg-cyber-green" : "bg-cyber-violet"
            }`} />

            <div className="flex justify-between items-start relative z-10">
               <div className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl border ${
                 i % 2 === 1 ? "bg-cyber-green/5 border-cyber-green/20" : "bg-cyber-violet/5 border-cyber-violet/20"
               }`}>
                  <Terminal className={`w-6 h-6 sm:w-10 sm:h-10 ${i % 2 === 1 ? "text-cyber-green" : "text-cyber-violet"}`} />
               </div>
               <span className={`text-[8px] sm:text-[10px] px-3 sm:px-4 py-1 rounded-full font-bold uppercase tracking-widest border ${
                  i % 2 === 1 ? "bg-cyber-green/10 border-cyber-green/20 text-cyber-green" : "bg-cyber-violet/10 border-cyber-violet/20 text-cyber-violet"
               }`}>
                  {item.rarity}
               </span>
            </div>

            <div className="space-y-3 sm:space-y-4 relative z-10 flex-1">
               <h3 className="text-2xl sm:text-4xl font-bold text-white group-hover:text-cyber-green transition-all tracking-tight">
                 {item.name}
               </h3>
               <p className="text-white/60 text-xs sm:text-lg leading-relaxed font-sans">
                 {item.description}
               </p>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 relative z-10">
               {item.stack.map((s: string) => (
                 <span key={s} className="text-[8px] sm:text-[10px] font-mono text-white/40 border border-white/5 px-2 sm:px-3 py-1 rounded-lg">
                   {s}
                 </span>
               ))}
            </div>

            <div className="pt-6 sm:pt-8 mt-auto flex justify-between items-center relative z-10 border-t border-white/5">
               <button className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-cyber-green hover:underline tracking-widest uppercase">
                  View Architecture <ExternalLink className="w-3 h-3" />
               </button>
               <div className="flex items-center gap-1.5 opacity-20">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-[8px] sm:text-[10px]">VERIFIED_BUILD</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
