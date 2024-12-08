"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="bg-[#FFFFFF] h-[100px] w-full flex items-center justify-between px-4 sm:px-6 md:px-10">
      <div className="flex items-center">
        <Image 
          src="/Logo.png"
          alt="Logo"
          width={50}
          height={32}
          className="w-[50px] h-[32px]"
        />
        <h2 className="text-black text-[24px] sm:text-[28px] md:text-[34px] font-bold ml-4">
          Furniro
        </h2>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <Link href="/" passHref>
          <div className="text-[14px] sm:text-[16px] text-black hover:text-gray-500">
            Home
          </div>
        </Link>
        <Link href="/Shop" passHref>
          <div className="text-[14px] sm:text-[16px] text-black hover:text-gray-500">
            Shop
          </div>
        </Link>
        <Link href="/Blog" passHref>
          <div className="text-[14px] sm:text-[16px] text-black hover:text-gray-500">
            Blog
          </div>
        </Link>
        <Link href="/Contact" passHref>
          <div className="text-[14px] sm:text-[16px] text-black hover:text-gray-500">
            Contact
          </div>
        </Link>
      </div>

      {/* Icons (Desktop) */}
      <div className="hidden md:flex space-x-6">
        <Link href="/Home" passHref>
          <Image 
            src="/icon1.svg" 
            alt="Search Icon" 
            width={28} 
            height={28}
            className="cursor-pointer hover:opacity-70"
          />
        </Link>
        <Link href="/Home" passHref>
          <Image 
            src="/icon2.svg" 
            alt="Cart Icon" 
            width={22.17} 
            height={22.17}
            className="cursor-pointer hover:opacity-70"
          />
        </Link>
        <Link href="/Home" passHref>
          <Image 
            src="/icon3.svg" 
            alt="Profile Icon" 
            width={24} 
            height={22.17}
            className="cursor-pointer hover:opacity-70"
          />
        </Link>
        <Link href="/Cart" passHref>
          <Image 
            src="/icon4.svg" 
            alt="Notifications Icon" 
            width={22.17} 
            height={22.17}
            className="cursor-pointer hover:opacity-70"
          />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[100px] left-0 w-full bg-white py-4 px-6 shadow-lg z-50">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-black text-[24px] sm:text-[28px] font-bold ml-4">
              Furniro
            </h2>
            <button onClick={toggleMenu} className="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="space-y-4">
            <Link href="/" passHref>
              <div className="text-[16px] text-black py-2 hover:text-gray-500 flex items-center">
                Home
              </div>
            </Link>
            <Link href="/Shop" passHref>
              <div className="text-[16px] text-black py-2 hover:text-gray-500 flex items-center">
                Shop
              </div>
            </Link>
            <Link href="/Blog" passHref>
              <div className="text-[16px] text-black py-2 hover:text-gray-500 flex items-center">
                Blog
              </div>
            </Link>
            <Link href="/Contact" passHref>
              <div className="text-[16px] text-black py-2 hover:text-gray-500 flex items-center">
                Contact
              </div>
            </Link>
          </div>
          <div className="flex space-x-6 mt-4">
            <Link href="/Home" passHref>
              <Image 
                src="/icon1.svg" 
                alt=" Icon" 
                width={28} 
                height={28}
                className="cursor-pointer hover:opacity-70"
              />
            </Link>
            <Link href="/Home" passHref>
              <Image 
                src="/icon2.svg" 
                alt=" Icon" 
                width={22.17} 
                height={22.17}
                className="cursor-pointer hover:opacity-70"
              />
            </Link>
            <Link href="/Home" passHref>
              <Image 
                src="/icon3.svg" 
                alt=" Icon" 
                width={24} 
                height={22.17}
                className="cursor-pointer hover:opacity-70"
              />
            </Link>
            <Link href="/Cart" passHref>
              <Image 
                src="/icon4.svg" 
                alt=" Icon" 
                width={22.17} 
                height={22.17}
                className="cursor-pointer hover:opacity-70"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
