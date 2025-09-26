"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: '축제소개', href: '#about' },
    { name: '프로그램', href: '#program' },
    { name: '현장안내', href: '#guide' },
    { name: '공지사항', href: '#notice' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#2c2c2d] shadow-lg' : 'bg-[#2c2c2d]/95 backdrop-blur-sm'
    }`}>
      <div className="h-[85px]">
        <div className="container mx-auto h-full px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="/assets/logo.png"
                alt="STF Logo"
                className="h-[25px] w-[112px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center">
              <ul className="flex items-center space-x-12">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white text-lg font-bold hover:text-[#388d71] transition-colors"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Icons (Desktop) */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="#">
                <img
                  src="/assets/social-1.png"
                  alt="Social Icon 1"
                  className="w-[11px] h-[24px]"
                />
              </a>
              <a href="#">
                <img
                  src="/assets/social-2.png"
                  alt="Social Icon 2"
                  className="w-[24px] h-[24px]"
                />
              </a>
              <a href="#">
                <img
                  src="/assets/social-3.png"
                  alt="Social Icon 3"
                  className="w-[26px] h-[18px]"
                />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
              aria-label="메뉴 열기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#2c2c2d] border-t border-gray-700">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-4 text-white hover:bg-[#388d71] transition-colors"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              {item.name}
            </Link>
          ))}
          {/* Mobile Social Links */}
          <div className="flex items-center space-x-4 px-6 py-4 border-t border-gray-700">
            <a href="#">
              <img
                src="/assets/social-1.png"
                alt="Social Icon 1"
                className="w-[11px] h-[24px]"
              />
            </a>
            <a href="#">
              <img
                src="/assets/social-2.png"
                alt="Social Icon 2"
                className="w-[24px] h-[24px]"
              />
            </a>
            <a href="#">
              <img
                src="/assets/social-3.png"
                alt="Social Icon 3"
                className="w-[26px] h-[18px]"
              />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;