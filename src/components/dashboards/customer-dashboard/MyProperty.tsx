import { useState } from 'react';
import { 
  Search, 
  Filter,
  SlidersHorizontal,
  MoreVertical,
  Heart
} from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// Type definitions
type PropertyCategory = 'all' | 'buy' | 'rent' | 'investment';
type PropertyStatus = 'owned' | 'active-rent' | 'active-investment' | 'inactive-investment' | 'in-progress' | 'rent-expired';

interface Property {
  id: number;
  name: string;
  type: string;
  address: string;
  company: string;
  assignRealtor: string;
  status: PropertyStatus;
  category: PropertyCategory;
  image: string;
}

const CustomMyPropertyPage = () => {
  const [activeCategory, setActiveCategory] = useState<PropertyCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [showActionDropdown, setShowActionDropdown] = useState<number | null>(null);

  // Sample property data matching the image
  const properties: Property[] = [
    {
      id: 1,
      name: 'Luxury Apartment',
      type: 'Luxury Apartment',
      address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
      company: 'Efab',
      assignRealtor: 'Wade Warren',
      status: 'owned',
      category: 'buy',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=100&h=80&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'Luxury Apartment',
      type: 'Luxury Apartment',
      address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
      company: 'Bilaad',
      assignRealtor: 'Cameron Williamson',
      status: 'active-rent',
      category: 'rent',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=100&h=80&fit=crop&crop=center'
    },
    {
      id: 3,
      name: 'Luxury Apartment',
      type: 'Luxury Apartment',
      address: '4517 Washington Ave. Manchester, Kentucky 39495',
      company: 'Cosgrowth',
      assignRealtor: 'Brooklyn Simmons',
      status: 'active-investment',
      category: 'investment',
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=100&h=80&fit=crop&crop=center'
    },
    {
      id: 4,
      name: 'Luxury Apartment',
      type: 'Luxury Apartment',
      address: '4517 Washington Ave. Manchester, Kentucky 39495',
      company: 'eBay',
      assignRealtor: 'Brooklyn Simmons',
      status: 'inactive-investment',
      category: 'investment',
      image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=100&h=80&fit=crop&crop=center'
    },
    {
      id: 5,
      name: 'Luxury Apartment',
      type: 'Luxury Apartment',
      address: '2715 Ash Dr. San Jose, South Dakota 83475',
      company: 'Cosgrowth',
      assignRealtor: 'Guy Hawkins',
      status: 'in-progress',
      category: 'buy',
      image: 'https://images.unsplash.com/photo-1567496898669-ee935f5317a9?w=100&h=80&fit=crop&crop=center'
    },
    {
      id: 6,
      name: 'Factory store',
      type: 'Factory store',
      address: '2715 Ash Dr. San Jose, South Dakota 83475',
      company: 'Efab',
      assignRealtor: 'Robert Fox',
      status: 'rent-expired',
      category: 'rent',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=80&fit=crop&crop=center'
    }
  ];

  const categories = [
    { key: 'all' as PropertyCategory, label: 'All Properties' },
    { key: 'buy' as PropertyCategory, label: 'Buy' },
    { key: 'rent' as PropertyCategory, label: 'Rent' },
    { key: 'investment' as PropertyCategory, label: 'Investment' }
  ];

  const filterOptions = [
    { id: 'owned', label: 'Owned Properties' },
    { id: 'active', label: 'Active Properties' },
    { id: 'inactive', label: 'Inactive Properties' }
  ];

  const actionOptions = [
    { id: 'view', label: 'View Details' },
    { id: 'download', label: 'Download Document' },
    { id: 'track', label: 'Track Progress' }
  ];

  const getStatusBadge = (status: PropertyStatus) => {
    const statusConfig = {
      'owned': { label: 'Owned', className: 'bg-green-100 text-green-700 border-green-200' },
      'active-rent': { label: 'Active Rent', className: 'bg-green-100 text-green-700 border-green-200' },
      'active-investment': { label: 'Active Investment', className: 'bg-green-100 text-green-700 border-green-200' },
      'inactive-investment': { label: 'Inactive Investment', className: 'bg-red-100 text-red-700 border-red-200' },
      'in-progress': { label: 'InProgress', className: 'bg-orange-100 text-orange-700 border-orange-200' },
      'rent-expired': { label: 'Rent Expired', className: 'bg-red-100 text-red-700 border-red-200' }
    };

    const config = statusConfig[status];
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${config.className}`}>
        {config.label}
      </span>
    );
  };

  const getCategoryLabel = (category: PropertyCategory) => {
    const categoryConfig = {
      'all': 'All',
      'buy': 'Buy',
      'rent': 'Rent',
      'investment': 'Invest'
    };
    return categoryConfig[category];
  };

  const filteredProperties = properties.filter(property => {
    const matchesCategory = activeCategory === 'all' || property.category === activeCategory;
    const matchesSearch = property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-1 bg-gray-50 min-h-screen" onClick={() => {
      setShowFilterDropdown(false);
      setShowActionDropdown(null);
    }}>
      {/* Top Header */}
      <CustomerHeader />

      {/* Main Content */}
      <div className="p-6" onClick={(e) => e.stopPropagation()}>
        {/* Page Header */}
       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
  {/* Left Section */}
  <div className="flex-1">
    <h2 className="text-2xl font-bold text-gray-900">Property</h2>
    <p className="text-sm text-gray-500 mt-1">Total No of Properties &gt; 12</p>
  </div>

  {/* Center Section (Search) */}
  <div className="flex-1 flex justify-center order-2 md:order-none">
    <div className="relative w-full max-w-md">
      {/* Search Icon */}
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search here..."
        className="pl-12 pr-12 py-3 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 w-full bg-white"
      />

      {/* Filter Icon */}
      <SlidersHorizontal 
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 cursor-pointer hover:text-gray-600"
        onClick={(e) => {
          e.stopPropagation();
          setShowFilterDropdown(!showFilterDropdown);
        }}
      />

      {/* Filter Dropdown */}
      {showFilterDropdown && (
        <div className="absolute top-full mt-2 right-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <div className="p-3">
            <div className="text-xs font-medium text-gray-500 mb-3 uppercase tracking-wide">
              Property Filter
            </div>
            <div className="space-y-2">
              {filterOptions.map((option) => (
                <div
                  key={option.id}
                  className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer"
                  onClick={() => {
                    setShowFilterDropdown(false);
                  }}
                >
                  <div className="w-4 h-4 border border-gray-300 rounded flex items-center justify-center bg-white">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-700">{option.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  </div>

  {/* Right Section (Wishlist Button) */}
  <div className="flex-1 flex justify-end">
    <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2.5 rounded-lg hover:bg-purple-700 transition-colors">
      <Heart className="w-4 h-4" />
      <span className="text-sm font-medium">Wishlist</span>
    </button>
  </div>
</div>


        {/* Category Tabs */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <div className="flex space-x-8">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`pb-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeCategory === category.key
                      ? 'border-green-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Properties Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="grid gap-4 text-sm font-medium text-gray-600" style={{ gridTemplateColumns: '2fr 3fr 1.5fr 2fr 1.5fr 1fr 1fr' }}>
              <div>Property</div>
              <div>Address</div>
              <div>Company</div>
              <div>Assign Realtor</div>
              <div>Status</div>
              <div>Category</div>
              <div>Action</div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {filteredProperties.length === 0 ? (
              <div className="px-6 py-8 text-center text-gray-500">
                No properties found
              </div>
            ) : (
              filteredProperties.map((property) => (
                <div key={property.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="grid gap-4 items-center" style={{ gridTemplateColumns: '2fr 3fr 1.5fr 2fr 1.5fr 1fr 1fr' }}>
                                {/* Property */}
                <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                    src={property.image} 
                    alt={property.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0OCA0OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9IiNmM2Y0ZjYiIHJ4PSI4Ii8+PHBhdGggZD0iTTE2IDEyaDEydjI0SDE2VjEyeiIgZmlsbD0iI2Q5ZGNlMSIvPjwvc3ZnPg==';
                    }}
                    />
                </div>
                <div className="min-w-0">
                    <a 
                    href={`/property-detail/${property.id}`} 
                    className="text-sm font-medium text-blue-600 hover:underline truncate"
                    >
                    {property.name}
                    </a>
                </div>
                </div>


                    {/* Address */}
                    <div className="text-sm text-gray-600 min-w-0">
                      <div className="truncate">{property.address}</div>
                    </div>

                    {/* Company */}
                    <div className="text-sm text-gray-900">{property.company}</div>

                    {/* Assign Realtor */}
                    <div className="text-sm text-gray-600">{property.assignRealtor}</div>

                    {/* Status */}
                    <div className="flex justify-start">
                      {getStatusBadge(property.status)}
                    </div>

                    {/* Category */}
                    <div className="text-sm text-gray-900">{getCategoryLabel(property.category)}</div>

                    {/* Action */}
                    <div className="relative">
                      <button 
                        className="p-1 hover:bg-gray-100 rounded"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowActionDropdown(showActionDropdown === property.id ? null : property.id);
                        }}
                      >
                        <MoreVertical className="w-4 h-4 text-gray-600" />
                      </button>
                      
                      {/* Action Dropdown */}
                      {showActionDropdown === property.id && (
                        <div className="absolute top-full mt-1 right-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                          <div className="py-2">
                            {actionOptions.map((option) => (
                              <button
                                key={option.id}
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                                onClick={() => {
                                  setShowActionDropdown(null);
                                  // Handle action here
                                }}
                              >
                                {option.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomMyPropertyPage;