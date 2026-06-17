"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navItems.map((item) => item.href.replace("#", ""));
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

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-border/30 shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <motion.a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-lg font-bold gradient-text tracking-tight"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              RK
            </motion.a>

            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className={`px-4 py-2 text-sm rounded-xl transition-all duration-300 font-medium ${
                    activeSection === item.href.replace("#", "")
                      ? "text-primary bg-primary/[0.08]"
                      : "text-muted hover:text-foreground hover:bg-surface-light/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://github.com/Ritik574-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors p-2.5 rounded-xl hover:bg-surface-light/50"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ritik-kumar-b81b32375/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors p-2.5 rounded-xl hover:bg-surface-light/50"
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                className="px-5 py-2.5 text-sm font-semibold btn-primary text-white rounded-xl"
              >
                Contact
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-muted hover:text-foreground p-2.5 rounded-xl hover:bg-surface-light/50 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-72 glass border-l border-border/30 p-7 pt-20"
            >
              <div className="flex flex-col gap-1.5">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => scrollTo(item.href)}
                    className="text-left px-4 py-3.5 text-lg rounded-xl transition-all hover:bg-surface-light/50 text-muted hover:text-foreground font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="mt-5 pt-5 border-t border-border/50">
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
                    className="block w-full text-center px-4 py-3.5 btn-primary text-white rounded-xl font-bold text-sm"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
