"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { FiDownload, FiMail, FiEye } from "react-icons/fi";
import { Sparkles } from "lucide-react";
import ResumeModal from "./ResumeModal";

const RESUME_STATIC_URL = "/resume.pdf";

const designations = [
  "Full Stack Web Developer (MERN & Next.js)",
  "CSE Undergraduate at RUET",
  "Frontend & UI/UX Craftsman",
  "Backend & API Architect",
  "Competitive Problem Solver",
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const currentFullText = designations[index];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        if (displayText === currentFullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % designations.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index]);

  const handleDownloadResume = (e) => {
    try {
      const link = document.createElement("a");
      link.href = RESUME_STATIC_URL;
      link.setAttribute("download", "Md_Saikot_Islam_Resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Resume download trigger error:", err);
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for Hire & Engineering Roles</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-4 font-[Outfit] transition-colors leading-[1.1]">
              Hi, I&apos;m <span className="gradient-text">Md Saikot Islam</span>
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
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start items-center">
              <button
                onClick={() => setIsResumeModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 px-6 py-3.5 text-sm sm:text-base bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FiEye className="text-lg" />
                <span>Preview Resume</span>
              </button>

              <a
                href={RESUME_STATIC_URL}
                download="Md_Saikot_Islam_Resume.pdf"
                onClick={handleDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-semibold border border-violet-500/40 text-violet-600 dark:text-violet-300 hover:bg-violet-500/10 px-6 py-3.5 text-sm sm:text-base rounded-xl cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <FiDownload className="text-lg" />
                <span>Download PDF</span>
              </a>

              <Button
                className="w-full sm:w-auto border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5 font-semibold px-6 py-6 text-sm sm:text-base cursor-pointer"
                variant="bordered"
                radius="lg"
                onPress={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                startContent={<FiMail className="text-lg" />}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Profile Image with Rotating Gradient Glow */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-600 to-purple-400 blur-2xl opacity-40 animate-pulse" />
              <div className="absolute -inset-3 rounded-full border-2 border-dashed border-violet-500/30 animate-[spin_20s_linear_infinite]" />

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 dark:border-white/10 shadow-2xl">
                <Image
                  src="/images/profile.jpeg"
                  alt="Md Saikot Islam"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Glassmorphic Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </section>
  );
}