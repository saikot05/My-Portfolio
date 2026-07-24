"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/saikot05", label: "GitHub" },
  { icon: <FaLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/saikot-islam49/", label: "LinkedIn" },
  { icon: <FaXTwitter className="w-5 h-5" />, href: "https://x.com/saikot05", label: "Twitter / X" },
  { icon: <FaFacebook className="w-5 h-5" />, href: "https://www.facebook.com/saikot.islam.1466", label: "Facebook" },
];

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!apiKey) {
      setStatus({
        loading: false,
        success: false,
        message: "API Key environment variable (NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) is missing!",
      });
      return;
    }

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
          message: "Thank you! Your message has been sent successfully.",
        });
        e.target.reset();
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent font-[Outfit]">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-white/10 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200/20 dark:border-gray-800/50 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 font-[Outfit]">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a
                      href="mailto:saikotislam08@gmail.com"
                      className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors font-medium"
                    >
                      saikotislam08@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-xl">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone / WhatsApp</p>
                    <a
                      href="https://wa.me/8801733176698"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-gray-200 hover:text-indigo-500 transition-colors font-medium"
                    >
                      +880 1733176698
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      Rajshahi, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-200/20 dark:border-gray-800/50">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">Find me on social media:</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-11 h-11 rounded-xl bg-gray-500/10 dark:bg-white/5 border border-gray-500/20 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-500 hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all duration-300"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 rounded-2xl bg-white/10 dark:bg-gray-900/40 backdrop-blur-md border border-gray-200/20 dark:border-gray-800/50 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.loading}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-indigo-500/25 transition-all disabled:opacity-50 cursor-pointer"
              >
                {status.loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status.message && (
                <div
                  className={`flex items-center space-x-2 text-sm p-3 rounded-lg ${
                    status.success
                      ? "bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20"
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
