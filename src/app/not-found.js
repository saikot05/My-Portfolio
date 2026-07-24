"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@heroui/react";
import { FiCompass, FiHome, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 transition-colors duration-300">
      {/* Background ambient light orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-50 dark:opacity-100">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-lg w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass-card p-10 sm:p-12 border border-zinc-200/50 dark:border-white/10 shadow-2xl"
        >
          {/* Floating Glowing Icon */}
          <motion.div 
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-600/20 to-purple-500/20 border border-violet-500/30 flex items-center justify-center text-violet-600 dark:text-violet-400 text-4xl shadow-lg shadow-violet-500/20"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <FiCompass />
          </motion.div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white font-[Outfit] tracking-tight mb-3 transition-colors">
            404
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold text-zinc-800 dark:text-zinc-200 font-[Outfit] mb-4 transition-colors">
            Page Not Found
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed mb-8 transition-colors">
            Oops! The page you are looking for doesn&apos;t exist, was removed, or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                className="w-full sm:w-auto bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold shadow-lg shadow-violet-500/25 hover:scale-[1.02] px-6 py-6 text-base cursor-pointer transition-all"
                radius="lg"
                startContent={<FiHome className="text-lg" />}
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
