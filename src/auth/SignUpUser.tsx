// src/auth/SignUpUser.tsx
import { useState } from 'react';
import '../assets/css/signup-user.css';

export default function SignUpUser() {
  const [formData, setFormData] = useState({
    userType: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="hub-signup-page">
      {/* Left Panel */}
      <div className="hub-left-panel">
        <div className="hub-green-waves"></div>
        
        <div className="hub-logo">
          <div className="hub-logo-icon">
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

        <div className="hub-welcome-text">
          <h1>Ready to Explore?</h1>
          <p>Begin your journey with HouseBank and unlock the door to your dream property.</p>
        </div>

        {/* Testimonial */}
        <div className="hub-testimonial">
          <div className="hub-testimonial-stars">
            <span className="hub-star">★</span>
            <span className="hub-star">★</span>
            <span className="hub-star">★</span>
            <span className="hub-star">★</span>
            <span className="hub-star">★</span>
          </div>
          <p className="hub-testimonial-text">
            "I was overwhelmed with choices before, but Housebank simplified everything. I found the perfect apartment in no time!"
          </p>
          <div className="hub-user-info">
            <img src="/avatar.jpg" alt="User Avatar" className="hub-user-avatar" />
            <div className="hub-user-details">
              <span className="hub-name">Chindoze,</span>
              <span>Amara</span>
            </div>
          </div>
          <div className="hub-testimonial-nav">
            <div className="hub-testimonial-dot active"></div>
            <div className="hub-testimonial-dot"></div>
            <div className="hub-testimonial-dot"></div>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="hub-right-panel">
        <div className="hub-sign-up-container">
          <h2 className="hub-form-title">Sign Up</h2>
          <div className="hub-account-text">
            <span>Have an account?</span>
            <a href="/signin" className="hub-sign-in-link">Sign In</a>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Category Selection */}
            <div className="hub-form-group">
             
              <div className="hub-category-options">
              <label className="hub-form-label">Select Category</label>
                <label className="hub-checkbox-label">
                  <input
                    type="checkbox"
                    name="userType"
                    value="buyer"
                    checked={formData.userType === 'buyer'}
                    onChange={(e) => setFormData({...formData, userType: e.target.checked ? 'buyer' : ''})}
                    className="hub-checkbox"
                  />
                  Buyer
                </label>
                <label className="hub-checkbox-label">
                  <input
                    type="checkbox"
                    name="userType"
                    value="seller"
                    checked={formData.userType === 'seller'}
                    onChange={(e) => setFormData({...formData, userType: e.target.checked ? 'seller' : ''})}
                    className="hub-checkbox"
                  />
                  Seller
                </label>
              </div>
            </div>

            {/* Email Address */}
            <div className="hub-form-group">
              <label className="hub-form-label">Email Address</label>
              <input
                type="email"
                className="hub-form-input"
                placeholder="e.g John"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Phone Number */}
            <div className="hub-form-group">
              <label className="hub-form-label">Phone Number</label>
              <div className="hub-phone-input-container">
                <input
                  type="tel"
                  className="hub-form-input hub-phone-input"
                  placeholder="+234"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <div className="hub-download-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12Z" fill="#4A5568"/>
                    <path d="M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V11H2V14H14V11H16V14C16 14.55 15.804 15.021 15.412 15.413C15.02 15.805 14.5493 16.0007 14 16H2Z" fill="#4A5568"/>
                  </svg>
                </div>
              </div>
              <button type="button" className="hub-send-code-btn">
                Send Code
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}