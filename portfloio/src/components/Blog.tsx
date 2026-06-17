"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/lib/data";

const categoryColors: Record<string, string> = {
  "Data Engineering": "bg-primary/[0.12] text-primary",
  "Analytics Engineering": "bg-accent/[0.12] text-accent",
  "Data Modeling": "bg-success/[0.12] text-success",
  DevOps: "bg-warning/[0.12] text-warning",
  SQL: "bg-danger/[0.12] text-danger",
};

export default function Blog() {
  return (
    <section id="blog" className="py-28 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Technical Writing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-5 tracking-tight">
            Blog & Insights
          </h2>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            Sharing knowledge about data engineering, analytics, and modern data practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="glass-light rounded-3xl p-7 card-hover group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`px-3 py-1.5 rounded-xl text-[11px] font-bold tracking-wide ${
                    categoryColors[post.category] || "bg-muted/[0.12] text-muted"
                  }`}
                >
                  {post.category}
                </span>
                <span className="text-xs text-muted font-medium">{post.readTime}</span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2 tracking-tight leading-snug">
                {post.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg text-[10px] bg-surface text-foreground/50 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted">{post.date}</span>
              </div>

              {post.status === "draft" && (
                <div className="mt-5 pt-5 border-t border-border/50">
                  <span className="text-xs text-warning font-semibold flex items-center gap-2">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Coming Soon
                  </span>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
