"use client"
import { motion } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    label: 'Discovery',
    title: 'We learn everything about your project',
    description:
      'We start by understanding your product, your goals, and the specific service you need. Whether it\'s a web app, mobile build, brand identity, automation or motion work we ask the right questions so we know exactly what to deliver.',
  },
  {
    number: '02',
    label: 'Execution',
    title: 'We get to work on what you need',
    description:
      'Once the scope is clear, our team handles it end to end. Designers, developers, and motion artists work together on your requested service keeping you updated at every stage so nothing comes as a surprise.',
  },
  {
    number: '03',
    label: 'Completion',
    title: 'We hand over work you\'re proud to ship',
    description:
      'Before anything leaves our hands, it goes through a full quality check. We deliver clean, tested, production-ready work and stay available after handoff to make sure everything runs exactly as it should.',
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden bg-black py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-medium uppercase tracking-widest text-[var(--primary)] opacity-80">
              Our Work Process
            </span>
          </div>
          <div className="mb-16 flex flex-wrap items-end justify-between gap-10 lg:flex-row flex-col items-start">
            <h2 className="m-0 mb-4 max-w-lg text-4xl font-bold leading-tight tracking-tighter text-white lg:text-5xl">
              HOW WE WORK
            </h2>
            <p className="m-0 max-w-xs text-sm leading-relaxed text-white/40">
              We put work into each phase of the project, from research till completion.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className={[
                'group relative',
                i !== 2 ? 'lg:pr-8' : '',
                i !== 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : '',
                i !== 2
                  ? 'border-b border-white/10 pb-10 lg:border-b-0 lg:pb-0'
                  : '',
              ].join(' ')}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
              viewport={{ once: true }}
            >
              {/* Dot row */}
              <div className="mb-8 flex items-center gap-3.5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-purple-500/25 bg-purple-500/10 transition-[border-color,background-color] duration-300 group-hover:border-purple-500/50 group-hover:bg-purple-500/20">
                  <span className="font-mono text-sm font-semibold tracking-wide text-[var(--primary)] opacity-80">
                    {step.number}
                  </span>
                </div>
                <span className="text-xs font-medium uppercase tracking-widest text-white/20">
                  {step.label}
                </span>
              </div>

              <h3 className="m-0 mb-3 text-lg font-bold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-[var(--primary)]">
                {step.title}
              </h3>
              <p className="m-0 text-sm leading-relaxed text-white/40">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 flex flex-col items-start gap-6 rounded-2xl border border-white/10 bg-neutral-950 p-7 lg:flex-row lg:items-center lg:justify-between lg:px-11 lg:py-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          viewport={{ once: true }}
        >
          <div>
            <p className="m-0 mb-1 text-lg font-bold tracking-tight text-white">
              Ready to start your project?
            </p>
            <p className="m-0 text-sm leading-relaxed text-white/40">
              Discovery calls are free.
            </p>
          </div>
          <a
            href="https://calendly.com/theraymuniverse"
            className="btn-primary inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-xl px-6 py-3.5 text-sm font-medium tracking-wide"
          >
            Book a Discovery Call
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M3 7.5h9M8.5 5l3 2.5-3 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  )
}