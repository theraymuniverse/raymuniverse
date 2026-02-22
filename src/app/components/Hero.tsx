'use client'

import Link from 'next/link'
import BackgroundSpline from './BackgroundSpline'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background */}
      <BackgroundSpline />

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl px-6 sm:px-10">

        {/* Top Badge (like “Applications open now”) */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur">
            <span className="w-2 h-2 rounded-full btn-primary animate-pulse" />
             Open for projects
          </span>
        </div>

        {/* Hero Heading */}
        <h1
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem]
            font-semibold text-white
            tracking-tight
            leading-[1.05]
            max-w-5xl mx-auto
          "
        >
          <span className="block">
            We Build The Product.
          </span>

          <span className="block text-primary mt-3">
            You Build The Company.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
          We build MVPs and digital products for early-stage startups — design, development, AI automation and motion, all under one roof.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contact"
            className="px-8 py-3 rounded-full font-semibold btn-primary text-black hover:opacity-90 transition shadow-lg"
          >
Contact Us          </Link>

          <Link
            href="#portfolio"
            className="px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition"
          >
            Explore Portfolio
          </Link>
        </div>

      </div>
    </section>
  )
}