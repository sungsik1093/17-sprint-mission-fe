import AuthLayout from '../../components/auth/AuthLayout.jsx';
import PasswordInput from '../../components/auth/PasswordInput.jsx';

function LoginPage() {
  const handleSubmit = (event) => event.preventDefault();

  return (
    <AuthLayout
      title="로그인"
      switchText="판다마켓이 처음이신가요?"
      switchLinkText="회원가입"
      switchTo="/signup"
    >
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__field">
          <label className="auth__label" htmlFor="email">이메일</label>
          <input className="auth__input" id="email" name="email" type="email" placeholder="이메일을 입력해주세요" />
        </div>
        <div className="auth__field">
          <label className="auth__label" htmlFor="password">비밀번호</label>
          <PasswordInput id="password" name="password" placeholder="비밀번호를 입력해주세요" />
        </div>
        <button type="submit" className="auth__submit">로그인</button>
      </form>
    </AuthLayout>
  );
}

export default LoginPage;
