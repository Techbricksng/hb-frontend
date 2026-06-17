import { Bell, ChevronDown, Search } from "lucide-react";
import dp from "../../../assets/1.png";

const CustomerHeader = () => {
  return (
   
<header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
          
          <div className="flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search here..."
                className="pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-80"
              />
            </div>

            {/* Language Selector */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">🇺🇸</span>
              </div>
              <span className="text-sm text-gray-700">Eng (US)</span>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">1</span>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                <img src={dp} alt="User" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">Esther</span>
                <span className="text-xs text-gray-500">User</span>
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

  )
}

export default CustomerHeader;
