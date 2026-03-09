"use client"
import { useRef, useState, useEffect } from 'react'

const services = [
  {
    number: '01',
    title: 'Product Design & Branding',
    description: 'From brand identity to full UI/UX - we design products that feel premium, convert well, and make investors take notice.',
    tags: ['UI/UX', 'Brand Identity', 'Design Systems'],
  },
  {
    number: '02',
    title: 'Web Development',
    description: 'Fast, scalable, and built to last. We ship marketing sites, SaaS platforms, and web apps that hold up under real traffic.',
    tags: ['Next.js', 'TypeScript', 'Full-Stack'],
  },
  {
    number: '03',
    title: 'Mobile Apps',
    description: 'Cross-platform iOS & Android apps engineered for retention. Smooth, performant, and built with the features that matter.',
    tags: ['React Native', 'Flutter', 'iOS & Android'],
  },
  {
    number: '04',
    title: 'Motion & Animation',
    description: 'UI microinteractions, product demo videos, and brand motion. The layer most teams skip — and the one users remember.',
    tags: ['After Effects', 'Lottie', 'UI Motion'],
  },
  {
    number: '05',
    title: 'MVP & Rapid Builds',
    description: 'Got a funded idea and a deadline? We move fast - concept to working product in weeks, not months. Built to test, built to pitch.',
    tags: ['Rapid Prototyping', 'Lean Dev', 'Launch-Ready'],
  },
  {
    number: '06',
    title: 'Ongoing Product Retainer',
    description: 'A dedicated team on tap - new features, design iterations, and motion updates delivered every month. No hiring, no overhead.',
    tags: ['Monthly Delivery', 'Priority Support', 'Flexible Scope'],
  },
]

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return { ref, visible }
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, visible } = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        'group flex flex-col gap-[18px] cursor-default rounded-xl border p-8',
        'transition-[border-color,background-color] duration-[250ms] ease-in-out',
        hovered
          ? 'border-[rgba(154,92,250,0.35)] bg-[rgba(154,92,250,0.04)]'
          : 'border-white/[0.07] bg-[#0f0f0f]',
      ].join(' ')}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s, border-color 0.25s ease, background 0.25s ease`,
      }}
    >
      {/* Number */}
      <span className="text-[11px] font-medium tracking-[0.12em] text-[var(--primary)] opacity-55">
        {service.number}
      </span>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-[10px]">
        <h3 className="m-0 text-[18px] font-bold leading-[1.2] tracking-[-0.02em] text-white">
          {service.title}
        </h3>
        <p className="m-0 text-[13.5px] leading-[1.7] text-white/[0.42]">
          {service.description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-3 border-t border-white/[0.05] pt-1">
        <div className="flex flex-wrap gap-[6px]">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className={[
                'rounded-full border px-[10px] py-[3px] text-[11px] transition-[color,background-color,border-color] duration-200',
                hovered
                  ? 'border-[rgba(154,92,250,0.2)] bg-[rgba(154,92,250,0.07)] text-[var(--primary)]'
                  : 'border-white/[0.07] bg-white/[0.04] text-white/30',
              ].join(' ')}
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          className={[
            'flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full border transition-all duration-200',
            hovered
              ? 'border-[var(--primary)] bg-[rgba(154,92,250,0.1)] text-[var(--primary)]'
              : 'border-white/[0.08] text-white/20',
          ].join(' ')}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function ServicesSection() {
  const { ref: headerRef, visible: headerVisible } = useInView(0.2)

  return (
    <section id="services" className="bg-black pb-[120px] pt-[100px] max-[560px]:py-[72px]">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div
          ref={headerRef}
          className="mb-14"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(18px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="mb-[18px] text-[11px] uppercase tracking-[0.14em] text-[var(--primary)] opacity-75">
            What we build
          </p>
          <div className="flex flex-wrap items-end justify-between gap-8 max-[900px]:flex-col max-[900px]:items-start">
            <h2 className="m-0 max-w-[540px] text-[clamp(28px,3.8vw,46px)] font-bold leading-[1.1] tracking-[-0.03em] text-white">
              OUR SERVICES
            </h2>
            <p className="m-0 max-w-[280px] text-[14px] leading-[1.75] text-white/[0.36] max-[900px]:max-w-full">
              Our services from design, development, AI automation and motion.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}