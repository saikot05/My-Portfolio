"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaUser, FaEnvelope, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const infoCards = [
  { icon: <FaUser />, label: "Name", value: "Md Saikot Islam" },
  { icon: <FaEnvelope />, label: "Email", value: "saikotislam08@gmail.com" },
  { icon: <FaCalendar />, label: "Date of Birth", value: "5 September 2005" },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Rajshahi, Bangladesh" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me, my journey, and what drives me</p>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div className="lg:col-span-3 space-y-5" initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4 font-[Outfit] transition-colors">My Programming Journey 🚀</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 transition-colors">
                I am a <span className="text-violet-600 dark:text-violet-400 font-medium">Computer Science and Engineering</span> student at RUET, with a strong passion for technology. My journey started with competitive programming on <span className="text-violet-600 dark:text-violet-400 font-medium">Codeforces</span> and <span className="text-violet-600 dark:text-violet-400 font-medium">CodeChef</span>, building a strong foundation in algorithms and logical thinking.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 transition-colors">
                From there, I ventured into <span className="text-violet-600 dark:text-violet-400 font-medium">web development</span>, starting with HTML, CSS, and JavaScript. I fell in love with building interactive user interfaces and am now expanding into full-stack development with <span className="text-violet-600 dark:text-violet-400 font-medium">React, Next.js, Node.js, and MongoDB</span>.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors">
                I enjoy creating <span className="text-violet-600 dark:text-violet-400 font-medium">clean, responsive, and user-friendly</span> web applications that solve real problems. Every project is an opportunity to learn and push my boundaries.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4 font-[Outfit] transition-colors">Beyond Coding 🎯</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors">
                When I&apos;m not coding, you&apos;ll find me solving puzzles, exploring new tech trends, or playing cricket and football with friends. I believe a balanced life fuels creativity. I&apos;m also an avid reader who enjoys learning about science and technology.
              </p>
            </div>
          </motion.div>
          <motion.div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4" initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
            {infoCards.map((card, idx) => (
              <motion.div key={card.label} className="glass-card p-5 flex items-center gap-4" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}>
                <div className="w-12 h-12 rounded-xl bg-violet-600/10 dark:bg-violet-500/10 border border-violet-600/20 dark:border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 text-lg flex-shrink-0 transition-colors">{card.icon}</div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">{card.label}</p>
                  <p className="text-zinc-900 dark:text-white font-medium mt-0.5 transition-colors">{card.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
