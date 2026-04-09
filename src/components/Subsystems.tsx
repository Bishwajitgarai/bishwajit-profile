"use client";

import { motion } from "framer-motion";
import { GitBranch, Radio, Database, Activity, Box, Zap } from "lucide-react";

export default function Subsystems({ data }: { data: any }) {
  const { topology } = data;

  return (
    <section className="min-h-screen py-24 px-8 max-w-7xl mx-auto flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-12">
           <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                Subsystem <span className="text-cyber-green">Topology</span>
              </h2>
              <p className="text-white/40 max-w-lg leading-relaxed font-sans text-lg">
                The underlying architecture of my distributed AI and backend ecosystems. 
                Built for high-concurrency, low-latency, and autonomous fault-tolerance.
              </p>
           </div>

           <div className="space-y-8">
              <div className="flex gap-6 items-center">
                 <div className="p-4 bg-cyber-green/10 rounded-2xl">
                    <Zap className="w-8 h-8 text-cyber-green" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-widest">Performance Protocol</h3>
                    <p className="text-white/30 text-sm">Target Latency: &lt; 20ms | Availability: 99.99%</p>
                 </div>
              </div>
              <div className="flex gap-6 items-center">
                 <div className="p-4 bg-cyber-violet/10 rounded-2xl">
                    <Database className="w-8 h-8 text-cyber-violet" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white uppercase tracking-widest">Data Orchestration</h3>
                    <p className="text-white/30 text-sm">Hybrid RAG / Vector Search / Relational Grid</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Topology Visualization */}
        <div className="glass-card p-12 rounded-[48px] border-white/5 relative overflow-hidden min-h-[500px] flex items-center justify-center">
           <div className="absolute inset-0 bg-cyber-green/2 rounded-full blur-[120px]" />
           
           <div className="grid grid-cols-2 gap-12 relative z-10 w-full max-w-md">
              {topology.nodes.map((node: any, i: number) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 glass-card rounded-3xl border-white/10 flex flex-col items-center gap-4 group hover:border-cyber-green transition-all"
                >
                   <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-all group-hover:bg-cyber-green/10 ${
                     node.status === 'Active' ? 'border-cyber-green/40' : 'border-cyber-violet/40'
                   }`}>
                      {i === 0 && <Radio className="w-6 h-6 text-cyber-green animate-pulse" />}
                      {i === 1 && <GitBranch className="w-6 h-6 text-cyber-green" />}
                      {i === 2 && <Database className="w-6 h-6 text-cyber-violet" />}
                      {i === 3 && <Box className="w-6 h-6 text-cyber-violet" />}
                      {i > 3 && <Activity className="w-6 h-6 text-white/40" />}
                   </div>
                   <div className="text-center">
                      <p className="text-[10px] font-bold text-white group-hover:text-cyber-green uppercase tracking-widest">{node.label}</p>
                      <p className={`text-[8px] font-bold mt-1 ${
                        node.status === 'Active' ? 'text-cyber-green/60' : 'text-cyber-violet/60'
                      }`}>{node.status}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
