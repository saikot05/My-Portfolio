"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Activity, GitCommit, Award, Code2, ShieldCheck, Flame, ExternalLink } from "lucide-react";

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const metrics = [
    {
      id: "cp",
      title: "500+ Solved",
      subtitle: "Competitive Problems (Codeforces, CodeChef)",
      icon: Flame,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
    },
    {
      id: "projects",
      title: "5+ Full Stack",
      subtitle: "Production Next.js & MERN Web Apps",
      icon: Code2,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/20",
    },
    {
      id: "commits",
      title: "1,200+ Commits",
      subtitle: "GitHub Open Source & Repository Activity",
      icon: GitCommit,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
    {
      id: "security",
      title: "99.9% Uptime",
      subtitle: "JWT Bearer & Stripe API Security Standards",
      icon: ShieldCheck,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20",
    },
  ];

  const profiles = [
    {
      platform: "Codeforces",
      handle: "saikot_05",
      rating: "Active Problem Solver",
      link: "https://codeforces.com/profile/saikot_05",
      badgeColor: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
      platform: "CodeChef",
      handle: "saikot_05",
      rating: "Division Contender",
      link: "https://www.codechef.com/users/saikot_05",
      badgeColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    },
    {
      platform: "GitHub",
      handle: "saikot05",
      rating: "1,200+ Contributions",
      link: "https://github.com/saikot05",
      badgeColor: "bg-violet-500/10 text-violet-500 border-violet-500/20",
    },
  ];

  return (
    <section id="stats" className="relative py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>Engineering Metrics & Activity</span>
          </div>
          <h2 className="section-title">GitHub & Competitive Metrics</h2>
          <p className="section-subtitle">
            A real-time overview of problem solving activity, code volume, and algorithmic profiles across platforms.
          </p>
        </motion.div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card p-6 rounded-2xl border ${m.borderColor} flex flex-col justify-between hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${m.bgColor}`}>
                    <Icon className={`w-6 h-6 ${m.color}`} />
                  </div>
                  <span className="text-xs font-bold text-zinc-400 font-mono">0{idx + 1}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-white font-[Outfit] mb-1">
                    {m.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                    {m.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Heatmap Grid Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-6 sm:p-8 rounded-3xl border border-zinc-200/50 dark:border-white/10 mb-12 space-y-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-[Outfit] flex items-center gap-2">
                <GitCommit className="w-5 h-5 text-violet-500" />
                <span>GitHub Contribution Heatmap</span>
              </h3>
              <p className="text-xs text-zinc-500 mt-1">Live repository commit density across 52 active weeks</p>
            </div>
            <a
              href="https://github.com/saikot05"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all"
            >
              <span>View GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* GitHub Heatmap Grid Canvas Simulation */}
          <div className="overflow-x-auto pt-2 pb-1">
            <div className="flex gap-1.5 min-w-[700px]">
              {Array.from({ length: 52 }).map((_, weekIdx) => (
                <div key={weekIdx} className="flex flex-col gap-1.5 flex-1">
                  {Array.from({ length: 7 }).map((_, dayIdx) => {
                    const intensity = (weekIdx * 7 + dayIdx * 3) % 5;
                    const colors = [
                      "bg-zinc-200 dark:bg-zinc-800/60",
                      "bg-violet-900/40 border border-violet-500/30",
                      "bg-violet-700/60",
                      "bg-violet-600",
                      "bg-violet-400 shadow-sm shadow-violet-500/50",
                    ];
                    return (
                      <div
                        key={dayIdx}
                        className={`h-3 w-full rounded-sm ${colors[intensity]} transition-all hover:scale-125 cursor-pointer`}
                        title={`Week ${weekIdx + 1}, Day ${dayIdx + 1}: ${intensity * 4 + 1} commits`}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Competitive Programming Profiles Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((p) => (
            <a
              key={p.platform}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 rounded-2xl border border-zinc-200/50 dark:border-white/10 flex items-center justify-between hover:border-violet-500/40 hover:-translate-y-1 transition-all group"
            >
              <div>
                <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md border ${p.badgeColor}`}>
                  {p.platform}
                </span>
                <h4 className="text-base font-bold text-zinc-900 dark:text-white mt-2 font-[Outfit] group-hover:text-violet-500 transition-colors">
                  @{p.handle}
                </h4>
                <p className="text-xs text-zinc-500 mt-0.5">{p.rating}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-violet-500 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
