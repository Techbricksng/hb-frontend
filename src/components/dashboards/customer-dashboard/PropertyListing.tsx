import { useState } from 'react';
import { 
  Search,
  SlidersHorizontal,
  Heart,
  Star,
  Bell,
  ChevronDown
} from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// Type definitions
interface Property {
  id: number;
  name: string;
  rating: number;
  reviewCount: number;
  price: string;
  description: string;
  image: string;
  status: 'For Sale' | 'For Rent' | 'Sold Out';
  discount?: string;
  isWishlisted: boolean;
}

const CustomerPropertiesListingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [wishlistCount, setWishlistCount] = useState(0);

  // Sample properties data
  const [properties, setProperties] = useState<Property[]>([
    {
      id: 1,
      name: 'Rendez House Bay',
      rating: 4.6,
      reviewCount: 3,
      price: 'N250,000',
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      image: '/api/placeholder/300/200',
      status: 'For Sale',
      isWishlisted: false
    },
    {
      id: 2,
      name: 'Rendez House Bay',
      rating: 4.6,
      reviewCount: 3,
      price: 'N250,000',
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      image: '/api/placeholder/300/200',
      status: 'For Sale',
      isWishlisted: false
    },
    {
      id: 3,
      name: 'Rendez House Bay',
      rating: 4.6,
      reviewCount: 3,
      price: 'N250,000',
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      image: '/api/placeholder/300/200',
      status: 'For Sale',
      isWishlisted: false
    },
    {
      id: 4,
      name: 'Rendez House Bay',
      rating: 4.6,
      reviewCount: 3,
      price: 'N450,000',
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      image: '/api/placeholder/300/200',
      status: 'For Sale',
      isWishlisted: false
    },
    {
      id: 5,
      name: 'Rendez House Bay',
      rating: 4.6,
      reviewCount: 3,
      price: 'N1,000,000',
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      image: '/api/placeholder/300/200',
      status: 'Sold Out',
      discount: '50% 3 Months',
      isWishlisted: false
    },
    {
      id: 6,
      name: 'Rendez House Bay',
      rating: 4.6,
      reviewCount: 3,
      price: 'N250,000',
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      image: '/api/placeholder/300/200',
      status: 'Sold Out',
      discount: '20% 6 Months',
      isWishlisted: false
    },
    {
      id: 7,
      name: 'Rendez House Bay',
      rating: 4.6,
      reviewCount: 3,
      price: 'N250,000',
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      image: '/api/placeholder/300/200',
      status: 'For Rent',
      discount: '30% 12 Month',
      isWishlisted: false
    },
    {
      id: 8,
      name: 'Rendez House Bay',
      rating: 4.6,
      reviewCount: 3,
      price: 'N3,000,000',
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      image: '/api/placeholder/300/200',
      status: 'For Sale',
      discount: '30% 3 Months',
      isWishlisted: false
    }
  ]);

  const toggleWishlist = (propertyId: number) => {
    setProperties(prevProperties =>
      prevProperties.map(property => {
        if (property.id === propertyId) {
          const newWishlistStatus = !property.isWishlisted;
          setWishlistCount(prev => newWishlistStatus ? prev + 1 : prev - 1);
          return { ...property, isWishlisted: newWishlistStatus };
        }
        return property;
      })
    );
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'For Sale':
        return 'bg-green-500';
      case 'For Rent':
        return 'bg-blue-500';
      case 'Sold Out':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Header */}
      <CustomerHeader />
      <div className="p-6">
        {/* Page Title and Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 space-y-4 md:space-y-0">
  {/* Left: Title */}
  <div>
    <h2 className="text-2xl font-bold text-gray-900">Properties</h2>
    <p className="text-gray-600">205 properties available</p>
  </div>

  {/* Middle: Search Filter */}
  <div className="relative mx-auto md:mx-0 order-2 md:order-2">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search here..."
      className="pl-12 pr-12 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 w-72 md:w-80 bg-white"
    />
    <SlidersHorizontal className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
  </div>

  {/* Right: Wishlist */}
  <div className="flex items-center justify-end order-3">
    <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
      <Heart className="w-4 h-4" />
      <span>Wishlist</span>
      {wishlistCount > 0 && (
        <span className="bg-purple-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {wishlistCount}
        </span>
      )}
    </button>
  </div>
</div>


        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
              {/* Property Image */}
              <div className="relative">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Property Image</span>
                </div>
                
                {/* Status Badge */}
                <div className={`absolute top-3 left-3 ${getStatusColor(property.status)} text-white text-xs px-2 py-1 rounded`}>
                  {property.status}
                </div>
                
                {/* Discount Badge */}
                {property.discount && (
                  <div className="absolute top-3 right-3 bg-white text-green-600 text-xs px-2 py-1 rounded font-medium">
                    {property.discount}
                  </div>
                )}
                
                {/* Wishlist Heart */}
                <button 
                  onClick={() => toggleWishlist(property.id)}
                  className="absolute bottom-3 right-3 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50"
                >
                  <Heart 
                    className={`w-4 h-4 ${property.isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`} 
                  />
                </button>
              </div>

              {/* Property Info */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{property.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-600">{property.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-lg font-bold text-gray-900">{property.price}</span>
                  <span className="text-xs text-gray-500">({property.reviewCount})</span>
                </div>
                
                <p className="text-xs text-gray-600 mb-4 line-clamp-2">
                  {property.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gray-800 text-white py-2 px-3 rounded-lg text-xs font-medium hover:bg-gray-700">
                    View Details
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded-lg text-xs font-medium hover:bg-gray-50">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerPropertiesListingPage;