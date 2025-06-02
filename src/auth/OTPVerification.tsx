import { useState, useEffect, useRef } from 'react';

export default function OTPVerification() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [otp, setOtp] = useState<string[]>(new Array(5).fill(''));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  // Carousel automation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join('');
    console.log('Verifying OTP:', code);
    // Add verification logic
  };

  const handleResend = () => {
    console.log('Resending code...');
    // Add resend logic
  };

  return (
    <div className="otp-page flex min-h-screen w-screen overflow-x-hidden">
      {/* Left Panel */}
      <div className="otp-left-panel relative flex w-[30%] min-w-[30%] h-screen bg-black p-10 flex-col justify-between text-white">
        {/* Green wave background */}
        <div 
          className="absolute top-0 left-0 w-full h-full opacity-80 z-0"
          style={{
            backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxwYXRoIGZpbGw9IiMwMGMwMDAiIGZpbGwtb3BhY2l0eT0iMC4yIiBkPSJNMCwyMDBjMTUwLDAsNDUwLDQwMCw1MDAsMzUwQzU1MCwzMDAsODUwLDQ1MCwxMDAwLDIwMHY4MDBIMHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDBjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMyIgZD0iTTAsNDAwYzE1MCwwLDMwMCwyMDAsNTAwLDMwMEM3MDAsNTAwLDg1MCw3MDAsOTUwLDUwMGMxMDAsLTIwMCwxMDAsLTUwLDE1MCwtMTAwdjYwMEgweiI+PC9wYXRoPjwvc3ZnPg==')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 mb-4">
          <div className="w-10 h-10 bg-transparent flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12H20V16H24V12Z" fill="white"/>
              <path d="M12 20H8V24H12V20Z" fill="white"/>
              <path d="M24 20H20V24H24V20Z" fill="white"/>
              <path d="M32 20H28V24H32V20Z" fill="white"/>
              <path d="M12 28H8V32H12V28Z" fill="white"/>
              <path d="M24 28H20V32H24V28Z" fill="white"/>
              <path d="M32 28H28V32H32V28Z" fill="white"/>
              <path d="M12 12H8V16H12V12Z" fill="white"/>
            </svg>
          </div>
        </div>

        <div className="otp-header relative z-10 mt-20">
          <h1 className="text-2xl mb-4 font-semibold">Rent, Buy & Invest with HouseBank</h1>
          <p className="text-[13px] leading-6 max-w-[90%] opacity-90 mt-5">
            Be in control of your next house for Rent, Buy or Investment, you are in charge. Sign up and be in control of the future
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="otp-testimonials mt-auto pb-8">
          <div className="bg-green-800 bg-opacity-60 rounded-xl p-4 w-full">
            <div className="flex items-center justify-start mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 mr-1 text-lg">★</span>
              ))}
            </div>

            {/* Testimonial Content */}
            {currentTestimonial === 0 && (
              <>
                <p className="text-sm leading-6 mb-4">
                  "I was overwhelmed with choices before, but Housebank simplified everything. I found the perfect apartment in no time!"
                </p>
                <div className="flex items-center pt-4 pb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format" 
                      alt="User" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="text-sm leading-5 ml-2">
                    <div className="font-bold">Chindoze,</div>
                    <div>Amara</div>
                  </div>
                </div>
              </>
            )}

            {currentTestimonial === 1 && (
              <>
                <p className="text-sm leading-6 mb-4">
                  "HouseBank made finding my dream home so easy. The platform is intuitive and the team was incredibly helpful!"
                </p>
                <div className="flex items-center pt-4 pb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format" 
                      alt="User" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="text-sm leading-5 ml-2">
                    <div className="font-bold">Johnson,</div>
                    <div>Mark</div>
                  </div>
                </div>
              </>
            )}

            {currentTestimonial === 2 && (
              <>
                <p className="text-sm leading-6 mb-4">
                  "As a real estate agent, HouseBank has completely transformed how I connect with clients. Highly recommended!"
                </p>
                <div className="flex items-center pt-4 pb-4">
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format" 
                      alt="User" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="text-sm leading-5 ml-2">
                    <div className="font-bold">Olivia,</div>
                    <div>Chen</div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-4">
            {[0, 1, 2].map((index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full mx-1 cursor-pointer transition-opacity ${
                  currentTestimonial === index ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="otp-right-panel w-[70%] min-w-[70%] h-screen bg-[#f8f9f8] flex items-center justify-center p-5 overflow-y-auto">
        <div className="max-w-lg w-full p-5 relative -left-40 -top-20">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">OTP Verification</h2>
          
          <div className="flex gap-1 mb-8 text-gray-600 text-sm">
            <p>You don't have an account?</p>
            <a href="/signup" className="text-green-700 font-semibold hover:underline">
              Sign Up
            </a>
          </div>

          <div>
            {/* OTP Input Section */}
            <div className="mb-8 w-full">
              <label className="block mb-6 font-medium text-gray-800 text-[19px]">Enter 5-digit Code</label>
              <div className="flex gap-3 justify-start max-w-md">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="w-12 h-12 bg-white border border-gray-300 rounded-md text-center text-xl font-semibold text-gray-800 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
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

            <button 
              onClick={handleVerify}
              className="h-14 w-36 bg-transparent text-green-700 border border-green-700 rounded-md py-3 px-6 text-base font-medium cursor-pointer transition-all duration-300 block mb-4 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Verify
            </button>

            <div className="mt-6">
              <button
                onClick={handleResend}
                className="text-green-700 font-semibold hover:underline text-base cursor-pointer bg-transparent border-none"
              >
                Resend Code
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          .otp-page .otp-left-panel {
            display: none !important;
          }
          .otp-page .otp-right-panel {
            width: 100% !important;
            min-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}