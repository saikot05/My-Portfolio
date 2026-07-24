"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Database, 
  Zap, 
  Layers, 
  ArrowRight,
  CreditCard,
  Server
} from "lucide-react";

export default function ArchitectureModal({ isOpen, onClose, project }) {
  if (!isOpen) return null;

  const pipeline = [
    {
      title: "1. Client Browser (React 19 & Next.js 16)",
      desc: "Hydrated SSR & SSG page views with glassmorphic UI components, dynamic state, and Framer Motion micro-interactions.",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "2. Vercel Edge Middleware",
      desc: "Route security inspection, JWT bearer authentication validation, rate limiting, and CORS headers.",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-500",
    },
    {
      title: "3. Serverless API Routes (`/api/...`)",
      desc: "App Router serverless function execution with zero cold-start caching and revalidation policies.",
      icon: Server,
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "4. MongoDB Atlas Connection Pool",
      desc: "Mongoose ODM connection caching (`dbConnect()`) targeting cluster data collections with Schema validation.",
      icon: Database,
      color: "from-amber-500 to-orange-500",
    },
    {
      title: "5. Webhooks & External Services",
      desc: "Stripe payment webhooks, Web3Forms email dispatcher, and ImgBB OpenGraph image resolution pipeline.",
      icon: CreditCard,
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl rounded-3xl bg-zinc-950 text-white border border-violet-500/30 shadow-2xl p-6 sm:p-8 backdrop-blur-xl z-10 space-y-6 max-h-[85vh] overflow-y-auto font-sans"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold font-[Outfit] text-white">
                {project?.title || "Project"} — System Architecture
              </h3>
              <p className="text-xs text-zinc-400">
                End-to-end client-edge-database request execution topology
              </p>
            </div>
          </div>

          {/* Visual Topology Diagram Stream */}
          <div className="space-y-4 pt-2">
            {pipeline.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="relative">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4 hover:border-violet-500/40 transition-all">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} text-white shrink-0 shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold font-[Outfit] text-white">
                        {step.title}
                      </h4>
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {idx < pipeline.length - 1 && (
                    <div className="flex justify-center my-1.5 text-violet-400/60">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer Metrics */}
          <div className="p-4 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-violet-300">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Target Latency: <strong>&lt; 50ms</strong> via Serverless Caching</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400 font-mono">
              <Layers className="w-3.5 h-3.5 text-violet-400" />
              <span>Next.js 16 Turbopack • Mongoose 8.1</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
