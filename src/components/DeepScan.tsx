"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Activity, Globe, Satellite, Zap, Radio, Terminal } from "lucide-react";

export default function DeepScan() {
  const [stats, setStats] = useState({ uniqueViews: 0, lastBroadcast: "" });
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    // Record view and fetch stats
    fetch("/api/stats", { method: "POST" })
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(e => console.error("Stats fail:", e));

    const interval = setInterval(() => {
      setPulse(p => (p + 1) % 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
      <div className="premium-card p-1 rounded-[40px] bg-gradient-to-br from-cyber-green/20 to-cyber-violet/20 overflow-hidden">
        <div className="bg-[#020202] rounded-[38px] p-8 sm:p-12 relative overflow-hidden">
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
             <div className="grid grid-cols-12 h-full w-full">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="border-r border-white/10 h-full" />
                ))}
             </div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center lg:items-end justify-between">
            
            <div className="space-y-8 flex-1">
               <div className="flex items-center gap-4 text-cyber-green">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1] }} 
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="p-3 bg-cyber-green/10 rounded-xl"
                  >
                    <Activity className="w-6 h-6" />
                  </motion.div>
                  <h2 className="text-xl font-mono font-bold tracking-[0.4em] uppercase">Deep_Scan_Active</h2>
               </div>

               <div className="space-y-2">
                 <h3 className="text-4xl sm:text-6xl font-bold text-white tracking-tighter">
                   Intelligence <span className="text-white/20 italic font-light">Dashboard</span>
                 </h3>
                 <p className="text-white/40 font-mono text-xs uppercase tracking-[0.2em]">Live system telemetry and broadcast logs</p>
               </div>

               <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                     <p className="text-[10px] font-bold text-cyber-green uppercase tracking-[0.3em]">Unique Uplinks</p>
                     <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-white tabular-nums">{stats.uniqueViews.toString().padStart(3, '0')}</span>
                        <span className="text-[10px] text-white/20 font-mono uppercase font-bold">Nodes</span>
                     </div>
                  </div>
                  <div className="space-y-4">
                     <p className="text-[10px] font-bold text-cyber-green uppercase tracking-[0.3em]">Signal Strength</p>
                     <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-white tabular-nums">98.4</span>
                        <span className="text-[10px] text-white/20 font-mono uppercase font-bold">GHz</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="w-full lg:w-96 space-y-6">
               <div className="premium-card p-6 rounded-3xl bg-white/[0.02] space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                     <div className="flex items-center gap-2">
                        <Radio className="w-4 h-4 text-cyber-violet animate-pulse" />
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white/40">Intel Broadcast</span>
                     </div>
                     <span className="text-[9px] font-mono text-cyber-green font-bold uppercase">Status: Online</span>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] text-white/30 uppercase font-mono">Last Broadcast Signal:</p>
                     <p className="text-xs font-mono text-white/80">
                        {new Date(stats.lastBroadcast || new Date()).toLocaleString('en-US', { 
                          month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false 
                        })}
                     </p>
                  </div>
                  <div className="pt-2">
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                         animate={{ x: ["-100%", "100%"] }} 
                         transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                         className="h-full w-1/3 bg-cyber-green/40"
                       />
                    </div>
                  </div>
               </div>

               <div className="p-4 flex gap-4 overflow-hidden">
                  <div className="flex-1 font-mono text-[9px] text-white/10 uppercase tracking-[0.3em] h-4 overflow-hidden relative">
                    <motion.div 
                      animate={{ y: [0, -100] }}
                      transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                      className="space-y-4 pt-1"
                    >
                      <p>Scanning_Registry_Nodes...</p>
                      <p>Fetching_Core_Telemetry...</p>
                      <p>Optimizing_Packet_Flow...</p>
                      <p>Syncing_RAG_Indices...</p>
                      <p>Encryption_Layer_Active...</p>
                    </motion.div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
