"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBriefcase } from "react-icons/fa";

const experienceData = [
  {
    title: "Competitive Programming Practice",
    company: "Codeforces, CodeChef",
    period: "2024 — Present",
    description: "Regular problem solving to improve algorithmic thinking, coding speed, and logical reasoning. Participated in online contests and solved 200+ problems across multiple platforms.",
  },
  {
    title: "Web Development Learner",
    company: "Self-taught & Programming Hero",
    period: "2024 — Present",
    description: "Learning modern web development technologies including HTML, CSS, JavaScript, React, Next.js, and backend tools. Building real-world projects to strengthen practical skills.",
  },
  {
    title: "Academic Programming",
    company: "C, C++, Python, Java",
    period: "2024 — Present",
    description: "Implemented academic programs and solutions as part of university coursework. Gained experience in multiple programming paradigms and language ecosystems.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My professional journey and learning experiences</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto mt-12">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent md:-translate-x-px" />

          {experienceData.map((item, idx) => (
            <motion.div
              key={idx}
              className={`relative flex items-start gap-8 mb-12 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
            >
              <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-purple-500 rounded-full -translate-x-1.5 mt-8 z-10 shadow-lg shadow-purple-500/50">
                <div className="absolute inset-0 bg-purple-500 rounded-full animate-ping opacity-75" />
              </div>

              <div className="hidden md:block md:w-1/2" />

              <div className="ml-14 md:ml-0 md:w-1/2 glass-card p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-600/10 dark:bg-purple-500/10 border border-purple-600/20 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <FaBriefcase />
                  </div>
                  <span className="text-purple-600 dark:text-purple-400 text-sm font-semibold">{item.period}</span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1 font-[Outfit] transition-colors">{item.title}</h3>
                <p className="text-purple-700/70 dark:text-purple-300/70 text-sm mb-3 transition-colors">{item.company}</p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}