"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaPython, 
  FaGoogle, 
  FaStripe 
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiVscodium, 
  SiTypescript, 
  SiC, 
  SiCplusplus, 
  SiReactquery, 
  SiZod, 
  SiJsonwebtokens, 
  SiVercel, 
  SiNetlify, 
  SiPostman 
} from "react-icons/si";
import { 
  FiShield, 
  FiKey, 
  FiGlobe, 
  FiServer, 
  FiZap, 
  FiCpu, 
  FiMessageSquare, 
  FiUsers, 
  FiRefreshCw 
} from "react-icons/fi";

const categories = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: <FaJs />, level: 85, color: "#f7df1e" },
      { name: "TypeScript", icon: <SiTypescript />, level: 80, color: "#3178c6" },
      { name: "C", icon: <SiC />, level: 80, color: "#a8b9cc" },
      { name: "C++", icon: <SiCplusplus />, level: 85, color: "#00599c" },
      { name: "Python", icon: <FaPython />, level: 75, color: "#3776ab" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, level: 85, color: "#61dafb" },
      { name: "Next.js", icon: <SiNextdotjs />, level: 80, color: "#8b5cf6" },
      { name: "HTML5", icon: <FaHtml5 />, level: 90, color: "#e34f26" },
      { name: "CSS3", icon: <FaCss3Alt />, level: 85, color: "#264de4" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 85, color: "#38bdf8" },
      { name: "TanStack Query", icon: <SiReactquery />, level: 75, color: "#ff4154" },
    ],
  },
  {
    name: "Backend & DB",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, level: 75, color: "#68a063" },
      { name: "Express.js", icon: <SiExpress />, level: 75, color: "#a78bfa" },
      { name: "REST APIs", icon: <SiPostman />, level: 85, color: "#ff6c37" },
      { name: "API Integration", icon: <FiGlobe />, level: 85, color: "#00b4d8" },
      { name: "Vercel AI SDK", icon: <SiVercel />, level: 70, color: "#c084fc" },
      { name: "Zod Validation", icon: <SiZod />, level: 75, color: "#3e67b1" },
      { name: "MongoDB", icon: <SiMongodb />, level: 80, color: "#47a248" },
      { name: "MongoDB Atlas", icon: <SiMongodb />, level: 80, color: "#00ed64" },
      { name: "Mongoose ODM", icon: <FiServer />, level: 80, color: "#880000" },
    ],
  },
  {
    name: "Auth & Security",
    skills: [
      { name: "Better Auth", icon: <FiShield />, level: 80, color: "#8b5cf6" },
      { name: "JWT", icon: <SiJsonwebtokens />, level: 80, color: "#d63aff" },
      { name: "JWKS", icon: <FiKey />, level: 75, color: "#eab308" },
      { name: "Google OAuth", icon: <FaGoogle />, level: 85, color: "#4285f4" },
      { name: "Stripe API", icon: <FaStripe />, level: 75, color: "#635bff" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 85, color: "#f05032" },
      { name: "GitHub", icon: <FaGithub />, level: 85, color: "#181717" },
      { name: "VS Code", icon: <SiVscodium />, level: 90, color: "#007acc" },
      { name: "Vercel", icon: <SiVercel />, level: 85, color: "#7c3aed" },
      { name: "Netlify", icon: <SiNetlify />, level: 80, color: "#00c7b7" },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Fast Learner", icon: <FiZap />, level: 95, color: "#f59e0b" },
      { name: "Problem Solving", icon: <FiCpu />, level: 90, color: "#3b82f6" },
      { name: "Communication", icon: <FiMessageSquare />, level: 85, color: "#10b981" },
      { name: "Team Collaboration", icon: <FiUsers />, level: 90, color: "#ec4899" },
      { name: "Adaptability", icon: <FiRefreshCw />, level: 90, color: "#06b6d4" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("Languages");

  const activeCategory = categories.find((c) => c.name === activeTab);

  return (
    <section id="skills" className="relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">Technical proficiencies, frameworks, tools, and professional soft skills</p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex justify-center gap-2 sm:gap-3 mb-10 flex-wrap" 
          initial={{ opacity: 0, y: 20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button 
              key={cat.name} 
              onClick={() => setActiveTab(cat.name)} 
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === cat.name 
                  ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-lg shadow-violet-500/25 scale-105" 
                  : "bg-violet-500/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-violet-500/10 dark:border-white/10 hover:border-violet-500/30 hover:text-violet-600 dark:hover:text-violet-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {activeCategory?.skills.map((skill, idx) => (
            <motion.div 
              key={skill.name} 
              className="glass-card p-6 flex flex-col items-center text-center group hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300" 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={isInView ? { opacity: 1, scale: 1 } : {}} 
              transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
            >
              {/* Circular Progress Meter */}
              <div className="relative w-20 h-20 mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                  <circle 
                    cx="40" 
                    cy="40" 
                    r="35" 
                    fill="none" 
                    stroke="currentColor" 
                    className="text-zinc-200 dark:text-white/5" 
                    strokeWidth="6" 
                  />
                  <motion.circle 
                    cx="40" 
                    cy="40" 
                    r="35" 
                    fill="none" 
                    stroke={skill.color} 
                    strokeWidth="6" 
                    strokeLinecap="round" 
                    strokeDasharray={`${2 * Math.PI * 35}`} 
                    initial={{ strokeDashoffset: 2 * Math.PI * 35 }} 
                    animate={isInView ? { strokeDashoffset: 2 * Math.PI * 35 * (1 - skill.level / 100) } : {}} 
                    transition={{ duration: 1.2, delay: 0.2 + idx * 0.08, ease: "easeOut" }} 
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
              </div>
              <h4 className="text-zinc-900 dark:text-white font-medium text-sm mb-1 transition-colors">{skill.name}</h4>
              <span className="text-xs text-zinc-500 font-medium">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
