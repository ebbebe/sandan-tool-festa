'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const imgHeroBg = "http://localhost:3845/assets/2e4ed3f77f17331ca0609e3195860120829368f1.png"
const imgWhatIs = "http://localhost:3845/assets/2b74a568f13f320f229c1baf3ff01df16a191960.png"
const imgFeatures = "http://localhost:3845/assets/ef71dfb5b7137ee9d7a742d51d877996ed35d184.png"
const imgGoals = "http://localhost:3845/assets/5bc6e11c61ee114bdad1dc02efab537d94e10361.png"
const imgDivider = "http://localhost:3845/assets/76873654c83e8f7026252140e3155eb4b146470c.png"

// Tool icons
const toolIcons = [
  "http://localhost:3845/assets/bf2cf264d89900c37ed0866c0ac9941c13bb1798.png", // image 103
  "http://localhost:3845/assets/963c6c237312654e9f4cfa4c150e3a9305fd5416.png", // image 106
  "http://localhost:3845/assets/2d0b6d5c667664004781a9edf4c4724ead35fa6b.png", // image 104
  "http://localhost:3845/assets/fa8c0b6e54918e2c548d106f4a74d2e8a038966c.png", // image 101
  "http://localhost:3845/assets/2fe31353972229d8363e44667a47642be61c244f.png", // image 102
]

const imgToolfesta = "http://localhost:3845/assets/cccd5dba529a68d460962243637992f0e6dbcd4a.png"

// Company logos organized by rows
const companyLogosRow1 = [
  "http://localhost:3845/assets/caad686db2ea78c1f64c190306b551871ef9fe09.png",
  "http://localhost:3845/assets/7bdcb28ae355e2c26918dd74430f72ed7f838ac8.png",
  "http://localhost:3845/assets/a0c12736db6832c596e6d6649e6e9beda11d305e.png",
  "http://localhost:3845/assets/8720a1b7e3424275d7c3a2b212fb7e44e277eb8c.png",
  "http://localhost:3845/assets/5492befe73b07950e13816bc53c4c29b44d8d6c3.png"
]

const companyLogosRow2 = [
  "http://localhost:3845/assets/53452348a813bf938417e473904db6b4af161ac1.png",
  "http://localhost:3845/assets/ed5b0351d88e45401bb33ba389a93563acd2d88a.png",
  "http://localhost:3845/assets/b5e4c8326108a7436aeb9ba4e2ffc4b533445a3f.png",
  "http://localhost:3845/assets/46b4694b68135bfdf99f3984c4d28f09df68cab7.png",
  "http://localhost:3845/assets/f0941ce8c827b13b657e88d6c25b1fddcf92edc9.png"
]

const companyLogosRow3 = [
  "http://localhost:3845/assets/8cc0c9dbe7d5e65c01bc531692562aefb730b87f.png",
  "http://localhost:3845/assets/f663c2d74e5846d33677adc032736ad40ac92eee.png",
  "http://localhost:3845/assets/dff792148478a824c4fa655e8b728ac800435dc4.png",
  "http://localhost:3845/assets/cf07a186fa8cf5628aa2d8f563d1e777903e6e3f.png"
]

