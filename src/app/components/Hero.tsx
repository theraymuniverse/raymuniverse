"use client"
import { useState } from 'react';
import Link from 'next/link'
import { FaLaptopCode, FaMobileAlt, FaPencilRuler, FaServer, FaCode } from 'react-icons/fa';
import { BsArrowUpRight, BsArrowRight } from 'react-icons/bs';

export default function Hero() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [hoverDirection, setHoverDirection] = useState<'left' | 'right' | null>(null);

  const handleIconHover = (iconName: string, direction: 'left' | 'right') => {
    setHoveredIcon(iconName);
    setHoverDirection(direction);
  };

  const iconAnimation = (iconName: string | null) => {
    if (hoveredIcon !== iconName) return '';
    return hoverDirection === 'left' 
      ? 'translate-x-1 rotate-6 scale-110' 
      : '-translate-x-1 -rotate-6 scale-110';
  };

  return (
    <section className="relative text-center pt-16 md:pt-28 lg:pt-32 pb-8 md:pb-10 lg:pb-20 bg-black" id='hero'>
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bricolage font-black mb-4 md:mb-6 pt-16 md:pt-28 leading-tight text-white">
          <span 
            className="inline-flex items-center justify-center bg-amber-500 rounded-lg transform -rotate-3 p-1.5 md:p-2 mr-1 md:mr-2 transition-all duration-300"
            onMouseEnter={() => handleIconHover('code', 'left')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <FaCode className={`text-white text-[0.68em] transition-all duration-300 ${iconAnimation('code')}`} />
          </span>
          Your Favourite Product 
          <span 
            className="inline-flex items-center justify-center bg-blue-600 rounded-lg transform rotate-3 p-1.5 md:p-2 mx-1 md:mx-2 transition-all duration-300"
            onMouseEnter={() => handleIconHover('laptop', 'right')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <FaLaptopCode className={`text-white text-[0.68em] transition-all duration-300 ${iconAnimation('laptop')}`} />
          </span> 
          Development Partner 
        </h1>
        
        <p className="text-sm md:text-base font-normal md:font-medium mb-6 md:mb-8 lg:mb-12 mx-auto max-w-[90%] md:max-w-2xl text-gray-300">
          We're a product development partner that specializes in building web and mobile apps, software, and branding for startups and individuals, we're not just involved to build but also in your business goals.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4 mb-8 md:mb-12 lg:mb-16">
          <Link href="#contact" className="w-full sm:w-auto inline-block bg-white hover:bg-gray-200 text-black px-4 md:px-6 lg:px-8 py-2.5 md:py-3.5 font-semibold text-sm md:text-base rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
            Book a Call
          </Link>
          <Link 
            href="#works" 
            className="w-full sm:w-auto inline-block bg-transparent hover:bg-gray-800 text-white px-4 md:px-6 lg:px-8 py-2.5 md:py-3.5 font-semibold text-sm md:text-base rounded-full border border-white transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-1/2 after:-translate-x-1/2 after:bottom-3 hover:after:w-[calc(100%-50%)] after:transition-all after:duration-300 hover:scale-[1.02]"
          >
            Explore Portfolio
          </Link>
        </div>
        
        <div className="flex flex-col gap-4 md:flex-row md:gap-6 lg:gap-8 justify-center items-center">
          <p className="w-full md:w-auto bg-gray-800 px-4 md:px-6 py-2 md:py-3 rounded-md border border-gray-700 text-sm md:text-base text-gray-100 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-600">
            ✓ Expertise in web and mobile development
          </p>
          <p className="w-full md:w-auto bg-gray-800 px-4 md:px-6 py-2 md:py-3 rounded-md border border-gray-700 text-sm md:text-base text-gray-100 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-600">
            ✓ Agile methodologies for rapid delivery
          </p>
          <p className="w-full md:w-auto bg-gray-800 px-4 md:px-6 py-2 md:py-3 rounded-md border border-gray-700 text-sm md:text-base text-gray-100 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-600">
            ✓ Ongoing support and maintenance
          </p>
        </div>

      </div>
    </section>
  )
}