"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal as TerminalIcon, X, CornerDownLeft } from "lucide-react";

export default function Terminal({ externalOpen, setExternalOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "Welcome to Saikot Islam's Interactive Developer CLI Terminal (v1.0.0)" },
    { type: "system", text: "Type 'help' to see all available interactive commands." },
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (externalOpen !== undefined) {
      setIsOpen(externalOpen);
    }
  }, [externalOpen]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [history, isOpen]);

  const handleCommand = (cmdStr) => {
    const rawCmd = cmdStr.trim().toLowerCase();
    if (!rawCmd) return;

    // Record in command history
    setCommandHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);

    // Echo input
    const newLogs = [...history, { type: "user", text: `$ ${cmdStr}` }];

    switch (rawCmd) {
      case "help":
        newLogs.push({
          type: "output",
          text: `Available CLI Commands:
  help             - Show this interactive help menu
  about            - Display developer background & bio
  skills           - List full-stack technology stack
  projects         - Show live architectural project names
  contact          - Get direct email, phone & location
  download-resume  - Trigger PDF resume download
  sudo             - Run as root superuser
  matrix font      - Enter retro binary matrix mode
  whoami           - Show visitor authentication status
  clear            - Clear terminal logs buffer`,
        });
        break;

      case "about":
        newLogs.push({
          type: "output",
          text: `Md Saikot Islam — Full Stack Web Developer & CSE Student at RUET.
Passionate about building scalable MERN & Next.js 16 applications, clean UI/UX engineering, algorithms, and cloud APIs.`,
        });
        break;

      case "skills":
        newLogs.push({
          type: "output",
          text: `Tech Stack Breakdown:
  [Languages]  JavaScript (ES6+), TypeScript, C, C++, Python
  [Frontend]   React 19, Next.js 16, Tailwind CSS v4, HeroUI, DaisyUI
  [Backend]    Node.js, Express.js, REST APIs, BetterAuth, JWT
  [Database]   MongoDB Atlas, Mongoose ODM
  [Tools]      Git, GitHub, Vercel, Netlify, VS Code`,
        });
        break;

      case "projects":
        newLogs.push({
          type: "output",
          text: `Featured Architectural Works:
  1. AuraNex       - Healthcare Appointment & Management Platform
  2. GreenPulse AI - Enterprise ESG Audit & Decarbonization Platform
  3. FundVerse     - Crowdfunding & Supporter Platform
  4. DriveFleet    - Enterprise Vehicle Reservation Platform
  5. SunCart       - Seasonal E-Commerce Store`,
        });
        break;

      case "contact":
        newLogs.push({
          type: "output",
          text: `Direct Contact Channels:
  Email:    saikotislam08@gmail.com
  Phone:    +880 1733176698
  Location: Rajshahi, Bangladesh
  GitHub:   https://github.com/saikot05
  LinkedIn: https://www.linkedin.com/in/saikot-islam49/`,
        });
        break;

      case "download-resume":
        newLogs.push({
          type: "output",
          text: "Downloading Md_Saikot_Islam_Resume.pdf...",
        });
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Md_Saikot_Islam_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        break;

      case "sudo":
        newLogs.push({
          type: "error",
          text: "Nice try! Permission denied 😎 (Root access is reserved for Saikot).",
        });
        break;

      case "matrix":
        newLogs.push({
          type: "system",
          text: `01001101 01100100 00100000 01010011 01100001 01101001 01101011 01101111 01100100
[+] Entering the Matrix...
Wake up, Neo... The matrix has you.
Follow the white rabbit. 🐇
System status: ONLINE | Node.js 16 | React 19 | RUET CSE`,
        });
        break;

      case "whoami":
        newLogs.push({
          type: "output",
          text: `User: Tech Recruiter / Guest Visitor\nStatus: Authorized\nSession: Interactive Next.js 16 Terminal`,
        });
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        newLogs.push({
          type: "error",
          text: `Command not recognized: '${rawCmd}'. Type 'help' for available commands.`,
        });
        break;
    }

    setHistory(newLogs);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInput(commandHistory[nextIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(nextIndex);
          setInput(commandHistory[nextIndex]);
        }
      }
    }
  };

  const closeTerminal = () => {
    setIsOpen(false);
    if (setExternalOpen) setExternalOpen(false);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-violet-600 hover:bg-violet-700 text-white shadow-xl shadow-violet-500/30 flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
        title="Open Developer Terminal"
      >
        <TerminalIcon className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeTerminal}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* Terminal Window Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl h-[480px] rounded-2xl bg-zinc-950 text-zinc-100 border border-zinc-800 shadow-2xl overflow-hidden flex flex-col font-mono z-10"
            >
              {/* Header Bar */}
              <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={closeTerminal} />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-zinc-400 font-semibold ml-2 flex items-center gap-1.5">
                    <TerminalIcon className="w-3.5 h-3.5 text-violet-400" />
                    <span>saikot@ruet-portfolio:~</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <button onClick={closeTerminal} className="hover:text-white cursor-pointer">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Terminal Screen Body */}
              <div className="flex-1 p-4 overflow-y-auto space-y-2 text-xs sm:text-sm">
                {history.map((log, i) => (
                  <div key={i} className="leading-relaxed">
                    {log.type === "system" && (
                      <span className="text-emerald-400 font-semibold">{log.text}</span>
                    )}
                    {log.type === "user" && (
                      <span className="text-violet-400 font-bold">{log.text}</span>
                    )}
                    {log.type === "output" && (
                      <pre className="text-zinc-300 whitespace-pre-wrap font-mono mt-1 leading-relaxed">
                        {log.text}
                      </pre>
                    )}
                    {log.type === "error" && (
                      <span className="text-rose-400 font-medium">{log.text}</span>
                    )}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Input Command Line */}
              <div className="p-3 bg-zinc-900/90 border-t border-zinc-800 flex items-center gap-2 text-xs sm:text-sm">
                <span className="text-emerald-400 font-bold">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type 'help', 'skills', 'matrix', or 'sudo'..."
                  className="flex-1 bg-transparent text-white focus:outline-none placeholder-zinc-600 font-mono"
                />
                <button
                  onClick={() => handleCommand(input)}
                  className="px-2.5 py-1 rounded bg-violet-600 hover:bg-violet-700 text-white text-xs font-sans flex items-center gap-1 cursor-pointer"
                >
                  <span>Exec</span>
                  <CornerDownLeft className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
