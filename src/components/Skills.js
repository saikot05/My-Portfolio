"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss, SiVscodium, SiFirebase } from "react-icons/si";

const categories = [
  {
    name: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, level: 90, color: "#e34f26" },
      { name: "CSS3", icon: <FaCss3Alt />, level: 85, color: "#264de4" },
      { name: "JavaScript", icon: <FaJs />, level: 80, color: "#f7df1e" },
      { name: "React", icon: <FaReact />, level: 70, color: "#61dafb" },
      { name: "Next.js", icon: <SiNextdotjs />, level: 60, color: "#7c3aed" },
      { name: "Tailwind", icon: <SiTailwindcss />, level: 75, color: "#38bdf8" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 55, color: "#68a063" },
      { name: "Express.js", icon: <SiExpress />, level: 50, color: "#7c3aed" },
      { name: "MongoDB", icon: <SiMongodb />, level: 55, color: "#47a248" },
      { name: "Firebase", icon: <SiFirebase />, level: 50, color: "#ffca28" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 70, color: "#f05032" },
      { name: "GitHub", icon: <FaGithub />, level: 75, color: "#181717" },
      { name: "VS Code", icon: <SiVscodium />, level: 85, color: "#007acc" },
      { name: "Figma", icon: <FaFigma />, level: 40, color: "#a259ff" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("Frontend");

  const activeCategory = categories.find((c) => c.name === activeTab);

  return (
    <section id="skills" className="relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with, categorized by area of expertise</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div className="flex justify-center gap-3 mb-10 flex-wrap" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}>
          {categories.map((cat) => (
            <button key={cat.name} onClick={() => setActiveTab(cat.name)} className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === cat.name ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-lg shadow-violet-500/25" : "bg-violet-500/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-violet-500/10 dark:border-white/10 hover:border-violet-500/30 hover:text-violet-600 dark:hover:text-violet-300"}`}>
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {activeCategory?.skills.map((skill, idx) => (
            <motion.div key={skill.name} className="glass-card p-6 flex flex-col items-center text-center group" initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}>
              {/* Circular Progress */}
              <div className="relative w-20 h-20 mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" className="text-zinc-200 dark:text-white/5" strokeWidth="6" />
                  <motion.circle cx="40" cy="40" r="35" fill="none" stroke={skill.color} strokeWidth="6" strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 35}`} initial={{ strokeDashoffset: 2 * Math.PI * 35 }} animate={isInView ? { strokeDashoffset: 2 * Math.PI * 35 * (1 - skill.level / 100) } : {}} transition={{ duration: 1.2, delay: 0.5 + idx * 0.1, ease: "easeOut" }} />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
              </div>
              <h4 className="text-zinc-900 dark:text-white font-medium text-sm mb-1 transition-colors">{skill.name}</h4>
              <span className="text-xs text-zinc-500">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
