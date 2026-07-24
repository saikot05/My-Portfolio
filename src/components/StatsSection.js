"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { Activity, GitCommit, Code2, Flame, ExternalLink, FolderGit2, Trophy } from "lucide-react";

export default function StatsSection() {
  const [githubData, setGithubData] = useState({
    public_repos: 31,
    followers: 2,
    loading: true,
  });

  const [codeforcesData, setCodeforcesData] = useState({
    rating: 1252,
    maxRating: 1293,
    rank: "pupil",
    handle: "Saikot",
    loading: true,
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    // Fetch GitHub REST API stats
    async function fetchGithubStats() {
      try {
        const res = await fetch("https://api.github.com/users/saikot05");
        if (res.ok) {
          const data = await res.json();
          setGithubData({
            public_repos: data.public_repos || 31,
            followers: data.followers || 2,
            loading: false,
          });
        }
      } catch (err) {
        console.error("Failed to fetch GitHub API stats:", err);
      }
    }

    // Fetch Codeforces REST API user stats
    async function fetchCodeforcesStats() {
      try {
        const res = await fetch("https://codeforces.com/api/user.info?handles=Saikot");
        if (res.ok) {
          const data = await res.json();
          if (data.status === "OK" && data.result?.[0]) {
            const user = data.result[0];
            setCodeforcesData({
              rating: user.rating || 1252,
              maxRating: user.maxRating || 1293,
              rank: user.rank || "pupil",
              handle: user.handle || "Saikot",
              loading: false,
            });
          }
        }
      } catch (err) {
        console.error("Failed to fetch Codeforces API stats:", err);
      }
    }

    fetchGithubStats();
    fetchCodeforcesStats();
  }, []);

  const metrics = [
    {
      id: "repos",
      title: `${githubData.public_repos} Public Repos`,
      subtitle: "Open Source Repositories & Modern Projects on GitHub",
      icon: FolderGit2,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/20",
    },
    {
      id: "cp",
      title: "500+ Solved",
      subtitle: "Competitive Problems (Codeforces, CodeChef, LeetCode)",
      icon: Flame,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/20",
    },
    {
      id: "codeforces",
      title: `Rating ${codeforcesData.rating}`,
      subtitle: `Codeforces ${codeforcesData.rank.toUpperCase()} (Max: ${codeforcesData.maxRating})`,
      icon: Trophy,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      id: "projects",
      title: "5+ Full Stack",
      subtitle: "Production Web Applications (MERN & Next.js 16)",
      icon: Code2,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/20",
    },
  ];

  const profiles = [
    {
      platform: "Codeforces",
      handle: codeforcesData.handle,
      rating: `${codeforcesData.rank.toUpperCase()} (Rating: ${codeforcesData.rating})`,
      link: `https://codeforces.com/profile/${codeforcesData.handle}`,
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
      platform: "LeetCode",
      handle: "saikot_049",
      rating: "Algorithms & DS Solver",
      link: "https://leetcode.com/u/saikot_049",
      badgeColor: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    },
    {
      platform: "GitHub",
      handle: "saikot05",
      rating: `${githubData.public_repos} Repositories`,
      link: "https://github.com/saikot05",
      badgeColor: "bg-violet-500/10 text-violet-500 border-violet-500/20",
    },
  ];

  // Custom violet/purple theme palette matching portfolio design
  const calendarTheme = {
    dark: ["#161b22", "#39265c", "#5e32a8", "#8b5cf6", "#a78bfa"],
    light: ["#ebedf0", "#d8b4fe", "#c084fc", "#9333ea", "#6b21a8"],
  };

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
            <span>Real-Time GitHub & Codeforces Live API Data</span>
          </div>
          <h2 className="section-title">GitHub & Competitive Metrics</h2>
          <p className="section-subtitle">
            Authentic commit activity matrix, real-time GitHub REST API repository stats, and live Codeforces user ratings.
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

        {/* Real Live GitHub Activity Calendar Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-6 sm:p-8 rounded-3xl border border-zinc-200/50 dark:border-white/10 mb-12 space-y-6 overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white font-[Outfit] flex items-center gap-2">
                <GitCommit className="w-5 h-5 text-violet-500" />
                <span>GitHub Live Contribution Calendar (@saikot05)</span>
              </h3>
              <p className="text-xs text-zinc-500 mt-1">Authentic real-time contribution heatmap fetched directly from GitHub</p>
            </div>
            <a
              href="https://github.com/saikot05"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all shrink-0"
            >
              <span>View GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* GitHubCalendar Integration */}
          <div className="w-full overflow-x-auto pt-2 pb-2 flex justify-center text-zinc-900 dark:text-zinc-100">
            <GitHubCalendar
              username="saikot05"
              colorScheme="dark"
              fontSize={12}
              blockSize={12}
              blockMargin={4}
              theme={calendarTheme}
            />
          </div>
        </motion.div>

        {/* Competitive Programming Profiles Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
