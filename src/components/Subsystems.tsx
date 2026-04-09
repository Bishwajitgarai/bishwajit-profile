"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio, Database, Activity, Box, Zap, Share2, Info, ChevronRight, Binary } from "lucide-react";

export default function Subsystems({ data }: { data: any }) {
  const { topology } = data;
  const [activeNode, setActiveNode] = useState<any>(null);

  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Radio className="w-5 h-5" />;
      case 1: return <Share2 className="w-5 h-5" />;
      case 2: return <Database className="w-5 h-5" />;
      case 3: return <Box className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  const getDetails = (label: string) => {
    const details: Record<string, string[]> = {
      "FastAPI / Flask": ["Asynchronous I/O", "High Throughput", "Pydantic Validation"],
      "LLM Ops (Gemini/OpenAI)": ["Prompt Chaining", "Token Optimization", "Model Versioning"],
      "RAG / Vector DB": ["Semantic Search", "Indexing / Vespa", "Context Retrieval"],
      "MySQL / Redis": ["ACID Compliance", "Real-time Caching", "Schema Design"],
      "Docker / Nginx": ["Containerization", "Reverse Proxy", "Scalable Deployments"]
    };
    return details[label] || ["Production Grade", "Highly Available", "Logic Optimized"];
  };

  return (
    <section className="min-h-screen py-24 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col justify-center relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
           <div className="space-y-6">
              <span className="px-3 py-1 bg-cyber-green/10 text-cyber-green text-[9px] font-mono tracking-[0.3em] uppercase rounded-full">
                System Infrastructure
              </span>
              <h2 className="text-4xl sm:text-7xl font-bold text-white tracking-tight uppercase leading-[0.9]">
                Logical <span className="text-cyber-green/40 italic font-light lowercase">Architecture</span>
              </h2>
              <p className="text-white/40 max-w-sm leading-relaxed font-sans font-light text-base">
                An abstract visualization of the distributed backend ecosystems and AI pipelines I orchestrate. Click nodes for technical intel.
              </p>
           </div>

           {/* Interactive Intel Panel */}
           <AnimatePresence mode="wait">
             {activeNode ? (
               <motion.div
                 key={activeNode.id}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 className="premium-card p-8 rounded-3xl border-cyber-green/20 relative overflow-hidden group"
               >
                 <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Binary className="w-12 h-12" />
                 </div>
                 <div className="space-y-4">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-cyber-green/10 rounded-lg text-cyber-green">
                          {getIcon(topology.nodes.findIndex((n:any) => n.id === activeNode.id))}
                       </div>
                       <h3 className="text-xl font-bold text-white tracking-wide">{activeNode.label}</h3>
                    </div>
                    <ul className="space-y-2">
                       {getDetails(activeNode.label).map((d: string, i: number) => (
                         <li key={i} className="flex items-center gap-2 text-white/50 text-xs font-mono">
                            <ChevronRight className="w-3 h-3 text-cyber-green" />
                            {d}
                         </li>
                       ))}
                    </ul>
                 </div>
               </motion.div>
             ) : (
               <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="p-8 border border-dashed border-white/10 rounded-3xl flex items-center justify-center text-white/20 text-xs font-mono uppercase tracking-[0.2em]"
               >
                 Select Node to Inspect Signal
               </motion.div>
             )}
           </AnimatePresence>
        </motion.div>

        {/* Global Architecture Visualization */}
        <div className="relative aspect-square max-w-lg mx-auto w-full flex items-center justify-center p-8">
           <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
             <motion.path 
               d="M100 100 L300 100 L300 300 L100 300 Z" 
               fill="none" 
               stroke="currentColor" 
               strokeWidth="0.5"
               initial={{ pathLength: 0 }}
               whileInView={{ pathLength: 1 }}
               viewport={{ once: true }}
             />
             <line x1="100" y1="100" x2="300" y2="300" stroke="currentColor" strokeWidth="0.5" />
             <line x1="300" y1="100" x2="100" y2="300" stroke="currentColor" strokeWidth="0.5" />
           </svg>

           <div className="grid grid-cols-2 gap-8 relative z-10 w-full">
              {topology.nodes.map((node: any, i: number) => (
                <motion.button
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-8 premium-card rounded-[32px] flex flex-col items-center gap-4 text-center group transition-all duration-300 ${
                    activeNode?.id === node.id ? 'border-cyber-green bg-cyber-green/5' : 'hover:border-cyber-green/40'
                  }`}
                >
                   <div className={`p-3 bg-white/[0.02] border border-white/[0.05] rounded-xl group-hover:border-cyber-green/40 transition-colors ${
                     activeNode?.id === node.id ? 'text-cyber-green border-cyber-green/20' : 'text-white/40'
                   }`}>
                      {getIcon(i)}
                   </div>
                   <div>
                      <p className={`text-[9px] font-mono font-bold uppercase tracking-[0.2em] transition-colors ${
                        activeNode?.id === node.id ? 'text-cyber-green' : 'text-white/60 group-hover:text-cyber-green'
                      }`}>{node.label}</p>
                      <p className="text-[7px] font-mono text-white/20 mt-1 uppercase tracking-widest">{node.status}</p>
                   </div>
                </motion.button>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
