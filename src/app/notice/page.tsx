'use client'

import { Suspense } from 'react'
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

function NoticeList() {
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
    }).replace(/\. /g, '.').replace(/\.$/, '')
  }

  return (
    <>
      {/* Write Button (Admin) */}
      <div className="flex justify-end mb-4">
        <Link
          href="/notice/write"
          className="inline-flex items-center px-6 py-2.5 bg-[#388d71] text-white font-bold rounded-lg hover:bg-[#2a6f5a] transition-colors"
          style={{ fontFamily: 'NanumSquare, sans-serif' }}
        >
          글쓰기
        </Link>
      </div>

      {/* Notice List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        {loading ? (
          <div className="text-center py-10">
            <p className="text-gray-500">로딩중...</p>
          </div>
        ) : notices.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">등록된 공지사항이 없습니다.</p>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {notices.map((notice, index) => (
              <li
                key={notice.id}
                onClick={() => handleNoticeClick(notice.id)}
                className="hover:bg-gray-50 transition cursor-pointer px-4 py-4 md:px-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-[#388d71] font-bold text-lg md:text-xl">
                      {totalCount - ((currentPage - 1) * ITEMS_PER_PAGE) - index}
                    </span>
                    <h3 style={{ fontFamily: 'NanumSquare, sans-serif' }} className="text-base md:text-lg font-medium text-[#363636]">
                      {notice.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="hidden md:block">조회 {notice.views}</span>
                    <span>{formatDate(notice.created_at)}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 gap-2">
          {/* First Page */}
          <button
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>

          {/* Previous */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-1 md:gap-4">
            {(() => {
              const pageNumbers = []
              const maxVisible = 5
              let start = Math.max(1, currentPage - 2)
              const end = Math.min(totalPages, start + maxVisible - 1)

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
                  className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg font-medium ${
                    currentPage === page
                      ? 'bg-[#388d71] text-white'
                      : 'border border-gray-300 bg-white hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))
            })()}
          </div>

          {/* Next */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Last Page */}
          <button
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
            className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  )
}

export default function NoticePage() {
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
            <h1 style={{ fontFamily: 'NanumSquare, sans-serif' }} className="text-3xl md:text-5xl font-black text-white mb-4">
              2025 <span className="text-[#338e72]">산단툴페스타</span>
            </h1>
            <p style={{ fontFamily: 'NanumSquare, sans-serif' }} className="text-3xl md:text-5xl font-black text-white">
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
            <img src={imgNoticeIcon} alt="" className="w-9 h-9 mt-1" />
            <h2 style={{ fontFamily: 'NanumSquare, sans-serif' }} className="text-2xl md:text-[34px] font-black text-[#363636] leading-none">
              공지사항
            </h2>
          </div>

          <Suspense fallback={
            <div className="text-center py-10">
              <p className="text-gray-500">로딩중...</p>
            </div>
          }>
            <NoticeList />
          </Suspense>
        </div>
      </section>

      <Footer />
    </div>
  )
}