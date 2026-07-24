"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquarePlus, 
  X, 
  Send, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Sparkles,
  Building2
} from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    role: "",
    institution: "",
    message: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: "1",
      name: "Dr. A. K. M. Moniruzzaman",
      role: "Professor & Academic Mentor",
      institution: "Dept. of Computer Science & Engineering, RUET",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      quote: "Saikot demonstrates exceptional analytical skills in algorithm design and full stack engineering. His dedication to software engineering principles and clean code architecture is truly outstanding.",
      linkedin: "https://www.linkedin.com/in/saikot-islam49/",
    },
    {
      id: "2",
      name: "Tanvir Ahmed",
      role: "Senior Lead Engineer",
      institution: "Full Stack Software Collaborator",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "Working with Saikot on AuraNex was a seamless experience. His mastery over Next.js 16 serverless routes, state management, and Stripe payment integration is top tier.",
      linkedin: "https://www.linkedin.com/in/saikot-islam49/",
    },
    {
      id: "3",
      name: "Farhan Kabir",
      role: "Open Source Contributor",
      institution: "RUET CSE Engineering Peer",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      quote: "Saikot's problem solving speed on Codeforces and LeetCode translates directly into ultra-clean, production-ready code. A brilliant engineer with a great work ethic.",
      linkedin: "https://www.linkedin.com/in/saikot-islam49/",
    },
  ];

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleSubmitEndorsement = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "0a522395-6c9f-495b-94e8-c8b7bf8699ce",
          subject: `New Endorsement Submission from ${formData.name}`,
          from_name: formData.name,
          message: `Role: ${formData.role}\nInstitution: ${formData.institution}\nEndorsement: ${formData.message}`,
        }),
      });

      if (res.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", role: "", institution: "", message: "" });
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitSuccess(false);
        }, 2000);
      }
    } catch (err) {
      console.error("Endorsement submit error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic & Peer Endorsements</span>
          </div>
          <h2 className="section-title">Testimonials & Recommendations</h2>
          <p className="section-subtitle">
            Feedback from university professors, engineering peers, and software project collaborators.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 sm:p-12 rounded-3xl border border-zinc-200/50 dark:border-white/10 relative shadow-2xl space-y-6"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-violet-500/30 absolute top-6 right-8 pointer-events-none" />

              {/* Quote Text */}
              <p className="text-zinc-700 dark:text-zinc-200 text-base sm:text-xl font-medium leading-relaxed italic relative z-10 font-[Outfit]">
                &quot;{activeTestimonial.quote}&quot;
              </p>

              {/* Author Profile */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-zinc-200/40 dark:border-white/10">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-violet-500/40 shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white font-[Outfit]">
                      {activeTestimonial.name}
                    </h4>
                    <p className="text-xs text-violet-600 dark:text-violet-400 font-semibold">
                      {activeTestimonial.role}
                    </p>
                    <p className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5">
                      <Building2 className="w-3 h-3 text-zinc-400" />
                      <span>{activeTestimonial.institution}</span>
                    </p>
                  </div>
                </div>

                <a
                  href={activeTestimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-300 border border-violet-500/20 hover:bg-violet-500/20 transition-all flex items-center gap-2 text-xs font-semibold"
                >
                  <FaLinkedin className="w-4 h-4 text-violet-500" />
                  <span>Verify Profile</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls & Pagination Dots */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? "w-8 bg-violet-600" : "w-2.5 bg-zinc-300 dark:bg-zinc-700"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full glass-card border border-zinc-200/50 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:text-violet-500 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full glass-card border border-zinc-200/50 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:text-violet-500 transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Submit Endorsement Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-violet-500/20 hover:scale-105 transition-all cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Submit an Endorsement</span>
          </button>
        </div>
      </div>

      {/* Submit Endorsement Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl bg-zinc-900/95 text-white border border-white/10 shadow-2xl p-6 sm:p-8 backdrop-blur-xl z-10 space-y-6"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-violet-600/20 text-violet-400 border border-violet-500/30">
                  <MessageSquarePlus className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-[Outfit] text-white">Submit Endorsement</h3>
                  <p className="text-xs text-zinc-400">Share your recommendation or feedback</p>
                </div>
              </div>

              {submitSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white font-[Outfit]">Endorsement Submitted!</h4>
                  <p className="text-xs text-zinc-300">Thank you for your feedback. It has been delivered successfully.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmitEndorsement} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Prof. Dr. Rahman"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-sm bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                        Role / Title *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lead Engineer"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                        Institution / Company
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. RUET"
                        value={formData.institution}
                        onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl text-sm bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
                      Recommendation / Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your recommendation or peer feedback..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl text-sm bg-white/5 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? "Submitting..." : "Send Endorsement"}</span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
