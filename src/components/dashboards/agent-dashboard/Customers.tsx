import { useState } from 'react';
import { Search, Filter, MoreVertical, Eye, MessageSquare } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

import firstUser from '../../../assets/1.png';
import secondUser from '../../../assets/2.png';
import thirdUser from '../../../assets/3.png';
import fourthUser from '../../../assets/4.png';
import fifthUser from '../../../assets/5.png';
import sixthUser from '../../../assets/6.png';
import filter from '../../../assets/filter.png';

interface Customer {
  id: string;
  avatar: string;
  name: string;
  address: string;
  email: string;
  noProperty: number;
  categories: 'Rent' | 'Buy';
  paymentStatus: 'Paid' | 'Over Due' | 'InProgress' | 'Due';
  lastContacted: string;
}

type TabType = 'All Property' | 'Buy' | 'Rent';

const ActiveCustomersPage = () => {
  const [activeTab, setActiveTab] = useState<TabType>('All Property');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<string | null>(null);

  // Sample customer data
  const customers: Customer[] = [
    {
      id: '1',
      avatar: firstUser,
      name: 'Wade Warren',
      address: 'Gwarinpa Abuja',
      email: 'deanna.curtis@example.com',
      noProperty: 2,
      categories: 'Rent',
      paymentStatus: 'Paid',
      lastContacted: '21/01/2025'
    },
    {
      id: '2',
      avatar: secondUser,
      name: 'Cameron Williamson',
      address: 'Gwarinpa Abuja',
      email: 'michael.mitc@example.com',
      noProperty: 1,
      categories: 'Rent',
      paymentStatus: 'Over Due',
      lastContacted: '21/01/2025'
    },
    {
      id: '3',
      avatar: thirdUser,
      name: 'Esther Howard',
      address: 'Gwarinpa Abuja',
      email: 'deanna.curtis@example.com',
      noProperty: 1,
      categories: 'Buy',
      paymentStatus: 'Paid',
      lastContacted: '21/01/2025'
    },
    {
      id: '4',
      avatar: fourthUser,
      name: 'Brooklyn Simmons',
      address: 'Gwarinpa Abuja',
      email: 'jackson.graham@example.com',
      noProperty: 2,
      categories: 'Rent',
      paymentStatus: 'Paid',
      lastContacted: '21/01/2025'
    },
    {
      id: '5',
      avatar: fifthUser,
      name: 'Leslie Alexander',
      address: 'Gwarinpa Abuja',
      email: 'michelle.rivera@example.com',
      noProperty: 1,
      categories: 'Rent',
      paymentStatus: 'Paid',
      lastContacted: '21/01/2025'
    },
    {
      id: '6',
      avatar: sixthUser,
      name: 'Jenny Wilson',
      address: 'Gwarinpa Abuja',
      email: 'jessica.hanson@example.com',
      noProperty: 1,
      categories: 'Rent',
      paymentStatus: 'Over Due',
      lastContacted: '21/01/2025'
    },
    {
      id: '7',
      avatar: fourthUser,
      name: 'Guy Hawkins',
      address: 'Gwarinpa Abuja',
      email: 'debbie.baker@example.com',
      noProperty: 1,
      categories: 'Buy',
      paymentStatus: 'InProgress',
      lastContacted: '21/01/2025'
    },
    {
      id: '8',
      avatar: firstUser,
      name: 'Robert Fox',
      address: 'Gwarinpa Abuja',
      email: 'jackson.graham@example.com',
      noProperty: 3,
      categories: 'Rent',
      paymentStatus: 'Due',
      lastContacted: '21/01/2025'
    },
    {
      id: '9',
      avatar: thirdUser,
      name: 'Jacob Jones',
      address: 'Gwarinpa Abuja',
      email: 'debbie.baker@example.com',
      noProperty: 2,
      categories: 'Buy',
      paymentStatus: 'Paid',
      lastContacted: '21/01/2025'
    }
  ];

  const tabs: TabType[] = ['All Property', 'Buy', 'Rent'];

  const getPaymentStatusStyles = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-800 border border-green-300';
      case 'Over Due':
        return 'bg-orange-500 text-white';
      case 'InProgress':
        return 'bg-blue-100 text-blue-800 border border-blue-300';
      case 'Due':
        return 'bg-orange-100 text-orange-800 border border-orange-300';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleDropdown = (customerId: string) => {
    setSelectedCustomer(selectedCustomer === customerId ? null : customerId);
  };

  const handleViewDetails = (customerId: string) => {
    console.log('View details for customer:', customerId);
    setSelectedCustomer(null);
  };

  const handleSendMessage = (customerId: string) => {
    console.log('Send message to customer:', customerId);
    setSelectedCustomer(null);
  };

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === 'All Property' || customer.categories === activeTab;
    
    return matchesSearch && matchesTab;
  });

  return (
    <div className="flex-1 bg-gray-50">
      {/* Top Header */}
      <CustomerHeader />

      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">

        <div className='flex flex-col md:flex-row md:items-center md:justify-between mb-6'>
          {/* Page Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Active Customer</h1>
            <p className="text-gray-600">Total No of Customers <span className="font-semibold">36</span></p>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center justify-end space-x-4 mb-6">
            <div className="flex items-center space-x-4 bg-white border border-gray-200 rounded-full px-3 py-2">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search here..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-900 placeholder-gray-500 w-64"
              />
              <button className="p-1 hover:bg-gray-100 rounded">
                <img 
                src={filter} 
                className="w-4 h-4 text-gray-400" 
                />
              </button>
            </div>
          </div>

        </div>

          {/* Customer Table */}
          <div className="bg-white rounded-xl border border-gray-200">
            {/* Tabs */}
            <div className="border-b border-gray-200 px-6">
              <div className="flex items-center space-x-8">
                {tabs.map((tab) => (
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
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Address
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      No Property
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categories
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Payment Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Last Contacted
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCustomers.map((customer) => (
                    <tr key={customer.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                            <img 
                              src={customer.avatar} 
                              alt={customer.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-sm font-medium text-gray-900">
                            {customer.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{customer.address}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{customer.email}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{customer.noProperty}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{customer.categories}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPaymentStatusStyles(customer.paymentStatus)}`}>
                          {customer.paymentStatus}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{customer.lastContacted}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="relative">
                          <button
                            onClick={() => toggleDropdown(customer.id)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <MoreVertical className="w-4 h-4 text-gray-600" />
                          </button>
                          
                          {/* Dropdown Menu */}
                          {selectedCustomer === customer.id && (
                            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                              <button
                                onClick={() => handleViewDetails(customer.id)}
                                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2 border-b border-gray-100"
                              >
                                <Eye className="w-4 h-4" />
                                <span>View Details</span>
                              </button>
                              <button
                                onClick={() => handleSendMessage(customer.id)}
                                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
                              >
                                <MessageSquare className="w-4 h-4" />
                                <span>Send Message</span>
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
    </div>
  );
};

export default ActiveCustomersPage;