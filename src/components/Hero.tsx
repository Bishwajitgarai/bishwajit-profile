"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Zap } from "lucide-react";

export default function Hero({ data }: { data: any }) {
  const { identity } = data;

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center p-8 overflow-hidden">
      {/* Dynamic Background Mesh */}
      <div className="mesh-bg" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl space-y-8 relative z-10"
      >
        <div className="flex justify-center gap-4 mb-4">
           <span className="px-4 py-1.5 bg-cyber-green/10 text-cyber-green text-[10px] font-bold tracking-[0.3em] rounded border border-cyber-green/20 animate-pulse uppercase">
             Orchestrator v2.6 Ready
           </span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          {identity.name}
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
           <div className="flex items-center gap-3 text-cyber-green font-bold text-lg md:text-2xl">
              <Terminal className="w-6 h-6" />
              <span className="cyber-glow-text">{identity.title}</span>
           </div>
           <span className="hidden md:block text-white/20">|</span>
           <div className="flex items-center gap-3 text-cyber-violet font-bold text-lg md:text-2xl">
              <Zap className="w-6 h-6" />
              <span>{identity.level}</span>
           </div>
        </div>

        <p className="max-w-2xl mx-auto text-white/50 text-sm md:text-lg leading-relaxed font-sans px-4">
          Architecting high-concurrency neural backends and autonomous multi-agent RAG ecosystems. 
          Bridging the gap between raw data and intelligent logic.
        </p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="pt-12 flex flex-col items-center gap-2 opacity-30"
        >
           <p className="text-[10px] tracking-[0.8em] font-bold uppercase">Begin Exploration</p>
           <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ repeat: Infinity, duration: 2 }}
             className="w-px h-16 bg-gradient-to-b from-cyber-green to-transparent"
           />
        </motion.div>
      </motion.div>
    </section>
  );
}
