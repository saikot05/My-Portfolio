"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Terminal as TerminalIcon, 
  User, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  FolderGit2, 
  Mail, 
  Download, 
  Sun, 
  Moon, 
  ExternalLink,
  Activity,
  Cpu
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function CommandPalette({ onOpenTerminal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const items = [
    {
      id: "nav-home",
      title: "Go to Home",
      category: "Navigation",
      icon: User,
      action: () => scrollToSection("home"),
    },
    {
      id: "nav-about",
      title: "About & Hobbies",
      category: "Navigation",
      icon: User,
      action: () => scrollToSection("about"),
    },
    {
      id: "nav-skills",
      title: "Technical Skills Matrix",
      category: "Navigation",
      icon: Code2,
      action: () => scrollToSection("skills"),
    },
    {
      id: "nav-education",
      title: "Education Qualifications",
      category: "Navigation",
      icon: GraduationCap,
      action: () => scrollToSection("education"),
    },
    {
      id: "nav-experience",
      title: "Work & Engineering Experience",
      category: "Navigation",
      icon: Briefcase,
      action: () => scrollToSection("experience"),
    },
    {
      id: "nav-stats",
      title: "GitHub & Coding Metrics",
      category: "Navigation",
      icon: Activity,
      action: () => scrollToSection("stats"),
    },
    {
      id: "nav-arch",
      title: "System Architecture Visualizer",
      category: "Navigation",
      icon: Cpu,
      action: () => scrollToSection("architecture"),
    },
    {
      id: "nav-projects",
      title: "Featured Projects Grid",
      category: "Navigation",
      icon: FolderGit2,
      action: () => scrollToSection("projects"),
    },
    {
      id: "nav-contact",
      title: "Contact Me & Send Email",
      category: "Navigation",
      icon: Mail,
      action: () => scrollToSection("contact"),
    },
    {
      id: "action-terminal",
      title: "Open Developer CLI Terminal",
      category: "Actions",
      icon: TerminalIcon,
      action: () => {
        if (onOpenTerminal) onOpenTerminal();
        setIsOpen(false);
      },
    },
    {
      id: "action-resume",
      title: "Download Resume PDF",
      category: "Actions",
      icon: Download,
      action: () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Md_Saikot_Islam_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setIsOpen(false);
      },
    },
    {
      id: "action-theme",
      title: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
      category: "Actions",
      icon: theme === "dark" ? Sun : Moon,
      action: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setIsOpen(false);
      },
    },
    {
      id: "action-github",
      title: "Open GitHub Profile",
      category: "External",
      icon: FaGithub,
      action: () => {
        window.open("https://github.com/saikot05", "_blank");
        setIsOpen(false);
      },
    },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase().trim()) ||
    item.category.toLowerCase().includes(query.toLowerCase().trim())
  );

  const handleKeyDownModal = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  return (
    <>
      {/* Floating Hotkeys Help Pill (Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-zinc-900/80 text-white border border-white/10 text-xs font-medium shadow-xl backdrop-blur-md pointer-events-none select-none">
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-violet-300 font-mono text-[10px]">Ctrl+K</kbd>
          <span className="text-zinc-400">Search</span>
        </span>
        <span className="text-zinc-600 font-bold">•</span>
        <span className="flex items-center gap-1">
          <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-emerald-300 font-mono text-[10px]">&gt;_</kbd>
          <span className="text-zinc-400">CLI Terminal</span>
        </span>
      </div>

      {/* Navbar Keyboard Trigger Badge */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-20 z-40 hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black/60 dark:bg-zinc-800/80 text-white border border-white/10 text-xs font-semibold shadow-lg hover:border-violet-500/50 backdrop-blur-md transition-all cursor-pointer"
        title="Open Command Palette (Ctrl + K)"
      >
        <Search className="w-3.5 h-3.5 text-violet-400" />
        <span>Cmd</span>
        <kbd className="px-1.5 py-0.5 rounded bg-white/20 text-[10px] font-mono">⌘K</kbd>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Command Palette Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="relative w-full max-w-xl rounded-2xl bg-zinc-900/95 text-white border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl z-10"
              onKeyDown={handleKeyDownModal}
            >
              {/* Search Bar Input */}
              <div className="flex items-center px-4 border-b border-white/10">
                <Search className="w-5 h-5 text-violet-400 shrink-0 mr-3" />
                <input
                  type="text"
                  placeholder="Type a command or search section..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  autoFocus
                  className="w-full py-4 bg-transparent text-white text-base placeholder-zinc-500 focus:outline-none"
                />
                <kbd className="px-2 py-1 rounded bg-white/10 text-zinc-400 text-xs font-mono">ESC</kbd>
              </div>

              {/* Items List */}
              <div className="max-h-80 overflow-y-auto p-2 space-y-1">
                {filteredItems.length === 0 ? (
                  <div className="p-8 text-center text-zinc-500 text-sm">
                    No matching commands found for &quot;{query}&quot;
                  </div>
                ) : (
                  filteredItems.map((item, index) => {
                    const Icon = item.icon;
                    const isSelected = index === selectedIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm transition-all text-left cursor-pointer ${
                          isSelected
                            ? "bg-violet-600 text-white shadow-md shadow-violet-500/20"
                            : "text-zinc-300 hover:bg-white/5"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={`w-4 h-4 ${isSelected ? "text-white" : "text-violet-400"}`} />
                          <span className="font-medium">{item.title}</span>
                        </div>
                        <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                          isSelected ? "bg-white/20 text-white" : "bg-white/5 text-zinc-400"
                        }`}>
                          {item.category}
                        </span>
                      </button>
                    );
                  })
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-4 py-2.5 bg-zinc-950/60 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>Use <kbd className="px-1 rounded bg-white/10">↑</kbd> <kbd className="px-1 rounded bg-white/10">↓</kbd> to navigate</span>
                <span>Press <kbd className="px-1 rounded bg-white/10">↵</kbd> to select</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
