"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FiArrowRight } from "react-icons/fi";
import projects from "@/data/projects";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-violet-600/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">A showcase of my best work — each project represents learning, creativity, and problem-solving</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div key={project.id} className="glass-card overflow-hidden group" initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 + idx * 0.15 }}>
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#09090b] via-transparent to-transparent transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2 font-[Outfit] transition-colors">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2 transition-colors">{project.shortDesc}</p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-xs px-3 py-1 rounded-full bg-violet-600/10 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-600/20 dark:border-violet-500/20 transition-colors">{tech}</span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-xs px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 text-zinc-500 transition-colors">+{project.techStack.length - 4}</span>
                  )}
                </div>

                <Link href={`/projects/${project.id}`}>
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold shadow-lg shadow-violet-500/20 hover:scale-[1.02] transition-all" radius="lg" endContent={<FiArrowRight />}>
                    View Details
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
