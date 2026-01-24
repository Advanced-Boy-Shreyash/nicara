"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Mail, Phone, ChevronRight, ChevronLeft } from 'lucide-react';
import emailjs from '@emailjs/browser';
import FloatingContactBar from '../../components/FloatingContactBar';

export default function EventsExperiences() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [footerDropdownOpen, setFooterDropdownOpen] = useState(false);

  return (
    <div className="font-sans relative min-h-screen overflow-x-hidden">
      {/* ✅ NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 bg-grey flex justify-between items-center w-full px-6 py-4 z-20 sm:grid sm:grid-cols-3 sm:items-center font-medium"
      >
        {/* Projects (Desktop Left) */}
        <div className="hidden sm:flex sm:justify-start relative">
          <div
            className="text-sm hover:underline text-white cursor-pointer flex items-center justify-between w-full"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            Projects
          </div>
          {dropdownOpen && (
            <div
              className="absolute top-full left-0 bg-grey shadow-lg py-2 w-48 z-30"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link href="/project/interiors" className="block px-4 py-2 text-sm text-white hover:bg-white hover:text-black">
                Interiors
              </Link>
              
              <Link href="/project/events-experiences" className="block px-4 py-2 text-sm text-white hover:bg-white hover:text-black">
                Events & Experiences
              </Link>
            </div>
          )}
        </div>

        {/* NICARA (Centered on Desktop, Left on Mobile) */}
        <div className="flex items-center justify-between w-full sm:w-auto sm:justify-center sm:col-start-2">
          <Link
            href="/"
            className="text-lg text-white font-bold"
            style={{ fontFamily: 'Didot, serif' }}
          >
            NICARA
          </Link>

          {/* Hamburger Menu (mobile only) */}
          <button
            className="sm:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* About and Contact (Desktop Right) */}
        <div className="hidden sm:flex sm:justify-end gap-5">
          <a href="/about" className="text-sm hover:underline text-white">About</a>
          <a href="/contact" className="text-sm hover:underline text-white">Contact</a>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="fixed inset-0 bg-[rgb(31,44,32)] z-50 flex flex-col items-center justify-center slide-up-menu">
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-200"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col items-center space-y-4 text-white text-lg font-medium">
              <div
                className="py-2 text-white hover:underline cursor-pointer flex items-center justify-center w-full"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Projects
                <ChevronDown className={`w-5 h-5 ml-2 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              {mobileDropdownOpen && (
                <div className="flex flex-col items-center w-full space-y-2">
                  <a
                    href="/project/interiors"
                    className="py-2 text-white hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    Interiors
                  </a>
                  
                  <a
                    href="/project/events-experiences"
                    className="py-2 text-white hover:underline"
                    onClick={() => setMenuOpen(false)}
                  >
                    Events & Experiences
                  </a>
                </div>
              )}
              <a
                href="/about"
                className="py-2 text-white hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/contact"
                className="py-2 text-white hover:underline"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      <div className="h-screen relative">
        <Image
          src="/event.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 to-transparent"></div>
        {/* Centered text */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white font-poppins opacity-60 text-center font-avenir-next-lt-pro-light font-bold">Something exciting coming up, Stay Tuned!</h1>
        </div>
      </div>
     <footer
     className="text-amber-50 py-16 sm:py-24 px-4 sm:px-10 md:px-16 lg:px-24 xl:px-32"
     style={{ backgroundColor: '#755306' }}
   >
     <div className="mx-auto w-full max-w-[2200px] space-y-10">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
         {/* Links section */}
         <div className="flex flex-wrap gap-3 sm:gap-6 justify-center md:justify-start text-center md:text-left relative md:-ml-4">
                       <div className="relative ">
                   <button
                     className="md:hidden text-md hover:underline flex items-center font-avenir-next-lt-pro-light font-light"
                     onClick={() => setFooterDropdownOpen(!footerDropdownOpen)}
                   >
                     Projects
                           <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${footerDropdownOpen ? 'rotate-180' : ''}`} />
                         </button>
                         <a
                           href="#"
                           className="hidden md:block text-md hover:underline font-avenir-next-lt-pro-light font-light"
                           onMouseEnter={() => setFooterDropdownOpen(true)}
                           onMouseLeave={() => setFooterDropdownOpen(false)}
                         >
                           Projects
                         </a>
                         {footerDropdownOpen && (
                           <div
                             className="absolute bottom-full left-0 bg-[#755306] shadow-lg py-2 w-48 z-30"
                             onMouseEnter={() => setFooterDropdownOpen(true)}
                             onMouseLeave={() => setFooterDropdownOpen(false)}
                           >
                             <a href="/project/interiors" className="block px-4 py-2 text-sm text-amber-50 hover:bg-amber-50 hover:text-[#755306] font-avenir-next-lt-pro-light font-light">
                               Interiors
                             </a>
                             
                             <a href="/project/events-experiences" className="block px-4 py-2 text-sm text-amber-50 hover:bg-amber-50 hover:text-[#755306] font-avenir-next-lt-pro-light font-light">
                               Events & Experiences
                             </a>
                           </div>
                         )}
                       </div>
                       <a href="/about" className="text-md hover:underline ml-4 font-avenir-next-lt-pro-light font-light">About</a>
                       <a href="/contact" className="text-md hover:underline ml-4 font-avenir-next-lt-pro-light font-light">Contact</a>
                     </div>
               
                     {/* Description section */}
                     <div className="text-[1.05rem] text-center md:text-left md:-mr-39 md:ml-80 px-4 md:px-0" style={{ fontFamily: 'Crimson Text, serif' }}>
                        Established in 2019, Nicara is a full-service design and lifestyle studio based in Hyderabad, India.
                     </div>
         
                     {/* Social section */}
                     <div className="text-[1.05rem] text-center md:text-left md:-mr-19 md:ml-52 space-y-1 px-4 md:px-0" style={{ fontFamily: 'Crimson Text, serif' }}>
                       <div>
                         IG: <a href="https://www.instagram.com/nicaradesign?igsh=MTRyZHkzeDNtMGRoeg==" className="underline hover:no-underline">@nicaradesign</a>
                       </div>
                       <div>
                         Phone: <a href="tel:8559901234" className="underline hover:no-underline">+91 855 990 1234</a>
                       </div>
                     </div>
                   </div>
         
                   {/* Bottom section */}
                   <div className="flex flex-col md:flex-row justify-between items-center text-[1.05rem] gap-4 text-center md:text-left -ml-5" style={{ fontFamily: 'Crimson Text, serif' }}>
                     <div>
                       Questions? Reach out:<br />
                       <a href="mailto:hello@dwelltales.com" className="underline hover:no-underline">
                       hello@dwelltales.com
                       </a>
                     </div>
                     </div>
                     <div className="ml-256 text-md -mb-12 -mt-18" style={{ fontFamily: 'font-avenir-next-lt-pro-light, serif' }}>Nicara Design © 2025</div>
                 </div>
               </footer>
              <FloatingContactBar />
    </div>
  );
}
