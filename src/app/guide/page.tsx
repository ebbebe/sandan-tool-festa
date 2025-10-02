'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const imgHeroBg = "/assets/image-96.png"
const imgDivider = "/assets/divider.png"
const imgParking1 = "/assets/guide-parking-1.png"
const imgParking2 = "/assets/guide-parking-2.png"
const imgLocationIcon = "/assets/dot-icon.png"

export default function GuidePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[375px] mt-[85px]">
        <div className="absolute inset-0">
          <img src={imgHeroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[rgba(44,44,45,0.8)]" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-3xl md:text-5xl font-black text-white mb-4">
              2025 <span className="text-[#338e72]">산단툴페스타</span>
            </h1>
            <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-3xl md:text-5xl font-black text-white">
              현장안내
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-white">
        <img src={imgDivider} alt="" className="w-full h-[29px]" />
      </div>

      {/* Directions Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-16">
            <img src={imgLocationIcon} alt="" className="w-9 h-9 mt-1" />
            <h2 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-2xl md:text-[34px] font-black text-[#363636] leading-none">
              오시는 길
            </h2>
          </div>

          {/* Google Map Embed */}
          <div className="mb-12">
            <iframe
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD74TBJ2wioDVaBJIqHHjccIfIk1NJHKuQ&q=37.4082,126.6742&zoom=16&maptype=roadmap"
              className="rounded-[13px] overflow-hidden h-[500px] mb-4 w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="소래포구 해오름 광장"
            ></iframe>

            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-lg md:text-xl text-[#2c2c2d]">
                  <span className="font-black">소재지:</span> 인천 남동구 논현동 775, 소래포구 해오름 광장
                </p>
              </div>
              <div>
                <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-lg md:text-xl text-[#2c2c2d]">
                  <span className="font-black">지하철:</span> 수인분당선 소래포구역 1번출구: 도보 8분
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parking Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-12">
            <img src={imgLocationIcon} alt="" className="w-9 h-9 mt-1" />
            <h2 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-2xl md:text-[34px] font-black text-[#363636] leading-none">
              주차장 안내
            </h2>
          </div>

          <div className="text-center mb-16">
            <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-base md:text-lg text-[#2c2c2d] leading-relaxed">
              산단툴페스타 행사는 야외에서 진행되기에 행사장 내 주차장이 없습니다.<br />
              <span className="font-black">행사장 주변 공용주차장</span> 또는 <span className="font-black">소래포구역 공용주차장을</span> 이용해주시기 바랍니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <div className="rounded-[13px] overflow-hidden h-[500px]">
                <img src={imgParking1} alt="소래 제1 공영 주차장" className="w-full h-full object-cover" />
              </div>
              <h3 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-xl md:text-2xl font-black text-[#2c2c2d]">
                소래 제1 공영 주차장
              </h3>
              <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-base md:text-lg text-[#2c2c2d]">
                <span className="font-black">소재지:</span> 인천 남동구 논현동 754-4
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-[13px] overflow-hidden h-[500px]">
                <img src={imgParking2} alt="소래 제2공영 주차장" className="w-full h-full object-cover" />
              </div>
              <h3 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-xl md:text-2xl font-black text-[#2c2c2d]">
                소래 제2공영 주차장
              </h3>
              <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-base md:text-lg text-[#2c2c2d]">
                <span className="font-black">소재지:</span> 인천 남동구 논현동 750-2
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booth Layout Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-12">
            <img src={imgLocationIcon} alt="" className="w-9 h-9 mt-1" />
            <h2 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-2xl md:text-[34px] font-black text-[#363636] leading-none">
              부스 배치도
            </h2>
          </div>

          {/* Placeholder for booth layout */}
          <div className="bg-[#d9d9d9] rounded-[13px] h-[501px] relative flex items-center justify-center">
            <div className="text-center">
              <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-2xl md:text-[40px] font-black text-[#be2e2e] mb-8">
                제공 예정
              </p>
              <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-xl md:text-[40px] font-black text-[#be2e2e] leading-tight mb-8">
              </p>
              <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-xl md:text-[40px] font-black text-[#00e82a]">
              </p>
            </div>
          </div>

          {/* Zone Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-xl md:text-2xl font-black text-[#2c2c2d] mb-2">
                A ZONE
              </h4>
              <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-base md:text-lg text-[#2c2c2d]">
                BLABLABLALBLALBBLALBLA
              </p>
              <div className="mt-8">
                <h4 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-xl md:text-2xl font-black text-[#2c2c2d] mb-2">
                  화장실
                </h4>
                <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-base md:text-lg text-[#2c2c2d]">
                  BLABLABLALBLALBBLALBLA
                </p>
              </div>
            </div>

            <div className="text-center">
              <h4 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-xl md:text-2xl font-black text-[#2c2c2d] mb-2">
                B ZONE
              </h4>
              <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-base md:text-lg text-[#2c2c2d]">
                BLABLABLALBLALBBLALBLA
              </p>
              <div className="mt-8">
                <h4 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-xl md:text-2xl font-black text-[#2c2c2d] mb-2">
                  의무실
                </h4>
                <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-base md:text-lg text-[#2c2c2d]">
                  BLABLABLALBLALBBLALBLA
                </p>
              </div>
            </div>

            <div className="text-center">
              <h4 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-xl md:text-2xl font-black text-[#2c2c2d] mb-2">
                C ZONE
              </h4>
              <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-base md:text-lg text-[#2c2c2d]">
                BLABLABLALBLALBBLALBLA
              </p>
              <div className="mt-8">
                <h4 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-xl md:text-2xl font-black text-[#2c2c2d] mb-2">
                  운영본부
                </h4>
                <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-base md:text-lg text-[#2c2c2d]">
                  BLABLABLALBLALBBLALBLA
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}