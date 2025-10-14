'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import EventInfo from '@/components/EventInfo';
import EventCards from '@/components/EventCards';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';
import SeminarPopup from '@/components/SeminarPopup';
import KicoxPopup from '@/components/KicoxPopup';

export default function Home() {
  const [currentPopupIndex, setCurrentPopupIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePopupClose = () => {
    setCurrentPopupIndex(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Header />
      <main className="pt-[85px]">
        <HeroSection />
        <EventInfo />
        <EventCards />
        <Partners />
      </main>
      <Footer />

      {/* 데스크톱: 모든 팝업 표시 */}
      {!isMobile && (
        <>
          <SeminarPopup />
          <KicoxPopup />
        </>
      )}

      {/* 모바일: 순차적으로 하나씩 표시 */}
      {isMobile && (
        <>
          {currentPopupIndex === 0 && <SeminarPopup onClose={handlePopupClose} />}
          {currentPopupIndex === 1 && <KicoxPopup onClose={handlePopupClose} />}
        </>
      )}
    </div>
  );
}
