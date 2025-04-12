'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '@/public/logo.png'
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [activeSection, setActiveSection] = useState('services')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 'bg-black ' `}>
      <div className="w-full bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3.5">
            {/* Left - Brand Name */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-black p-3 rounded-lg inline-flex items-center justify-center">
  <Image 
    src={logo} 
    width={200} 
    height={50} 
    alt='Logo'
    style={{
      filter: 'brightness(0) invert(1)' 
    }}
  />
</div>            </Link>

            {/* Middle - Navigation */}
            <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-gray-900 md:bg-transparent border-t md:border-t-0 border-gray-800`}>
              <div className="flex flex-col md:flex-row items-center md:bg-gray-800 md:rounded-full md:px-3 md:py-1.5 space-y-4 md:space-y-0 md:space-x-2 p-4 md:p-0 w-full md:w-auto">
                <Link 
                  href="#services" 
                  className={`px-4 py-2 rounded-full transition-colors duration-200 font-medium ${activeSection === 'services' ? 'bg-gray-700 text-white shadow-sm' : 'text-gray-300 hover:text-white'}`}
                  onClick={() => setActiveSection('services')}
                >
                  Services
                </Link>
                <Link 
                  href="#works" 
                  className={`px-4 py-2 rounded-full transition-colors duration-200 font-medium ${activeSection === 'works' ? 'bg-gray-700 text-white shadow-sm' : 'text-gray-300 hover:text-white'}`}
                  onClick={() => setActiveSection('works')}
                >
                  Our Work
                </Link>
                <Link 
                  href="#pricing" 
                  className={`px-4 py-2 rounded-full transition-colors duration-200 font-medium ${activeSection === 'pricing' ? 'bg-gray-700 text-white shadow-sm' : 'text-gray-300 hover:text-white'}`}
                  onClick={() => setActiveSection('pricing')}
                >
                  Pricing
                </Link>
                <Link 
                  href="#faqs" 
                  className={`px-4 py-2 rounded-full transition-colors duration-200 font-medium ${activeSection === 'faqs' ? 'bg-gray-700 text-white shadow-sm' : 'text-gray-300 hover:text-white'}`}
                  onClick={() => setActiveSection('faqs')}
                >
                  FAQ
                </Link>
              </div>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                className="md:hidden text-gray-300 hover:text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>

              {/* Right - CTA Button */}
              <div className="hidden md:block">
                <Link 
                  href="#contact" 
                  className="bg-white text-black px-8 py-3 text-lg rounded-full hover:bg-gray-200 transition-colors duration-200 font-medium shadow-md hover:shadow-lg inline-block relative overflow-hidden text-center w-[160px]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="relative h-[24px] w-full">
                    <span className={`absolute left-0 right-0 transition-all duration-300 tracking-tight ${isHovered ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}>
                      Book Call
                    </span>
                    <span className={`absolute left-0 right-0 transition-all duration-300 tracking-tight ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                      Let's Talk
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}