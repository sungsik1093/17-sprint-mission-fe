import { Link } from 'react-router-dom';

const SOCIAL_LINKS = [
  { name: '구글', href: 'https://www.google.com/', icon: '/images/social/ic_google.png' },
  { name: '카카오톡', href: 'https://www.kakaocorp.com/page/', icon: '/images/social/ic_kakao.png' },
];

function AuthLayout({ title, children, switchText, switchLinkText, switchTo }) {
  return (
    <div className="auth-page">
      <main className="auth">
        <h1 className="sr-only">{title}</h1>
        <Link to="/" className="auth__logo">
          <img src="/images/logo/panda-market-logo-big.png" alt="판다마켓 홈" />
        </Link>

        {children}

        <div className="auth__social">
          <p className="auth__social-title">간편 로그인하기</p>
          <div className="auth__social-links">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={`${social.name}로 로그인`} />
              </a>
            ))}
          </div>
        </div>

        <p className="auth__switch">
          {switchText}
          <Link to={switchTo}>{switchLinkText}</Link>
        </p>
      </main>
    </div>
  );
}

export default AuthLayout;
