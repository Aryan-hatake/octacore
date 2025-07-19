"use client"
import React, { memo, Suspense, lazy, useState, useEffect } from 'react'

// Lazy load Spline component to reduce initial bundle size
const Spline = lazy(() => import('@splinetool/react-spline'))

// Fallback component for Spline loading
const SplineFallback = memo(() => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg flex items-center justify-center">
    <div className="flex flex-col items-center space-y-4">
      <div className="w-12 h-12 border-3 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
      <span className="text-white/60 text-sm font-medium">Loading 3D Experience...</span>
    </div>
  </div>
))

SplineFallback.displayName = 'SplineFallback'

// Error boundary component for Spline
const SplineErrorFallback = memo(() => (
  <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg flex items-center justify-center">
    <div className="text-center">
      <div className="text-white/70 text-lg mb-2">3D Experience</div>
      <div className="text-white/50 text-sm">Optimized for your device</div>
    </div>
  </div>
))

SplineErrorFallback.displayName = 'SplineErrorFallback'

// Optimized Spline wrapper with universal device support
const SplineWrapper = memo(() => {
  const [hasError, setHasError] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [deviceSettings, setDeviceSettings] = useState({})

  useEffect(() => {
    // Detect device capabilities for performance optimization only
    const isLowEndDevice = navigator.hardwareConcurrency <= 4 || navigator.deviceMemory <= 4
    const isMobile = window.innerWidth < 768
    
    // Configure performance settings (but keep same URL and quality)
    const settings = {
      pixelRatio: isLowEndDevice ? 1 : Math.min(window.devicePixelRatio || 1, 2),
      renderOnDemand: isLowEndDevice, // Only render when interaction/change occurs
      powerPreference: isLowEndDevice ? 'low-power' : 'high-performance'
    }
    
    setDeviceSettings(settings)
    
    // Use intersection observer for performance - load when visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    )
    
    const element = document.getElementById('spline-container')
    if (element) observer.observe(element)
    
    return () => observer.disconnect()
  }, [])

  if (hasError) {
    return <SplineErrorFallback />
  }

  if (!shouldLoad) {
    return <SplineFallback />
  }

  return (
    <Suspense fallback={<SplineFallback />}>
      <Spline
        scene="https://prod.spline.design/hkdCwXAoTRA7kli8/scene.splinecode"
        onError={() => setHasError(true)}
        style={{ 
          width: '100%', 
          height: '100%',
          // Optimize rendering performance without changing visual quality
          transform: 'translateZ(0)', // Hardware acceleration
          backfaceVisibility: 'hidden',
          willChange: 'transform' // Optimize for animations
        }}
        // Performance optimization props (no quality/URL changes)
        renderOnDemand={deviceSettings.renderOnDemand}
        pixelratio={deviceSettings.pixelRatio}
        powerpreference={deviceSettings.powerPreference}
      />
    </Suspense>
  )
})

SplineWrapper.displayName = 'SplineWrapper'

// Memoized text content to prevent unnecessary re-renders
const ArticleContent = memo(() => {
  // Split long text for better readability and performance
  const aboutText = "Octacore Fitness in Nerul, Navi Mumbai is a leading name in the Gyms industry, catering to a wide range of categories. Established in 02-2020, this well-established fitness center has built a solid reputation for excellence and customer satisfaction, with a rating of 4.7 based on 182 customer reviews."
  
  const hoursText = "The center operates from Monday:- 10:00 am - 10:00 pm, Tuesday:- 10:00 am - 10:00 pm, Wednesday:- 10:00 am - 10:00 pm, Thursday:- 10:00 am - 10:00 pm, Friday:- 10:00 am - 10:00 pm, Saturday:- 10:00 am - 10:00 pm, Sunday:- 10:00 am - 10:00 pm, providing a comprehensive fitness experience for all clients."

  return (
    <div className="flex flex-col gap-5 w-fit " data-aos="fade-right">
      <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold bg-gradient-to-b from-orange-400 to-orange-800 bg-clip-text text-transparent min-w-fit text-shadow-[-2px_-1px_6px_#b1751a]">
        Why Us?
      </h1>
      <div className="ml-4 lg:w-fit w-full text-sm h-[60%] space-y-4">
        <p>{aboutText}</p>
        <p>{hoursText}</p>
      </div>
    </div>
  )
})

ArticleContent.displayName = 'ArticleContent'

// Main optimized component
const Article = memo(() => {
  return (
    <article className="lg:mt-30 relative w-[80vw] h-fit flex flex-col gap-8 xl:flex-row justify-between">
      <ArticleContent />
      <div 
        id="spline-container"
        className="relative xl:-top-40 w-full overflow-hidden xl:w-[40vw] h-[60vh]" data-aos="zoom-in-left"
      >
        <SplineWrapper />
      </div>
    </article>
  )
})

Article.displayName = 'Article'

export default Article