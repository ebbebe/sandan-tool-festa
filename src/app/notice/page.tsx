'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const imgHeroBg = "http://localhost:3845/assets/945208d7854e1b74af3b553f15b0752fe5f3493e.png"
const imgDivider = "/assets/divider.png"
const imgNoticeIcon = "/assets/dot-icon.png"

// Sample notice data
const notices = [
  {
    id: 2,
    title: "[공지] 2025년 산단툴페스타_인천 모집 부스 현황 안내",
    date: "2025.09.11",
    views: 12345
  },
  {
    id: 1,
    title: "[공지] 2025년 산단툴페스타_인천 모집공고 안내",
    date: "2025.09.11",
    views: 123
  }
]

export default function NoticePage() {
  const handleNoticeClick = (id: number) => {
    window.location.href = `/notice/${id}`
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[374px] mt-[85px]">
        <div className="absolute inset-0">
          <img src={imgHeroBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[rgba(44,44,45,0.8)]" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <h1 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-3xl md:text-5xl font-black text-white mb-4">
              2025 <span className="text-[#338e72]">산단툴페스타</span>
            </h1>
            <p style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-3xl md:text-5xl font-black text-white">
              공지사항
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-white">
        <img src={imgDivider} alt="" className="w-full h-[29px]" />
      </div>

      {/* Notice Board Section */}
      <section className="pt-16 md:pt-20 pb-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="flex items-center justify-center gap-4 mb-16">
            <img src={imgNoticeIcon} alt="" className="w-9 h-9" />
            <h2 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl md:text-[34px] font-black text-[#363636]">
              공지사항
            </h2>
          </div>

          {/* Notice Table */}
          <div className="mb-12 overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b-[5px] border-[#2c2c2d]">
                  <th style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="py-3 md:py-4 text-center font-black text-sm md:text-lg text-[#2c2c2d] w-[12%] md:w-[10%]">
                    번호
                  </th>
                  <th style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="py-3 md:py-4 text-left pl-2 md:pl-4 font-black text-sm md:text-lg text-[#2c2c2d] w-[48%] md:w-[55%]">
                    제목
                  </th>
                  <th style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="py-3 md:py-4 text-center font-black text-sm md:text-lg text-[#2c2c2d] w-[22%] md:w-[20%]">
                    작성일
                  </th>
                  <th style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="py-3 md:py-4 text-center font-black text-sm md:text-lg text-[#2c2c2d] w-[18%] md:w-[15%]">
                    조회
                  </th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice) => (
                  <tr
                    key={notice.id}
                    className="border-b border-[#d9d9d9] hover:bg-gray-50 transition-colors cursor-pointer"
                    onClick={() => handleNoticeClick(notice.id)}
                  >
                    <td style={{ fontFamily: 'Pretendard, sans-serif' }} className="py-4 md:py-6 text-center font-bold text-sm md:text-lg text-[#2c2c2d]">
                      {notice.id}
                    </td>
                    <td style={{ fontFamily: 'Pretendard, sans-serif' }} className="py-4 md:py-6 pl-2 md:pl-4 font-bold text-sm md:text-lg text-[#2c2c2d] break-words">
                      {notice.title}
                    </td>
                    <td style={{ fontFamily: 'Pretendard, sans-serif' }} className="py-4 md:py-6 text-center font-bold text-sm md:text-lg text-[#2c2c2d]">
                      {notice.date}
                    </td>
                    <td style={{ fontFamily: 'Pretendard, sans-serif' }} className="py-4 md:py-6 text-center font-bold text-sm md:text-lg text-[#2c2c2d]">
                      {notice.views.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 md:gap-6">
            <button className="text-[#666666] hover:text-[#2c2c2d] transition-colors p-2">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L2 6L7 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>

            <div className="flex items-center gap-1 md:gap-4">
              <button className="relative w-8 h-8 md:w-6 md:h-6 flex items-center justify-center">
                <span className="absolute inset-0 bg-[#388d71] rounded-full"></span>
                <span style={{ fontFamily: 'SUIT, sans-serif' }} className="relative text-white text-sm md:text-[15px] z-10">1</span>
              </button>
              {[2, 3, 4, 5].map((page) => (
                <button key={page} style={{ fontFamily: 'SUIT, sans-serif' }} className="text-[#666666] hover:text-[#2c2c2d] text-sm md:text-[15px] px-2 py-1 transition-colors">
                  {page}
                </button>
              ))}
            </div>

            <button className="text-[#666666] hover:text-[#2c2c2d] transition-colors p-2">
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}