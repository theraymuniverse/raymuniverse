"use client"
import { useState } from 'react'

const faqs = [
  {
    question: "What services does Raymuniverse offer?",
    answer: "We offer product design, branding, web development, mobile app development for iOS and Android, motion and animation, MVP builds, and ongoing monthly retainers. You can come to us for one service or hand over the entire project — we handle everything from start to finish."
  },
  {
    question: "How long will my project take?",
    answer: "A landing page or MVP typically takes 2 to 4 weeks. A full web or mobile product usually takes 6 to 10 weeks. Branding and motion projects are typically completed in 1 to 3 weeks. Before we begin, we give you a clear timeline so you know exactly what to expect."
  },
  {
    question: "How much does it cost to work with you?",
    answer: "Our projects start at $5,000. The final cost depends on the service you need and the size of the project. We offer both fixed-price projects and monthly retainer plans. Book a call with us and we will give you a clear price — not a vague estimate."
  },
  {
    question: "Do you work with clients based in the United States?",
    answer: "Yes. Most of our clients are based in the US. We align with US working hours and keep communication clear and consistent so time zone differences never slow your project down."
  },
  {
    question: "What happens after my project is completed?",
    answer: "We provide a full handoff with clean files, documentation, and a walkthrough of everything we built. If you need continued support after delivery, we offer maintenance and retainer plans to keep things running smoothly."
  },
  {
    question: "Can you take over a project that is already in progress?",
    answer: "Yes. We often step in on projects that have stalled or need to be redone properly. We will review what already exists, let you know what is worth keeping, and move forward from there with a clear plan."
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faqs" className="faq-section">
      <style>{`
        .faq-section {
          background: #000000;
          padding: 100px 0 120px;
        }
        .faq-inner {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 28px;
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 80px;
          align-items: start;
        }

        /* ── Left ── */
        .faq-left {
          position: sticky;
          top: 80px;
        }
        .faq-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .faq-eyebrow-line {
          width: 28px;
          height: 1px;
          background: var(--primary);
          opacity: 0.7;
        }
        .faq-eyebrow-text {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--primary);
          opacity: 0.8;
        }
        .faq-headline {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin: 0 0 16px;
        }
        .faq-headline .text-primary { color: var(--primary); }
        .faq-sub {
          font-size: 14px;
          color: rgba(255,255,255,0.36);
          line-height: 1.75;
          margin: 0 0 36px;
          max-width: 300px;
        }
        .faq-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--primary);
          text-decoration: none;
          opacity: 0.8;
          transition: opacity 0.2s, gap 0.2s;
        }
        .faq-cta-link:hover { opacity: 1; gap: 12px; }

        /* ── Right / Accordion ── */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .faq-item {
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .faq-trigger {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          padding: 24px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          text-align: left;
        }
        .faq-question {
          font-size: 15px;
          font-weight: 600;
          color: rgba(255,255,255,0.75);
          line-height: 1.4;
          letter-spacing: -0.01em;
          transition: color 0.2s;
        }
        .faq-item.is-open .faq-question {
          color: #fff;
        }

        .faq-icon {
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.3);
          transition: all 0.25s ease;
          position: relative;
        }
        .faq-item.is-open .faq-icon {
          border-color: var(--primary);
          background: rgba(154,92,250,0.1);
          color: var(--primary);
        }

        /* Plus → minus via rotation */
        .faq-icon-bar {
          position: absolute;
          width: 10px;
          height: 1.5px;
          background: currentColor;
          border-radius: 2px;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .faq-icon-bar.vertical {
          transform: rotate(90deg);
        }
        .faq-item.is-open .faq-icon-bar.vertical {
          transform: rotate(0deg);
          opacity: 0;
        }

        .faq-answer-wrap {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .faq-item.is-open .faq-answer-wrap {
          max-height: 300px;
        }
        .faq-answer {
          padding: 0 0 24px;
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.8;
        }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .faq-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .faq-left { position: static; }
          .faq-sub { max-width: 100%; }
        }
        @media (max-width: 560px) {
          .faq-section { padding: 72px 0 80px; }
        }
      `}</style>

      <div className="faq-inner">

        {/* Left */}
        <div className="faq-left">
          <div className="faq-eyebrow">
            <span className="faq-eyebrow-text">FAQ</span>
          </div>
          <h2 className="faq-headline">
            Frequently Asked 
          </h2>
          <p className="faq-sub">
            If you have a question that is not covered here, send us a message and we will respond within 24 hours.
          </p>
          <a href="#contact" className="faq-cta-link">
            Send us a message
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 4l4 3-4 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Accordion */}
        <div className="faq-list">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className={`faq-item ${isOpen ? 'is-open' : ''}`}>
                <button
                  className="faq-trigger"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-icon">
                    <span className="faq-icon-bar horizontal" />
                    <span className="faq-icon-bar vertical" />
                  </span>
                </button>
                <div className="faq-answer-wrap">
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}