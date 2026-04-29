"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { projects } from '../work/projects'

const ease = [0.22, 1, 0.36, 1] as const

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const activeBg = activeIndex !== null ? projects[activeIndex].image : projects[0].image

  return (
    <section id="portfolio" className="relative overflow-hidden bg-black py-32">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease }}
          className="pointer-events-none absolute inset-0 z-0"
        />
      </AnimatePresence>

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 20%, black 90%)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
        >
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-widest text-[var(--primary)]">
              Selected Work
            </p>
            <h3 className="text-4xl font-extrabold leading-tight tracking-tighter text-white lg:text-5xl">
              OUR WORK
            </h3>
          </div>
          <p className="max-w-xs shrink-0 text-sm font-light leading-relaxed text-white/40">
            Every project ships with a measurable outcome attached. We deliver value not just skill.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2">
          {projects.map((project, i) => {
            const isExternal = Boolean(project.externalUrl)
            const projectUrl = project.externalUrl ?? `/work/${project.slug}`

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: i * 0.1, ease }}
                viewport={{ once: true }}
                className="group flex flex-col"
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {isExternal ? (
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block"
                  >
                    <div className="relative overflow-hidden rounded-xl bg-neutral-900 [aspect-ratio:4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading={i === 0 ? 'eager' : 'lazy'}
                      />
                      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <span className="absolute bottom-3.5 left-3.5 z-20 whitespace-nowrap rounded-full border border-white/[0.13] bg-black/80 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-md">
                        {project.badge}
                      </span>
                      <div className="absolute right-3.5 top-3.5 z-20 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 opacity-0 backdrop-blur-sm transition-[opacity,transform,background-color,border-color,color] duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:!border-[var(--primary)] hover:!bg-[var(--primary)] hover:!text-white">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link href={projectUrl} className="relative block">
                    <div className="relative overflow-hidden rounded-xl bg-neutral-900 [aspect-ratio:4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        loading={i === 0 ? 'eager' : 'lazy'}
                      />
                      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <span className="absolute bottom-3.5 left-3.5 z-20 whitespace-nowrap rounded-full border border-white/[0.13] bg-black/80 px-3.5 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-md">
                        {project.badge}
                      </span>
                      <div className="absolute right-3.5 top-3.5 z-20 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 opacity-0 backdrop-blur-sm transition-[opacity,transform,background-color,border-color,color] duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:!border-[var(--primary)] hover:!bg-[var(--primary)] hover:!text-white">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                )}

                <div className="mt-5 flex flex-1 flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    {isExternal ? (
                      <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold leading-snug tracking-tight text-white transition-colors duration-200 hover:text-[var(--primary)] lg:text-xl xl:text-2xl"
                      >
                        {project.title}
                      </a>
                    ) : (
                      <Link href={projectUrl} className="text-lg font-bold leading-snug tracking-tight text-white transition-colors duration-200 hover:text-[var(--primary)] lg:text-xl xl:text-2xl">
                        {project.title}
                      </Link>
                    )}
                    {isExternal ? (
                      <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex shrink-0 -translate-x-1 items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-[var(--primary)] opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      >
                        View
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                    ) : (
                      <Link
                        href={projectUrl}
                        className="mt-1 inline-flex shrink-0 -translate-x-1 items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-[var(--primary)] opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      >
                        View
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </Link>
                    )}
                  </div>

                  <p className="text-sm font-light leading-relaxed text-white/40">
                    {project.shortDescription}
                  </p>

                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full border border-white/[0.09] bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/40 transition-[border-color,color] duration-200 group-hover:border-white/[0.15] group-hover:text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
