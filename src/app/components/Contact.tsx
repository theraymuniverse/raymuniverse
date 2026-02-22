"use client"
import { useState } from 'react'

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const fieldClass = (name: string) =>
    `contact-field ${focused === name ? 'is-focused' : ''}`

  return (
    <section id="contact" className="contact-section">
      <style>{`
        .contact-section {
          background: #000000;
          padding: 100px 0 0;
          position: relative;
          overflow: hidden;
        }

        /* ── Layout ── */
        .contact-inner {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 28px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        /* ── Left panel ── */
        .contact-left {
          padding-bottom: 100px;
          position: sticky;
          top: 80px;
        }
        .contact-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .contact-eyebrow-line {
          width: 28px;
          height: 1px;
          background: var(--primary);
          opacity: 0.7;
        }
        .contact-eyebrow-text {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--primary);
          opacity: 0.8;
        }
        .contact-headline {
          font-size: clamp(28px, 3.8vw, 46px);
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.03em;
          line-height: 1.08;
          margin: 0 0 20px;
        }
        .contact-headline .text-primary { color: var(--primary); }
        .contact-sub {
          font-size: 14px;
          color: rgba(255,255,255,0.38);
          line-height: 1.75;
          margin: 0 0 48px;
          max-width: 340px;
        }

        /* Info rows */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 48px;
        }
        .contact-info-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .contact-info-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: 1px solid rgba(154,92,250,0.2);
          background: rgba(154,92,250,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .contact-info-icon svg { color: var(--primary); }
        .contact-info-label {
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.25);
          margin: 0 0 2px;
        }
        .contact-info-value {
          font-size: 14px;
          color: rgba(255,255,255,0.7);
          margin: 0;
        }

        /* Divider */
        .contact-divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin-bottom: 32px;
        }

        /* Availability badge */
        .contact-availability {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 100px;
          border: 1px solid rgba(52,211,153,0.2);
          background: rgba(52,211,153,0.05);
        }
        .avail-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px rgba(52,211,153,0.7);
          animation: avail-pulse 2.5s ease-in-out infinite;
        }
        .avail-text {
          font-size: 12px;
          color: rgba(52,211,153,0.85);
          letter-spacing: 0.02em;
        }
        @keyframes avail-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* ── Right panel / Form ── */
        .contact-right {
          padding-bottom: 100px;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        /* Field wrapper */
        .contact-field {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .contact-field label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 6px;
          transition: color 0.2s;
        }
        .contact-field.is-focused label {
          color: var(--primary);
          opacity: 0.8;
        }

        /* Input / Textarea / Select */
        .contact-input {
          width: 100%;
          padding: 14px 18px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.07);
          background: #0f0f0f;
          color: #fff;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease;
          box-sizing: border-box;
          appearance: none;
          -webkit-appearance: none;
          font-family: inherit;
          resize: none;
        }
        .contact-input::placeholder { color: rgba(255,255,255,0.2); }
        .contact-input:focus {
          border-color: rgba(154,92,250,0.45);
          background: rgba(154,92,250,0.04);
        }
        select.contact-input {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='rgba(154,92,250,0.6)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 42px;
          color: rgba(255,255,255,0.6);
        }
        select.contact-input option {
          background: #111;
          color: #fff;
        }

        /* Two-col grid */
        .contact-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        /* Submit */
        .contact-submit {
          margin-top: 6px;
          width: 100%;
          padding: 16px 24px;
          border-radius: 10px;
          border: none;
          font-size: 14px;
          font-weight: 600;
          font-family: inherit;
          letter-spacing: 0.02em;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }
        .contact-submit:not(:disabled):hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
        .contact-submit:disabled { cursor: not-allowed; opacity: 0.7; }

        .submit-idle { background: var(--primary); color: #fff; }
        .submit-sending { background: var(--primary); color: #fff; }
        .submit-sent { background: #34d399; color: #022c22; }
        .submit-error { background: #f87171; color: #450a0a; }

        /* Spinner */
        .spin { animation: spin 0.8s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* ── Bottom border bar ── */
        .contact-bottom-bar {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 28px 0;
          margin-top: 0;
        }
        .contact-bottom-inner {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        .contact-footer-text {
          font-size: 13px;
          color: rgba(255,255,255,0.22);
        }
        .contact-footer-links {
          display: flex;
          gap: 24px;
        }
        .contact-footer-links a {
          font-size: 13px;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s;
        }
        .contact-footer-links a:hover { color: var(--primary); }

        /* ── Responsive ── */
        @media (max-width: 860px) {
          .contact-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .contact-left { position: static; padding-bottom: 0; }
          .contact-sub { max-width: 100%; }
        }
        @media (max-width: 560px) {
          .contact-section { padding-top: 72px; }
          .contact-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="contact-inner">

        {/* ── Left ── */}
        <div className="contact-left">
          <div className="contact-eyebrow">
            <span className="contact-eyebrow-text">Get in touch</span>
          </div>

          <h3 className="contact-headline">
            CONTACT US
          </h3>

          <p className="contact-sub">
            Tell us about your project. We'll come back within 24 hours.
          </p>

          <div className="contact-info">
            <div className="contact-info-row">
              <div className="contact-info-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <p className="contact-info-label">Email</p>
                <p className="contact-info-value">info@raymuniverse.com</p>
              </div>
            </div>

            <div className="contact-info-row">
              <div className="contact-info-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <p className="contact-info-label">Response time</p>
                <p className="contact-info-value">Within 24 hours</p>
              </div>
            </div>

            <div className="contact-info-row">
              <div className="contact-info-icon">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p className="contact-info-label">Timezone</p>
                <p className="contact-info-value">US hours covered (EST / PST)</p>
              </div>
            </div>
          </div>

          <div className="contact-divider" />

        </div>

        {/* ── Right / Form ── */}
        <div className="contact-right">
          <form onSubmit={handleSubmit} className="contact-form">

            <div className="contact-row">
              <div className={fieldClass('name')}>
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="John Smith"
                  className="contact-input"
                  required
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                />
              </div>
              <div className={fieldClass('email')}>
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  className="contact-input"
                  required
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
              </div>
            </div>

            <div className="contact-row">
              <div className={fieldClass('service')}>
                <label htmlFor="service">Service needed</label>
                <select
                  id="service"
                  name="service"
                  className="contact-input"
                  required
                  onFocus={() => setFocused('service')}
                  onBlur={() => setFocused(null)}
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Product Design & Branding">Product Design & Branding</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Mobile App">Mobile App</option>
                  <option value="Mobile App">Automation</option>
                  <option value="Motion & Animation">Motion & Animation</option>
                  <option value="MVP Build">MVP Build</option>
                  <option value="Retainer">Ongoing Retainer</option>
                </select>
              </div>
              <div className={fieldClass('budget')}>
                <label htmlFor="budget">Project budget</label>
                <select
                  id="budget"
                  name="budget"
                  className="contact-input"
                  required
                  onFocus={() => setFocused('budget')}
                  onBlur={() => setFocused(null)}
                >
                  <option value="" disabled>Select a range</option>
                  <option value="$5K–$10K">$5K – $10K</option>
                  <option value="$10K–$25K">$10K – $25K</option>
                  <option value="$25K–$50K">$25K – $50K</option>
                  <option value="$50K+">$50K+</option>
                </select>
              </div>
            </div>

            <div className={fieldClass('message')}>
              <label htmlFor="message">Tell us about your project</label>
              <textarea
                id="message"
                name="message"
                placeholder="What are you building? What's the deadline? What's gone wrong before?"
                rows={5}
                className="contact-input"
                required
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className={`contact-submit submit-${status}`}
            >
              {status === 'idle' && (
                <>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
              {status === 'sending' && (
                <>
                  <svg className="spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25"/>
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                  Sending…
                </>
              )}
              {status === 'sent' && (
                <>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l4 4 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Message sent — we'll reply soon
                </>
              )}
              {status === 'error' && (
                <>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 5v4M8 11v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M1.5 13L8 2l6.5 11H1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  Failed — try emailing us directly
                </>
              )}
            </button>

          </form>
        </div>
      </div>



    </section>
  )
}