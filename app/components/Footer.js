"use client"
import React, { useState, useCallback, useMemo } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const [form, setForm] = useState({ name: "", email: "", number: "", query: "" })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState("")

    // Memoize form validation
    const isFormValid = useMemo(() => {
        return form.name.trim() && form.email.trim() && form.number.trim() && form.query.trim()
    }, [form])

    // Optimized change handler with useCallback
    const handleChange = useCallback((e) => {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }, [])

    // Optimized submit handler
    const handleSubmit = useCallback(async (e) => {
        e.preventDefault()

        if (!isFormValid) return

        setIsSubmitting(true)
        setSubmitStatus("")

        try {
            const response = await fetch("/api/form", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            })

            if (response.ok) {
                setForm({ name: "", email: "", number: "", query: "" })
                toast.success('We will connect with you soon!', {
                    theme: "dark",

                });
                toast.success('We will connect with you soon!', {
                    theme: "dark",

                });
            } else {
                setSubmitStatus("Failed to send message. Please try again.")
            }
        } catch (error) {
            console.error("Submission error:", error)
            setSubmitStatus("Network error. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }, [form, isFormValid])

    // Memoize social media icons
    const socialIcons = useMemo(() => [
        { src: "/instagram.png", alt: "Instagram", width: 50, height: 50, Link: "https://www.instagram.com/octacorefitness/?hl=en" },
        { src: "/facebook.png", alt: "Facebook", width: 50, height: 50, Link: "https://www.facebook.com/OCTACOREFITNESS/" }
    ], [])


    return (
        <>
            <ToastContainer

                pauseOnHover
                theme="dark"

            />
            <footer className='relative mt-10 h-fit pb-10 w-full overflow-hidden' id='contact' data-aos="fade-up">
                {/* Optimized video with preload and poster */}
                <video
                    src="/footer.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster="/footer-poster.jpg" // Add a poster image
                    className='absolute h-full w-full object-cover object-left-top z-0'
                    style={{ willChange: 'auto' }} // Optimize for animations
                />

                {/* Overlay with better performance */}
                <div className='bg-black absolute h-full w-full opacity-50 z-[1]' />

                <div className='relative z-10'>
                    {/* Header */}
                    <div className='w-full flex justify-center items-center pt-8'>
                        <h1 className='text-4xl font-light text-white'>
                            Contact Us
                        </h1>
                    </div>

                    {/* Main content */}
                    <div className='w-full flex justify-center items-center mt-8'>
                        <div className='lg:w-[80%] w-fit flex flex-col lg:flex-row justify-center lg:justify-between lg:gap-0 gap-12'>

                            {/* Left section - Company info */}
                            <div className="left flex flex-col justify-center items-center gap-2 lg:block">
                                <h2 className='text-gray-300 font-semibold text-3xl'>Octacore Fitness</h2>
                                <p className='text-sm ml-4 text-gray-400'>Fitness Passion Sport</p>

                                {/* Social media icons */}
                                <div className='flex mt-8 gap-8 ml-8'>
                                    {socialIcons.map((icon, index) => (
                                        <Link href={icon.Link} key={index}>

                                            <Image

                                                src={icon.src}
                                                alt={icon.alt}
                                                width={icon.width}
                                                height={icon.height}
                                                loading="lazy"
                                                className="hover:scale-110 transition-transform duration-200"
                                            />
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Right section - Contact details and form */}
                            <div className="right flex flex-col justify-end">
                                {/* Contact details */}
                                <div className="details flex flex-col lg:items-end items-center gap-4">
                                    <div className='text-3xl font-light text-white'>
                                        +91 89065 47291
                                    </div>
                                    <div className='md:text-2xl text-lg font-light text-gray-300'>
                                        selfdevelopmentfitness@gmail.com
                                    </div>
                                </div>

                                {/* Contact form */}
                                <div className="form min-h-fit w-full mt-4  flex flex-col justify-center items-center lg:items-end">
                                    <form onSubmit={handleSubmit} className='flex flex-col gap-4 items-center'>
                                        <input
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Enter name"
                                            required
                                            className='bg-[#19191d] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200'
                                            disabled={isSubmitting}
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="Enter email"
                                            required
                                            className='bg-[#19191d] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200'
                                            disabled={isSubmitting}
                                        />
                                        <input
                                            type="tel"
                                            name="number"
                                            value={form.number}
                                            onChange={handleChange}
                                            placeholder="Enter number"
                                            required
                                            className='bg-[#19191d] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200'
                                            disabled={isSubmitting}
                                        />
                                        <textarea
                                            name="query"
                                            value={form.query}
                                            onChange={handleChange}
                                            placeholder="Enter query"
                                            required
                                            rows={3}
                                            className='bg-[#19191d] p-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-200 resize-none'
                                            disabled={isSubmitting}
                                        />

                                        <button
                                            type="submit"
                                            disabled={!isFormValid || isSubmitting}
                                            className={`ring-2 w-fit py-2 px-8 mt-4 rounded-xl font-bold transition-all duration-200 ${isFormValid && !isSubmitting
                                                ? 'bg-[#3C2626] shadow-[1px_2px_4px_4px_white] hover:bg-[#4C3636] cursor-pointer'
                                                : 'bg-gray-600 cursor-not-allowed opacity-50'
                                                }`}
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Submit'}
                                        </button>
                                    </form>

                                    {/* Status message */}
                                    {submitStatus && (
                                        <div className={`mt-4 p-2 rounded text-center ${submitStatus.includes('successfully')
                                            ? 'text-green-400 bg-green-900/30'
                                            : 'text-red-400 bg-red-900/30'
                                            }`}>
                                            {submitStatus}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer