'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EventInfo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <>
      {/* Combined YouTube and Event Info Section - Rectangle 247 */}
      <section id="event-info" className="relative py-12 md:py-24 min-h-[600px] md:min-h-[800px]" ref={ref}>
        {/* Top gradient transition from HeroSection */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[rgba(51,51,51,0.9)] to-transparent z-[5]" />

        {/* Background image from Figma - Scene 14 1 */}
        <div className="absolute inset-0">
          <img
            src="/assets/event-bg.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[rgba(51,51,51,0.9)]" />

        <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
          {/* YouTube Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white mb-8 md:mb-12"
                style={{ fontFamily: "NanumSquare, sans-serif" }}>
              <span>2025 </span>
              <span className="text-[#388d71]">산단 툴페스타</span>
              <span>_인천</span>
            </h2>

            {/* YouTube Video */}
            <motion.div
              className="max-w-4xl mx-auto mb-8 md:mb-12"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
            >
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dv3BymxoEJ4"
                  title="2025 산단 툴페스타 인천"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>

          {/* Date and Location Info */}
          <motion.div
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            {/* Date */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center justify-center">
                <img
                  src="/assets/dot-icon.png"
                  alt=""
                  className="w-7 md:w-9 h-7 md:h-9 min-w-[28px] md:min-w-[36px] mr-3 md:mr-6 mt-0.5"
                />
                <div className="text-white">
                  <p className="text-lg md:text-3xl lg:text-[34px] font-black flex flex-wrap items-center leading-none"
                     style={{ fontFamily: "NanumSquare, sans-serif" }}>
                    <span>기간: 2025년 11월 15일</span>
                    <span className="inline-flex items-center align-middle mx-1 md:mx-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-contain bg-no-repeat bg-center"
                            style={{backgroundImage: `url('/assets/circle-sat.svg')`}}>
                        <span className="text-sm md:text-xl font-black">토</span>
                      </span>
                    </span>
                    <span>~ 16일</span>
                    <span className="inline-flex items-center align-middle mx-1 md:mx-2">
                      <span className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-contain bg-no-repeat bg-center"
                            style={{backgroundImage: `url('/assets/circle-sun.svg')`}}>
                        <span className="text-sm md:text-xl font-black">일</span>
                      </span>
                    </span>
                    <span className="hidden md:inline md:ml-4">(09:00 ~ 18:00)</span>
                  </p>
                </div>
              </div>
              <p className="md:hidden text-base font-black text-center text-white mt-2"
                 style={{ fontFamily: "NanumSquare, sans-serif" }}>
                시간: 09:00 ~ 18:00
              </p>
            </div>

            {/* Location with Button */}
            <div className="flex flex-col md:flex-row items-start md:items-start md:justify-center">
              <div className="flex items-center w-full md:w-auto justify-center md:justify-start">
                <img
                  src="/assets/dot-icon.png"
                  alt=""
                  className="w-7 md:w-9 h-7 md:h-9 min-w-[28px] md:min-w-[36px] mr-3 md:mr-6 mt-0.5"
                />
                <p className="text-lg md:text-3xl lg:text-[34px] font-black leading-none text-white"
                 style={{ fontFamily: "NanumSquare, sans-serif" }}>
                장소: 소래포구 해오름 광장
                </p>
              </div>

              {/* CTA Button - positioned below on mobile, right on desktop */}
              <motion.a
                href="/guide"
                className="inline-flex items-center justify-center text-white px-6 md:px-8 py-2 md:py-3 text-base md:text-lg font-semibold transition-all mt-4 md:mt-0 md:ml-8 mx-auto md:mx-0"
                style={{
                  backgroundImage: `url('/assets/btn-guide.svg')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  minWidth: '139px',
                  height: '45px'
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.15 }}
              >
                <span style={{ fontFamily: "NanumSquare, sans-serif" }}>행사장 안내</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom gradient transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#383838] z-[5]" />
      </section>
    </>
  );
};

export default EventInfo;