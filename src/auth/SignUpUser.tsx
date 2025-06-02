import { useState } from 'react';

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

  const handleUserTypeChange = (type: string) => {
    setFormData({...formData, userType: formData.userType === type ? '' : type});
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
          <h1 className="text-2xl mb-4 font-semibold">Ready to Explore?</h1>
          <p className="text-[13px] leading-6 max-w-[90%] opacity-90 mt-5">
            Begin your journey with HouseBank and unlock the door to your dream property.
          </p>
        </div>

        {/* Single Testimonial Section */}
        <div className="signup-testimonial mt-auto pb-8">
          <div className="bg-green-800 bg-opacity-60 rounded-xl p-4 w-full">
            <div className="flex items-center justify-start mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 mr-1 text-lg">★</span>
              ))}
            </div>

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
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-4">
            <div className="w-2 h-2 rounded-full mx-1 bg-white" />
            <div className="w-2 h-2 rounded-full mx-1 bg-white bg-opacity-50" />
            <div className="w-2 h-2 rounded-full mx-1 bg-white bg-opacity-50" />
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="signup-right-panel w-[70%] min-w-[70%] h-screen bg-[#f8f9f8] flex items-center justify-center p-5 overflow-y-auto">
        <div className="max-w-lg w-full p-5 relative -left-40 -top-4">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Sign Up</h2>
          
          <div className="flex gap-1 mb-8 text-gray-600 text-sm">
            <p>Have an account?</p>
            <a href="/signin" className="text-green-700 font-semibold hover:underline">
              Sign In
            </a>
          </div>

          <div>
            {/* Category Selection */}
            <div className="mb-8 w-full">
              <label className="block mb-6 font-medium text-gray-800 text-[19px]">Select Category</label>
              <div className="flex gap-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="userType"
                    value="buyer"
                    checked={formData.userType === 'buyer'}
                    onChange={() => handleUserTypeChange('buyer')}
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                  />
                  <span className="ml-3 text-gray-700 text-base">Buyer</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="userType"
                    value="seller"
                    checked={formData.userType === 'seller'}
                    onChange={() => handleUserTypeChange('seller')}
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                  />
                  <span className="ml-3 text-gray-700 text-base">Seller</span>
                </label>
              </div>
            </div>

            {/* Email Address */}
            <div className="mb-8 w-full">
              <label className="block mb-3 font-medium text-gray-800 text-[19px]">Email Address</label>
              <input 
                type="email" 
                className="w-full h-12 max-w-md bg-white border border-gray-300 rounded-md px-4 text-base text-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                placeholder="e.g john@example.com" 
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
              />
            </div>

            {/* Phone Number */}
            <div className="mb-8 w-full">
              <label className="block mb-3 font-medium text-gray-800 text-[19px]">Phone Number</label>
              <div className="relative max-w-md">
                <input 
                  type="tel" 
                  className="w-full h-12 bg-white border border-gray-300 rounded-md pl-4 pr-12 text-base text-gray-600 placeholder-gray-400 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                  placeholder="+234 800 000 0000" 
                  value={formData.phone} 
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.5 0A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 12.5 0h-9zM12 14.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v11z" fill="currentColor"/>
                    <path d="M8 12.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
            </div>

            <button 
              onClick={handleSubmit}
              className="h-14 w-36 bg-transparent text-green-700 border border-green-700 rounded-md py-3 px-6 text-base font-medium cursor-pointer transition-all duration-300 hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Send Code
            </button>
          </div>
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