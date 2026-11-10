// Product API 관련 함수 (async / await, try / catch 사용)
import { BASE_URL } from './config.js';
import { handleResponse } from './handleResponse.js';

// 상품 목록 조회
export async function getProductList({ page = 1, pageSize = 10, keyword = '' } = {}) {
  try {
    const params = new URLSearchParams({ page, pageSize });
    if (keyword) params.append('keyword', keyword);

    const response = await fetch(`${BASE_URL}/products?${params}`);
    const data = await handleResponse(response);
    return data;
  } catch (error) {
    console.error('[ProductService]', error.message);
    throw error;
  }
}

// 상품 상세 조회
export async function getProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    const data = await handleResponse(response);
    return data;
  } catch (error) {
    console.error('[ProductService]', error.message);
    throw error;
  }
}

// 상품 등록
export async function createProduct({ name, description, price, tags, images }) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price, tags, images }),
    });
    const data = await handleResponse(response);
    return data;
  } catch (error) {
    console.error('[ProductService]', error.message);
    throw error;
  }
}

// 상품 수정 (바꾸고 싶은 값만 객체로 전달)
export async function patchProduct(productId, updateData) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData),
    });
    const data = await handleResponse(response);
    return data;
  } catch (error) {
    console.error('[ProductService]', error.message);
    throw error;
  }
}

// 상품 삭제
export async function deleteProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: 'DELETE',
    });
    const data = await handleResponse(response);
    return data;
  } catch (error) {
    console.error('[ProductService]', error.message);
    throw error;
  }
}
