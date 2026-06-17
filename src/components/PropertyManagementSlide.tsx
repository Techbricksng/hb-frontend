import { ArrowRight } from 'lucide-react';
import manage from '../assets/manage.png'

const PropertyManagementContent = () => {
  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Top Header */}
     

      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="h-96 bg-gradient-to-r from-gray-900/70 to-gray-900/30 relative overflow-hidden">
          {/* Background image would be here - using a placeholder background */}
          <img 
            src={manage} 
            alt="Manage" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Floating hands with keys and house model */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-4xl mx-auto px-6">
              {/* Left hand with keys */}
            
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Property Management
            </h1>
            
            <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
              At House Bank Real Estate, we specialize in delivering end-to-end property management solutions tailored to meet your 
              unique needs. Whether you're a homeowner, investor, or landlord, our team ensures your property is well-maintained, your 
              tenants are satisfied, and your investment generates the best possible returns.
            </p>
            
            <button className="inline-flex items-center bg-transparent border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-800 hover:text-white transition-colors duration-200 group">
              Let's Manage your property
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Spacer to account for the floating card */}
      <div className="h-48"></div>

     
    </div>
  );
};

export default PropertyManagementContent;