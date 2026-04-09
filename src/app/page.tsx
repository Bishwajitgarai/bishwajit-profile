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
        setLoading(false);
      })
      .catch(e => console.error("Identity retrieval failure:", e));
  }, []);

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-[#020202] flex flex-col items-center justify-center p-8 overflow-hidden">
        <div className="mesh-bg opacity-30" />
        <motion.div 
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-center space-y-4 relative z-10"
        >
          <div className="w-12 h-12 border-2 border-cyber-green rounded-full border-t-transparent animate-spin mx-auto mb-4" />
          <p className="font-mono text-[10px] tracking-[0.5em] text-cyber-green uppercase font-bold">Initializing_Neural_Matrix</p>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="bg-[#020202] min-h-screen selection:bg-cyber-green selection:text-black scroll-smooth">
      {/* Cinematic Navigation Overlay (Fixed) */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] hidden md:block">
        <div className="glass-card px-8 py-3 rounded-full border-white/5 flex gap-8 items-center">
           <NavItem icon={Terminal} href="#" />
           <div className="w-px h-4 bg-white/10" />
           <NavItem icon={Workflow} href="#" />
           <NavItem icon={Box} href="#" />
           <NavItem icon={Zap} href="#" />
        </div>
      </nav>

      {/* Narrative Section Sequence */}
      <div className="relative">
        <Hero data={data} />
        
        <div className="relative z-10 space-y-0">
          <TechStack data={data} />
          
          <div className="bg-[#030303] relative">
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#020202] to-transparent pointer-events-none" />
            <ProjectShowcase data={data} />
          </div>

          <Subsystems data={data} />
          
          <ExperienceTimeline data={data} />
        </div>
      </div>

      {/* Global Background Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
         <div className="scanline animate-scanline opacity-[0.03]" />
      </div>

      <footer className="py-20 border-t border-white/5 text-center flex flex-col items-center gap-6 relative z-10">
         <div className="flex gap-4 opacity-20">
            <Zap className="w-4 h-4" />
            <Workflow className="w-4 h-4" />
            <Box className="w-4 h-4" />
         </div>
         <p className="text-[10px] opacity-20 tracking-[0.8em] font-bold uppercase">End-to-End Encryption | Protocol v4.6</p>
      </footer>
    </main>
  );
}

function NavItem({ icon: Icon, href }: any) {
  return (
    <a 
      href={href} 
      className="text-white/40 hover:text-cyber-green hover:cyber-glow-text transition-all transform hover:scale-125"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
