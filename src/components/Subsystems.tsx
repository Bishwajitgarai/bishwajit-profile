"use client";

import { motion } from "framer-motion";
import { GitBranch, Radio, Database, Activity, Box, Zap, Share2 } from "lucide-react";

export default function Subsystems({ data }: { data: any }) {
  const { topology } = data;

  return (
    <section className="min-h-screen py-16 sm:py-32 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
        
        <div className="space-y-8 sm:space-y-12 text-center lg:text-left">
           <div className="space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-8xl font-bold text-white tracking-tighter uppercase whitespace-pre-line leading-[0.9]">
                System <span className="text-cyber-green">Topology</span>
              </h2>
              <div className="w-20 h-1 bg-cyber-green rounded-full mx-auto lg:mx-0" />
              <p className="text-white/50 max-w-lg leading-relaxed font-sans text-sm sm:text-xl mx-auto lg:mx-0">
                A birds-eye view of my distributed backend architecture and AI pipeline orchestration. 
                Built for deep logic and extreme processing scale.
              </p>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
                 <div className="p-4 bg-cyber-green/5 rounded-2xl border border-cyber-green/10">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-green shadow-[0_0_15px_rgba(0,255,157,0.3)]" />
                 </div>
                 <div className="space-y-1">
                    <h3 className="text-sm sm:text-lg font-bold text-white uppercase tracking-widest">Perf_Layer</h3>
                    <p className="text-white/30 text-[10px] sm:text-xs">Latency &lt; 20ms | 99.9% Uptime</p>
                 </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
                 <div className="p-4 bg-cyber-violet/5 rounded-2xl border border-cyber-violet/10">
                    <Database className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-violet shadow-[0_0_15px_rgba(188,19,254,0.3)]" />
                 </div>
                 <div className="space-y-1">
                    <h3 className="text-sm sm:text-lg font-bold text-white uppercase tracking-widest">Data_Grid</h3>
                    <p className="text-white/30 text-[10px] sm:text-xs">Hybrid Vector & Relational Grid</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Global Architecture Path Visualization */}
        <div className="glass-card p-4 sm:p-12 rounded-[40px] sm:rounded-[60px] border-white/5 relative overflow-hidden min-h-[400px] sm:min-h-[600px] flex items-center justify-center bg-black/40">
           {/* Glow background */}
           <div className="absolute inset-0 bg-cyber-green/5 rounded-full blur-[100px] sm:blur-[150px] animate-pulse" />
           
           <div className="grid grid-cols-2 gap-6 sm:gap-12 relative z-10 w-full max-w-sm">
              {topology.nodes.map((node: any, i: number) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 sm:p-8 glass-card rounded-[24px] sm:rounded-[32px] border-white/10 flex flex-col items-center gap-3 sm:gap-5 group hover:border-cyber-green transition-all"
                >
                   <div className={`w-10 h-10 sm:w-16 sm:h-16 rounded-[18px] sm:rounded-[24px] border flex items-center justify-center transition-all group-hover:bg-cyber-green/10 ${
                     node.status === 'Active' ? 'border-cyber-green/30' : 'border-cyber-violet/30'
                   }`}>
                      {i === 0 && <Radio className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-green animate-pulse" />}
                      {i === 1 && <Share2 className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-green" />}
                      {i === 2 && <Database className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-violet" />}
                      {i === 3 && <Box className="w-6 h-6 sm:w-8 sm:h-8 text-cyber-violet" />}
                      {i > 3 && <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-white/20" />}
                   </div>
                   <div className="text-center">
                      <p className="text-[8px] sm:text-[10px] font-bold text-white group-hover:text-cyber-green uppercase tracking-[0.2em]">{node.label}</p>
                      <p className={`text-[6px] sm:text-[8px] font-bold mt-1 tracking-widest ${
                        node.status === 'Active' ? 'text-cyber-green/40' : 'text-cyber-violet/40'
                      }`}>{node.status.toUpperCase()}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
