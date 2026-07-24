"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, ExternalLink, GraduationCap, Briefcase, Code2 } from "lucide-react";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Md_Saikot_Islam_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl h-[85vh] rounded-3xl bg-zinc-900/95 text-white border border-white/10 shadow-2xl overflow-hidden flex flex-col backdrop-blur-xl z-10 p-0"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 bg-zinc-950 border-b border-white/10 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-[Outfit] text-white">Md Saikot Islam — Curriculum Vitae</h3>
                <p className="text-xs text-zinc-400">Full Stack Web Developer & Computer Science Undergraduate (RUET)</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Embedded PDF Iframe Viewer Body */}
          <div className="flex-1 w-full bg-zinc-950 p-2 overflow-hidden">
            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0"
              title="Md Saikot Islam Resume PDF"
              className="w-full h-full rounded-2xl border border-white/5"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
