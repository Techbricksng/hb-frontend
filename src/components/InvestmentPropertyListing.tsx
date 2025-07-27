import { useState } from 'react';

// You'll need to add these images to your assets folder
import property1 from '../assets/investment/property-1.png';
import property2 from '../assets/investment/property-2.png';
import property3 from '../assets/investment/property-3.png';
import property4 from '../assets/investment/property-4.png';

// Interior images for thumbnails
import interior1 from '../assets/investment/interior1.png';
import interior2 from '../assets/investment/interior2.png';
import interior3 from '../assets/investment/interior3.png';
import interior4 from '../assets/investment/interior4.png';
import interior5 from '../assets/investment/interior5.png';
import { Link } from 'react-router-dom';

interface PropertyData {
  id: number;
  title: string;
  developer: string;
  expectedReturns: string;
  pricePerShare: string;
  totalPrice: number;
  investors: number;
  mainImage: string;
  thumbnails: string[];
  status: 'available' | 'sold-out';
}

const PropertyListingsPage = () => {
  const [activeTab, setActiveTab] = useState('Land');
  // Track the current main image for each property
  const [currentImages, setCurrentImages] = useState<Record<number, string>>({});

  const properties: PropertyData[] = [
    {
      id: 1,
      title: "Real Estate development, freedom way, Lekki, Lagos.",
      developer: "Minimalistic & Co.",
      expectedReturns: "30% p.a expected returns",
      pricePerShare: "₦250,000",
      totalPrice: 250000,
      investors: 1840,
      mainImage: property1,
      thumbnails: [interior1, interior2, interior3, interior4, interior5],
      status: 'available'
    },
    {
      id: 2,
      title: "Real Estate development, freedom way, Lekki, Lagos.",
      developer: "Magodo property & Co.",
      expectedReturns: "30% p.a expected returns",
      pricePerShare: "₦20,000",
      totalPrice: 20000,
      investors: 1200,
      mainImage: property2,
      thumbnails: [interior1, interior2, interior3, interior4, interior5],
      status: 'sold-out'
    },
    {
      id: 3,
      title: "Real Estate development, freedom way, Lekki, Lagos.",
      developer: "Minimalistic & Co.",
      expectedReturns: "30% p.a expected returns",
      pricePerShare: "₦50,000",
      totalPrice: 50000,
      investors: 1840,
      mainImage: property3,
      thumbnails: [interior1, interior2, interior3, interior4, interior5],
      status: 'sold-out'
    },
    {
      id: 4,
      title: "Real Estate development, freedom way, Lekki, Lagos.",
      developer: "Magodo property & Co.",
      expectedReturns: "30% p.a expected returns",
      pricePerShare: "₦20,000",
      totalPrice: 20000,
      investors: 1200,
      mainImage: property4,
      thumbnails: [interior1, interior2, interior3, interior4, interior5],
      status: 'available'
    }
  ];

  const tabs = ['All Property', 'Buy', 'Rent', 'Land', 'Invest', 'List Property'];

  // Function to handle thumbnail click
  const handleThumbnailClick = (propertyId: number, imageSrc: string) => {
    setCurrentImages(prev => ({
      ...prev,
      [propertyId]: imageSrc
    }));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-6 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium pb-2 transition-colors ${
                activeTab === tab
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              {/* Main Property Image */}
              <div className="relative h-64 lg:h-80">
                <img
                  src={currentImages[property.id] || property.mainImage}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Thumbnail Strip */}
                <div className="absolute bottom-1 left-1 flex space-x-2 bg-black/30 p-4 w-full">
                  {property.thumbnails.map((thumb, index) => (
                    <div
                      key={index}
                      className="w-15 h-15 rounded-lg overflow-hidden border-2 border-white shadow-sm cursor-pointer"
                      onClick={() => handleThumbnailClick(property.id, thumb)}
                    >
                      <img
                        src={thumb}
                        alt={`Interior ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <Link to="/investment-details">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                  {property.title}
                </h3>
                </Link>
                <p className="text-sm text-gray-500 mb-3">
                  by {property.developer}
                </p>

                <p className="text-sm text-green-600 font-medium mb-4">
                  {property.expectedReturns}
                </p>

                {/* Price and Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      {property.pricePerShare}
                    </p>
                    <p className="text-sm text-gray-500">per share</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      {property.investors.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">Investors</p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex justify-start">
                  {property.status === 'available' ? (
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                      Invest
                    </button>
                  ) : (
                    <button className="bg-orange-500 text-white px-6 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                      Sold Out
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyListingsPage;