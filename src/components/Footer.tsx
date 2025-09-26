import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const footerLinks = {
    main: [
      { name: '축제소개', href: '#about' },
      { name: '프로그램', href: '#program' },
      { name: '현장안내', href: '#guide' },
      { name: '공지사항', href: '#notice' }
    ],
    legal: [
      { name: '이용약관', href: '#terms' },
      { name: '개인정보처리방침', href: '#privacy' },
      { name: '이용안내', href: '#guide' }
    ]
  };

  return (
    <footer className="bg-[#2c2c2d]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Top Section - Logo and Navigation */}
        <div className="py-6 border-b border-gray-700">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Logo */}
            <img
              src="/assets/logo.png"
              alt="STF Logo"
              className="h-[25px] w-[112px]"
            />

            {/* Main Navigation */}
            <div className="flex items-center flex-wrap gap-4 md:gap-8">
              {footerLinks.main.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-[15px] font-medium hover:text-[#388d71] transition-colors"
                  style={{ fontFamily: 'Pretendard' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section - Legal Links */}
        <div className="py-5 border-b border-gray-700">
          <div className="flex flex-wrap items-center gap-3 md:gap-6">
            {footerLinks.legal.map((link, index) => (
              <React.Fragment key={link.name}>
                <Link
                  href={link.href}
                  className="text-white text-[15px] hover:text-gray-300 transition-colors"
                  style={{ fontFamily: 'Pretendard' }}
                >
                  {link.name}
                </Link>
                {index < footerLinks.legal.length - 1 && (
                  <span className="hidden md:inline text-gray-600">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Bottom Section - Company Information */}
        <div className="py-6">
          <div className="space-y-3">
            {/* Company Details - First Line */}
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0 text-[15px] text-[#999999]" style={{ fontFamily: 'Pretendard' }}>
              <span>대표자 : 산단툴페스타조직위원회</span>
              <span className="hidden md:inline text-gray-600 mx-2">|</span>
              <span>대표전화 : 032.881.0427</span>
              <span className="hidden md:inline text-gray-600 mx-2">|</span>
              <span>사업자등록번호 : 000-00-00000</span>
            </div>

            {/* Contact Email */}
            <div className="text-[15px] text-[#999999]" style={{ fontFamily: 'Pretendard' }}>
              제휴/공급문의 : backspace7@naver.com
            </div>

            {/* Address */}
            <div className="text-[15px] text-[#999999]" style={{ fontFamily: 'Pretendard' }}>
              본사 : 인천시 연수구 비류대로 294번길 32-5,(201) / 서울시 중구 서소문로 116 유원빌딩 1607호
            </div>

            {/* Copyright */}
            <div className="pt-3">
              <p className="text-[15px] text-[#999999]" style={{ fontFamily: 'Pretendard' }}>
                © 2025 산단툴페스타 조직위원회 All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;