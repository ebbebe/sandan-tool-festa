'use client'

import { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const imgHeroBg = "http://localhost:3845/assets/945208d7854e1b74af3b553f15b0752fe5f3493e.png"
const imgDivider = "http://localhost:3845/assets/76873654c83e8f7026252140e3155eb4b146470c.png"
const imgNoticeIcon = "http://localhost:3845/assets/2b74a568f13f320f229c1baf3ff01df16a191960.png"

// Sample notice detail data - In real app, this would come from API
const noticeData = {
  1: {
    id: 1,
    title: "[공지] 2025년 산단툴페스타_인천 모집공고 안내",
    date: "2025.09.11",
    views: 123,
    content: `
      <h3>2025년 산단툴페스타_인천 모집공고</h3>
      <br/>
      <p>안녕하십니까.</p>
      <p>2025년 산단툴페스타_인천 조직위원회입니다.</p>
      <br/>
      <p>올해도 어김없이 찾아온 산단툴페스타! 인천지역 산업단지 기업과 시민이 함께하는 대규모 산업문화 축제가 11월 15일(토)~16일(일) 양일간 소래포구 해오름 광장에서 개최됩니다.</p>
      <br/>
      <h4>■ 행사 개요</h4>
      <ul>
        <li>• 행사명: 2025 산단툴페스타_인천</li>
        <li>• 기간: 2025년 11월 15일(토) ~ 16일(일)</li>
        <li>• 시간: 11:00 ~ 18:00</li>
        <li>• 장소: 소래포구 해오름 광장</li>
        <li>• 주최: 산단툴페스타 조직위원회</li>
      </ul>
      <br/>
      <h4>■ 참가 신청 안내</h4>
      <ul>
        <li>• 신청기간: 2025년 9월 11일 ~ 10월 15일</li>
        <li>• 신청방법: 온라인 신청 (www.toolfesta.com)</li>
        <li>• 신청자격: 인천지역 산업단지 입주기업 및 관련 기업</li>
        <li>• 참가비: 무료 (부스 제공)</li>
      </ul>
      <br/>
      <h4>■ 제공 사항</h4>
      <ul>
        <li>• 기본 부스 (3m x 3m)</li>
        <li>• 전기 설비 지원</li>
        <li>• 홍보물 제작 지원</li>
        <li>• 행사 기간 중 운영 인력 지원</li>
      </ul>
      <br/>
      <p>많은 관심과 참여 부탁드립니다.</p>
      <p>감사합니다.</p>
      <br/>
      <p>문의: 032-881-0427</p>
      <p>이메일: backspace7@naver.com</p>
    `
  },
  2: {
    id: 2,
    title: "[공지] 2025년 산단툴페스타_인천 모집 부스 현황 안내",
    date: "2025.09.11",
    views: 12345,
    content: `
      <h3>2025년 산단툴페스타_인천 모집 부스 현황 안내</h3>
      <br/>
      <p>안녕하십니까.</p>
      <p>2025년 산단툴페스타_인천 조직위원회입니다.</p>
      <br/>
      <p>현재까지 접수된 부스 신청 현황을 안내드립니다.</p>
      <br/>
      <h4>■ 부스 신청 현황</h4>
      <table style="width: 100%; border-collapse: collapse;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 10px;">구분</th>
          <th style="border: 1px solid #ddd; padding: 10px;">총 부스</th>
          <th style="border: 1px solid #ddd; padding: 10px;">신청 완료</th>
          <th style="border: 1px solid #ddd; padding: 10px;">잔여 부스</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">A구역 (기업 전시)</td>
          <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">50</td>
          <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">42</td>
          <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">8</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">B구역 (체험존)</td>
          <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">30</td>
          <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">28</td>
          <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">2</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 10px;">C구역 (판매부스)</td>
          <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">40</td>
          <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">35</td>
          <td style="border: 1px solid #ddd; padding: 10px; text-align: center;">5</td>
        </tr>
      </table>
      <br/>
      <h4>■ 추가 모집 안내</h4>
      <p>• 잔여 부스는 선착순으로 마감됩니다.</p>
      <p>• 신청을 희망하시는 기업은 서둘러 신청해 주시기 바랍니다.</p>
      <p>• 부스 위치는 신청 순서와 업종을 고려하여 배정됩니다.</p>
      <br/>
      <h4>■ 신청 마감일</h4>
      <p>2025년 10월 15일 (금) 18:00</p>
      <br/>
      <p>감사합니다.</p>
    `
  }
}

export default function NoticeDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [notice, setNotice] = useState<any>(null)
  const [nextNotice, setNextNotice] = useState<any>(null)
  const [prevNotice, setPrevNotice] = useState<any>(null)

  useEffect(() => {
    // Get notice data based on ID
    const id = Number(params.id)
    const currentNotice = noticeData[id as keyof typeof noticeData]

    if (currentNotice) {
      setNotice(currentNotice)

      // Set previous and next notices
      const noticeIds = Object.keys(noticeData).map(Number).sort((a, b) => b - a)
      const currentIndex = noticeIds.indexOf(id)

      if (currentIndex > 0) {
        setNextNotice(noticeData[noticeIds[currentIndex - 1] as keyof typeof noticeData])
      }
      if (currentIndex < noticeIds.length - 1) {
        setPrevNotice(noticeData[noticeIds[currentIndex + 1] as keyof typeof noticeData])
      }

      // Increment view count (in real app, this would be an API call)
      currentNotice.views += 1
    }
  }, [params.id])

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
                    작성일: {notice.date}
                  </span>
                  <span style={{ fontFamily: 'Pretendard, sans-serif' }}>
                    조회수: {notice.views.toLocaleString()}
                  </span>
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
                    <span className="text-gray-500 text-sm">{nextNotice.date}</span>
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
                    <span className="text-gray-500 text-sm">{prevNotice.date}</span>
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