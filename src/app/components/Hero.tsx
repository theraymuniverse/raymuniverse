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
    <section className="relative text-center pt-28 sm:pt-32 pb-10 sm:pb-20 bg-black" id='hero'>
      <div className="max-w-5xl mx-auto px-4">
        {/* <Link href="#contact" className="inline-flex items-center gap-3 bg-blue-900 border border-blue-700 text-white px-2 py-1.5 rounded-md text-sm font-medium mb-8 hover:bg-blue-800 transition-colors duration-200">
          <span className="bg-white text-black px-2 py-0.5 rounded text-xs font-semibold">NEW</span>
          BOOK A SLOT NOW
          <BsArrowRight className="text-gray-300" />
        </Link> */}
        
        <h1 className="text-6xl font-bricolage sm:text-7xl font-black mb-4 sm:mb-6 pt-28 leading-tight text-white ">
          <span 
            className="inline-flex items-center justify-center bg-amber-500 rounded-lg transform -rotate-3 p-2 mr-2 transition-all duration-300"
            onMouseEnter={() => handleIconHover('code', 'left')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <FaCode className={`text-white text-[0.68em] transition-all duration-300 ${iconAnimation('code')}`} />
          </span>
          Your Favourite Product 
          <span 
            className="inline-flex items-center justify-center bg-blue-600 rounded-lg transform rotate-3 p-2 mx-2 transition-all duration-300"
            onMouseEnter={() => handleIconHover('laptop', 'right')}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <FaLaptopCode className={`text-white text-[0.68em] transition-all duration-300 ${iconAnimation('laptop')}`} />
          </span> 
          Development Partner 
         
        </h1>
        
        <p className="text-sm sm:text-base font-normal sm:font-medium mb-8 sm:mb-12 mx-auto md:max-w-2xl text-gray-300">
          We're a product development partner that specializes in building web and mobile apps, software, and branding for startups and individuals, we're not just involved to build but also in your business goals.
        </p>
        
        <div className="flex justify-center space-x-4 mb-12 sm:mb-16">
          <Link href="#contact" className="inline-block bg-white hover:bg-gray-200 text-black px-6 sm:px-8 py-2.5 sm:py-3.5 font-semibold text-sm sm:text-base rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
            Book a Call
          </Link>
          <Link 
            href="#works" 
            className="inline-block bg-transparent hover:bg-gray-800 text-white px-6 sm:px-8 py-2.5 sm:py-3.5 font-semibold text-sm sm:text-base rounded-full border border-white transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-1/2 after:-translate-x-1/2 after:bottom-3 hover:after:w-[calc(100%-50%)] after:transition-all after:duration-300 hover:scale-[1.02]"
          >
            Explore Portfolio
          </Link>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
  <p className="bg-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-md border border-gray-700 text-sm sm:text-base text-gray-100 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-600">
    ✓ Expertise in web and mobile development
  </p>
  <p className="bg-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-md border border-gray-700 text-sm sm:text-base text-gray-100 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-600">
    ✓ Agile methodologies for rapid delivery
  </p>
  <p className="bg-gray-800 px-4 sm:px-6 py-2 sm:py-3 rounded-md border border-gray-700 text-sm sm:text-base text-gray-100 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-gray-600">
    ✓ Ongoing support and maintenance
  </p>
</div>

      </div>
    </section>
  )
}