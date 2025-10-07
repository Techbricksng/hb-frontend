import { useState } from 'react';
import { MoreHorizontal, Plus } from 'lucide-react';
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
  id: string;
  image: string;
  name: string;
  address: string;
  dateSubmitted: string;
  dateApproved: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  category: 'Buy' | 'Rent' | 'Invest';
}

interface StatCard {
  title: string;
  value: string;
  subtitle: string;
  color: string;
  bgColor: string;
}

const PendingProperties = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'This Month'>('All');

  // Summary statistics
  const stats: StatCard[] = [
    {
      title: 'Total Listings',
      value: '80',
      subtitle: 'vs last month',
      color: 'text-blue-600',
      bgColor: 'bg-blue-600'
    },
    {
      title: 'Approved Properties',
      value: '56',
      subtitle: 'vs last month',
      color: 'text-green-600',
      bgColor: 'bg-green-600'
    },
    {
      title: 'Pending Approval',
      value: '16',
      subtitle: 'vs last month',
      color: 'text-orange-600',
      bgColor: 'bg-orange-600'
    },
    {
      title: 'Clients',
      value: '68',
      subtitle: 'vs last month',
      color: 'text-teal-600',
      bgColor: 'bg-teal-600'
    }
  ];

  // Sample property data
  const properties: Property[] = [
    {
      id: '1',
      image: property1,
      name: 'Luxury Apartment',
      address: '7375 Westheimer Rd. Santa Ana, Illinois 85486',
      dateSubmitted: 'Lorem ipsum dolor...',
      dateApproved: 'Lorem ipsum dolor...',
      status: 'Pending',
      category: 'Buy'
    },
    {
      id: '2',
      image: property2,
      name: 'Luxury Apartment',
      address: '2118 Thorndale Cir, Sylacus, Connecticut 06033',
      dateSubmitted: 'Lorem ipsum dolor...',
      dateApproved: 'Lorem ipsum dolor...',
      status: 'Pending',
      category: 'Rent'
    },
    {
      id: '3',
      image: property3,
      name: 'Luxury Apartment',
      address: '4517 Washington Ave, Manchester, Kentucky 39495',
      dateSubmitted: 'Lorem ipsum dolor...',
      dateApproved: 'Lorem ipsum dolor...',
      status: 'Pending',
      category: 'Invest'
    },
    {
      id: '4',
      image: property4,
      name: 'Luxury Apartment',
      address: '4517 Washington Ave, Manchester, Kentucky 39495',
      dateSubmitted: 'Lorem ipsum dolor...',
      dateApproved: 'Lorem ipsum dolor...',
      status: 'Pending',
      category: 'Invest'
    },
    {
      id: '5',
      image: property5,
      name: 'Luxury Apartment',
      address: '2715 Ash Dr, San Jose, South Dakota 83475',
      dateSubmitted: 'Lorem ipsum dolor...',
      dateApproved: 'Lorem ipsum dolor...',
      status: 'Pending',
      category: 'Buy'
    },
    {
      id: '6',
      image: property6,
      name: 'Factory stone',
      address: '2715 Ash Dr, San Jose, South Dakota 83475',
      dateSubmitted: 'Lorem ipsum dolor...',
      dateApproved: 'Lorem ipsum dolor...',
      status: 'Pending',
      category: 'Rent'
    }
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800 border border-green-200';
      case 'Pending':
        return 'bg-orange-100 text-orange-800 border border-orange-200';
      case 'Rejected':
        return 'bg-red-100 text-red-800 border border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  return (
    <div className="flex-1 bg-gray-50">
      {/* Top Header */}
      <CustomerHeader />

      {/* Main Content */}
      <div className="p-6">
        {/* Greeting and Balance */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600 text-sm mb-1">Hello Sam for</p>
              <h1 className="text-2xl font-bold text-gray-900">Good Morning</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeFilter === 'All' 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveFilter('All')}
              >
                Add Property
              </button>
              <button 
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 ${
                  activeFilter === 'This Month' 
                    ? 'bg-purple-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveFilter('This Month')}
              > <img src={calendar} alt="dome" className="w-5 h-5" />
                <span>This Month</span>
              </button>
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


        {/* Properties Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Property
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Submitted
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Approved
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {properties.map((property) => (
                  <tr key={property.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                          <img 
                            src={property.image} 
                            alt={property.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {property.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-900 max-w-xs block">
                        {property.address}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">
                        {property.dateSubmitted}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">
                        {property.dateApproved}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(property.status)}`}>
                        {property.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">
                        {property.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreHorizontal className="w-4 h-4 text-gray-600" />
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

export default PendingProperties;