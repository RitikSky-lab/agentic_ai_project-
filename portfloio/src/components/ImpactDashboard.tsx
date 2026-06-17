"use client";

import { motion } from "framer-motion";

export default function ImpactDashboard() {
  const impactCards = [
    {
      title: "Data Quality Score",
      value: "98%",
      description: "Average data quality across all projects",
      trend: "+2%",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-success/20 to-success/5",
    },
    {
      title: "Test Coverage",
      value: "100%",
      description: "dbt model test coverage achieved",
      trend: "Complete",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      gradient: "from-primary/20 to-primary/5",
    },
    {
      title: "Pipeline Uptime",
      value: "99.9%",
      description: "Reliability of data transformation pipelines",
      trend: "Stable",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-accent/20 to-accent/5",
    },
    {
      title: "Documentation",
      value: "Full",
      description: "Complete documentation for all models",
      trend: "Comprehensive",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gradient: "from-warning/20 to-warning/5",
    },
  ];

  return (
    <section id="impact" className="py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Impact Dashboard
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-5 tracking-tight">
            Quality & Performance
          </h2>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            Measurable outcomes from building production-grade data systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {impactCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="glass-light rounded-3xl p-7 card-hover group"
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-foreground mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {card.icon}
              </div>
              <div className="text-3xl font-bold text-foreground mb-1 tracking-tight">
                {card.value}
              </div>
              <div className="text-sm font-semibold text-foreground/70 mb-1">
                {card.title}
              </div>
              <div className="text-xs text-muted mb-3 leading-relaxed">
                {card.description}
              </div>
              <div className="text-xs text-success font-semibold">
                {card.trend}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 glass-light rounded-3xl p-8 sm:p-10"
        >
          <h3 className="text-lg font-bold mb-8 text-foreground tracking-tight">
            Architecture Gallery
          </h3>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Medallion Architecture",
                desc: "Bronze → Silver → Gold layer pipeline with data quality gates at each stage.",
                tags: ["Data Quality", "Layered Architecture"],
              },
              {
                title: "Star Schema Design",
                desc: "Dimensional modeling with fact and dimension tables optimized for analytical queries.",
                tags: ["Kimball", "Dimensional Modeling"],
              },
              {
                title: "CI/CD Pipeline",
                desc: "Automated testing, linting, and deployment with GitHub Actions for dbt projects.",
                tags: ["GitHub Actions", "Automation"],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-surface/60 hover:bg-surface transition-colors duration-300"
              >
                <div className="w-full h-36 rounded-xl bg-gradient-to-br from-primary/[0.08] to-accent/[0.06] mb-5 flex items-center justify-center">
                  <svg className="w-14 h-14 text-primary/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.8} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-foreground text-sm mb-1.5 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-muted mb-3 leading-relaxed">{item.desc}</p>
                <div className="flex gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg text-[10px] bg-surface text-foreground/50 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
