// src/auth/SignIn.tsx
import { useState, useEffect } from 'react';
import '../assets/css/signin.css';

export default function SignIn() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');

  // Carousel automation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add submission logic here
    console.log({ email, rememberMe });
  };

  return (
    <div className="signup-page">
      {/* Left Panel */}
      <div className="left-panel">
        <div className="green-waves"></div>
        
        <div className="logo">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M3,22V8c0-0.6,0.4-1,1-1h4v15H3z" fill="#ffffff"/>
              <path d="M21,22H8V7l13,2v13z" fill="#ffffff"/>
              <path d="M12,4c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,4,12,4z" fill="#ffffff"/>
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
                  <img src="/api/placeholder/40/40" alt="User" />
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
        <div className="sign-up-containery">
          <h2 className="form-title">Sign In</h2>
          <div className="account-text">
            <p>You don't have an account?</p>
            <a href="/signup-seller" className="sign-in-link">Sign Up</a>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email Address */}
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-input"
                placeholder="e.g John"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Remember Me Toggle Switch */}
            <div className="form-group remember-me-container">
              <label className="toggle-label">
                Remember me?
                <div className="toggle-switchx">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="toggle-input"
                  />
                  <span className="toggle-slider"></span>
                </div>
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Send Code
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}