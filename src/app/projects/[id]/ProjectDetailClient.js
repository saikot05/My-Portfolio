"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { FiArrowLeft, FiExternalLink, FiGithub } from "react-icons/fi";
import { FaExclamationTriangle, FaRocket } from "react-icons/fa";

// Helper function to extract flat list of tech stack strings regardless of array or object schema
const extractTechStack = (techStack) => {
  if (!techStack) return [];
  if (Array.isArray(techStack)) return techStack;
  if (typeof techStack === "object") {
    return Object.values(techStack).flatMap((val) =>
      Array.isArray(val) ? val : [String(val)]
    );
  }
  return [String(techStack)];
};

export default function ProjectDetailClient({ project }) {
  const imageUrl = project?.image || project?.thumbnail || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80";
  const liveUrl = project?.liveLink || project?.links?.live || "";
  const repoUrl = project?.githubLink || project?.links?.clientRepo || "";
  const challengesList = project?.challenges || project?.highlights || [];
  const improvementsList = project?.improvements || [];
  const techPills = extractTechStack(project?.techStack);

  return (
    <div className="min-h-screen pt-24 pb-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
          <Link href="/#projects" className="inline-flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors mb-8 text-sm font-medium">
            <FiArrowLeft /> Back to Projects
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 border border-zinc-200 dark:border-white/10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Image src={imageUrl} alt={project?.title || "Project preview"} fill unoptimized sizes="(max-width: 768px) 100vw, 800px" className="object-cover scale-110 transition-transform duration-500" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-[#09090b]/80 via-transparent to-transparent transition-colors duration-300" />
        </motion.div>

        {/* Title & Tech */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white font-[Outfit] mb-4 transition-colors">{project?.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {techPills.map((tech) => (
              <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-violet-600/10 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-600/20 dark:border-violet-500/20 font-medium transition-colors">{tech}</span>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div className="flex flex-wrap gap-4 mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold shadow-lg shadow-violet-500/25" radius="lg" startContent={<FiExternalLink />}>Live Demo</Button>
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              <Button className="border-violet-500/40 text-violet-600 dark:text-violet-300 hover:bg-violet-500/10 font-semibold" variant="bordered" radius="lg" startContent={<FiGithub />}>GitHub Repo</Button>
            </a>
          )}
        </motion.div>

        {/* Description */}
        <motion.div className="glass-card p-8 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4 font-[Outfit] transition-colors">About This Project</h2>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed transition-colors">{project?.description || project?.tagline || project?.shortDesc}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Challenges */}
          {challengesList.length > 0 && (
            <motion.div className="glass-card p-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400"><FaExclamationTriangle /></div>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white font-[Outfit] transition-colors">Engineering Highlights & Challenges</h2>
              </div>
              <ul className="space-y-3">
                {challengesList.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Improvements */}
          {improvementsList.length > 0 && (
            <motion.div className="glass-card p-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400"><FaRocket /></div>
                <h2 className="text-lg font-semibold text-zinc-900 dark:text-white font-[Outfit] transition-colors">Future Improvements</h2>
              </div>
              <ul className="space-y-3">
                {improvementsList.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
