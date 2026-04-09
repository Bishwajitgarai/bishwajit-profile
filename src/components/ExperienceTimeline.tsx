"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Star, Workflow } from "lucide-react";

export default function ExperienceTimeline({ data }: { data: any }) {
  const { questLog } = data;

  return (
    <section className="min-h-screen py-24 px-8 max-w-5xl mx-auto flex flex-col justify-center">
      <div className="space-y-4 mb-24 text-center">
         <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase">
           Quest <span className="text-cyber-green">Log</span>
         </h2>
         <p className="text-white/40 tracking-[0.3em] font-bold text-[10px]">PROFESSIONAL_TIMELINE_SEQUENCER</p>
      </div>

      <div className="relative space-y-12">
        {/* Timeline Path */}
        <div className="absolute left-[20px] top-4 bottom-4 w-px bg-gradient-to-b from-cyber-green via-cyber-violet to-transparent hidden md:block" />

        {questLog.map((quest: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-0 md:pl-20 group"
          >
            {/* Timeline Node */}
            <div className="absolute left-[10px] top-6 w-[21px] h-[21px] rounded-full bg-black border-4 border-cyber-green z-20 hidden md:block group-hover:scale-150 transition-transform" />
            
            <div className="glass-card p-10 rounded-[32px] border-white/5 space-y-6 hover:border-cyber-green/30 transition-all">
               <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                     <p className="text-cyber-green font-bold text-xs flex items-center gap-2">
                        <Calendar className="w-3 h-3" /> {quest.period}
                     </p>
                     <h3 className="text-3xl font-bold text-white tracking-tight">{quest.role}</h3>
                     <p className="text-cyber-violet font-bold flex items-center gap-2">
                        <Briefcase className="w-4 h-4" /> {quest.company}
                     </p>
                  </div>
               </div>

               <div className="space-y-4">
                  {quest.achievements.map((a: string, j: number) => (
                    <div key={j} className="flex gap-4 items-start text-white/60 leading-relaxed font-sans text-lg">
                       <Workflow className="w-5 h-5 text-cyber-green/40 mt-1 flex-shrink-0" />
                       <p>{a}</p>
                    </div>
                  ))}
               </div>

               <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-4 text-xs opacity-40">
                  <Star className="w-4 h-4" /> 
                  <span>ACHIEVEMENTS_UNLOCKED: {quest.achievements.length}</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
