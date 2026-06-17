import { useState } from 'react';
import { MoreVertical } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

import property1 from '../../../assets/property-1.png';

interface Transaction {
  id: string;
  image: string;
  property: string;
  amount: string;
  date: string;
  category: 'Rent' | 'Buy';
  status: 'Completed' | 'Pending';
}

type FilterTab = 'all' | 'buy' | 'rent' | 'pending';

const EarningsCommissionPage = () => {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const transactions: Transaction[] = [
    {
      id: '1',
      image: property1,
      property: 'Luxury Apartment',
      amount: '₦50000',
      date: 'Sep 9, 2024, 04:30pm',
      category: 'Rent',
      status: 'Completed'
    },
    {
      id: '2',
      image: property1,
      property: 'Luxury Apartment',
      amount: '₦10000',
      date: 'Sep 9, 2024, 04:30pm',
      category: 'Rent',
      status: 'Completed'
    },
    {
      id: '3',
      image: property1,
      property: 'Luxury Apartment',
      amount: '₦60000',
      date: '',
      category: 'Buy',
      status: 'Pending'
    },
    {
      id: '4',
      image: property1,
      property: 'Luxury Apartment',
      amount: '₦80000',
      date: 'Sep 9, 2024, 04:30pm',
      category: 'Buy',
      status: 'Completed'
    },
    {
      id: '5',
      image: property1,
      property: 'Luxury Apartment',
      amount: '₦50000',
      date: 'Sep 9, 2024, 04:30pm',
      category: 'Rent',
      status: 'Completed'
    },
    {
      id: '6',
      image: property1,
      property: 'Luxury Apartment',
      amount: '₦10000',
      date: '',
      category: 'Rent',
      status: 'Pending'
    },
    {
      id: '7',
      image: property1,
      property: 'Luxury Apartment',
      amount: '₦60000',
      date: '',
      category: 'Buy',
      status: 'Pending'
    },
    {
      id: '8',
      image: property1,
      property: 'Luxury Apartment',
      amount: '₦80000',
      date: 'Sep 9, 2024, 04:30pm',
      category: 'Buy',
      status: 'Completed'
    }
  ];

  const filteredTransactions = transactions.filter(transaction => {
    if (activeTab === 'all') return true;
    if (activeTab === 'buy') return transaction.category === 'Buy';
    if (activeTab === 'rent') return transaction.category === 'Rent';
    if (activeTab === 'pending') return transaction.status === 'Pending';
    return true;
  });

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Top Header */}
      <CustomerHeader />

      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Earnings & Commission</h1>

          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === 'all'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              All Property
            </button>
            <button
              onClick={() => setActiveTab('buy')}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === 'buy'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => setActiveTab('rent')}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === 'rent'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Rent
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-4 py-2 text-sm font-medium border-b-2 ${
                activeTab === 'pending'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Pending
            </button>
          </div>

          {/* Transactions Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Property
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="flex px-6 py-4 whitespace-nowrap">
                         <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-lg overflow-hidden">
                        <img 
                              src={transaction.image} 
                              alt={transaction.property}
                              className="w-full h-full object-cover"
                            />
                        </div>
                      <span className="text-sm text-gray-900">{transaction.property}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{transaction.amount}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {transaction.date ? (
                        <span className="text-sm text-gray-900">{transaction.date}</span>
                      ) : (
                        <span className="text-sm text-gray-300">_______________</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{transaction.category}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          transaction.status === 'Completed'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreVertical className="w-4 h-4 text-gray-600" />
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

export default EarningsCommissionPage;