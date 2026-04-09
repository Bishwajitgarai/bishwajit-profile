"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Zap, Phone, Mail, MapPin, GitBranch, Linkedin } from "lucide-react";

export default function Hero({ data }: { data: any }) {
  const { identity } = data;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 sm:p-8 overflow-hidden">
      {/* Dynamic Background Mesh */}
      <div className="mesh-bg opacity-40 sm:opacity-100" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl w-full space-y-6 sm:space-y-10 relative z-10 py-20"
      >
        <div className="flex flex-col items-center gap-4">
           <motion.span 
             animate={{ opacity: [0.5, 1, 0.5] }}
             transition={{ repeat: Infinity, duration: 2 }}
             className="px-4 py-1.5 bg-cyber-green/10 text-cyber-green text-[10px] font-bold tracking-[0.3em] rounded border border-cyber-green/20 uppercase"
           >
             Protocol v4.6 Online
           </motion.span>
           
           <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] leading-[1.1]">
            {identity.name}
          </h1>
        </div>

        <div className="flex flex-col gap-4">
           <div className="flex flex-wrap items-center justify-center gap-4 text-cyber-green font-bold text-sm sm:text-xl md:text-2xl px-4">
              <Terminal className="w-5 h-5 sm:w-6 sm:h-6 hidden sm:block" />
              <span className="cyber-glow-text text-center">{identity.title}</span>
           </div>
           
           <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-white/60 text-[10px] sm:text-xs font-mono">
              <span className="flex items-center gap-1.5"><Mail className="w-3 h-3" /> {identity.email}</span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1.5"><Phone className="w-3 h-3" /> {identity.phone}</span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> {identity.location}</span>
           </div>

           <div className="flex justify-center gap-4 mt-2">
              <a href={`https://github.com/${identity.contact.github}`} className="p-2 glass-card rounded-lg hover:border-cyber-green/50 transition-colors">
                 <GitBranch className="w-4 h-4 text-cyber-green" />
              </a>
              <a href={`https://linkedin.com/in/${identity.contact.linkedin}`} className="p-2 glass-card rounded-lg hover:border-cyber-violet/50 transition-colors">
                 <Linkedin className="w-4 h-4 text-cyber-violet" />
              </a>
           </div>
        </div>

        <div className="glass-card p-6 sm:p-8 rounded-[32px] border-white/5 max-w-3xl mx-auto shadow-2xl relative group">
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-green/0 via-cyber-green/40 to-cyber-green/0 opacity-0 group-hover:opacity-100 transition-opacity" />
           <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed font-sans text-center">
             {identity.summary}
           </p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="pt-8 flex flex-col items-center gap-2 opacity-30"
        >
           <motion.div 
             animate={{ y: [0, 8, 0] }}
             transition={{ repeat: Infinity, duration: 2 }}
             className="w-px h-12 bg-gradient-to-b from-cyber-green to-transparent"
           />
        </motion.div>
      </motion.div>
    </section>
  );
}
