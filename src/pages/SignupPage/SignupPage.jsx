import AuthLayout from '../../components/auth/AuthLayout.jsx';
import PasswordInput from '../../components/auth/PasswordInput.jsx';

function SignupPage() {
  const handleSubmit = (event) => event.preventDefault();

  return (
    <AuthLayout
      title="회원가입"
      switchText="이미 회원이신가요?"
      switchLinkText="로그인"
      switchTo="/login"
    >
      <form className="auth__form" onSubmit={handleSubmit}>
        <div className="auth__field">
          <label className="auth__label" htmlFor="email">이메일</label>
          <input className="auth__input" id="email" name="email" type="email" placeholder="이메일을 입력해주세요" />
        </div>
        <div className="auth__field">
          <label className="auth__label" htmlFor="nickname">닉네임</label>
          <input className="auth__input" id="nickname" name="nickname" type="text" placeholder="닉네임을 입력해주세요" />
        </div>
        <div className="auth__field">
          <label className="auth__label" htmlFor="password">비밀번호</label>
          <PasswordInput id="password" name="password" placeholder="비밀번호를 입력해주세요" />
        </div>
        <div className="auth__field">
          <label className="auth__label" htmlFor="password-confirm">비밀번호 확인</label>
          <PasswordInput id="password-confirm" name="passwordConfirm" placeholder="비밀번호를 다시 한 번 입력해주세요" />
        </div>
        <button type="submit" className="auth__submit">회원가입</button>
      </form>
    </AuthLayout>
  );
}

export default SignupPage;
