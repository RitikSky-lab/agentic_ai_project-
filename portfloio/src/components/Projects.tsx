"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "@/lib/data";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  const displayed = showAll ? filtered : filtered.slice(0, 3);

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Featured Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-5 tracking-tight">
            Data Engineering Portfolio
          </h2>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            Real-world projects demonstrating analytics engineering,
            data warehousing, and modern data stack implementation.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {["All", ...allTags.slice(0, 8)].map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                activeFilter === tag
                  ? "btn-primary text-white shadow-lg shadow-primary/20"
                  : "glass-light text-muted hover:text-foreground hover:border-primary/20"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="glass-light rounded-3xl overflow-hidden card-hover group flex flex-col"
            >
              <div className="h-52 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.12] via-surface to-accent/[0.08]" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/[0.08] rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/[0.06] rounded-full blur-2xl" />
                <div className="relative z-10 h-full p-7 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-primary/[0.15] text-primary tracking-wide uppercase">
                        Featured
                      </span>
                    )}
                    <span
                      className={`px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide uppercase ${
                        project.status === "completed"
                          ? "bg-success/[0.12] text-success"
                          : project.status === "in-progress"
                          ? "bg-warning/[0.12] text-warning"
                          : "bg-muted/[0.12] text-muted"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted mt-1">{project.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="p-7 flex-1 flex flex-col">
                <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {project.metrics && (
                  <div className="grid grid-cols-3 gap-2.5 mb-5">
                    {project.metrics.slice(0, 3).map((m) => (
                      <div
                        key={m.label}
                        className="text-center p-3 rounded-xl bg-surface/80"
                      >
                        <div className="text-sm font-bold text-foreground tracking-tight">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-muted mt-0.5 font-medium">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[11px] bg-surface text-foreground/50 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2.5 py-1 rounded-lg text-[11px] bg-surface text-muted font-medium">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex gap-4 pt-4 border-t border-border/50">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs text-muted hover:text-primary transition-colors font-medium"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                  {project.docsUrl && (
                    <a
                      href={project.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-muted hover:text-primary transition-colors font-medium"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Documentation
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length > 3 && !showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-14"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3.5 glass-light rounded-2xl text-sm font-semibold text-muted hover:text-foreground hover:border-primary/20 transition-all duration-300"
            >
              View All Projects ({filtered.length})
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
