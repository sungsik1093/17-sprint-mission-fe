# 🐼 판다마켓

중고 물품을 사고팔 수 있는 **판다마켓**의 프론트엔드 프로젝트입니다.
코드잇 스프린트 미션으로 React 없이 HTML, CSS, JavaScript만으로 만들고 있어요.

## 미션 진행 현황

| 미션 | 내용 | 주요 기술 |
|---|---|---|
| 미션 1 | 랜딩 페이지 구현, Netlify 배포 | HTML, CSS |
| 미션 2 | 로그인·회원가입 페이지 구현 | HTML, CSS (Flexbox, CSS 변수, rem) |
| 미션 3 | Article·Product API CRUD 함수 구현 | JavaScript, Fetch API |

## 페이지

| 경로 | 설명 |
|---|---|
| `/` | 랜딩 페이지 |
| `/login` | 로그인 페이지 |
| `/signup` | 회원가입 페이지 |
| `/items`, `/privacy`, `/faq` | 빈 페이지 |

## 폴더 구조

```
panda-market/
├── index.html              # 랜딩 페이지
├── login/index.html        # 로그인
├── signup/index.html       # 회원가입
├── items/, privacy/, faq/  # 빈 페이지
├── css/
│   ├── reset.css           # 브라우저 기본 스타일 초기화
│   ├── variables.css       # 색상 palette CSS 변수
│   ├── style.css           # 랜딩 페이지 스타일
│   └── auth.css            # 로그인·회원가입 공통 스타일
├── images/
└── sprint3/                # 미션 3: API 함수
    ├── ArticleService.js   # Article API 함수 (.then / .catch)
    ├── ProductService.js   # Product API 함수 (async/await, try/catch)
    ├── main.js             # 함수를 import 해서 실행
    └── package.json        # "type": "module"
```

## 사용 기술

- HTML5
- CSS3 (Flexbox, CSS 변수, rem 단위)
- JavaScript (ES Modules, Fetch API)
- Node.js (미션 3 실행)
- Netlify 배포
- Google Analytics

## 실행 방법

### 웹 페이지 (미션 1, 2)

`/login`처럼 `/`로 시작하는 경로를 쓰기 때문에 파일을 더블클릭하면 링크가 동작하지 않아요.
VS Code의 **Live Server**로 프로젝트 폴더를 열어서 확인해 주세요.

### API 함수 (미션 3)

Node.js 18 이상이 필요합니다.

```bash
cd sprint3
node main.js
```

## 구현 포인트

### 미션 1, 2: 페이지

- **rem 단위**: 모든 크기를 `rem`으로 작성해서 브라우저 글꼴 크기 설정에 따라 페이지 전체가 함께 커지고 작아집니다.
- **CSS 변수**: 디자인 palette 색상을 `variables.css`에 모아 `var(--primary-100)`처럼 사용합니다.
- **focus 스타일**: 입력창에 커서가 들어가면 `#3692FF` 테두리가 생기고, 빠져나오면 테두리가 사라집니다.

### 미션 3: API 함수

[판다마켓 API](https://panda-market-api-crud.vercel.app/docs/)를 이용해 게시글과 상품의 CRUD 함수를 만들었습니다.

| Article (`ArticleService.js`) | Product (`ProductService.js`) | 메소드 |
|---|---|---|
| `getArticleList(page, pageSize, keyword)` | `getProductList(page, pageSize, keyword)` | GET |
| `getArticle(articleId)` | `getProduct(productId)` | GET |
| `createArticle(title, content, image)` | `createProduct(name, description, price, tags, images)` | POST |
| `patchArticle(articleId, updateData)` | `patchProduct(productId, updateData)` | PATCH |
| `deleteArticle(articleId)` | `deleteProduct(productId)` | DELETE |

- **두 가지 비동기 처리 방식**: Article은 `.then()` / `.catch()`, Product는 `async/await` / `try/catch`로 작성했습니다.
- **에러 처리**: `response.ok`로 상태 코드가 2XX인지 확인하고, 아니면 상태 코드를 담은 에러 메시지를 콘솔에 출력합니다.
- **쿼리 파라미터**: `URLSearchParams`로 `page`, `pageSize`, `keyword`를 만들고, `keyword`는 값이 있을 때만 붙입니다.
- **파일 분리**: API 함수는 `export`로 내보내고 `main.js`에서 `import` 해서 사용합니다.
- **동작 확인**: `main.js`에서 목록 → 등록 → 상세 → 수정 → 삭제 순서로 실행하고, 없는 id를 조회해 404 에러 메시지가 출력되는지 확인합니다.
