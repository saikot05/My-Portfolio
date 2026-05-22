"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Rajshahi University of Engineering & Technology (RUET)",
    year: "2024 — Present",
    description: "Studying core computer science subjects including programming, digital logic, mathematics, algorithms, and electronics. Actively participating in competitive programming and building web projects.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Rajshahi Board",
    year: "2023",
    description: "Completed higher secondary education with a science background, focusing on mathematics, physics, and chemistry with excellent results.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Rajshahi Board",
    year: "2021",
    description: "Completed secondary school education with strong foundations in mathematics, physics, and science.",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic background and educational qualifications</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto mt-12">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/20 to-transparent md:-translate-x-px" />

          {educationData.map((item, idx) => (
            <motion.div
              key={idx}
              className={`relative flex items-start gap-8 mb-12 ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
            >
              <div className="absolute left-6 md:left-1/2 w-3 h-3 bg-violet-500 rounded-full -translate-x-1.5 mt-8 z-10 shadow-lg shadow-violet-500/50">
                <div className="absolute inset-0 bg-violet-500 rounded-full animate-ping opacity-75" />
              </div>

              <div className="hidden md:block md:w-1/2" />

              <div className="ml-14 md:ml-0 md:w-1/2 glass-card p-6 hover:border-violet-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-violet-600/10 dark:bg-violet-500/10 border border-violet-600/20 dark:border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400">
                    <FaGraduationCap />
                  </div>
                  <span className="text-violet-600 dark:text-violet-400 text-sm font-semibold">{item.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1 font-[Outfit] transition-colors">{item.degree}</h3>
                <p className="text-violet-700/70 dark:text-violet-300/70 text-sm mb-3 transition-colors">{item.institution}</p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}