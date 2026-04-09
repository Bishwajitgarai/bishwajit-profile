"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal, ShieldCheck, Zap, Phone, Mail, MapPin, GitBranch, Globe, ChevronDown, Cpu, Binary, Download, FileText } from "lucide-react";
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
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden">
      <div className="mesh-bg opacity-40" />
      
      {/* Parallax Floating Artifacts - Subtler */}
      <div className="absolute inset-0 pointer-events-none z-0">
         <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 opacity-5 blur-sm"><Cpu className="w-16 h-16 text-cyber-green" /></motion.div>
         <motion.div style={{ y: y2 }} className="absolute top-1/3 right-1/4 opacity-5 blur-[2px] text-4xl">🚀</motion.div>
         <motion.div style={{ y: y3 }} className="absolute bottom-1/4 left-1/3 opacity-5 text-6xl">🐍</motion.div>
         <motion.div style={{ y: y2 }} className="absolute top-1/2 right-20 opacity-5 blur-sm"><Binary className="w-24 h-24 text-cyber-violet" /></motion.div>
         <motion.div style={{ y: y1 }} className="absolute bottom-20 left-20 opacity-5 text-2xl">🤖</motion.div>
         <motion.div style={{ y: y3 }} className="absolute top-20 right-1/3 opacity-5 text-4xl">🔥</motion.div>
      </div>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl w-full flex flex-col items-center text-center space-y-10 relative z-10"
      >
        {/* Subtle Badge */}
        <motion.div variants={item} className="flex flex-col items-center gap-4">
           <span className="px-5 py-1.5 bg-white/[0.03] text-[9px] sm:text-xs font-mono tracking-[0.4em] text-white/40 uppercase border border-white/5 rounded-full">
             // Neural_Protocol_Initialize
           </span>
        </motion.div>

        {/* Sophisticated Name - Reduced Size */}
        <motion.div variants={item} className="space-y-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white group cyber-glitch cursor-none select-none">
            {identity.name}
            <span className="text-cyber-green">.</span>
          </h1>
          <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ delay: 1, duration: 1, ease: "circOut" as const }}
             className="h-[1px] w-20 bg-gradient-to-r from-transparent via-cyber-green/40 to-transparent mx-auto origin-center"
          />
        </motion.div>

        {/* Dynamic Title - Reduced Size */}
        <motion.div variants={item} className="flex flex-col gap-6">
           <div className="flex flex-wrap items-center justify-center gap-3 text-cyber-green text-sm sm:text-lg font-medium tracking-wide font-mono">
              <span className="opacity-40">{'>'}</span>
              <span>{identity.title}</span>
              <motion.span 
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-1.5 h-4 bg-cyber-green"
              />
           </div>
           
           <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 text-white/20 text-[9px] sm:text-xs font-mono uppercase tracking-widest">
              <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><Mail className="w-3.5 h-3.5" /> {identity.email}</span>
              <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><Phone className="w-3.5 h-3.5" /> {identity.phone}</span>
              <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><MapPin className="w-3.5 h-3.5" /> {identity.location.split(',')[0]}</span>
           </div>
        </motion.div>

        {/* Bio Card - Reduced Size */}
        <motion.div variants={item} className="max-w-2xl text-center px-4">
           <p className="text-white/50 text-base sm:text-lg leading-relaxed font-sans font-light">
             {identity.summary}
           </p>
        </motion.div>

        {/* Complex Action Row */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-4 pt-4">
           {/* New Download Resume Button */}
           <a 
             href="/Bishwajit_Garai.pdf" 
             download="Bishwajit_Garai_Resume.pdf"
             className="px-6 py-3 premium-card rounded-2xl flex items-center gap-3 group transition-all hover:translate-y-[-2px] border-cyber-green/40 bg-cyber-green/5"
           >
              <FileText className="w-4 h-4 text-cyber-green group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 group-hover:text-white transition-colors">Download_CV</span>
           </a>

           <div className="w-px h-10 bg-white/10 hidden sm:block mx-2" />

           <SocialLink href={`https://github.com/${identity.contact.githubPrimary}`} icon={GitBranch} label="Primary" color="green" />
           <SocialLink href={`https://linkedin.com/in/${identity.contact.linkedin}`} icon={Globe} label="LinkedIn" color="violet" />
           
           <motion.div className="flex gap-3">
              {identity.contact.githubOthers.map((gh: string) => (
                <a key={gh} href={`https://github.com/${gh}`} target="_blank" rel="noopener noreferrer" className="p-3 premium-card rounded-full opacity-30 hover:opacity-100 hover:border-cyber-green/20 transition-all hover:scale-110">
                   <GitBranch className="w-4 h-4" />
                </a>
              ))}
           </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="pt-16 opacity-10"
        >
           <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialLink({ href, icon: Icon, label, color }: any) {
  const colorClass = color === "green" ? "text-cyber-green" : "text-cyber-violet";
  const borderClass = color === "green" ? "hover:border-cyber-green/20" : "hover:border-cyber-violet/20";
  
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      className={`px-6 py-3 premium-card rounded-2xl flex items-center gap-3 group transition-all hover:translate-y-[-2px] ${borderClass}`}
    >
      <Icon className={`w-4 h-4 ${colorClass} group-hover:scale-110 transition-transform`} />
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{label}</span>
    </a>
  );
}
