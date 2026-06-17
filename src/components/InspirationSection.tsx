import React from 'react';

// You'll need to add these images to your assets folder
import modernApartments from '../assets/explore/modern-apartments.png';
import commercialBuilding from '../assets/explore/commercial-building.png';
import aerialNeighborhood from '../assets/explore/aerial-neighborhood.png';

const InspirationSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Get inspiration for your next properties
          </h2>
        </div>

        {/* Main Layout - Large card on left, two smaller cards on right */}
        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-100 ">
          {/* Large Card - Left Side */}
          <div className=" flex-1 lg:flex-[2] relative rounded-3xl overflow-hidden shadow-lg">
            <div className="absolute inset-0">
              <img 
                src={modernApartments}
                alt="Modern apartments"
                className="w-full h-full object-cover"
              />
            
            </div>
            <div className="relative h-full flex flex-col justify-end p-8">
                
              <div className="w-[113%] bg-black/50 p-4 relative right-8 top-8">
                <h3 className="text-2xl font-bold text-white leading-tight mb-4">
                  5 of the best properties in Nigeria
                </h3>
                <p className="text-white text-opacity-90 text-base leading-relaxed w-full">
                  From Abuja to every part of Nigeria, see the best recommended properties in Nigeria and the values, how it can help your portfolio positively.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Two smaller cards side by side */}
          <div className="flex-2 flex flex-col lg:flex-row gap-6">
            {/* First Right Card */}
            <div className="flex-1 relative rounded-3xl overflow-hidden shadow-lg">
              <div className="h-90 lg:h-full relative">
                <img 
                  src={commercialBuilding}
                  alt="Commercial building"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-95">
                  <h3 className="text-md font-bold text-gray-900 leading-tight mb-1">
                    The 10 best real estates in Nigeria
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A beautiful house that resonates the beauty of lagos, affordable and friendly environment
                  </p>
                </div>
              </div>
            </div>

            {/* Second Right Card */}
            <div className="flex-1 relative rounded-3xl overflow-hidden shadow-lg">
              <div className="h-90 lg:h-full relative">
                <img 
                  src={aerialNeighborhood}
                  alt="Aerial neighborhood view"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-95">
                  <h3 className="text-md font-bold text-gray-900 leading-tight mb-1">
                    The 5 best Neighbourhood in Nigeria
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    A beautiful house that resonates the beauty of lagos, affordable and friendly environment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationSection;