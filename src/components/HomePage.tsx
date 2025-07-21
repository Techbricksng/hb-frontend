import { useState } from 'react';
import houseImage from '../assets/housebank.png';
import arrowTop from '../assets/arrow-top.png';
import about from '../assets/about.png';
import close from '../assets/close.png';
import teamOne from '../assets/1.png';
import teamTwo from '../assets/2.png';
import teamThree from '../assets/3.png';
import teamFour from '../assets/4.png';
import companyOne from '../assets/company1.png';
import companyTwo from '../assets/company2.png';
import companyThree from '../assets/company3.png';
import companyFour from '../assets/company4.png';

const MainContent = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const propertyTypes = [
    'Apartment',
    'House',
    'Villa',
    'Condo',
    'Townhouse',
    'Land'
  ];

  const priceRanges = [
    'Any Price',
    '$0 - $500,000',
    '$500,000 - $1,000,000',
    '$1,000,000 - $2,000,000',
    '$2,000,000+'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-green-700">Rent, Buy & Invest</span>
                <br />
                <span className="text-gray-900">with </span>
                <span className="text-green-700">HouseBank</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                Discover premium properties tailored to your lifestyle.
              </p>
            </div>

            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2">
              <span>Get Started</span>
              <img 
                src={arrowTop}
                alt="arrow icon" 
                className="w-4 h-4"
              />
            </button>

            {/* Search Filters */}
            <div className="flex flex-wrap items-center gap-4 pt-8">
              {/* Location - Input Field */}
              <div className="relative flex items-center bg-white border border-gray-300 rounded-lg px-4 py-3 min-w-[140px]">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="text-gray-700 text-sm bg-transparent outline-none w-20"
                />
              </div>

              {/* Property Type - Dropdown */}
              <div className="relative flex items-center bg-white border border-gray-300 rounded-lg px-4 py-3 min-w-[140px]">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="text-gray-700 text-sm bg-transparent outline-none appearance-none w-20"
                >
                  <option value="">Property type</option>
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <svg className="w-4 h-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Price Range - Dropdown */}
              <div className="relative flex items-center bg-white border border-gray-300 rounded-lg px-4 py-3 min-w-[140px]">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="text-gray-700 text-sm bg-transparent outline-none appearance-none w-20"
                >
                  <option value="">Price Range</option>
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <button 
                className="bg-green-700 hover:bg-green-800 text-white p-3 rounded-lg transition-colors"
                onClick={() => {
                  console.log({ location, propertyType, priceRange });
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - House Image */}
          <div className="relative">
            <div className="w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden">
              <img 
                src={houseImage}
                alt="Modern luxury house" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Partners</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* Partner 1 - Check D'Deck Homes */}
            <div className="flex flex-col items-center space-y-2">
              <img src={companyOne} alt="Check D'Deck Homes" className="w-26 h-26 mb-2" />
            </div>

            {/* Partner 2 - Lane*Wey */}
            <div className="flex flex-col items-center space-y-2">
              <div className="text-center">
                <img src={companyTwo} alt="Lane*Wey" className="w-26 h-26 mb-2" />
              </div>
            </div>

            {/* Partner 3 - Telos Properties */}
            <div className="flex flex-col items-center space-y-2">
              <div className="text-center">
                <div className="flex items-center space-x-2">
                  <img src={companyThree} alt="Telos Properties" className="w-16 h-11 mb-2" />
                  <div>
                   
                  </div>
                </div>
              </div>
            </div>

            {/* Partner 4 - Golden Partner */}
            <div className="flex flex-col items-center space-y-2">
             
              <img src={companyFour} alt="Golden Partner" className="w-full h-full object-cover rounded-full" />
              
            </div>
          </div>
        </div>
      </section>

       {/* Trusted By Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">Trusted by</h2>
              <p className="text-4xl font-bold text-green-700">10 Million Buyers</p>
              <p className="text-gray-600 text-lg max-w-md">
                We connect you directly to the person that knows the most about property for sale, the listing agent.
              </p>
            </div>
            
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              About Us
            </button>

            {/* Professional Meeting Image */}
            <div className="mt-12">
              <div className="w-full h-94 bg-gray-200 rounded-xl overflow-hidden">
                <img 
                  src={about}
                  alt="Professional handshake meeting" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Team avatars */}
              <div className="flex -mt-6 ml-4 space-x-2">
                <div className="w-12 h-12 rounded-full bg-blue-600 border-4 border-white overflow-hidden">
                  <img 
                   src={teamOne} alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-green-600 border-4 border-white overflow-hidden">
                  <img 
                    src={teamTwo} alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-purple-600 border-4 border-white overflow-hidden">
                  <img 
                    src={teamThree} alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-orange-600 border-4 border-white overflow-hidden">
                  <img 
                    src={teamFour} alt="Team member" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-1">20k</h3>
                <p className="text-gray-600 text-sm">Happy customers</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-1">10k+</h3>
                <p className="text-gray-600 text-sm">Client reviews</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-1">4.5</h3>
                <p className="text-gray-600 text-sm">Positive Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                 <img src={close} alt="icon" className="w-6 h-6 text-gray-600" />
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Explore</h3>
              <h4 className="text-lg text-green-700 font-semibold mb-3">Great Neighborhoods</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We connect you directly to the person that knows the most about property for sale, the listing agent.
              </p>
              <button className="text-green-700 hover:text-green-800 font-medium text-sm flex items-center space-x-2">
                <span>Explore</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src={close} alt="icon" className="w-6 h-6 text-gray-600" />
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Find Highly</h3>
              <h4 className="text-lg text-green-700 font-semibold mb-3">Rated Best Property</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We connect you directly to the person that knows the most about property for sale, the listing agent.
              </p>
              <button className="text-green-700 hover:text-green-800 font-medium text-sm flex items-center space-x-2">
                <span>Explore</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <img src={close} alt="icon" className="w-6 h-6 text-gray-600" />
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Discover</h3>
              <h4 className="text-lg text-green-700 font-semibold mb-3">Quality Buildings</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We connect you directly to the person that knows the most about property for sale, the listing agent.
              </p>
              <button className="text-green-700 hover:text-green-800 font-medium text-sm flex items-center space-x-2">
                <span>Explore</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>   

      
      
    </div>
  );
};

export default MainContent;