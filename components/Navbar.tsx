"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

interface NavbarProps {
  navlight?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ navlight }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div
      className={`w-full h-[72px] flex items-center ${
        isScrolled ? "bg-gray-200" : navlight ? "bg-[#ffffff]" : "bg-[#F7F7F7]"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Image
          src="/images/Ddsgnr Library.png"
          alt="Logo"
          width={130}
          height={30}
        />
        <nav className="hidden lg:block">
          <ul className="flex gap-10">
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/courses"><a>Courses</a></Link></li>
            <li><Link href="/services"><a>Services</a></Link></li>
            <li><Link href="/achievements"><a>Achievements</a></Link></li>
            <li><Link href="/about"><a>About Us</a></Link></li>
            <li><Link href="/testimonials"><a>Testimonials</a></Link></li>
          </ul>
        </nav>
        <div className="hidden lg:flex gap-3">
          <button className="text-black border-[1px] border-black px-4 py-2 rounded-lg">Login</button>
          <button className="bg-black text-white border-[1px] rounded-lg px-4 py-2">Sign in</button>
        </div>
        <div className="lg:hidden">
          <RxHamburgerMenu onClick={toggleMenu} />
        </div>
      </div>
      {hydrated && isMenuOpen && (
        <div className="fixed bg-white p-5 z-[999] lg:hidden w-full h-4/6 top-0 transition-all duration-300">
          <div className="close-menu flex justify-end">
            <button onClick={closeMenu} aria-label="Close menu">
              <IoClose />
            </button>
          </div>
          <ul className="flex flex-col gap-5 text-lg font-medium">
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/courses"><a>Courses</a></Link></li>
            <li><Link href="/services"><a>Services</a></Link></li>
            <li><Link href="/achievements"><a>Achievements</a></Link></li>
            <li><Link href="/about"><a>About Us</a></Link></li>
            <li><Link href="/testimonials"><a>Testimonials</a></Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
