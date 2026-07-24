"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaHeart } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiArrowUpRight, FiMail } from "react-icons/fi";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/saikot05", label: "GitHub", handle: "@saikot05" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/saikot-islam49/", label: "LinkedIn", handle: "saikot-islam49" },
  { icon: <FaXTwitter />, href: "https://x.com/saikot05", label: "Twitter / X", handle: "@saikot05" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/saikot.islam.1466", label: "Facebook", handle: "saikot.islam" },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-violet-500/10 transition-colors duration-300">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/" className="text-2xl font-bold font-[Outfit] tracking-tight inline-block mb-4">
              <span className="text-violet-500 dark:text-violet-400">Sai</span>
              <span className="text-zinc-900 dark:text-white transition-colors">kot</span>
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4 transition-colors">
              Aspiring Full Stack Developer passionate about building clean, responsive, and user-friendly web applications with modern tech stacks.
            </p>
            <a 
              href="mailto:saikotislam08@gmail.com" 
              className="inline-flex items-center gap-2 text-xs font-medium text-violet-600 dark:text-violet-400 hover:underline"
            >
              <FiMail /> saikotislam08@gmail.com
            </a>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold mb-4 font-[Outfit] transition-colors">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleNavClick(e, link.href)} 
                    className="text-zinc-500 dark:text-zinc-400 text-sm hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer inline-flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-xs" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Social Profiles */}
          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold mb-4 font-[Outfit] transition-colors">Connect With Me</h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs mb-4">
              Follow my work, tech articles, and project updates across these platforms:
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.label} profile`}
                  title={`${social.label} (${social.handle})`}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-violet-500/5 dark:bg-white/5 border border-violet-500/10 dark:border-white/10 flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300 text-lg shadow-sm"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-200 dark:border-white/5 pt-6 text-center">
          <p className="text-zinc-500 text-sm flex items-center justify-center gap-1.5 transition-colors">
            © {new Date().getFullYear()} Md Saikot Islam. Built with <FaHeart className="text-violet-500 text-xs" /> using Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
