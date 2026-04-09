"use client";

import { motion } from "framer-motion";
import { ChevronRight, Terminal, Cpu, Database, Binary, Zap, ExternalLink } from "lucide-react";

export default function ProjectShowcase({ data }: { data: any }) {
  const { inventory } = data;

  return (
    <section className="min-h-screen py-24 px-6 sm:px-12 max-w-7xl mx-auto space-y-24">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
         <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
           Technological <br /><span className="text-white/20 italic font-light lowercase">Manifest</span>
         </h2>
         <div className="flex items-center gap-4 text-white/20 font-mono text-[9px] uppercase tracking-[0.4em]">
           <div className="h-px w-10 bg-white/20" />
           <span>System_Inventory_v4.0</span>
         </div>
      </motion.div>

      <div className="space-y-48">
        {inventory.map((item: any, i: number) => (
          <ProjectModule key={item.name} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectModule({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 group"
    >
      {/* Decorative Index Header */}
      <div className="lg:col-span-12 flex items-center justify-between border-b border-white/5 pb-3 opacity-20">
        <span className="font-mono text-[9px] tracking-widest uppercase">Module_ID: 00{index + 1}</span>
        <span className="font-mono text-[9px] tracking-widest uppercase text-cyber-green/60">Class: {item.rarity}</span>
      </div>

      {/* Blueprint Visual Side */}
      <div className="lg:col-span-6 relative aspect-square lg:aspect-video rounded-[32px] overflow-hidden bg-white/[0.015] border border-white/5 group-hover:border-cyber-green/20 transition-all duration-700">
        <div className="absolute inset-0 opacity-5">
           <div className="grid grid-cols-8 h-full w-full">
              {Array.from({ length: 8 }).map((_, j) => (
                <div key={j} className="border-r border-white/10 h-full" />
              ))}
           </div>
        </div>
        
        {/* Animated Scanning Line */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-green/5 to-transparent w-full pointer-events-none"
        />

        <div className="absolute inset-0 flex items-center justify-center">
           <div className="relative">
              <div className="absolute inset-0 bg-cyber-green/20 blur-[80px] opacity-40 animate-pulse" />
              <div className="relative z-10 p-10 bg-[#020202]/40 backdrop-blur-xl border border-white/5 rounded-full">
                <Terminal className="w-12 h-12 text-cyber-green/40 group-hover:text-cyber-green transition-all" />
              </div>
           </div>
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-10 font-mono text-[7px] uppercase tracking-widest">
           <div className="space-y-1">
              <p>Buffer_Size: 512MB</p>
              <p>Protocol: SSL/V3</p>
           </div>
           <p>©2026_ARCH_UNIT</p>
        </div>
      </div>

      {/* Data Side */}
      <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
             <span className="px-3 py-1 bg-white/[0.02] text-white/30 text-[8px] font-mono tracking-widest uppercase rounded-md">{item.type}</span>
             <Zap className="w-3.5 h-3.5 text-cyber-green opacity-20" />
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none group-hover:text-cyber-green transition-colors">
            {item.name}
          </h3>
          <p className="text-white/40 text-base sm:text-lg leading-relaxed font-sans font-light max-w-xl">
            {item.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
           {item.stack.map((s: string) => (
             <span key={s} className="px-3.5 py-1.5 bg-white/[0.02] border border-white/5 rounded-lg text-[9px] font-mono font-medium text-white/30 uppercase tracking-widest hover:text-cyber-green transition-colors">
               {s}
             </span>
           ))}
        </div>

        <div className="pt-6 flex items-center gap-10">
           <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[9px] font-bold text-white uppercase tracking-[0.4em] group/btn">
              <span className="border-b border-transparent group-hover/btn:border-cyber-green/40 transition-all opacity-60 group-hover/btn:opacity-100">Protocol_Access</span>
              <ExternalLink className="w-3 h-3 text-cyber-green/60" />
           </a>
           <div className="h-px flex-1 bg-white/5" />
        </div>
      </div>
    </motion.div>
  );
}
