"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Star, Workflow, MapPin } from "lucide-react";

export default function ExperienceTimeline({ data }: { data: any }) {
  const { questLog } = data;

  return (
    <section className="min-h-screen py-16 sm:py-24 px-4 sm:px-8 max-w-5xl mx-auto flex flex-col justify-center">
      <div className="space-y-4 mb-16 sm:mb-24 text-center">
         <h2 className="text-4xl sm:text-7xl font-bold text-white tracking-tighter uppercase">
           Quest <span className="text-cyber-green">Log</span>
         </h2>
         <p className="text-white/40 tracking-[0.2em] sm:tracking-[0.3em] font-bold text-[10px]">PROFESSIONAL_DEPLOYMENT_HISTORY</p>
      </div>

      <div className="relative space-y-10 sm:space-y-14">
        {/* Timeline Path Overlay */}
        <div className="absolute left-[12px] sm:left-[22px] top-4 bottom-4 w-px bg-gradient-to-b from-cyber-green via-cyber-violet to-transparent hidden xs:block" />

        {questLog.map((quest: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 sm:pl-24 group"
          >
            {/* Mobile/Small indicator */}
            <div className="absolute left-[5px] sm:left-[14px] top-6 w-[15px] h-[15px] sm:w-[18px] sm:h-[18px] rounded-full bg-black border-2 sm:border-4 border-cyber-green z-20 group-hover:scale-125 transition-transform" />
            
            <div className="glass-card p-6 sm:p-10 rounded-[24px] sm:rounded-[32px] border-white/5 space-y-4 sm:space-y-6 hover:border-cyber-green/30 transition-all shadow-xl">
               <div className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                     <p className="text-cyber-green font-bold text-[10px] sm:text-xs flex items-center gap-1.5 order-2 sm:order-1">
                        <Calendar className="w-3 h-3" /> {quest.period.toUpperCase()}
                     </p>
                     <span className="text-[10px] sm:text-xs text-white/40 font-mono order-1 sm:order-2 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {quest.location}
                     </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">{quest.role}</h3>
                  
                  <div className="flex items-center gap-2">
                     <div className="w-6 h-px bg-cyber-violet/40" />
                     <p className="text-cyber-violet font-bold text-sm sm:text-lg flex items-center gap-2">
                        <Briefcase className="w-4 h-4" /> {quest.company}
                     </p>
                  </div>
               </div>

               <div className="space-y-3 sm:space-y-4 pt-2">
                  {quest.achievements.map((a: string, j: number) => (
                    <div key={j} className="flex gap-3 sm:gap-4 items-start text-white/70 leading-relaxed font-sans text-sm sm:text-lg group/line">
                       <Workflow className="w-4 h-4 sm:w-5 sm:h-5 text-cyber-green/30 mt-1 flex-shrink-0 group-hover/line:text-cyber-green transition-colors" />
                       <p>{a}</p>
                    </div>
                  ))}
               </div>

               <div className="pt-6 mt-4 sm:mt-6 border-t border-white/5 flex items-center gap-3 text-[10px] opacity-40 italic">
                  <Star className="w-3 h-3" /> 
                  <span>DEPLOYMENT_STATS: SUCCESSFUL</span>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
