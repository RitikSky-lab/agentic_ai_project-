"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: "", email: "", subject: "", message: "" });
  };

  const socialLinks = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "ritik.kumar@example.com",
      href: "mailto:ritik.kumar@example.com",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "Ritik Kumar",
      href: "https://www.linkedin.com/in/ritik-kumar-b81b32375/",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      value: "@Ritik574-coder",
      href: "https://github.com/Ritik574-coder",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
        </svg>
      ),
      label: "Discord",
      value: "Join Server",
      href: "https://discord.gg/gqPKwWjKA",
    },
  ];

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-5 tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            Have a project in mind, want to collaborate, or just want to say hello?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-2 space-y-5"
          >
            <div className="glass-light rounded-3xl p-7">
              <h3 className="text-lg font-bold text-foreground mb-5 tracking-tight">
                Contact Information
              </h3>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 text-muted hover:text-primary transition-colors group p-3 rounded-xl hover:bg-primary/[0.04]"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.14] group-hover:scale-110 transition-all duration-300">
                      {link.icon}
                    </div>
                    <div>
                      <div className="text-[11px] text-muted font-medium tracking-wide uppercase">{link.label}</div>
                      <div className="text-sm font-medium">{link.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-light rounded-3xl p-7">
              <h3 className="text-sm font-bold text-foreground mb-4 tracking-tight">
                Quick Actions
              </h3>
              <div className="space-y-2.5">
                <a
                  href="https://calendar.app.google/placeholder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface hover:bg-surface-light transition-colors text-sm text-muted hover:text-foreground font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book a Meeting
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface hover:bg-surface-light transition-colors text-sm text-muted hover:text-foreground font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-light rounded-3xl p-8 sm:p-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2.5">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none text-foreground placeholder-muted/60 text-sm transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2.5">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none text-foreground placeholder-muted/60 text-sm transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2.5">Subject</label>
                <input
                  type="text"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none text-foreground placeholder-muted/60 text-sm transition-all"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2.5">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3.5 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary/30 outline-none text-foreground placeholder-muted/60 text-sm transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 btn-primary rounded-xl font-bold text-white text-sm tracking-wide"
              >
                {submitted ? "✓ Message Sent!" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