const companyLogosRow4 = [
  "http://localhost:3845/assets/946545957981c1d430eff783815b1542f63afe3f.png",
  "http://localhost:3845/assets/89348c9db527d63718a88f5b2ebc7e585908f421.png",
  "http://localhost:3845/assets/b8983fe2e941dad303bf1121d105f6ca758b53f2.png",
  "http://localhost:3845/assets/1f2de7f9e6556761bcbac559a9e1a3096d87dd6f.png"
]

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
            <img src={imgWhatIs} alt="" className="w-9 h-9" />
            <h2 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl md:text-[34px] font-black text-[#363636]">
              산단툴페스타 란?
            </h2>
          </div>

          <div className="text-center mb-20 px-4">
            <p style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-base sm:text-lg md:text-[25px] leading-relaxed text-[#363636] mb-8">
              <span className="font-black">『산단툴페스타_인천』</span>
              <span className="font-medium">은 한국산업단지공단 인천지역에</span>
              <span className="hidden sm:inline"><br /></span><span className="inline sm:hidden"> </span>
              <span className="font-medium">입주한 기업들이 중심이 되어, 최신 산업기술과 제품을 전시&middot;홍보하고,</span>
              <span className="hidden sm:inline"><br /></span><span className="inline sm:hidden"> </span>
              <span className="font-medium">산업현장에 필요한 공구&middot;자재&middot;시스템을 제조&middot;유통하는</span>
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
                <span className="font-bold">&apos;기술&apos;</span>이 시민과 만나는 산업문화의 대중화
              </p>
              <p className="font-medium">
                <span className="font-bold">&apos;기업&apos;</span>이 인재와 만나는 실질적 채용연계
              </p>
              <p className="font-medium">
                <span className="font-bold">&apos;산업 제품&apos;</span>과 소비자와 만나는 B2C 융합시장 형성
              </p>
              <p className="font-medium">
                <span className="font-bold">&apos;도시&apos;</span>가 산업 브랜드화되는 산업문화 도시 모델
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
          <div className="flex items-center justify-center gap-4 mb-16">
            <img src={imgToolfesta} alt="" className="w-[41px] h-[41px]" />
            <h2 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif', textShadow: 'rgba(0,0,0,0.25) 3px 2px 4px' }} className="text-3xl md:text-[40px] font-black text-white">
              협력사
            </h2>
          </div>

          {/* Company Logos Grid - Row 1 */}
          <div className="mb-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-between items-center gap-4">
              <img src={companyLogosRow1[0]} alt="" className="h-[30px] md:h-[43px] w-auto mx-auto" />
              <img src={companyLogosRow1[1]} alt="" className="h-[30px] md:h-[43px] w-auto mx-auto" />
              <img src={companyLogosRow1[2]} alt="" className="h-[30px] md:h-[43px] w-auto mx-auto" />
              <img src={companyLogosRow1[3]} alt="" className="h-[18px] md:h-[23px] w-auto mx-auto" />
              <img src={companyLogosRow1[4]} alt="" className="h-[18px] md:h-[24px] w-auto mx-auto" />
            </div>
          </div>

          {/* Company Logos Grid - Row 2 */}
          <div className="mb-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:justify-between items-center gap-4">
              <img src={companyLogosRow2[0]} alt="" className="h-[18px] md:h-[24px] w-auto mx-auto" />
              <img src={companyLogosRow2[1]} alt="" className="h-[18px] md:h-[24px] w-auto mx-auto" />
              <img src={companyLogosRow2[2]} alt="" className="h-[25px] md:h-[35px] w-auto mx-auto" />
              <img src={companyLogosRow2[3]} alt="" className="h-[20px] md:h-[27px] w-auto mx-auto" />
              <img src={companyLogosRow2[4]} alt="" className="h-[20px] md:h-[27px] w-auto mx-auto" />
            </div>
          </div>

          {/* Company Logos Grid - Row 3 */}
          <div className="mb-10">
            <div className="grid grid-cols-2 md:flex md:justify-between items-center gap-4">
              <img src={companyLogosRow3[0]} alt="" className="h-[30px] md:h-[43px] w-auto mx-auto" />
              <img src={companyLogosRow3[1]} alt="" className="h-[30px] md:h-[44px] w-auto mx-auto" />
              <img src={companyLogosRow3[2]} alt="" className="h-[35px] md:h-[56px] w-auto mx-auto" />
              <img src={companyLogosRow3[3]} alt="" className="h-[18px] md:h-[24px] w-auto mx-auto" />
            </div>
          </div>

          {/* Company Logos Grid - Row 4 */}
          <div>
            <div className="grid grid-cols-2 md:flex md:justify-between items-center gap-4">
              <img src={companyLogosRow4[0]} alt="" className="h-[18px] md:h-[23px] w-auto mx-auto" />
              <img src={companyLogosRow4[1]} alt="" className="h-[18px] md:h-[23px] w-auto mx-auto" />
              <img src={companyLogosRow4[2]} alt="" className="h-[20px] md:h-[27px] w-auto mx-auto" />
              <img src={companyLogosRow4[3]} alt="" className="h-[18px] md:h-[23px] w-auto mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}