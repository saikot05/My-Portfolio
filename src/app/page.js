"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import StatsSection from "@/components/StatsSection";
import ArchitectureViewer from "@/components/ArchitectureViewer";
import CodeSnippetShowcase from "@/components/CodeSnippetShowcase";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CommandPalette from "@/components/CommandPalette";
import Terminal from "@/components/Terminal";

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <StatsSection />
        <ArchitectureViewer />
        <CodeSnippetShowcase />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* Floating Developer CLI Terminal & Ctrl+K Command Palette */}
      <CommandPalette onOpenTerminal={() => setTerminalOpen(true)} />
      <Terminal externalOpen={terminalOpen} setExternalOpen={setTerminalOpen} />
    </>
  );
}
