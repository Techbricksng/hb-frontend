import { useState, useMemo } from 'react'; // <-- Import useMemo
import CustomerHeader from './CustomerHeader';
import { MoreVertical, FileCheck2 } from 'lucide-react';
import houses from '../../../assets/dash.png'; 

// --- Type Definitions ---

type TransactionStatus = 'Completed' | 'Pending';
type TransactionCategory = 'Sold' | 'Rent';

interface Transaction {
  id: number;
  propertyName: string;
  propertyImage: string;
  amount: string;
  date: string;
  category: TransactionCategory;
  status: TransactionStatus;
}

// --- Sample Data ---

const transactions: Transaction[] = [
  {
    id: 1,
    propertyName: 'Luxury Apartment',
    propertyImage: houses,
    amount: 'N50000',
    date: 'Sep 9, 2024, 04:30pm',
    category: 'Sold',
    status: 'Completed',
  },
  {
    id: 2,
    propertyName: 'Luxury Apartment',
    propertyImage: houses,
    amount: 'N10000',
    date: 'Sep 9, 2024, 04:30pm',
    category: 'Rent',
    status: 'Pending',
  },
  {
    id: 3,
    propertyName: 'Luxury Apartment',
    propertyImage: houses,
    amount: 'N60000',
    date: 'Sep 9, 2024, 04:30pm',
    category: 'Rent',
    status: 'Pending',
  },
  {
    id: 4,
    propertyName: 'Luxury Apartment',
    propertyImage: houses,
    amount: 'N80000',
    date: 'Sep 9, 2024, 04:30pm',
    category: 'Sold',
    status: 'Completed',
  },
  // --- Added more data for better filter testing ---
  {
    id: 5,
    propertyName: 'Studio Downtown',
    propertyImage: houses,
    amount: 'N25000',
    date: 'Sep 8, 2024, 10:00am',
    category: 'Rent',
    status: 'Completed',
  },
];

// --- Component ---

const DocumentCompliancePage = () => {
  const [activeTab, setActiveTab] = useState('All Property');
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const tabs = ['All Property', 'Buy', 'Rent', 'Pending'];

  // --- NEW: Filtering Logic ---
  const filteredTransactions = useMemo(() => {
    // Close dropdown when filter changes
    setOpenDropdown(null); 
    
    if (activeTab === 'All Property') {
      return transactions;
    }
    if (activeTab === 'Buy') {
      // 'Buy' tab shows 'Sold' transactions
      return transactions.filter(tx => tx.category === 'Sold');
    }
    if (activeTab === 'Rent') {
      return transactions.filter(tx => tx.category === 'Rent');
    }
    if (activeTab === 'Pending') {
      return transactions.filter(tx => tx.status === 'Pending');
    }
    return transactions;
  }, [activeTab]); // This runs only when activeTab changes

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Uses the same header as your DashboardPage */}
      <CustomerHeader />

      {/* Main Content Area */}
      <main className="p-6 md:p-10">
         <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Document & Compliances
          </h1>
        <div className="max-w-7xl mx-auto bg-white p-6 md:p-8 rounded-lg">
          
         

          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)} // Click handler is correct
                  className={`
                    whitespace-nowrap pb-4 px-1 border-b-2
                    font-medium text-sm
                    ${
                      activeTab === tab
                        ? 'border-green-500 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                    focus:outline-none
                  `}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-sm">
              
              <thead>
                <tr className="text-left">
                  <th className="pb-4 px-2 font-medium text-gray-500 uppercase text-xs">Property</th>
                  <th className="pb-4 px-2 font-medium text-gray-500 uppercase text-xs">Amount</th>
                  <th className="pb-4 px-2 font-medium text-gray-500 uppercase text-xs">Transaction Date</th>
                  <th className="pb-4 px-2 font-medium text-gray-500 uppercase text-xs">Category</th>
                  <th className="pb-4 px-2 font-medium text-gray-500 uppercase text-xs">Status</th>
                  <th className="pb-4 px-2 font-medium text-gray-500 uppercase text-xs">Action</th>
                </tr>
              </thead>
              
              {/* --- UPDATED: Table Body --- */}
              <tbody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((tx) => (
                    <tr key={tx.id} className="border-t border-gray-100">
                      
                      {/* Property */}
                      <td className="py-3 px-2">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={tx.propertyImage} 
                            alt={tx.propertyName} 
                            className="w-10 h-10 object-cover rounded-lg" 
                          />
                          <span className="font-medium text-gray-900">{tx.propertyName}</span>
                        </div>
                      </td>
                      
                      {/* Amount */}
                      <td className="py-3 px-2 text-gray-700">{tx.amount}</td>
                      
                      {/* Date */}
                      <td className="py-3 px-2 text-gray-700">{tx.date}</td>
                      
                      {/* Category */}
                      <td className="py-3 px-2 text-gray-700">{tx.category}</td>
                      
                      {/* Status */}
                      <td className="py-3 px-2">
                        <span className={`
                          px-3 py-1 rounded-full text-xs font-medium
                          ${tx.status === 'Completed' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-orange-100 text-orange-700'}
                        `}>
                          {tx.status}
                        </span>
                      </td>
                      
                      {/* Action */}
                      <td className="py-3 px-2 relative">
                        <button 
                          onClick={() => setOpenDropdown(openDropdown === tx.id ? null : tx.id)}
                          className="p-1 rounded-full text-gray-500 hover:bg-gray-100 focus:outline-none"
                        >
                          <MoreVertical className="w-5 h-5" />
                        </button>

                        {/* Dropdown Menu */}
                        {openDropdown === tx.id && (
                          <div className="absolute right-4 top-12 z-10 w-auto bg-white rounded-lg shadow-xl border border-gray-100">
                            <button
                              onClick={() => {
                                console.log('Viewing details for:', tx.id);
                                setOpenDropdown(null);
                              }}
                              className="w-full flex items-center space-x-2 whitespace-nowrap px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg"
                            >
                              <FileCheck2 className="w-4 h-4 text-gray-500" />
                              <span>View Details</span>
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  // --- NEW: Empty State ---
                  <tr>
                    <td colSpan={6} className="text-center py-10 text-gray-500">
                      No transactions found for "{activeTab}".
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
};

export default DocumentCompliancePage;