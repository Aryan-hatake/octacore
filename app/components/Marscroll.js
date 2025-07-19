"use client"

import React, { useMemo } from 'react'
import Image from 'next/image'
import Marquee from "react-fast-marquee";

export default function Marscroll(){
  // Memoize card data to prevent re-creation on every render
  const cardData = useMemo(() => [
    {
      id: 1,
      name: "Prathamesh Vaity",
      url: "/pratamesh.png",
      post: "Amazing Place for workout.. Variety of Machines.. Excellent Trainers",
      year: "3 years ago"
    },
    {
      id: 2,
      name: "Tushar Mhatre",
      url: "/tushar.png",
      post: `Firstly when we visit the gym for enquiry, they are very warm with their approach, listens and answers all our queries. Also their trainer walks you through the gym and also are good to talk and patient enough, any queries they help them resolve.
      Talking about the Gym and equipments,
      It's been quite a time that i have joined the gym and would like to share that its just too good, trainers here are helpful also the other members are quite helpful. Even the female members are very comfortable in their workout. Equipments and other facilities are up to the mark. In terms of price would say i have visited many places near by and also far from area but they offer a great deal, i joined during their ongoing offer(lucky me).Would highly recommend this gym with such good facilities and such price. Walk through for enquiry you will understand what i'm trying to stay..

      Stay Fit Stay Healthy. Amazing Place for workout.. Variety of Machines.. Excellent Trainers`,
      year: "a year ago"
    },
    {
      id: 3,
      name: "rutu security",
      url: "/rutu.png",
      post: `Believe me this is one of the best gyms in Nerul. Very clean and staff is very friendly. Trainers are well trained and are always ready to help. No negative point found. Rates are also reasonable.`,
      year: "3 years ago"
    },
    {
      id: 4,
      name: "Sanika Desai",
      url: "/sanika.png",
      post: `Amazing gym with all the necessary equipments. Certified trainers always available for proper guidance. Overall the gym has a very positive environment. Hence, a great place to work out..`,
      year: "3 years ago"
    },
    {
      id: 5,
      name: "Vicky Nadar",
      url: "/vicky.png",
      post: `Octacore fitness is one of the finest gym in Nerul hands down. It's a unisex gym.
             Females can be tension free about the locality as there are no gaav wala's. (No Offense)
             I wanted a gym which is nearby to the connecting sectors like sec 15, 11, 3, 9, 1 inshort Nerul east side.
             Octacore fitness has all the equipments which is needed for building proper body and they have best of trainers who supports and guide you anytime in a best way.
             I love the atmosphere in here and feels good to workout. People has the wrong perception about the area but trust my words there are all descent people around in the gym.
             I just wanna thank them for providing such nice space for peaceful workout.`,
      year: "5 years ago"
    },
  ], []);

  // Memoize the feedback header component to prevent re-renders
  const FeedbackHeader = useMemo(() => (
    <div className='feedback flex justify-center items-center gap-3 w-fit'>
      <Image 
        src="/octa.webp" 
        alt='logo' 
        width={50} 
        height={50}
        priority={false}
        loading="lazy"
      />
      <div className='bg-gradient-to-tr from-gray-200 to-orange-800 w-fit text-transparent bg-clip-text lg:text-3xl'>
        OUR MEMBER&apos;S FEEDBACK
      </div>
      <Image 
        src="/octa.webp" 
        alt='logo' 
        width={50} 
        height={50}
        priority={false}
        loading="lazy"
      />
    </div>
  ), []);

  // Memoize star rating component
  const StarRating = useMemo(() => (
    <div className='rating pl-2 flex gap-2'>
      {[...Array(5)].map((_, index) => (
        <Image 
          key={index}
          src='/star.png' 
          width={20} 
          height={20} 
          alt='rating star' 
          className='py-4'
          priority={false}
          loading="lazy"
        />
      ))}
    </div>
  ), []);

  // Memoize card component to prevent unnecessary re-renders
  const TestimonialCard = React.memo(function TestimonialCard({ item, index}) {
  return (
    <div
      key={item.id}
      className='lg:w-[400px] lg:h-[300px] w-[300px] h-[250px] border border-[#bcbeff]/20 bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-5'
    >
      <div className='top flex gap-4 lg:gap-8'>
        <Image
          src={item.url}
          alt={`${item.name} profile picture`}
          width={48}
          height={48}
          className='h-12 w-12 lg:h-15 lg:w-15 rounded-full object-cover'
          priority={false}
          loading="lazy"
        />
        <div className='flex flex-col'>
          <span className='lg:text-2xl text-white text-shadow-[2px_1px_14px_black] text-lg self-start'>
            {item.name}
          </span>
          <span className='font-light text-sm text-gray-300'>
            {item.year}
          </span>
        </div>
      </div>
      {StarRating}
      <div className='para w-[90%] h-[45%] line-clamp-5 text-white overflow-hidden'>
        {item.post}
      </div>
    </div>
  )}, [StarRating])

  return (
    <div className='dada mb-10 ' data-aos="fade-zoom-in">
      {/* Header Marquee */}
      <div className="textpapa flex gap-10 w-[90vw] mb-10 overflow-hidden">
        <Marquee direction="left" speed={50}>
          <div className='flex gap-10 px-5'>
            {/* Render 5 feedback headers */}
            {[...Array(5)].map((_, index) => (
              <div key={index}>
                {FeedbackHeader}
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Testimonials Marquee */}
      <div className='boxpapa w-[90vw] overflow-hidden'>
        <Marquee direction="right" speed={80} pauseOnHover={true}>
          <div className='flex gap-10 px-5'>
            {cardData.map((item, index) => (
              <TestimonialCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  )
}

