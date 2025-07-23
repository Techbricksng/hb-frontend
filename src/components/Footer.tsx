import { useState } from 'react';
import { Twitter, Facebook, Globe, Instagram, Linkedin } from 'lucide-react';
import arrowTop from '../assets/arrow-top.png';
import logo1 from '../assets/logo1.png';
const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Left Section - Logo and Newsletter */}
          <div className="lg:col-span-2 space-y-8">
            {/* Logo */}
            <img src={logo1} alt="HouseBank Logo" className="w-13 h-11" />

            {/* Newsletter Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Looking to Buy, Rent and Invest in Real Estate?
              </h3>
              
              <form onSubmit={handleEmailSubmit} className="relative w-full">
                <div className="relative flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 pr-16 bg-white text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-500"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 bg-green-600 hover:bg-green-700 w-10 h-10 flex items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <img 
                      src={arrowTop} 
                      alt="Submit" 
                      className="w-5 h-5" 
                    />
                  </button>
                </div>
              </form>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          {/* Explore Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Rent</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Buy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investment</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">List your property</a></li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Property Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Property Valuation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Property Exchange</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Investment Portfolio</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about-us" className="text-gray-400 hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">HouseBank Cover</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Anti-discrimination</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Report Scam</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Report Neighbourhood concern</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              2025 Housebank. All right reserved
            </div>

            {/* Legal Links */}
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Country Sitemap</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;