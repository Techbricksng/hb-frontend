import { useState, useEffect } from 'react';

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
    console.log(formData);
  };

  return (
    <div className="signup-page flex min-h-screen w-screen overflow-x-hidden">
      {/* Left Panel */}
      <div className="signup-left-panel relative flex w-[30%] min-w-[30%] h-screen bg-black p-10 flex-col justify-between text-white">
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

        <div className="signup-header relative z-10 mt-20">
          <h1 className="text-2xl mb-4 font-semibold">Welcome to HouseBank</h1>
          <p className="text-[13px] leading-6 max-w-[90%] opacity-90 mt-5">
            Discover, compare, and connect with the perfect properties, all in one place.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="signup-testimonials mt-auto pb-8">
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
      <div className="signup-right-panel w-[70%] min-w-[70%] h-screen bg-[#f8f9f8] flex items-center justify-center p-5 overflow-y-auto">
        <div className="max-w-lg w-full p-5 relative -left-40 top-20">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Sign Up</h2>
          
          <div className="flex gap-1 mb-8 text-gray-600 text-sm">
            <p>Have an account?</p>
            <a href="/signin" className="text-green-700 font-semibold hover:underline">
              Sign In
            </a>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Company Name & Address Row */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <label className="block mb-2 font-medium text-gray-800 text-[19px]">Company's Name</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-white border border-gray-300 rounded-md text-[16px] text-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder="e.g John"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                />
              </div>

              <div className="flex-1">
                <label className="block mb-2 font-medium text-gray-800 text-[19px]">Company's Address</label>
                <input
                  type="text"
                  className="w-full h-12 px-4 bg-white border border-gray-300 rounded-md text-[16px] text-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder="e.g 123 Main Street"
                  value={formData.companyAddress}
                  onChange={(e) => setFormData({...formData, companyAddress: e.target.value})}
                />
              </div>
            </div>

            {/* CAC Registration Number */}
            <div className="mb-6">
              <label className="block mb-2 font-medium text-gray-800 text-[19px]">CAC Registration No</label>
              <input
                type="text"
                className="w-full h-12 px-4 bg-white border border-gray-300 rounded-md text-[16px] text-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                placeholder="e.g RC123456"
                value={formData.cacNumber}
                onChange={(e) => setFormData({...formData, cacNumber: e.target.value})}
              />
            </div>

            {/* Email Address */}
            <div className="mb-6">
              <label className="block mb-2 font-medium text-gray-800 text-[19px]">Email Address</label>
              <input
                type="email"
                className="w-full h-12 px-4 bg-white border border-gray-300 rounded-md text-[16px] text-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                placeholder="e.g john@company.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Phone Number */}
            <div className="mb-6">
              <label className="block mb-2 font-medium text-gray-800 text-[19px]">Phone Number</label>
              <input
                type="tel"
                className="w-full h-12 px-4 bg-white border border-gray-300 rounded-md text-[16px] text-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                placeholder="+234"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            {/* File Upload */}
            <div className="mb-8">
              <label className="block mb-2 font-medium text-gray-800 text-[19px]">Verification</label>
              <div 
                className="w-full h-12 px-4 bg-white border border-gray-300 rounded-md flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors duration-200 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500"
                onClick={() => document.getElementById('id-upload')?.click()}
              >
                <span className="text-[16px] text-gray-600">
                  {formData.idFile ? formData.idFile.name : 'Upload ID Card'}
                </span>
                <span className="text-gray-500">
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
                className="hidden"
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.png,.pdf"
              />
            </div>

            <button 
              type="submit"
              className="h-14 w-36 bg-transparent text-green-700 border border-green-700 rounded-md py-3 px-6 text-base font-medium cursor-pointer transition-all duration-300 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Scoped Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          .signup-page .signup-left-panel {
            display: none !important;
          }
          .signup-page .signup-right-panel {
            width: 100% !important;
            min-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}