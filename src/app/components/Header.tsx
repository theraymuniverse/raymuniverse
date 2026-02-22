'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu, FiX } from 'react-icons/fi'
import Image from 'next/image'
import logo from '@/public/logo.png'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Logo"
            width={160}
            height={50}
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 font-medium text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="relative inline-block px-6 py-2.5 rounded-full btn-primary font-semibold shadow-lg overflow-hidden group"
          >
            <span className="absolute inset-0 btn-primary opacity-0 group-hover:opacity-100 transition duration-300"></span>
            <span className="relative z-10">Contact Us</span>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="text-gray-300 hover:text-white transition"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 text-white flex flex-col items-center py-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium hover:text-gray-400 transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-2 px-8 py-2.5 rounded-full btn-primary font-semibold transition"
          >
Contact Us          </Link>
        </div>
      )}
    </header>
  )
}