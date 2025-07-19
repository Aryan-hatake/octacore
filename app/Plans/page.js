"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar2 from './Navbar2';


const Page = () => {
  const [selectedPlan, setSelectedPlan] = useState('original');

  // SVG Icons
  const CheckIcon = () => (
    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  const XIcon = () => (
    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );

  const ZapIcon = () => (
    <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
    </svg>
  );

  const CrownIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
    </svg>
  );

  const StarIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const ClockIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
    </svg>
  );

  const plansforhim = {
    original: {
      title: 'Original',
      subtitle: 'Premium Experience',
      icon: <CrownIcon />,
      color: 'from-amber-400 to-orange-500',
      borderColor: 'border-amber-400',
      bgGradient: 'from-amber-400/20 to-orange-500/20',
      features: ['AC Climate Control', '24/7 Access', 'All Equipment', 'Personal Training Area'],
      pricing: {
        yearly: { price: 12000, savings: '75% off' },
        halfYearly: { price: 10000, savings: '58.33% off' },
        quarterly: { price: 8000, savings: '33.3% off' },
        monthly: { price: 4000, savings: null }
      }
    },
    discounted: {
      title: 'Discounted',
      subtitle: 'All Essentials',
      icon: <StarIcon />,
      color: 'from-blue-400 to-purple-500',
      borderColor: 'border-blue-400',
      bgGradient: 'from-blue-400/20 to-purple-500/20',
      features: ['AC Climate Control', '24/7 Access', 'All Equipment', 'Group Classes'],
      pricing: {
          yearly: {
    price: 10000,
    savings: 'Best Value'
  },
  halfYearly: {
    price: 8000,
    savings: '55.56% off (↑13.89% more)'
  },
  quarterly: {
    price: 6000,
    savings: '33.33% off (↑16.67% more)'
  },
  monthly: {
    price: 3000,
    savings: null
  }
      }
    },
    happyHour: {
      title: 'Happy Hour',
      subtitle: '12 PM - 5 PM',
      icon: <ClockIcon />,
      color: 'from-green-400 to-teal-500',
      borderColor: 'border-green-400',
      bgGradient: 'from-green-400/20 to-teal-500/20',
      features: ['Limited Hours (12-5 PM)', 'No AC', 'All Equipment', 'Budget Friendly'],
      pricing: {
        yearly: { price: 9000, savings: '62.5% off' },
        halfYearly: { price: 7000, savings: '41.67% of' },
        quarterly: { price: 5000, savings: '16.67% off' },
        monthly: { price: 2000, savings: null }
      }
    }
  };
