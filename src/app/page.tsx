"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Database, 
  Cpu, 
  GitBranch, 
  Server, 
  Activity, 
  Code2, 
  ChevronRight,
  Monitor,
  Workflow,
  Sparkles,
  Search,
  Zap,
  Box,
  Brain
} from "lucide-react";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("topology");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/profile")
      .then(res => res.json())
      .then(d => {
        setData(d);
        setLoading(false);
      })
      .catch(e => console.error(e));
  }, []);

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-8">
        <div className="space-y-4 text-center">
          <div className="w-16 h-16 border-2 border-cyber-green rounded-full border-t-transparent animate-spin mx-auto" />
          <p className="font-mono text-cyber-green animate-pulse">Initializing Backend Orchestrator...</p>
        </div>
      </div>
    );
  }

  const identity = data.identity;

  return (
    <main className="min-h-screen bg-[#020202] text-[#00FF9D] font-mono p-4 sm:p-8 lg:p-12 selection:bg-cyber-green selection:text-black">
      {/* Background Grid Accent */}
      <div className="fixed inset-0 pointer-events-none opacity-5 bg-[radial-gradient(#00FF9D_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-12">
        
        {/* Header: Core Identity */}
        <header className="flex flex-col lg:flex-row justify-between items-start gap-8 border-b border-cyber-green/10 pb-12">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3 mb-2">
               <span className="px-3 py-1 bg-cyber-green/10 text-cyber-green text-[10px] font-bold tracking-[0.2em] rounded border border-cyber-green/20">SYSTEM_ID: {identity.name.split(' ')[0].toUpperCase()}</span>
               <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white">
              {identity.name}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm sm:text-base">
              <span className="flex items-center gap-2 text-cyber-green font-bold">
                <Code2 className="w-4 h-4" /> {identity.title}
              </span>
              <span className="text-white/40">|</span>
              <span className="text-white/60">{identity.location}</span>
              <span className="text-white/40">|</span>
              <span className="text-cyber-violet font-bold">{identity.level}</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 text-right">
             <p className="text-[10px] opacity-40 uppercase tracking-widest mb-1">Status Protocol</p>
             <div className="glass-panel p-4 rounded-xl border-cyber-violet/20">
                <p className="text-xs text-cyber-violet font-bold">ALIGNMENT: {identity.alignment}</p>
                <div className="flex gap-4 mt-4">
                   <a href={`mailto:${identity.contact.email}`} className="text-white hover:text-cyber-green transition-colors"><Monitor className="w-4 h-4" /></a>
                   <a href={`https://github.com/${identity.contact.github}`} className="text-white hover:text-cyber-green transition-colors"><GitBranch className="w-4 h-4" /></a>
                   <a href="#" className="text-white hover:text-cyber-green transition-colors"><Zap className="w-4 h-4" /></a>
                </div>
             </div>
          </div>
        </header>

        {/* Dynamic Bento Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Section 1: Navigation Tabs */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <NavTab id="topology" label="Architecture" icon={Workflow} active={activeTab} set={setActiveTab} />
            <NavTab id="vitals" label="Logic & Skills" icon={Cpu} active={activeTab} set={setActiveTab} />
            <NavTab id="projects" label="Inventory" icon={Box} active={activeTab} set={setActiveTab} />
            <NavTab id="logs" label="Deployment Logs" icon={Activity} active={activeTab} set={setActiveTab} />

            <div className="mt-8 p-6 bg-cyber-violet/5 rounded-2xl border border-cyber-violet/10">
               <h3 className="text-xs font-bold text-cyber-violet mb-4 tracking-widest uppercase">Active Agents</h3>
               <div className="space-y-4">
                  <AgentStatus name="MeetMemo_Agent" status="LISTENING" color="green" />
                  <AgentStatus name="Archaea_Parser" status="IDLE" color="violet" />
               </div>
            </div>
          </div>

          {/* Section 2: Main Dynamic Content */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="min-h-[600px]"
              >
                {/* ARCHITECTURE VIEW */}
                {activeTab === "topology" && (
                  <div className="space-y-8">
                     <div className="glass-panel p-8 rounded-3xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5"><Brain className="w-32 h-32" /></div>
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white">
                           <GitBranch className="w-6 h-6 text-cyber-green" /> Backend Ecosystem
                        </h2>
                        
                        <div className="flex flex-col items-center gap-12 py-12">
                           <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-2xl mx-auto">
                              {data.topology.nodes.map((node: any) => (
                                <div key={node.id} className="p-4 glass-panel rounded-xl border-white/5 text-center group hover:border-cyber-green/40 transition-all flex flex-col items-center gap-3">
                                   <div className={`w-3 h-3 rounded-full ${node.status === 'Active' ? 'bg-cyber-green animate-pulse' : 'bg-cyber-violet'}`} />
                                   <p className="text-[10px] font-bold uppercase tracking-wider group-hover:text-cyber-green">{node.label}</p>
                                   <p className="text-[8px] opacity-40">{node.status}</p>
                                </div>
                              ))}
                           </div>
                           <p className="text-xs opacity-30 text-center italic max-w-md">The above diagram represents a live state retrieval of the distributed AI microservices orchestrating internal logic flows.</p>
                        </div>
                     </div>
                     
                     <div className="p-8 border border-white/5 rounded-3xl bg-cyber-green/[0.02]">
                        <h3 className="text-lg font-bold mb-4 text-cyber-green">Design Philosphy</h3>
                        <p className="text-white/60 leading-relaxed text-sm">
                           "My code isn't just a set of instructions; it's a scalable architecture designed for zero-latency data orchestration. 
                           By leveraging asynchronous FastAPI workers and high-speed in-memory caches, I ensure that data flows seamlessly even under extreme concurrency."
                        </p>
                     </div>
                  </div>
                )}

                {/* SKILLS VIEW */}
                {activeTab === "vitals" && (
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {data.skillMatrix.map((cat: any, i: number) => (
                        <div key={i} className="glass-panel p-8 rounded-3xl border-white/5 h-full">
                           <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-4">{cat.category}</h3>
                           <div className="flex flex-wrap gap-2">
                              {cat.skills.map((s: string) => (
                                <span key={s} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-bold hover:bg-cyber-green hover:text-black transition-all cursor-crosshair">{s}</span>
                              ))}
                           </div>
                           <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-[10px] opacity-40">
                              <span>READY_STATE</span>
                              <span className="text-cyber-green">100%</span>
                           </div>
                        </div>
                      ))}
                      <div className="glass-panel p-8 rounded-3xl border-cyber-violet/20 flex flex-col justify-center items-center gap-4">
                         <Database className="w-12 h-12 text-cyber-violet" />
                         <p className="font-bold text-center">Architectural Mastery</p>
                         <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map(v => <div key={v} className="w-6 h-1 bg-cyber-violet rounded-full" />)}
                         </div>
                      </div>
                   </div>
                )}

                {/* PROJECTS VIEW */}
                {activeTab === "projects" && (
                  <div className="grid grid-cols-1 gap-6">
                     {data.inventory.map((item: any, i: number) => (
                       <div key={i} className="glass-panel p-8 rounded-3xl border-white/5 group hover:border-cyber-green/40 transition-all flex flex-col md:flex-row gap-8 items-start">
                          <div className="w-full md:w-1/3 space-y-4">
                             <div className="flex items-center gap-2">
                                <span className="text-xs font-bold bg-cyber-green text-black px-2 py-0.5 rounded uppercase">{item.rarity}</span>
                             </div>
                             <h3 className="text-3xl font-bold text-white group-hover:text-cyber-green">{item.name}</h3>
                             <p className="text-xs opacity-50 uppercase tracking-widest underline underline-offset-4">{item.type}</p>
                          </div>
                          <div className="flex-1 space-y-6">
                             <p className="text-sm text-white/70 leading-relaxed font-sans">{item.description}</p>
                             <div className="flex flex-wrap gap-2 pt-4">
                                {item.stack.map((s: string) => (
                                  <span key={s} className="text-[10px] text-cyber-violet font-bold border border-cyber-violet/20 px-2 py-1 rounded">{s}</span>
                                ))}
                             </div>
                          </div>
                          <div className="self-center">
                             <ChevronRight className="w-8 h-8 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                          </div>
                       </div>
                     ))}
                  </div>
                )}

                {/* LOGS VIEW */}
                {activeTab === "logs" && (
                  <div className="space-y-6">
                     {data.questLog.map((quest: any, i: number) => (
                       <div key={i} className="flex gap-6">
                          <div className="flex flex-col items-center">
                             <div className="w-4 h-4 rounded-full bg-cyber-green border-4 border-black box-content" />
                             <div className="w-px flex-1 bg-white/10" />
                          </div>
                          <div className="flex-1 pb-12">
                             <p className="text-[10px] text-cyber-green font-bold mb-1 tracking-[0.3em]">{quest.period}</p>
                             <h3 className="text-2xl font-bold text-white mb-2">{quest.role} @ {quest.company}</h3>
                             <ul className="space-y-3 mt-4">
                                {quest.achievements.map((a: string, j: number) => (
                                  <li key={j} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                                     <Sparkles className="w-4 h-4 text-cyber-violet flex-shrink-0 mt-0.5" /> {a}
                                  </li>
                                ))}
                             </ul>
                          </div>
                       </div>
                     ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <footer className="mt-20 border-t border-white/5 pt-8 text-center flex flex-col items-center gap-4">
         <p className="text-[10px] opacity-20 tracking-[0.8em] uppercase">Deep Logic Orchestration</p>
         <div className="flex gap-6 opacity-30">
            <Zap className="w-4 h-4" />
            <Box className="w-4 h-4" />
            <Workflow className="w-4 h-4" />
         </div>
      </footer>
    </main>
  );
}

function NavTab({ id, label, icon: Icon, active, set }: any) {
  const isActive = active === id;
  return (
    <button
      onClick={() => set(id)}
      className={`flex items-center gap-4 px-6 py-4 rounded-2xl border transition-all text-left group ${
        isActive 
        ? "bg-cyber-green text-black border-transparent shadow-[0_0_20px_rgba(0,255,157,0.3)]" 
        : "glass-panel border-white/5 hover:border-cyber-green/40"
      }`}
    >
      <Icon className={`w-5 h-5 ${isActive ? "" : "opacity-40 group-hover:opacity-100"}`} />
      <span className={`text-sm tracking-widest font-bold uppercase ${isActive ? "" : "opacity-60 group-hover:opacity-100"}`}>
        {label}
      </span>
      {isActive && <ChevronRight className="ml-auto w-4 h-4" />}
    </button>
  );
}

function AgentStatus({ name, status, color }: any) {
  const colorClass = color === "green" ? "text-cyber-green" : "text-cyber-violet";
  const bgClass = color === "green" ? "bg-cyber-green" : "bg-cyber-violet";
  return (
    <div className="flex items-center justify-between">
       <span className="text-[10px] opacity-60 flex items-center gap-2"><Zap className={`w-2 h-2 ${colorClass}`} /> {name}</span>
       <div className="flex items-center gap-2">
          <span className={`text-[8px] font-bold ${colorClass}`}>{status}</span>
          <div className={`w-1 h-1 rounded-full ${bgClass} animate-pulse`} />
       </div>
    </div>
  );
}
