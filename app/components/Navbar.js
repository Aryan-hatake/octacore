"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

// Lazy load AOS only when needed
const AOSLoader = dynamic(
  () =>
    import("aos").then((module) => {
      import("aos/dist/aos.css");
      return { default: module.default };
    }),
  { ssr: false }
);

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  // ✅ AOS Initialization
  useEffect(() => {
    const initAOS = async () => {
      const AOS = await import("aos");
      await import("aos/dist/aos.css");
      AOS.init({});
    };
    const timer = setTimeout(initAOS, 100);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Close on scroll or outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setClicked(false);
      }
    };

    const handleScroll = () => {
      setClicked(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex justify-between px-3 pt-12 w-full h-[8vh] items-center relative z-20">
      {/* Logo */}
      <div className="logo w-[20vw]" data-aos="zoom-in">
        <Image
          src="/octa.webp"
          alt="logo"
          width={70}
          height={70}
          priority
          quality={85}
          sizes="(max-width: 768px) 50px, 70px"
        />
      </div>

      {/* Desktop Nav */}
      <ul className="lg:flex justify-evenly hidden w-[20vw] font-extralight">
        <li className="cursor-pointer hover:text-orange-300 transition-colors duration-200"><Link href="/" >Home</Link></li>
        <li className="cursor-pointer hover:text-orange-300 transition-colors duration-200"><Link href="Plans">Plans</Link></li>
       <li className="cursor-pointer hover:text-orange-300 transition-colors duration-200 scroll-smooth"> <Link href="/#contact">Contact</Link></li>
      </ul> {/* Mobile Dropdown Menu */}
      <ul
        ref={menuRef}
        className={`${
          clicked ? "flex opacity-100 scale-100" : " flex opacity-0 scale-90 pointer-events-none"
        } transition-all duration-500 ease-in-out absolute flex-col justify-evenly w-[190px] h-[190px] font-extralight z-20 right-[82px] items-center top-[25px] rounded-[16px] bg-gradient-to-bl from-[rgba(255,255,255,0.22)] to-[rgba(255,255,255,0.1)] shadow-[0px_0px_11px_2px_white] backdrop-blur-sm ring-2 ring-slate-400`}
      >
        <li className="cursor-pointer hover:text-orange-300 transition-colors duration-200"><Link href="/">Home</Link></li>
        <hr className="w-[80%]" />
        <li className="cursor-pointer hover:text-orange-300 transition-colors duration-200"><Link href="/Plans" >Plans</Link></li>
        <hr className="w-[80%]" />
        <li className="cursor-pointer hover:text-orange-300 transition-colors duration-200"><Link href="/#contact" >Contact</Link></li>
      </ul>

      {/* Hamburger Icon */}
      <div
        ref={iconRef}
        className="h-[54px] flex lg:hidden w-[54px] bg-gradient-to-bl from-[rgba(255,255,255,0.22)] to-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-xl shadow-[0px_0px_11px_2px_white] text-3xl  justify-center items-center cursor-pointer ring-2 z-30 relative"
        onClick={() => setClicked((prev) => !prev)}
      >
        <RxHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
