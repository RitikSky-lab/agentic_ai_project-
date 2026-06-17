"use client";

import { motion } from "framer-motion";
import { certifications } from "@/lib/data";

const statusConfig = {
  earned: { label: "Earned", color: "bg-success/[0.12] text-success", icon: "✓" },
  "in-progress": { label: "In Progress", color: "bg-warning/[0.12] text-warning", icon: "↻" },
  planned: { label: "Planned", color: "bg-muted/[0.12] text-muted", icon: "○" },
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-5 tracking-tight">
            Professional Credentials
          </h2>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            Continuously earning certifications to validate and expand my expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => {
            const status = statusConfig[cert.status];
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="glass-light rounded-3xl p-7 card-hover group"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/[0.12] to-accent/[0.08] flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <span className={`px-3 py-1.5 rounded-xl text-[11px] font-bold tracking-wide ${status.color}`}>
                    {status.icon} {status.label}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2.5 tracking-tight">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-muted mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {cert.issuer}
                </div>

                <div className="flex items-center gap-2 text-xs text-muted">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {cert.date}
                  <span className="mx-1">·</span>
                  <span className="px-2 py-0.5 rounded-lg bg-surface text-foreground/50 font-medium">
                    {cert.category}
                  </span>
                </div>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-xs text-primary hover:text-primary-light transition-colors font-semibold"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Verify Credential
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
