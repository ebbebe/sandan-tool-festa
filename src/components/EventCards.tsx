import React from 'react';

interface EventCard {
  id: number;
  title: string;
  items: string[];
  imageUrl: string;
}

const EventCards = () => {
  const eventCards: EventCard[] = [
    {
      id: 1,
      title: "산업용 제품&middot;부품&middot;소재&middot;공구 전시&middot;판매관",
      items: [
        "입주기업의 주력 제품 및 첨단 기술 전시",
        "친환경&middot;에너지 절감형 공구 및 장비, 스마트 팩토리 솔루션 자동화 기술 전시",
        "협력 기업(공구&middot;자재&middot;시스템 제조 및 유통사)과의 공급&middot;거래 연계",
        "참여 기업과 구매자, 전문가가 교류할 수 있는 상담&middot;미팅 공간 운영을 통한 실질적 비즈니스 기회 창출",
        "수출 상담회, 산학연 협력 세션 등을 통해 신사업 기회 창출"
      ],
      imageUrl: "/assets/event-card-1.png"
    },
    {
      id: 2,
      title: "채용&middot;취업 연계 프로그램",
      items: [
        "인천지역 청년 및 구직자 대상 현장 면접&middot;채용 상담",
        "입주기업 인력난 해소 및 우수 인재 확보 지원",
        "창업 준비 중인 구직자를 위한 지원 정책&middot;멘토링 제공 청년 창업 상담 부스"
      ],
      imageUrl: "/assets/event-card-2.png"
    },
    {
      id: 3,
      title: "산업문화&middot;체험 콘텐츠",
      items: [
        "산업용 로봇&middot;3D프린팅&middot;AR 등 첨단기술 체험존",
        "지역 소상공인 연계 문화&middot;버스킹 공연",
        "친환경 산업존 (ESG&middot;친환경 제품 전시&middot;참여 프로그램)"
      ],
      imageUrl: "/assets/event-card-3.png"
    }
  ];

  return (
    <section id="program" className="relative py-16 md:py-24">
      {/* Top gradient transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#383838] to-transparent z-[5]" />

      {/* Background image from Figma */}
      <div className="absolute inset-0">
        <img
          src="/assets/cards-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Dark overlay - darker to match Figma */}
      <div className="absolute inset-0 bg-[rgba(44,44,45,0.95)]" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Section Title - Enlarged */}
        <div className="text-center mb-16 md:mb-20 py-8">
          <div className="flex items-center justify-center mb-10">
            <img
              src="/assets/dot-icon.png"
              alt=""
              className="w-10 h-10 md:w-12 md:h-12 mr-4"
            />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white"
                style={{ fontFamily: "WantedGothic, Wanted Sans, sans-serif" }}>
              <span>2025 </span>
              <span className="text-[#388d71]">산단 툴페스타</span>
              <span>_인천</span>
            </h2>
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl text-white font-black"
             style={{ fontFamily: "WantedGothic, Wanted Sans, sans-serif" }}>
            주요 행사 안내
          </p>
        </div>

        {/* Event Cards */}
        <div className="space-y-16 md:space-y-24">
          {eventCards.map((card) => (
            <div key={card.id} className="relative">
              {/* Title above everything */}
              <div className="flex items-start mb-6">
                <div className="relative mr-3 flex-shrink-0">
                  <div className="relative w-7 h-7 bg-[#388d71] rounded-full flex items-center justify-center">
                    <span className="text-white font-black text-lg"
                          style={{ fontFamily: "WantedGothic, Wanted Sans, sans-serif" }}>
                      {card.id}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-[26px] font-black text-white flex-1 leading-tight"
                    style={{ fontFamily: "WantedGothic, Wanted Sans, sans-serif" }}>
                  {card.title}
                </h3>
              </div>

              {/* Card Container with Image and Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Image - always on the left */}
                <div className="relative">
                  <div className="relative h-[375px] rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                </div>

                {/* Content - always on the right */}
                <div className="relative pt-4">
                  {/* List Items */}
                  <ul className="space-y-3">
                    {card.items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#388d71] mr-3 mt-1 text-base">•</span>
                        <span className="text-gray-200 text-sm md:text-base leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient transition to Partners section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#2c2c2d] z-[5]" />
    </section>
  );
};

export default EventCards;