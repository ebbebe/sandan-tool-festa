'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Partners = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.02,
      opacity: 0.8,
      transition: {
        duration: 0.2
      }
    }
  };

  // Partner logos with actual Figma images - reorganized to match Figma layout
  const allPartners = [
    { id: 1, name: "산업통상자원부", logoUrl: "http://localhost:3845/assets/fc7b60f0e9cc5423d2b8b29f94345432f234f313.png", width: 307, height: 61 },
    { id: 2, name: "중소벤처기업부", logoUrl: "http://localhost:3845/assets/2f3b60cf2e704c365f8c41b252537229b6b2b50d.png", width: 307, height: 61 },
    { id: 3, name: "고용노동부", logoUrl: "http://localhost:3845/assets/137093452e30373468bb4249f20e171d8248d806.png", width: 240, height: 61 },
    { id: 4, name: "한국산업단지공단", logoUrl: "http://localhost:3845/assets/9dad12ad7ef2252e6e50743a7530cb7520dabd81.png", width: 305, height: 53 },
    { id: 5, name: "KBIZ중소기업중앙회", logoUrl: "http://localhost:3845/assets/e1542ac557f2c4e820db0f09a9eeeb3559b52594.png", width: 283, height: 34 },
    { id: 6, name: "KFME소상공인연합회", logoUrl: "http://localhost:3845/assets/f67f1176cfe7ebb6442c47bcfdf1fae0c4ba5e75.png", width: 365, height: 34 },
    { id: 7, name: "인천광역시", logoUrl: "http://localhost:3845/assets/cf21825764fb00a3bec2eec405753228e543d2d7.png", width: 250, height: 61 },
    { id: 8, name: "인천광역시남동구", logoUrl: "http://localhost:3845/assets/687c0526d4ad9ea148bf9c09e42cdc9c5abb3e99.png", width: 331, height: 61 },
    { id: 9, name: "인천광역시교육청", logoUrl: "http://localhost:3845/assets/d933f82c155462366e53fc2fb42395b5783cee0c.png", width: 289, height: 63 },
    { id: 10, name: "한국장애인고용공단인천지사", logoUrl: "http://localhost:3845/assets/dd46b30a57005cdb5ad61f3d41c8141dc8fb0059.png", width: 448, height: 61 },
    { id: 11, name: "(사)인천산업진흥협의", logoUrl: "http://localhost:3845/assets/5ee65f24f6f05bfd007c1e19371e39df467027a0.png", width: 361, height: 53 },
    { id: 12, name: "소래포구전통어시장", logoUrl: "http://localhost:3845/assets/4cced43a7c402361d806fcb2241eb448b4a0e656.png", width: 318, height: 33 },
    { id: 13, name: "신한은행", logoUrl: "http://localhost:3845/assets/5415943db767105e1b5372309bbd08367f7b92ae.png", width: 207, height: 63 },
    { id: 14, name: "민천일보", logoUrl: "http://localhost:3845/assets/53256e44f0718e76aae29b057e04d6d5be3a0482.png", width: 108, height: 78 },
    { id: 15, name: "한국공학대학교", logoUrl: "http://localhost:3845/assets/4a7f488676e82e43e0041dc9922066c65bf2c6e5.png", width: 263, height: 61 },
    { id: 16, name: "(사)한충경제문화교류종심", logoUrl: "http://localhost:3845/assets/974aedce644635b2399837774100e36d5bef0b25.png", width: 354, height: 36 },
    { id: 17, name: "에코환경산업기술협동조합", logoUrl: "http://localhost:3845/assets/d1b859cfe663ca134a419fbc0d9829703cbd3d9c.png", width: 359, height: 33 },
    { id: 18, name: "The bike", logoUrl: "http://localhost:3845/assets/8cfb85295f3005a2eeb757adb3319a052e38ea09.png", width: 137, height: 33 }
  ];

  const partnersRow1 = allPartners.slice(0, 5);
  const partnersRow2 = allPartners.slice(5, 9);
  const partnersRow3 = allPartners.slice(9, 13);
  const partnersRow4 = allPartners.slice(13, 18);

  return (
    <section className="relative py-12 md:py-24 bg-[#2c2c2d]" ref={ref}>
      {/* Top gradient transition from EventCards section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#2c2c2d] to-transparent z-[5]" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center mb-8">
            <img
              src="/assets/dot-icon.png"
              alt=""
              className="w-9 h-9 mr-4 mt-1"
            />
            <h2 className="text-2xl md:text-4xl font-black text-white leading-none"
                style={{ fontFamily: "WantedGothic, Wanted Sans, sans-serif" }}>
              협력사
            </h2>
          </div>
        </motion.div>

        {/* Partners Grid - Mobile */}
        <div className="block md:hidden">
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {allPartners.map((partner) => (
              <motion.div
                key={partner.id}
                className="relative flex items-center justify-center min-h-[50px] cursor-pointer"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="w-full h-full flex items-center justify-center px-2">
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="max-h-[45px] w-auto object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Partners Grid - Desktop */}
        <div className="hidden md:block space-y-12">
          {/* Row 1 - 5 items */}
          <motion.div
            className="grid md:grid-cols-3 lg:grid-cols-5 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {partnersRow1.map((partner) => (
              <motion.div
                key={partner.id}
                className="relative flex items-center justify-center md:min-h-[60px] cursor-pointer"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="w-full h-full flex items-center justify-center px-2">
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="md:max-h-[55px] w-auto object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 - 4 items */}
          <motion.div
            className="grid md:grid-cols-4 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {partnersRow2.map((partner) => (
              <motion.div
                key={partner.id}
                className="relative flex items-center justify-center md:min-h-[60px] cursor-pointer"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="w-full h-full flex items-center justify-center px-2">
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="md:max-h-[55px] w-auto object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 3 - 4 items */}
          <motion.div
            className="grid md:grid-cols-4 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {partnersRow3.map((partner) => (
              <motion.div
                key={partner.id}
                className="relative flex items-center justify-center md:min-h-[60px] cursor-pointer"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="w-full h-full flex items-center justify-center px-2">
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="md:max-h-[55px] w-auto object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 4 - 5 items */}
          <motion.div
            className="grid md:grid-cols-3 lg:grid-cols-5 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {partnersRow4.map((partner) => (
              <motion.div
                key={partner.id}
                className="relative flex items-center justify-center md:min-h-[60px] cursor-pointer"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="w-full h-full flex items-center justify-center px-2">
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="md:max-h-[55px] w-auto object-contain"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Partners Note */}
        <div className="text-center mt-12">
        </div>
      </div>
    </section>
  );
};

export default Partners;