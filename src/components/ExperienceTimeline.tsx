"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ChevronRight, Binary, Activity } from "lucide-react";

export default function ExperienceTimeline({ data }: { data: any }) {
  const { questLog } = data;

  return (
    <section className="min-h-screen py-32 px-6 sm:px-12 max-w-5xl mx-auto space-y-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center space-y-6"
      >
         <span className="px-4 py-1.5 bg-cyber-violet/10 text-cyber-violet text-[10px] font-mono tracking-[0.4em] uppercase rounded-full border border-cyber-violet/20">
           Chronological_Signal_Trace
         </span>
         <h2 className="text-4xl sm:text-7xl font-bold text-white tracking-tighter uppercase">
           Quest <span className="text-cyber-green/40 italic font-light lowercase">Log</span>
         </h2>
      </motion.div>

      <div className="relative space-y-32">
        {/* The Central Signal Line */}
        <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyber-green/40 via-cyber-violet/40 to-transparent opacity-20 hidden sm:block" />

        {questLog.map((quest: any, i: number) => (
          <ExperienceNode key={i} quest={quest} index={i} />
        ))}
      </div>
    </section>
  );
}

function ExperienceNode({ quest, index }: { quest: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative flex flex-col sm:flex-row items-center gap-12 sm:gap-24 ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
    >
      {/* Visual Signal Node */}
      <div className="absolute left-0 sm:left-1/2 top-0 sm:top-1/2 -translate-y-1/2 sm:-translate-x-1/2 z-20">
         <div className="relative">
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.1, 0.4] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute inset-0 bg-cyber-green blur-md rounded-full"
            />
            <div className="w-10 h-10 bg-[#020202] border-2 border-cyber-green rounded-full flex items-center justify-center relative z-10">
               <span className="text-[10px] font-mono font-bold">0{index + 1}</span>
            </div>
         </div>
      </div>

      {/* Date Context */}
      <div className={`w-full sm:w-1/2 flex ${isEven ? 'sm:justify-end' : 'sm:justify-start'}`}>
         <div className={`space-y-1 ${isEven ? 'sm:text-right' : 'sm:text-left'} pl-16 sm:pl-0`}>
            <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">{quest.period}</p>
            <p className="text-white/30 text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] flex items-center gap-2 sm:justify-inherit">
               <MapPin className="w-3 h-3" /> {quest.location}
            </p>
         </div>
      </div>

      {/* Detailed Intel Panel */}
      <div className="w-full sm:w-1/2 pl-16 sm:pl-0">
         <motion.div 
            whileHover={{ scale: 1.02 }}
            className="premium-card p-10 rounded-[32px] border-white/5 space-y-6 group hover:border-cyber-green/20 transition-all"
         >
            <div className="space-y-1">
               <p className="text-[10px] font-mono font-bold text-cyber-green/60 uppercase tracking-widest">{quest.company}</p>
               <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none">{quest.role}</h3>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/5">
               {quest.achievements.map((a: string, j: number) => (
                 <div key={j} className="flex gap-4 group/line">
                    <Activity className="w-4 h-4 text-cyber-green/40 mt-1 flex-shrink-0 group-hover/line:rotate-90 transition-transform" />
                    <p className="text-white/50 text-sm sm:text-[15px] leading-relaxed font-sans font-light">{a}</p>
                 </div>
               ))}
            </div>

            <div className="pt-4 flex items-center justify-between opacity-10">
               <Binary className="w-4 h-4" />
               <div className="text-[8px] font-mono uppercase tracking-widest">Signal_Verified_0x{index}</div>
            </div>
         </motion.div>
      </div>
    </motion.div>
  );
}
