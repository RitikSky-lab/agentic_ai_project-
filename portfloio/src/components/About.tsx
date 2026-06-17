"use client";

import { motion } from "framer-motion";

const strengths = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: "SQL-First Mindset",
    desc: "Deep expertise in SQL Server, T-SQL, and complex query optimization. Great data engineering starts with great SQL.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Data Quality Obsessed",
    desc: "Automated testing, validation rules, and data quality frameworks that catch issues before they reach dashboards.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "CI/CD Automation",
    desc: "GitHub Actions pipelines that automatically test, lint, and deploy data transformations with confidence.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Continuous Learning",
    desc: "Always exploring new tools, patterns, and best practices in the rapidly evolving data engineering landscape.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-5 tracking-tight">
            My Data Engineering Journey
          </h2>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            Passionate about building reliable, scalable data systems that
            drive real business decisions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <div className="glass-light rounded-3xl p-8 sm:p-10">
              <h3 className="text-xl font-bold mb-6 text-foreground tracking-tight">The Story</h3>
              <div className="space-y-5 text-muted leading-[1.8]">
                <p>
                  My journey into data engineering started with a curiosity about how
                  organizations turn raw data into actionable insights. What began as
                  learning SQL fundamentals evolved into a deep passion for building
                  modern data platforms.
                </p>
                <p>
                  I specialize in <span className="text-foreground font-semibold">analytics engineering</span> —
                  the bridge between raw data and business intelligence. Using tools like{" "}
                  <span className="text-foreground font-semibold">dbt</span>,{" "}
                  <span className="text-foreground font-semibold">SQL Server</span>, and{" "}
                  <span className="text-foreground font-semibold">dimensional modeling</span>,
                  I build data transformations that are tested, documented, and reliable.
                </p>
                <p>
                  My approach follows the{" "}
                  <span className="text-foreground font-semibold">Medallion Architecture</span>{" "}
                  pattern — Bronze for raw ingestion, Silver for cleansing and standardization,
                  and Gold for analytics-ready datasets. Every layer is designed with data
                  quality and traceability in mind.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="space-y-4"
          >
            {strengths.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="glass-light rounded-2xl p-6 flex gap-5 card-hover group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/[0.08] flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/[0.14] group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1.5 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
