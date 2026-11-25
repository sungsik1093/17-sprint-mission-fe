import { Link } from 'react-router-dom';
import Footer from '../../components/Layout/Footer';

const FEATURES = [
  {
    tag: 'Hot item',
    title: ['인기 상품을', '확인해 보세요'],
    desc: ['가장 HOT한 중고거래 물품을', '판다 마켓에서 확인해 보세요'],
    image: '/images/home/hot-item-image.png',
    alt: '인기 상품 예시',
    reverse: false,
  },
  {
    tag: 'Search',
    title: ['구매를 원하는', '상품을 검색하세요'],
    desc: ['구매하고 싶은 물품은 검색해서', '쉽게 찾아보세요'],
    image: '/images/home/search-image.png',
    alt: '상품 검색 예시',
    reverse: true,
  },
  {
    tag: 'Register',
    title: ['판매를 원하는', '상품을 등록하세요'],
    desc: ['어떤 물건이든 판매하고 싶은 상품을', '쉽게 등록하세요'],
    image: '/images/home/feature-register-image.png',
    alt: '상품 등록 예시',
    reverse: false,
  },
];

function Lines({ lines }) {
  return lines.map((line, index) => (
    <span key={line}>
      {index > 0 && <br />}
      {line}
    </span>
  ));
}

function HomePage() {
  return (
    <>
    <main className="landing-page">
      <section className="banner">
        <div className="container banner__inner">
          <div className="banner__content">
            <h1 className="banner__title">
              <Lines lines={['일상의 모든 물건을', '거래해 보세요']} />
            </h1>
            <Link to="/items" className="banner__button">
              구경하러 가기
            </Link>
          </div>
          <img className="banner__image" src="/images/home/first-image.png" alt="" />
        </div>
      </section>

      {FEATURES.map((feature) => (
        <section
          key={feature.tag}
          className={`feature ${feature.reverse ? 'feature--reverse' : ''}`}
        >
          <div className="feature__inner">
            <img className="feature__image" src={feature.image} alt={feature.alt} />
            <div className="feature__content">
              <p className="feature__tag">{feature.tag}</p>
              <h2 className="feature__title">
                <Lines lines={feature.title} />
              </h2>
              <p className="feature__desc">
                <Lines lines={feature.desc} />
              </p>
            </div>
          </div>
        </section>
      ))}

      <section className="banner banner--bottom">
        <div className="container banner__inner">
          <div className="banner__content">
            <h2 className="banner__title">
              <Lines lines={['믿을 수 있는', '판다마켓 중고 거래']} />
            </h2>
          </div>
          <img className="banner__image" src="/images/home/bottom-banner.png" alt="" />
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}

export default HomePage;
