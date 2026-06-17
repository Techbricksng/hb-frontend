import { useState } from 'react';
import { Search, Filter, MoreHorizontal, Eye, Users, Heart, Plus } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// Import property images - replace with your actual image imports
import property1 from '../../../assets/property-1.png';
import property2 from '../../../assets/property-2.png';
import property3 from '../../../assets/property-3.png';
import property4 from '../../../assets/property-4.png';
import property5 from '../../../assets/property-5.png';
import property6 from '../../../assets/property-6.png';

interface Property {
  id: string;
  image: string;
  name: string;
  address: string;
  price: string;
  dateListed: string;
  category: 'Buy' | 'Rent';
  views: number;
  likes: number;
  bookmarks: number;
  status: 'Applied' | 'Pending' | 'Available' | 'Sold';
}

type TabType = 'All Property' | 'Buy' | 'Rent';

const AgentPropertyManagement = () => {
  const [activeTab, setActiveTab] = useState<TabType>('All Property');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample property data matching the image
  const properties: Property[] = [
    {
      id: '1',
      image: property1,
      name: 'Luxury Apartment',
      address: '2975 Westheimer Rd, Santa Ana, Illinois, 85486',
      price: '$948.55',
      dateListed: '10/26/12',
      category: 'Buy',
      views: 89,
      likes: 12,
      bookmarks: 103,
      status: 'Applied'
    },
    {
      id: '2',
      image: property2,
      name: 'Luxury Apartment',
      address: '3118 Thorndale Cir, Syracuse, Connecticut, 35624',
      price: '$303.87',
      dateListed: '10/20/12',
      category: 'Rent',
      views: 90,
      likes: 12,
      bookmarks: 16,
      status: 'Pending'
    },
    {
      id: '3',
      image: property3,
      name: 'Luxury Apartment',
      address: '4517 Washington Ave, Manchester, Kentucky, 39495',
      price: '$356.55',
      dateListed: '8/15/17',
      category: 'Buy',
      views: 89,
      likes: 12,
      bookmarks: 10,
      status: 'Available'
    },
    {
      id: '4',
      image: property4,
      name: 'Luxury Apartment',
      address: '4517 Washington Ave, Manchester, Kentucky, 39495',
      price: '$303.87',
      dateListed: '1/15/12',
      category: 'Rent',
      views: 89,
      likes: 12,
      bookmarks: 10,
      status: 'Available'
    },
    {
      id: '5',
      image: property5,
      name: 'Luxury Apartment',
      address: '2715 Ash Dr, San Jose, South Dakota, 83475',
      price: '$356.55',
      dateListed: '5/27/15',
      category: 'Buy',
      views: 89,
      likes: 12,
      bookmarks: 23,
      status: 'Sold'
    },
    {
      id: '6',
      image: property6,
      name: 'Factory stone',
      address: '2715 Ash Dr, San Jose, South Dakota, 83475',
      price: '$213.78',
      dateListed: '6/27/15',
      category: 'Rent',
      views: 89,
      likes: 12,
      bookmarks: 12,
      status: 'Pending'
    },
    {
      id: '7',
      image: '/api/placeholder/60/60',
      name: 'Factory stone',
      address: '2715 Ash Dr, San Jose, South Dakota, 83475',
      price: '$395.55',
      dateListed: '9/3/12',
      category: 'Rent',
      views: 89,
      likes: 12,
      bookmarks: 10,
      status: 'Available'
    }
  ];

  const tabs: TabType[] = ['All Property', 'Buy', 'Rent'];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Applied':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-orange-100 text-orange-800';
      case 'Available':
        return 'bg-green-100 text-green-800';
      case 'Sold':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.address.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === 'All Property' || property.category === activeTab;
    
    return matchesSearch && matchesTab;
  });

  return (
    <div className="flex-1 bg-gray-50">
      {/* Top Header */}
      <CustomerHeader />

      {/* Main Content */}
      <div className="p-6">
        <div className="bg-white rounded-xl border border-gray-200">
          {/* Page Header */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-semibold text-gray-900">Property Management</h1>
              
              <div className="flex items-center space-x-4">
                {/* Search Section */}
                <div className="flex items-center space-x-4 bg-white border border-gray-200 rounded-full px-3 py-2">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search here..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-sm text-gray-900 placeholder-gray-500"
                  />
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Filter className="w-4 h-4 text-gray-400" />
                  </button>
                </div>

                {/* List Property Button */}
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>List Property</span>
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center space-x-28">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
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

          {/* Property Table */}
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
                    Price
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date Listed
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Performance
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
                {filteredProperties.map((property) => (
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
                      <span className="text-sm font-medium text-gray-900">
                        {property.price}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">
                        {property.dateListed}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">
                        {property.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{property.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{property.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{property.bookmarks}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(property.status)}`}>
                        {property.status}
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

export default AgentPropertyManagement;