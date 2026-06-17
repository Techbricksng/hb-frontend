import { useState, useRef } from 'react';
import AuthTitle from '../components/AuthTitle.tsx';
import Button from '../components/Button.tsx';
import { authContainerStyle, authOTPInputStyle } from './SignIn.tsx';

export default function OTPVerification() {
  const [otp, setOtp] = useState<string[]>(new Array(5).fill(''));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  // OTP Handlers
  const handleOtpChange = (index: number, value: string) => {
    if (/\D/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 4) inputsRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const code = otp.join('');
    console.log('Verifying OTP:', code);
    // Add verification logic
  };

  const handleResend = () => {
    console.log('Resending code...');
    // Add resend logic
  };

  return (
    <div className={authContainerStyle}>
      <AuthTitle
        headerText="OTP Verification"
        subtitle="You don't have an account?"
        linkText="Sign Up"
      />
      <div>
        {/* OTP Input Section */}
        <div className="mb-8 w-full">
          <label className="block mb-6 font-medium text-gray-800 text-[19px]">
            Enter 5-digit Code
          </label>
          <div className="flex gap-3 justify-start">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className={authOTPInputStyle}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => {
                  if (el) inputsRef.current[index] = el;
                }}
                autoFocus={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-2/5 mt-8">
        <Button text="Verify" onClick={handleVerify} />
      </div>
      <div className="w-2/5 mt-8">
        <Button text="Resend Code" onClick={handleResend} variant="link" />
      </div>
    </div>
  );
}
