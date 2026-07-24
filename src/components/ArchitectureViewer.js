"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Cpu, Globe, ShieldCheck, Database, ArrowRight, CheckCircle2, Layers } from "lucide-react";

export default function ArchitectureViewer() {
  const [selectedNode, setSelectedNode] = useState("client");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nodes = [
    {
      id: "client",
      title: "Client Browser Layer",
      subtitle: "React 19 & Tailwind CSS v4",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      details: {
        description: "Optimized client-side rendering with automatic hydration, glassmorphic UI components, and Framer Motion micro-animations.",
        techStack: ["Next.js 16 Client Components", "React 19 Hooks", "Tailwind CSS v4", "HeroUI"],
        role: "Handles user interaction, real-time search filtering, theme toggling, and client state management.",
      },
    },
    {
      id: "edge",
      title: "Next.js SSR & API Layer",
      subtitle: "Serverless Route Handlers",
      icon: Cpu,
      color: "from-violet-500 to-purple-500",
      details: {
        description: "Serverless App Router API endpoints (`/api/projects`) executing with zero cold-start caching via `dbConnect()` connection pooling.",
        techStack: ["Next.js 16 App Router", "Server Components", "revalidate: 0", "force-dynamic"],
        role: "Serves static HTML fragments, executes API routes, and manages OpenGraph metadata resolution for dynamic ImgBB images.",
      },
    },
    {
      id: "auth",
      title: "Security & Middleware",
      icon: ShieldCheck,
      subtitle: "JWT & Web3Forms Integration",
      color: "from-emerald-500 to-teal-500",
      details: {
        description: "Role-based route authorization, JWT bearer token verification, CORS security headers, and Web3Forms email validation.",
        techStack: ["JWT Bearer Security", "CORS Middleware", "Web3Forms API Key", "Rate Limiting"],
        role: "Guards internal data routes, sanitizes user inputs, and handles secure form submissions.",
      },
    },
    {
      id: "db",
      title: "MongoDB Atlas Database",
      subtitle: "Mongoose Connection Pooling",
      icon: Database,
      color: "from-amber-500 to-orange-500",
      details: {
        description: "Cloud MongoDB Atlas database cluster (`portfolio_db`) configured with Mongoose ODM models targeting collection `projects`.",
        techStack: ["MongoDB Atlas Cloud", "Mongoose 8.1.0", "Schema.Types.Mixed", "Global Connection Cache"],
        role: "Stores project documents, metrics, architecture specs, and live portfolio content reliably.",
      },
    },
  ];

  const activeNodeData = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <section id="architecture" className="relative py-20 overflow-hidden">
      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-700 dark:text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Full Stack System Design</span>
          </div>
          <h2 className="section-title">Interactive System Architecture</h2>
          <p className="section-subtitle">
            Click any node in the architecture diagram to inspect the data lifecycle, protocols, and technical specifications.
          </p>
        </motion.div>

        {/* Interactive Diagram Pipeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isSelected = node.id === selectedNode;
            return (
              <div key={node.id} className="relative">
                <button
                  onClick={() => setSelectedNode(node.id)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-zinc-900 text-white border-2 border-violet-500 shadow-xl shadow-violet-500/25 scale-105"
                      : "bg-white dark:bg-white/5 text-zinc-900 dark:text-zinc-100 border-zinc-200 dark:border-white/10 hover:border-violet-500/50 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${node.color} text-white flex items-center justify-center mb-3 shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${isSelected ? "text-violet-400" : "text-violet-600 dark:text-violet-400"}`}>
                    Step 0{index + 1}
                  </span>
                  <h4 className="text-base font-bold font-[Outfit] mt-0.5 mb-1 text-zinc-900 dark:text-white">
                    {node.title}
                  </h4>
                  <p className={`text-xs ${isSelected ? "text-zinc-400" : "text-zinc-600 dark:text-zinc-400"}`}>
                    {node.subtitle}
                  </p>
                </button>

                {/* Arrow Connector for Desktop */}
                {index < nodes.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-violet-600 text-white items-center justify-center text-xs shadow-md">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Selected Node Details Box */}
        <motion.div
          key={activeNodeData.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-6 sm:p-8 rounded-3xl border border-violet-500/30 bg-zinc-950 text-white shadow-2xl space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${activeNodeData.color} text-white`}>
              <activeNodeData.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-[Outfit] text-white">{activeNodeData.title}</h3>
              <p className="text-xs text-violet-400 font-mono">{activeNodeData.subtitle}</p>
            </div>
          </div>

          <p className="text-zinc-200 text-sm sm:text-base leading-relaxed">
            {activeNodeData.details.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="text-xs font-mono uppercase font-bold text-violet-300 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Primary Responsibilities</span>
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {activeNodeData.details.role}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="text-xs font-mono uppercase font-bold text-violet-300 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>Key Tech & Libraries</span>
              </h4>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeNodeData.details.techStack.map((tech) => (
                  <span key={tech} className="text-xs px-2.5 py-1 rounded-lg bg-violet-500/20 text-violet-300 border border-violet-500/30 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
