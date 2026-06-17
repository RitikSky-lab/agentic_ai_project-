"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 pt-16 pb-10 px-4 sm:px-6 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-14">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold gradient-text mb-4 tracking-tight">
                Ritik Kumar
              </h3>
              <p className="text-sm text-muted leading-relaxed max-w-sm">
                Analytics Engineer building modern data platforms through
                dbt, dimensional modeling, and data quality frameworks.
              </p>
            </motion.div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-5 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["About", "Skills", "Projects", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-foreground mb-5 tracking-tight">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/Ritik574-coder" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-primary transition-colors duration-200">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/ritik-kumar-b81b32375/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-primary transition-colors duration-200">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://discord.gg/gqPKwWjKA" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-primary transition-colors duration-200">
                  Discord
                </a>
              </li>
              <li>
                <a href="mailto:ritik.kumar@example.com" className="text-sm text-muted hover:text-primary transition-colors duration-200">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted/70">
            © {currentYear} Ritik Kumar. All rights reserved.
          </p>
          <p className="text-xs text-muted/70">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
