"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FaUser, 
  FaEnvelope, 
  FaCalendar, 
  FaMapMarkerAlt, 
  FaFutbol, 
  FaCamera, 
  FaPenNib, 
  FaPlane 
} from "react-icons/fa";

const infoCards = [
  { icon: <FaUser />, label: "Name", value: "Md Saikot Islam" },
  { icon: <FaEnvelope />, label: "Email", value: "saikotislam08@gmail.com" },
  { icon: <FaCalendar />, label: "Date of Birth", value: "5 September 2005" },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Rajshahi, Bangladesh" },
];

const hobbies = [
  {
    icon: <FaFutbol />,
    title: "Cricket & Football",
    description: "Passionate about playing and watching sports. Outdoor games build teamwork, discipline, and quick strategic thinking.",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
  },
  {
    icon: <FaCamera />,
    title: "Photography",
    description: "Capturing candid street moments, landscape aesthetics, and architectural details through the lens.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: <FaPenNib />,
    title: "Tech Blogging",
    description: "Writing tech articles and documentation on software development trends, frontend architecture, and algorithms.",
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: <FaPlane />,
    title: "Travelling & Exploring",
    description: "Exploring new cities, mountains, and heritage places. Traveling refreshes my perspective and ignites creativity.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
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
          <p className="section-subtitle">Get to know me, my background, and what inspires me outside of code</p>
        </motion.div>

        {/* Story & Info Cards */}
        <div className="grid lg:grid-cols-5 gap-10 items-start mb-12">
          <motion.div className="lg:col-span-3 space-y-5" initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4 font-[Outfit] transition-colors">My Programming Journey 🚀</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 transition-colors">
                I am a <span className="text-violet-600 dark:text-violet-400 font-medium">Computer Science and Engineering</span> student at RUET, with a strong passion for technology. My journey started with competitive programming on <span className="text-violet-600 dark:text-violet-400 font-medium">Codeforces</span> and <span className="text-violet-600 dark:text-violet-400 font-medium">CodeChef</span>, building a solid foundation in algorithms, data structures, and logical problem solving.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 transition-colors">
                From there, I ventured into <span className="text-violet-600 dark:text-violet-400 font-medium">web development</span>, mastering HTML, CSS, and JavaScript. I fell in love with building interactive user interfaces and am now creating full-stack solutions with <span className="text-violet-600 dark:text-violet-400 font-medium">React, Next.js, Node.js, and MongoDB</span>.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors">
                I enjoy creating <span className="text-violet-600 dark:text-violet-400 font-medium">clean, responsive, and performant</span> web applications that solve real-world problems. Every project is an opportunity to learn and push my technical boundaries.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4 font-[Outfit] transition-colors">Beyond Coding 🎯</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors">
                I believe a well-rounded life fuels technical creativity. When I step away from my laptop, I love staying active through sports, capturing memorable moments through photography, writing tech insights, and discovering new places.
              </p>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4" initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
            {infoCards.map((card, idx) => (
              <motion.div key={card.label} className="glass-card p-5 flex items-center gap-4 group hover:border-violet-500/40 transition-all" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}>
                <div className="w-12 h-12 rounded-xl bg-violet-600/10 dark:bg-violet-500/10 border border-violet-600/20 dark:border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 text-lg flex-shrink-0 group-hover:scale-110 transition-transform">{card.icon}</div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">{card.label}</p>
                  <p className="text-zinc-900 dark:text-white font-medium mt-0.5 transition-colors">{card.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Hobbies & Interests Grid */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.6 }}>
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white font-[Outfit] mb-6 text-center lg:text-left transition-colors">
            Hobbies & Personal Interests
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hobbies.map((hobby, idx) => (
              <motion.div key={hobby.title} className="glass-card p-6 flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}>
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${hobby.color} border border-white/10 flex items-center justify-center ${hobby.iconColor} text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {hobby.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2 font-[Outfit] transition-colors">{hobby.title}</h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
