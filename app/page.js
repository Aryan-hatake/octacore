"use client"
import React from 'react'
import Navbar from './components/Navbar'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

// Load only hero immediately, rest on viewport intersection
const LazyHero = dynamic(() => import('./components/Herotop'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-[500px] w-full">
      <div className="animate-pulse bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg w-full h-96"></div>
    </div>
  )
})

// These load only when needed (viewport intersection)
const LazySpline = dynamic(() => import('./components/article'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-gray-100"></div>
})

const LazySlider = dynamic(() => import('./components/Slider'), {
  ssr: false,
  loading: () => <div className="min-h-[300px] bg-gray-100"></div>
})

const LazyMarscroll = dynamic(() => import('./components/Marscroll'), {
  ssr: false,
  loading: () => <div className="min-h-[200px] bg-gray-100"></div>
})

const LazyFooter = dynamic(() => import('./components/Footer'), {
  ssr: false,
  loading: () => <div className="w-full h-32 bg-gray-100"></div>
})

export default function App() {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-gradient-to-bl from-black to-orange-600'>
      {/* Navbar loads immediately - most important for navigation */}
      <Navbar />
      
      {/* Wrap each lazy component in Suspense for better error handling */}
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[500px] w-full">
          <div className="animate-pulse bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg w-full h-96"></div>
        </div>
      }>
        <LazyHero />
      </Suspense>
      
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        </div>
      }>
        <LazySpline />
      </Suspense>
      
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[300px]">
          <div className="animate-pulse bg-gray-300 rounded-lg w-full h-64"></div>
        </div>
      }>
        <LazySlider />
      </Suspense>
      
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-[200px]">
          <div className="animate-pulse bg-gray-300 rounded w-full h-32"></div>
        </div>
      }>
        <LazyMarscroll />
      </Suspense>
      
      <Suspense fallback={
        <div className="w-full h-32 bg-gray-200 animate-pulse"></div>
      }>
        <LazyFooter />
      </Suspense>
    </div>
  )
}