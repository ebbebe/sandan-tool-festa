'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const imgHeroBg = "http://localhost:3845/assets/adf09b1cf6c64ef3e55dae89fdbabc5b190421cb.png"
const imgIconProgram = "http://localhost:3845/assets/2b74a568f13f320f229c1baf3ff01df16a191960.png"
const imgDivider = "http://localhost:3845/assets/76873654c83e8f7026252140e3155eb4b146470c.png"

// Program images
const imgProgram1 = "http://localhost:3845/assets/f0b3acd396bb508fc92c707429ef78244726a93a.png"
const imgProgram2 = "http://localhost:3845/assets/c7bb8088d963cab7be4535ccf6fa923e339c295b.png"
const imgProgram3 = "http://localhost:3845/assets/b3e42b06bec718db31c48fefb943e2a86d3104f6.png"

// Experience program images
const imgExperience1 = "http://localhost:3845/assets/f88d02077efb00ee3b22721c65ff798d2068732d.png"
const imgExperience2 = "http://localhost:3845/assets/e7e091e1463be8f2090db38faa7005cce0cb8ce0.png"
const imgExperience3 = "http://localhost:3845/assets/8c76be9f07bdf9218ed3ca056c4d1082694d5d3f.png"
const imgExperience4 = "http://localhost:3845/assets/254b6b73673f17048667942766227ecd0d9efa9a.png"

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
            <h1 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-5xl font-black text-white mb-4">
              2025 <span className="text-[#338e72]">산단툴페스타</span>
            </h1>
            <p style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-5xl font-black text-white">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-16">
            <img src={imgIconProgram} alt="" className="w-9 h-9" />
            <h2 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[34px] font-black text-[#363636]">
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
                <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-black text-[#2c2c2d]">
                  산업용 제품·부품·소재·공구 전시·판매관
                </h3>
              </div>
              <div className="flex gap-8">
              <div className="flex-shrink-0">
                <img src={imgProgram1} alt="" className="rounded-xl w-[540px] h-[375px] object-cover" />
              </div>
              <div style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[18px] text-[#2c2c2d] space-y-2">
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
                <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-black text-[#2c2c2d]">
                  채용·취업 연계 프로그램
                </h3>
              </div>
              <div className="flex gap-8">
              <div className="flex-shrink-0">
                <img src={imgProgram2} alt="" className="rounded-xl w-[540px] h-[361px] object-cover" />
              </div>
              <div style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[18px] text-[#2c2c2d] space-y-2">
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
                <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-black text-[#2c2c2d]">
                  산업문화·체험 콘텐츠
                </h3>
              </div>
              <div className="flex gap-8">
              <div className="flex-shrink-0">
                <img src={imgProgram3} alt="" className="rounded-xl w-[540px] h-[375px] object-cover" />
              </div>
              <div style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[18px] text-[#2c2c2d] space-y-2">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-16">
            <img src={imgIconProgram} alt="" className="w-9 h-9" />
            <h2 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[34px] font-black text-[#363636]">
              시민 중심 체험 프로그램
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Experience 1 */}
            <div>
              <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-black text-[#2c2c2d] mb-4 text-center">
                가족 중심 시민체험 프로그램
              </h3>
              <img src={imgExperience1} alt="" className="rounded-xl w-full h-[375px] object-cover mb-4" />
              <div style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[18px] text-[#2c2c2d]">
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
              <div style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[18px] text-[#2c2c2d]">
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
              <div style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[18px] text-[#2c2c2d]">
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
              <div style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[18px] text-[#2c2c2d]">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-16">
            <img src={imgIconProgram} alt="" className="w-9 h-9" />
            <h2 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[34px] font-black text-[#363636]">
              무대공연 & 프로그램 일정표
            </h2>
          </div>

          {/* Saturday */}
          <div className="mb-8 border border-gray-500">
            <div className="bg-[#388d71] text-white text-center py-3">
              <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-black">
                11월15일 (토)
              </h3>
            </div>
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-gray-500">
                  <td className="w-1/6 p-4 text-center font-bold text-xl text-[#2c2c2d] border-r border-gray-500">11:00</td>
                  <td className="p-4 font-bold text-xl text-[#2c2c2d]">개막식</td>
                </tr>
                <tr className="border-b border-gray-500">
                  <td className="w-1/6 p-4 text-center font-bold text-xl text-[#2c2c2d] border-r border-gray-500">11:30</td>
                  <td className="p-4 font-bold text-xl text-[#2c2c2d]">소래포구 건강걷기</td>
                </tr>
                <tr className="border-b border-gray-500">
                  <td className="w-1/6 p-4 text-center font-bold text-xl text-[#2c2c2d] border-r border-gray-500">12:00</td>
                  <td className="p-4 font-bold text-xl text-[#2c2c2d]">아라곳 오케스트라 공연 (35인조)</td>
                </tr>
                <tr className="border-b border-gray-500">
                  <td className="w-1/6 p-4 text-center font-bold text-xl text-[#2c2c2d] border-r border-gray-500">15:00</td>
                  <td className="p-4 font-bold text-xl text-[#2c2c2d]">기술경진대회</td>
                </tr>
                <tr>
                  <td className="w-1/6 p-4 text-center font-bold text-xl text-[#2c2c2d] border-r border-gray-500">15:00 ~ 18:00</td>
                  <td className="p-4 font-bold text-xl text-[#2c2c2d]">산업제품 시연 + 전시관, 체험존, 채용박람회 운영</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Sunday */}
          <div className="border border-gray-500">
            <div className="bg-[#388d71] text-white text-center py-3">
              <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-black">
                11월16일 (일)
              </h3>
            </div>
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-gray-500">
                  <td className="w-1/6 p-4 text-center font-bold text-xl text-[#2c2c2d] border-r border-gray-500">11:00 ~ 12:00</td>
                  <td className="p-4 font-bold text-xl text-[#2c2c2d]">소래포구 트레일런</td>
                </tr>
                <tr>
                  <td className="w-1/6 p-4 text-center font-bold text-xl text-[#2c2c2d] border-r border-gray-500 align-top">15:00<br/>~<br/>18:00</td>
                  <td className="p-4 font-bold text-xl text-[#2c2c2d]">기술경진대회, 산업제품 시연 + 전시관, 체험존, 채용박람회 운영</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}