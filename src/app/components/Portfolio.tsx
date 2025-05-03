"use client"
import { FaSeedling, FaBuilding, FaShoppingCart, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const projects = [
    {
      title: "COR’N Enterprise",
      category: "Website",
      icon: <FaSeedling className="text-amber-400" />,
      summary: "E-commerce platform for agricultural produce connecting buyers directly with COR’N Enterprise's grain products.",
      tags: ["Next.js", "Node.js", "Stripe", "MongoDB"],
      accentColor: "bg-amber-500"
    },
    {
      title: "D3 Structure",
      category: "Web & Mobile App",
      icon: <FaBuilding className="text-blue-400" />,
      summary: "Architectural marketplace connecting clients with engineers for structural designs and building plans.",
      tags: ["React Native", "Firebase", "Three.js", "WebSockets"],
      accentColor: "bg-blue-600"
    },
    {
      title: "Gliese Platform",
      category: "Web & Mobile App",
      icon: <FaShoppingCart className="text-purple-400" />,
      summary: "Enterprise B2B eCommerce solution for bulk transactions between suppliers and retailers.",
      tags: ["TypeScript", "GraphQL", "Docker", "Kubernetes"],
      accentColor: "bg-purple-600"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 bg-black text-white" id='portfolio'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl transform rotate-3 p-3 mb-6 shadow-lg"
          >
            <FaLaptopCode className="text-white text-2xl" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 font-bricolage bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
          >
            Our <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Digital excellence crafted through innovative solutions and cutting-edge technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className={`relative group overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 hover:border-gray-700 transition-all duration-500 hover:shadow-xl ${project.accentColor.replace('bg', 'hover:shadow')}/20`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-950 opacity-70"></div>
              <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
              
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${project.accentColor} bg-opacity-20 backdrop-blur-sm border border-gray-500 ${project.accentColor.replace('bg', 'border')} border-opacity-30`}>
                    {project.icon}
                  </div>
                  <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${project.accentColor.replace('bg', 'text')} ${project.accentColor.replace('bg', 'bg-opacity-10')} backdrop-blur-sm border border-gray-500 ${project.accentColor.replace('bg', 'border')} border-opacity-20`}>
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{project.summary}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <button className={`w-full py-3 px-6 text-sm font-medium rounded-xl ${project.accentColor} bg-opacity-10 hover:bg-opacity-20 border ${project.accentColor.replace('bg', 'border')} border-opacity-30 text-white transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-sm`}>
                    View Case Study
                    <span className="group-hover:translate-x-1 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full ${project.accentColor} opacity-10 group-hover:opacity-20 blur-3xl transition-all duration-500`}></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <button className="relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-medium rounded-xl hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 overflow-hidden group">
            <span className="relative z-10 flex items-center text-white gap-2">
              Explore Full Portfolio
              <span className="group-hover:translate-x-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}