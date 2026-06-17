import { useState } from 'react';
import { Plus, MoreVertical, Eye, Heart } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// Import property images - replace with your actual image imports
import property1 from '../../../assets/property-1.png';
import property2 from '../../../assets/property-2.png';
import property3 from '../../../assets/property-3.png';
import property4 from '../../../assets/property-4.png';
import property5 from '../../../assets/property-5.png';
import property6 from '../../../assets/property-6.png';

import dome from '../../../assets/dome.png';
import sear from '../../../assets/sear.png';
import sear1 from '../../../assets/sear1.png';
import calendar from '../../../assets/calendar.png';

interface Property {
  id: number;
  name: string;
  address: string;
  price: string;
  dateListed: string;
  category: 'Buy' | 'Rent';
  views: number;
  likes: number;
  status: 'Available' | 'Rented' | 'Sold';
  image: string;
}

const AgentListedProp = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Monthly');

  // Properties data for the table
  const properties: Property[] = [
    {
      id: 1,
      name: "Luxury Apartment",
      address: "2972 Westheimer Rd, Santa Ana, Illinois 85486",
      price: "$948.55",
      dateListed: "10/28/12",
      category: "Buy",
      views: 12,
      likes: 1.1,
      status: "Available",
      image: property1
    },
    {
      id: 2,
      name: "Luxury Apartment", 
      address: "2118 Thornridge Cir, Syracuse, Connecticut 35624",
      price: "$202.87",
      dateListed: "10/28/12",
      category: "Rent",
      views: 12,
      likes: 5.5,
      status: "Rented",
      image: property2
    },
    {
      id: 3,
      name: "Luxury Apartment",
      address: "4517 Washington Ave, Manchester, Kentucky 39495", 
      price: "$156.58",
      dateListed: "8/15/17",
      category: "Buy",
      views: 12,
      likes: 1.1,
      status: "Available",
      image: property3
    },
    {
      id: 4,
      name: "Luxury Apartment",
      address: "4517 Washington Ave, Manchester, Kentucky 39495",
      price: "$202.87",
      dateListed: "1/15/12",
      category: "Rent",
      views: 12,
      likes: 5.5,
      status: "Available", 
      image: property4
    },
    {
      id: 5,
      name: "Luxury Apartment",
      address: "2715 Ash Dr, San Jose, South Dakota 83475",
      price: "$156.58",
      dateListed: "5/27/15",
      category: "Buy",
      views: 12,
      likes: 1.1,
      status: "Sold",
      image: property5
    },
    {
      id: 6,
      name: "Factory store",
      address: "2715 Ash Dr, San Jose, South Dakota 83475",
      price: "$219.78",
      dateListed: "5/27/15",
      category: "Rent", 
      views: 12,
      likes: 5.5,
      status: "Rented",
      image: property6
    },
    {
      id: 7,
      name: "Factory store",
      address: "2715 Ash Dr, San Jose, South Dakota 83475",
      price: "$189.95",
      dateListed: "9/4/12",
      category: "Rent",
      views: 12,
      likes: 5.5,
      status: "Available",
      image: property1
    },
    {
      id: 8,
      name: "Factory store",
      address: "2715 Ash Dr, San Jose, South Dakota 83475",
      price: "$219.78",
      dateListed: "10/28/12",
      category: "Rent",
      views: 12,
      likes: 5.5,
      status: "Available",
      image: property2
    }
  ];

  // Helper function for status badge colors
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Available':
        return 'bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium';
      case 'Rented':
        return 'bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-medium';
      case 'Sold':
        return 'bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium';
      default:
        return 'bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium';
    }
  };

  // Revenue chart data (simplified bars)
  const revenueData = [
    { month: 'Jan', value: 40 },
    { month: 'Feb', value: 65 },
    { month: 'Mar', value: 45 },
    { month: 'Apr', value: 80 },
    { month: 'May', value: 60 },
    { month: 'Jun', value: 90 },
    { month: 'Jul', value: 75 },
    { month: 'Aug', value: 55 },
    { month: 'Sep', value: 70 },
    { month: 'Oct', value: 85 },
    { month: 'Nov', value: 65 },
    { month: 'Dec', value: 80 }
  ];

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Header */}
      <CustomerHeader />

      {/* Main Content */}
      <div className="p-6">
        {/* Top Section - Greeting and Add Property */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-500 mb-1">Hello John Doe</p>
            <h1 className="text-2xl font-bold text-gray-900">Good Morning</h1>
          </div>
          <div className="flex items-center space-x-4">
           
            <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
              <Plus className="w-4 h-4" />
              <span className="text-sm">Add Property</span>
            </button>

             <div className="flex items-center space-x-2">
              <img src={calendar} alt="dome" className="w-5 h-5" />
              <span className="text-sm text-gray-600">This Month</span>
            </div>
          </div>
        </div>

         {/* Stats Cards Row */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {/* Revenue Card - Black */}
          <div className="bg-black text-white rounded-xl p-4">
            <div className="text-2xl font-bold mb-1">₦450,000</div>
            <div className="text-xs text-gray-300">+15% from last month</div>
          </div>

          {/* Total Listings - Blue */}
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
               <img src={dome} alt="dome" className="w-5 h-5" />
               <div className="text-sm text-gray-600 mb-1">Total Listings</div>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                
                <img src={sear} alt="dome" className="w-4 h-4" />
              </div>
            </div>
           
            <div className="text-center text-2xl font-bold text-gray-900 mb-1">80</div>
            <div className="text-center text-xs text-gray-500">
            <span className="text-green-600">+</span>
            <span className="text-green-600 font-semibold">3.5%</span>
            <span className="text-black"> this month</span>
          </div>

          </div>

          {/* Approved Properties - Green */}
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
               <img src={dome} alt="dome" className="w-5 h-5" />
                <div className="text-sm text-gray-600 mb-1">Approved Properties</div>
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <img src={sear1} alt="dome" className="w-4 h-4" />
              </div>
            </div>
           
            <div className="text-center text-2xl font-bold text-gray-900 mb-1">44</div>
            <div className="text-center text-xs text-gray-500">
            <span className="text-green-600">+</span>
            <span className="text-green-600 font-semibold">3.5%</span>
            <span className="text-black"> this month</span>
          </div>
          </div>

          {/* Pending Approvals - Orange */}
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <img src={dome} alt="dome" className="w-5 h-5" />
              <div className="text-sm text-gray-600 mb-1">Pending Approvals</div>
              <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                 <img src={sear} alt="dome" className="w-4 h-4" />
              </div>
            </div>
            <div className="text-center text-2xl font-bold text-gray-900 mb-1">36</div>
            <div className="text-center text-xs text-gray-500">
            <span className="text-green-600">+</span>
            <span className="text-green-600 font-semibold">3.5%</span>
            <span className="text-black"> this month</span>
          </div>
          </div>

          {/* Clients - Teal */}
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <img src={dome} alt="dome" className="w-5 h-5" />
              <div className="text-md text-gray-600 mb-1">Clients</div>
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                 <img src={sear} alt="dome" className="w-4 h-4" />
              </div>
            </div>
            
            <div className="text-center text-2xl font-bold text-gray-900 mb-1">12</div>
             <div className="text-center text-xs text-gray-500">
            <span className="text-green-600">+</span>
            <span className="text-green-600 font-semibold">3.5%</span>
            <span className="text-black"> this month</span>
          </div>
          </div>
        </div>


        {/* My Listing Table Section - Full Width */}
        <div className="bg-white rounded-xl border border-gray-200">
          {/* Table Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">My Listing</h3>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Listed</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {properties.map((property) => (
                  <tr key={property.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-lg overflow-hidden mr-3 flex-shrink-0">
                          <img 
                            src={property.image} 
                            alt={property.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="text-sm font-medium text-gray-900">
                          {property.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700 max-w-xs">
                        {property.address}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold text-gray-900">
                        {property.price}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">
                        {property.dateListed}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">
                        {property.category}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{property.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{property.likes}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={getStatusColor(property.status)}>
                        {property.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentListedProp;