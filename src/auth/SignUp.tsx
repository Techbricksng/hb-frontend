// src/auth/SignUpSeller.tsx
import { useState, useEffect } from 'react';
import '../assets/css/signup.css';

export default function SignUpSeller() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    companyName: '',
    companyAddress: '',
    cacNumber: '',
    email: '',
    phone: '',
    idFile: null as File | null,
  });

  // Carousel automation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({...formData, idFile: e.target.files[0]});
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your submission logic here
    console.log(formData);
  };

  return (
    <div className="hb-signup-page">
      {/* Left Panel */}
      <div className="hb-left-panel">
        <div className="hb-green-waves"></div>
        
        <div className="hb-logo">
          <div className="hb-logo-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M3,22V8c0-0.6,0.4-1,1-1h4v15H3z" fill="#3a6b45"/>
              <path d="M21,22H8V7l13,2v13z" fill="#3a6b45"/>
              <path d="M12,4c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,4,12,4z" fill="#3a6b45"/>
            </svg>
          </div>
        </div>

        <div className="hb-welcome-text">
          <h1>Welcome to HouseBank</h1>
          <p>Discover, compare, and connect with the perfect properties, all in one place.</p>
        </div>

       {/* Testimonial Carousel Section */}
    <div className="hb-testimonial-carousel">
      <div className="hb-testimonials">
        {/* Testimonial 1 */}
        <div className={`hb-testimonial ${currentTestimonial === 0 ? 'hb-active' : ''}`}>
          <div className="hb-stars">
            {[...Array(5)].map((_, i) => <span key={i} className="hb-star">★</span>)}
          </div>
          <p className="hb-testimonial-text">
            "I was overwhelmed with choices before, but Housebank simplified everything. I found the perfect apartment in no time!"
          </p>
          <div className="hb-user">
            <div className="hb-user-img">
              <img src="/api/placeholder/40/40" alt="User" />
            </div>
            <div className="hb-user-info">
              <div className="hb-name">Chindoze,</div>
              <div>Amara</div>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className={`hb-testimonial ${currentTestimonial === 1 ? 'hb-active' : ''}`}>
          <div className="hb-stars">
            {[...Array(5)].map((_, i) => <span key={i} className="hb-star">★</span>)}
          </div>
          <p className="hb-testimonial-text">
            "HouseBank made finding my dream home so easy. The platform is intuitive and the team was incredibly helpful!"
          </p>
          <div className="hb-user">
            <div className="hb-user-img">
              <img src="/api/placeholder/40/40" alt="User" />
            </div>
            <div className="hb-user-info">
              <div className="hb-name">Johnson,</div>
              <div>Mark</div>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className={`hb-testimonial ${currentTestimonial === 2 ? 'hb-active' : ''}`}>
          <div className="hb-stars">
            {[...Array(5)].map((_, i) => <span key={i} className="hb-star">★</span>)}
          </div>
          <p className="hb-testimonial-text">
            "As a real estate agent, HouseBank has completely transformed how I connect with clients. Highly recommended!"
          </p>
          <div className="hb-user">
            <div className="hb-user-img">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWl4ZWQ9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2VlZWVlZSIvPjwvc3ZnPg==" alt="User" />
            </div>
            <div className="hb-user-info">
              <div className="hb-name">Olivia,</div>
              <div>Chen</div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="hb-carousel-indicators">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`hb-indicator ${currentTestimonial === index ? 'hb-active' : ''}`}
            onClick={() => setCurrentTestimonial(index)}
          />
        ))}
      </div>
    </div>
      </div>

      {/* Right Panel */}
      <div className="hb-right-panel">
        <div className="hb-sign-up-container"><br></br><br></br><br></br>
          <h2 className="hb-form-title">Sign Up</h2>
          <div className="hb-account-text">
            <p>Have an account?</p>
            <a href="/signin" className="hb-sign-in-link">Sign In</a>
          </div>

          <form onSubmit={handleSubmit}>
  {/* Company Name & Address Row */}
  <div className="hb-form-row">
    <div className="hb-form-group hb-w-full">
      <label className="hb-form-label">Company's Name</label>
      <input
        type="text"
        className="hb-form-input"
        placeholder="e.g John"
        value={formData.companyName}
        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
      />
    </div>

    <div className="hb-form-group hb-w-full">
      <label className="hb-form-label">Company's Address</label>
      <input
        type="text"
        className="hb-form-input"
        placeholder="e.g 123 Main Street"
        value={formData.companyAddress}
        onChange={(e) => setFormData({...formData, companyAddress: e.target.value})}
      />
    </div>
  </div>

  {/* CAC Registration Number */}
  <div className="hb-form-group">
    <label className="hb-form-label">CAC Registration No</label>
    <input
      type="text"
      className="hb-form-input"
      placeholder="e.g RC123456"
      value={formData.cacNumber}
      onChange={(e) => setFormData({...formData, cacNumber: e.target.value})}
    />
  </div>

  {/* Email Address */}
  <div className="hb-form-group">
    <label className="hb-form-label">Email Address</label>
    <input
      type="email"
      className="hb-form-input"
      placeholder="e.g john@company.com"
      value={formData.email}
      onChange={(e) => setFormData({...formData, email: e.target.value})}
    />
  </div>

  {/* Phone Number */}
  <div className="hb-form-group">
    <label className="hb-form-label">Phone Number</label>
    <input
      type="tel"
      className="hb-form-input"
      placeholder="+234"
      value={formData.phone}
      onChange={(e) => setFormData({...formData, phone: e.target.value})}
    />
  </div>

  {/* File Upload */}
  <div className="hb-form-group">
    <label className="hb-form-label">Verification</label>
    <div className="hb-upload-container">
      <div 
        className="hb-upload-btn" 
        onClick={() => document.getElementById('id-upload')?.click()}
      >
        <span>Upload ID Card</span>
        <span className="hb-upload-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" 
               fill="none" stroke="currentColor" strokeWidth="2" 
               strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
        </span>
      </div>
      <input
        type="file"
        id="id-upload"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
    </div>
  </div>

  <button type="submit" className="hb-submit-btn hb-py-3 hb-mt-4">
    Sign Up
  </button>
</form>
        </div>
      </div>
    </div>
  );
}