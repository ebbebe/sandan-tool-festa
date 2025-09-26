'use client'

import { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const imgHeroBg = "http://localhost:3845/assets/1850d0b4e9293c01ce4ee462407749816cbdded3.png"
const imgDivider = "http://localhost:3845/assets/76873654c83e8f7026252140e3155eb4b146470c.png"
const imgMapPlaceholder = "http://localhost:3845/assets/83856390414c09404f8ac3bddec91b5888ec5467.png"
const imgParking1 = "http://localhost:3845/assets/f45cc72308f0f81522f56bfb94a0d6e53059e897.png"
const imgParking2 = "http://localhost:3845/assets/65032ddea55aec1f43dc08f906d03cff2f8a6539.png"
const imgLocationIcon = "http://localhost:3845/assets/2b74a568f13f320f229c1baf3ff01df16a191960.png"

interface KakaoMap {
  setCenter: (latlng: unknown) => void
}

interface KakaoMarker {
  setMap: (map: KakaoMap | null) => void
}

interface KakaoInfoWindow {
  open: (map: KakaoMap, marker?: KakaoMarker) => void
}

declare global {
  interface Window {
    kakao: {
      maps: {
        Map: new (container: HTMLElement, options: object) => KakaoMap
        Marker: new (options: object) => KakaoMarker
        InfoWindow: new (options: object) => KakaoInfoWindow
        LatLng: new (lat: number, lng: number) => unknown
        load: (callback: () => void) => void
      }
    }
  }
}

export default function GuidePage() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const [mapError, setMapError] = useState(false)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout
    const initializeMap = () => {
      try {
        if (!window.kakao || !window.kakao.maps) {
          timeout = setTimeout(initializeMap, 100)
          return
        }

        const container = mapContainer.current
        if (!container) return

        const options = {
          center: new window.kakao.maps.LatLng(37.4082, 126.6742), // 소래포구 해오름 광장 좌표
          level: 3
        }

        const map = new window.kakao.maps.Map(container, options)

        // 마커 추가
        const markerPosition = new window.kakao.maps.LatLng(37.4082, 126.6742)
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        }) as KakaoMarker
        marker.setMap(map)

        // 인포윈도우 추가
        const iwContent = '<div style="padding:5px;">2025 산단툴페스타<br>소래포구 해오름 광장</div>'
        const iwPosition = new window.kakao.maps.LatLng(37.4082, 126.6742)
        const infowindow = new window.kakao.maps.InfoWindow({
          position: iwPosition,
          content: iwContent
        }) as KakaoInfoWindow
        infowindow.open(map, marker)
        setMapLoaded(true)
      } catch (error) {
        console.error('Map initialization error:', error)
        setMapError(true)
      }
    }

    // API 키가 없거나 잘못된 경우 타임아웃 설정
    const loadTimeout = setTimeout(() => {
      if (!mapLoaded) {
        setMapError(true)
      }
    }, 3000)

    initializeMap()

    return () => {
      clearTimeout(timeout)
      clearTimeout(loadTimeout)
    }
  }, [mapLoaded])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* NOTE: Replace YOUR_KAKAO_API_KEY with actual Kakao Maps API key */}
      {!mapError && (
        <Script
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_API_KEY&autoload=false&libraries=services"
          strategy="afterInteractive"
          onError={() => setMapError(true)}
          onLoad={() => {
            if (window.kakao && window.kakao.maps) {
              window.kakao.maps.load(() => {
                // 맵 로드 완료 후 초기화
                const event = new CustomEvent('kakaoMapLoaded')
                window.dispatchEvent(event)
              })
            } else {
              setMapError(true)
            }
          }}
        />
      )}
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
            <img src={imgLocationIcon} alt="" className="w-9 h-9" />
            <h2 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-2xl md:text-[34px] font-black text-[#363636]">
              오시는 길
            </h2>
          </div>

          {/* Kakao Map or Placeholder */}
          <div className="mb-12">
            {mapError ? (
              <div className="relative rounded-[13px] overflow-hidden h-[500px] mb-4">
                <img src={imgMapPlaceholder} alt="" className="w-full h-full object-cover" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <p style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-[40px] font-black text-[#be2e2e]">
                  </p>
                </div>
              </div>
            ) : (
              <div
                ref={mapContainer}
                className="rounded-[13px] overflow-hidden h-[500px] mb-4"
                style={{ width: '100%' }}
              />
            )}

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
            <img src={imgLocationIcon} alt="" className="w-9 h-9" />
            <h2 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-2xl md:text-[34px] font-black text-[#363636]">
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
            <img src={imgLocationIcon} alt="" className="w-9 h-9" />
            <h2 style={{ fontFamily: "Wanted Sans, WantedGothic, sans-serif" }} className="text-2xl md:text-[34px] font-black text-[#363636]">
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