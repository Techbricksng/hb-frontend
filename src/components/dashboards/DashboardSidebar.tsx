import { useState } from 'react'; 
import { 
  LayoutDashboard,
  Home, 
  Users,  
  MessageSquare, 
  LogOut,
  ChevronDown,
  Building,
  FileText,
  DollarSign,
  Star,
  Wrench
} from 'lucide-react';
import { DashboardSidebarProps, MenuItem } from '../../types/menu'; 
import logo from '../../assets/logo.png'; 
import logo1 from '../../assets/logo1.png'; 
import { Link, useLocation } from "react-router-dom";

// Import custom icons
import overview from '../../assets/sidebar/overview.png';
import notifications from '../../assets/sidebar/notification.png';
import property from '../../assets/sidebar/properties.png';
import realtor from '../../assets/sidebar/realtor.png';
import transactions from '../../assets/sidebar/transaction.png';
import settings from '../../assets/sidebar/settings.png';
import help from '../../assets/sidebar/help.png';
import messages from '../../assets/sidebar/messages.png';
import document from '../../assets/sidebar/document.png';

const DashboardSidebar = ({ userRole = 'customer', onMenuClick }: DashboardSidebarProps) => {
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const location = useLocation();

  
  const lucideIcon = (Icon: any) => () => (
    <Icon className="w-5 h-5" />
  );

  // Define menu items for each role with consistent structure
  const roleMenus: Record<string, MenuItem[]> = {
    customer: [
      { name: 'Overview', icon: () => <img src={overview} alt="Overview" className="w-5 h-5" />, path: '/customer/dashboard' },
      { name: 'Notifications', icon: () => <img src={notifications} alt="Notifications" className="w-5 h-5" />, path: '/customer/notifications' },
      { name: 'My Property', icon: () => <img src={property} alt="My Property" className="w-5 h-5" />, path: '/customer/properties' },
      { name: 'My Realtor', icon: () => <img src={realtor} alt="My Realtor" className="w-5 h-5" />, path: '/customer/my-realtor' },
      { name: 'My Transactions', icon: () => <img src={transactions} alt="My Transactions" className="w-5 h-5" />, path: '/customer/transactions' },
      { name: 'Messages', icon: () => <img src={messages} alt="Messages" className="w-5 h-5" />, path: '/customer/messages' },
      { name: 'Settings', icon: () => <img src={settings} alt="Settings" className="w-5 h-5" />, path: '/customer/settings' },
      { name: 'Help & Support', icon: () => <img src={help} alt="Help & Support" className="w-5 h-5" />, path: '/customer/help' },
    ],
    agent: [
      { name: 'Overview', icon: () => <img src={overview} alt="Overview" className="w-5 h-5" />, path: '/agent/dashboard' },
      { name: 'Manage Property', icon: () => <img src={property} alt="Manage Property" className="w-5 h-5" />, path: '/agent/properties' },
      { name: 'Document/Compliance', icon: () => <img src={document} alt="Documents" className="w-5 h-5" />, path: '/agent/documents' },
      { name: 'Revenue', icon: () => <img src={transactions} alt="Revenue" className="w-5 h-5" />, path: '/agent/revenue' },
      { name: 'Messages', icon: () => <img src={messages} alt="Messages" className="w-5 h-5" />, path: '/agent/messages' },
      { name: 'Support & Resources', icon: () => <img src={help} alt="Support" className="w-5 h-5" />, path: '/agent/support' },
      { name: 'Customer Reviews', icon: () => <img src={document} alt="Reviews" className="w-5 h-5" />, path: '/agent/reviews' },
    ],
    admin: [
      { name: 'Overview', icon: lucideIcon(LayoutDashboard), path: '/admin/dashboard' },
      { name: 'Manage Property', icon: lucideIcon(Home), path: '/admin/properties' },
      { name: 'Manage Companies', icon: lucideIcon(Building), path: '/admin/companies' },
      { name: 'Manage Realtor', icon: lucideIcon(Users), path: '/admin/realtors' },
      { name: 'Manage Customers', icon: lucideIcon(Users), path: '/admin/customers' },
      { name: 'Reports & Analytics', icon: lucideIcon(FileText), path: '/admin/reports' },
      { name: 'Messages', icon: lucideIcon(MessageSquare), path: '/admin/messages' },
      { name: 'Reviews', icon: lucideIcon(Star), path: '/admin/reviews' },
    ],
    company: [
      { name: 'Overview', icon: lucideIcon(LayoutDashboard), path: '/company-dashboard' },
      { name: 'Manage Property', icon: lucideIcon(Home), path: '/company/properties' },
      { name: 'Document/Compliance', icon: lucideIcon(FileText), path: '/company/documents' },
      { name: 'Revenue', icon: lucideIcon(DollarSign), path: '/company/revenue' },
      { name: 'Messages', icon: lucideIcon(MessageSquare), path: '/company/messages' },
      { name: 'Support & Resources', icon: lucideIcon(Wrench), path: '/company/support' },
      { name: 'Customer Reviews', icon: lucideIcon(Star), path: '/company/reviews' },
    ]
  };

  const currentMenu = roleMenus[userRole] || roleMenus.customer;

  // Determine active item
  const activeItem = currentMenu.find(item => location.pathname.startsWith(item.path || ''))?.name || 'Overview';

  const handleMenuClick = (itemName: string) => {
    if (onMenuClick) {
      onMenuClick(itemName);
    }
  };

  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col h-screen">
      {/* Logo */}
      <img src={logo} alt="HouseBank Logo" className="h-17 w-full object-contain p-4" />

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <ul className="space-y-1">
          {currentMenu.map((item: MenuItem) => {
            const Icon = item.icon;
            const isActive = activeItem === item.name;

            return (
              <li key={item.name}>
                <Link
                  to={item.path || '#'}
                  onClick={() => handleMenuClick(item.name)}
                  className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon />
                  <span className="ml-3">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-gray-200 space-y-4">
        {/* Log Out */}
        <button 
          onClick={() => handleMenuClick('Log Out')}
          className="w-full flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors"
        >
          <LogOut className="mr-3 h-5 w-5 text-gray-400" />
          Log Out
        </button>

        {/* Dabang Pro Card */}
        <div className="bg-gradient-to-br from-gray-900 to-green-800 rounded-xl p-4 text-white">
          <img src={logo1} alt="HouseBank Logo" className="h-17 w-full object-contain p-4" />
          <h3 className="text-center font-semibold text-lg mb-2">Dabang Pro</h3>
          <p className="text-center text-sm text-white text-opacity-90 leading-tight mb-4">
            Get access to all features on telumbas
          </p>
          <button className="w-full bg-white text-gray-900 font-medium py-2 px-4 rounded-lg text-sm hover:bg-gray-100 transition-colors">
            Get Pro
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
