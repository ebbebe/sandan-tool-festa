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

## Figma 디자인 통합
프로젝트는 Figma 디자인 파일의 에셋을 직접 다운로드 받아 사용합니다. 이러한 에셋은 로컬 에셋 서버(localhost:3845)를 통해 제공되며 다음을 포함합니다:
- 로고 이미지
- 각 섹션의 배경 이미지
- 소셜 미디어 아이콘
- 장식 요소 (점, 도형)
- INDUSTRIAL COMPLEX TOOLFESTA 배너 이미지

### 주요 디자인 요소
1. **헤더**: 실제 Figma 로고 이미지와 소셜 아이콘 사용
2. **히어로 섹션**: TOOLFESTA는 텍스트가 아닌 이미지 에셋
3. **행사 정보 섹션**: YouTube와 행사 세부사항이 공유 배경(Rectangle 247)과 함께 통합
4. **행사 카드**: 각 카드마다 고유한 Figma 이미지 에셋 보유
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
  {/* 배경 이미지 */}
  <div className="absolute inset-0">
    <img src="figma-asset-url" />
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
1. 협력사 로고는 현재 플레이스홀더 - 실제 로고 제공 시 교체 필요
2. YouTube 비디오 통합에 실제 비디오 ID 필요
3. 네비게이션 링크에 적절한 라우팅 구현 필요
4. 폼 제출 기능(있는 경우) 백엔드 통합 필요
5. 더 나은 UX를 위한 애니메이션 추가 고려
6. 적절한 SEO 메타 태그 구현

## 테스트 체크리스트
- [ ] 모바일, 태블릿, 데스크톱에서 반응형 디자인
- [ ] 모든 Figma 에셋 올바르게 로딩
- [ ] 네비게이션 링크 작동
- [ ] 한국어 텍스트 올바르게 표시
- [ ] 폰트 올바르게 로딩
- [ ] 다크 테마 일관성
- [ ] 브라우저 호환성 (Chrome, Firefox, Safari, Edge)

## 배포
프로젝트는 표준 Next.js 배포 준비 완료:
- Vercel (권장)
- Netlify
- 커스텀 Node.js 서버
- 정적 내보내기 (동적 기능이 필요 없는 경우)

## 연락처
디자인 업데이트는 Figma 파일 참조:
https://www.figma.com/design/LLA2RqjJqvIIq3tf0LYQfA/Untitled?node-id=1-2&m=dev