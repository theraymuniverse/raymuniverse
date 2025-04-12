"use client"
import { FaHeadset } from 'react-icons/fa'
import { MdContentCopy, MdCheck } from 'react-icons/md'
import { useState } from 'react'
import logo from '@/public/logo.png'
import Link from 'next/link'
import Image from 'next/image'


export default function Footer() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('info@allbrandi.ng')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <section className="bg-black py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's create something amazing together :)</h2>
          <a href="https://cal.com/danielbryte/15min" className="inline-flex items-center bg-blue-500 text-white px-8 py-3 rounded-lg text-xl font-semibold hover:bg-blue-600 transition-colors duration-300 shadow-lg">
            <FaHeadset className="mr-2" />
            Book a Call
          </a>
        </div>
      </section>
      <footer className="bg-black text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-1">
                <Link href="/" className="flex-shrink-0 flex items-center">
                  <div className="bg-black rounded-lg -ml-1 inline-flex items-center justify-center">
                    <Image 
                      src={logo} 
                      width={200} 
                      height={50} 
                      alt='Logo'
                      style={{
                        filter: 'brightness(0) invert(1)' 
                      }}
                    />
                  </div>
                </Link>
              </div>
              <p className="text-base my-2 max-w-md text-neutral-300">We specialize in end-to-end product development including UI/UX design, branding, and full-stack development tailored for startups and growing businesses.</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={copyEmail}
                  className="text-neutral-50 hover:text-neutral-100 transition-colors duration-300 mr-1"
                  title={copied ? "Copied!" : "Copy email"}
                >
                  {copied ? <MdCheck size={15} /> : <MdContentCopy size={15} />}
                </button>
                <p className="text-base text-neutral-400">info@raymuniverse.com</p>
              </div>
              <p className="text-sm mt-4 text-neutral-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link href="#hero" className="text-xl font-semibold hover:text-gray-300 transition-colors duration-300">Home</Link>
              <Link href="#services" className="text-xl font-semibold hover:text-gray-300 transition-colors duration-300">Services</Link>
              <Link href="#works" className="text-xl font-semibold hover:text-gray-300 transition-colors duration-300">Portfolio</Link>
              <Link href="#contact" className="text-xl font-semibold hover:text-gray-300 transition-colors duration-300">Contact</Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  )
}