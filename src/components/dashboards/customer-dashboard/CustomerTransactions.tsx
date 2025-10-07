import { useState } from 'react';
import { Search, Filter, MoreHorizontal, ChevronDown, Building, CheckCircle, Clock, X, Calendar } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

interface Transaction {
  refId: string;
  transactionDate: string;
  from: string;
  category: string;
  company: string;
  amountPaid: string;
  balance: string;
  status: 'Successful' | 'Pending' | 'Failed';
  paymentMethod: string;
}

type FilterCategory = 'Company' | 'Successful Transaction' | 'Pending Transaction' | 'Failed Transactions' | 'Date';
type TransactionTab = 'Recent Transaction' | 'Buy' | 'Rent' | 'Invest';

const TransactionPage = () => {
  const [activeTab, setActiveTab] = useState<TransactionTab>('Recent Transaction');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<FilterCategory[]>([]);

  // Sample transaction data
  const transactions: Transaction[] = [
    {
      refId: '#456789356',
      transactionDate: '9/18/10',
      from: 'Wise - 5466xxxx',
      category: 'Buy',
      company: 'Efab',
      amountPaid: '$351.02',
      balance: '-',
      status: 'Successful',
      paymentMethod: 'Wise'
    },
    {
      refId: '#456789356',
      transactionDate: '5/19/12',
      from: 'Wise - 5466xxxx',
      category: 'Buy',
      company: 'Efab',
      amountPaid: '$450.54',
      balance: '-',
      status: 'Successful',
      paymentMethod: 'Wise'
    },
    {
      refId: '#456789356',
      transactionDate: '5/19/12',
      from: 'First Bank -5566xxxx',
      category: 'Rent',
      company: 'Efab',
      amountPaid: '$379.95',
      balance: '$361.68',
      status: 'Pending',
      paymentMethod: 'First Bank'
    },
    {
      refId: '#456789356',
      transactionDate: '12/4/17',
      from: 'Paypal -3455xxxx',
      category: 'Invest',
      company: 'CeegsWorth',
      amountPaid: '$560.64',
      balance: '$1026.23',
      status: 'Failed',
      paymentMethod: 'Paypal'
    },
    {
      refId: '#456789356',
      transactionDate: '2/18/12',
      from: 'Wise -5566xxxx',
      category: 'Buy',
      company: 'Efab',
      amountPaid: '$560.54',
      balance: '-',
      status: 'Successful',
      paymentMethod: 'Wise'
    },
    {
      refId: '#456789356',
      transactionDate: '4/31/12',
      from: 'First Bank -5566xxxx',
      category: 'Invest',
      company: 'CeegsWorth',
      amountPaid: '$479.95',
      balance: '$473.86',
      status: 'Failed',
      paymentMethod: 'First Bank'
    },
    {
      refId: '#456789356',
      transactionDate: '6/3/17',
      from: 'Paypal -3455xxxx',
      category: 'Buy',
      company: 'Efab',
      amountPaid: '$349.78',
      balance: '$343.78',
      status: 'Pending',
      paymentMethod: 'Paypal'
    }
  ];

  const filterCategories: FilterCategory[] = [
    'Company',
    'Successful Transaction',
    'Pending Transaction', 
    'Failed Transactions',
    'Date'
  ];

  const tabs: TransactionTab[] = ['Recent Transaction', 'Buy', 'Rent', 'Invest'];

  const handleFilterToggle = (filter: FilterCategory) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Successful':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Pending':
        return <Clock className="w-4 h-4 text-orange-500" />;
      case 'Failed':
        return <X className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Successful':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-orange-100 text-orange-800';
      case 'Failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentMethodIcon = (method: string) => {
    switch (method.toLowerCase()) {
      case 'wise':
        return <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">W</div>;
      case 'first bank':
        return <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">FB</div>;
      case 'paypal':
        return <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">P</div>;
      default:
        return <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center text-white text-xs font-bold">?</div>;
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.refId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === 'Recent Transaction' || transaction.category === activeTab;
    
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
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-gray-900">Transaction</h1>
              
              <div className="flex items-center space-x-4">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search here..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
                  />
                </div>

                {/* Filter Button */}
                <div className="relative">
                  <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center space-x-2"
                  >
                    <Filter className="w-4 h-4 text-gray-600" />
                  </button>

                  {/* Filter Dropdown */}
                  {isFilterOpen && (
                    <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      <div className="p-4">
                        <h3 className="font-medium text-gray-900 mb-3">Filter by</h3>
                        <div className="space-y-2">
                          {filterCategories.map((category) => (
                            <label key={category} className="flex items-center space-x-3 cursor-pointer">
                              <div className="flex items-center space-x-2">
                                {category === 'Company' && <Building className="w-4 h-4 text-gray-400" />}
                                {category === 'Successful Transaction' && <CheckCircle className="w-4 h-4 text-gray-400" />}
                                {category === 'Pending Transaction' && <Clock className="w-4 h-4 text-gray-400" />}
                                {category === 'Failed Transactions' && <X className="w-4 h-4 text-gray-400" />}
                                {category === 'Date' && <Calendar className="w-4 h-4 text-gray-400" />}
                                <span className="text-sm text-gray-700">{category}</span>
                              </div>
                              {category !== 'Company' && (
                                <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
                              )}
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-22 mt-6">
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

          {/* Transaction Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ref ID</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Date</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount paid</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredTransactions.map((transaction, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.refId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.transactionDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {getPaymentMethodIcon(transaction.paymentMethod)}
                        <span className="text-sm text-gray-900">{transaction.from}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.company}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.amountPaid}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {transaction.balance}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        {transaction.status === 'Failed' ? (
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(transaction.status)}`}>
                            {transaction.status}
                          </span>
                        ) : (
                          <>
                            {getStatusIcon(transaction.status)}
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(transaction.status)}`}>
                              {transaction.status}
                            </span>
                          </>
                        )}
                      </div>
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

export default TransactionPage;