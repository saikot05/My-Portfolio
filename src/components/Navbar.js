"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!mounted) return null;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-xl border-b border-violet-500/10 shadow-lg shadow-violet-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-[Outfit] tracking-tight shrink-0">
          <span className="text-violet-500">Sai</span>
          <span className="text-zinc-900 dark:text-white transition-colors">kot</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-sm font-medium transition-colors duration-300 hover:text-violet-500 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-violet-500"
                      : "text-zinc-500 dark:text-zinc-400"
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.replace("#", "") && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-violet-500 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme Toggle & CTA */}
          <div className="flex items-center gap-4 ml-4">
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="p-2.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400 hover:bg-violet-500/20 transition-all text-xl"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              <Button
                className="bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300"
                radius="lg"
                size="sm"
              >
                Hire Me
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Actions (Right Side) */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-violet-500/10 text-violet-600 dark:text-violet-400 text-xl"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="text-zinc-900 dark:text-white text-3xl p-1 rounded-lg hover:bg-violet-500/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-white dark:bg-[#09090b] backdrop-blur-2xl transition-all duration-400 ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
        style={{ zIndex: 100 }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 dark:border-white/5">
          <Link href="/" className="text-2xl font-bold font-[Outfit] tracking-tight">
            <span className="text-violet-500">Sai</span>
            <span className="text-zinc-900 dark:text-white">kot</span>
          </Link>
          <button
            className="text-zinc-900 dark:text-white text-3xl p-1 rounded-lg hover:bg-violet-500/10 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <HiX />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-8 mt-16 px-6">
          {navLinks.map((link, idx) => (
            <li
              key={link.name}
              className={`w-full text-center transform transition-all duration-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-2xl font-semibold transition-colors duration-300 hover:text-violet-500 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-violet-500"
                    : "text-zinc-800 dark:text-zinc-300"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className={`w-full mt-4 transform transition-all duration-300 delay-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="block">
              <Button
                className="w-full bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold shadow-lg shadow-violet-500/25 py-7 text-xl"
                radius="xl"
              >
                Hire Me
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
