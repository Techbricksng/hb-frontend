import { useState } from 'react';
import { 
  Search, 
  Filter,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp
} from 'lucide-react';


import CustomerHeader from './CustomerHeader';

// Type definitions
type NotificationCategory = 'all' | 'property' | 'realtor' | 'transaction';

interface NotificationItem {
  id: number;
  type: NotificationCategory;
  title: string;
  description?: string;
  time: string;
  expanded: boolean;
  isCollapsed?: boolean;
}

const NotificationPage = () => {
  const [activeCategory, setActiveCategory] = useState<NotificationCategory>('all');
  const [expandedNotifications, setExpandedNotifications] = useState<Set<number>>(new Set([2, 3])); // Pre-expanded items
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // Sample notifications data matching the image
  const notifications: NotificationItem[] = [
    {
      id: 1,
      type: 'property',
      title: 'Property Transferred',
      time: '2 mins ago',
      expanded: false,
      isCollapsed: true
    },
    {
      id: 2,
      type: 'transaction',
      title: 'Pending Payment',
      description: 'Your invoice for "Apartment Lease Renewal" is due in 3 days.',
      time: '10 mins ago',
      expanded: true
    },
    {
      id: 3,
      type: 'realtor',
      title: 'Realtor Deleted',
      description: 'You have successfully removed Realtor Jane Smith from your account.',
      time: '1 hour ago',
      expanded: true
    }
  ];

  const categories = [
    { key: 'all' as NotificationCategory, label: 'All Notification' },
    { key: 'property' as NotificationCategory, label: 'Property Updates' },
    { key: 'realtor' as NotificationCategory, label: 'Realtor Activities' },
    { key: 'transaction' as NotificationCategory, label: 'Transaction' }
  ];

  const toggleNotificationExpansion = (id: number) => {
    const newExpanded = new Set(expandedNotifications);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedNotifications(newExpanded);
  };

  const filteredNotifications = notifications.filter(notification => {
    const matchesCategory = activeCategory === 'all' || notification.type === activeCategory;
    const matchesSearch = notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (notification.description && notification.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Filter options for the dropdown
  const filterOptions = [
    { id: 'completed', label: 'Completed Transaction', icon: '✓' },
    { id: 'pending', label: 'Pending Transaction', icon: '○' },
    { id: 'failed', label: 'Failed Transactions', icon: '✗' }
  ];

  return (
    <div className="flex-1 bg-gray-50 min-h-screen" onClick={() => setShowFilterDropdown(false)}>
      {/* Top Header */}
      <CustomerHeader />

      {/* Main Content */}
      <div className="p-6" onClick={(e) => e.stopPropagation()}>
        {/* Page Header with Search and Filter */}
       <div className="flex flex-col md:flex-row items-center justify-between mb-6 relative">
  {/* Left: Title */}
  <h2 className="text-2xl font-bold text-gray-900 order-1 md:order-1 self-start md:self-auto">
    Notification
  </h2>

  {/* Center: Search */}
  <div className="relative order-3 md:order-2 w-full md:w-auto mt-3 md:mt-0 flex justify-center">
    {/* Search Icon */}
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

    {/* Search Input */}
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search here..."
      className="pl-12 pr-12 py-3 border border-gray-300 rounded-full text-sm 
                 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 
                 w-full md:w-80 bg-white"
    />

    {/* Filter Icon */}
    <SlidersHorizontal
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 
                 w-5 h-5 cursor-pointer hover:text-gray-600"
      onClick={() => setShowFilterDropdown(!showFilterDropdown)}
    />

    {/* Dropdown */}
    {showFilterDropdown && (
      <div className="absolute top-full mt-2 right-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
        {/* ...dropdown content */}
      </div>
    )}
  </div>

  {/* Right: Mark all as read */}
  <button className="text-sm text-gray-600 hover:text-gray-800 order-2 md:order-3 self-end md:self-auto mt-3 md:mt-0">
    Mark all as read
  </button>
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

        {/* Notifications List */}
        <div className="space-y-0">
          {filteredNotifications.length === 0 ? (
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
              <p className="text-gray-500">No notifications found</p>
            </div>
          ) : (
            filteredNotifications.map((notification, index) => (
              <div 
                key={notification.id} 
                className={`bg-white border-l border-r border-gray-200 px-6 py-4 ${
                  index === 0 ? 'border-t rounded-t-lg' : ''
                } ${
                  index === filteredNotifications.length - 1 ? 'border-b rounded-b-lg' : 'border-b'
                } ${
                  notification.isCollapsed ? 'bg-gray-100' : 'bg-white'
                }`}
              >
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleNotificationExpansion(notification.id)}
                >
                  <div className="flex items-center space-x-3">
                    {expandedNotifications.has(notification.id) ? 
                      <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" /> :
                      <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    }
                    <span className="text-sm font-medium text-gray-900">
                      {notification.title}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 ml-4">{notification.time}</span>
                </div>
                
                {expandedNotifications.has(notification.id) && notification.description && (
                  <div className="mt-3 ml-7">
                    <p className="text-sm text-gray-600 leading-relaxed">{notification.description}</p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;