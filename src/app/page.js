"use client";

import { useState } from "react";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import ArchitectureViewer from "@/components/ArchitectureViewer";
import CodeSnippetShowcase from "@/components/CodeSnippetShowcase";
import StatsSection from "@/components/StatsSection";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import Terminal from "@/components/Terminal";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <ArchitectureViewer />
        <CodeSnippetShowcase />
        <StatsSection />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {/* Floating Developer CLI Terminal & Ctrl+K Command Palette */}
      <CommandPalette onOpenTerminal={() => setTerminalOpen(true)} />
      <Terminal externalOpen={terminalOpen} setExternalOpen={setTerminalOpen} />
    </>
  );
}
