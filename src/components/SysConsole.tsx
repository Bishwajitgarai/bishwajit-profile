"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Activity, Zap, Cpu, Binary } from "lucide-react";

export default function SysConsole() {
  const [logs, setLogs] = useState<string[]>([
    "INITIALIZING_CORE_PROTOCOL...",
    "NODE_REGISTRY_SYNC_COMPLETE",
    "ESTABLISHING_NEURAL_LINK..."
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const mockLogs = [
    "SCANNING_PROJECT_INVENTORY...",
    "OPTIMIZING_MOTION_PHYSICS...",
    "SYNCING_RAG_INDICES_0x7F",
    "PACKET_FLOW_VERIFIED",
    "ENCRYPTION_LAYER_ACTIVE",
    "FETCHING_TELEMETRY_DATA...",
    "GEOMETRY_BUFFER_CLEAN",
    "ARCHITECT_READY_FOR_INPUT"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs(prev => {
        const next = [...prev, mockLogs[Math.floor(Math.random() * mockLogs.length)]];
        return next.slice(-8); // Keep last 8 logs
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="fixed bottom-8 left-8 z-[100] hidden lg:block">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-64 premium-card p-4 rounded-2xl bg-[#020202]/80 border-white/10 overflow-hidden"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-3">
               <div className="flex items-center gap-2">
                  <Activity className="w-3 h-3 text-cyber-green animate-pulse" />
                  <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-white/40">Telemetry_Logs</span>
               </div>
               <span className="text-[7px] font-mono text-cyber-green/60">0x4F_STABLE</span>
            </div>
            
            <div 
              ref={scrollRef}
              className="space-y-1.5 h-32 overflow-y-auto no-scrollbar scroll-smooth"
            >
               {logs.map((log, i) => (
                 <div key={i} className="flex gap-2">
                    <span className="text-white/10 text-[8px] font-mono">[{i}]</span>
                    <p className="text-[9px] font-mono text-white/50 leading-tight uppercase tracking-wider">{log}</p>
                 </div>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3 backdrop-blur-xl ${
          isOpen ? 'bg-cyber-green/10 border-cyber-green/40 text-cyber-green' : 'bg-white/[0.02] border-white/10 text-white/40 hover:border-white/20'
        }`}
      >
        <Terminal className="w-5 h-5" />
        <div className="text-left font-mono">
           <p className="text-[8px] font-bold uppercase tracking-widest leading-none">Sys_Intel</p>
           <p className="text-[6px] opacity-40 uppercase leading-none mt-1">Status: Operational</p>
        </div>
        {isOpen && <div className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />}
      </motion.button>
    </div>
  );
}
