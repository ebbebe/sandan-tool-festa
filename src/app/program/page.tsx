'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const imgHeroBg = "/assets/program-hero-bg.png"
const imgIconProgram = "/assets/dot-icon.png"
const imgDivider = "/assets/divider.png"

// Program images
const imgProgram1 = "/assets/program-rect-265.png"
const imgProgram2 = "/assets/program-rect-261.png"
const imgProgram3 = "/assets/program-rect-264.png"

// Experience program images
const imgExperience1 = "/assets/experience-family.png"  // 가족 중심 시민체험 프로그램
const imgExperience2 = "/assets/experience-showcar.png"  // 쇼카 존·전기차 전시
const imgExperience3 = "/assets/experience-photo.png"  // 포토존·인증샷 미션 이벤트
const imgExperience4 = "/assets/experience-walking.png"  // 건강걷기 대회

export default function ProgramPage() {
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
              프로그램
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-white">
        <img src={imgDivider} alt="" className="w-full h-[29px]" />
      </div>

      {/* Main Contents Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-16">
            <img src={imgIconProgram} alt="" className="w-9 h-9 mt-1" />
            <h2 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl md:text-[34px] font-black text-[#363636] leading-none">
              주요 콘텐츠 소개
            </h2>
          </div>

          <div className="space-y-16">
            {/* Program 1 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-[#388d71] rounded-full flex items-center justify-center">
                  <span className="text-white font-black text-base">1</span>
                </div>
                <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-black text-[#2c2c2d] leading-none">
                  산업용 제품·부품·소재·공구 전시·판매관
                </h3>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <img src={imgProgram1} alt="" className="rounded-xl w-full md:w-[540px] h-[375px] object-cover" />
              </div>
              <div style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-base md:text-[18px] text-[#2c2c2d] space-y-2">
                <ul className="list-disc space-y-2 ml-6">
                  <li>입주기업의 주력 제품 및 첨단 기술 전시</li>
                  <li>친환경·에너지 절감형 공구 및 장비, 스마트 팩토리 솔루션 자동화 기술 전시</li>
                  <li>협력 기업(공구·자재·시스템 제조 및 유통사)과의 공급·거래 연계</li>
                  <li>참여 기업과 구매자, 전문가가 교류할 수 있는 상담·미팅 공간 운영을 통한 실질적 비즈니스 기회 창출</li>
                  <li>수출 상담회, 산학연 협력 세션 등을 통해 신사업 기회 창출</li>
                </ul>
              </div>
              </div>
            </div>

            {/* Program 2 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-[#388d71] rounded-full flex items-center justify-center">
                  <span className="text-white font-black text-base">2</span>
                </div>
                <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-black text-[#2c2c2d] leading-none">
                  채용·취업 연계 프로그램
                </h3>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <img src={imgProgram2} alt="" className="rounded-xl w-full md:w-[540px] h-[361px] object-cover" />
              </div>
              <div style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-base md:text-[18px] text-[#2c2c2d] space-y-2">
                <ul className="list-disc space-y-2 ml-6">
                  <li>인천지역 청년 및 구직자 대상 현장 면접·채용 상담</li>
                  <li>입주기업 인력난 해소 및 우수 인재 확보 지원</li>
                  <li>창업 준비 중인 구직자를 위한 지원 정책·멘토링 제공 청년 창업 상담 부스</li>
                </ul>
              </div>
              </div>
            </div>

            {/* Program 3 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 bg-[#388d71] rounded-full flex items-center justify-center">
                  <span className="text-white font-black text-base">3</span>
                </div>
                <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-black text-[#2c2c2d] leading-none">
                  산업문화·체험 콘텐츠
                </h3>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <img src={imgProgram3} alt="" className="rounded-xl w-full md:w-[540px] h-[375px] object-cover" />
              </div>
              <div style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-base md:text-[18px] text-[#2c2c2d] space-y-2">
                <ul className="list-disc space-y-2 ml-6">
                  <li>산업용 로봇·3D프린팅·AR 등 첨단기술 체험존</li>
                  <li>지역 소상공인 연계 문화·버스킹 공연</li>
                  <li>친환경 산업존 (ESG·친환경 제품 전시·참여 프로그램)</li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Programs Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-16">
            <img src={imgIconProgram} alt="" className="w-9 h-9 mt-1" />
            <h2 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl md:text-[34px] font-black text-[#363636] leading-none">
              시민 중심 체험 프로그램
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience 1 */}
            <div>
              <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-black text-[#2c2c2d] mb-4 text-center">
                가족 중심 시민체험 프로그램
              </h3>
              <img src={imgExperience1} alt="" className="rounded-xl w-full h-[375px] object-cover mb-4" />
              <div style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-base md:text-[18px] text-[#2c2c2d]">
                <ul className="list-disc space-y-2 ml-6">
                  <li>가족과 함께 즐기는 산업문화 체험형 놀이터 운영</li>
                  <li>DIY 공구 체험존 : 남녀노소 즐길 수 있는 공구 체험 프로그램 운영</li>
                </ul>
              </div>
            </div>

            {/* Experience 2 */}
            <div>
              <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-black text-[#2c2c2d] mb-4 text-center">
                포토존·인증샷 미션 이벤트
              </h3>
              <img src={imgExperience2} alt="" className="rounded-xl w-full h-[375px] object-cover mb-4" />
              <div style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-base md:text-[18px] text-[#2c2c2d]">
                <ul className="list-disc space-y-2 ml-6">
                  <li>산업공구 콘셉트 포토존과 기념 프레임 포토 부스 운영</li>
                  <li>(행사장 곳곳에 마련된 인증샷 미션을 수행하고 경품을 응모하세요!)</li>
                </ul>
              </div>
            </div>

            {/* Experience 3 */}
            <div>
              <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-black text-[#2c2c2d] mb-4 text-center">
                쇼카 존·전기차 전시
              </h3>
              <img src={imgExperience3} alt="" className="rounded-xl w-full h-[375px] object-cover mb-4" />
              <div style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-base md:text-[18px] text-[#2c2c2d]">
                <ul className="list-disc space-y-2 ml-6">
                  <li>국내 외 브랜드의 대표 제품 쇼카 전시 및 포토 이벤트</li>
                  <li>미래형 전기차 모빌리티 전시와 설명 부스 운영</li>
                </ul>
              </div>
            </div>

            {/* Experience 4 */}
            <div>
              <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-black text-[#2c2c2d] mb-4 text-center">
                건강걷기 대회
              </h3>
              <img src={imgExperience4} alt="" className="rounded-xl w-full h-[375px] object-cover mb-4" />
              <div style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-base md:text-[18px] text-[#2c2c2d]">
                <ul className="list-disc space-y-2 ml-6">
                  <li>온 가족이 함께 참여할 수 있는 행사장 순환형 걷기 코스 운영</li>
                  <li>(참가자 전원에게 소정의 어시장 이용 쿠폰 증정)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-16">
            <img src={imgIconProgram} alt="" className="w-9 h-9 mt-1" />
            <h2 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl md:text-[34px] font-black text-[#363636] leading-none">
              무대공연 & 프로그램 일정표
            </h2>
          </div>

          {/* Saturday */}
          <div className="mb-8 border border-gray-500 overflow-x-auto">
            <div className="bg-[#388d71] text-white text-center py-2 md:py-3">
              <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-lg md:text-2xl font-black">
                11월15일 (토)
              </h3>
            </div>
            <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[350px] md:min-w-[500px]">
              <tbody>
                <tr className="border-b border-gray-500">
                  <td className="w-[30%] md:w-1/6 p-2 md:p-4 text-center font-bold text-sm md:text-xl text-[#2c2c2d] border-r border-gray-500">11:00</td>
                  <td className="p-2 md:p-4 font-bold text-sm md:text-xl text-[#2c2c2d]">개막식</td>
                </tr>
                <tr className="border-b border-gray-500">
                  <td className="w-[30%] md:w-1/6 p-2 md:p-4 text-center font-bold text-sm md:text-xl text-[#2c2c2d] border-r border-gray-500">11:30</td>
                  <td className="p-2 md:p-4 font-bold text-sm md:text-xl text-[#2c2c2d]">소래포구 건강걷기</td>
                </tr>
                <tr className="border-b border-gray-500">
                  <td className="w-[30%] md:w-1/6 p-2 md:p-4 text-center font-bold text-sm md:text-xl text-[#2c2c2d] border-r border-gray-500">12:00</td>
                  <td className="p-2 md:p-4 font-bold text-sm md:text-xl text-[#2c2c2d]">시민과 함께하는 이벤트</td>
                </tr>
                <tr className="border-b border-gray-500">
                  <td className="w-[30%] md:w-1/6 p-2 md:p-4 text-center font-bold text-sm md:text-xl text-[#2c2c2d] border-r border-gray-500">15:00</td>
                  <td className="p-2 md:p-4 font-bold text-sm md:text-xl text-[#2c2c2d]">기술경진대회</td>
                </tr>
                <tr>
                  <td className="w-[30%] md:w-1/6 p-2 md:p-4 text-center font-bold text-sm md:text-xl text-[#2c2c2d] border-r border-gray-500">15:00<span className="hidden md:inline"> ~ </span><br className="md:hidden"/><span className="md:hidden">~</span><br className="md:hidden"/><span className="hidden md:inline">18:00</span><span className="md:hidden">18:00</span></td>
                  <td className="p-2 md:p-4 font-bold text-sm md:text-xl text-[#2c2c2d]">산업제품 시연 + 전시관, 체험존, 채용박람회 운영</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>

          {/* Sunday */}
          <div className="border border-gray-500 overflow-x-auto">
            <div className="bg-[#388d71] text-white text-center py-2 md:py-3">
              <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-lg md:text-2xl font-black">
                11월16일 (일)
              </h3>
            </div>
            <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[350px] md:min-w-[500px]">
              <tbody>
                <tr className="border-b border-gray-500">
                  <td className="w-[30%] md:w-1/6 p-2 md:p-4 text-center font-bold text-sm md:text-xl text-[#2c2c2d] border-r border-gray-500">11:00<span className="hidden md:inline"> ~ </span><br className="md:hidden"/><span className="md:hidden">~</span><br className="md:hidden"/><span className="hidden md:inline">18:00</span><span className="md:hidden">18:00</span></td>
                  <td className="p-2 md:p-4 font-bold text-sm md:text-xl text-[#2c2c2d]">시민과 함께하는 이벤트</td>
                </tr>
                <tr>
                  <td className="w-[30%] md:w-1/6 p-2 md:p-4 text-center font-bold text-sm md:text-xl text-[#2c2c2d] border-r border-gray-500 align-top">15:00<br/>~<br/>18:00</td>
                  <td className="p-2 md:p-4 font-bold text-sm md:text-xl text-[#2c2c2d]">기술경진대회, 산업제품 시연 + 전시관, 체험존, 채용박람회 운영</td>
                </tr>
              </tbody>
            </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}