'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const imgHeroBg = "/assets/festival-hero-bg.png"
const imgWhatIs = "/assets/dot-icon.png"
const imgFeatures = "/assets/festival-features.png"
const imgGoals = "/assets/festival-goals.png"
const imgDivider = "/assets/divider.png"

// Tool icons
const toolIcons = [
  "/assets/tool-icon-1.png", // image 103
  "/assets/tool-icon-2.png", // image 106
  "/assets/tool-icon-3.png", // image 104
  "/assets/tool-icon-4.png", // image 101
  "/assets/tool-icon-5.png", // image 102
]

const imgToolfesta = "/assets/toolfesta-icon.png"

// Company logos - all partners
const allCompanyLogos = [
  "/assets/partner-logo-1.png",
  "/assets/partner-logo-2.png",
  "/assets/partner-logo-3.png",
  "/assets/partner-logo-4.png",
  "/assets/partner-logo-5.png",
  "/assets/partner-logo-6.png",
  "/assets/partner-logo-7.png",
  "/assets/partner-logo-8.png",
  "/assets/partner-logo-9.png",
  "/assets/partner-logo-10.png",
  "/assets/partner-logo-11.png",
  "/assets/partner-logo-12.png",
  "/assets/partner-logo-13.png",
  "/assets/partner-logo-14.png",
  "/assets/partner-logo-15.png",
  "/assets/partner-logo-extra.png",
  "/assets/partner-logo-16.png",
  "/assets/partner-logo-17.png",
  "/assets/partner-logo-18.png"
]

// Company logos organized by rows for desktop
const companyLogosRow1 = allCompanyLogos.slice(0, 5)
const companyLogosRow2 = allCompanyLogos.slice(5, 9)
const companyLogosRow3 = allCompanyLogos.slice(9, 14)  // 신한은행, 민천일보 포함
const companyLogosRow4 = allCompanyLogos.slice(14, 19)

