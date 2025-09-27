'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { supabase, Notice } from '@/lib/supabase'

const imgHeroBg = "/assets/notice-hero-bg.png"
const imgDivider = "/assets/divider.png"
const imgNoticeIcon = "/assets/dot-icon.png"

const PASSWORD = '!!2025sandan'

export default function NoticeEditPage() {
  const params = useParams()
  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [password, setPassword] = useState('')
  const [notice, setNotice] = useState<Notice | null>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchNotice()
  }, [params.id])

  const fetchNotice = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('notices')
        .select('*')
        .eq('id', Number(params.id))
        .single()

      if (error || !data) {
        setError('게시글을 찾을 수 없습니다.')
        setTimeout(() => {
          router.push('/notice')
        }, 2000)
        return
      }

      setNotice(data)
      setTitle(data.title)
      setContent(data.content)
    } catch (error) {
      console.error('Error fetching notice:', error)
      setError('게시글을 불러오는 중 오류가 발생했습니다.')
      setTimeout(() => {
        router.push('/notice')
      }, 2000)
    } finally {
      setLoading(false)
    }
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === PASSWORD) {
      setIsAuthorized(true)
      setPassword('')
    } else {
      setError('패스워드가 일치하지 않습니다.')
      setPassword('')
      setTimeout(() => setError(''), 3000)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !content.trim()) {
      setError('제목과 내용을 모두 입력해주세요.')
      setTimeout(() => setError(''), 3000)
      return
    }

    setSaving(true)
    try {
      const { error } = await supabase
        .from('notices')
        .update({
          title: title.trim(),
          content: content.trim()
        })
        .eq('id', Number(params.id))

      if (error) throw error

      setShowSuccess(true)
      setTimeout(() => {
        router.push(`/notice/${params.id}`)
      }, 1500)
    } catch (error) {
      console.error('Error updating notice:', error)
      setError('공지사항 수정 중 오류가 발생했습니다.')
      setTimeout(() => setError(''), 3000)
      setSaving(false)
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

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
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

      {/* Edit Section */}
      <section className="pt-16 md:pt-20 pb-32 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          {/* Section Title */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <img src={imgNoticeIcon} alt="" className="w-9 h-9" />
            <h2 style={{ fontFamily: 'Wanted Sans, WantedGothic, sans-serif' }} className="text-2xl md:text-[34px] font-black text-[#363636]">
              공지사항 수정
            </h2>
          </div>

          {!isAuthorized ? (
            // Password Form
            <div className="max-w-md mx-auto">
              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-bold text-gray-700"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    패스워드
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#388d71] text-gray-900"
                    placeholder="패스워드를 입력하세요"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <Link
                    href={`/notice/${params.id}`}
                    className="px-6 py-3 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600 transition-colors"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    취소
                  </Link>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#388d71] text-white font-bold rounded-lg hover:bg-[#2a6f5a] transition-colors"
                    style={{ fontFamily: 'Pretendard, sans-serif' }}
                  >
                    확인
                  </button>
                </div>
              </form>
            </div>
          ) : (
            // Edit Form
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-bold text-gray-700"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  제목
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#388d71] text-gray-900"
                  placeholder="제목을 입력하세요"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                  required
                  disabled={saving}
                />
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="block mb-2 text-sm font-bold text-gray-700"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  내용
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#388d71] min-h-[400px] text-gray-900"
                  placeholder="내용을 입력하세요 (HTML 태그 사용 가능)"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                  required
                  disabled={saving}
                />
                <p className="mt-2 text-sm text-gray-500" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                  * HTML 태그를 사용하여 서식을 지정할 수 있습니다. (예: &lt;h3&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;table&gt; 등)
                </p>
              </div>

              <div className="flex justify-between">
                <Link
                  href={`/notice/${params.id}`}
                  className="px-8 py-3 bg-gray-500 text-white font-bold rounded-lg hover:bg-gray-600 transition-colors"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  취소
                </Link>
                <button
                  type="submit"
                  disabled={saving || showSuccess}
                  className="px-8 py-3 bg-[#388d71] text-white font-bold rounded-lg hover:bg-[#2a6f5a] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'Pretendard, sans-serif' }}
                >
                  {saving ? '수정 중...' : '수정'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Toast Messages */}
      {error && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-[#2c2c2d] text-white px-6 py-3 rounded-lg shadow-xl border border-red-500/30 flex items-center gap-2">
            <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span style={{ fontFamily: 'Pretendard, sans-serif' }}>{error}</span>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-[#388d71] text-white px-6 py-3 rounded-lg shadow-xl flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span style={{ fontFamily: 'Pretendard, sans-serif' }}>공지사항이 수정되었습니다.</span>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}