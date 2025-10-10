'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SeminarPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 오늘 하루 그만보기 체크
    const hideUntil = localStorage.getItem('seminarPopupHideUntil');
    const now = new Date().getTime();

    if (!hideUntil || now > parseInt(hideUntil)) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleHideToday = () => {
    // 오늘 자정까지 숨기기
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);
    localStorage.setItem('seminarPopupHideUntil', tomorrow.getTime().toString());
    setIsVisible(false);
  };

  const handleViewMore = () => {
    // 원글 바로가기 - 인하대학교 산학협력단 페이지로 이동
    window.open('https://www.inha.ac.kr', '_blank');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-start p-4 lg:pl-[calc(50%-650px)] pointer-events-none">
        {/* Popup */}
        <motion.div
          className="relative shadow-2xl w-full max-w-[600px] overflow-hidden mt-32 lg:mt-40 pointer-events-auto"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white hover:bg-white/10 rounded-full transition-colors z-20"
            aria-label="닫기"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Content Section - with background image */}
          <div className="relative">
            {/* Background image from main page */}
            <div className="absolute inset-0">
              <img
                src="/assets/hero-bg.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[rgba(38,38,38,0.9)]" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10 text-white">
              {/* Header Section */}
              <div className="text-center mb-8">
                {/* Logo text */}
                <div className="flex items-center justify-center gap-3 mb-8">
                  <h1 className="text-xl md:text-2xl font-bold" style={{ fontFamily: 'WantedGothic, Wanted Sans, sans-serif' }}>
                    인하대학교 산학협력단
                  </h1>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold leading-tight mb-12" style={{ fontFamily: 'WantedGothic, Wanted Sans, sans-serif' }}>
                  「스마트 제조혁신과 AI 기술 확산」<br />기술세미나
                </h2>

                {/* White underline */}
                <div className="w-full h-[2px] bg-white"></div>
              </div>

              {/* 강의 내용 Section */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-8 text-center" style={{ fontFamily: 'WantedGothic, Wanted Sans, sans-serif' }}>
                  강의 내용
                </h3>
                <div className="space-y-3 text-sm md:text-base">
                  <div className="flex items-start justify-center">
                    <span className="font-bold w-8 flex-shrink-0" style={{ fontFamily: 'WantedGothic, Wanted Sans, sans-serif' }}>1.</span>
                    <span className="flex-1 max-w-xs">생성형 AI를 활용한 스마트한 미래생활</span>
                  </div>
                  <div className="flex items-start justify-center">
                    <span className="font-bold w-8 flex-shrink-0" style={{ fontFamily: 'WantedGothic, Wanted Sans, sans-serif' }}>2.</span>
                    <span className="flex-1 max-w-xs">산업현장의 혁신적인 AI 적용사례</span>
                  </div>
                  <div className="flex items-start justify-center">
                    <span className="font-bold w-8 flex-shrink-0" style={{ fontFamily: 'WantedGothic, Wanted Sans, sans-serif' }}>3.</span>
                    <span className="flex-1 max-w-xs">제조 데이터셋 전처리 및 AI 활용</span>
                  </div>
                  <div className="flex items-start justify-center">
                    <span className="font-bold w-8 flex-shrink-0" style={{ fontFamily: 'WantedGothic, Wanted Sans, sans-serif' }}>4.</span>
                    <span className="flex-1 max-w-xs">한국형 기상공학 플랫폼 KIMM Cyber Lab</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Button Section - white background */}
          <div className="bg-white p-3 md:p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleHideToday}
                className="flex-[4] bg-white hover:bg-gray-50 text-black border border-gray-400 py-5 px-6 text-sm md:text-base font-semibold transition-colors"
                style={{ fontFamily: 'WantedGothic, Wanted Sans, sans-serif' }}
              >
                오늘 하루 그만보기
              </button>
              <button
                onClick={handleViewMore}
                className="flex-[6] bg-[#388d71] hover:bg-[#2d7a60] text-white py-5 px-6 text-sm md:text-base font-semibold transition-colors"
                style={{ fontFamily: 'WantedGothic, Wanted Sans, sans-serif' }}
              >
                링크 바로가기
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SeminarPopup;
