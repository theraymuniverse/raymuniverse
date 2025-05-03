"use client"
import { useState } from 'react';
import Link from 'next/link'
import { FaLaptopCode, FaCode } from 'react-icons/fa';

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
    <section className="relative text-center pt-28 lg:pt-32 pb-8 md:pb-10 lg:pb-20 bg-black" id='hero'>
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Glow effect container for the headline */}
        <div className="relative inline-block">
          {/* Glow effect - positioned behind the text */}
          <div className="absolute -inset-4 -z-10 overflow-hidden pointer-events-none">
            {/* Amber glow (matches the first icon) */}
            <div className={`absolute -left-8 -top-8 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl opacity-70 transition-all duration-700 ${hoveredIcon === 'code' ? 'opacity-90 scale-110' : ''}`}></div>
            {/* Blue glow (matches the second icon) */}
            <div className={`absolute -right-8 -bottom-8 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl opacity-70 transition-all duration-700 ${hoveredIcon === 'laptop' ? 'opacity-90 scale-110' : ''}`}></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bricolage font-black mb-6 md:mb-6 pt-28 leading-tight md:leading-tight text-white relative z-10">
            <span 
              className="inline-flex items-center justify-center bg-amber-500 rounded-lg transform -rotate-3 p-1.5 sm:p-2 mr-1 sm:mr-2 transition-all duration-300"
              onMouseEnter={() => handleIconHover('code', 'left')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FaCode className={`text-white text-[0.68em] transition-all duration-300 ${iconAnimation('code')}`} />
            </span>
            Your Favourite Product
            <br className="sm:hidden" /> Development Partner
            <span 
              className="inline-flex items-center justify-center bg-blue-600 rounded-lg transform rotate-3 p-1.5 sm:p-2 ml-1 sm:mx-2 transition-all duration-300"
              onMouseEnter={() => handleIconHover('laptop', 'right')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              <FaLaptopCode className={`text-white text-[0.68em] transition-all duration-300 ${iconAnimation('laptop')}`} />
            </span> 
          </h1>
        </div>
        
        <p className="text-sm sm:text-base md:text-base font-normal md:font-medium mb-8 md:mb-8 lg:mb-12 mx-auto max-w-[90%] md:max-w-2xl text-gray-300">
          We're a product development partner that specializes in building web and mobile apps, software, and branding for startups and individuals, we're not just involved to build but also in your business goals.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-4 mb-8 md:mb-12 lg:mb-16">
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
        
        <div className="flex flex-col gap-3 sm:gap-4 md:flex-row md:gap-6 lg:gap-8 justify-center items-center">
          <p className="w-full md:w-auto bg-gray-800/80 px-3 sm:px-4 md:px-6 py-2 rounded-md border border-gray-700 text-xs sm:text-sm md:text-base text-gray-100 hover:bg-gray-700/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-600">
            ✓ Expertise in web and mobile development
          </p>
          <p className="w-full md:w-auto bg-gray-800/80 px-3 sm:px-4 md:px-6 py-2 rounded-md border border-gray-700 text-xs sm:text-sm md:text-base text-gray-100 hover:bg-gray-700/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-600">
            ✓ Agile methodologies for rapid delivery
          </p>
          <p className="w-full md:w-auto bg-gray-800/80 px-3 sm:px-4 md:px-6 py-2 rounded-md border border-gray-700 text-xs sm:text-sm md:text-base text-gray-100 hover:bg-gray-700/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-600">
            ✓ Ongoing support and maintenance
          </p>
        </div>
      </div>
    </section>
  )
}