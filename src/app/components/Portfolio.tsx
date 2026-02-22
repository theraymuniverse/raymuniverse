"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'

const projects = [
  {
    title: "COR'N Enterprise",
    description: 'A full-stack e-commerce platform connecting grain buyers directly with agricultural producers at scale.',
    badge: 'Launched Q1 2025',
    tags: ['E-Commerce', 'Web App', 'Fintech'],
    href: '#',
    // Replace src with your actual image path
    image: null,
    imageBg: 'linear-gradient(135deg, #1a1206 0%, #2d1f07 50%, #1a1206 100%)',
    imageAccent: 'rgba(245,158,11,0.08)',
  },
  {
    title: 'D3 Structure',
    description: 'Architectural marketplace bridging clients and structural engineers — from concept to stamped plans.',
    badge: '3,200+ designs delivered',
    tags: ['Marketplace', 'Web & Mobile', 'SaaS'],
    href: '#',
    image: null,
    imageBg: 'linear-gradient(135deg, #060d1a 0%, #0b1829 50%, #060d1a 100%)',
    imageAccent: 'rgba(59,130,246,0.08)',
  },
  {
    title: 'Gliese Platform',
    description: 'Enterprise B2B commerce infrastructure for bulk transactions between suppliers and national retailers.',
    badge: '$2.4M GMV at launch',
    tags: ['Enterprise', 'B2B', 'Web & Mobile'],
    href: '#',
    image: null,
    imageBg: 'linear-gradient(135deg, #0d0814 0%, #170b24 50%, #0d0814 100%)',
    imageAccent: 'rgba(154,92,250,0.1)',
  },
]

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="portfolio-section bg-black relative py-32 overflow-hidden"
    >
      <style>{`
        /* ── Scoped styles ── */

        /* Section grain */
        .portfolio-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px;
          opacity: 0.022;
          pointer-events: none;
          z-index: 0;
        }

        /* Image container */
        .pf-img-wrap {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          aspect-ratio: 4 / 3;
          background: #111;
        }
        .pf-img-wrap img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }
        .pf-img-placeholder {
          position: absolute;
          inset: 0;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }
        .pf-card:hover .pf-img-wrap img,
        .pf-card:hover .pf-img-placeholder {
          transform: scale(1.04);
        }

        /* Image scrim so badge is always legible */
        .pf-img-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.52) 0%, transparent 55%);
          pointer-events: none;
          z-index: 1;
        }

        /* Badge */
        .pf-badge {
          position: absolute;
          bottom: 14px;
          left: 14px;
          z-index: 2;
          background: rgba(10, 8, 18, 0.82);
          border: 1px solid rgba(255,255,255,0.13);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 999px;
          padding: 6px 14px;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.88);
          letter-spacing: 0.01em;
          white-space: nowrap;
        }

        /* Arrow button */
        .pf-arrow {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 2;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
          opacity: 0;
          transform: translateY(4px);
          transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s ease, color 0.2s ease;
        }
        .pf-card:hover .pf-arrow {
          opacity: 1;
          transform: translateY(0);
        }
        .pf-arrow:hover {
          background: var(--primary) !important;
          border-color: var(--primary) !important;
          color: white !important;
        }

        /* Tag pill */
        .pf-tag {
          display: inline-flex;
          align-items: center;
          padding: 4px 11px;
          border-radius: 999px;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.06em;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.42);
          transition: border-color 0.25s ease, color 0.25s ease;
        }
        .pf-card:hover .pf-tag {
          border-color: rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.6);
        }

        /* View work link */
        .pf-view-link {
          color: var(--primary);
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .pf-card:hover .pf-view-link {
          opacity: 1;
          transform: translateX(0);
        }

        /* Bottom CTA */
        .pf-eyebrow-dash { background: var(--primary); }
      `}</style>



      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-primary font-medium tracking-[0.2em] uppercase text-[11px]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Selected Work
              </span>
            </div>

            <h3
              className="text-[#F0EAFF] font-extrabold tracking-[-0.03em] leading-[1.07]"
              style={{
                fontFamily: 'Urbanist, sans-serif',
                fontSize: 'clamp(28px, 3.8vw, 46px)',
              }}
            >
              OUR WORK
            </h3>
          </div>

          <p
            className="max-w-xs flex-shrink-0"
            style={{
              fontFamily: 'Inter, sans-serif',
              color: 'rgba(240,234,255,0.38)',
              fontSize: 15,
              lineHeight: 1.72,
              fontWeight: 300,
            }}
          >
            Every project ships with a measurable outcome attached. We deliver value not just skill.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="pf-card group flex flex-col"
            >
              {/* Image block */}
              <Link href={project.href} className="block relative">
                <div className="pf-img-wrap">
                  {/* Placeholder — replace with <img src={project.image} alt={project.title} /> */}
                  <div
                    className="pf-img-placeholder"
                    style={{ background: project.imageBg }}
                  >
                    {/* Subtle inner glow accent */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(ellipse at 70% 30%, ${project.imageAccent} 0%, transparent 65%)`,
                      }}
                    />
                    {/* Grid lines decoration */}
                    <svg
                      className="absolute inset-0 w-full h-full opacity-[0.06]"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern id={`grid-${i}`} width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill={`url(#grid-${i})`} />
                    </svg>
                    {/* Center placeholder icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="flex flex-col items-center gap-2 opacity-20"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <rect x="2" y="6" width="28" height="20" rx="2" stroke="white" strokeWidth="1.5"/>
                          <circle cx="11" cy="13" r="2.5" stroke="white" strokeWidth="1.5"/>
                          <path d="M2 22l7-6 5 5 4-4 7 9" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-white text-[11px] tracking-widest uppercase">Image coming soon</span>
                      </div>
                    </div>
                  </div>

                  {/* Scrim */}
                  <div className="pf-img-scrim" />

                  {/* Badge */}
                  <span className="pf-badge">{project.badge}</span>

                  {/* Arrow CTA */}
                  <div className="pf-arrow">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>

              {/* Text block */}
              <div className="mt-5 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <Link href={project.href}>
                    <h3
                      className="text-[#F0EAFF] font-bold tracking-[-0.02em] leading-[1.18] hover:text-primary transition-colors duration-200"
                      style={{
                        fontFamily: 'Urbanist, sans-serif',
                        fontSize: 'clamp(20px, 2vw, 24px)',
                      }}
                    >
                      {project.title}
                    </h3>
                  </Link>
                  <Link href={project.href} className="pf-view-link flex-shrink-0 mt-1">
                    View
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>

                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: 'rgba(240,234,255,0.4)',
                    fontSize: 14,
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="pf-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        

      </div>
    </section>
  )
}