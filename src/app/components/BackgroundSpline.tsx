'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundSpline() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let app: { dispose?: () => void } | null = null

    const loadSpline = async () => {
      const { Application } = await import('@splinetool/runtime')
      if (!canvasRef.current) return
      app = new Application(canvasRef.current)
      await (app as any).load(
        'https://prod.spline.design/kVRGrD0B5R1fJWdO/scene.splinecode'
      )
    }

    loadSpline()

    return () => {
      if (app?.dispose) app.dispose()
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0 w-full h-full">
      <div className="absolute inset-0 w-full h-full">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
    </div>
  )
}