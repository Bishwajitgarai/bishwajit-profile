"use client";

import { motion } from "framer-motion";
import { GitBranch, Radio, Database, Activity, Box, Zap, Share2 } from "lucide-react";

export default function Subsystems({ data }: { data: any }) {
  const { topology } = data;

  return (
    <section className="min-h-screen py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
          className="space-y-12"
        >
           <div className="space-y-6">
              <h2 className="text-4xl sm:text-7xl font-bold text-white tracking-tight uppercase leading-[0.9]">
                Logical <span className="text-cyber-green/40 italic font-light lowercase">Architecture</span>
              </h2>
              <p className="text-white/40 max-w-sm leading-relaxed font-sans font-light text-base">
                An abstract visualization of the distributed backend ecosystems and AI pipelines I orchestrate. 
              </p>
           </div>

           <div className="grid grid-cols-1 gap-8">
              <div className="flex gap-6 items-center group">
                 <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl group-hover:border-cyber-green transition-colors">
                    <Zap className="w-6 h-6 text-cyber-green opacity-40 group-hover:opacity-100" />
                 </div>
                 <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white uppercase tracking-widest">Performance_Core</h3>
                    <p className="text-white/20 text-[10px] font-mono tracking-widest whitespace-nowrap">LATENCY_OPTIMIZED / ASYNC_FIRST</p>
                 </div>
              </div>
           </div>
        </motion.div>

        {/* Global Architecture Visualization: More Abstract & Clean */}
        <div className="relative aspect-square max-w-lg mx-auto w-full flex items-center justify-center">
           <div className="absolute inset-0 bg-cyber-green/5 blur-[120px] rounded-full" />
           
           <div className="grid grid-cols-2 gap-8 relative z-10 w-full">
              {topology.nodes.map((node: any, i: number) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 premium-card rounded-[32px] flex flex-col items-center gap-4 text-center group"
                >
                   <div className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-xl group-hover:border-cyber-green/40 transition-colors">
                      {i === 0 && <Radio className="w-5 h-5 text-cyber-green/60" />}
                      {i === 1 && <Share2 className="w-5 h-5 text-white/40" />}
                      {i === 2 && <Database className="w-5 h-5 text-cyber-violet/60" />}
                      {i === 3 && <Box className="w-5 h-5 text-white/40" />}
                      {i > 3 && <Activity className="w-5 h-5 text-white/20" />}
                   </div>
                   <div>
                      <p className="text-[9px] font-mono font-bold text-white/60 group-hover:text-cyber-green transition-colors uppercase tracking-[0.2em]">{node.label}</p>
                      <p className="text-[7px] font-mono text-white/20 mt-1 uppercase tracking-widest">{node.status}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
