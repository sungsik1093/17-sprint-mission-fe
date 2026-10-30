// Product API 관련 함수 (async / await, try / catch 사용)
const BASE_URL = "https://panda-market-api-crud.vercel.app";

// 응답 상태 코드가 2XX가 아니면 에러를 던지고, 맞으면 JSON으로 바꿔요.
async function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`요청 실패 (상태 코드: ${response.status})`);
  }
  return response.json();
}

// 상품 목록 조회
export async function getProductList(page = 1, pageSize = 10, keyword = "") {
  try {
    const params = new URLSearchParams({ page, pageSize });
    if (keyword) params.append("keyword", keyword);

    const response = await fetch(`${BASE_URL}/products?${params}`);
    return await handleResponse(response);
  } catch (error) {
    console.error("[ProductService]", error.message);
  }
}

// 상품 상세 조회
export async function getProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    return await handleResponse(response);
  } catch (error) {
    console.error("[ProductService]", error.message);
  }
}

// 상품 등록
export async function createProduct(name, description, price, tags, images) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, description, price, tags, images }),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("[ProductService]", error.message);
  }
}

// 상품 수정 (바꾸고 싶은 값만 객체로 전달)
export async function patchProduct(productId, updateData) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("[ProductService]", error.message);
  }
}

// 상품 삭제
export async function deleteProduct(productId) {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`, {
      method: "DELETE",
    });
    return await handleResponse(response);
  } catch (error) {
    console.error("[ProductService]", error.message);
  }
}
