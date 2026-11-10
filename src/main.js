import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from './api/ArticleService.js';
import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from './api/ProductService.js';

// ===== Article API 테스트 =====
async function testArticle() {
  console.log('===== Article API =====');

  try {
    const articleList = await getArticleList({ page: 1, pageSize: 5, keyword: '판다' });
    console.log('게시글 목록:', articleList);

    const newArticle = await createArticle({
      title: '스프린트 미션 3 테스트 글',
      content: 'fetch와 .then()으로 작성한 게시글입니다.',
      image: 'https://example.com/article.png',
    });
    console.log('게시글 등록:', newArticle);

    const article = await getArticle(newArticle.id);
    console.log('게시글 상세:', article);

    const patchedArticle = await patchArticle(newArticle.id, {
      title: '수정된 테스트 글',
    });
    console.log('게시글 수정:', patchedArticle);

    const deletedArticle = await deleteArticle(newArticle.id);
    console.log('게시글 삭제:', deletedArticle);
  } catch (error) {
    console.log('Article 테스트 중단:', error.message);
    return;
  }

  // 없는 게시글을 조회해서 에러가 호출한 쪽까지 전달되는지 확인
  try {
    await getArticle(999999999);
  } catch (error) {
    console.log('실패 케이스 확인 (상태 코드):', error.status);
  }
}

// ===== Product API 테스트 =====
async function testProduct() {
  console.log('===== Product API =====');

  try {
    const productList = await getProductList({ page: 1, pageSize: 5, keyword: '아이패드' });
    console.log('상품 목록:', productList);

    const newProduct = await createProduct({
      name: '테스트 상품',
      description: '스프린트 미션 3에서 등록한 상품입니다.',
      price: 10000,
      tags: ['테스트', '미션3'],
      images: ['https://example.com/product.png'],
    });
    console.log('상품 등록:', newProduct);

    const product = await getProduct(newProduct.id);
    console.log('상품 상세:', product);

    const patchedProduct = await patchProduct(newProduct.id, { price: 20000 });
    console.log('상품 수정:', patchedProduct);

    const deletedProduct = await deleteProduct(newProduct.id);
    console.log('상품 삭제:', deletedProduct);
  } catch (error) {
    console.log('Product 테스트 중단:', error.message);
    return;
  }

  // 없는 상품을 조회해서 에러가 호출한 쪽까지 전달되는지 확인
  try {
    await getProduct(999999999);
  } catch (error) {
    console.log('실패 케이스 확인 (상태 코드):', error.status);
  }
}

await testArticle();
await testProduct();
