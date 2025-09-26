import React from 'react';

const EventInfo = () => {
  return (
    <>
      {/* Combined YouTube and Event Info Section - Rectangle 247 */}
      <section id="event-info" className="relative py-16 md:py-24 min-h-[800px]">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-12"
                style={{ fontFamily: "WantedGothic, Wanted Sans, sans-serif" }}>
              <span>2025 </span>
              <span className="text-[#388d71]">산단 툴페스타</span>
              <span>_인천</span>
            </h2>

            {/* YouTube Video */}
            <div className="max-w-4xl mx-auto mb-12">
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
            </div>
          </div>

          {/* Date and Location Info */}
          <div className="max-w-6xl mx-auto">
            {/* Date */}
            <div className="flex items-start justify-center mb-8">
              <img
                src="/assets/dot-icon.png"
                alt=""
                className="w-9 h-9 min-w-[36px] mr-6 mt-2"
              />
              <div className="text-white whitespace-nowrap">
                <p className="text-2xl md:text-3xl lg:text-[34px] font-black leading-relaxed inline-flex items-center flex-wrap md:flex-nowrap"
                   style={{ fontFamily: "WantedGothic, Wanted Sans, sans-serif" }}>
                  <span>기간: 2025년 11월 15일</span>
                  <span className="inline-flex items-center align-middle mx-2">
                    <span className="inline-flex items-center justify-center w-12 h-12 bg-contain bg-no-repeat bg-center"
                          style={{backgroundImage: `url('/assets/circle-sat.svg')`}}>
                      <span className="text-xl font-black">토</span>
                    </span>
                  </span>
                  <span>~ 16일</span>
                  <span className="inline-flex items-center align-middle mx-2">
                    <span className="inline-flex items-center justify-center w-12 h-12 bg-contain bg-no-repeat bg-center"
                          style={{backgroundImage: `url('/assets/circle-sun.svg')`}}>
                      <span className="text-xl font-black">일</span>
                    </span>
                  </span>
                  <span className="ml-4">(11:00 ~ 18:00)</span>
                </p>
              </div>
            </div>

            {/* Location with Button */}
            <div className="flex items-start justify-center">
              <img
                src="/assets/dot-icon.png"
                alt=""
                className="w-9 h-9 min-w-[36px] mr-6 mt-2"
              />
              <div className="text-white flex items-center">
                <p className="text-2xl md:text-3xl lg:text-[34px] font-black"
                   style={{ fontFamily: "WantedGothic, Wanted Sans, sans-serif" }}>
                  장소: 소래포구 해오름 광장
                </p>
              </div>

              {/* CTA Button - positioned to the right of location */}
              <a
                href="#guide"
                className="inline-flex items-center justify-center text-white px-8 py-3 text-lg font-semibold hover:opacity-80 transition-opacity ml-8"
                style={{
                  backgroundImage: `url('/assets/btn-guide.svg')`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  minWidth: '139px',
                  height: '45px'
                }}
              >
                <span style={{ fontFamily: "WantedGothic, Wanted Sans, sans-serif" }}>행사장 안내</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom gradient transition to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#383838] z-[5]" />
      </section>
    </>
  );
};

export default EventInfo;