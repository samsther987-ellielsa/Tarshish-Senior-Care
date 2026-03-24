# 인사말 페이지 코드 학습 노트

> 📁 파일 위치: `src/app/about/greeting/page.tsx`
> 이 파일은 공부 후 삭제해도 괜찮습니다.

---

## 1. 전체 구조 한눈에 보기

```
page.tsx
├── metadata (SEO 제목 설정)
└── GreetingPage 컴포넌트
    ├── 상단 헤더 (어두운 초록 배경)
    ├── 본문 섹션
    │   ├── 텍스트(왼쪽) + 사진(오른쪽) 2컬럼 레이아웃
    │   └── 약속 3가지 카드
    └── 구분선
```

---

## 2. metadata — SEO 설정

```tsx
export const metadata = { title: "인사말 | 다시스 실버케어센터" };
```

- 브라우저 탭에 표시되는 제목을 설정합니다.
- Next.js App Router에서 페이지 상단에 `export` 키워드로 내보냅니다.
- `<head>` 태그를 직접 쓰지 않아도 됩니다.

---

## 3. Next.js Image 컴포넌트

```tsx
import Image from "next/image";

<Image
  src="/staff-team.png"   // public 폴더 기준 경로
  alt="다시스 실버케어센터 임직원 일동"
  fill                    // 부모 요소를 꽉 채움
  className="object-cover"  // 비율 유지하며 채우기
  sizes="(max-width: 1024px) 100vw, 50vw"  // 화면 크기별 이미지 크기
  priority               // 페이지 로드 시 우선 로딩
/>
```

**왜 `<img>` 대신 `Image`를 쓰나요?**
- 자동 이미지 최적화 (WebP 변환, 용량 압축)
- Lazy loading 기본 적용
- `fill` 속성을 쓰면 부모 크기에 맞게 자동 확대/축소

**`fill` 사용 시 주의사항:**
부모 요소에 반드시 `position: relative`가 있어야 합니다.
```tsx
<div className="relative w-full aspect-square ...">
  <Image src="..." fill ... />
</div>
```
Tailwind의 `relative` 클래스가 `position: relative` 역할입니다.

---

## 4. 반응형 2컬럼 레이아웃

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
  {/* 텍스트 */}
  <div>...</div>
  {/* 이미지 */}
  <div>...</div>
</div>
```

| 클래스 | 설명 |
|--------|------|
| `grid` | CSS Grid 레이아웃 사용 |
| `grid-cols-1` | 기본(모바일): 1열 (아이템이 세로로 쌓임) |
| `lg:grid-cols-2` | 1024px 이상(PC): 2열 |
| `gap-12` | 아이템 간 간격 48px |
| `lg:gap-16` | PC에서는 64px 간격 |
| `items-start` | 세로 정렬을 위쪽 기준으로 |

**반응형 접두사 정리:**
```
접두사 없음 → 모바일 (기본)
sm:  → 640px 이상
md:  → 768px 이상
lg:  → 1024px 이상
xl:  → 1280px 이상
```

---

## 5. aspect-ratio (비율 유지)

```tsx
<div className="relative w-full aspect-square rounded-2xl overflow-hidden">
```

| 클래스 | 설명 |
|--------|------|
| `w-full` | 가로를 부모 너비만큼 꽉 채움 |
| `aspect-square` | 가로:세로 = 1:1 정사각형 비율 유지 |
| `rounded-2xl` | 모서리를 둥글게 (16px) |
| `overflow-hidden` | 둥근 모서리 밖으로 이미지가 삐져나오지 않게 |

`aspect-square` 덕분에 화면 크기가 변해도 항상 정사각형을 유지합니다.

---

## 6. 텍스트 강조 — 왼쪽 경계선

```tsx
<div className="border-l-4 border-emerald-600 pl-5">
  <p>...</p>
</div>
```

- `border-l-4` : 왼쪽에 4px 두께 테두리
- `border-emerald-600` : 초록색 테두리
- `pl-5` : 왼쪽 padding 20px (텍스트와 테두리 사이 간격)

결과: 인용구나 중요 문장 강조에 자주 쓰이는 패턴입니다.

---

## 7. 약속 카드 — 배열 map()

```tsx
{[
  { num: "01", title: "존엄한 삶을 위한 전문 케어", desc: "..." },
  { num: "02", title: "가족의 마음을 잇는 투명한 소통", desc: "..." },
  { num: "03", title: "사랑과 정성이 깃든 안식처", desc: "..." },
].map((item) => (
  <div key={item.num}>
    <span>{item.num}</span>
    <h3>{item.title}</h3>
    <p>{item.desc}</p>
  </div>
))}
```

**왜 이렇게 쓰나요?**
- 반복되는 UI를 배열 + `map()`으로 깔끔하게 처리
- 내용 수정 시 배열 데이터만 바꾸면 됨
- `key` 속성은 React가 각 항목을 구분하기 위해 필수

---

## 8. hover 인터랙션

```tsx
className="hover:border-emerald-200 hover:shadow-md transition-all duration-300"
```

| 클래스 | 설명 |
|--------|------|
| `hover:border-emerald-200` | 마우스 올리면 테두리 색 변경 |
| `hover:shadow-md` | 마우스 올리면 그림자 추가 |
| `transition-all` | 모든 속성에 애니메이션 적용 |
| `duration-300` | 애니메이션 시간 300ms |

---

## 9. 구분선 (Divider)

```tsx
<div className="flex items-center gap-4 mb-16">
  <div className="flex-1 h-px bg-gray-100" />
  <div className="w-2 h-2 rounded-full bg-emerald-400" />
  <div className="flex-1 h-px bg-gray-100" />
</div>
```

- 가운데 초록 점 + 양쪽 회색 선 조합
- `flex-1`로 양쪽 선이 동일하게 늘어남
- `h-px`는 높이 1px (얇은 선)
- `rounded-full`은 원형 (정사각형을 원으로)

---

## 10. 이미지 파일 위치

```
tarshish-silver/
└── public/
    ├── hero-banner.png   ← 홈 배경 이미지
    ├── interior.png      ← 내부 사진
    └── staff-team.png    ← 임직원 단체 사진 (이번에 추가)
```

`public` 폴더 안의 파일은 `src="/파일명"` 형식으로 접근합니다.
절대 경로(`/staff-team.png`)로 씁니다.

---

## 핵심 요약

| 기술 | 이번에 사용한 것 |
|------|----------------|
| Next.js Image | `fill`, `sizes`, `priority` |
| 반응형 레이아웃 | `grid-cols-1 lg:grid-cols-2` |
| 비율 유지 | `aspect-square` |
| 애니메이션 | `transition-all duration-300` |
| 배열 렌더링 | `.map()` + `key` |
| SEO | `export const metadata` |
