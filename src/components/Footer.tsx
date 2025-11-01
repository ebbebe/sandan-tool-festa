import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    main: [
      { name: '축제소개', href: '/festival-intro' },
      { name: '프로그램', href: '/program' },
      { name: '현장안내', href: '/guide' },
      { name: '공지사항', href: '/notice' }
    ],
    legal: [
      { name: '이용약관', href: '#terms' },
      { name: '개인정보처리방침', href: '#privacy' },
      { name: '이용안내', href: '#guide' }
    ]
  };

  return (
    <footer className="bg-[#2c2c2d] relative">
      <div className="container mx-auto px-4 md:px-16 max-w-full">
        {/* Top Section - Logo and Navigation */}
        <div className="pt-6 md:pt-8 pb-4 md:pb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Logo */}
            <img
              src="/assets/logo.png"
              alt="STF Logo"
              className="h-[25px] w-[112px]"
            />

            {/* Main Navigation */}
            <div className="flex items-center flex-wrap gap-6 md:gap-12">
              {footerLinks.main.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-sm md:text-[15px] font-bold hover:text-[#388d71] transition-colors"
                  style={{ fontFamily: 'NanumSquare, sans-serif' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section - Legal Links */}
        <div className="pb-6">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            {footerLinks.legal.map((link, index) => (
              <React.Fragment key={link.name}>
                <Link
                  href={link.href}
                  className="text-white text-xs md:text-[15px] font-bold hover:text-gray-300 transition-colors"
                  style={{ fontFamily: 'NanumSquare, sans-serif' }}
                >
                  {link.name}
                </Link>
                {index < footerLinks.legal.length - 1 && (
                  <span className="text-gray-500">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Section - Company Information */}
        <div className="pb-10">
          <div className="space-y-2">
            {/* Company Details - First Line */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0 text-xs md:text-[15px] text-[#999999]" style={{ fontFamily: 'NanumSquare, sans-serif' }}>
              <span>대표자 : (주)산업인</span>
              <span className="hidden md:inline text-gray-600 mx-3">|</span>
              <span>대표전화 : 032.881.0427</span>
              <span className="hidden md:inline text-gray-600 mx-3">|</span>
              <span>사업자등록번호 : 717-88-02273</span>
            </div>

            {/* Contact Email */}
            <div className="text-xs md:text-[15px] text-[#999999]" style={{ fontFamily: 'NanumSquare, sans-serif' }}>
              참가문의 : backspace7@naver.com
            </div>

            {/* Address */}
            <div className="text-xs md:text-[15px] text-[#999999]" style={{ fontFamily: 'NanumSquare, sans-serif' }}>
              본사 : 서울시 중구 서소문로 116 유원빌딩 1607호 / 인천시 연수구 비류대로 294번길 32-5,(201)
            </div>

            {/* Copyright */}
            <div className="pt-6">
              <p className="text-xs md:text-[15px] text-[#999999]" style={{ fontFamily: 'NanumSquare, sans-serif' }}>
                © 2026 산단툴페스타 조직위원회 All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;