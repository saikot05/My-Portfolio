"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Copy, Check, Sparkles } from "lucide-react";

export default function CodeSnippetShowcase() {
  const [activeTab, setActiveTab] = useState("dbConnect");
  const [copied, setCopied] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const snippets = {
    dbConnect: {
      title: "dbConnect.js",
      language: "JavaScript (Serverless Mongoose Pool)",
      description: "Prevents duplicate database connection leaks during Next.js hot module reloads and serverless function executions.",
      code: `import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
let cached = global.mongoose || { conn: null, promise: null };

export default async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((m) => m);
  }

  cached.conn = await cached.promise;
  global.mongoose = cached;
  return cached.conn;
}`,
    },
    imageResolver: {
      title: "imageResolver.js",
      language: "JavaScript (ImgBB OpenGraph Extractor)",
      description: "Automatically resolves HTML viewer page links into direct raw image file binaries on the fly.",
      code: `export async function resolveDirectImageUrl(url) {
  if (!url || typeof url !== "string") return url;
  
  if (url.includes("ibb.co") && !url.includes("i.ibb.co")) {
    try {
      const res = await fetch(url, { cache: "force-cache" });
      if (res.ok) {
        const html = await res.text();
        const match = html.match(/og:image"\\s+content="([^"]+)"/i);
        if (match && match[1]) return match[1];
      }
    } catch (e) {
      console.warn("Failed to resolve ImgBB link:", url);
    }
  }
  return url;
}`,
    },
    projectModel: {
      title: "Project.js",
      language: "JavaScript (Mongoose Dynamic Schema)",
      description: "Flexible Mongoose document model supporting categorized tech stack objects and custom key-value metrics.",
      code: `import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    projectId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    tagline: String,
    category: String,
    featured: Boolean,
    metrics: mongoose.Schema.Types.Mixed,
    thumbnail: String,
    techStack: mongoose.Schema.Types.Mixed,
    highlights: [String],
    links: { live: String, clientRepo: String, serverRepo: String }
  },
  { collection: "projects", timestamps: true }
);

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);`,
    },
  };

  const currentSnippet = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="craftsmanship" className="relative py-20 overflow-hidden">
      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-700 dark:text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Craftsmanship & Clean Code</span>
          </div>
          <h2 className="section-title">Production Code Showcase</h2>
          <p className="section-subtitle">
            Inspect clean production-grade utilities written for serverless database connection pooling, image resolution, and Mongoose modeling.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-2.5 mb-6 flex-wrap">
          {Object.keys(snippets).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === key
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25 scale-105"
                  : "bg-white dark:bg-white/5 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-white/10 hover:border-violet-500/40 shadow-sm"
              }`}
            >
              {snippets[key].title}
            </button>
          ))}
        </div>

        {/* IDE Code Editor Box (Strictly Dark IDE styling in both modes) */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-2xl overflow-hidden max-w-4xl mx-auto font-mono"
        >
          {/* Editor Header Bar */}
          <div className="px-5 py-3.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-violet-400 font-bold ml-2">{currentSnippet.title}</span>
              <span className="text-[11px] text-zinc-400">({currentSnippet.language})</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 text-xs text-zinc-300 hover:text-white px-2.5 py-1 rounded-lg bg-white/10 border border-white/10 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Copied!" : "Copy"}</span>
            </button>
          </div>

          {/* Architecture Note Banner */}
          <div className="px-6 py-3 bg-zinc-900 border-b border-zinc-800 text-xs text-zinc-200 font-sans">
            💡 <span className="font-bold text-violet-300">Architecture Note:</span> {currentSnippet.description}
          </div>

          {/* Code Area */}
          <div className="p-6 overflow-x-auto text-xs sm:text-sm text-zinc-200 leading-relaxed font-mono">
            <pre>
              <code>{currentSnippet.code}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
