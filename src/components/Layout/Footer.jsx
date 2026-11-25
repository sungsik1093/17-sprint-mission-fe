const SNS_LINKS = [
  { name: '페이스북', href: 'https://www.facebook.com/', icon: 'ic_facebook.png' },
  { name: '트위터', href: 'https://twitter.com/', icon: 'ic_twitter.png' },
  { name: '유튜브', href: 'https://www.youtube.com/', icon: 'ic_youtube.png' },
  { name: '인스타그램', href: 'https://www.instagram.com/', icon: 'ic_instagram.png' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copyright">©codeit - 2026</p>
        <nav className="footer__links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
        </nav>
        <div className="footer__sns">
          {SNS_LINKS.map((sns) => (
            <a
              key={sns.name}
              href={sns.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={`/images/icons/${sns.icon}`} alt={sns.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
