"use client"
import { FaCode, FaRocket, FaMobile, FaCloud, FaChartLine } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { useRef } from 'react'

type AccentColor = 'blue' | 'purple' | 'green' | 'orange' | 'pink'

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  tags: string[];
  accent: AccentColor;
}

const services: Service[] = [
  { 
    icon: FaRocket, 
    title: 'MVP Development', 
    description: 'Concept to market in weeks',
    tags: ['Lean methodology', 'Rapid prototyping', 'User testing'],
    accent: 'blue'
  },
  { 
    icon: FaMobile, 
    title: 'Mobile Engineering', 
    description: 'High-performance iOS/Android apps',
    tags: ['React Native', 'Flutter', 'Performance'],
    accent: 'purple'
  },
  { 
    icon: FaCloud, 
    title: 'Cloud Architecture', 
    description: 'Infrastructure for scale',
    tags: ['AWS/GCP', 'Serverless', 'Microservices'],
    accent: 'green'
  },
  { 
    icon: FaChartLine, 
    title: 'Growth Engineering', 
    description: 'Data-driven user acquisition',
    tags: ['A/B testing', 'Analytics', 'Experiments'],
    accent: 'orange'
  },
  { 
    icon: FaCode, 
    title: 'Web Platforms', 
    description: 'Modern, scalable web apps',
    tags: ['Next.js', 'TypeScript', 'GraphQL'],
    accent: 'pink'
  }
]

export default function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (px: number) => {
    scrollContainerRef.current?.scrollBy({ left: px, behavior: 'smooth' })
  }

  const accentColors: Record<AccentColor, string> = {
    blue: 'border-blue-400 hover:border-blue-300',
    purple: 'border-purple-400 hover:border-purple-300',
    green: 'border-emerald-400 hover:border-emerald-300',
    orange: 'border-amber-400 hover:border-amber-300',
    pink: 'border-pink-400 hover:border-pink-300'
  }

  return (
    <section className="py-24 bg-black" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Build. Scale. Grow.
          </h2>
          <p className="text-gray-400">
            Technical partnership for ambitious startups
          </p>
        </div>

        {/* Services Cards */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-12 -mx-4 px-4 hide-scrollbar scroll-smooth"
          >
            <div className="flex gap-6 min-w-max">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 w-[85vw] sm:w-[45vw] lg:w-[30vw] xl:w-[360px] p-8 rounded-xl bg-gray-900 border border-gray-800 ${accentColors[service.accent]} hover:bg-gray-800 transition-all duration-300`}
                >
                  <div className={`w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center mb-6 border ${accentColors[service.accent]}`}>
                    <service.icon className="text-xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-gray-800 rounded-full border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={() => scroll(-400)}
              className="p-3 bg-black rounded-full hover:bg-gray-900 transition-all border border-gray-700 text-white"
            >
              <FiArrowRight className="rotate-180" />
            </button>
            <button 
              onClick={() => scroll(400)}
              className="p-3 bg-black rounded-full hover:bg-gray-900 transition-all border border-gray-700 text-white"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-20">
          <button className="inline-flex items-center gap-3 px-8 py-3.5 bg-white hover:bg-gray-100 text-black rounded-full transition-all duration-300 font-medium border border-white group">
            <span>Start building</span>
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div> */}
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}