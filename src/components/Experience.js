"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase, FaCode, FaGraduationCap } from "react-icons/fa";

const experienceData = [
  {
    title: "Full Stack Software Engineering",
    company: "Personal Projects & Independent Development",
    period: "2024 — Present",
    icon: <FaBriefcase />,
    description:
      "Engineered high-performance end-to-end web applications (AuraNex, GreenPulse AI, FundVerse) using Next.js 16, React 19, Express, and MongoDB Atlas. Integrated Stripe payment gateways, RBAC auth flow, and RESTful APIs.",
  },
  {
    title: "Competitive Programming & Algorithmic R&D",
    company: "Codeforces, CodeChef & LeetCode",
    period: "2024 — Present",
    icon: <FaCode />,
    description:
      "Solves complex data structure & algorithmic problems regularly. Participated in multiple online contests, solving 500+ problems across platforms to optimize time & space complexity.",
  },
  {
    title: "Academic & Systems Programming",
    company: "RUET (Rajshahi University of Engineering & Technology)",
    period: "2024 — Present",
    icon: <FaGraduationCap />,
    description:
      "Developed foundational algorithms, object-oriented systems, and memory-managed applications using C, C++, Python, and Java as part of undergraduate CSE coursework.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative overflow-hidden transition-colors duration-300 py-20">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="section-container" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="section-title">Engineering Experience</h2>
          <p className="section-subtitle">My technical milestones, system engineering, and continuous R&D journey</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto mt-12">
          {/* Timeline center line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent md:-translate-x-px" />

          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              className={`relative flex items-start gap-8 mb-12 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
            >
              {/* Timeline Dot with Glow Pulse */}
              <div className="absolute left-6 md:left-1/2 w-3.5 h-3.5 bg-purple-500 rounded-full -translate-x-[7px] mt-8 z-10 shadow-lg shadow-purple-500/50">
                <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-75" />
              </div>

              <div className="hidden md:block md:w-1/2" />

              {/* Glassmorphic Experience Card */}
              <div className="ml-14 md:ml-0 md:w-1/2 glass-card p-6 hover:border-purple-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/10 dark:bg-purple-500/10 border border-purple-600/20 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20">
                    {item.period}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1 font-[Outfit] group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-purple-700/80 dark:text-purple-300/80 text-sm font-medium mb-3 transition-colors">
                  {item.company}
                </p>
                
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}