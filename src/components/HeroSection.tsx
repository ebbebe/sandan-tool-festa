import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[895px] flex items-center justify-center overflow-hidden">
      {/* Background image from Figma */}
      <div className="absolute inset-0">
        <img
          src="/assets/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(38,38,38,0.9)]" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2c2c2d] via-transparent to-[#3a3a3a]" />

      {/* Main content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 md:px-8">
        {/* INDUSTRIAL COMPLEX TOOLFESTA Image */}
        <div className="mb-8 md:mb-12">
          <img
            src="/assets/toolfesta.png"
            alt="INDUSTRIAL COMPLEX TOOLFESTA"
            className="w-full max-w-[600px] md:max-w-[762px] h-auto mx-auto"
          />
        </div>

        {/* 2025 산단툴페스타 인천 - Below the image */}
        <div className="text-center">
          <h2 className="text-white text-3xl md:text-4xl lg:text-[45px] font-black leading-tight"
              style={{ fontFamily: 'WantedGothic, Wanted Sans, sans-serif' }}>
            2025 산단툴페스타 인천
          </h2>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2c2c2d] to-transparent" />
    </section>
  );
};

export default HeroSection;