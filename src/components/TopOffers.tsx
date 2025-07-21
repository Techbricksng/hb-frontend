import { useState } from 'react';
import { Heart, MapPin, Bed, Bath, Square } from 'lucide-react';

// You'll need to add these property images to your assets folder
import property1 from '../assets/property-1.png';
import property2 from '../assets/property-2.png'; 
import property3 from '../assets/property-3.png';
import property4 from '../assets/property-4.png';

const TopOffers = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

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
      type: 'Rent',
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
      type: 'Rent',
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
              property.type === 'For Sale' ? 'bg-gray-700' : 'bg-gray-600'
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
            <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
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
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Top Offers</h2>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
            <span className="text-sm font-medium">See More</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
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

export default TopOffers;