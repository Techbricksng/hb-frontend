import { useState } from 'react';
import { ArrowRight } from 'lucide-react';


import modernHouse from '../assets/explore/invest-modern-house.png';
import rusticHouse from '../assets/explore/invest-rustic-house.png';

// Modern house interior images
import modernInterior1 from '../assets/explore/invest-modern-house-1.png';
import modernInterior2 from '../assets/explore/invest-modern-house-2.png';
import modernInterior3 from '../assets/explore/invest-modern-house-3.png';
import modernInterior4 from '../assets/explore/invest-modern-house-4.png';
import modernInterior5 from '../assets/explore/invest-modern-house-5.png';

// Rustic house interior images
import rusticInterior1 from '../assets/explore/invest-rustic-house-1.png';
import rusticInterior2 from '../assets/explore/invest-rustic-house-2.png';
import rusticInterior3 from '../assets/explore/invest-rustic-house-3.png';
import rusticInterior4 from '../assets/explore/invest-rustic-house-4.png';
import rusticInterior5 from '../assets/explore/invest-rustic-house-5.png';

const InvestProperty = () => {
    const [selectedImages, setSelectedImages] = useState<{ [key: number]: string }>({
      1: modernHouse,
      2: rusticHouse
    });
  
    const investmentData = [
      {
        id: 1,
        mainImage: modernHouse,
        interiorImages: [modernInterior1, modernInterior2, modernInterior3, modernInterior4, modernInterior5],
        title: 'Real Estate development, freedom way, Lekki, Lagos.',
        developer: 'Magodo property & Co.',
        expectedReturns: '30%',
        pricePerShare: 'N20,000',
        investors: '1,200'
      },
      {
        id: 2,
        mainImage: rusticHouse,
        interiorImages: [rusticInterior1, rusticInterior2, rusticInterior3, rusticInterior4, rusticInterior5],
        title: 'Real Estate development, freedom way, Lekki, Lagos.',
        developer: 'Magodo property & Co.',
        expectedReturns: '30%',
        pricePerShare: 'N20,000',
        investors: '1,200'
      }
    ];
  
    const handleImageClick = (investmentId: number, imageSrc: string) => {
      setSelectedImages(prev => ({
        ...prev,
        [investmentId]: imageSrc
      }));
    };
  
    const InvestmentCard = ({ investment }: { investment: typeof investmentData[0] }) => (
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
        <div className="relative">
          {/* Main Property Image */}
          <div className="w-full h-80 overflow-hidden">
            <img 
              src={selectedImages[investment.id]} 
              alt={investment.title}
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Interior Images Row - Positioned over the main image with dark background */}
          <div className="absolute bottom-1 w-full right-4">
          <div className="bg-black/30 p-7 flex space-x-5">
              {investment.interiorImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageClick(investment.id, image)}
                  className={`w-20 h-16 rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                    selectedImages[investment.id] === image 
                      ? 'border-white shadow-lg' 
                      : 'border-transparent opacity-90 hover:opacity-100 hover:border-white hover:border-opacity-50'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Interior ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
  
        {/* Property Details */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {investment.title}
          </h3>
  
          {/* Developer */}
          <p className="text-gray-600 text-sm">
            by {investment.developer}
          </p>
  
          {/* Expected Returns */}
          <div className="flex items-center space-x-2">
            <span className="text-green-600 font-bold text-lg">{investment.expectedReturns} p.a</span>
            <span className="text-gray-500 text-sm">expected returns</span>
          </div>
  
          {/* Investment Details */}
          <div className="flex justify-between items-end">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-gray-900">{investment.pricePerShare}</div>
              <div className="text-gray-500 text-sm">per share</div>
            </div>
            <div className="text-right space-y-1">
              <div className="text-2xl font-bold text-gray-900">{investment.investors}</div>
              <div className="text-gray-500 text-sm">Investors</div>
            </div>
          </div>
  
          {/* Invest Button */}
          <button className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors mt-6">
            Invest
          </button>
        </div>
      </div>
    );
  
    return (
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Invest in Property</h2>
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
              <span className="text-sm font-medium">See More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
  
          {/* Investment Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {investmentData.map((investment) => (
              <InvestmentCard key={investment.id} investment={investment} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default InvestProperty;