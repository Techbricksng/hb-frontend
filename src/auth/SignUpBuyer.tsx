// src/auth/SignUpBuyer.tsx
import { useState, useEffect } from 'react';
import '../assets/css/signup-buyer.css';

export default function SignUpBuyer() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cacNumber: '',
    idFile: null as File | null,
    cacFile: null as File | null,
    companyName: '',
    companyAddress: '',
  });

  const testimonials = [
    {
      text: "HouseBank made finding my dream home so easy!",
      avatar: "https://via.placeholder.com/50",
      name: "John Doe",
      role: "Home Buyer",
    },
    {
      text: "The comparison tools are fantastic and saved me a lot of time.",
      avatar: "https://via.placeholder.com/50",
      name: "Jane Smith",
      role: "Investor",
    },
    {
      text: "I love how user-friendly the platform is!",
      avatar: "https://via.placeholder.com/50",
      name: "Alice Johnson",
      role: "Real Estate Agent",
    },
  ];

  // Carousel automation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const { name } = e.target;
      setFormData({...formData, [name]: e.target.files[0]});
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="hbb-signup-page">
      {/* Left Panel */}
      <div className="hbb-left-panel">
        <div className="hbb-green-waves"></div>
        
        <div className="hbb-logo">
          <div className="hbb-logo-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M3,22V8c0-0.6,0.4-1,1-1h4v15H3z" fill="#3a6b45"/>
              <path d="M21,22H8V7l13,2v13z" fill="#3a6b45"/>
              <path d="M12,4c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,4,12,4z" fill="#3a6b45"/>
            </svg>
          </div>
        </div>

        <div className="hbb-welcome-text">
          <h1>Welcome to HouseBank</h1>
          <p>Discover, compare, and connect with the perfect properties, all in one place.</p>
        </div>

        {/* Testimonial Carousel */}
            <div className="hbb-testimonial-carousel">
            <div className="hbb-testimonials-wrapper">
                <div 
                className="hbb-testimonials"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                {[0, 1, 2].map((index) => (
                    <div 
                    key={index}
                    className="hbb-testimonial"
                    >
                    <div className="hbb-stars">
                        {[...Array(5)].map((_, i) => (
                        <span key={i} className="hbb-star">★</span>
                        ))}
                    </div>
                    <p className="hbb-testimonial-text">
                        {testimonials[index].text}
                    </p>
                    <div className="hbb-user">
                        <div className="hbb-user-img">
                        <img src={testimonials[index].avatar} alt="User" />
                        </div>
                        <div className="hbb-user-info">
                        <div className="hbb-name">{testimonials[index].name},</div>
                        <div>{testimonials[index].role}</div>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
            <div className="hbb-carousel-indicators">
                {[0, 1, 2].map((index) => (
                <div
                    key={index}
                    className={`hbb-indicator ${currentTestimonial === index ? 'hbb-active' : ''}`}
                    onClick={() => setCurrentTestimonial(index)}
                />
                ))}
            </div>
            </div>
      </div>

      {/* Right Panel */}
      <div className="hbb-right-panel">
        <div className="hbb-sign-up-container">
          <h2 className="hbb-form-title">Sign Up</h2>
          <div className="hbb-account-text">
            <p>Have an account?</p>
            <a href="/signin" className="hbb-sign-in-link">Sign In</a>
          </div>

       
<form onSubmit={handleSubmit}>
  {/* Company Name */}
  <div className="hbb-form-row">
    <div className="hbb-form-group hb-w-full">
      <label className="hbb-form-label">Company's Name</label>
      <input
        type="text"
        className="hbb-form-input"
        placeholder="e.g John"
        value={formData.companyName}
        onChange={(e) => setFormData({...formData, companyName: e.target.value})}
      />
    </div>

    <div className="hbb-form-group hb-w-full">
      <label className="hbb-form-label">Company's Address</label>
      <input
        type="text"
        className="hbb-form-input"
        placeholder="e.g 123 Main Street"
        value={formData.companyAddress}
        onChange={(e) => setFormData({...formData, companyAddress: e.target.value})}
      />
    </div>
  </div>


  {/* CAC Registration Number */}
  <div className="hbb-form-group">
    <label className="hbb-form-label">CAC Registration No</label>
    <div className="hbb-input-container">
      <input
        type="text"
        className="hbb-form-input"
        placeholder="23323433099"
        value={formData.cacNumber}
        onChange={(e) => setFormData({...formData, cacNumber: e.target.value})}
      />
     
     
    </div>
  </div>

  {/* Email Address */}
  <div className="hbb-form-group">
    <label className="hbb-form-label">Email Address</label>
    <div className="hbb-input-container">
      <input
        type="email"
        className="hbb-form-input"
        placeholder="e.g. john@company.com"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      
    </div>
  </div>

  {/* Phone Number */}
  <div className="hbb-form-group">
    <label className="hbb-form-label">Phone Number</label>
    <div className="hbb-input-container">
      <input
        type="tel"
        className="hbb-form-input"
        placeholder="+234"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
      />
      
    </div>
  </div>

  {/* File Uploads */}
  <div className="hbb-form-group">
    <label className="hbb-form-label">Verification</label>
    <div className="hbb-upload-group">
      <div className="hbb-upload-container">
        <div className="hbb-upload-btn" onClick={() => document.getElementById('id-upload')?.click()}>
          <span>Upload ID Card</span>
          <span className="hbb-upload-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
          </span>
        </div>
        <input type="file" id="id-upload" name="idFile" hidden onChange={handleFileChange} />
      </div>
      
      <div className="hbb-upload-container">
        <div className="hbb-upload-btn" onClick={() => document.getElementById('cac-upload')?.click()}>
          <span>Upload CAC Document</span>
          <span className="hbb-upload-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </span>
        </div>
        <input type="file" id="cac-upload" name="cacFile" hidden onChange={handleFileChange} />
      </div>
    </div>
  </div>

  <button type="submit" className="hbb-submit-btn">
    Sign Up
  </button>
</form>
        </div>
      </div>
    </div>
  );
}