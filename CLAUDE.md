# 2025 산단 툴페스타 인천 - 프로젝트 가이드

## 프로젝트 개요
2025년 인천에서 개최되는 산업단지 툴페스타(Industrial Complex Tool Festa) 공식 웹사이트입니다. Figma 디자인 파일을 기반으로 Next.js, TypeScript, Tailwind CSS를 사용하여 구현되었습니다.

## 기술 스택
- **프레임워크**: Next.js 15.5.4
- **언어**: TypeScript
- **스타일링**: Tailwind CSS v4
- **UI 라이브러리**: React 19.1.0
- **폰트**: Pretendard, Wanted Sans, WantedGothic

## 프로젝트 구조
```
src/
├── app/
│   ├── globals.css       # 전역 스타일 및 Tailwind 설정
│   ├── layout.tsx        # 폰트 설정이 포함된 루트 레이아웃
│   └── page.tsx          # 모든 섹션이 포함된 메인 페이지
├── components/
│   ├── Header.tsx        # 로고와 소셜 아이콘이 있는 네비게이션 헤더
│   ├── HeroSection.tsx   # TOOLFESTA 이미지가 있는 히어로 섹션
│   ├── EventInfo.tsx     # YouTube와 행사 정보가 통합된 섹션
│   ├── EventCards.tsx    # 설명이 포함된 3개의 주요 행사 카드
│   ├── Partners.tsx      # 협력사 그리드
│   └── Footer.tsx        # 회사 정보가 포함된 푸터
```

## 개발 명령어
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 실행
npm run start

# 타입 체크
npm run type-check

# 린팅 (설정된 경우)
npm run lint
```

## 에셋 관리
프로젝트는 혼합된 에셋 접근 방식을 사용합니다:

### 로컬 에셋 (`/assets/`)
- 공통 아이콘 (dot-icon.png)
- 소셜 미디어 아이콘 (social-1.png, social-2.png, social-3.png)
- 협력사 로고 (partner-1.png ~ partner-18.png)
- 이벤트 카드 이미지 (event-card-1.png ~ event-card-3.png)
- 일반적인 UI 요소 (divider.png, btn-guide.svg 등)
- 성공적으로 다운로드된 Figma 에셋 (festival-hero-bg.png)

### Figma 서버 에셋 (`http://localhost:3845/assets/`)
- 각 페이지별 고유 배경 이미지
- 프로그램 세부 이미지
- 체험 프로그램 이미지
- 툴 아이콘들
- 기타 Figma에서만 제공되는 에셋

### 주요 디자인 요소
1. **헤더**: 로컬 로고 이미지와 소셜 아이콘 사용
2. **히어로 섹션**: TOOLFESTA는 텍스트가 아닌 이미지 에셋 (Figma 서버)
3. **행사 정보 섹션**: YouTube와 행사 세부사항이 공유 배경과 함께 통합 (Figma 서버)
4. **행사 카드**: 각 카드마다 고유한 이미지 에셋 (로컬 저장)
5. **타이포그래피**: 제목은 WantedGothic 폰트, 본문은 Pretendard 사용

## 주요 구현 세부사항

### 반응형 디자인
- Tailwind 브레이크포인트를 사용한 모바일 우선 접근
- 브레이크포인트: `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- 컨테이너 최대 너비: 7xl (1280px)

### 섹션 구조
각 섹션은 다음 패턴을 따릅니다:
```tsx
<section className="relative py-16 md:py-24">
  {/* 배경 이미지 - 로컬 또는 Figma 서버 */}
  <div className="absolute inset-0">
    <img src="/assets/local-image.png" /> {/* 로컬 에셋 */}
    {/* 또는 */}
    <img src="http://localhost:3845/assets/figma-hash.png" /> {/* Figma 서버 */}
  </div>

  {/* 다크 오버레이 */}
  <div className="absolute inset-0 bg-[rgba(56,56,56,0.95)]" />

  {/* 콘텐츠 */}
  <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
    {/* 섹션 콘텐츠 */}
  </div>
</section>
```

### 색상 팔레트
- 주요 녹색: `#388d71`
- 다크 배경: `#2c2c2d`
- 보조 다크: `#3a3a3a`
- 텍스트 흰색: `#ffffff`
- 텍스트 회색: 계층에 따른 다양한 음영

## 일반적인 문제와 해결책

### 레이아웃 문제
- **날짜 텍스트 줄바꿈**: `whitespace-nowrap`와 `flex-nowrap` 사용
- **버튼 정렬**: flexbox와 `justify-between` 사용
- **섹션 배경**: 적절한 z-index 레이어링 확인

### 타이포그래피
항상 설정된 폰트 사용:
```tsx
style={{ fontFamily: 'WantedGothic, Wanted Sans, sans-serif' }}
```

## 향후 개발 참고사항
1. **에셋 최적화**: Figma 서버 에셋들을 점진적으로 로컬로 이전 필요
2. **협력사 로고**: 현재 실제 로고 사용 중 - 업데이트 시 partner-*.png 파일 교체
3. **YouTube 비디오**: 실제 비디오 ID로 교체 필요
4. **네비게이션**: 모든 페이지 라우팅 구현 완료
5. **폼 기능**: 향후 백엔드 통합 시 필요
6. **성능 개선**: 애니메이션 및 로딩 최적화 고려
7. **SEO**: 메타 태그 및 구조화된 데이터 추가

## 테스트 체크리스트
- [ ] 모바일, 태블릿, 데스크톱에서 반응형 디자인
- [ ] 로컬 에셋 (/assets/) 올바르게 로딩
- [ ] Figma 서버 에셋 (localhost:3845) 접근 가능
- [ ] 네비게이션 링크 작동 (메인, 축제소개, 프로그램, 현장안내, 공지사항)
- [ ] 한국어 텍스트 올바르게 표시
- [ ] 폰트 (Pretendard, WantedGothic) 올바르게 로딩
- [ ] 다크 테마 일관성
- [ ] 브라우저 호환성 (Chrome, Firefox, Safari, Edge)
- [ ] 공지사항 페이지 동적 라우팅 작동

## 배포
프로젝트는 표준 Next.js 배포 준비 완료:
- Vercel (권장)
- Netlify
- 커스텀 Node.js 서버
- 정적 내보내기 (동적 기능이 필요 없는 경우)

## 연락처
디자인 업데이트는 Figma 파일 참조:
https://www.figma.com/design/LLA2RqjJqvIIq3tf0LYQfA/Untitled?node-id=1-2&m=dev