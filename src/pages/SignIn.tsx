import { useState } from 'react';
import Button from '../components/Button.tsx';
import AuthTitle from '../components/AuthTitle.tsx';

export const authInputStyle = `w-full h-12 bg-[color:var(--color-bg)] border border-[color:var(--color-border)]
              rounded-md px-4 text-base text-[color:var(--color-border)] placeholder-[color:var(--color-border)]
              outline-none focus:ring-2 focus:ring-[color:var(--color-green)] focus:border-[color:var(--color-green)] transition-all`;

export const authContainerStyle = `w-3/5 h-full flex flex-col place-content-center px-12`;

export const authOTPInputStyle = `w-12 h-12 bg-[color:var(--color-white)] border border-[color:var(--color-border)] rounded-md text-center text-xl font-semibold 
text-[color:var(--color-text)] outline-none focus:ring-2 focus:ring-[color:var(--color-green)] focus:border-[color:var(--color-green)] transition-all`;

export default function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log({ email, rememberMe });
  };

  return (
    <div className={authContainerStyle}>
      <AuthTitle
        headerText="Sign In"
        subtitle="You don't have an account?"
        linkText="Sign Up"
      />
      <div>
        {/* Email Address */}
        <div className="mb-8 w-full">
          <label className="block mb-6 font-medium text-[color:var(--color-dark)] text-base">
            Email Address
          </label>
          <input
            type="email"
            className={authInputStyle}
            placeholder="e.g john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Remember Me Toggle */}
        <div className="mb-8 w-full">
          <div className="flex items-center gap-4">
            <label
              className="text-gray-800 text-lg cursor-pointer"
              onClick={() => setRememberMe(!rememberMe)}
            >
              Remember me?
            </label>
            <div className="inline-block w-12 h-6 relative -top-7">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="opacity-0 w-0 h-0"
              />
              <span
                className={`block cursor-pointer w-12 h-6 rounded-full transition-all duration-300 ${
                  rememberMe ? 'bg-green-700' : 'bg-gray-400'
                }`}
                onClick={() => setRememberMe(!rememberMe)}
              >
                <span
                  className={`relative left-1 top-1 block h-4 w-4 mt-1 ml-1 bg-white transition-all duration-300 rounded-full transform ${
                    rememberMe ? 'translate-x-5' : ''
                  }`}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 mt-8">
        <Button text="Send Code" onClick={handleSubmit} />
      </div>
    </div>
  );
}
