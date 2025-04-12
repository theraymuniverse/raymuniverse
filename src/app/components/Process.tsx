"use client"
import { motion } from 'framer-motion'

const steps = [
  { 
    number: '01', 
    title: 'Discovery', 
    description: 'Deep dive into your business goals and user needs to establish project foundations',
    icon: '🔍'
  },
  { 
    number: '02', 
    title: 'Execution', 
    description: 'Transform concepts into products with iterative design and development',
    icon: '🛠️'
  },
  { 
    number: '03', 
    title: 'Launch', 
    description: 'Deploy a polished product with comprehensive quality assurance',
    icon: '🚀'
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="text-sm font-medium text-blue-400 mb-3 block">WORKFLOW</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Structured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Development</span> Process
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A transparent, milestone-driven approach to product development
          </p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500 to-blue-500/20 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-start gap-8 mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'} mt-2`}>
                <motion.div 
                  whileHover={{ x: index % 2 === 0 ? -5 : 5 }}
                  className={`inline-block ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-md`}
                >
                  <div className="text-blue-400 text-2xl mb-2">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </motion.div>
              </div>

              {/* Number */}
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-blue-400 font-bold text-xl z-10 border-2 border-blue-500/30 relative mx-auto md:mx-0">
                <span className="absolute w-4 h-4 bg-blue-500 rounded-full -top-1"></span>
                {step.number}
              </div>

              {/* Spacer */}
              <div className="w-full md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}