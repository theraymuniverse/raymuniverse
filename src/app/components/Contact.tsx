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

  const labelClass = (name: string) =>
    `mb-1.5 text-xs font-medium uppercase tracking-widest transition-colors duration-200 ${
      focused === name ? 'text-[var(--primary)] opacity-80' : 'text-white/30'
    }`

  const inputClass =
    'w-full rounded-xl border border-white/10 bg-neutral-950 px-4 py-3.5 text-sm text-white placeholder-white/20 outline-none transition-[border-color,background-color] duration-200 focus:border-purple-500/50 focus:bg-purple-500/5 appearance-none font-[inherit] resize-none'

  return (
    <section id="contact" className="relative overflow-hidden bg-black pt-24 lg:pt-28 max-sm:pt-[72px]">

      {/* Grid layout */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-20">

        {/* ── Left ── */}
        <div className="pb-24 lg:sticky lg:top-20 lg:pb-24 max-lg:pb-0">

          <div className="mb-7 flex items-center gap-3">
            <span className="w-7 h-px bg-[var(--primary)] opacity-70" />
            <span className="text-xs font-medium uppercase tracking-widest text-[var(--primary)] opacity-80">
              Get in touch
            </span>
          </div>

          <h3 className="mb-5 text-4xl font-bold leading-tight tracking-tighter text-white lg:text-5xl">
            CONTACT US
          </h3>

          <p className="mb-12 max-w-xs text-sm leading-relaxed text-white/40 max-lg:max-w-full">
            Tell us about your project. We'll come back within 24 hours.
          </p>

          {/* Info rows */}
          <div className="mb-12 flex flex-col gap-5">
            {[
              {
                name: 'email',
                label: 'Email',
                value: 'contact@theraymuniverse.com',
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                ),
              },
              {
                name: 'time',
                label: 'Response time',
                value: 'Within 24 hours',
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
              },
              {
                name: 'location',
                label: 'Timezone',
                value: 'US hours covered (EST / PST)',
                icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
              },
            ].map(({ name, label, value, icon }) => (
              <div key={name} className="flex items-start gap-3.5">
                <div className="mt-px flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-purple-500/20 bg-purple-500/5 text-[var(--primary)]">
                  {icon}
                </div>
                <div>
                  <p className="mb-0.5 text-xs uppercase tracking-widest text-white/25">{label}</p>
                  <p className="text-sm text-white/70">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="h-px bg-white/5" />
        </div>

        {/* ── Right / Form ── */}
        <div className="pb-24">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">

            {/* Row: name + email */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="name" className={labelClass('name')}>Your name</label>
                <input id="name" type="text" name="name" placeholder="John Smith" className={inputClass} required onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className={labelClass('email')}>Email address</label>
                <input id="email" type="email" name="email" placeholder="john@company.com" className={inputClass} required onFocus={() => setFocused('email')} onBlur={() => setFocused(null)} />
              </div>
            </div>

            {/* Row: service + budget */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="service" className={labelClass('service')}>Service needed</label>
                <div className="relative">
                  <select id="service" name="service" className={`${inputClass} pr-10 text-white/60`} required onFocus={() => setFocused('service')} onBlur={() => setFocused(null)}>
                    <option value="" disabled>Select a service</option>
                    <option value="Product Design & Branding">Product Design & Branding</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Automation">Automation</option>
                    <option value="Motion & Animation">Motion & Animation</option>
                    <option value="MVP Build">MVP Build</option>
                    <option value="Retainer">Ongoing Retainer</option>
                  </select>
                  <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-purple-400/60" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="budget" className={labelClass('budget')}>Project budget</label>
                <div className="relative">
                  <select id="budget" name="budget" className={`${inputClass} pr-10 text-white/60`} required onFocus={() => setFocused('budget')} onBlur={() => setFocused(null)}>
                    <option value="" disabled>Select a range</option>
                    <option value="$5K–$10K">$5K – $10K</option>
                    <option value="$10K–$25K">$10K – $25K</option>
                    <option value="$25K–$50K">$25K – $50K</option>
                    <option value="$50K+">$50K+</option>
                  </select>
                  <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-purple-400/60" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className={labelClass('message')}>Tell us about your project</label>
              <textarea id="message" name="message" placeholder="What are you building? What's the deadline? What's gone wrong before?" rows={5} className={inputClass} required onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              className={[
                'mt-1.5 flex w-full items-center justify-center gap-2.5 rounded-xl border-none px-6 py-4 text-sm font-semibold tracking-wide transition-[opacity,transform] duration-200',
                'hover:enabled:-translate-y-px hover:enabled:opacity-90 disabled:cursor-not-allowed disabled:opacity-70',
                status === 'sent'  ? 'bg-emerald-400 text-emerald-950' : '',
                status === 'error' ? 'bg-red-400 text-red-950' : '',
                status === 'idle' || status === 'sending' ? 'bg-[var(--primary)] text-white' : '',
              ].join(' ')}
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
                  <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none">
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