const plansforher = {
  original: {
    title: 'Original',
    subtitle: 'Premium Experience',
    icon: <CrownIcon />,
    color: 'from-amber-400 to-orange-500',
    borderColor: 'border-amber-400',
    bgGradient: 'from-amber-400/20 to-orange-500/20',
    features: ['AC Climate Control', '24/7 Access', 'All Equipment', 'Personal Training Area'],
    pricing: {
      yearly: { price: 12000, savings: '75% off' }, // (48000 - 12000) / 48000
      halfYearly: { price: 10000, savings: '58.33% off' },        // (24000 - 10000) / 24000
      quarterly: { price: 8000, savings: '33.33% off' },          // (12000 - 8000) / 12000
      monthly: { price: 4000, savings: null }                     // Base
    }
  },
  discounted: {
    title: 'Discounted',
    subtitle: 'All Essentials',
    icon: <StarIcon />,
    color: 'from-blue-400 to-purple-500',
    borderColor: 'border-blue-400',
    bgGradient: 'from-blue-400/20 to-purple-500/20',
    features: ['AC Climate Control', '24/7 Access', 'All Equipment', 'Group Classes'],
    pricing: {
      yearly: { price: 9000, savings: 'Best Value' },    // (48000 - 9000) / 48000
      halfYearly: { price: 7000, savings: '70.83% off' },// (24000 - 7000) / 24000
      quarterly: { price: 5000, savings: '58.33% off' }, // (12000 - 5000) / 12000
      monthly: { price: 2000, savings: '50% off' }       // (4000 - 2000) / 4000
    }
  },
  happyHour: {
    title: 'Happy Hour',
    subtitle: '12 PM - 5 PM',
    icon: <ClockIcon />,
    color: 'from-green-400 to-teal-500',
    borderColor: 'border-green-400',
    bgGradient: 'from-green-400/20 to-teal-500/20',
    features: ['Limited Hours (12-5 PM)', 'No AC', 'All Equipment', 'Budget Friendly'],
    pricing: {
      yearly: { price: 8000, savings: '83.33% off' },    // (48000 - 8000) / 48000
      halfYearly: { price: 6000, savings: '75% off' },   // (24000 - 6000) / 24000
      quarterly: { price: 4000, savings: '66.67% off' }, // (12000 - 4000) / 12000
      monthly: { price: 1500, savings: '62.5% off' }     // (4000 - 1500) / 4000
    }
  }
};


  const PlanCard = ({ planKey, plan, isSelected }) => (
    <div 
      className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
        isSelected ? 'scale-105 z-10' : ''
      }`}
      onClick={() => setSelectedPlan(planKey)} data-aos="fade-down"
    >
      {/* Animated background glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} rounded-2xl blur-xl transition-all duration-500 ${
        isSelected ? 'opacity-60 scale-110' : 'opacity-0 group-hover:opacity-40'
      }`} />
      
      <div className={`relative bg-gray-900/90 backdrop-blur-sm border-2 rounded-2xl p-6 transition-all duration-300 ${
        isSelected ? `${plan.borderColor} shadow-2xl` : 'border-gray-700 hover:border-gray-600'
      }`}>
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${plan.color}`}>
              {plan.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{plan.title}</h3>
              <p className="text-gray-400 text-sm">{plan.subtitle}</p>
            </div>
          </div>
          {plan.pricing.yearly.savings === 'Best Value' && (
            <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-bold">
              POPULAR
            </div>
          )}
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              {planKey === 'happyHour' && (feature.includes('No AC') || feature.includes('Limited Hours')) ? (
                <XIcon />
              ) : (
                <CheckIcon />
              )}
              <span className={`text-sm ${
                planKey === 'happyHour' && (feature.includes('No AC') || feature.includes('Limited Hours'))
                  ? 'text-red-300 line-through'
                  : 'text-gray-300'
              }`}>
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div className="space-y-3 mb-6">
          {Object.entries(plan.pricing).map(([duration, details]) => (
            <div key={duration} className={`p-3 rounded-xl border transition-all duration-200 ${
              isSelected ? 'border-gray-600 bg-gray-800/50' : 'border-gray-700 hover:border-gray-600'
            }`}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-400 capitalize">{duration.replace('halfYearly', 'Half Yearly')}</span>
                {details.savings && (
                  <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${plan.color} text-black font-medium`}>
                    {details.savings}
                  </span>
                )}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white">₹{details.price.toLocaleString()}</span>
                <span className="text-gray-400 text-sm">/{duration.replace('yearly', 'year').replace('monthly', 'month').replace('quarterly', 'quarter').replace('halfYearly', '6 months')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/#contact"> 
        <button className={`w-full py-3 rounded-xl font-bold text-black transition-all duration-300 bg-gradient-to-r ${plan.color} hover:shadow-lg transform hover:scale-105 active:scale-95`}>
          Choose {plan.title}
        </button>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 text-white overflow-hidden">
    

      <Navbar2/>
      

    <div className='for him scroll-smooth' id='him' >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 mb-4">
            <ZapIcon />
            <h1 className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              FOR HIM
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-300 leading-relaxed">
              Real strength isn&apos;t built in comfort.
            </h2>
            <p className="text-xl text-gray-400 font-light">
              It&apos;s earned one rep, one drop of sweat, one decision at a time.
            </p>
            
            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent leading-relaxed">
              At Octacore, every plan is a promise to show up, level up, and outgrow limits.
            </div>
          </div>
        </div>

        {/* Plan Types Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12" data-aos="zoom-in">
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <div className="w-12 h-12 text-amber-400 mx-auto mb-3">
              <CrownIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Original Plan</h3>
            <p className="text-gray-400">Train anytime, with 24/7 access and climate control for your comfort.</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <div className="w-12 h-12 text-blue-400 mx-auto mb-3">
              <StarIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Discounted Plan</h3>
            <p className="text-gray-400">All the essentials, less the price. Same effort, same outcome.</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <div className="w-12 h-12 text-green-400 mx-auto mb-3">
              <ClockIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Happy Hour Plan</h3>
            <p className="text-gray-400">Midday grind (12 PM–5 PM), no AC, no fluff—just raw focus.</p>
          </div>
        </div>

        {/* Interactive Plansforhim */}
        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(plansforhim).map(([key, plan]) => (
            <PlanCard 
              key={key}
              planKey={key}
              plan={plan}
              isSelected={selectedPlan === key}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16" data-aos="fade-left">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <ZapIcon />
            <Link href="/#contact" >
            <span className='scroll-smooth'>

            Ready to Transform? Contact Us
            </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div className='for her scroll-smooth' id='her'>
           <div className="relative inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-right">
          <div className="inline-flex items-center gap-2 mb-4">
            <ZapIcon />
            <h1 className="text-5xl font-black bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              FOR HER
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-300 leading-relaxed">
              You don&apos;t need permission to become powerful.

            </h2>
            <p className="text-xl text-gray-400 font-light">
            Your goals deserve a space that respects your grind.
            </p>
            
            <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent leading-relaxed">
              At Octacore, we&apos;ve created an environment that&apos;s safe, empowering, and built for results.
            </div>
          </div>
        </div>

        {/* Plan Types Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12"  data-aos="zoom-out">
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <div className="w-12 h-12 text-amber-400 mx-auto mb-3">
              <CrownIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Original Plan</h3>
            <p className="text-gray-400">Train anytime, with 24/7 access and climate control for your comfort.</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <div className="w-12 h-12 text-blue-400 mx-auto mb-3">
              <StarIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Discounted Plan</h3>
            <p className="text-gray-400">All the essentials, less the price. Same effort, same outcome.</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <div className="w-12 h-12 text-green-400 mx-auto mb-3">
              <ClockIcon />
            </div>
            <h3 className="text-xl font-bold mb-2">Happy Hour Plan</h3>
            <p className="text-gray-400">Midday grind (12 PM–5 PM), no AC, no fluff—just raw focus.</p>
          </div>
        </div>

        {/* Interactive Plansforher */}
        <div className="grid lg:grid-cols-3 gap-8">
          {Object.entries(plansforher).map(([key, plan]) => (
            <PlanCard 
              key={key}
              planKey={key}
              plan={plan}
              isSelected={selectedPlan === key}
            />
          ))}
        </div>

           <div className="text-center mt-16"  >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 text-black px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer" >
            <ZapIcon />
            <Link href="/#contact" >
            <span>

            Ready to Transform? Contact Us
            </span>
            </Link>
          </div>
        </div>
        
      </div>
      </div>
    </div>
    </div>
  );
};

export default Page;
