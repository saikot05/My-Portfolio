"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { FiDownload, FiMail } from "react-icons/fi";

const designations = [
  "Full Stack Web Developer (MERN & Next.js)",
  "CSE Undergraduate at RUET",
  "Frontend & UI/UX Craftsman",
  "Backend & API Architect",
  "Competitive Problem Solver",
];

const RESUME_STATIC_URL = "/resume.pdf";

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
      }, 70);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length - 1));
      }, 35);
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

  const handleDownloadResume = (e) => {
    // Guaranteed client-side download trigger
    e.preventDefault();
    const link = document.createElement("a");
    link.href = RESUME_STATIC_URL;
    link.download = "Md_Saikot_Islam_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden transition-colors duration-300 py-16 sm:py-0">
      {/* Background Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-50 dark:opacity-100">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-[110px]" />
      </div>

      <div className="section-container w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Hero Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left" 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-violet-500 dark:text-violet-400 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[Outfit] text-zinc-900 dark:text-white leading-tight mb-4 transition-colors">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-300">Md Saikot Islam</span>
            </h1>

            {/* Typewriter Header */}
            <div className="h-12 mb-6 flex items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-xl lg:text-2xl text-zinc-700 dark:text-zinc-300 font-semibold transition-colors font-[Outfit]">
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-6 sm:h-7 bg-violet-500 ml-1.5 animate-pulse rounded-full" />
            </div>

            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9 transition-colors">
              I build clean, responsive, and user-friendly web applications. Passionate about learning, problem-solving, and creating impactful digital experiences.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href={RESUME_STATIC_URL}
                download="Md_Saikot_Islam_Resume.pdf"
                onClick={handleDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 px-8 py-4 text-base sm:text-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FiDownload className="text-xl" />
                <span>Download Resume</span>
              </a>

              <Button
                className="w-full sm:w-auto border-violet-500/40 text-violet-600 dark:text-violet-300 hover:bg-violet-500/10 font-semibold px-8 py-7 text-base sm:text-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
                variant="bordered"
                radius="lg"
                startContent={<FiMail className="text-xl" />}
                onPress={() => handleScrollTo("contact")}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>

          {/* Right Profile Badge */}
          <motion.div 
            className="flex-shrink-0" 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-purple-600/20 rounded-full blur-[60px] scale-110" />
              
              {/* Profile Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-violet-500/30 shadow-2xl shadow-violet-500/20">
                <Image 
                  src="/images/profile.jpeg" 
                  alt="Md Saikot Islam" 
                  fill 
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px" 
                  className="object-cover hover:scale-105 transition-transform duration-500" 
                  priority 
                />
              </div>

              {/* Rotating outer accent dashed border */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-violet-500/20 scale-125 animate-[spin_20s_linear_infinite] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}