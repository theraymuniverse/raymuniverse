"use client"
import { useEffect, useRef } from 'react'

const paragraphs = [
  {
    segments: [
      { text: "Most agencies hand you a quote and disappear into a build. Raym Universe works differently.", white: true },
    ]
  },
  {
    segments: [
      { text: "We are a product, automation and creative studio built for founders and companies that need more than execution. We cover design, development, motion, AI automation and branding ", white: true },
      { text: " all under one team, with no handoff gaps and no wasted weeks.", white: false },
    ]
  },
  {
    segments: [
      { text: "Every service we offer is connected. When your designer and your developer work side by side from day one, the product ships faster, looks better, and breaks less.", white: false },
    ]
  },
  {
    segments: [
      { text: "We work primarily with startups and growing companies that have real timelines and real standards.", white: false },
    ]
  },
]

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      const viewH = window.innerHeight

      wordRefs.current.forEach((el) => {
        if (!el) return
        const rect = el.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        // start revealing at 85% of viewport, fully white at 50%
        const progress = 1 - Math.min(Math.max((center - viewH * 0.5) / (viewH * 0.35), 0), 1)
        const gray = 90
        const white = 255
        const val = Math.round(gray + (white - gray) * progress)
        el.style.color = `rgb(${val},${val},${val})`
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  let wordIndex = 0

  return (
    <section id="about" className="about-section">
      <style>{`
        .about-section {
          background: #000;
          padding: 120px 0 140px;
        }
        .about-inner {
          max-width: 780px;
          margin: 0 auto;
          padding: 0 28px;
        }
        .about-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 56px;
        }
        .about-eyebrow-line {
          width: 28px;
          height: 1px;
          background: var(--primary);
          opacity: 0.7;
        }
        .about-eyebrow-text {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--primary);
          opacity: 0.8;
        }
        .about-body {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }
        .about-para {
          font-size: clamp(20px, 2.8vw, 28px);
          font-weight: 600;
          line-height: 1.55;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .about-word {
          display: inline;
          color: rgb(90, 90, 90);
          transition: color 0.1s ease;
          white-space: pre-wrap;
        }
      `}</style>

      <div className="about-inner" ref={containerRef}>
        <div className="about-eyebrow">
          <span className="about-eyebrow-text">About us</span>
        </div>

        <div className="about-body">
          {paragraphs.map((para, pIdx) => (
            <p key={pIdx} className="about-para">
              {para.segments.map((seg, sIdx) =>
                seg.text.split(' ').map((word, wIdx) => {
                  const idx = wordIndex++
                  const isLast =
                    wIdx === seg.text.split(' ').length - 1 &&
                    sIdx === para.segments.length - 1
                  return (
                    <span
                      key={`${pIdx}-${sIdx}-${wIdx}`}
                      ref={(el) => { wordRefs.current[idx] = el }}
                      className="about-word"
                      style={{ color: seg.white ? 'rgb(90,90,90)' : 'rgb(70,70,70)' }}
                    >
                      {word}{!isLast ? ' ' : ''}
                    </span>
                  )
                })
              )}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}