import { useState } from 'react';

function PasswordInput({ id, name, placeholder }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="auth__password">
      <input
        className="auth__input"
        id={id}
        name={name}
        type={isVisible ? 'text' : 'password'}
        placeholder={placeholder}
      />
      <button
        type="button"
        className="auth__eye"
        onClick={() => setIsVisible((prev) => !prev)}
        aria-label={isVisible ? '비밀번호 숨기기' : '비밀번호 보기'}
      >
        <img
          src={isVisible ? '/images/icons/ic_visibility_on.svg' : '/images/icons/ic_visibility_off.png'}
          alt=""
        />
      </button>
    </div>
  );
}

export default PasswordInput;
