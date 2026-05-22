"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const designations = [
  "Aspiring Full Stack Developer",
  "Frontend Enthusiast",
  "Problem Solver",
  "CSE Student at RUET",
];

export default function Hero() {
  const [currentDesignation, setCurrentDesignation] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = designations[currentDesignation];
    let timeout;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, 80);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentDesignation((prev) => (prev + 1) % designations.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentDesignation]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none opacity-50 dark:opacity-100">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="section-container w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div className="flex-1 text-center lg:text-left" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <p className="text-violet-500 dark:text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">Welcome to my portfolio</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[Outfit] text-zinc-900 dark:text-white leading-tight mb-4 transition-colors">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400">Md Saikot Islam</span>
            </h1>
            <div className="h-10 mb-6 flex items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 font-medium transition-colors">{displayText}</span>
              <span className="inline-block w-0.5 h-6 bg-violet-500 ml-1 animate-pulse" />
            </div>
            <p className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 transition-colors">
              I build clean, responsive, and user-friendly web interfaces. Passionate about learning, problem-solving, and creating impactful digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 px-6 py-7 text-lg bg-violet-600 text-white" radius="lg" startContent={<FiDownload className="text-xl" />}>
                  Download Resume
                </Button>
              </a>
              <Button className="border-violet-500/40 text-violet-600 dark:text-violet-300 hover:bg-violet-500/10 font-semibold px-6 py-7 text-lg" variant="bordered" radius="lg" startContent={<FiMail className="text-xl" />} onPress={() => handleScrollTo("contact")}>
                Contact Me
              </Button>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: <FaGithub />, href: "https://github.com/saikot05", label: "GitHub" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/saikot-islam49/", label: "LinkedIn" },
                { icon: <FaFacebook />, href: "https://www.facebook.com/saikot.islam.1466", label: "Facebook" },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-12 h-12 rounded-xl bg-violet-500/5 dark:bg-white/5 border border-violet-500/10 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-violet-500 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300 text-xl">
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div className="flex-shrink-0" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-purple-600/20 rounded-full blur-[60px] scale-110" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-violet-500/30 shadow-2xl shadow-violet-500/20">
                <Image src="/images/profile.jpeg" alt="Md Saikot Islam" fill sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px" className="object-cover" priority />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/20 scale-125 animate-[spin_20s_linear_infinite]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}