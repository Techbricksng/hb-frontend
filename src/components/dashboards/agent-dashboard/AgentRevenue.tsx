import { useState } from 'react';
import { MoreVertical, ChevronRight, TrendingUp } from 'lucide-react';
import CustomerHeader from './CustomerHeader';
import PaymentInvoiceModal from './PaymentInvoiceModal';

import property1 from '../../../assets/property-1.png';

interface Property {
  id: string;
  image: string;
  name: string;
  amount: string;
  transactionDate: string;
  category: 'Rent' | 'Buy';
  status: 'Completed' | 'Pending';
}

const AgentRevenueDashboard = () => {
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null);
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [invoiceStatus, setInvoiceStatus] = useState<'Pending' | 'Completed'>('Completed');
  const [activeTab, setActiveTab] = useState<'All Property' | 'Buy' | 'Rent'>('All Property');

  // Sample property data
  const properties: Property[] = [
    {
      id: '1',
      image: property1,
      name: 'Luxury Apartment',
      amount: 'N60000',
      transactionDate: 'Sep 9, 2024, 06:30pm',
      category: 'Rent',
      status: 'Completed'
    },
    {
      id: '2',
      image: property1,
      name: 'Luxury Apartment',
      amount: 'N60000',
      transactionDate: '',
      category: 'Rent',
      status: 'Completed'
    },
    {
      id: '3',
      image: property1,
      name: 'Luxury Apartment',
      amount: 'N60000',
      transactionDate: '',
      category: 'Buy',
      status: 'Pending'
    },
    {
      id: '4',
      image: property1,
      name: 'Luxury Apartment',
      amount: 'N60000',
      transactionDate: '',
      category: 'Buy',
      status: 'Completed'
    },
    {
      id: '5',
      image: property1,
      name: 'Luxury Apartment',
      amount: 'N60000',
      transactionDate: 'Sep 9, 2024, 06:30pm',
      category: 'Rent',
      status: 'Completed'
    },
    {
      id: '6',
      image: property1,
      name: 'Luxury Apartment',
      amount: 'N60000',
      transactionDate: '',
      category: 'Rent',
      status: 'Pending'
    },
    {
      id: '7',
      image: property1,
      name: 'Luxury Apartment',
      amount: 'N60000',
      transactionDate: '',
      category: 'Buy',
      status: 'Pending'
    },
    {
      id: '8',
      image: property1,
      name: 'Luxury Apartment',
      amount: 'N60000',
      transactionDate: 'Sep 9, 2024, 06:30pm',
      category: 'Buy',
      status: 'Completed'
    }
  ];

  const handleViewDetails = (propertyId: string, status: 'Completed' | 'Pending') => {
    setInvoiceStatus(status);
    setShowInvoiceModal(true);
    setSelectedProperty(null);
  };

  const toggleDropdown = (propertyId: string) => {
    setSelectedProperty(selectedProperty === propertyId ? null : propertyId);
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex-1 bg-gray-50">
      {/* Top Header */}
      <CustomerHeader />

      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Revenue Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Revenue</h1>
            <button className="text-white px-4 py-2 rounded-lg hover:bg-green-700 text-sm font-medium" style={{ backgroundColor: '#58745A' }}>
              Withdraw
            </button>
          </div>

          {/* Revenue Overview Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Revenue Overview</h2>
              <span className="text-sm text-gray-600">Jan - 31, Oct 2025</span>
            </div>

            {/* Bar Chart Placeholder */}
            <div className="mb-6">
              <div className="h-64 flex items-end space-x-2">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => {
                  const heights = [30, 45, 55, 65, 75, 55, 50, 45, 60, 70, 65, 55];
                  return (
                    <div key={month} className="flex-1 flex flex-col items-center">
                      <div className="w-full flex flex-col-reverse mb-2" style={{ height: '200px' }}>
                        <div
                          className="w-full bg-green-200 rounded-t"
                          style={{ height: `${heights[index]}%` }}
                        ></div>
                        <div
                          className="w-full bg-green-500 rounded-t"
                          style={{ height: `${heights[index] * 0.6}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-600">{month}</span>
                    </div>
                  );
                })}
              </div>
            </div>

           
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
           {/* Revenue Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">Total Overall Revenue</div>
                <div className="items-baseline space-x-2">
                  <span className="text-2xl font-bold text-gray-900">N72,000.00</span>
                  <div className="flex items-center text-green-600 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+0% Today</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Monthly Sum of Rent</div>
                <div className="items-baseline space-x-2">
                  <span className="text-2xl font-bold text-gray-900">N72,000.00</span>
                  <div className="flex items-center text-green-600 text-sm">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span>+0 % Today</span>
                  </div>
                </div>
              </div>
            </div>
        </div>

          {/* Property Table */}
          <div className="bg-white rounded-xl border border-gray-200">
            {/* Tabs */}
            <div className="border-b border-gray-200 px-6">
              <div className="flex items-center space-x-8">
                {(['All Property', 'Buy', 'Rent'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-4 pt-6 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? 'text-green-600 border-green-600'
                        : 'text-gray-500 border-transparent hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
                <div className="ml-auto">
                  <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                    See All
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Property
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Transaction Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
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
                          <div className="w-10 h-10 bg-gray-200 rounded-lg overflow-hidden">
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
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{property.amount}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{property.transactionDate}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{property.category}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(property.status)}`}>
                          {property.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="relative">
                          <button
                            onClick={() => toggleDropdown(property.id)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <MoreVertical className="w-4 h-4 text-gray-600" />
                          </button>
                          
                          {/* Dropdown Menu */}
                          {selectedProperty === property.id && (
                            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                              <button
                                onClick={() => handleViewDetails(property.id, property.status)}
                                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                              >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                  <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
                                  <line x1="9" y1="3" x2="9" y2="21" strokeWidth="2"/>
                                </svg>
                                <span>View Details</span>
                              </button>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Invoice Modal */}
      <PaymentInvoiceModal
        isOpen={showInvoiceModal}
        onClose={() => setShowInvoiceModal(false)}
        status={invoiceStatus}
      />
    </div>
  );
};

export default AgentRevenueDashboard;