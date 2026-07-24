"use client";

import { motion } from "framer-motion";

export default function Spinner({ size = "md", text = "Loading..." }) {
  const sizeClasses = {
    sm: "w-8 h-8 border-2",
    md: "w-12 h-12 border-3",
    lg: "w-16 h-16 border-4",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <div className="relative flex items-center justify-center">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-xl animate-pulse" />
        
        {/* Outer spinning gradient ring */}
        <motion.div
          className={`${sizeClasses[size] || sizeClasses.md} rounded-full border-t-violet-600 border-r-purple-500 border-b-violet-400/30 border-l-transparent`}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>

      {text && (
        <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium tracking-wide font-[Outfit] animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}
