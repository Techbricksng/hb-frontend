import { Download } from 'lucide-react';
import CustomerHeader from './CustomerHeader';
import propertyExterior from '../../../assets/property/house-porch.png';
import bedroom from '../../../assets/property/bedroom.png';
import livingRoom from '../../../assets/property/living-room.png';
import kitchen from '../../../assets/property/dining-area.png';

const CustomerBuyPropDetails = () => {
  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Top Header */}
      <CustomerHeader />

      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Property Details</h1>

          {/* Property Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Main Image */}
            <div className="bg-blue-400 w-full h-full rounded-lg overflow-hidden aspect-video">
              <img 
                src={propertyExterior}
                alt="Property exterior" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Side Images Grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-300 rounded-lg overflow-hidden aspect-square">
                <img 
                  src={bedroom}
                  alt="Bedroom" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-300 rounded-lg overflow-hidden aspect-square">
                <img 
                  src={livingRoom}
                  alt="Living Room" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-300 rounded-lg overflow-hidden aspect-square">
                <img 
                  src={livingRoom}
                  alt="Living area" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-gray-300 rounded-lg overflow-hidden aspect-square">
                <img 
                  src={kitchen}
                  alt="Kitchen" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Information Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Property Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Property Information</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Name:</span>
                  <span className="text-gray-900 font-medium">Oakwood Luxury Apartment</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <span className="text-gray-700 font-medium">Address:</span>
                  <span className="text-gray-900 font-medium text-right">123 Palm Avenue, Lekki, Lagos</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Type:</span>
                  <span className="text-gray-900 font-medium">3-Bedroom Apartment</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Size:</span>
                  <span className="text-gray-900 font-medium">2500 sq ft</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Status:</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Owned
                  </span>
                </div>
              </div>
            </div>

            {/* Agent Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Agent Information</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Realtor's Name:</span>
                  <span className="text-gray-900 font-medium">Wade Warren</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Agency Name:</span>
                  <span className="text-gray-900 font-medium">Efab</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Contact:</span>
                  <span className="text-gray-900 font-medium">07035532345</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">License Number:</span>
                  <span className="text-gray-900 font-medium">REA-20250001</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Status:</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Information */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Payment Information</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Total Amount Paid:</span>
                  <span className="text-gray-900 font-medium">₦58,000,000</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Payment Date:</span>
                  <span className="text-gray-900 font-medium">25th-January-2025</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Payment Method:</span>
                  <span className="text-gray-900 font-medium">Bank Transfer</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Payment Plan:</span>
                  <span className="text-gray-900 font-medium">One-time</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Payment Status:</span>
                  <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Paid
                  </span>
                </div>
              </div>
            </div>

            {/* Ownership & Documentation */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Ownership & Documentation</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Owner Name:</span>
                  <span className="text-gray-900 font-medium">Alhaji Umar Ibarahim</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">HouseBank Account ID:</span>
                  <span className="text-gray-900 font-medium">HB2116750</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Purchase Reference Number:</span>
                  <span className="text-gray-900 font-medium">REF23411</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Date of Ownership Transfer:</span>
                  <span className="text-gray-900 font-medium">02-February-2025</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Certificate of Ownership:</span>
                  <button className="flex items-center text-gray-600 hover:text-gray-800 text-sm border border-gray-300 px-3 py-1 rounded-lg">
                    <Download className="w-4 h-4 mr-1" />
                    Available for download
                  </button>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Property Deed Status:</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Processed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerBuyPropDetails;