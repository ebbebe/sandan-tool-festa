'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

const imgHeroBg = "http://localhost:3845/assets/2e4ed3f77f17331ca0609e3195860120829368f1.png"
const imgWhatIs = "http://localhost:3845/assets/2b74a568f13f320f229c1baf3ff01df16a191960.png"
const imgFeatures = "http://localhost:3845/assets/ef71dfb5b7137ee9d7a742d51d877996ed35d184.png"
const imgGoals = "http://localhost:3845/assets/5bc6e11c61ee114bdad1dc02efab537d94e10361.png"

const partnerLogos = [
  "http://localhost:3845/assets/963c6c237312654e9f4cfa4c150e3a9305fd5416.png",
  "http://localhost:3845/assets/fa8c0b6e54918e2c548d106f4a74d2e8a038966c.png",
  "http://localhost:3845/assets/2fe31353972229d8363e44667a47642be61c244f.png",
  "http://localhost:3845/assets/bf2cf264d89900c37ed0866c0ac9941c13bb1798.png",
  "http://localhost:3845/assets/2d0b6d5c667664004781a9edf4c4724ead35fa6b.png"
]

const companyLogos = [
  "http://localhost:3845/assets/caad686db2ea78c1f64c190306b551871ef9fe09.png",
  "http://localhost:3845/assets/5492befe73b07950e13816bc53c4c29b44d8d6c3.png",
  "http://localhost:3845/assets/7bdcb28ae355e2c26918dd74430f72ed7f838ac8.png",
  "http://localhost:3845/assets/a0c12736db6832c596e6d6649e6e9beda11d305e.png",
  "http://localhost:3845/assets/8720a1b7e3424275d7c3a2b212fb7e44e277eb8c.png",
  "http://localhost:3845/assets/53452348a813bf938417e473904db6b4af161ac1.png",
  "http://localhost:3845/assets/ed5b0351d88e45401bb33ba389a93563acd2d88a.png",
  "http://localhost:3845/assets/b5e4c8326108a7436aeb9ba4e2ffc4b533445a3f.png",
  "http://localhost:3845/assets/46b4694b68135bfdf99f3984c4d28f09df68cab7.png",
  "http://localhost:3845/assets/f0941ce8c827b13b657e88d6c25b1fddcf92edc9.png",
  "http://localhost:3845/assets/8cc0c9dbe7d5e65c01bc531692562aefb730b87f.png",
  "http://localhost:3845/assets/f663c2d74e5846d33677adc032736ad40ac92eee.png",
  "http://localhost:3845/assets/dff792148478a824c4fa655e8b728ac800435dc4.png",
  "http://localhost:3845/assets/cf07a186fa8cf5628aa2d8f563d1e777903e6e3f.png",
  "http://localhost:3845/assets/946545957981c1d430eff783815b1542f63afe3f.png",
  "http://localhost:3845/assets/89348c9db527d63718a88f5b2ebc7e585908f421.png",
  "http://localhost:3845/assets/b8983fe2e941dad303bf1121d105f6ca758b53f2.png",
  "http://localhost:3845/assets/1f2de7f9e6556761bcbac559a9e1a3096d87dd6f.png"
]

const imgToolfesta = "http://localhost:3845/assets/cccd5dba529a68d460962243637992f0e6dbcd4a.png"

