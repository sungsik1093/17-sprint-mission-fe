// Article API 관련 함수 (.then / .catch 사용)
import { BASE_URL } from './config.js';
import { handleResponse } from './handleResponse.js';

// 에러를 콘솔에 남긴 뒤 다시 던져서, 호출하는 쪽에서 처리할 수 있게 해요.
function handleError(error) {
  console.error('[ArticleService]', error.message);
  throw error;
}

// 게시글 목록 조회
export function getArticleList({ page = 1, pageSize = 10, keyword = '' } = {}) {
  const params = new URLSearchParams({ page, pageSize });
  if (keyword) params.append('keyword', keyword);

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
export function createArticle({ title, content, image }) {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, image }),
  })
    .then(handleResponse)
    .catch(handleError);
}

// 게시글 수정 (바꾸고 싶은 값만 객체로 전달)
export function patchArticle(articleId, updateData) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateData),
  })
    .then(handleResponse)
    .catch(handleError);
}

// 게시글 삭제
export function deleteArticle(articleId) {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: 'DELETE',
  })
    .then(handleResponse)
    .catch(handleError);
}
