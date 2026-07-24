"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiCheckCircle, 
  FiAlertCircle, 
  FiCopy, 
  FiCheck,
  FiMessageSquare,
  FiClock
} from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Sparkles } from "lucide-react";

const socialLinks = [
  { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/saikot05", label: "GitHub" },
  { icon: <FaLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/saikot-islam49/", label: "LinkedIn" },
  { icon: <FaXTwitter className="w-5 h-5" />, href: "https://x.com/saikot05", label: "Twitter / X" },
  { icon: <FaFacebook className="w-5 h-5" />, href: "https://www.facebook.com/saikot.islam.1466", label: "Facebook" },
];

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });
  const [copied, setCopied] = useState(false);
  const [messageLength, setMessageLength] = useState(0);

  const emailAddress = "saikotislam08@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "0a522395-6c9f-495b-94e8-c8b7bf8699ce";
    const formData = new FormData(e.target);
    formData.append("access_key", apiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({
          loading: false,
          success: true,
          message: "Thank you! Your message has been sent successfully to Saikot.",
        });
        e.target.reset();
        setMessageLength(0);
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      setStatus({
        loading: false,
        success: false,
        message: "Failed to send message. Please check your network connection.",
      });
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden transition-colors duration-300">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Messaging & Inquiries</span>
          </div>
          <h2 className="section-title">Let&apos;s Build Something Great</h2>
          <p className="section-subtitle">
            Have a software engineering opportunity, architectural proposal, or project inquiry? Feel free to reach out directly!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column: Contact Cards & Availability Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Glassmorphic Contact Box */}
            <div className="glass-card p-8 rounded-3xl border border-violet-500/20 shadow-2xl space-y-6">
              {/* Availability Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>Available for Hire & Full Stack Roles</span>
              </div>

              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white font-[Outfit]">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Email Card with 1-Click Copy */}
                <div className="p-4 rounded-2xl bg-violet-500/5 border border-violet-500/10 flex items-center justify-between group hover:border-violet-500/30 transition-all">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-3 bg-violet-500/10 text-violet-600 dark:text-violet-400 rounded-xl shrink-0">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Direct Email</p>
                      <a
                        href={`mailto:${emailAddress}`}
                        className="text-zinc-900 dark:text-zinc-100 font-semibold hover:text-violet-500 transition-colors text-sm sm:text-base"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer shrink-0"
                    title="Copy Email Address"
                  >
                    {copied ? <FiCheck className="w-4 h-4 text-emerald-400" /> : <FiCopy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone / WhatsApp Card */}
                <div className="p-4 rounded-2xl bg-violet-500/5 border border-violet-500/10 flex items-center justify-between group hover:border-violet-500/30 transition-all">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0">
                      <FiPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-500 font-medium">Phone / WhatsApp</p>
                      <a
                        href="https://wa.me/8801733176698"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-900 dark:text-zinc-100 font-semibold hover:text-emerald-500 transition-colors text-sm sm:text-base"
                      >
                        +880 1733176698
                      </a>
                    </div>
                  </div>

                  <a
                    href="https://wa.me/8801733176698"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all shrink-0"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                  </a>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-2xl bg-violet-500/5 border border-violet-500/10 flex items-center space-x-3.5">
                  <div className="p-3 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-xl shrink-0">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-medium">Location & Timezone</p>
                    <p className="text-zinc-900 dark:text-zinc-100 font-semibold text-sm sm:text-base flex items-center gap-2">
                      <span>Rajshahi, Bangladesh</span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20">
                        GMT+6
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Action Connect Pills */}
              <div className="pt-2">
                <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-3">
                  Quick Actions
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://wa.me/8801733176698"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <FaWhatsapp className="w-3.5 h-3.5" />
                    <span>WhatsApp Chat</span>
                  </a>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="px-3.5 py-2 rounded-xl bg-violet-500/10 hover:bg-violet-500/20 text-violet-600 dark:text-violet-400 border border-violet-500/20 text-xs font-semibold flex items-center gap-1.5 transition-all"
                  >
                    <FiMail className="w-3.5 h-3.5" />
                    <span>Send Mail</span>
                  </a>
                  <div className="px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-white/5 text-zinc-600 dark:text-zinc-400 border border-zinc-200/50 dark:border-white/10 text-xs font-semibold flex items-center gap-1.5">
                    <FiClock className="w-3.5 h-3.5 text-violet-400" />
                    <span>Rajshahi, BD</span>
                  </div>
                </div>
              </div>

              {/* Social Links Hub */}
              <div className="pt-4 border-t border-zinc-200/40 dark:border-white/10">
                <p className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mb-3">
                  Social Profiles
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-11 h-11 rounded-xl bg-violet-500/10 text-zinc-700 dark:text-zinc-300 border border-violet-500/20 hover:text-violet-500 hover:border-violet-500/40 hover:bg-violet-500/20 flex items-center justify-center transition-all duration-300 hover:scale-105"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: High-Conversion Form UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl border border-violet-500/20 shadow-2xl space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white font-[Outfit]">
                Send a Message
              </h3>
              <FiMessageSquare className="w-5 h-5 text-violet-400" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-2">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Alex Mercer"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. alex@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider mb-2">
                  Subject / Requirement
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Full Stack Role / Project Proposal"
                  className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all text-sm font-medium"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Message Details *
                  </label>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {messageLength} / 500
                  </span>
                </div>
                <textarea
                  name="message"
                  required
                  rows="4"
                  maxLength={500}
                  onChange={(e) => setMessageLength(e.target.value.length)}
                  placeholder="Tell me about your project, timeline, or engineering opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-white/60 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all text-sm font-medium resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold flex items-center justify-center space-x-2 shadow-lg shadow-violet-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer"
              >
                {status.loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message to Saikot</span>
                    <FiSend className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Status Toast Alert */}
              {status.message && (
                <div
                  className={`flex items-center space-x-2 text-sm p-4 rounded-xl font-medium ${
                    status.success
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                      : "bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20"
                  }`}
                >
                  {status.success ? (
                    <FiCheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <FiAlertCircle className="w-5 h-5 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
