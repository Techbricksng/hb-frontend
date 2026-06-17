import { ChevronRight } from 'lucide-react';

// You'll need to add these images to your assets folder
import property1 from '../assets/investment/property-1.png';
import property2 from '../assets/investment/property-2.png';

// Interior thumbnail images
import interior1 from '../assets/investment/interior1.png';
import interior2 from '../assets/investment/interior2.png';
import interior3 from '../assets/investment/interior3.png';
import interior4 from '../assets/investment/interior4.png';
import interior5 from '../assets/investment/interior5.png';

interface SimilarProperty {
  id: number;
  title: string;
  developer: string;
  expectedReturns: string;
  pricePerShare: string;
  investors: number;
  mainImage: string;
  thumbnails: string[];
  status: 'available' | 'sold-out';
}

const SimilarPropertiesSection = () => {
  const similarProperties: SimilarProperty[] = [
    {
      id: 1,
      title: "Real Estate development, freedom way, Lekki, Lagos.",
      developer: "Minimalistic & Co.",
      expectedReturns: "30% p.a expected returns",
      pricePerShare: "₦250,000",
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
      investors: 1200,
      mainImage: property2,
      thumbnails: [interior1, interior2, interior3, interior4, interior5],
      status: 'sold-out'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Similar Properties
          </h2>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors">
            <span className="text-sm font-medium">See More</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {similarProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              {/* Property Image with Thumbnails */}
              <div className="relative h-64 lg:h-80">
                <img
                  src={property.mainImage}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Thumbnail Strip Overlay */}
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  {property.thumbnails.map((thumb, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white shadow-sm cursor-pointer hover:scale-105 transition-transform"
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

              {/* Property Information */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-tight hover:text-green-700 transition-colors cursor-pointer">
                  {property.title}
                </h3>
                
                {/* Developer */}
                <p className="text-sm text-gray-500 mb-3">
                  by {property.developer}
                </p>

                {/* Expected Returns */}
                <p className="text-sm text-green-600 font-medium mb-4">
                  {property.expectedReturns}
                </p>

                {/* Price and Investor Stats */}
                <div className="flex items-end justify-between mb-6">
                  <div>
                    <p className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {property.pricePerShare}
                    </p>
                    <p className="text-sm text-gray-500">per share</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {property.investors.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">Investors</p>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex justify-start">
                  {property.status === 'available' ? (
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
                      Invest
                    </button>
                  ) : (
                    <button className="bg-orange-500 text-white px-6 py-2.5 rounded-lg text-sm font-medium cursor-not-allowed">
                      Sold Out
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarPropertiesSection;