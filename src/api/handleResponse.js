// 모든 API 함수에서 같이 쓰는 응답 처리 함수예요.
// 2XX가 아니면 상태 코드와 서버가 보낸 에러 메시지를 담아서 에러를 던지고,
// 2XX면 body를 JSON으로 바꿔서 돌려줘요.
export async function handleResponse(response) {
  // body가 비어 있거나 JSON이 아닐 수도 있어서, 실패하면 null로 둬요.
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const serverMessage = data?.message ?? response.statusText;
    const error = new Error(
      `요청 실패 (상태 코드: ${response.status}) ${serverMessage}`
    );
    // 호출하는 쪽에서 상태 코드나 서버 응답으로 분기할 수 있게 같이 담아 둬요.
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}
