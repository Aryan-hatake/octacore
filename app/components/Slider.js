"use client"
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md"

// Lazy load GSAP only when needed
const loadGSAP = async () => {
  const { default: gsap } = await import('gsap')
  return gsap
}

export default React.memo(function Slider(){
  // Memoize video array to prevent re-creation on every render
  const videoArray = useMemo(() => ["/v1.mp4", "/v2.mp4", "/v3.mp4"], [])
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const gsapRef = useRef(null)
  
  // Memoize adjacent indices calculation
  const { leftIndex, rightIndex } = useMemo(() => {
    const length = videoArray.length
    return {
      leftIndex: (currentIndex + 1) % length,
      rightIndex: (currentIndex - 1 + length) % length
    }
  }, [currentIndex, videoArray.length])

  // Optimized navigation functions
  const goToNext = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % videoArray.length)
  }, [videoArray.length])

  const goToPrev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + videoArray.length) % videoArray.length)
  }, [videoArray.length])

  // Optimized touch handlers
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const handleTouchMove = useCallback((e) => {
    touchEndX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback(() => {
    const swipeThreshold = 50
    const swipeDistance = touchStartX.current - touchEndX.current
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        goToNext()
      } else {
        goToPrev()
      }
    }
  }, [goToNext, goToPrev])

  // Optimized GSAP animation with lazy loading
  useEffect(() => {
    const animateSlider = async () => {
      if (!gsapRef.current) {
        gsapRef.current = await loadGSAP()
      }
      
      const gsap = gsapRef.current
      
      // Use requestIdleCallback for better performance
      if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(() => {
          gsap.fromTo(".middleimg", 
            { x: -200, opacity: 0, scale: 0.6 },
            { x: 0, opacity: 1, scale: 1, duration: 0.5 }
          )
          gsap.fromTo(".leftimg", 
            { x: 600, opacity: 0, scale: 0.6 },
            { x: 0, opacity: 1, scale: 1, duration: 0.5 }
          )
          gsap.fromTo(".rightimg", 
            { x: 600, opacity: 0, scale: 0.6 },
            { x: 0, opacity: 1, scale: 1, duration: 0.5 }
          )
        })
      } else {
        // Fallback for browsers without requestIdleCallback
        requestAnimationFrame(() => {
          gsap.fromTo(".middleimg", 
            { x: -200, opacity: 0, scale: 0.6 },
            { x: 0, opacity: 1, scale: 1, duration: 0.5 }
          )
          gsap.fromTo(".leftimg", 
            { x: 600, opacity: 0, scale: 0.6 },
            { x: 0, opacity: 1, scale: 1, duration: 0.5 }
          )
          gsap.fromTo(".rightimg", 
            { x: 600, opacity: 0, scale: 0.6 },
            { x: 0, opacity: 1, scale: 1, duration: 0.5 }
          )
        })
      }
    }

    animateSlider()
  }, [currentIndex])

  // Memoized video component to prevent unnecessary re-renders
// ✅ Replace the VideoElement with this:
const VideoElement = React.memo(function VideoElement({ src, className }) {
  return (
    <video 
      src={src} 
      className={className}
      autoPlay 
      muted 
      loop 
      playsInline
      preload="metadata"
    />
  )
})

  return (
    <div className='flex flex-col mt-10 xl:mt-0 xl:relative xl:-top-30 mb-10 gap-5 justify-center items-center' data-aos="fade-left">
      <div className='w-[95vw] mx-3 lg:w-[75vw] flex justify-center items-center'>
        
        {/* Left Arrow Button */}
        <button
          className="relative hidden md:block -right-2 z-10 bg-black/30 hover:bg-black/50 text-white text-4xl p-3 rounded-full shadow-md transition-all duration-300"
          onClick={goToPrev}
          aria-label="Previous video"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>

        {/* Video Container */}
        <div 
          className='h-fit lg:w-[70vw] w-[100vw] overflow-hidden flex flex-col justify-center items-center gap-5'
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className='flex justify-center items-center gap-5'>
            
            {/* Left Video */}
            <div className='leftimg md:h-[400px] h-[200px] w-[100px] saturate-0 skew-x-[22deg] rotate-y-30 md:w-[300px] bg-yellow-900 relative rounded-2xl'>
              <VideoElement 
                src={videoArray[leftIndex]} 
                className='h-full w-full object-cover object-center rounded-2xl blur-sm saturate-0' 
              />
            </div>

            {/* Middle Video (Main) */}
            <div className='middleimg my-2 md:h-[450px] h-[250px] w-[280px] md:w-[500px] bg-blue-300 relative z-1 rounded-2xl ring-white ring-1 shadow-[1px_1px_12px_6px_black]'>
              <VideoElement 
                src={videoArray[currentIndex]} 
                className='h-full w-full object-cover object-center rounded-2xl' 
              />
            </div>

            {/* Right Video */}
            <div className='rightimg md:h-[400px] h-[200px] w-[100px] md:w-[300px] rounded-2xl skew-x-[-22deg] rotate-y-30 bg-orange-900 relative'>
              <VideoElement 
                src={videoArray[rightIndex]} 
                className='h-full w-full object-cover object-center rounded-2xl blur-sm saturate-0' 
              />
            </div>
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          className="bg-black/30 -left-2 relative hidden md:block z-10 hover:bg-black/50 text-white text-4xl p-3 rounded-full shadow-md transition-all duration-300"
          onClick={goToNext}
          aria-label="Next video"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </div>
  )
})
