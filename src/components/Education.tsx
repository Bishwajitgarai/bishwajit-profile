"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen, Binary } from "lucide-react";

export default function Education({ data }: { data: any }) {
  const { education } = data;

  return (
    <section className="py-24 px-6 sm:px-12 max-w-5xl mx-auto space-y-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center space-y-4"
      >
         <div className="flex items-center justify-center gap-3 text-cyber-violet text-[10px] font-mono tracking-[0.4em] uppercase">
            <GraduationCap className="w-4 h-4" />
            <span>Academic_Protocol_v2.0</span>
         </div>
         <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tighter uppercase whitespace-nowrap">
           Credential <span className="text-cyber-green/40 italic font-light lowercase">Registry</span>
         </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="premium-card p-8 rounded-[32px] border-white/5 group hover:border-cyber-violet/30 transition-all flex flex-col justify-between space-y-8 relative overflow-hidden"
          >
             {/* Decorative Background Icon */}
             <div className="absolute -top-4 -right-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                <BookOpen className="w-32 h-32" />
             </div>

             <div className="space-y-4 relative z-10">
                <div className="flex items-start justify-between">
                   <div className="p-3 bg-white/[0.02] border border-white/5 rounded-2xl text-white/40 group-hover:text-cyber-violet group-hover:border-cyber-violet/20 transition-all">
                      <Binary className="w-6 h-6" />
                   </div>
                   <div className="text-right">
                      <p className="text-[10px] font-mono font-bold text-cyber-green/60 uppercase tracking-widest">{edu.period.split(' - ')[1]}</p>
                      <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">{edu.period.split(' - ')[0]}</p>
                   </div>
                </div>

                <div className="space-y-2">
                   <h3 className="text-xl font-bold text-white tracking-tight leading-tight group-hover:text-cyber-violet transition-colors">
                      {edu.degree}
                   </h3>
                   <p className="text-white/40 text-xs font-mono tracking-wide uppercase leading-relaxed">
                      {edu.institution}
                   </p>
                </div>
             </div>

             <div className="pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                   <Award className="w-4 h-4 text-cyber-green/40" />
                   <span className="text-sm font-bold text-white/80">{edu.score}</span>
                </div>
                <div className="text-[8px] font-mono text-white/10 uppercase tracking-[0.2em]">Verified_Registry_0x{i+1}</div>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
