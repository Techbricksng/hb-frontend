import { useState, useEffect, useRef } from 'react';
import '../assets/css/otp.css';

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
    <div className="signup-page">
      {/* Left Panel */}
      <div className="left-panel">
        <div className="green-waves"></div>
        
        <div className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M3,22V8c0-0.6,0.4-1,1-1h4v15H3z" fill="#3a6b45"/>
              <path d="M21,22H8V7l13,2v13z" fill="#3a6b45"/>
              <path d="M12,4c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,4,12,4z" fill="#3a6b45"/>
            </svg>
          </div>
        </div>

        <div className="welcome-text">
          <h1>Rent, Buy & Invest with HouseBank</h1>
          <p>Be in control of your next house for Rent, Buy or Investment, you are in charge. Sign up and be in control of the future</p>
        </div>

       {/* Testimonial Carousel Section */}
    <div className="testimonial-carousel">
      <div className="testimonials">
        {/* Testimonial 1 */}
        <div className={`testimonial ${currentTestimonial === 0 ? 'active' : ''}`}>
          <div className="stars">
            {[...Array(5)].map((_, i) => <span key={i} className="star">★</span>)}
          </div>
          <p className="testimonial-text">
            "I was overwhelmed with choices before, but Housebank simplified everything. I found the perfect apartment in no time!"
          </p>
          <div className="user">
            <div className="user-img">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWl4ZWQ9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2VlZWVlZSIvPjwvc3ZnPg==" alt="User" />
            </div>
            <div className="user-info">
              <div className="name">Chindoze,</div>
              <div>Amara</div>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className={`testimonial ${currentTestimonial === 1 ? 'active' : ''}`}>
          <div className="stars">
            {[...Array(5)].map((_, i) => <span key={i} className="star">★</span>)}
          </div>
          <p className="testimonial-text">
            "HouseBank made finding my dream home so easy. The platform is intuitive and the team was incredibly helpful!"
          </p>
          <div className="user">
            <div className="user-img">
              <img src="/api/placeholder/40/40" alt="User" />
            </div>
            <div className="user-info">
              <div className="name">Johnson,</div>
              <div>Mark</div>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className={`testimonial ${currentTestimonial === 2 ? 'active' : ''}`}>
          <div className="stars">
            {[...Array(5)].map((_, i) => <span key={i} className="star">★</span>)}
          </div>
          <p className="testimonial-text">
            "As a real estate agent, HouseBank has completely transformed how I connect with clients. Highly recommended!"
          </p>
          <div className="user">
            <div className="user-img">
              <img src="/api/placeholder/40/40" alt="User" />
            </div>
            <div className="user-info">
              <div className="name">Olivia,</div>
              <div>Chen</div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`indicator ${currentTestimonial === index ? 'active' : ''}`}
            onClick={() => setCurrentTestimonial(index)}
          />
        ))}
      </div>
    </div>
      </div>

      {/* Right Panel */}
      <div className="right-panel">
        <div className="sign-up-containerx">
          <h2 className="form-title">OTP Verification</h2>
          <div className="account-text">
            <p>You don't have an account?</p>
            <a href="/signup" className="sign-in-link">Sign Up</a>
          </div>

          <form className="otp-form" onSubmit={handleVerify}>
            <div className="form-group">
              <label className="form-label">Enter 5-digit Code</label>
              <div className="otp-container">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="otp-input"
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

            <button type="submit" className="verify-btn">
              Verify
            </button>

            <div className="resend-section">
              <a href="#" className="resend-link" onClick={handleResend}>
                Resend Code
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}