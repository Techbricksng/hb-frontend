import { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  Filter,
  MoreHorizontal,
  Heart,
  TrendingUp,
  TrendingDown,
  Home,
  DollarSign,
  MapPin,
  Bed,
  Bath,
  Square
} from 'lucide-react';
import portfolio from '../../../assets/Group.png';
import CustomerHeader from './CustomerHeader';
import houses from '../../../assets/dash.png'; 
// Type definitions
type NotificationType = 'transfer' | 'payment' | 'agent';

interface Notification {
  id: number;
  type: NotificationType;
  title: string;
  description?: string;
  time: string;
  expanded: boolean;
}

interface Property {
  name: string;
  price: string;
  image: string;
}

interface HotSale {
  id: number;
  name: string;
  price: string;
  location: string;
  description: string;
  beds: number;
  baths: number;
  area: number;
  image: string;
}

interface InvestmentStat {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: 'up' | 'down';
  trendPercentage?: string;
}

const DashboardOverview = () => {
  // State with proper typing
  const [activeNotification, setActiveNotification] = useState<number | null>(null);

  // Sample data with explicit typing
  const notifications: Notification[] = [
    {
      id: 1,
      type: 'transfer',
      title: 'Property Transferred',
      time: '2 mins ago',
      expanded: false
    },
    {
      id: 2,
      type: 'payment',
      title: 'Pending Payment',
      description: 'Your invoice for "Apartment Lease Renewal" is due in 3 days.',
      time: '10 mins ago',
      expanded: false
    },
    {
      id: 3,
      type: 'agent',
      title: 'Agent Deleted',
      description: 'You have successfully removed Agent Jane Smith from your account.',
      time: '1 hour ago',
      expanded: false
    }
  ];

  const properties: Property[] = [
    { name: 'Mandragora Mansion', price: 'N50000', image: portfolio },
    { name: 'Mandragora Mansion', price: 'N50000', image:  portfolio },
    { name: 'Mandragora Mansion', price: 'N50000', image: portfolio }
  ];

  const hotSales: HotSale[] = [
    {
      id: 1,
      name: 'Rendez House Bay',
      price: 'N250,000',
      location: 'Lagos, Nigeria',
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      beds: 3,
      baths: 3,
      area: 3,
      image: houses
    },
    {
      id: 2,
      name: 'Rendez House Bay',
      price: 'N250,000',
      location: 'Lagos, Nigeria',
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      beds: 3,
      baths: 3,
      area: 3,
      image: houses
    },
    {
      id: 3,
      name: 'Rendez House Bay',
      price: 'N250,000',
      location: 'Lagos, Nigeria',
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      beds: 3,
      baths: 3,
      area: 3,
      image:  houses
    },
    {
      id: 4,
      name: 'Rendez House Bay',
      price: 'N250,000',
      location: 'Lagos, Nigeria',
      description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
      beds: 3,
      baths: 3,
      area: 3,
      image:  houses
    }
  ];

  // Typed function parameter
  const toggleNotification = (id: number) => {
    setActiveNotification(activeNotification === id ? null : id);
  };

  // Investment stats data
  const investmentStats: InvestmentStat[] = [
    {
      icon: <DollarSign className="w-4 h-4 text-orange-600" />,
      label: 'Total Investment',
      value: 'N 250,000.00 K'
    },
    {
      icon: <TrendingUp className="w-4 h-4 text-green-600" />,
      label: 'Annual Returns',
      value: 'N 250,000.00 K'
    },
    {
      icon: <DollarSign className="w-4 h-4 text-green-600" />,
      label: 'Total Money invested',
      value: 'N 30,000.00 K'
    }
  ];

  return (
    <div className="flex-1 bg-gray-50">
      {/* Top Header */}
      <CustomerHeader />

      {/* Main Content */}
      
      <div className="p-6">
        {/* Welcome Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">Hi Esther!</h2>
          <p className="text-gray-600">Explore information about your property</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">Overview</h3>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-64"
                  />
                </div>
                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Investment Card & Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Investment Card */}
              <div className="bg-black text-white rounded-xl p-6">
                <h4 className="text-sm text-gray-400 mb-2">Balance</h4>
                <h3 className="text-2xl font-bold mb-4">N52,100,652</h3>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Monthly Profit</p>
                  <p className="text-lg font-semibold">N14,225</p>
                </div>
                <div className="text-xs text-green-400 mt-2">Investment Card</div>
              </div>

              {/* Total Property */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <Home className="w-8 h-8 text-gray-400" />
                </div>
                <h4 className="text-sm text-gray-600 mb-2">Total Property</h4>
                <h3 className="text-2xl font-bold mb-2">N50m <span className="text-green-500 text-sm">+3%</span></h3>
                <p className="text-xs text-gray-500">there is 1230 property for sale today</p>
              </div>

              {/* Total Property Rents */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <Home className="w-8 h-8 text-gray-400" />
                </div>
                <h4 className="text-sm text-gray-600 mb-2">Total Property Rents</h4>
                <h3 className="text-2xl font-bold mb-2">15 <span className="text-green-500 text-sm">+5%</span></h3>
                <p className="text-xs text-gray-500">there is 135 properties for Rent today</p>
              </div>
            </div>

            {/* My Portfolio */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h4 className="text-lg font-semibold mb-4">My Portfolio</h4>
              <div className="grid grid-cols-3 gap-4">
                {properties.map((property, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                      <img src={property.image} alt={property.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h5 className="font-medium text-sm">{property.name}</h5>
                      <p className="text-gray-500 text-sm">{property.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="text-lg font-semibold mb-4">Monthly</h4>
                <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Chart Placeholder</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="text-lg font-semibold mb-4">My Portfolio</h4>
                <div className="h-40 bg-gray-50 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">Chart Placeholder</span>
                </div>
              </div>
            </div>

            
          </div>

          {/* Right Column - Notifications & Stats */}
          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">Notifications</h4>
                <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
                  See All
                  <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
                </button>
              </div>

              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className="border border-gray-200 rounded-lg p-3">
                    <div 
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleNotification(notification.id)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${notification.type === 'transfer' ? 'bg-blue-500' : notification.type === 'payment' ? 'bg-orange-500' : 'bg-green-500'}`}></div>
                        <span className="text-sm font-medium">{notification.title}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">{notification.time}</span>
                        <ChevronDown className={`w-4 w-4 text-gray-400 transition-transform ${activeNotification === notification.id ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                    {activeNotification === notification.id && notification.description && (
                      <p className="text-xs text-gray-600 mt-2 ml-5">{notification.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Investment Stats */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">Investment Stats</h4>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MoreHorizontal className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="space-y-4">
                {investmentStats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${
                      stat.label.includes('Total Investment') ? 'bg-orange-100' : 'bg-green-100'
                    } rounded-lg flex items-center justify-center`}>
                      {stat.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="font-semibold">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Properties owned */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold">Properties owned</h4>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <MoreHorizontal className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Haleway</p>
                    <p className="text-xs text-gray-500">N 2,700</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-500">+1%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium">Roma Avenue</p>
                    <p className="text-xs text-gray-500">N 2,100</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingDown className="w-4 h-4 text-red-500" />
                    <span className="text-xs text-red-500">-0.1%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hot Sales/Promotions */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 w-full lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-semibold">Hot Sales/Promotions</h4>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium flex items-center">
                  Explore all
                  <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {hotSales.map((property) => (
                  <div key={property.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative">
                      <img src={property.image} alt={property.name} className="w-full h-32 object-cover" />
                      <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm hover:bg-gray-100">
                        <Heart className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    <div className="p-3">
                      <h5 className="font-semibold text-sm mb-1">{property.name}</h5>
                      <p className="text-lg font-bold text-gray-900 mb-1">{property.price}</p>
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <MapPin className="w-3 h-3 mr-1" />
                        {property.location}
                      </div>
                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">{property.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <Bed className="w-3 h-3 mr-1" />
                            {property.beds}
                          </div>
                          <div className="flex items-center">
                            <Bath className="w-3 h-3 mr-1" />
                            {property.baths}
                          </div>
                          <div className="flex items-center">
                            <Square className="w-3 h-3 mr-1" />
                            {property.area}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;