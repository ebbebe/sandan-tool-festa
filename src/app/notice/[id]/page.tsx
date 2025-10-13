'use client'

import { useState, useEffect, useRef } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { supabase, Notice } from '@/lib/supabase'

const imgHeroBg = "/assets/notice-hero-bg.png"
const imgDivider = "/assets/divider.png"
const imgNoticeIcon = "/assets/dot-icon.png"

const PASSWORD = '!!2025sandan'

export default function NoticeDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [notice, setNotice] = useState<Notice | null>(null)
  const [nextNotice, setNextNotice] = useState<Notice | null>(null)
  const [prevNotice, setPrevNotice] = useState<Notice | null>(null)
  const [loading, setLoading] = useState(true)

  // Popover states
  const [showPasswordPopover, setShowPasswordPopover] = useState(false)
  const [showConfirmPopover, setShowConfirmPopover] = useState(false)
  const [password, setPassword] = useState('')
  const [deleteError, setDeleteError] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const deleteButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    fetchNotice()
  }, [params.id])

  // Handle download button clicks
  useEffect(() => {
    const handleDownloadClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const downloadBtn = target.closest('#download-forms-btn')

      if (downloadBtn) {
        e.preventDefault()
        const files = [
          '/downloads/2025 산단툴페스타_인천 참가신청서(A).hwp',
          '/downloads/2025 산단툴페스타_인천 참가신청서(B).hwp',
          '/downloads/2025 산단툴페스타_인천 참가신청서(C).hwp'
        ]

        files.forEach((file, index) => {
          setTimeout(() => {
            const link = document.createElement('a')
            link.href = file
            link.download = file.split('/').pop() || ''
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }, index * 300)
        })
      }
    }

    document.addEventListener('click', handleDownloadClick)
    return () => document.removeEventListener('click', handleDownloadClick)
  }, [])

  useEffect(() => {
    // Close popover when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.popover-container')) {
        setShowPasswordPopover(false)
        setShowConfirmPopover(false)
        setPassword('')
        setDeleteError('')
      }
    }

    if (showPasswordPopover || showConfirmPopover) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showPasswordPopover, showConfirmPopover])

  const fetchNotice = async () => {
    setLoading(true)
    try {
      const id = Number(params.id)

      // Get current notice
      const { data: currentNotice, error } = await supabase
        .from('notices')
        .select('*')
        .eq('id', id)
        .single()

      if (error || !currentNotice) {
        setNotice(null)
        return
      }

      setNotice(currentNotice)

      // Update view count
      await supabase
        .from('notices')
        .update({ views: currentNotice.views + 1 })
        .eq('id', id)

      // Get next notice (newer)
      const { data: next } = await supabase
        .from('notices')
        .select('id, title, created_at')
        .gt('id', id)
        .order('id', { ascending: true })
        .limit(1)
        .single()

      setNextNotice(next as Notice | null)

      // Get previous notice (older)
      const { data: prev } = await supabase
        .from('notices')
        .select('id, title, created_at')
        .lt('id', id)
        .order('id', { ascending: false })
        .limit(1)
        .single()

      setPrevNotice(prev as Notice | null)

    } catch (error) {
      console.error('Error fetching notice:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\. /g, '.').replace(/\.$/, '')
  }

  const handleDeleteClick = () => {
    setShowPasswordPopover(true)
    setPassword('')
    setDeleteError('')
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === PASSWORD) {
      setShowPasswordPopover(false)
      setShowConfirmPopover(true)
      setPassword('')
      setDeleteError('')
    } else {
      setDeleteError('패스워드가 일치하지 않습니다.')
    }
  }

  const handleDeleteConfirm = async () => {
    setIsDeleting(true)
    try {
      const { error } = await supabase
        .from('notices')
        .delete()
        .eq('id', Number(params.id))

      if (error) throw error

      // Redirect with success message
      router.push('/notice')
    } catch (error) {
      console.error('Error deleting notice:', error)
      setDeleteError('삭제 중 오류가 발생했습니다.')
      setIsDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p>로딩 중...</p>
        </div>
        <Footer />
      </div>
    )
  }

  if (!notice) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <p>게시글을 찾을 수 없습니다.</p>
        </div>
        <Footer />
      </div>
    )
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

      {/* Notice Detail Section */}
      <section className="pt-16 md:pt-20 pb-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          {/* Section Title */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <img src={imgNoticeIcon} alt="" className="w-9 h-9" />
            <h2 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl md:text-[34px] font-black text-[#363636]">
              공지사항
            </h2>
          </div>

          {/* Notice Content */}
          <div className="bg-white rounded-lg">
            {/* Notice Header */}
            <div className="border-b-4 border-[#2c2c2d] pb-4 mb-8">
              <h3 style={{ fontFamily: 'Pretendard, sans-serif' }} className="text-xl md:text-2xl font-bold text-[#2c2c2d] mb-4">
                {notice.title}
              </h3>
              <div className="flex items-center justify-between text-sm md:text-base text-gray-600">
                <div className="flex items-center gap-6">
                  <span style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    작성일: {formatDate(notice.created_at)}
                  </span>
                  <span style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    조회수: {notice.views.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-2 relative">
                  <Link
                    href={`/notice/edit/${notice.id}`}
                    className="px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600 transition-colors"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    수정
                  </Link>
                  <button
                    ref={deleteButtonRef}
                    onClick={handleDeleteClick}
                    className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    삭제
                  </button>

                  {/* Password Popover */}
                  {showPasswordPopover && (
                    <div className="popover-container absolute top-full right-0 mt-2 z-50">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-72">
                        <h4 className="text-sm font-bold mb-3" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                          패스워드 확인
                        </h4>
                        <form onSubmit={handlePasswordSubmit}>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#388d71] text-gray-900 text-sm mb-2"
                            placeholder="패스워드를 입력하세요"
                            style={{ fontFamily: 'Pretendard, sans-serif' }}
                            autoFocus
                            required
                          />
                          {deleteError && (
                            <p className="text-red-500 text-xs mb-2" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                              {deleteError}
                            </p>
                          )}
                          <div className="flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                setShowPasswordPopover(false)
                                setPassword('')
                                setDeleteError('')
                              }}
                              className="px-3 py-1.5 text-sm bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors"
                              style={{ fontFamily: 'Pretendard, sans-serif' }}
                            >
                              취소
                            </button>
                            <button
                              type="submit"
                              className="px-3 py-1.5 text-sm bg-[#388d71] text-white rounded hover:bg-[#2a6f5a] transition-colors"
                              style={{ fontFamily: 'Pretendard, sans-serif' }}
                            >
                              확인
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}

                  {/* Delete Confirm Popover */}
                  {showConfirmPopover && (
                    <div className="popover-container absolute top-full right-0 mt-2 z-50">
                      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 w-80">
                        <h4 className="text-sm font-bold mb-3" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                          삭제 확인
                        </h4>
                        <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                          정말로 이 공지사항을 삭제하시겠습니까?
                          <br />
                          삭제된 내용은 복구할 수 없습니다.
                        </p>
                        {deleteError && (
                          <p className="text-red-500 text-xs mb-3" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                            {deleteError}
                          </p>
                        )}
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => {
                              setShowConfirmPopover(false)
                              setDeleteError('')
                            }}
                            disabled={isDeleting}
                            className="px-3 py-1.5 text-sm bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition-colors disabled:opacity-50"
                            style={{ fontFamily: 'Pretendard, sans-serif' }}
                          >
                            취소
                          </button>
                          <button
                            onClick={handleDeleteConfirm}
                            disabled={isDeleting}
                            className="px-3 py-1.5 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors disabled:opacity-50"
                            style={{ fontFamily: 'Pretendard, sans-serif' }}
                          >
                            {isDeleting ? '삭제 중...' : '삭제'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Notice Body */}
            <div
              className="prose max-w-none mb-12 text-[#2c2c2d]"
              style={{ fontFamily: 'Pretendard, sans-serif' }}
              dangerouslySetInnerHTML={{ __html: notice.content }}
            />

            {/* Notice Footer - Navigation */}
            <div className="border-t border-gray-300 pt-8">
              {/* Previous/Next Posts */}
              <div className="space-y-3 mb-8">
                {nextNotice && (
                  <Link href={`/notice/${nextNotice.id}`} className="flex items-center justify-between p-4 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-500">다음글 ▲</span>
                      <span style={{ fontFamily: 'Pretendard, sans-serif' }} className="text-[#2c2c2d] font-medium">
                        {nextNotice.title}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">{formatDate(nextNotice.created_at)}</span>
                  </Link>
                )}
                {prevNotice && (
                  <Link href={`/notice/${prevNotice.id}`} className="flex items-center justify-between p-4 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-500">이전글 ▼</span>
                      <span style={{ fontFamily: 'Pretendard, sans-serif' }} className="text-[#2c2c2d] font-medium">
                        {prevNotice.title}
                      </span>
                    </div>
                    <span className="text-gray-500 text-sm">{formatDate(prevNotice.created_at)}</span>
                  </Link>
                )}
              </div>

              {/* Back to List Button */}
              <div className="flex justify-center">
                <Link
                  href="/notice"
                  className="inline-flex items-center px-8 py-3 bg-[#388d71] text-white font-bold rounded-lg hover:bg-[#2a6f5a] transition-colors"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  목록으로
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}