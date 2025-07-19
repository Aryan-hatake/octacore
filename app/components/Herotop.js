"use client"

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const AOSLoader = dynamic(() => import('aos').then(module => {
  import('aos/dist/aos.css')
  return { default: module.default }
}), { ssr: false })

const Herotop = () => {
  const [hover, setHover] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef(null)
  const observerRef = useRef(null)

  // Memoized container size classes
  const containerSizeClasses = useMemo(() => 
    'w-[96%] h-[60%] md:h-[70%] lg:h-full', []
  )

  // Optimized connection check
  const checkConnection = useCallback(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
    return connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')
  }, [])

  // Optimized mobile check
  const checkMobile = useCallback(() => {
    return window.innerWidth < 768
  }, [])

  useEffect(() => {
    // Check mobile and connection once
    const isSlowConnection = checkConnection()
    setIsMobile(checkMobile())
    
    // Don't load video on very slow connections
    if (isSlowConnection) {
      setVideoError(true)
      return
    }

    // Optimized intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowVideo(true)
          // Use requestIdleCallback for better performance
          if (typeof requestIdleCallback !== 'undefined') {
            requestIdleCallback(() => {
              setTimeout(() => setVideoLoaded(true), 100)
            })
          } else {
            setTimeout(() => setVideoLoaded(true), 100)
          }
          observerRef.current?.disconnect()
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px' // Start loading well before element is visible
      }
    )
    
    if (videoRef.current) {
      observerRef.current.observe(videoRef.current)
    }
    
    return () => observerRef.current?.disconnect()
  }, [checkConnection, checkMobile])

  // Optimized hover handlers
  const handleMouseEnter = useCallback(() => setHover(true), [])
  const handleMouseLeave = useCallback(() => setHover(false), [])
  const handleTouchStart = useCallback(() => setHover(true), [])
  const handleTouchEnd = useCallback(() => setHover(false), [])

  // Optimized video error handler
  const handleVideoError = useCallback(() => {
    setVideoError(true)
    setVideoLoaded(false)
  }, [])

  // Optimized video ready handler
  const handleVideoReady = useCallback((e) => {
    e.target.style.opacity = '1'
  }, [])

  // Memoized loading placeholder - simplified for faster render


  // Memoized error fallback - simplified
  const ErrorFallback = useMemo(() => (
    <div className={`rounded-2xl bg-gray-900 ${containerSizeClasses}`}></div>
  ), [containerSizeClasses])
  
     useEffect(() => {
       // Initialize AOS only on client side and delay it
       const initAOS = async () => {
         const AOS = await import('aos')
         await import('aos/dist/aos.css')
         AOS.init({
          
         })
       }
       
       // Delay AOS initialization to not block initial render
       const timer = setTimeout(initAOS, 100)
       return () => clearTimeout(timer)
     }, [])
  return (
    <div className='w-full h-[60vh] relative lg:mt-10 flex justify-center items-center rounded-4xl' ref={videoRef}>
 

        <video 
          src="/bg2.mp4" 
          autoPlay 
          muted 
          loop 
          className={`rounded-2xl object-cover object-center ${containerSizeClasses} opacity-0 transition-opacity duration-300 ease-in-out`}
          preload="auto"
          playsInline
          fetchPriority="high"
          onError={handleVideoError}
          onCanPlay={handleVideoReady}
          poster="/poster.webp"
          crossOrigin="anonymous"
       
         
          {...(isMobile && { 
            style: { 
              filter: 'brightness(0.95)',
              transform: 'scale(0.99)' 
            } 
          })}
        />
      
      
      {/* Error fallback */}
      {videoError && ErrorFallback}
      
      {/* Optimized overlay - simplified */}
      <div 
        className={`bg-black ${containerSizeClasses} absolute rounded-2xl transition-opacity duration-200`}
        style={{ opacity: hover ? 0.4 : 0 }}
      />
      
      {/* LCP-OPTIMIZED TEXT CONTENT - This is the critical element */}
<div className="absolute h-fit bottom-18 md:bottom-20 lg:-bottom-[28px] left-3 md:left-20" >
  {/* Preload critical font styles inline */}
  <style jsx>{`
    .hero-text {
      font-family: 'Lexend Exa', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 800;
      line-height: 0.9;
      letter-spacing: -0.02em;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .hero-gradient {
      background: linear-gradient(180deg, #fb923c 0%, #9a3412 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    @media (max-width: 1024px) {
      .hero-text { font-size: 3rem; }
    }
    @media (min-width: 1024px) {
      .hero-text { font-size: 4.5rem; }
    }
    @media (min-width: 1280px) {
      .hero-text { font-size: 6rem; }
    }
  `}</style>
         
  <h1 className="hero-text text-white">
    BE <span className='hero-gradient'>FIT</span>
  </h1>
  <h1 className="hero-text text-white">CHOOSE</h1>
  <h1 className="hero-text hero-gradient">
    OCTACORE
  </h1>
</div>
      {/* Optimized CTA Button - lower priority */}
      <Link href='/Plans'>
      <button 
        className='absolute ring-1 lg:p-4 p-2 cursor-pointer lg:right-40 right-6 text-[8px] lg:text-lg bottom-40 lg:bottom-40 bg-transparent text-white border-white hover:bg-orange-500 hover:border-orange-500 hover:ring-orange-500 active:bg-orange-600 active:border-orange-600 active:ring-orange-600 active:scale-95 transition-colors duration-200 font-medium'
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        suppressHydrationWarning={true}
        >
        JOIN NOW
      </button>
        </Link>
    </div>
  )
}

// Export with React.memo for performance
export default React.memo(Herotop)