'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const KicoxPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 오늘 하루 그만보기 체크
    const hideUntil = localStorage.getItem('kicoxPopupHideUntil');
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
    localStorage.setItem('kicoxPopupHideUntil', tomorrow.getTime().toString());
    setIsVisible(false);
  };

  const handleViewMore = () => {
    // 한국산업단지공단 웹사이트로 이동
    window.open('https://www.kicox.or.kr/index.do', '_blank');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-end p-4 lg:pr-[calc(50%-700px)] pointer-events-none">
        {/* Popup */}
        <motion.div
          className="relative shadow-2xl w-full max-w-[600px] overflow-hidden mt-[280px] lg:mt-[340px] pointer-events-auto"
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

          {/* Content Section */}
          <div className="relative bg-[rgba(44,44,44,0.95)] p-8 md:p-10 text-white text-center">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-black mb-4" style={{ fontFamily: 'WantedGothic, Wanted Sans, sans-serif' }}>
              한국산업단지공단
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg font-medium" style={{ fontFamily: 'Pretendard, sans-serif' }}>
              산업혁신과 지역경제를 이끄는 힘
            </p>
          </div>

          {/* Button Section */}
          <div className="bg-[rgba(44,44,44,0.95)] px-3 pb-3 md:px-4 md:pb-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleHideToday}
                className="flex-[4] bg-transparent hover:bg-white/5 text-white border border-white/30 py-4 px-6 text-sm md:text-base font-semibold transition-colors"
                style={{ fontFamily: 'WantedGothic, Wanted Sans, sans-serif' }}
              >
                오늘 하루 그만보기
              </button>
              <button
                onClick={handleViewMore}
                className="flex-[6] bg-[rgba(56,141,113,0.95)] hover:bg-[rgba(45,122,96,0.95)] text-white py-4 px-6 text-sm md:text-base font-semibold transition-colors"
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

export default KicoxPopup;
