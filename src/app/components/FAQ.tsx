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
    <section id="faqs" className="bg-black py-24 lg:py-28 max-sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-7 lg:grid-cols-[1fr_1.6fr] lg:gap-20 lg:items-start">

        {/* ── Left ── */}
        <div className="lg:sticky lg:top-20">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-7 bg-[var(--primary)] opacity-70" />
            <span className="text-xs font-medium uppercase tracking-widest text-[var(--primary)] opacity-80">
              FAQ
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tighter text-white lg:text-5xl">
            Frequently Asked
          </h2>

          <p className="mb-9 max-w-xs text-sm leading-relaxed text-white/40 lg:max-w-xs max-lg:max-w-full">
            If you have a question that is not covered here, send us a message and we will respond within 24 hours.
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] opacity-80 transition-[opacity,gap] duration-200 hover:gap-3 hover:opacity-100"
          >
            Send us a message
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 4l4 3-4 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* ── Accordion ── */}
        <div className="border-t border-white/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="border-b border-white/10">
                <button
                  className="flex w-full cursor-pointer items-center justify-between gap-5 bg-transparent py-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className={`text-sm font-semibold leading-snug tracking-tight transition-colors duration-200 lg:text-base ${isOpen ? 'text-white' : 'text-white/75'}`}>
                    {faq.question}
                  </span>

                  {/* Plus / minus icon */}
                  <span className={`relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${isOpen ? 'border-[var(--primary)] bg-purple-500/10 text-[var(--primary)]' : 'border-white/10 text-white/30'}`}>
                    {/* Horizontal bar */}
                    <span className="absolute h-px w-2.5 rounded-sm bg-current" />
                    {/* Vertical bar — fades out when open */}
                    <span className={`absolute h-px w-2.5 rounded-sm bg-current transition-[opacity,transform] duration-200 ${isOpen ? 'opacity-0 rotate-0' : 'rotate-90'}`} />
                  </span>
                </button>

                {/* Answer — max-height transition via inline style */}
                <div
                  className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? '300px' : '0px' }}
                >
                  <p className="pb-6 text-sm leading-loose text-white/45">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}