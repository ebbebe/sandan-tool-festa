'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { supabase, Notice } from '@/lib/supabase'

const imgHeroBg = "/assets/notice-hero-bg.png"
const imgDivider = "/assets/divider.png"
const imgNoticeIcon = "/assets/dot-icon.png"

const ITEMS_PER_PAGE = 10

export default function NoticePage() {
  const [notices, setNotices] = useState<Notice[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [loading, setLoading] = useState(true)
  const searchParams = useSearchParams()
  const router = useRouter()
  const currentPage = Number(searchParams.get('page') || 1)

  useEffect(() => {
    fetchNotices()
  }, [currentPage])

  const fetchNotices = async () => {
    setLoading(true)
    try {
      // Get total count
      const { count } = await supabase
        .from('notices')
        .select('*', { count: 'exact', head: true })

      setTotalCount(count || 0)

      // Get paginated data
      const from = (currentPage - 1) * ITEMS_PER_PAGE
      const to = from + ITEMS_PER_PAGE - 1

      const { data, error } = await supabase
        .from('notices')
        .select('*')
        .order('id', { ascending: false })
        .range(from, to)

      if (error) throw error
      setNotices(data || [])
    } catch (error) {
      console.error('Error fetching notices:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleNoticeClick = (id: number) => {
    router.push(`/notice/${id}`)
  }

  const handlePageChange = (page: number) => {
    router.push(`/notice?page=${page}`)
  }

  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE)
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\. /g, '.').replace('.', '')
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

          {/* Write Button (Admin) */}
          <div className="flex justify-end mb-4">
            <Link
              href="/notice/write"
              className="inline-flex items-center px-6 py-2.5 bg-[#388d71] text-white font-bold rounded-lg hover:bg-[#2a6f5a] transition-colors"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
            >
              글쓰기
            </Link>
          </div>

          {/* Notice Table */}
          <div className="mb-12 overflow-x-auto">
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="text-gray-500">로딩 중...</div>
              </div>
            ) : notices.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                등록된 공지사항이 없습니다.
              </div>
            ) : (
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
                  {notices.map((notice, index) => {
                    const noticeNumber = totalCount - ((currentPage - 1) * ITEMS_PER_PAGE) - index
                    return (
                      <tr
                        key={notice.id}
                        className="border-b border-[#d9d9d9] hover:bg-gray-50 transition-colors cursor-pointer"
                        onClick={() => handleNoticeClick(notice.id)}
                      >
                        <td style={{ fontFamily: 'Pretendard, sans-serif' }} className="py-4 md:py-6 text-center font-bold text-sm md:text-lg text-[#2c2c2d]">
                          {noticeNumber}
                        </td>
                        <td style={{ fontFamily: 'Pretendard, sans-serif' }} className="py-4 md:py-6 pl-2 md:pl-4 font-bold text-sm md:text-lg text-[#2c2c2d] break-words">
                          {notice.title}
                        </td>
                        <td style={{ fontFamily: 'Pretendard, sans-serif' }} className="py-4 md:py-6 text-center font-bold text-sm md:text-lg text-[#2c2c2d]">
                          {formatDate(notice.created_at)}
                        </td>
                        <td style={{ fontFamily: 'Pretendard, sans-serif' }} className="py-4 md:py-6 text-center font-bold text-sm md:text-lg text-[#2c2c2d]">
                          {notice.views.toLocaleString()}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 md:gap-6">
              <button
                className="text-[#666666] hover:text-[#2c2c2d] transition-colors p-2 disabled:opacity-30 disabled:cursor-not-allowed"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1L2 6L7 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>

              <div className="flex items-center gap-1 md:gap-4">
                {(() => {
                  const pageNumbers = []
                  const maxVisible = 5
                  let start = Math.max(1, currentPage - 2)
                  let end = Math.min(totalPages, start + maxVisible - 1)

                  if (end - start < maxVisible - 1) {
                    start = Math.max(1, end - maxVisible + 1)
                  }

                  for (let i = start; i <= end; i++) {
                    pageNumbers.push(i)
                  }

                  return pageNumbers.map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={page === currentPage
                        ? "relative w-8 h-8 md:w-6 md:h-6 flex items-center justify-center"
                        : "text-[#666666] hover:text-[#2c2c2d] text-sm md:text-[15px] px-2 py-1 transition-colors"
                      }
                    >
                      {page === currentPage ? (
                        <>
                          <span className="absolute inset-0 bg-[#388d71] rounded-full"></span>
                          <span style={{ fontFamily: 'SUIT, sans-serif' }} className="relative text-white text-sm md:text-[15px] z-10">{page}</span>
                        </>
                      ) : (
                        <span style={{ fontFamily: 'SUIT, sans-serif' }}>{page}</span>
                      )}
                    </button>
                  ))
                })()}
              </div>

              <button
                className="text-[#666666] hover:text-[#2c2c2d] transition-colors p-2 disabled:opacity-30 disabled:cursor-not-allowed"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L6 6L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}