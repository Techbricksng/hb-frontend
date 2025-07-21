import { useState } from 'react';
import houseImage from '../assets/housebank.png';
import arrowTop from '../assets/arrow-top.png';

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
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-lg">
                  <div className="flex flex-col items-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-6 bg-white rounded-sm"></div>
                      <div className="w-2 h-8 bg-white rounded-sm"></div>
                      <div className="w-2 h-4 bg-white rounded-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs font-bold text-blue-600">CHECK D'DECK HOMES</div>
              </div>
            </div>

            {/* Partner 2 - Lane*Wey */}
            <div className="flex flex-col items-center space-y-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-500">Lane*Wey</div>
                <div className="text-xs text-gray-600">Investment LTD</div>
              </div>
            </div>

            {/* Partner 3 - Telos Properties */}
            <div className="flex flex-col items-center space-y-2">
              <div className="text-center">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-sm"></div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-600">TELOS</div>
                    <div className="text-sm text-blue-400">PROPERTIES</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner 4 - Golden Partner */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 flex items-center justify-center">
                <div className="relative">
                  <div className="w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-yellow-500"></div>
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;