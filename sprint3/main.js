import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";
import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

// Article API 관련 코드들
async function testArticle() {
  console.log("===== Article API =====");

  const articleList = await getArticleList(1, 5, "판다");
  console.log("게시글 목록:", articleList);

  const newArticle = await createArticle(
    "스프린트 미션 3 테스트 글",
    "fetch와 .then()으로 작성한 게시글입니다.",
    "https://example.com/article.png"
  );
  console.log("게시글 등록:", newArticle);
  if (!newArticle) return;

  const article = await getArticle(newArticle.id);
  console.log("게시글 상세:", article);

  const patchedArticle = await patchArticle(newArticle.id, {
    title: "수정된 테스트 글",
  });
  console.log("게시글 수정:", patchedArticle);

  const deletedArticle = await deleteArticle(newArticle.id);
  console.log("게시글 삭제:", deletedArticle);

  // 없는 게시글을 조회해서 에러 메시지가 콘솔에 찍히는지 확인해보기.
  await getArticle(999999999);
}

// Product API 관련 코드들.
async function testProduct() {
  console.log("===== Product API =====");

  const productList = await getProductList(1, 5, "아이패드");
  console.log("상품 목록:", productList);

  const newProduct = await createProduct(
    "테스트 상품",
    "스프린트 미션 3에서 등록한 상품입니다.",
    10000,
    ["테스트", "미션3"],
    ["https://example.com/product.png"]
  );
  console.log("상품 등록:", newProduct);
  if (!newProduct) return;

  const product = await getProduct(newProduct.id);
  console.log("상품 상세:", product);

  const patchedProduct = await patchProduct(newProduct.id, { price: 20000 });
  console.log("상품 수정:", patchedProduct);

  const deletedProduct = await deleteProduct(newProduct.id);
  console.log("상품 삭제:", deletedProduct);

  // 없는 상품을 조회해서 에러 메시지가 콘솔에 찍히는지 확인해보기
  await getProduct(999999999);
}

await testArticle();
await testProduct();
