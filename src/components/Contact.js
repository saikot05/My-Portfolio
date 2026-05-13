"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button, Input, TextArea } from "@heroui/react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const contactInfo = [
  { icon: <FaEnvelope />, label: "Email", value: "saikot08@gmail.com", href: "mailto:saikot08@gmail.com" },
  { icon: <FaPhone />, label: "Phone", value: "+880 1XXX-XXXXXX", href: "tel:+880" },
  { icon: <FaWhatsapp />, label: "WhatsApp", value: "+880 1XXX-XXXXXX", href: "https://wa.me/880" },
  { icon: <FaMapMarkerAlt />, label: "Location", value: "Naogaon, Bangladesh", href: null },
];

const socialLinks = [
  { icon: <FaGithub />, href: "https://github.com/saikot05", label: "GitHub" },
  { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
  { icon: <FaFacebook />, href: "#", label: "Facebook" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Have a question or want to work together? Feel free to reach out!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div className="space-y-5" initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white font-[Outfit] mb-6 transition-colors">Contact Information</h3>
            {contactInfo.map((item, idx) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-4 group cursor-pointer block">
                    <div className="w-12 h-12 rounded-xl bg-violet-600/10 dark:bg-violet-500/10 border border-violet-600/20 dark:border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 text-lg group-hover:bg-violet-600/20 dark:group-hover:bg-violet-500/20 transition-colors">{item.icon}</div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">{item.label}</p>
                      <p className="text-zinc-900 dark:text-white font-medium mt-0.5 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="glass-card p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-600/10 dark:bg-violet-500/10 border border-violet-600/20 dark:border-violet-500/20 flex items-center justify-center text-violet-600 dark:text-violet-400 text-lg transition-colors">{item.icon}</div>
                    <div>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider font-medium">{item.label}</p>
                      <p className="text-zinc-900 dark:text-white font-medium mt-0.5 transition-colors">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-3 transition-colors">Find me on social media:</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="w-11 h-11 rounded-xl bg-violet-500/5 dark:bg-white/5 border border-violet-500/10 dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-zinc-400 hover:text-violet-500 hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-300 text-lg">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }}>
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white font-[Outfit] mb-2 transition-colors">Send Me a Message</h3>
              <Input label="Your Name" placeholder="John Doe" variant="bordered" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} classNames={{ inputWrapper: "border-zinc-200 dark:border-white/10 hover:border-violet-500/40 bg-zinc-50 dark:bg-white/5", label: "text-zinc-500 dark:text-zinc-400", input: "text-zinc-900 dark:text-white" }} required />
              <Input label="Your Email" placeholder="john@example.com" type="email" variant="bordered" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} classNames={{ inputWrapper: "border-zinc-200 dark:border-white/10 hover:border-violet-500/40 bg-zinc-50 dark:bg-white/5", label: "text-zinc-500 dark:text-zinc-400", input: "text-zinc-900 dark:text-white" }} required />
              <TextArea label="Message" placeholder="Write your message here..." variant="bordered" minRows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} classNames={{ inputWrapper: "border-zinc-200 dark:border-white/10 hover:border-violet-500/40 bg-zinc-50 dark:bg-white/5", label: "text-zinc-500 dark:text-zinc-400", input: "text-zinc-900 dark:text-white" }} required />
              <Button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-purple-500 text-white font-semibold shadow-lg shadow-violet-500/25 hover:scale-[1.02] transition-all" radius="lg" size="lg" endContent={<FiSend />}>
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
