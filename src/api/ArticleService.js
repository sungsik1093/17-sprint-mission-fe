const BASE_URL = "https://panda-market-api-crud.vercel.app";

function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`요청 실패 (상태 코드: ${response.status})`);
  }
  return response.json();
}

// 에러 메시지를 콘솔에 출력.
function handleError(error) {
  console.error("[ArticleService]", error.message);
}

// 게시글 목록 조회
export function getArticleList(page = 1, pageSize = 10, keyword = "") {
  const params = new URLSearchParams({ page, pageSize });
  if (keyword) params.append("keyword", keyword);

  return fetch(`${BASE_URL}/articles?${params}`)
    .then(handleResponse)
    .catch(handleError);
}

// 게시글 상세 조회
export function getArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`)
    .then(handleResponse)
    .catch(handleError);
}

// 게시글 등록
export function createArticle(title, content, image) {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, image }),
  })
    .then(handleResponse)
    .catch(handleError);
}

// 게시글 수정 (바꾸고 싶은 값만 객체로 전달)
export function patchArticle(articleId, updateData) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  })
    .then(handleResponse)
    .catch(handleError);
}

// 게시글 삭제
export function deleteArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
  })
    .then(handleResponse)
    .catch(handleError);
}
