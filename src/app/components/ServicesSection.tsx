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
      className={`service-card ${hovered ? 'is-hovered' : ''}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s, border-color 0.25s ease, background 0.25s ease`,
      }}
    >
      <span className="card-number">{service.number}</span>

      <div className="card-body">
        <h3 className="card-title">{service.title}</h3>
        <p className="card-desc">{service.description}</p>
      </div>

      <div className="card-footer">
        <div className="tags">
          {service.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="card-arrow">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <style jsx>{`
        .service-card {
          padding: 32px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.07);
          background: #0f0f0f;
          display: flex;
          flex-direction: column;
          gap: 18px;
          cursor: default;
        }
        .service-card.is-hovered {
          border-color: rgba(154, 92, 250, 0.35);
          background: rgba(154, 92, 250, 0.04);
        }
        .card-number {
          font-size: 11px;
          letter-spacing: 0.12em;
          color: var(--primary);
          opacity: 0.55;
          font-weight: 500;
        }
        .card-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .card-title {
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 0;
        }
        .card-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.42);
          line-height: 1.7;
          margin: 0;
        }
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 4px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .tag {
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          transition: color 0.2s, background 0.2s, border-color 0.2s;
        }
        .is-hovered .tag {
          color: var(--primary);
          background: rgba(154, 92, 250, 0.07);
          border-color: rgba(154, 92, 250, 0.2);
        }
        .card-arrow {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.2);
          transition: all 0.2s ease;
        }
        .is-hovered .card-arrow {
          border-color: var(--primary);
          color: var(--primary);
          background: rgba(154, 92, 250, 0.1);
        }
      `}</style>
    </div>
  )
}

export default function ServicesSection() {
  const { ref: headerRef, visible: headerVisible } = useInView(0.2)

  return (
    <>


      <section id="services" className="services-section">
        <div className="services-container">

          {/* Header */}
          <div
            ref={headerRef}
            className="services-header"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(18px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            <p className="services-eyebrow">What we build</p>
            <div className="services-headline-row">
              <h2 className="services-headline">
                OUR SERVICES
              </h2>
              <p className="services-sub">
                Our services from design, development, AI automation and motion.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="services-grid">
            {services.map((service, i) => (
              <ServiceCard key={service.number} service={service} index={i} />
            ))}
          </div>

        </div>

        <style jsx>{`
          .services-section {
            background: #000000;
            padding: 100px 0 120px;
          }
          .services-container {
            max-width: 1140px;
            margin: 0 auto;
            padding: 0 28px;
          }
          .services-header {
            margin-bottom: 56px;
          }
          .services-eyebrow {
            font-size: 11px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--primary);
            margin: 0 0 18px;
            opacity: 0.75;
          }
          .services-headline-row {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 32px;
            flex-wrap: wrap;
          }
          .services-headline {
            font-size: clamp(28px, 3.8vw, 46px);
            font-weight: 700;
            color: #fff;
            letter-spacing: -0.03em;
            line-height: 1.1;
            margin: 0;
            max-width: 540px;
          }
          .text-primary {
            color: var(--primary);
          }
          .services-sub {
            font-size: 14px;
            color: rgba(255,255,255,0.36);
            line-height: 1.75;
            max-width: 280px;
            margin: 0;
          }
          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
          @media (max-width: 900px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .services-headline-row {
              flex-direction: column;
              align-items: flex-start;
            }
            .services-sub {
              max-width: 100%;
            }
          }
          @media (max-width: 560px) {
            .services-grid {
              grid-template-columns: 1fr;
            }
            .services-section {
              padding: 72px 0 80px;
            }
          }
        `}</style>
      </section>
    </>
  )
}