"use client";

import { motion } from "framer-motion";
import { ChevronRight, Terminal, Cpu, Database, Binary, Zap, ExternalLink } from "lucide-react";

export default function ProjectShowcase({ data }: { data: any }) {
  const { inventory } = data;

  return (
    <section className="min-h-screen py-32 px-6 sm:px-12 max-w-7xl mx-auto space-y-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
         <h2 className="text-4xl sm:text-7xl font-bold text-white tracking-tighter uppercase leading-none">
           Technological <br /><span className="text-cyber-green/40 italic font-light lowercase">Manifest</span>
         </h2>
         <div className="flex items-center gap-4 text-white/20 font-mono text-[10px] uppercase tracking-[0.4em]">
           <div className="h-px w-12 bg-white/20" />
           <span>System_Inventory_v4.0</span>
         </div>
      </motion.div>

      <div className="space-y-64">
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
      className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 group"
    >
      {/* Decorative Index Header */}
      <div className="lg:col-span-12 flex items-center justify-between border-b border-white/5 pb-4 opacity-40">
        <span className="font-mono text-[10px] tracking-widest uppercase text-white/40">Module_ID: 00{index + 1}</span>
        <span className="font-mono text-[10px] tracking-widest uppercase text-cyber-green/60">Class: {item.rarity}</span>
      </div>

      {/* Blueprint Visual Side */}
      <div className="lg:col-span-6 relative aspect-square lg:aspect-video rounded-[40px] overflow-hidden bg-white/[0.02] border border-white/5 group-hover:border-cyber-green/20 transition-all duration-700">
        <div className="absolute inset-0 opacity-10">
           <div className="grid grid-cols-8 h-full w-full">
              {Array.from({ length: 8 }).map((_, j) => (
                <div key={j} className="border-r border-white/10 h-full" />
              ))}
           </div>
        </div>
        
        {/* Animated Scanning Line */}
        <motion.div 
          animate={{ x: ["-100%", "200%"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-green/10 to-transparent w-full pointer-events-none"
        />

        <div className="absolute inset-0 flex items-center justify-center">
           <div className="relative">
              <div className="absolute inset-0 bg-cyber-green/20 blur-[100px] animate-pulse" />
              <div className="relative z-10 p-12 bg-[#020202]/40 backdrop-blur-xl border border-white/5 rounded-full">
                <Terminal className="w-16 h-16 text-cyber-green/40 group-hover:text-cyber-green transition-all" />
              </div>
           </div>
        </div>

        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end opacity-20 font-mono text-[8px] uppercase tracking-widest">
           <div className="space-y-1">
              <p>Buffer_Size: 512MB</p>
              <p>Protocol: SSL/V3</p>
           </div>
           <p>©2026_ARCH_UNIT</p>
        </div>
      </div>

      {/* Data Side */}
      <div className="lg:col-span-6 flex flex-col justify-center space-y-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             <span className="px-3 py-1 bg-white/[0.03] text-white/40 text-[9px] font-mono tracking-widest uppercase rounded-md">{item.type}</span>
             <Zap className="w-4 h-4 text-cyber-green opacity-20" />
          </div>
          <h3 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter leading-none group-hover:text-cyber-green transition-colors">
            {item.name}
          </h3>
          <p className="text-white/50 text-lg leading-relaxed font-sans font-light max-w-xl">
            {item.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
           {item.stack.map((s: string) => (
             <span key={s} className="px-4 py-1.5 premium-card rounded-lg text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest hover:text-cyber-green transition-colors">
               {s}
             </span>
           ))}
        </div>

        <div className="pt-8 flex items-center gap-12">
           <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[10px] font-bold text-white uppercase tracking-[0.4em] group/btn">
              <span className="border-b border-transparent group-hover/btn:border-cyber-green transition-all">Interface_Connect</span>
              <ExternalLink className="w-3 h-3 text-cyber-green" />
           </a>
           <div className="h-px flex-1 bg-white/5" />
        </div>
      </div>
    </motion.div>
  );
}