export default function FestivalIntroPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[375px] mt-[85px]">
        <div className="absolute inset-0">
          <img src={imgHeroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[rgba(44,44,45,0.9)]" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-3xl md:text-5xl font-black text-white mb-4">
              2025 <span className="text-[#338e72]">산단툴페스타</span>
            </h1>
            <p style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-3xl md:text-5xl font-black text-white">
              축제 소개
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-white">
        <img src={imgDivider} alt="" className="w-full h-[29px]" />
      </div>

      {/* What is Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-16">
            <img src={imgWhatIs} alt="" className="w-9 h-9 mt-1" />
            <h2 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl md:text-[34px] font-black text-[#363636] leading-none">
              산단툴페스타 란?
            </h2>
          </div>

          <div className="text-center mb-20 px-4">
            <p style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-base sm:text-lg md:text-[25px] leading-relaxed text-[#363636] mb-8">
              <span className="font-black">『산단툴페스타_인천』</span>
              <span className="font-medium">은 한국산업단지공단 인천지역에</span>
              <span className="hidden sm:inline"><br /></span><span className="inline sm:hidden"> </span>
              <span className="font-medium">입주한 기업들이 중심이 되어, 최신 산업기술과 제품을 전시·홍보하고,</span>
              <span className="hidden sm:inline"><br /></span><span className="inline sm:hidden"> </span>
              <span className="font-medium">산업현장에 필요한 공구·자재·시스템을 제조·유통하는</span>
              <span className="hidden sm:inline"><br /></span><span className="inline sm:hidden"> </span>
              <span className="font-medium">기업들과의 실질적 협업을 강화하는 산업 교류형 페스티벌입니다.</span><br /><br />
              <span className="font-medium">특히, 인천지역 산업단지 입주기업에게 직접적이고 실질적인 가치를 제공</span>
              <span className="hidden sm:inline"><br /></span><span className="inline sm:hidden"> </span>
              <span className="font-medium">하는 것을 최우선 목표로 하고 있습니다.</span>
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <img src={imgFeatures} alt="" className="max-w-[645px] w-full" />
          </div>

          <div className="text-center mb-20 px-4">
            <p style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-base sm:text-lg md:text-[25px] leading-relaxed text-[#2c2c2d]">
              시민이 직접 만나 교류하는 이 행사는<br />
              <span className="font-bold">산업계</span>와 <span className="font-bold">시민</span> 모두에게 <span className="font-bold">실질적 도움과 경험을 제공</span>
            </p>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex justify-center mb-12">
            <img src={imgGoals} alt="" className="max-w-[645px] w-full" />
          </div>

          <div className="text-center">
            <div style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="space-y-2 text-lg md:text-[25px] text-[#2c2c2d] inline-block text-left">
              <p className="font-medium">
                <span className="font-bold">'기술'</span>이 시민과 만나는 산업문화의 대중화
              </p>
              <p className="font-medium">
                <span className="font-bold">'기업'</span>이 인재와 만나는 실질적 채용연계
              </p>
              <p className="font-medium">
                <span className="font-bold">'산업 제품'</span>과 소비자와 만나는 B2C 융합시장 형성
              </p>
              <p className="font-medium">
                <span className="font-bold">'도시'</span>가 산업 브랜드화되는 산업문화 도시 모델
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Icons Section */}
      <section className="pt-16 pb-0 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex justify-around items-end flex-wrap gap-4 md:gap-0">
            <img src={toolIcons[0]} alt="" className="h-[60px] md:h-[103px] w-[60px] md:w-[106px] object-contain" />
            <img src={toolIcons[1]} alt="" className="h-[50px] md:h-[89px] w-[35px] md:w-[62px] object-contain" />
            <img src={toolIcons[2]} alt="" className="h-[50px] md:h-[83px] w-[50px] md:w-[83px] object-contain" />
            <img src={toolIcons[3]} alt="" className="h-[50px] md:h-[83px] w-[65px] md:w-[107px] object-contain" />
            <img src={toolIcons[4]} alt="" className="h-[65px] md:h-[113px] w-[70px] md:w-[118px] object-contain" />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="relative pt-14 pb-20 bg-[#338e72]">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src={imgToolfesta} alt="" className="w-[41px] h-[41px] mt-1" />
            <h2 style={{
              fontFamily: 'Wanted Sans, WantedGothic, sans-serif',
              textShadow: 'rgba(0,0,0,0.25) 3px 2px 4px'
            }} className="text-3xl md:text-[40px] font-black text-white leading-none">
              후원사
            </h2>
          </div>
          <p className="text-center text-base md:text-[20px] text-white/90 mb-12"
             style={{
               fontFamily: 'Wanted Sans, Pretendard, sans-serif',
               fontWeight: 500,
               textShadow: 'rgba(0,0,0,0.25) 3px 2px 4px'
             }}>
            (일부 기관은 후원 예정)
          </p>

          {/* Company Logos Grid - Mobile */}
          <div className="block md:hidden">
            <div className="grid grid-cols-2 gap-4">
              {allCompanyLogos.map((logo, index) => (
                <div key={index} className="flex items-center justify-center min-h-[50px]">
                  <img src={logo} alt="" className="max-h-[45px] w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Company Logos Grid - Desktop */}
          <div className="hidden md:block">
            {/* Row 1 - 5 items */}
            <div className="mb-10">
              <div className="flex justify-between items-center">
                {companyLogosRow1.map((logo, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img src={logo} alt="" className="max-h-[50px] w-auto" />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - 4 items */}
            <div className="mb-10">
              <div className="flex justify-between items-center">
                {companyLogosRow2.map((logo, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img src={logo} alt="" className="max-h-[50px] w-auto" />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3 - 5 items */}
            <div className="mb-10">
              <div className="flex justify-between items-center">
                {companyLogosRow3.map((logo, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img src={logo} alt="" className={`w-auto ${
                      index === 3 ? 'max-h-[38px]' : // 신한은행 더 작게
                      index === 4 ? 'max-h-[58px]' : // 민천일보 더 크게
                      'max-h-[45px]'
                    }`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 4 - 5 items */}
            <div>
              <div className="flex justify-between items-center">
                {companyLogosRow4.map((logo, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img src={logo} alt="" className="max-h-[40px] w-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}