import { useState } from 'react';

const PropertyFilterHeader = () => {
  const [activeFilter, setActiveFilter] = useState('Active');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');

  const filters = ['Active', 'Sold Out'];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Filter Buttons */}
          <div className="flex space-x-3">
  {filters.map((filter) => (
    <button
      key={filter}
      onClick={() => setActiveFilter(filter)}
      className={`px-4 py-1.5 rounded-md text-sm font-medium border text-center min-w-[80px] 
        ${
          activeFilter === filter
            ? filter === 'Active'
              ? 'text-green-900 border-green-900 bg-transparent'
              : 'text-red-600 border-red-600 bg-transparent'
            : filter === 'Active'
              ? 'text-green-900 border-green-900 bg-transparent hover:bg-green-50'
              : 'text-red-600 border-red-600 bg-transparent hover:bg-red-50'
        }`}
    >
      {filter}
    </button>
  ))}
            </div>


          {/* Search Section */}
          <div className="flex items-center shadow-md rounded-full overflow-hidden border border-gray-200 bg-white">
  {/* Location Input */}
  <div className="relative">
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </div>
    <input
      type="text"
      placeholder="Enter Location"
      value={location}
      onChange={(e) => setLocation(e.target.value)}
      className="pl-12 pr-4 py-3 text-sm text-gray-600 placeholder-gray-400 focus:outline-none border-none w-52"
    />
  </div>

  {/* Divider */}
  <div className="h-6 w-px bg-gray-300 mx-1" />

  {/* Investment Price Range Input */}
  <div className="relative flex items-center">
    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    </div>
    <input
      type="text"
      placeholder="Investment Price range"
      value={priceRange}
      onChange={(e) => setPriceRange(e.target.value)}
      className="pl-12 pr-10 py-3 text-sm text-gray-600 placeholder-gray-400 focus:outline-none border-none w-64"
    />
    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#455C47] hover:bg-green-700 text-white p-2.5 rounded-full transition-colors">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
  </div>
            </div>


            

        </div>
      </section>
    </div>
  );
};

export default PropertyFilterHeader;