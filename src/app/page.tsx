"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  User, 
  Cpu, 
  Briefcase, 
  Activity, 
  Mail, 
  MapPin, 
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe
} from "lucide-react";

export default function Home() {
  const [profile, setProfile] = useState<any>(null);
  const [health, setHealth] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [bootSequence, setBootSequence] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, healthRes] = await Promise.all([
          fetch("/api/profile"),
          fetch("/api/health")
        ]);
        const profileData = await profileRes.json();
        const healthData = await healthRes.json();
        setProfile(profileData);
        setHealth(healthData);
      } catch (err) {
        console.error("Data fetch error:", err);
      } finally {
        setTimeout(() => setBootSequence(false), 2000); // 2s boot sequence
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const tabs = [
    { id: "overview", label: "Overview", icon: User },
    { id: "skills", label: "Skills", icon: Cpu },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "status", label: "System Status", icon: Activity },
  ];

  if (bootSequence) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-4"
        >
          <div className="w-16 h-16 border-2 border-cyber-green rounded-full border-t-transparent animate-spin mx-auto mb-8" />
          <motion.p 
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-xl font-mono text-cyber-green drop-shadow-[0_0_10px_rgba(0,255,157,0.5)]"
          >
            INITIALIZING SECURE PROTOCOL...
          </motion.p>
          <div className="text-xs font-mono opacity-50 text-cyber-green space-y-1">
            <p>[INFO] AUTHENTICATING BISHWAJIT_GARAI.SESSION</p>
            <p>[INFO] LOADING AI_CORE_MODULES...</p>
            <p>[INFO] DEPLOYING RAG_PIPELINE...</p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-[#00FF9D] font-mono selection:bg-[#00FF9D] selection:text-black p-4 md:p-8 lg:p-12 transition-all duration-500">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyber-green/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyber-violet/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 h-full">
        
        {/* Header - System Bar */}
        <header className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0 border-b border-cyber-green/20 pb-8">
          <div className="flex items-center gap-4">
            <motion.div 
              whileHover={{ rotate: 180 }}
              className="p-3 glass-panel rounded-xl border-cyber-green/40 cyber-border-glow"
            >
              <Terminal className="w-8 h-8 text-cyber-green" />
            </motion.div>
            <div>
              <h1 className="text-3xl font-bold tracking-tighter cyber-glow">
                BISHWAJIT GARAI <span className="text-xs opacity-50 font-normal">v2.0.26</span>
              </h1>
              <p className="text-sm opacity-70 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                SYSTEM_ACCESS: GRANTED | {profile?.location || "Kolkata, IN"}
              </p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              href={`mailto:${profile?.email}`}
              className="px-6 py-2 glass-panel rounded-lg flex items-center gap-2 hover:bg-cyber-green hover:text-black transition-all group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>SSH CONNECT</span>
            </motion.a>
          </div>
        </header>

        {/* Main Interface Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar / Navigation */}
          <nav className="flex flex-col gap-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all border text-left group ${
                    activeTab === tab.id 
                    ? "bg-cyber-green text-black border-transparent font-bold cyber-border-glow" 
                    : "glass-panel border-cyber-green/10 hover:border-cyber-green/40"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${activeTab === tab.id ? "" : "opacity-50 group-hover:opacity-100"}`} />
                  <span className="flex-1 capitalize tracking-widest">{tab.label}</span>
                  {activeTab === tab.id && <ChevronRight className="w-4 h-4" />}
                </button>
              );
            })}
            
            {/* Quick Status Box */}
            <div className="mt-8 p-6 glass-panel rounded-2xl border-cyber-violet/20 cyber-glow">
              <p className="text-[10px] opacity-40 uppercase mb-4 tracking-[0.2em]">Live Subsystems</p>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center">
                  <span className="opacity-60 flex items-center gap-2"><Zap className="w-3 h-3" /> Core_Engine</span>
                  <span className="text-cyber-green">ONLINE</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-60 flex items-center gap-2"><Globe className="w-3 h-3" /> API_Network</span>
                  <span className="text-cyber-green">CONNECTED</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-60 flex items-center gap-2"><Activity className="w-3 h-3" /> Latency</span>
                  <span className="text-white">12ms</span>
                </div>
              </div>
            </div>
          </nav>

          {/* Content Area */}
          <div className="lg:col-span-3 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                
                {/* Tab: Overview */}
                {activeTab === "overview" && (
                  <div className="space-y-8 h-full">
                    <section className="glass-panel p-8 rounded-3xl relative overflow-hidden h-full flex flex-col justify-center">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/5 rounded-full blur-[100px]" />
                      <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight flex items-center gap-4">
                        <ShieldCheck className="w-10 h-10 text-cyber-violet" />
                        Identity Profile
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4">
                        <div className="space-y-4">
                          <p className="text-lg opacity-80 leading-relaxed italic">
                            "Architecting next-generation infrastructure, high-concurrency 
                            backend APIs, and autonomous GenAI pipelines."
                          </p>
                          <div className="space-y-2 mt-8">
                            <LabelVal label="Role" value={profile?.title} />
                            <LabelVal label="XP" value={`${profile?.experience}+ Years`} />
                            <LabelVal label="HQ" value={profile?.location} />
                          </div>
                        </div>
                        <div className="flex items-center justify-center p-8 bg-black/40 rounded-2xl border border-white/5">
                           <div className="text-center">
                             <p className="text-[60px] font-bold text-cyber-violet leading-none">3.5</p>
                             <p className="text-xs tracking-[0.4em] opacity-40 uppercase">Years Experience</p>
                           </div>
                        </div>
                      </div>
                    </section>
                  </div>
                )}

                {/* Tab: Skills */}
                {activeTab === "skills" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {profile?.skills?.map((skill: string, i: number) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="glass-panel p-6 rounded-2xl border-white/5 group hover:border-cyber-green/40 transition-colors"
                      >
                         <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-bold group-hover:text-cyber-green transition-colors">{skill}</span>
                            <span className="text-xs opacity-40 uppercase group-hover:opacity-100">Mastery 95%</span>
                         </div>
                         <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: "95%" }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className="h-full bg-gradient-to-r from-cyber-green to-cyber-violet"
                            />
                         </div>
                         <div className="mt-4 flex gap-2">
                           <span className="text-[10px] bg-white/5 px-2 py-1 rounded opacity-50">#core</span>
                           <span className="text-[10px] bg-white/5 px-2 py-1 rounded opacity-50">#production</span>
                         </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Tab: Projects */}
                {activeTab === "projects" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {profile?.projects?.map((project: string, i: number) => (
                      <motion.div
                        key={project}
                        whileHover={{ scale: 1.02 }}
                        className="glass-panel p-8 rounded-3xl border-white/5 space-y-6 flex flex-col"
                      >
                        <div className="flex justify-between items-start">
                          <div className="p-3 bg-cyber-violet/10 rounded-xl">
                            <Briefcase className="w-6 h-6 text-cyber-violet" />
                          </div>
                          <span className="text-[10px] px-3 py-1 bg-cyber-violet/20 rounded-full text-cyber-violet font-bold uppercase tracking-wider">
                            Rarity: Epic
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold">{project}</h3>
                        <p className="text-sm opacity-60 flex-1">
                          Automated intelligence system focusing on advanced {project?.toLowerCase()} integration and scale.
                        </p>
                        <button className="flex items-center gap-2 text-xs font-bold text-cyber-green hover:underline">
                          VIEW PROJECT ARCHIVE <ExternalLink className="w-3 h-3" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Tab: Status */}
                {activeTab === "status" && (
                  <div className="glass-panel p-8 rounded-3xl border-white/5 h-full space-y-8">
                     <div className="flex items-center gap-4 mb-8">
                        <Activity className="w-8 h-8 text-cyber-pink" />
                        <h2 className="text-3xl font-bold">Network & Services</h2>
                     </div>
                     <div className="space-y-6 overflow-y-auto max-h-[400px] font-mono text-sm leading-relaxed p-4 bg-black/50 rounded-xl border border-white/5">
                        <LogLine text="Connecting to Central API..." status="WAIT" />
                        <LogLine text={`Handshake established with ${health?.status || "Server"}...`} status="OK" />
                        <LogLine text="Injecting Contextual RAG Buffers..." status="OK" />
                        <LogLine text="Syncing Local Profile State..." status="OK" />
                        <LogLine text={`Message: ${health?.message || "Running normal"}`} status="STBL" />
                        <LogLine text="Monitor active. Waiting for input." status="REDA" />
                        <motion.div 
                          animate={{ opacity: [1, 0, 1] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="w-2 h-4 bg-cyber-green inline-block ml-1"
                        />
                     </div>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                        <StatusCard label="CPU" val="14%" />
                        <StatusCard label="RAM" val="2.4GB" />
                        <StatusCard label="Uptime" val="99.9%" />
                        <StatusCard label="Threads" val="Async" />
                     </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Footer Decoration */}
      <footer className="mt-20 border-t border-white/5 pt-8 text-center opacity-30 text-[10px] tracking-[0.5em] uppercase">
        End-to-End Encryption Enabled | Powered by Antigravity v4.0
      </footer>
    </main>
  );
}

function LabelVal({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex gap-4 items-center">
      <span className="text-xs uppercase tracking-widest opacity-40 w-16">{label}:</span>
      <span className="text-white font-bold">{value}</span>
    </div>
  );
}

function LogLine({ text, status }: { text: string, status: string }) {
  const colors: Record<string, string> = {
    "OK": "text-cyber-green",
    "WAIT": "text-cyber-violet",
    "STBL": "text-cyber-green",
    "REDA": "text-cyber-pink"
  };
  return (
    <div className="flex gap-4">
      <span className={`font-bold ${colors[status] || "text-white"}`}>[{status}]</span>
      <span className="opacity-80">{text}</span>
    </div>
  );
}

function StatusCard({ label, val }: { label: string, val: string }) {
  return (
    <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
      <p className="text-[10px] opacity-40 uppercase mb-1">{label}</p>
      <p className="text-lg font-bold text-white">{val}</p>
    </div>
  );
}
