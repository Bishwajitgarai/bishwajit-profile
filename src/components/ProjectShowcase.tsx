"use client";

import { motion } from "framer-motion";
import { ExternalLink, Box, Sparkles, ChevronRight, Terminal } from "lucide-react";

export default function ProjectShowcase({ data }: { data: any }) {
  const { inventory } = data;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section className="min-h-screen py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="space-y-6 mb-20 text-center sm:text-left"
      >
         <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight">
           Crafted <span className="text-cyber-violet/60 italic font-light">Inventory</span>
         </h2>
         <p className="text-white/30 max-w-lg text-sm font-mono uppercase tracking-[0.2em]">
           Selected works and technological artifacts.
         </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {inventory.map((item: any) => (
          <motion.div
            key={item.name}
            variants={itemAnim}
            className="premium-card p-10 rounded-[32px] flex flex-col gap-10 group h-full cursor-default"
          >
            <div className="flex justify-between items-start">
               <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                  <Terminal className="w-8 h-8 text-white/40 group-hover:text-cyber-green transition-colors" />
               </div>
               <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] border-b border-white/10 pb-1">{item.rarity}</span>
            </div>

            <div className="space-y-4 flex-1">
               <h3 className="text-3xl font-bold text-white tracking-tight">{item.name}</h3>
               <p className="text-white/50 text-base leading-relaxed font-sans font-light">
                 {item.description}
               </p>
            </div>

            <div className="flex flex-wrap gap-2">
               {item.stack.map((s: string) => (
                 <span key={s} className="text-[10px] sm:text-[11px] font-mono text-white/40 font-medium px-1 underline decoration-white/10 underline-offset-4">
                   {s}
                 </span>
               ))}
            </div>

            <div className="pt-8 mt-auto flex justify-between items-center border-t border-white/[0.05]">
               <button className="flex items-center gap-2 text-xs font-bold text-cyber-green/60 hover:text-cyber-green transition-colors tracking-widest uppercase">
                  Explore Build <ChevronRight className="w-4 h-4" />
               </button>
               <div className="opacity-10">
                  <Sparkles className="w-4 h-4" />
               </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
