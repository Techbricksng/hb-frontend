import { useState } from 'react';


import mainPropertyImage from '../assets/investment/main-property.png';
import livingRoom from '../assets/investment/living-room.png';
import diningArea from '../assets/investment/dining-area.png';
import bedroom from '../assets/investment/bedroom.png';
import staircase from '../assets/investment/staircase.png';

const InvestmentPropertyDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const propertyImages = [
    { src: mainPropertyImage, alt: "Exterior view of luxury mansion" },
    { src: livingRoom, alt: "Modern living room" },
    { src: diningArea, alt: "Dining area with garden view" },
    { src: bedroom, alt: "Master bedroom" },
    { src: staircase, alt: "Interior staircase" }
  ];

  const interiorImages = [
    { src: livingRoom, alt: "Living room interior" },
    { src: diningArea, alt: "Dining area" },
    { src: bedroom, alt: "Bedroom interior" },
    { src: staircase, alt: "Staircase design" }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Main Property Image */}
        <div className="mb-8">
          <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={propertyImages[selectedImage].src}
              alt={propertyImages[selectedImage].alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Property Title and Basic Info */}
        <div className="mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Real Estate development, freedom way, Lekki, Lagos.
          </h1>
          
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
              OFFICE OPPORTUNITY
            </span>
            <span className="text-green-600 text-sm font-medium">
              30% p.a expected returns
            </span>
          </div>

          {/* Price and Investor Info */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-3xl font-bold text-gray-900">₦250,000</p>
              <p className="text-gray-500 text-sm">per share</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-gray-900">1,840</p>
              <p className="text-gray-500 text-sm">Investors</p>
            </div>
          </div>

          {/* Invest Button */}
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Invest Now
          </button>
        </div>

        {/* About This Property Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">About this property</h2>
          
          <div className="text-gray-600 text-sm leading-relaxed space-y-4">
            <p>
              M120 APARTMENTS is a residential development comprising 120 units with individual BQs of a mixture of 1,2,3 bedroom and a penthouse duplex, with a 
              minimum floor spacing area of 147sqm and more spread over 11 floors. The building will be conjoined by two-level parking spaces. M120 APARTMENTS 
              is an unprecedented seamless combination of elegance, poise, convenience as well as value. Designed to align with the promise of a great living 
              experience, right in the heart of one of the most entertaining and vibrant districts in Lagos.
            </p>
            <p>
              Here are some actual pictures of a recently finished M120 apartment.
            </p>
          </div>
        </div>

        {/* Interior Images Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {interiorImages.map((image, index) => (
            <div key={index} className="aspect-square rounded-xl overflow-hidden">
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => setSelectedImage(index + 1)}
              />
            </div>
          ))}
        </div>

        {/* Project Progress and Company Information */}
        <div className="text-gray-600 text-sm leading-relaxed space-y-4">
          <p>
            This is the exterior progress of this project some months ago.
          </p>
          
          <p>
            Minimalist & Co Limited ("Minimalist" or the "Company") is a real estate development Company that builds top finished homes for individuals. They have 
            been previously involved in the construction of commercial and residential buildings. Minimalist & Co Ltd is an excellence-driven Real Estate 
            development company driven by professionals with the sole aim of building grandeur and ultra-modern homes for professionals, businesses and 
            upwardly mobile individuals, providing them with a seamless living experience. They prioritize working and maintaining a quality-driven process, 
            ensuring the finishes are of high quality, sourced directly from European manufacturers to you, providing you with the luxury, comfort and poise at a fair 
            price. Your living experience is their topmost priority! Minimalist & Co Ltd has been involved in the development and construction of a renowned Bank in 
            Nigeria and some of its branches as well as other Residential buildings within Lagos state.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPropertyDetailPage;