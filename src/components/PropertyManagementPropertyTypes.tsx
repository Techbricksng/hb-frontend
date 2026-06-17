import React from 'react';
import { ChevronRight } from 'lucide-react';

const PropertyManagementTypesPage = () => {
  const propertyTypes = [
    {
      title: "Single-Family Homes",
      icon: (
        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Apartments and Condos",
      icon: (
        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Commercial Spaces",
      icon: (
        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Multi-Unit Complexes",
      icon: (
        <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white ">
      {/* Property Types Section */}
      <section className="max-w-7xl mx-4 px-4 sm:px-6 lg:px-8 py-15">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Types of Properties We Manage</h1>
        </div>

        {/* Property Types Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {propertyTypes.map((property, index) => (
            <div 
              key={index}
              className="bg-purple-100 hover:bg-purple-200 transition-colors duration-200 rounded-2xl p-6 cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                {/* Icon and Title Container */}
                <div className="flex items-center space-x-4 flex-1">
                  {/* Icon Container */}
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border-2 border-gray-800">
                    {property.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                    {property.title}
                  </h3>
                </div>

                {/* Arrow */}
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors flex-shrink-0 ml-2" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PropertyManagementTypesPage;