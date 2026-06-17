"use client";

import { motion } from "framer-motion";
import { timelineEvents } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  database: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  code: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  server: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  tool: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  building: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  rocket: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  star: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
};

export default function Timeline() {
  return (
    <section id="roadmap" className="py-28 px-4 sm:px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.2em] uppercase">
            Learning Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-5 tracking-tight">
            My Career Journey
          </h2>
          <p className="text-muted max-w-xl mx-auto leading-relaxed">
            From SQL fundamentals to modern analytics engineering — a continuous learning path.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-accent/30 to-primary/40" />

          {timelineEvents.map((event, i) => (
            <motion.div
              key={`${event.year}-${event.title}`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div
                className={`hidden md:block md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-14 md:text-right" : "md:pl-14"
                }`}
              >
                <div className="glass-light rounded-2xl p-7 card-hover">
                  <div className="text-xs text-primary font-bold tracking-wider uppercase mb-2.5">
                    {event.year}{event.month && ` · ${event.month}`}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2.5 tracking-tight">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {event.description}
                  </p>
                  {event.tags && (
                    <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                      {event.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg text-[10px] bg-surface text-foreground/50 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl glass border-2 border-primary/30 flex items-center justify-center text-primary z-10 bg-surface">
                {iconMap[event.icon] || iconMap.star}
              </div>

              <div className="md:hidden ml-16">
                <div className="glass-light rounded-2xl p-6 card-hover">
                  <div className="text-xs text-primary font-bold tracking-wider uppercase mb-2.5">
                    {event.year}{event.month && ` · ${event.month}`}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2.5 tracking-tight">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {event.description}
                  </p>
                  {event.tags && (
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-lg text-[10px] bg-surface text-foreground/50 font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
