import { useState, useEffect } from 'react';

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
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format",
      name: "John Doe",
      role: "Home Buyer",
    },
    {
      text: "The comparison tools are fantastic and saved me a lot of time.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format",
      name: "Jane Smith",
      role: "Investor",
    },
    {
      text: "I love how user-friendly the platform is!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format",
      name: "Alice Johnson",
      role: "Real Estate Agent",
    },
  ];

  // Carousel automation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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
    <div className="signup-page flex min-h-screen w-screen overflow-x-hidden">
      {/* Left Panel */}
      <div className="relative flex w-[30%] min-w-[30%] h-screen bg-black p-10 flex-col justify-between text-white">
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

        <div className="relative z-10 mt-20">
          <h1 className="text-2xl mb-4 font-semibold">Welcome to HouseBank</h1>
          <p className="text-[13px] leading-6 max-w-[90%] opacity-90">
            Discover, compare, and connect with the perfect properties, all in one place.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative z-10 mt-auto pb-8">
          <div className="bg-green-800 bg-opacity-60 rounded-xl p-6 w-full">
            <div className="flex items-center justify-start mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 mr-1 text-lg">★</span>
              ))}
            </div>

            {/* Testimonial Content */}
            {testimonials.map((testimonial, index) => (
              currentTestimonial === index && (
                <div key={index}>
                  <p className="text-sm leading-6 mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center pt-4 pb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                      <img 
                        src={testimonial.avatar} 
                        alt="User" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div className="text-sm leading-5">
                      <div className="font-bold">{testimonial.name},</div>
                      <div>{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
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
      <div className="w-[70%] min-w-[70%] h-screen bg-[#f8f9f8] flex items-center justify-start p-12 overflow-y-auto">
        <div className="max-w-lg w-full p-5 relative top-20 -left-6">
          <h2 className="text-4xl font-bold mb-2 text-gray-800">Sign Up</h2>
          <div className="flex gap-2 mt-6 mb-8 text-gray-600 text-sm">
            <p>Have an account?</p>
            <a href="/signin" className="text-green-700 font-semibold hover:underline">
              Sign In
            </a>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Company Name and Address Row */}
            <div className="flex gap-4 mb-6 w-full">
              <div className="flex-1">
                <label className="block mb-2 font-medium text-gray-800 text-[19px]">
                  Company's Name
                </label>
                <input
                  type="text"
                  className="w-full h-12 bg-white border border-gray-300 rounded-md text-[16px] text-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 px-4"
                  placeholder="e.g ABC Corp"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                />
              </div>

              <div className="flex-1">
                <label className="block mb-2 font-medium text-gray-800 text-[19px]">
                  Company's Address
                </label>
                <input
                  type="text"
                  className="w-full h-12 bg-white border border-gray-300 rounded-md text-[16px] text-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 px-4"
                  placeholder="e.g 123 Main Street"
                  value={formData.companyAddress}
                  onChange={(e) => setFormData({...formData, companyAddress: e.target.value})}
                />
              </div>
            </div>

            {/* CAC Registration Number */}
            <div className="mb-6 w-full">
              <label className="block mb-2 font-medium text-gray-800 text-[19px]">
                CAC Registration No
              </label>
              <input
                type="text"
                className="h-12 w-full bg-white border border-gray-300 rounded-md text-[16px] text-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 px-4"
                placeholder="23323433099"
                value={formData.cacNumber}
                onChange={(e) => setFormData({...formData, cacNumber: e.target.value})}
              />
            </div>

            {/* Email Address */}
            <div className="mb-6 w-full">
              <label className="block mb-2 font-medium text-gray-800 text-[19px]">
                Email Address
              </label>
              <input
                type="email"
                className="w-full h-12 bg-white border border-gray-300 rounded-md text-[16px] text-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 px-4"
                placeholder="e.g. john@company.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            {/* Phone Number */}
            <div className="mb-6 w-full">
              <label className="block mb-2 font-medium text-gray-800 text-[19px]">
                Phone Number
              </label>
              <div className="relative">
                <input
                  type="tel"
                  className="w-full h-12 bg-white border border-gray-300 rounded-md text-[16px] text-gray-600 placeholder-gray-400 outline-none pr-12 focus:ring-2 focus:ring-green-500 focus:border-green-500 px-4"
                  placeholder="+234"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12Z" fill="#4A5568"/>
                    <path d="M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V11H2V14H14V11H16V14C16 14.55 15.804 15.021 15.412 15.413C15.02 15.805 14.5493 16.0007 14 16H2Z" fill="#4A5568"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* File Uploads */}
            <div className="mb-6 w-full">
              <label className="block mb-4 font-medium text-gray-800 text-[19px]">
                Verification
              </label>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div 
                    className="w-full h-12 bg-white border border-gray-300 rounded-md flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors px-4"
                    onClick={() => document.getElementById('id-upload')?.click()}
                  >
                    <span className="text-[16px] text-gray-600 truncate mr-2">
                      {formData.idFile ? formData.idFile.name : 'Upload ID Card'}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400 flex-shrink-0">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="17 8 12 3 7 8"/>
                      <line x1="12" y1="3" x2="12" y2="15"/>
                    </svg>
                  </div>
                  <input 
                    type="file" 
                    id="id-upload" 
                    name="idFile" 
                    className="hidden" 
                    onChange={handleFileChange} 
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                </div>
                
                <div className="flex-1">
                  <div 
                    className="w-full h-12 bg-white border border-gray-300 rounded-md flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors px-4"
                    onClick={() => document.getElementById('cac-upload')?.click()}
                  >
                    <span className="text-[16px] text-gray-600 truncate mr-2">
                      {formData.cacFile ? formData.cacFile.name : 'Upload CAC Document'}
                    </span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400 flex-shrink-0">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                  <input 
                    type="file" 
                    id="cac-upload" 
                    name="cacFile" 
                    className="hidden" 
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                </div>
              </div>
            </div>

            <button 
              type="submit"
              className="h-14 w-30 bg-transparent text-green-700 border border-green-700 rounded-md py-3 text-base cursor-pointer transition-all duration-300 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500 mt-4">
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Mobile responsive - hide left panel on mobile */}
      <style>{`
        @media (max-width: 768px) {
          .signup-page .relative.flex.w-\\[30\\%\\] {
            display: none !important;
          }
          .signup-page .w-\\[70\\%\\] {
            width: 100% !important;
            min-width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}