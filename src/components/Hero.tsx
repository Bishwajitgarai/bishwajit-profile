"use client";

import { motion } from "framer-motion";
import { Terminal, ShieldCheck, Zap, Phone, Mail, MapPin, GitBranch, Globe, ChevronDown } from "lucide-react";

export default function Hero({ data }: { data: any }) {
  const { identity } = data;

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
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden">
      <div className="mesh-bg" />
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-5xl w-full flex flex-col items-center text-center space-y-12 relative z-10"
      >
        {/* Subtle Badge */}
        <motion.div variants={item} className="flex flex-col items-center gap-4">
           <span className="px-4 py-1 text-[10px] sm:text-xs font-mono tracking-[0.4em] text-cyber-green/60 uppercase border-x border-cyber-green/20">
             // System Core Initialized
           </span>
        </motion.div>

        {/* Sophisticated Name */}
        <motion.div variants={item} className="space-y-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-white">
            {identity.name}
          </h1>
          <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ delay: 1, duration: 1, ease: "circOut" as const }}
             className="h-[1px] w-24 bg-cyber-green mx-auto origin-center opacity-50"
          />
        </motion.div>

        {/* Dynamic Title with Typing-like Motion */}
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
           
           <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-white/40 text-[10px] sm:text-xs font-mono uppercase tracking-widest">
              <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><Mail className="w-3 h-3" /> {identity.email}</span>
              <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><Phone className="w-3 h-3" /> {identity.phone}</span>
              <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default"><MapPin className="w-3 h-3" /> {identity.location.split(',')[0]}</span>
           </div>
        </motion.div>

        {/* Bio Card: Less boxy, more elegant */}
        <motion.div variants={item} className="max-w-2xl text-center">
           <p className="text-white/60 text-sm sm:text-lg leading-relaxed font-sans">
             {identity.summary}
           </p>
        </motion.div>

        {/* Complex Action Row */}
        <motion.div variants={item} className="flex flex-wrap justify-center gap-4 pt-4">
           <SocialLink href={`https://github.com/${identity.contact.githubPrimary}`} icon={GitBranch} label="Primary" color="green" />
           <SocialLink href={`https://linkedin.com/in/${identity.contact.linkedin}`} icon={Globe} label="LinkedIn" color="violet" />
           <div className="w-px h-8 bg-white/10 hidden sm:block" />
           <motion.div className="flex gap-2">
              {identity.contact.githubOthers.map((gh: string) => (
                <a key={gh} href={`https://github.com/${gh}`} target="_blank" rel="noopener noreferrer" className="p-2.5 premium-card rounded-full opacity-40 hover:opacity-100 hover:border-cyber-green/40 transition-all">
                   <GitBranch className="w-4 h-4" />
                </a>
              ))}
           </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="pt-16 opacity-20"
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
      className={`px-5 py-2.5 premium-card rounded-xl flex items-center gap-3 group ${borderClass}`}
    >
      <Icon className={`w-4 h-4 ${colorClass} group-hover:scale-110 transition-transform`} />
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{label}</span>
    </a>
  );
}
