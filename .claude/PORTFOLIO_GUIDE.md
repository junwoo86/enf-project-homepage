# 포트폴리오 추가 가이드

## 개요

ENFPROJECT 홈페이지의 Work 섹션에 새로운 포트폴리오를 추가하는 방법을 설명합니다.

## 파일 구조

```
src/
├── pages/
│   ├── WorkPage.tsx          # 포트폴리오 목록 페이지
│   └── WorkDetailPage.tsx    # 포트폴리오 상세 페이지
public/
└── portfolio/                # 포트폴리오 파일 저장 경로
    ├── BRANDNAME.pdf         # 포트폴리오 PDF 파일
    ├── BRANDNAME_title.png   # 썸네일 이미지
    └── ...
```

## 파일 준비

### 저장 경로
- **경로**: `public/portfolio/`

### 필요한 파일
1. **PDF 파일**: 포트폴리오 상세 내용이 담긴 PDF
   - 파일명 예시: `BRANDNAME.pdf`
   - 상세 페이지에서 iframe으로 표시됨

2. **썸네일 이미지**: Work 목록에서 보여지는 대표 이미지
   - 파일명 규칙: `{PDF파일명}_title.png`
   - 예시: `BRANDNAME.pdf` → `BRANDNAME_title.png`
   - 권장 비율: 4:3 (다른 비율도 자동으로 맞춰짐)

### 파일명 예시
```
public/portfolio/
├── ZIPIDERM.pdf           # PDF 파일
├── ZIPIDERM_title.png     # 썸네일 이미지
├── Plodica.pdf
├── Plodica_title.png
├── BIOCELLHEAL.pdf
├── BIOCELLHEAL_title.png
├── JINNY H.pdf            # 공백 포함 가능
└── JINNY H_title.png
```

### 파일 참조 방식
- public 폴더 기준 절대경로 사용
- 예: `public/portfolio/BRANDNAME.pdf` → `/portfolio/BRANDNAME.pdf`

---

## Step 1: 포트폴리오 목록에 추가

### 파일 위치
`src/pages/WorkPage.tsx`

### 수정할 부분
`samplePortfolioItems` 배열에 새 항목 추가:

```typescript
const samplePortfolioItems: {
  id: string;
  title: string;
  category: string;
  tags: string[];
  imageUrl: string;
  path: string;
}[] = [
  {
    id: 'brandname',                              // 고유 ID (영문 소문자, 하이픈 사용)
    title: 'BRANDNAME',                           // 프로젝트 제목
    category: 'cosmetics',                        // 카테고리 (아래 참조)
    tags: ['Brand Development', 'Package Design'], // 태그 목록
    imageUrl: '/portfolio/BRANDNAME_title.png',   // 썸네일 이미지 경로
    path: '/work/brandname',                      // 상세 페이지 경로 (/work/{id})
  },
  // 추가 항목들...
];
```

### 카테고리 옵션
| category 값 | 표시 라벨 |
|------------|----------|
| `cosmetics` | Cosmetics |
| `healthcare` | HealthCare |

---

## Step 2: 포트폴리오 상세 정보 추가

### 파일 위치
`src/pages/WorkDetailPage.tsx`

### 수정할 부분
`portfolioDetails` 객체에 새 항목 추가:

```typescript
const portfolioDetails: Record<string, PortfolioDetail> = {
  'brandname': {
    id: 'brandname',                              // WorkPage의 id와 동일해야 함
    title: 'BRANDNAME [브랜드명]',                 // 프로젝트 제목 (한글명 포함)
    subtitle: '"Brand Tagline"',                  // 브랜드 핵심 카피/슬로건
    category: 'cosmetics',                        // 카테고리 ID
    categoryLabel: 'Cosmetics',                   // 카테고리 표시 라벨
    tags: ['Brand Development', 'Brand Identity', 'Package Design'], // 태그 목록
    description: '브랜드에 대한 설명 텍스트. 브랜드의 특징과 가치를 설명합니다.',
    client: '클라이언트 회사명',                    // 선택사항
    pdfUrl: '/portfolio/BRANDNAME.pdf',           // PDF 파일 경로
  },
  // 추가 항목들...
};
```

