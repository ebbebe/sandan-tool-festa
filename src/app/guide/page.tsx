'use client'

import { useState, useRef, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const imgHeroBg = "/assets/image-96.png"
const imgDivider = "/assets/divider.png"
const imgLocationIcon = "/assets/dot-icon.png"
const imgBoothMap = "/assets/map.jpg"

export default function GuidePage() {
  const [scale, setScale] = useState(0.81)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) return

      e.preventDefault()
      const delta = e.deltaY > 0 ? 0.9 : 1.1
      setScale(prev => Math.min(Math.max(prev * delta, 0.5), 3))
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      setIsDragging(true)
      setDragStart({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      })
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || e.touches.length !== 1) return
    setPosition({
      x: e.touches[0].clientX - dragStart.x,
      y: e.touches[0].clientY - dragStart.y
    })
  }

  const handleReset = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }
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
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD74TBJ2wioDVaBJIqHHjccIfIk1NJHKuQ&q=인천+남동구+논현동+775+소래포구+해오름+광장&zoom=16&maptype=roadmap"
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
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD74TBJ2wioDVaBJIqHHjccIfIk1NJHKuQ&q=인천+남동구+논현동+754-4&zoom=17&maptype=roadmap"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="소래 제1 공영 주차장"
                ></iframe>
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
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD74TBJ2wioDVaBJIqHHjccIfIk1NJHKuQ&q=인천+남동구+논현동+750-2&zoom=17&maptype=roadmap"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="소래 제2공영 주차장"
                ></iframe>
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

          {/* Booth Layout Map - Interactive */}
          <div
            ref={containerRef}
            className="relative rounded-[13px] overflow-hidden bg-[#fbfbfb] h-[500px] cursor-move"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
            style={{ userSelect: 'none' }}
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transformOrigin: 'center',
                transition: isDragging ? 'none' : 'transform 0.2s'
              }}
            >
              <img
                src={imgBoothMap}
                alt="부스 배치도"
                className="max-w-none h-full"
                draggable="false"
              />
            </div>
            {/* Zoom Controls */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
              <button
                onClick={() => setScale(prev => Math.min(prev * 1.2, 3))}
                className="bg-white/90 hover:bg-white w-10 h-10 rounded-lg shadow-md flex items-center justify-center text-xl font-bold text-[#2c2c2d] transition-colors"
              >
                +
              </button>
              <button
                onClick={() => setScale(prev => Math.max(prev * 0.8, 0.5))}
                className="bg-white/90 hover:bg-white w-10 h-10 rounded-lg shadow-md flex items-center justify-center text-xl font-bold text-[#2c2c2d] transition-colors"
              >
                −
              </button>
              <button
                onClick={handleReset}
                className="bg-white/90 hover:bg-white w-10 h-10 rounded-lg shadow-md flex items-center justify-center text-xs font-bold text-[#2c2c2d] transition-colors"
                title="초기화"
              >
                ⟲
              </button>
            </div>
          </div>

          {/* Zone Information - Simple */}
          <div className="mt-12 flex justify-center gap-6 md:gap-24">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#DC663B] rounded-full"></div>
                <h4 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-xl md:text-2xl font-black text-[#2c2c2d]">
                  A ZONE
                </h4>
              </div>
              <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-base md:text-lg text-[#2c2c2d] text-right mt-1">
                24개소
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#F3A54E] rounded-full"></div>
                <h4 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-xl md:text-2xl font-black text-[#2c2c2d]">
                  B ZONE
                </h4>
              </div>
              <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-base md:text-lg text-[#2c2c2d] text-right mt-1">
                150개소
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#2174A8] rounded-full"></div>
                <h4 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-xl md:text-2xl font-black text-[#2c2c2d]">
                  C ZONE
                </h4>
              </div>
              <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-base md:text-lg text-[#2c2c2d] text-right mt-1">
                180개소
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}