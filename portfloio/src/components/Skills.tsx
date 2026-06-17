"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { skillCategories } from "@/lib/data";

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-foreground/80 font-medium">{name}</span>
        <span className="text-xs text-muted font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-surface rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: "linear-gradient(90deg, #6366f1, #818cf8, #22d3ee)",
          }}
        >
          <div
            className="absolute inset-0 animate-shimmer"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
              backgroundSize: "200% 100%",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);

  return (
    <section id="skills" className="py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Skills & Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-5 tracking-tight">
            Technical Proficiency
          </h2>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            A comprehensive skill set spanning the modern data stack.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {skillCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.name
                  ? "btn-primary text-white shadow-lg shadow-primary/20"
                  : "glass-light text-muted hover:text-foreground hover:border-primary/20"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories
            .filter((cat) => cat.name === activeCategory)
            .map((cat) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="glass-light rounded-3xl p-8 sm:p-10"
              >
                <h3 className="text-lg font-bold mb-8 text-foreground tracking-tight">
                  {cat.name}
                </h3>
                <div className="space-y-6">
                  {cat.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
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
          <h3 className="text-lg font-bold mb-8 text-foreground text-center tracking-tight">
            Full Technology Ecosystem
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "SQL Server", "T-SQL", "dbt", "Python", "Docker", "Git",
              "GitHub Actions", "Power BI", "Tableau", "Linux", "Airflow",
              "Kafka", "Spark", "Databricks", "AWS", "Azure", "GCP",
              "PostgreSQL", "MongoDB", "VS Code", "Jupyter", "Pandas",
              "NumPy", "Airbyte", "MinIO",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.3 }}
                className="px-4 py-2 rounded-xl bg-surface text-sm text-foreground/60 hover:text-primary hover:bg-primary/[0.08] transition-all duration-300 cursor-default font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
