"use client";

import AnimatedBackground from "@/components/AnimatedBackground";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import ImpactDashboard from "@/components/ImpactDashboard";
import Blog from "@/components/Blog";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <ScrollProgress />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <ImpactDashboard />
        <Blog />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
