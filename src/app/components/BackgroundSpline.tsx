'use client'

import { useEffect, useRef, useState } from 'react'
import { Suspense } from 'react'

function SplineContent() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let app: { dispose?: () => void } | null = null
    let mounted = true

    const loadSpline = async () => {
      try {
        const { Application } = await import('@splinetool/runtime')
        if (!canvasRef.current || !mounted) return
        
        app = new Application(canvasRef.current)
        await (app as any).load(
          'https://prod.spline.design/kVRGrD0B5R1fJWdO/scene.splinecode'
        )
        
        if (mounted) setIsLoaded(true)
      } catch (error) {
        console.error('Failed to load Spline:', error)
        if (mounted) setIsLoaded(true) // Show content even if Spline fails
      }
    }

    // Add small delay to ensure visible before loading heavy library
    const timer = setTimeout(() => {
      if (mounted) loadSpline()
    }, 100)

    return () => {
      mounted = false
      clearTimeout(timer)
      if (app?.dispose) {
        try {
          app.dispose()
        } catch (e) {
          console.error('Error disposing Spline:', e)
        }
      }
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      {/* Canvas with fade-in */}
      <div 
        className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      {/* Loading skeleton - fade out when loaded */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 animate-pulse" />
      )}

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
    </div>
  )
}

export default function BackgroundSpline() {
  return (
    <Suspense fallback={
      <div className="absolute inset-0 z-0 w-full h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
    }>
      <SplineContent />
    </Suspense>
  )
}