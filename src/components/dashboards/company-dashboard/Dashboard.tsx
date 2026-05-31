import { useState } from 'react';
import { TrendingDown, TrendingUp } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

interface MetricCard {
  title: string;
  value: string;
  change: string;
  isIncrease: boolean;
  color: string;
}

interface Request {
  taskName: string;
  unitNumber: string;
  status: 'Pending' | 'Completed';
  payment: number;
}

const CompanyOverview = () => {
  const [propertyReviewFilter, setPropertyReviewFilter] = useState('Monthly');
  const [revenueFilter, setRevenueFilter] = useState('This Month');

  // Metrics data
  const metrics: MetricCard[] = [
    {
      title: 'Total Agents',
      value: '128',
      change: '+3.5%',
      isIncrease: false,
      color: 'bg-blue-600'
    },
    {
      title: 'No of Agents',
      value: '12',
      change: '+3.5%',
      isIncrease: false,
      color: 'bg-orange-600'
    },
    {
      title: 'No of Clients',
      value: '24',
      change: '+3.5%',
      isIncrease: false,
      color: 'bg-red-600'
    },
    {
      title: 'Revenue',
      value: 'N3,250,000',
      change: '+3.5%',
      isIncrease: false,
      color: 'bg-green-600'
    }
  ];

  // Requests data
  const requests: Request[] = [
    {
      taskName: 'Complaince 123',
      unitNumber: '01-01/CP3420',
      status: 'Pending',
      payment: 1
    }
  ];

  // Revenue overview data - sample monthly data
  const revenueData = [
    { month: 'Jan', value: 20 },
    { month: 'Feb', value: 45 },
    { month: 'Mar', value: 35 },
    { month: 'Apr', value: 50 },
    { month: 'May', value: 30 },
    { month: 'Jun', value: 40 },
    { month: 'Jul', value: 25 },
    { month: 'Aug', value: 55 },
    { month: 'Sep', value: 45 },
    { month: 'Oct', value: 35 },
    { month: 'Nov', value: 30 },
    { month: 'Dec', value: 40 }
  ];

  return (
    <div className="flex-1 bg-gray-50">
      {/* Top Header */}
      <CustomerHeader />

      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Greeting and Button */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Good Morning</h1>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 text-sm font-medium">
              Add Negotiator
            </button>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-3 h-3 rounded-full ${metric.color}`}></div>
                </div>
                <h3 className="text-sm text-gray-600 mb-2">{metric.title}</h3>
                <div className="flex items-baseline justify-between">
                  <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                </div>
                <div className="flex items-center mt-2 text-sm">
                  {metric.isIncrease ? (
                    <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                  )}
                  <span className={metric.isIncrease ? 'text-green-600' : 'text-red-600'}>
                    {metric.change}
                  </span>
                  <span className="text-gray-500 ml-2">vs last month</span>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Property Payment */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Property Payment</h3>
                <span className="text-xs text-gray-500">01, Jan - 31, May 2025</span>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Income</span>
                  <span className="text-lg font-bold text-gray-900">N50, 000,000</span>
                </div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                  <span className="text-green-600">+3.5%</span>
                  <span className="text-gray-500 ml-2">Increase</span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-sm text-gray-600">Total Overdue</span>
                  <span className="text-lg font-bold text-gray-900">N21, 000 000</span>
                </div>
                <div className="flex items-center text-sm">
                  <TrendingDown className="w-4 h-4 text-red-600 mr-1" />
                  <span className="text-red-600">+3.5%</span>
                  <span className="text-gray-500 ml-2">Decrease</span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-sm text-gray-600">Maintenance Cost</span>
                  <span className="text-lg font-bold text-gray-900">N3, 000 000</span>
                </div>
                <div className="flex items-center text-sm">
                  <TrendingUp className="w-4 h-4 text-green-600 mr-1" />
                  <span className="text-green-600">+3.5%</span>
                  <span className="text-gray-500 ml-2">Increase</span>
                </div>
              </div>
            </div>

            {/* Property Valuation */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Property Valuation</h3>
                <span className="text-xs text-gray-500">Lekki Lagos Nigeria</span>
              </div>

              {/* Line Chart */}
              <div className="relative h-48 mb-4">
                <svg className="w-full h-full" viewBox="0 0 300 150">
                  {/* Grid lines */}
                  <line x1="0" y1="30" x2="300" y2="30" stroke="#f3f4f6" strokeWidth="1"/>
                  <line x1="0" y1="60" x2="300" y2="60" stroke="#f3f4f6" strokeWidth="1"/>
                  <line x1="0" y1="90" x2="300" y2="90" stroke="#f3f4f6" strokeWidth="1"/>
                  <line x1="0" y1="120" x2="300" y2="120" stroke="#f3f4f6" strokeWidth="1"/>
                  
                  {/* Line graph */}
                  <polyline
                    points="0,100 50,80 100,70 150,60 200,50 250,45 300,40"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                  />
                  
                  {/* Data points */}
                  <circle cx="0" cy="100" r="3" fill="#22c55e"/>
                  <circle cx="50" cy="80" r="3" fill="#22c55e"/>
                  <circle cx="100" cy="70" r="3" fill="#22c55e"/>
                  <circle cx="150" cy="60" r="3" fill="#22c55e"/>
                  <circle cx="200" cy="50" r="3" fill="#22c55e"/>
                  <circle cx="250" cy="45" r="3" fill="#22c55e"/>
                  <circle cx="300" cy="40" r="3" fill="#22c55e"/>
                </svg>
                
                {/* Trend indicator */}
                <div className="absolute top-2 right-2 bg-gray-800 text-white px-3 py-1 rounded-full text-xs">
                  Uptrend
                </div>
              </div>

              {/* Month labels */}
              <div className="flex justify-between text-xs text-gray-500">
                <span>Dec</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
              </div>
            </div>

            {/* Properties Review */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Properties Review</h3>
                <select
                  value={propertyReviewFilter}
                  onChange={(e) => setPropertyReviewFilter(e.target.value)}
                  className="text-xs border border-gray-300 rounded px-2 py-1"
                >
                  <option>Monthly</option>
                  <option>Weekly</option>
                  <option>Yearly</option>
                </select>
              </div>

              {/* Donut Chart */}
              <div className="flex items-center justify-center mb-4">
                <div className="relative w-40 h-40">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Blue segment (30%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="20"
                      strokeDasharray="75.4 251.2"
                      strokeDashoffset="0"
                      transform="rotate(-90 50 50)"
                    />
                    {/* Orange segment (23%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="20"
                      strokeDasharray="57.8 251.2"
                      strokeDashoffset="-75.4"
                      transform="rotate(-90 50 50)"
                    />
                    {/* Green segment (47%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#22c55e"
                      strokeWidth="20"
                      strokeDasharray="118 251.2"
                      strokeDashoffset="-133.2"
                      transform="rotate(-90 50 50)"
                    />
                  </svg>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">Rent Property</span>
                  </div>
                  <span className="font-medium text-gray-900">30%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">Buy Property</span>
                  </div>
                  <span className="font-medium text-gray-900">23%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-gray-700">Sell</span>
                  </div>
                  <span className="font-medium text-gray-900">47%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Overview and Requests */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Overview */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Revenue Overview</h3>
                <select
                  value={revenueFilter}
                  onChange={(e) => setRevenueFilter(e.target.value)}
                  className="text-xs border border-gray-300 rounded px-2 py-1"
                >
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>This Year</option>
                </select>
              </div>

              {/* Bar Chart */}
              <div className="h-48 flex items-end space-x-3">
                {revenueData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-green-200 rounded-t"
                      style={{ height: `${data.value}%` }}
                    >
                      <div
                        className="w-full bg-green-500 rounded-t"
                        style={{ height: '60%' }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-600 mt-2">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requests */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Requests</h3>
                <button className="text-sm text-gray-600 hover:text-gray-900">This Month</button>
              </div>

              {/* Tabs */}
              <div className="flex items-center space-x-6 border-b border-gray-200 mb-4">
                <button className="pb-3 text-sm font-medium text-gray-900 border-b-2 border-gray-900">
                  Maintenance
                </button>
                <button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Complaint
                </button>
                <button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Task
                </button>
              </div>

              {/* Requests Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-gray-200">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Task Name</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit Number</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requests.map((request, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="px-4 py-4 text-sm text-gray-900">{request.taskName}</td>
                        <td className="px-4 py-4 text-sm text-gray-900">{request.unitNumber}</td>
                        <td className="px-4 py-4">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            {request.status}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-900">{request.payment}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;