### 상세 데이터 필드 설명

| 필드 | 필수 | 설명 |
|------|-----|------|
| `id` | O | 고유 식별자, WorkPage의 id와 동일해야 함 |
| `title` | O | 프로젝트 제목 (한글명 포함 권장) |
| `subtitle` | O | 브랜드 핵심 카피/슬로건 (따옴표 포함) |
| `category` | O | 카테고리 ID (`cosmetics` 또는 `healthcare`) |
| `categoryLabel` | O | 화면에 표시될 카테고리 이름 |
| `tags` | O | 프로젝트 태그 배열 |
| `description` | O | 브랜드 설명 텍스트 |
| `client` | X | 클라이언트 정보 (선택사항) |
| `pdfUrl` | O | PDF 파일 경로 |

---

## 전체 예시

### 1. 파일 준비
```
public/portfolio/
├── NEWBRAND.pdf           # 포트폴리오 PDF
└── NEWBRAND_title.png     # 썸네일 이미지
```

### 2. WorkPage.tsx 수정
```typescript
const samplePortfolioItems = [
  // 기존 항목들...
  {
    id: 'newbrand',
    title: 'NEWBRAND',
    category: 'cosmetics',
    tags: ['Brand Development', 'Brand Identity', 'Package Design'],
    imageUrl: '/portfolio/NEWBRAND_title.png',
    path: '/work/newbrand',
  },
];
```

### 3. WorkDetailPage.tsx 수정
```typescript
const portfolioDetails: Record<string, PortfolioDetail> = {
  // 기존 항목들...
  'newbrand': {
    id: 'newbrand',
    title: 'NEWBRAND [뉴브랜드]',
    subtitle: '"Your New Beauty"',
    category: 'cosmetics',
    categoryLabel: 'Cosmetics',
    tags: ['Brand Development', 'Brand Identity', 'Package Design'],
    description: '새로운 뷰티 경험을 선사하는 프리미엄 스킨케어 브랜드입니다.',
    client: '(주)뷰티컴퍼니',
    pdfUrl: '/portfolio/NEWBRAND.pdf',
  },
};
```

---

## 현재 등록된 포트폴리오

| ID | 브랜드명 | 카테고리 | 파일 |
|----|---------|---------|------|
| `zipiderm` | ZIPIDERM [지피덤] | HealthCare | ZIPIDERM.pdf, ZIPIDERM_title.png |
| `plodica` | Plodica [플로디카] | Cosmetics | Plodica.pdf, Plodica_title.png |
| `biocellheal` | BIOCELLHEAL [바이오셀힐] | Cosmetics | BIOCELLHEAL.pdf, BIOCELLHEAL_title.png |
| `jinny-h` | JINNY H [지니에이치] | Cosmetics | JINNY H.pdf, JINNY H_title.png |

---

## 체크리스트

새 포트폴리오 추가 시 확인사항:

- [ ] `public/portfolio/` 폴더에 PDF 파일 추가
- [ ] `public/portfolio/` 폴더에 썸네일 이미지 추가 (`{PDF파일명}_title.png`)
- [ ] `WorkPage.tsx`의 `samplePortfolioItems`에 목록 항목 추가
- [ ] `WorkDetailPage.tsx`의 `portfolioDetails`에 상세 정보 추가
- [ ] 두 파일의 `id` 값이 동일한지 확인
- [ ] `path`가 `/work/{id}` 형식인지 확인
- [ ] `subtitle`과 `description`이 작성되었는지 확인

---

## 주의사항

1. **ID 일치**: WorkPage와 WorkDetailPage의 id가 반드시 동일해야 합니다.
2. **파일 경로**: public 폴더 기준 절대경로 사용 (`/portfolio/...`)
3. **카테고리**: 현재 `cosmetics`와 `healthcare` 두 가지만 지원
4. **썸네일 파일명**: PDF 파일명 뒤에 `_title.png`를 붙여야 합니다.
5. **브랜드 설명**: `subtitle`(핵심 카피)과 `description`(설명)을 반드시 작성해주세요.
