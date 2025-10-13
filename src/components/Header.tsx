"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Header = () => {
  const pathname = usePathname();
  const isMainPage = pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: '행사소개', href: '/festival-intro' },
    { name: '프로그램', href: '/program' },
    { name: '현장안내', href: '/guide' },
    { name: '공지사항', href: '/notice' }
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(44, 44, 45, 0.98)' : 'rgba(44, 44, 45, 0.95)',
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(5px)'
      }}
      initial={isMainPage ? { y: -100 } : { y: 0 }}
      animate={{ y: 0 }}
      transition={isMainPage ? { duration: 0.3 } : { duration: 0 }}
    >
      <div className="h-[85px]">
        <div className="container mx-auto h-full px-6 md:px-16 max-w-full">
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
                  <li key={item.name} className="relative">
                    <Link
                      href={item.href}
                      className="text-white text-lg font-bold hover:text-[#388d71] transition-colors relative group"
                      style={{ fontFamily: 'Pretendard, sans-serif' }}
                    >
                      {item.name}
                      <span
                        className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#388d71] group-hover:w-full transition-all duration-200"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Icons (Desktop) */}
            <div className="hidden md:flex items-center space-x-7">
              <motion.a
                href="#"
                whileHover={{ opacity: 0.7 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src="/assets/social-1.png"
                  alt="Social Icon 1"
                  className="w-[11px] h-[24px] transition-opacity duration-200"
                />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ opacity: 0.7 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src="/assets/social-2.png"
                  alt="Social Icon 2"
                  className="w-[24px] h-[24px] transition-opacity duration-200"
                />
              </motion.a>
              <motion.a
                href="https://youtu.be/dv3BymxoEJ4"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ opacity: 0.7 }}
                whileTap={{ scale: 0.98 }}
              >
                <img
                  src="/assets/social-3.png"
                  alt="YouTube"
                  className="w-[26px] h-[18px] transition-opacity duration-200"
                />
              </motion.a>
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

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <motion.nav
        className="fixed top-[85px] right-0 w-[80%] max-w-sm h-[calc(100vh-85px)] bg-[#2c2c2d] z-50 md:hidden border-l border-gray-700"
        initial={{ x: '100%' }}
        animate={{ x: isMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-6 py-5 text-lg text-white hover:bg-[#388d71]/20 transition-colors border-b border-gray-700/50"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              {item.name}
            </Link>
          ))}
          {/* Mobile Social Links */}
          <div className="flex items-center space-x-6 px-6 py-4 border-t border-gray-700">
            <a href="#">
              <img
                src="/assets/social-1.png"
                alt="Social Icon 1"
                className="w-[11px] h-[24px] transition-opacity duration-200"
              />
            </a>
            <a href="#">
              <img
                src="/assets/social-2.png"
                alt="Social Icon 2"
                className="w-[24px] h-[24px] transition-opacity duration-200"
              />
            </a>
            <a
              href="https://youtu.be/dv3BymxoEJ4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/social-3.png"
                alt="YouTube"
                className="w-[26px] h-[18px] transition-opacity duration-200"
              />
            </a>
          </div>
        </motion.nav>
    </motion.header>
  );
};

export default Header;