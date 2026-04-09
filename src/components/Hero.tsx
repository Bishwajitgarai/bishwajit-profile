"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, ShieldCheck, Zap, Phone, Mail, MapPin, GitBranch, Globe, ChevronDown, Cpu, Binary } from "lucide-react";
import { useRef } from "react";

export default function Hero({ data }: { data: any }) {
  const { identity } = data;
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, -200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const y3 = useTransform(scrollY, [0, 500], [0, -300]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section ref={containerRef} className="relative min-h-[95vh] flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden perspective-1000">
      <div className="mesh-bg" />
      
      {/* Parallax Floating Artifacts */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 opacity-10 blur-sm"><Cpu className="w-24 h-24 text-cyber-green" /></motion.div>
         <motion.div style={{ y: y2 }} className="absolute top-1/3 right-1/4 opacity-10 blur-[2px] text-6xl">🚀</motion.div>
         <motion.div style={{ y: y3 }} className="absolute bottom-1/4 left-1/3 opacity-5 text-8xl">🐍</motion.div>
         <motion.div style={{ y: y2 }} className="absolute top-1/2 right-20 opacity-10 blur-sm"><Binary className="w-32 h-32 text-cyber-violet" /></motion.div>
         <motion.div style={{ y: y1 }} className="absolute bottom-20 left-20 opacity-10 text-4xl">🤖</motion.div>
         <motion.div style={{ y: y3 }} className="absolute top-20 right-1/3 opacity-5 text-6xl">🔥</motion.div>
      </div>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl w-full flex flex-col items-center text-center space-y-12 relative z-10"
      >
        {/* Subtle Badge */}
        <motion.div variants={item} className="flex flex-col items-center gap-4">
           <span className="px-5 py-1.5 bg-cyber-green/5 text-[9px] sm:text-xs font-mono tracking-[0.4em] text-cyber-green/60 uppercase border border-cyber-green/20 rounded-full">
             // Neural_Interface_v6.0_Initialized
           </span>
        </motion.div>

        {/* Sophisticated Name */}
        <motion.div variants={item} className="space-y-4">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] group cyber-glitch cursor-none">
            {identity.name}
            <span className="text-cyber-green">.</span>
          </h1>
          <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ delay: 1, duration: 1, ease: "circOut" as const }}
             className="h-[1px] w-24 bg-gradient-to-r from-transparent via-cyber-green to-transparent mx-auto origin-center opacity-50"
          />
        </motion.div>

        {/* Dynamic Title */}
        <motion.div variants={item} className="flex flex-col gap-6">
           <div className="flex flex-wrap items-center justify-center gap-3 text-cyber-green text-sm sm:text-xl font-medium tracking-wide font-mono">
              <span className="opacity-40">{'>'}</span>
              <span>{identity.title}</span>
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-2 h-5 bg-cyber-green"
              />
           </div>
           
           <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 text-white/40 text-[10px] sm:text-xs font-mono uppercase tracking-widest bg-white/[0.02] py-2 px-6 rounded-full border border-white/5">
              <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><Mail className="w-3.5 h-3.5" /> {identity.email}</span>
              <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><Phone className="w-3.5 h-3.5" /> {identity.phone}</span>
              <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><MapPin className="w-3.5 h-3.5" /> {identity.location.split(',')[0]}</span>
           </div>
        </motion.div>

        {/* Bio Card */}
        <motion.div variants={item} className="max-w-2xl text-center px-4">
           <p className="text-white/60 text-base sm:text-xl leading-relaxed font-sans font-light">
             {identity.summary}
           </p>
        </motion.div>

        {/* Complex Action Row */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-4 pt-4">
           <SocialLink href={`https://github.com/${identity.contact.githubPrimary}`} icon={GitBranch} label="Primary_Code" color="green" />
           <SocialLink href={`https://linkedin.com/in/${identity.contact.linkedin}`} icon={Globe} label="LinkedIn" color="violet" />
           <div className="w-px h-8 bg-white/10 hidden sm:block mx-2" />
           <motion.div className="flex gap-3">
              {identity.contact.githubOthers.map((gh: string) => (
                <a key={gh} href={`https://github.com/${gh}`} target="_blank" rel="noopener noreferrer" className="p-3 premium-card rounded-full opacity-40 hover:opacity-100 hover:border-cyber-green/40 transition-all hover:scale-110">
                   <GitBranch className="w-4 h-4" />
                </a>
              ))}
           </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="pt-20 opacity-20"
        >
           <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon: Icon, label, color }: any) {
  const colorClass = color === "green" ? "text-cyber-green" : "text-cyber-violet";
  const borderClass = color === "green" ? "hover:border-cyber-green/40" : "hover:border-cyber-violet/40";
  
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className={`px-6 py-3 premium-card rounded-2xl flex items-center gap-3 group transition-all hover:translate-y-[-2px] ${borderClass}`}
    >
      <Icon className={`w-4 h-4 ${colorClass} group-hover:scale-110 transition-transform`} />
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{label}</span>
    </a>
  );
}
