import { useState } from 'react';
import { MapPin, Bed, Bath, Square, Heart, Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

// You'll need to add these property images to your assets folder
import property1 from '../assets/explore/explore-property-1.png';
import property2 from '../assets/explore/explore-property-2.png';
import property3 from '../assets/explore/explore-property-3.png';
import property4 from '../assets/explore/explore-property-4.png';
import property5 from '../assets/explore/explore-property-5.png';
import property6 from '../assets/explore/explore-property-6.png';
import property7 from '../assets/explore/explore-property-7.png';
import property8 from '../assets/explore/explore-property-8.png';

const ExploreProperty = () => {
  const [activeCategory, setActiveCategory] = useState('All Property');
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    propertyType: '',
    priceRange: ''
  });
  const [favorites, setFavorites] = useState<number[]>([]);

  const categories = [
    'All Property',
    'Buy',
    'Rent',
    'Land',
    'Invest',
    'List Property'
  ];

  const propertyData = [
    {
      id: 1,
      image: property1,
      type: 'For Sale',
      title: 'Rendez House Bay',
      rating: 4.6,
      location: 'Lagos, Nigeria',
      bedrooms: 3,
      bathrooms: 3,
      area: 3,
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      price: 'N250,000'
    },
    {
      id: 2,
      image: property2,
      type: 'For Sale',
      title: 'Rendez House Bay',
      rating: 4.6,
      location: 'Lagos, Nigeria',
      bedrooms: 3,
      bathrooms: 3,
      area: 3,
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      price: 'N250,000'
    },
    {
      id: 3,
      image: property3,
      type: 'For Sale',
      title: 'Rendez House Bay',
      rating: 4.6,
      location: 'Lagos, Nigeria',
      bedrooms: 3,
      bathrooms: 3,
      area: 3,
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      price: 'N250,000'
    },
    {
      id: 4,
      image: property4,
      type: 'For Sale',
      title: 'Rendez House Bay',
      rating: 4.6,
      location: 'Lagos, Nigeria',
      bedrooms: 3,
      bathrooms: 3,
      area: 3,
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      price: 'N250,000'
    },
    {
      id: 5,
      image: property5,
      type: 'Rent Now',
      title: 'Rendez House Bay',
      rating: 4.6,
      location: 'Lagos, Nigeria',
      bedrooms: 3,
      bathrooms: 3,
      area: 3,
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      price: 'N250,000'
    },
    {
      id: 6,
      image: property6,
      type: 'Rent Now',
      title: 'Rendez House Bay',
      rating: 4.6,
      location: 'Lagos, Nigeria',
      bedrooms: 3,
      bathrooms: 3,
      area: 3,
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      price: 'N250,000'
    },
    {
      id: 7,
      image: property7,
      type: 'Rent Now',
      title: 'Rendez House Bay',
      rating: 4.6,
      location: 'Lagos, Nigeria',
      bedrooms: 3,
      bathrooms: 3,
      area: 3,
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      price: 'N250,000'
    },
    {
      id: 8,
      image: property8,
      type: 'Rent Now',
      title: 'Rendez House Bay',
      rating: 4.6,
      location: 'Lagos, Nigeria',
      bedrooms: 3,
      bathrooms: 3,
      area: 3,
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      price: 'N250,000'
    }
  ];

  const toggleFavorite = (propertyId: number) => {
    setFavorites(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  const PropertyCard = ({ property }: { property: typeof propertyData[0] }) => {
    const isFavorite = favorites.includes(property.id);

    return (
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        {/* Property Image */}
        <div className="relative">
          <div className="w-full h-48 bg-gray-200 overflow-hidden">
            <img 
              src={property.image} 
              alt={property.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Type Badge */}
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 text-xs font-medium text-white rounded ${
              property.type === 'For Sale' ? 'bg-gray-700' : 'bg-blue-600'
            }`}>
              {property.type}
            </span>
          </div>

          {/* Heart Icon */}
          <button
            onClick={() => toggleFavorite(property.id)}
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
          >
            <Heart 
              className={`w-4 h-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
            />
          </button>
        </div>

        {/* Property Details */}
        <div className="p-4 space-y-3">
          {/* Title and Rating */}
          <div className="flex items-start justify-between">
          <Link to="/property-details">
            <h3 className="text-lg font-semibold text-gray-900 hover:text-green-700 transition-colors">
                {property.title}
            </h3>
            </Link>
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium text-gray-700">{property.rating}</span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 text-gray-500">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{property.location}</span>
          </div>

          {/* Property Features */}
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-1">
              <Bed className="w-4 h-4" />
              <span className="text-sm">{property.bedrooms}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Bath className="w-4 h-4" />
              <span className="text-sm">{property.bathrooms}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Square className="w-4 h-4" />
              <span className="text-sm">{property.area}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">
            {property.description}
          </p>

          {/* Price and View Details */}
          <div className="flex items-center justify-between pt-2">
            <div className="text-xl font-bold text-gray-900">
              {property.price}
            </div>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-8 relative top-19">
          <h1 className="text-2xl font-bold text-gray-900">Explore Property</h1>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
            <span className="text-sm font-medium">See More</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Search Filters */}
        <div className="bg-white rounded-full p-2 shadow-sm mb-8 max-w-2xl mx-auto">
          <div className="flex items-center space-x-4">
            {/* Location Filter */}
            <div className="flex items-center space-x-2 px-4 py-2 flex-1">
              <MapPin className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Enter Location"
                value={searchFilters.location}
                onChange={(e) => setSearchFilters(prev => ({...prev, location: e.target.value}))}
                className="text-sm text-gray-600 bg-transparent outline-none flex-1"
              />
            </div>

            <div className="w-px h-6 bg-gray-200"></div>

            {/* Property Type Filter */}
            <div className="flex items-center space-x-2 px-4 py-2 flex-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <input
                type="text"
                placeholder="Enter Property type"
                value={searchFilters.propertyType}
                onChange={(e) => setSearchFilters(prev => ({...prev, propertyType: e.target.value}))}
                className="text-sm text-gray-600 bg-transparent outline-none flex-1"
              />
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>

            <div className="w-px h-6 bg-gray-200"></div>

            {/* Price Range Filter */}
            <div className="flex items-center space-x-2 px-4 py-2 flex-1">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              <input
                type="text"
                placeholder="Price Range"
                value={searchFilters.priceRange}
                onChange={(e) => setSearchFilters(prev => ({...prev, priceRange: e.target.value}))}
                className="w-full text-sm text-gray-600 bg-transparent outline-none flex-1"
              />
            </div>

            {/* Search Button */}
            <button className="relative right-1 bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <div className="flex space-x-8 border-b border-gray-200">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`pb-4 text-sm font-medium transition-colors relative ${
                  activeCategory === category
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyData.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProperty;