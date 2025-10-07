import { useState } from 'react';
import { Search } from 'lucide-react';

const HelpSearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Rent');

  const categories = ['Rent', 'Investment'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Handle search logic here
  };

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Page Header */}
        <div className="text-center mb-3">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Hi Sam, how can we help?
          </h1>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="relative flex items-center max-w-2xl mx-auto">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search how - tos and more"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-6 pr-16 py-4 text-gray-700 bg-white border-2 border-gray-200 rounded-full shadow-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all duration-200"
              />
              
              {/* Search Button */}
              <button
                type="submit"
                className="absolute right-2 p-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Category Tabs */}
        <div className="flex ">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeCategory === category
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSearchPage;