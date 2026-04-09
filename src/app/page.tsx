"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Subsystems from "@/components/Subsystems";
import { Zap, Box, Workflow, Terminal, MessageSquare } from "lucide-react";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/profile");
        const d = await res.json();
        setData(d);
      } catch (e) {
        console.error("Identity retrieval failure:", e);
      } finally {
        // Smooth transition out of loading
        setTimeout(() => setLoading(false), 800);
      }
    };
    fetchData();
  }, []);

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-[#020202] flex flex-col items-center justify-center p-8 overflow-hidden relative">
        <div className="mesh-bg opacity-30" />
        <motion.div 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-center space-y-6 relative z-10"
        >
          <div className="w-10 h-10 border-t-2 border-cyber-green rounded-full animate-spin mx-auto" />
          <p className="font-mono text-[9px] sm:text-[10px] tracking-[0.4em] text-cyber-green uppercase font-bold opacity-60">Synchronizing_Deep_Logic_Orchestrator</p>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="bg-[#020202] min-h-screen selection:bg-cyber-green selection:text-black scroll-smooth overflow-x-hidden">
      
      {/* Cinematic Navigation Overlay (Optimized for Mobile) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-fit">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-card px-4 sm:px-8 py-2.5 sm:py-3.5 rounded-full border-white/10 flex gap-4 sm:gap-8 items-center bg-black/60 backdrop-blur-xl"
        >
           <NavItem icon={Terminal} href="#" label="Home" />
           <div className="w-px h-3 sm:h-4 bg-white/10" />
           <NavItem icon={Workflow} href="#" label="Stack" />
           <NavItem icon={Box} href="#" label="Apps" />
           <NavItem icon={Zap} href="#" label="Logs" />
        </motion.div>
      </nav>

      {/* Floating Contact Action (Premium Detail) */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-6 right-6 z-[100] md:hidden"
      >
        <a href={`mailto:${data.identity.email}`} className="p-4 bg-cyber-green rounded-full text-black shadow-2xl flex items-center justify-center">
           <MessageSquare className="w-6 h-6" />
        </a>
      </motion.div>

      {/* Narrative Section Sequence */}
      <div className="relative">
        <Hero data={data} />
        
        <div className="relative z-10">
          <TechStack data={data} />
          
          <div className="bg-[#030303] relative">
            <div className="absolute top-0 left-0 w-full h-32 sm:h-64 bg-gradient-to-b from-[#020202] to-transparent pointer-events-none" />
            <ProjectShowcase data={data} />
          </div>

          <Subsystems data={data} />
          
          <div className="bg-[#030303] relative">
             <div className="absolute top-0 left-0 w-full h-32 sm:h-64 bg-gradient-to-b from-[#020202] to-transparent pointer-events-none" />
             <ExperienceTimeline data={data} />
          </div>
        </div>
      </div>

      {/* Global Background Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
         <div className="scanline animate-scanline opacity-[0.02]" />
      </div>

      <footer className="py-16 sm:py-24 border-t border-white/5 text-center flex flex-col items-center gap-6 relative z-10 bg-black">
         <div className="flex gap-6 opacity-20">
            <Zap className="w-4 h-4 text-cyber-green" />
            <Workflow className="w-4 h-4 text-cyber-violet" />
            <Box className="w-4 h-4 text-cyber-green" />
         </div>
         <div className="space-y-2">
            <p className="text-[9px] sm:text-[11px] opacity-30 tracking-[0.5em] sm:tracking-[0.8em] font-bold uppercase leading-relaxed px-4">
              Decentralized Identity Orchestrated by Antigravity v4.6
            </p>
            <p className="text-[8px] opacity-10 uppercase tracking-widest font-mono">Bishwajit Garai © 2026 | All Bytes Reserved</p>
         </div>
      </footer>
    </main>
  );
}

function NavItem({ icon: Icon, href, label }: any) {
  return (
    <a 
      href={href} 
      title={label}
      className="text-white/30 hover:text-cyber-green hover:cyber-glow-text transition-all transform hover:scale-125 group relative flex flex-col items-center"
    >
      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      <span className="absolute -bottom-4 text-[6px] uppercase font-bold tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">{label}</span>
    </a>
  );
}
