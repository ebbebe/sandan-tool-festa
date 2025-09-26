import React from 'react';

const Partners = () => {
  // Partner logos with actual Figma images - reorganized to match Figma layout
  const partnersRow1 = [
    { id: 1, name: "산업통상자원부", logoUrl: "/assets/partner-1.png", width: 217, height: 43 },
    { id: 2, name: "중소벤처기업부", logoUrl: "/assets/partner-2.png", width: 216, height: 43 },
    { id: 3, name: "고용노동부", logoUrl: "/assets/partner-3.png", width: 168, height: 43 },
    { id: 4, name: "한국산업단지공단", logoUrl: "/assets/partner-4.png", width: 176, height: 23 },
    { id: 5, name: "중소기업중앙회", logoUrl: "/assets/partner-5.png", width: 140, height: 24 }
  ];

  const partnersRow2 = [
    { id: 6, name: "소상공인연합회", logoUrl: "/assets/partner-6.png", width: 175, height: 24 },
    { id: 7, name: "한국공학대학교", logoUrl: "/assets/partner-7.png", width: 154, height: 24 },
    { id: 8, name: "인천광역시 남동구", logoUrl: "/assets/partner-8.png", width: 138, height: 35 },
    { id: 9, name: "신한은행", logoUrl: "/assets/partner-9.png", width: 119, height: 27 },
    { id: 10, name: "The-bike", logoUrl: "/assets/partner-10.png", width: 222, height: 27 }
  ];

  const partnersRow3 = [
    { id: 11, name: "인천캠역시", logoUrl: "/assets/partner-11.png", width: 179, height: 43 },
    { id: 12, name: "인천광역시 남동구", logoUrl: "/assets/partner-12.png", width: 238, height: 44 },
    { id: 13, name: "인천광역시교육청", logoUrl: "/assets/partner-13.png", width: 215, height: 56 },
    { id: 14, name: "한국장애인고용공단 인천지사", logoUrl: "/assets/partner-14.png", width: 295, height: 24 }
  ];

  const partnersRow4 = [
    { id: 15, name: "소래포구전통어시장", logoUrl: "/assets/partner-15.png", width: 207, height: 23 },
    { id: 16, name: "민천일보", logoUrl: "/assets/partner-16.png", width: 97, height: 23 },
    { id: 17, name: "한국경제문화교류증진협회", logoUrl: "/assets/partner-17.png", width: 273, height: 27 },
    { id: 18, name: "에코방송산업기술협동조합", logoUrl: "/assets/partner-18.png", width: 264, height: 23 }
  ];

  return (
    <section className="relative py-16 md:py-24 bg-[#2c2c2d]">
      {/* Top gradient transition from EventCards section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#2c2c2d] to-transparent z-[5]" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <img
              src="/assets/dot-icon.png"
              alt=""
              className="w-9 h-9 mr-4"
            />
            <h2 className="text-3xl md:text-4xl font-black text-white"
                style={{ fontFamily: "WantedGothic, Wanted Sans, sans-serif" }}>
              협력사
            </h2>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="space-y-12">
          {/* Row 1 - 5 items */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {partnersRow1.map((partner) => (
              <div
                key={partner.id}
                className="relative flex items-center justify-center h-[50px] md:h-[60px]"
              >
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                  style={{ aspectRatio: `${partner.width}/${partner.height}` }}
                />
              </div>
            ))}
          </div>

          {/* Row 2 - 5 items */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {partnersRow2.map((partner) => (
              <div
                key={partner.id}
                className="relative flex items-center justify-center h-[40px] md:h-[45px]"
              >
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                  style={{ aspectRatio: `${partner.width}/${partner.height}` }}
                />
              </div>
            ))}
          </div>

          {/* Row 3 - 4 items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {partnersRow3.map((partner) => (
              <div
                key={partner.id}
                className="relative flex items-center justify-center h-[50px] md:h-[60px]"
              >
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                  style={{ aspectRatio: `${partner.width}/${partner.height}` }}
                />
              </div>
            ))}
          </div>

          {/* Row 4 - 4 items */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {partnersRow4.map((partner) => (
              <div
                key={partner.id}
                className="relative flex items-center justify-center h-[35px] md:h-[40px]"
              >
                <img
                  src={partner.logoUrl}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                  style={{ aspectRatio: `${partner.width}/${partner.height}` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Additional Partners Note */}
        <div className="text-center mt-12">
        </div>
      </div>
    </section>
  );
};

export default Partners;