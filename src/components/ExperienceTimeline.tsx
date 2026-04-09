"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Star, Workflow, MapPin, ChevronRight } from "lucide-react";

export default function ExperienceTimeline({ data }: { data: any }) {
  const { questLog } = data;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <section className="min-h-screen py-24 px-6 sm:px-12 max-w-5xl mx-auto flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 mb-24 text-center sm:text-left"
      >
         <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase">
           Quest <span className="text-cyber-green/60 italic font-light lowercase">Path</span>
         </h2>
         <p className="text-white/20 tracking-[0.5em] font-mono text-[9px] uppercase">Professional Chronology</p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative space-y-16"
      >
        {questLog.map((quest: any, i: number) => (
          <motion.div
            key={i}
            variants={itemAnim}
            className="group relative"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">
               <div className="md:w-1/4 space-y-2">
                  <p className="text-cyber-green/60 font-mono font-bold text-[10px] sm:text-xs tracking-widest">{quest.period}</p>
                  <p className="text-white/20 text-[9px] font-mono uppercase tracking-widest flex items-center gap-2">
                     <MapPin className="w-3 h-3" /> {quest.location}
                  </p>
               </div>

               <div className="flex-1 space-y-6">
                  <div className="space-y-1">
                     <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">{quest.role}</h3>
                     <p className="text-cyber-violet/60 font-bold text-lg">{quest.company}</p>
                  </div>

                  <div className="space-y-4">
                     {quest.achievements.map((a: string, j: number) => (
                       <div key={j} className="flex gap-4 items-start text-white/50 leading-relaxed font-sans font-light text-base group/line">
                          <div className="w-1.5 h-px bg-cyber-green/40 mt-3 flex-shrink-0 group-hover/line:w-4 transition-all" />
                          <p>{a}</p>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
            
            {i !== questLog.length - 1 && (
              <div className="hidden md:block absolute -bottom-12 left-0 w-full h-[1px] bg-white/[0.03]" />
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