export default function FestivalIntroPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] mt-[85px]">
        <div className="absolute inset-0">
          <img src={imgHeroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[rgba(44,44,45,0.8)]" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-5xl font-black text-white mb-4">
              2025 <span className="text-[#338e72]">산단툴페스타</span>
            </h1>
            <p style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-5xl font-black text-white">
              축제 소개
            </p>
          </div>
        </div>
      </section>

      {/* What is Section */}
      <section className="py-24">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-16">
            <img src={imgWhatIs} alt="" className="w-9 h-9" />
            <h2 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[34px] font-black text-[#363636]">
              산단툴페스타 란?
            </h2>
          </div>

          <div className="text-center mb-20">
            <p style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[25px] leading-relaxed text-[#363636] mb-8">
              <span className="font-black">『산단툴페스타_인천』</span>
              <span className="font-medium">은 한국산업단지공단 인천지역에</span><br />
              <span className="font-medium">입주한 기업들이 중심이 되어, 최신 산업기술과 제품을 전시·홍보하고,</span><br />
              <span className="font-medium">산업현장에 필요한 공구·자재·시스템을 제조·유통하는</span><br />
              <span className="font-medium">기업들과의 실질적 협업을 강화하는 산업 교류형 페스티벌입니다.</span><br /><br />
              <span className="font-medium">특히, 인천지역 산업단지 입주기업에게 직접적이고 실질적인 가치를 제공</span><br />
              <span className="font-medium">하는 것을 최우선 목표로 하고 있습니다.</span>
            </p>
          </div>

          <div className="flex justify-center mb-20">
            <img src={imgFeatures} alt="" className="max-w-[645px] w-full" />
          </div>

          <div className="text-center">
            <p style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[25px] leading-relaxed text-[#2c2c2d] mb-8">
              시민이 직접 만나 교류하는 이 행사는<br />
              <span className="font-bold">산업계</span>와 <span className="font-bold">시민</span> 모두에게 <span className="font-bold">실질적 도움과 경험을 제공</span>
            </p>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="flex justify-center mb-12">
            <img src={imgGoals} alt="" className="max-w-[645px] w-full" />
          </div>

          <div style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="space-y-2 text-[25px] text-[#2c2c2d]">
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
      </section>

      {/* Features Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 산단기업전시 */}
            <div className="bg-[#388e72] rounded-lg p-8 text-white text-center">
              <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-bold mb-4">산단기업전시</h3>
              <div className="h-px bg-white/30 mb-4" />
              <h4 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-lg font-bold mb-4">산업공구전시</h4>
              <div className="h-px bg-white/30 mb-4" />
              <h4 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-lg font-bold mb-4">시민체험</h4>
            </div>

            {/* 채용박람회 */}
            <div className="bg-[#388e72] rounded-lg p-8 text-white text-center">
              <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-bold mb-4">채용박람회</h3>
              <div className="space-y-4 mt-8">
                <p className="text-sm">시민이 직접 만나 교류하는 이 행사는</p>
                <p className="text-sm">산업계와 시민 모두에게 실질적 도움과 경험을 제공</p>
              </div>
            </div>

            {/* 산업공구전시 */}
            <div className="bg-[#388e72] rounded-lg p-8 text-white text-center">
              <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-bold mb-4">산업공구전시</h3>
              <div className="space-y-4 mt-8">
                <p className="text-sm">시민이 직접 만나 교류하는 이 행사는</p>
                <p className="text-sm">산업계와 시민 모두에게 실질적 도움과 경험을 제공</p>
              </div>
            </div>

            {/* 시민체험 */}
            <div className="bg-[#388e72] rounded-lg p-8 text-white text-center">
              <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl font-bold mb-4">시민체험</h3>
              <div className="space-y-4 mt-8">
                <p className="text-sm">시민이 직접 만나 교류하는 이 행사는</p>
                <p className="text-sm">산업계와 시민 모두에게 실질적 도움과 경험을 제공</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            <div>
              <h3 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-5xl font-black text-[#388e72] mb-4">기술</h3>
              <div className="w-2 h-2 bg-[#388e72] rounded-full mx-auto mb-4" />
              <h4 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-xl font-bold text-[#2c2c2d] mb-4">기업</h4>
              <div className="w-2 h-2 bg-[#388e72] rounded-full mx-auto mb-4" />
              <h4 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-xl font-bold text-[#2c2c2d] mb-4">공업</h4>
              <div className="w-2 h-2 bg-[#388e72] rounded-full mx-auto mb-4" />
              <h4 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-xl font-bold text-[#2c2c2d]">도시</h4>
            </div>
            <div className="md:col-span-3 flex items-center">
              <div className="space-y-6 text-left">
                <p style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[20px] text-[#363636]">
                  <span className="font-bold">'기술'</span>이 시민과 만나는 산업문화의 대중화
                </p>
                <p style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[20px] text-[#363636]">
                  <span className="font-bold">'기업'</span>이 인재와 만나는 실질적 채용연계
                </p>
                <p style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[20px] text-[#363636]">
                  <span className="font-bold">'산업 제품'</span>과 소비자와 만나는 B2C 융합시장 형성
                </p>
                <p style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[20px] text-[#363636]">
                  <span className="font-bold">'도시'</span>가 산업 브랜드화되는 산업문화 도시 모델
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[#338e72]">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-12">
            <img src={imgToolfesta} alt="" className="w-10 h-10" />
            <h2 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-[40px] font-black text-white drop-shadow-lg">
              협력사
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="bg-white rounded-lg p-6 flex items-center justify-center h-24">
                <img src={logo} alt={`Partner ${index + 1}`} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {companyLogos.map((logo, index) => (
              <div key={index} className="bg-white/10 rounded p-4 flex items-center justify-center h-16">
                <img src={logo} alt={`Company ${index + 1}`} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}