"use client";

import Link from "next/link";
import { FaSearch } from "react-icons/fa"; 
import { useState, useEffect } from "react";

const MenuItem = ({ label, href, dropdown = false, children = null, isScrolled }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <li className="relative">
      <button
        className={`text-[16px] font-bold transition-all duration-300 ${
          isScrolled ? "text-black" : "text-white"
        } hover:text-red-500`}
        onClick={() => dropdown && setShowDropdown(!showDropdown)}
        onMouseEnter={() => dropdown && setShowDropdown(true)}
        onMouseLeave={() => dropdown && setShowDropdown(false)}
      >
        <Link href={href}>{label}</Link>
      </button>

      {dropdown && showDropdown && (
        <ul className="absolute top-full left-0 bg-gray-700 text-white p-2 space-y-2 shadow-lg">
          {children}
        </ul>
      )}
    </li>
  );
};

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-[999] w-[100%] transition-all duration-300 border-b-[1px] border-[#fbfbfb] border-opacity-30 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center p-4 py-2">
        {/* Logo */}
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-20 w-auto" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden ${isScrolled ? "text-black" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`lg:flex space-x-8 lg:space-x-8 items-center ${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <MenuItem label="HOME" href="/" isScrolled={isScrolled} />
          <MenuItem label="SERVICES" href="/services" dropdown isScrolled={isScrolled}>
            <li>
              <Link href="/services/consulting" className="hover:text-gray-300 text-[16px]">
                Consulting
              </Link>
            </li>
            <li>
              <Link href="/services/compliance" className="hover:text-gray-300 text-[16px]">
                Compliance
              </Link>
            </li>
          </MenuItem>
          <MenuItem label="PAGES" href="/pages" dropdown isScrolled={isScrolled}>
            <li>
              <Link href="/about" className="hover:text-gray-300 text-[16px]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-red-300 text-[16px]">
                Contact
              </Link>
            </li>
          </MenuItem>
          <MenuItem label="PROJECTS" href="/projects" isScrolled={isScrolled} />
          <MenuItem label="BLOG" href="/blog" isScrolled={isScrolled} />
          <MenuItem label="CONTACT" href="/contact" isScrolled={isScrolled} />
        </ul>

        {/* Search Icon and Button */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* 🔍 Dynamic Search Icon */}
          <FaSearch
            className={`text-lg cursor-pointer transition-all duration-300 ${
              isScrolled ? "text-black" : "text-white"
            } hover:text-gray-500`}
          />
          <button className="text-[16px] bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 font-bold text-xl">
            FREE QUOTE
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
