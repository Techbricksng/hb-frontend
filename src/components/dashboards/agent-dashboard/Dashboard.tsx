import { useState } from 'react';
import { Plus, MoreVertical } from 'lucide-react';
import CustomerHeader from './CustomerHeader';
import dome from '../../../assets/dome.png';
import sear from '../../../assets/sear.png';
import sear1 from '../../../assets/sear1.png';

// Import property images - replace with your actual image imports
import property1 from '../../../assets/property-1.png';
import property2 from '../../../assets/property-2.png';
import property3 from '../../../assets/property-3.png';
import property4 from '../../../assets/property-4.png';
import property5 from '../../../assets/property-5.png';
import property6 from '../../../assets/property-6.png';

interface Property {
  id: number;
  name: string;
  address: string;
  description: string;
  status: 'Approved' | 'Pending';
  category: 'Buy' | 'Rent' | 'Invest';
  image: string;
}

const AgentDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Monthly');

  // Properties data for the table
  const properties: Property[] = [
    {
      id: 1,
      name: "Luxury Apartment",
      address: "2972 Westheimer Rd, Santa Ana, Illinois 85486",
      description: "Lorem ipsum dolor sit amet...",
      status: "Approved",
      category: "Buy",
      image: property1
    },
    {
      id: 2,
      name: "Luxury Apartment", 
      address: "2118 Thornridge Cir, Syracuse, Connecticut 35624",
      description: "Lorem ipsum dolor sit amet...",
      status: "Pending",
      category: "Rent",
      image: property2
    },
    {
      id: 3,
      name: "Luxury Apartment",
      address: "4517 Washington Ave, Manchester, Kentucky 39495", 
      description: "Lorem ipsum dolor sit amet...",
      status: "Approved",
      category: "Invest",
      image: property3
    },
    {
      id: 4,
      name: "Luxury Apartment",
      address: "4517 Washington Ave, Manchester, Kentucky 39495",
      description: "Lorem ipsum dolor sit amet...",
      status: "Pending", 
      category: "Invest",
      image: property4
    },
    {
      id: 5,
      name: "Luxury Apartment",
      address: "2715 Ash Dr, San Jose, South Dakota 83475",
      description: "Lorem ipsum dolor sit amet...",
      status: "Approved",
      category: "Buy",
      image: property5
    },
    {
      id: 6,
      name: "Factory store",
      address: "2715 Ash Dr, San Jose, South Dakota 83475",
      description: "Lorem ipsum dolor sit amet...",
      status: "Approved",
      category: "Rent", 
      image: property6
    }
  ];

  // Helper function for status badge colors
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Pending':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };
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
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-gray-500 mb-1">Hello Sam Na</p>
            <h1 className="text-2xl font-bold text-gray-900">Good Morning</h1>
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            <Plus className="w-4 h-4" />
            <span className="text-sm">Add Property</span>
          </button>
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

        {/* Charts Section */}
        <div className="grid grid-cols-3 gap-6">
          {/* Revenue Overview Chart */}
          <div className="col-span-2 bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
              <div className="text-sm text-gray-500">01 Jan - 31 Mar 2025</div>
            </div>

            {/* Bar Chart */}
            <div className="h-64">
              <div className="flex items-end justify-between h-full space-x-1">
                {revenueData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-full bg-green-500 rounded-t transition-all duration-300 hover:bg-green-600"
                      style={{ 
                        height: `${(data.value / 100) * 100}%`,
                        minHeight: '10px'
                      }}
                    ></div>
                  </div>
                ))}
              </div>
              
              {/* X-axis labels */}
              <div className="flex justify-between mt-2">
                {revenueData.map((data, index) => (
                  <div key={index} className="text-xs text-gray-500 flex-1 text-center">
                    {data.month}
                  </div>
                ))}
              </div>
              
              {/* Y-axis scale */}
              <div className="flex flex-col justify-between text-xs text-gray-500 mt-4">
                <div>₦0K - ₦100K</div>
              </div>
            </div>
          </div>

          {/* Property Review Chart */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Property Review</h3>
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="text-sm border border-gray-300 rounded px-3 py-1"
              >
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Yearly</option>
              </select>
            </div>

            {/* Donut Chart */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <svg width="160" height="160" className="transform -rotate-90">
                  {/* Background circle */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#f3f4f6"
                    strokeWidth="20"
                  />
                  
                  {/* Blue segment - 45% */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="20"
                    strokeDasharray={`${45 * 3.77} 377`}
                    strokeDashoffset="0"
                  />
                  
                  {/* Green segment - 30% */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="20"
                    strokeDasharray={`${30 * 3.77} 377`}
                    strokeDashoffset={`-${45 * 3.77}`}
                  />
                  
                  {/* Orange segment - 25% */}
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#f59e0b"
                    strokeWidth="20"
                    strokeDasharray={`${25 * 3.77} 377`}
                    strokeDashoffset={`-${(45 + 30) * 3.77}`}
                  />
                </svg>
                
                {/* Center text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">100</div>
                    <div className="text-sm text-gray-500">Total</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Rent Property</span>
                </div>
                <span className="text-sm font-semibold">30%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Buy Property</span>
                </div>
                <span className="text-sm font-semibold">25%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-700">Property Investment</span>
                </div>
                <span className="text-sm font-semibold">45%</span>
              </div>
            </div>
          </div>
        </div>

        {/* My Listing Table Section */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200">
          {/* Table Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">My Listing</h3>
            <button className="text-sm text-purple-600 hover:text-purple-700 flex items-center">
              See All
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {properties.map((property) => (
                  <tr key={property.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-12 w-12 rounded-lg overflow-hidden mr-3 flex-shrink-0">
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
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">
                        {property.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(property.status)}`}>
                        {property.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-700">
                        {property.category}
                      </div>
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

export default AgentDashboard;