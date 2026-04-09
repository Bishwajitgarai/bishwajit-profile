"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Subsystems from "@/components/Subsystems";
import { Zap, Box, Workflow, Terminal } from "lucide-react";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/profile")
      .then(res => res.json())
      .then(d => {
        setData(d);
        // Artificial delay for premium loading feel
        setTimeout(() => setLoading(false), 1200);
      })
      .catch(e => console.error(e));
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div 
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="min-h-screen bg-[#020202] flex items-center justify-center p-8 z-[200] relative"
        >
          <motion.div 
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.98, 1, 0.98] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-cyber-green to-transparent" />
            <p className="font-mono text-[9px] tracking-[0.6em] text-white/40 uppercase font-bold">Initializing_Core</p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.main 
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-[#020202] min-h-screen selection:bg-cyber-green selection:text-black overflow-x-hidden no-scrollbar"
        >
          {/* Refined Minimalist Nav */}
          <nav className="fixed top-8 left-0 w-full z-[100] px-6 sm:px-12 flex justify-between items-center pointer-events-none">
            <div className="text-[10px] font-mono tracking-widest text-white/20 uppercase">B. Garai // 2026</div>
            <div className="pointer-events-auto flex gap-6 sm:gap-10">
               <NavItem label="Arch" href="#" />
               <NavItem label="Stack" href="#" />
               <NavItem label="Cases" href="#" />
            </div>
          </nav>

          <Hero data={data} />
          
          <div className="relative z-10 w-full">
            <TechStack data={data} />
            <Subsystems data={data} />
            <ProjectShowcase data={data} />
            <ExperienceTimeline data={data} />
          </div>

          <footer className="py-32 border-t border-white/[0.03] text-center space-y-8 bg-black/40">
             <p className="text-[9px] font-mono opacity-20 tracking-[1em] uppercase">Built for Intelligence. Optimized for Logic.</p>
             <div className="flex justify-center gap-12 opacity-10">
                <Zap className="w-4 h-4" />
                <Workflow className="w-4 h-4" />
                <Box className="w-4 h-4" />
             </div>
          </footer>
        </motion.main>
      )}
    </AnimatePresence>
  );
}

function NavItem({ label, href }: any) {
  return (
    <a 
      href={href} 
      className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-white/30 hover:text-white transition-all transform hover:translate-y-[-1px] cursor-pointer"
    >
      {label}
    </a>
  );
}
