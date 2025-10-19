'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 50]);

  return (
    <section className="relative min-h-[600px] md:min-h-[895px] flex items-center justify-center overflow-hidden">
      {/* Background image from Figma with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <img
          src="/assets/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(38,38,38,0.9)]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2d] via-transparent to-[#3a3a3a]" />

      {/* Main content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 md:px-8">
        {/* INDUSTRIAL COMPLEX TOOLFESTA Image */}
        <motion.div
          className="mb-6 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut"
          }}
        >
          <img
            src="/assets/toolfesta.png"
            alt="INDUSTRIAL COMPLEX TOOLFESTA"
            className="w-full max-w-[400px] md:max-w-[762px] h-auto mx-auto"
          />
        </motion.div>

        {/* 2025 산단툴페스타 인천 - Below the image */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut"
          }}
        >
          <h2 className="text-white text-2xl md:text-4xl lg:text-[45px] font-black leading-tight"
              style={{ fontFamily: "NanumSquare, sans-serif" }}>
            2025 산단툴페스타 인천
          </h2>
        </motion.div>
      </div>

      {/* Bottom gradient transition to EventInfo section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[rgba(51,51,51,0.9)] z-[5]" />
    </section>
  );
};

export default HeroSection;