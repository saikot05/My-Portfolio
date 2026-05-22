"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaHeart } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/saikot05", label: "GitHub" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/saikot-islam49/", label: "LinkedIn" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/saikot.islam.1466", label: "Facebook" },
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
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold font-[Outfit] tracking-tight inline-block mb-4">
              <span className="text-violet-500 dark:text-violet-400">Sai</span>
              <span className="text-zinc-900 dark:text-white transition-colors">kot</span>
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed transition-colors">Aspiring Full Stack Developer passionate about building clean, responsive, and user-friendly web applications.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold mb-4 font-[Outfit] transition-colors">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-zinc-500 dark:text-zinc-400 text-sm hover:text-violet-600 dark:hover:text-violet-400 transition-colors cursor-pointer">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold mb-4 font-[Outfit] transition-colors">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-10 h-10 rounded-xl bg-violet-500/5 dark:bg-white/5 border border-violet-500/10 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-violet-600 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300">
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-zinc-500 text-sm">saikotislam08@gmail.com</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-200 dark:border-white/5 pt-6 text-center">
          <p className="text-zinc-500 text-sm flex items-center justify-center gap-1 transition-colors">
            © {new Date().getFullYear()} Md Saikot Islam. Made with <FaHeart className="text-violet-500 text-xs" /> All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
