"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Button } from "@heroui/react";
import { 
  Search, 
  ExternalLink, 
  Code, 
  Sparkles, 
  X, 
  Zap, 
  Users, 
  Activity, 
  CheckCircle2,
  ArrowRight,
  Layers
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import ProjectsSkeleton from "./ProjectsSkeleton";
import ApiInspector from "./ApiInspector";
import ArchitectureModal from "./ArchitectureModal";

// Helper function to normalize techStack regardless of string array or object schema
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

// Component for rendering individual project card with 100% full-width flush image layout
function ProjectCard({ project, idx, onOpenModal }) {
  const defaultImage = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80";
  const initialUrl = project.thumbnail || project.image || defaultImage;
  const [imgSrc, setImgSrc] = useState(initialUrl);

  useEffect(() => {
    setImgSrc(project.thumbnail || project.image || defaultImage);
  }, [project]);

  const techPills = extractTechStack(project.techStack);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className={`glass-card overflow-hidden group rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 p-0 ${
        project.featured
          ? "border-2 border-violet-500/40 shadow-xl shadow-violet-500/10"
          : "border border-zinc-200/50 dark:border-white/10"
      }`}
    >
      <div>
        {/* Full-Width 16:9 Edge-to-Edge Image Header */}
        <div className="relative h-52 w-full overflow-hidden rounded-t-2xl m-0 p-0">
          <Image
            src={imgSrc}
            alt={project.title || "Project preview"}
            fill
            unoptimized
            onError={() => setImgSrc(defaultImage)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover scale-110 group-hover:scale-115 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/20 to-transparent" />
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white text-[10px] font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Featured</span>
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-violet-300 text-xs font-semibold border border-white/10">
            {project.category || "Full Stack"}
          </div>
        </div>

        {/* Isolated Content Body Padding */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 font-[Outfit] transition-colors group-hover:text-violet-500">
            {project.title}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2 transition-colors">
            {project.tagline || project.shortDesc}
          </p>

          {/* Dynamic Key Metrics Chips */}
          {project.metrics && typeof project.metrics === "object" && (
            <div className="flex flex-wrap gap-2 mb-4">
              {Object.entries(project.metrics).map(([key, val]) => {
                if (!val) return null;
                return (
                  <span
                    key={key}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/20 font-medium flex items-center gap-1 capitalize"
                  >
                    <Zap className="w-3 h-3 text-violet-400 shrink-0" />
                    <span className="truncate max-w-[150px]">{key}: {String(val)}</span>
                  </span>
                );
              })}
            </div>
          )}

          {/* Structured Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {techPills.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2.5 py-1 rounded-md bg-violet-600/10 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-600/20 dark:border-violet-500/20 font-medium"
              >
                {tech}
              </span>
            ))}
            {techPills.length > 4 && (
              <span className="text-xs px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-white/5 text-zinc-500 font-medium">
                +{techPills.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Buttons Bar with Isolated Padding */}
      <div className="px-6 pb-6 pt-0 space-y-3">
        <div className="flex gap-2">
          {(project.links?.live || project.liveLink) && (
            <a
              href={project.links?.live || project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
          {(project.links?.clientRepo || project.githubLink) && (
            <a
              href={project.links?.clientRepo || project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Client Code Repository"
              className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:text-violet-500 transition-colors flex items-center justify-center"
            >
              <FaGithub className="w-4 h-4" />
            </a>
          )}
          {project.links?.serverRepo && project.links?.serverRepo !== (project.links?.clientRepo || project.githubLink) && (
            <a
              href={project.links.serverRepo}
              target="_blank"
              rel="noopener noreferrer"
              title="Server API Repository"
              className="p-2 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:text-purple-500 transition-colors flex items-center justify-center"
            >
              <Code className="w-4 h-4" />
            </a>
          )}
        </div>

        <Button
          onPress={() => onOpenModal(project)}
          className="w-full border-violet-500/30 text-violet-600 dark:text-violet-300 hover:bg-violet-500/10 font-semibold"
          variant="bordered"
          radius="lg"
          endContent={<ArrowRight className="w-4 h-4" />}
        >
          View Details
        </Button>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filtering & Search states
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Modal state
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [archModalOpen, setArchModalOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch("/api/projects", { cache: "no-store" });
        const json = await res.json();

        if (json.success && Array.isArray(json.data)) {
          setProjects(json.data);
        } else {
          throw new Error(json.error || "Failed to load projects from database");
        }
      } catch (err) {
        console.error("Failed to load projects API:", err);
        setError("Unable to load dynamic projects from MongoDB.");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  // Compute unique categories dynamically from projects list
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean)))];

  // Filter projects by category and real-time search query
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    
    const query = searchQuery.toLowerCase().trim();
    const techPills = extractTechStack(project.techStack);
    const matchesSearch =
      !query ||
      project.title?.toLowerCase().includes(query) ||
      project.tagline?.toLowerCase().includes(query) ||
      project.shortDesc?.toLowerCase().includes(query) ||
      techPills.some((tech) => String(tech).toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="relative overflow-hidden transition-colors duration-300 py-20">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="section-title">Architectural Projects</h2>
          <p className="section-subtitle">
            Explore my end-to-end full stack web applications, AI integrations, microservices, and modern UI engineering works.
          </p>
        </motion.div>

        {/* Filter Controls & Search Bar */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/25 scale-105"
                    : "bg-violet-500/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-violet-500/10 dark:border-white/10 hover:border-violet-500/30 hover:text-violet-600 dark:hover:text-violet-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Search projects or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-sm bg-white/60 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Content Render: Loading Skeletons vs Projects Grid */}
        {loading ? (
          <ProjectsSkeleton />
        ) : filteredProjects.length === 0 ? (
          <div className="glass-card p-12 text-center max-w-lg mx-auto">
            <Layers className="w-12 h-12 mx-auto text-violet-500/60 mb-3" />
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 font-[Outfit]">No Projects Found</h3>
            <p className="text-zinc-500 text-sm mb-4">No projects matched your current search query or category filter.</p>
            <Button
              onPress={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="bg-violet-600 text-white font-semibold"
              radius="lg"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project._id || project.projectId || idx}
                project={project}
                idx={idx}
                onOpenModal={setActiveModalProject}
              />
            ))}
          </div>
        )}
      </div>

      {/* Expandable Glassmorphic Project Detail Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Modal Box with Flush Edge-to-Edge Header Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1, y: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-900/95 text-white border border-white/10 shadow-2xl backdrop-blur-xl z-10 p-0 space-y-0"
            >
              {/* Close Button Overlay */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/20 transition-all z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Flush Full-Width Modal Image Header */}
              <div className="relative h-60 sm:h-72 w-full m-0 p-0 overflow-hidden rounded-t-3xl">
                <Image
                  src={activeModalProject.thumbnail || activeModalProject.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"}
                  alt={activeModalProject.title}
                  fill
                  unoptimized
                  className="object-cover scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 rounded-md bg-violet-600/80 backdrop-blur-md text-xs font-semibold text-white uppercase tracking-wider mb-2 inline-block">
                    {activeModalProject.category || "Full Stack"}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-[Outfit] text-white">
                    {activeModalProject.title}
                  </h2>
                </div>
              </div>

              {/* Isolated Modal Body Content Padding */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Tagline */}
                <p className="text-zinc-300 text-base leading-relaxed">
                  {activeModalProject.tagline || activeModalProject.description || activeModalProject.shortDesc}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {(activeModalProject.links?.live || activeModalProject.liveLink) && (
                    <a
                      href={activeModalProject.links?.live || activeModalProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-violet-500/25 hover:scale-105 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Preview</span>
                    </a>
                  )}
                  {(activeModalProject.links?.clientRepo || activeModalProject.githubLink) && (
                    <a
                      href={activeModalProject.links?.clientRepo || activeModalProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold text-sm flex items-center gap-2 transition-all"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Client Code</span>
                    </a>
                  )}
                  {activeModalProject.links?.serverRepo && activeModalProject.links?.serverRepo !== (activeModalProject.links?.clientRepo || activeModalProject.githubLink) && (
                    <a
                      href={activeModalProject.links.serverRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold text-sm flex items-center gap-2 transition-all"
                    >
                      <Code className="w-4 h-4" />
                      <span>Server API Code</span>
                    </a>
                  )}
                  <button
                    onClick={() => setArchModalOpen(true)}
                    className="px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-violet-500/20"
                  >
                    <Layers className="w-4 h-4" />
                    <span>View System Architecture</span>
                  </button>
                </div>

                {/* Dynamic Key Metrics Breakdown */}
                {activeModalProject.metrics && typeof activeModalProject.metrics === "object" && (
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                    <h4 className="text-lg font-bold text-white font-[Outfit] flex items-center gap-2">
                      <Zap className="w-5 h-5 text-violet-400" />
                      <span>Architecture & System Metrics</span>
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {Object.entries(activeModalProject.metrics).map(([key, val]) => {
                        if (!val) return null;
                        return (
                          <div key={key} className="p-3 rounded-xl bg-white/5 border border-white/5">
                            <p className="text-[11px] text-zinc-400 capitalize font-medium">{key}</p>
                            <p className="text-sm font-semibold text-violet-300 mt-0.5">{String(val)}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Key Architecture Highlights */}
                {(activeModalProject.highlights || activeModalProject.challenges) && (
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                    <h4 className="text-lg font-bold text-white font-[Outfit] flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span>Key Engineering Highlights</span>
                    </h4>
                    <ul className="space-y-2 text-sm text-zinc-300">
                      {(activeModalProject.highlights || activeModalProject.challenges || []).map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* API Live Inspector */}
                <ApiInspector />

                {/* Full Tech Stack Pills */}
                <div>
                  <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                    Complete Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {extractTechStack(activeModalProject.techStack).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-violet-500/20 text-violet-300 border border-violet-500/30 text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* System Architecture Flow Modal */}
      <ArchitectureModal
        isOpen={archModalOpen}
        onClose={() => setArchModalOpen(false)}
        project={activeModalProject}
      />
    </section>
  );
}
