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
    <section ref={sectionRef} id="process" className="process-section">

      <style>{`
        .process-section {
          background: #000000;
          padding: 100px 0 120px;
          position: relative;
          overflow: hidden;
        }

        .process-inner {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ── Header ── */
        .process-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .process-eyebrow-text {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--primary);
          opacity: 0.8;
        }
        .process-headline {
          font-size: clamp(30px, 4vw, 50px);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1.08;
          margin: 0 0 16px;
          max-width: 560px;
        }
        .process-headline .text-primary {
          color: var(--primary);
        }
        .process-sub {
          font-size: 14px;
          color: rgba(255,255,255,0.36);
          line-height: 1.75;
          margin: 0;
          max-width: 340px;
        }
        .process-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
          margin-bottom: 72px;
        }

        /* ── Steps ── */
        .process-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          position: relative;
        }



        .process-step {
          padding: 0 32px 0 0;
          position: relative;
        }
        .process-step:last-child {
          padding-right: 0;
        }
        .process-step + .process-step {
          padding-left: 32px;
          border-left: 1px solid rgba(255,255,255,0.06);
        }

        /* Number circle */
        .step-dot-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 32px;
        }
        .step-dot {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 1px solid rgba(154,92,250,0.25);
          background: rgba(154,92,250,0.07);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .process-step:hover .step-dot {
          border-color: rgba(154,92,250,0.5);
          background: rgba(154,92,250,0.12);
        }
        .step-dot-num {
          font-size: 13px;
          font-weight: 600;
          color: var(--primary);
          letter-spacing: 0.04em;
          font-family: 'DM Mono', monospace;
          opacity: 0.8;
        }
        .step-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }

        .step-title {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.25;
          margin: 0 0 12px;
          transition: color 0.25s ease;
        }
        .process-step:hover .step-title {
          color: var(--primary);
        }

        .step-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.4);
          line-height: 1.75;
          margin: 0;
        }

        /* ── CTA ── */
        .process-cta {
          margin-top: 72px;
          padding: 40px 44px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.07);
          background: #0f0f0f;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }
        .process-cta-text p:first-child {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          margin: 0 0 4px;
        }
        .process-cta-text p:last-child {
          font-size: 13.5px;
          color: rgba(255,255,255,0.36);
          margin: 0;
          line-height: 1.6;
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .process-steps {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .process-steps::before { display: none; }
          .process-step {
            padding: 0 0 40px !important;
            border-left: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }
          .process-step:last-child {
            border-bottom: none;
            padding-bottom: 0 !important;
          }
          .process-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
          .process-cta {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 560px) {
          .process-section { padding: 72px 0 80px; }
          .process-cta { padding: 28px 24px; }
        }
      `}</style>

      <div className="process-inner">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true }}
        >
          <div className="process-eyebrow">
            <span className="process-eyebrow-text">Our Work Process</span>
          </div>
          <div className="process-header-row">
            <h2 className="process-headline">
              HOW WE WORK
            </h2>
            <p className="process-sub">
              We put work into each phase of the project, from research till completion.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="process-steps">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="process-step"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
              viewport={{ once: true }}
            >
              <div className="step-dot-row">
                <div className="step-dot">
                  <span className="step-dot-num">{step.number}</span>
                </div>
                <span className="step-label">{step.label}</span>
              </div>

              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="process-cta"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          viewport={{ once: true }}
        >
          <div className="process-cta-text">
            <p>Ready to start your project?</p>
            <p>Discovery calls are free.</p>
          </div>
          <a href="https://calendly.com/theraymuniverse" className="btn-primary inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[10px] text-sm font-medium tracking-wide whitespace-nowrap flex-shrink-0">
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