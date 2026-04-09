"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [profile, setProfile] = useState<any>(null);
  const [health, setHealth] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/profile").then(res => res.json()),
      fetch("/api/health").then(res => res.json())
    ]).then(([profileData, healthData]) => {
      setProfile(profileData);
      setHealth(healthData);
      setLoading(false);
    }).catch(err => {
      console.error(err);
      setLoading(false);
    });
  }, []);

  return (
    <main className="min-h-screen bg-black text-[#00ff00] font-mono p-4 sm:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl border border-[#00ff00] shadow-[0_0_15px_rgba(0,255,0,0.3)] bg-[#0a0a0a] rounded-lg overflow-hidden">
        
        {/* Terminal Header */}
        <div className="bg-[#111] p-2 flex items-center border-b border-[#00ff00]">
          <div className="flex gap-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-xs text-[#00ff00] opacity-80">root@bishwajit-server:~#</p>
        </div>

        {/* Terminal Content */}
        <div className="p-6 sm:p-10">
          {loading ? (
            <div className="animate-pulse">
              <p>&gt; Initialize AI_Architecture</p>
              <p className="mt-2">&gt; Loading High_Concurrency_Protocols...</p>
              <p className="mt-2 animate-bounce">_</p>
            </div>
          ) : (
            <div className="space-y-6">
              
              <div className="text-center mb-10 border-b border-[#00ff00] pb-6 border-opacity-30">
                 <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_8px_rgba(0,255,0,0.8)]">{profile?.name || "Bishwajit Garai"}</h1>
                 <p className="text-xl opacity-90">&lt; {profile?.title || "Backend Developr | GenAI Architect"} /&gt;</p>
              </div>
              
              <div>
                <p className="text-[#00ff00] font-bold mb-2">================================================================================</p>
                <p>&gt; PLAYER     : <span className="text-[#fff]">{profile?.name}</span></p>
                <p>&gt; CLASS      : <span className="text-[#fff]">{profile?.title}</span></p>
                <p>&gt; REGION     : <span className="text-[#fff]">{profile?.location}</span></p>
                <p>&gt; PLAYTIME   : <span className="text-[#fff]">{profile?.experience}+ Years of Active Logging</span></p>
                <p className="text-[#00ff00] font-bold mt-2">================================================================================</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                  <h2 className="text-xl mb-4 uppercase inline-block border-b border-[#00ff00]">Core Skills</h2>
                  <ul className="space-y-2">
                    {profile?.skills?.map((skill: string, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-purple-400">[*]</span> 
                        <span className="text-gray-200">{skill}</span>
                        <span className="ml-auto w-16 h-2 bg-gradient-to-r from-green-500 to-green-800 rounded"></span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl mb-4 uppercase inline-block border-b border-[#00ff00]">Featured Projects</h2>
                   <ul className="space-y-4">
                    {profile?.projects?.map((project: string, i: number) => (
                      <li key={i} className="flex flex-col">
                        <span className="text-yellow-400 text-lg">▶ {project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-12 p-4 bg-black bg-opacity-50 border border-green-500 border-opacity-30 rounded">
                <p className="text-sm opacity-70 mb-2">--- SYSTEM STATUS ---</p>
                <p>API HEALTH_CHECK: <span className={health?.status === "online" ? "text-green-400" : "text-red-400"}>{health?.status?.toUpperCase() || "UNKNOWN"}</span></p>
                <p>API MESSAGE: <span className="text-white">{health?.message || "No Connection"}</span></p>
                <p className="mt-4"><a href={`mailto:${profile?.email}`} className="text-[#00ffff] hover:underline hover:text-[#fff] transition-colors">&gt; ping {profile?.email || "bishwajitgarai2520@gmail.com"}</a></p>
              </div>

              <p className="mt-8 animate-pulse text-2xl">_</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
