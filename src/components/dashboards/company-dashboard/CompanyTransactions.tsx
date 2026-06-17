import { useState, useRef, useEffect } from 'react';
import {
  Search, SlidersHorizontal, MessageSquare, MoreVertical,
  ChevronDown, Download, Share2, Copy, CheckCircle, X,
  FileText, Sheet
} from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
type MainTab = 'Recent Transaction' | 'Buy' | 'Rent' | 'Invest';
type TxStatus = 'Successful' | 'Pending' | 'Failed';
type PageView = 'list' | 'details' | 'buildingDetail';

interface Transaction {
  id: string;
  refId: string;
  customer: { name: string; avatar: string };
  date: string;
  category: 'Buy' | 'Rent' | 'Invest';
  amountPaid: string;
  balance: string;
  status: TxStatus;
}

// ─────────────────────────────────────────────────────────────────────────────
// Mock Data
// ─────────────────────────────────────────────────────────────────────────────
const TRANSACTIONS: Transaction[] = [
  { id: '1', refId: '#456789356', customer: { name: 'Wade Warren', avatar: 'https://randomuser.me/api/portraits/men/11.jpg' }, date: '9/18/16', category: 'Buy', amountPaid: '$351.02', balance: '-', status: 'Successful' },
  { id: '2', refId: '#456789356', customer: { name: 'Cameron William', avatar: 'https://randomuser.me/api/portraits/men/33.jpg' }, date: '5/7/16', category: 'Rent', amountPaid: '$779.58', balance: '$396.84', status: 'Pending' },
  { id: '3', refId: '#456789356', customer: { name: 'Esther Howard', avatar: 'https://randomuser.me/api/portraits/women/55.jpg' }, date: '12/4/17', category: 'Invest', amountPaid: '$928.41', balance: '$928.41', status: 'Failed' },
  { id: '4', refId: '#456789356', customer: { name: 'Brooklyn Simmons', avatar: 'https://randomuser.me/api/portraits/women/77.jpg' }, date: '5/19/12', category: 'Buy', amountPaid: '$450.54', balance: '-', status: 'Successful' },
  { id: '5', refId: '#456789356', customer: { name: 'Leslie Alexander', avatar: 'https://randomuser.me/api/portraits/women/12.jpg' }, date: '4/21/12', category: 'Invest', amountPaid: '$473.85', balance: '$473.85', status: 'Failed' },
  { id: '6', refId: '#456789356', customer: { name: 'Jenny Wilson', avatar: 'https://randomuser.me/api/portraits/women/24.jpg' }, date: '8/2/19', category: 'Buy', amountPaid: '$219.78', balance: '$219.78', status: 'Pending' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Status badge
// ─────────────────────────────────────────────────────────────────────────────
const StatusBadge = ({ status }: { status: TxStatus }) => {
  if (status === 'Successful') return <span className="text-green-600 text-sm font-medium">Successful</span>;
  if (status === 'Pending') return <span className="px-4 py-1 rounded-full border border-orange-300 text-orange-400 text-xs font-medium">Pending</span>;
  return <span className="px-4 py-1.5 rounded-lg bg-orange-500 text-white text-xs font-semibold">Failed</span>;
};

// ─────────────────────────────────────────────────────────────────────────────
// Transaction Details Page
// ─────────────────────────────────────────────────────────────────────────────
const TransactionDetails = ({ tx, onBack }: { tx: Transaction; onBack: () => void }) => {
  const [copied, setCopied] = useState(false);
  const txNumber = '#456789356';

  const handleCopy = () => {
    navigator.clipboard.writeText(txNumber).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-full">
      <CustomerHeader />
      <main className="flex-1 p-6 bg-gray-50 overflow-auto">
        <div className="flex items-center gap-2 mb-5">
          <button onClick={onBack} className="text-sm text-gray-400 hover:text-gray-600">← Back</button>
          <h1 className="text-xl font-bold text-gray-900">Transaction Details</h1>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 max-w-2xl space-y-5">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold text-sm">F</div>
              <span className="text-sm font-medium text-gray-800">Kikikarisma@email.com</span>
            </div>
            {tx.status === 'Successful' ? (
              <span className="text-green-600 text-sm font-semibold">Completed</span>
            ) : (
              <span className="px-4 py-1.5 rounded-lg bg-orange-400 text-white text-sm font-semibold">Pending</span>
            )}
          </div>

          <p className="text-sm text-gray-500"><span className="font-semibold text-gray-700">Date:</span> Sep 9, 2024 16:30:16</p>

          {/* Payment Details */}
          <div>
            <h2 className="text-sm font-bold text-gray-900 underline mb-4">Payment Details</h2>
            <div className="space-y-3">
              {[
                ['Sender\'s Name', 'Isa Ibrahim Mathew'],
                ['Method', '********4307'],
                ['Card Type', 'Mastercard'],
                ['House Rent  Amount', '$30,000'],
                ['Commission(2%)', '$600'],
                ['VAT(5%)', '$1,500'],
                ['Total Amount Paid', '$32,100'],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{label}</span>
                  <span className="text-sm font-medium text-gray-800">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction number */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Transaction number: {txNumber}</span>
            <button onClick={handleCopy} className="text-gray-400 hover:text-gray-600 transition-colors">
              {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Report an Issue */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-5 h-5 border-2 border-red-500 rounded flex items-center justify-center">
              <X className="w-3 h-3 text-red-500" />
            </div>
            <span className="text-sm text-red-500 font-medium group-hover:underline">Report an Issue</span>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 pt-1">
            <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              Download Receipt
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              <Share2 className="w-4 h-4" />
              Share Receipt
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Building/Property Detail View
// ─────────────────────────────────────────────────────────────────────────────
const BuildingDetailView = ({ tx, onBack }: { tx: Transaction; onBack: () => void }) => (
  <div className="flex flex-col h-full">
    <CustomerHeader />
    <main className="flex-1 p-6 bg-gray-50 overflow-auto">
      <div className="flex items-center gap-2 mb-5">
        <button onClick={onBack} className="text-sm text-gray-400 hover:text-gray-600">← Back</button>
        <h1 className="text-xl font-bold text-gray-900">Transaction</h1>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm max-w-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80"
          alt="Property"
          className="w-full h-56 object-cover"
        />
        <div className="p-6 space-y-3">
          {[
            ['Property name:', 'Luxury Apartment'],
            ['Price:', 'N3, 00 00'],
            ['Agency Name:', 'Efab'],
            ['Contact:', '07035532345'],
            ['Payment Duration', '3 Month'],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{label}</span>
              <span className="text-sm font-medium text-gray-800">{value}</span>
            </div>
          ))}

          {/* Status with Reserve pill */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Status</span>
            <span className="px-4 py-1 rounded-full border border-blue-300 text-blue-500 text-xs font-medium">Reserve</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Total Payment</span>
            <span className="text-sm font-medium text-gray-800">N1,000,000</span>
          </div>

          {/* Balance with orange pill */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Balance</span>
            <span className="px-4 py-1 rounded-full border border-orange-300 text-orange-500 text-xs font-medium">N2, 300, 000</span>
          </div>

          <div className="flex justify-center pt-3">
            <button onClick={onBack} className="px-8 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
              View all Transactions
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main Transactions Component
// ─────────────────────────────────────────────────────────────────────────────
const CompanyTransactions = () => {
  const [activeTab, setActiveTab] = useState<MainTab>('Recent Transaction');
  const [search, setSearch] = useState('');
  const [pageView, setPageView] = useState<PageView>('list');
  const [selectedTx, setSelectedTx] = useState<Transaction | null>(null);
  const [actionMenu, setActionMenu] = useState<{ id: string; x: number; y: number } | null>(null);
  const [filterMenu, setFilterMenu] = useState(false);
  const [statusFilter, setStatusFilter] = useState<TxStatus | null>(null);
  const [showBuyDropdown, setShowBuyDropdown] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  const tabs: MainTab[] = ['Recent Transaction', 'Buy', 'Rent', 'Invest'];

  // Close menus on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setActionMenu(null);
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) setFilterMenu(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = TRANSACTIONS.filter(tx => {
    const matchSearch = tx.customer.name.toLowerCase().includes(search.toLowerCase()) ||
      tx.refId.includes(search);
    const matchTab = activeTab === 'Recent Transaction' || tx.category === activeTab;
    const matchStatus = !statusFilter || tx.status === statusFilter;
    return matchSearch && matchTab && matchStatus;
  });

  const openMenu = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setActionMenu({ id, x: rect.right, y: rect.bottom });
  };

  // Sub-views
  if (pageView === 'details' && selectedTx) {
    return <TransactionDetails tx={selectedTx} onBack={() => setPageView('list')} />;
  }
  if (pageView === 'buildingDetail' && selectedTx) {
    return <BuildingDetailView tx={selectedTx} onBack={() => setPageView('list')} />;
  }

  return (
    <>
      <div className="flex flex-col h-full">
        <CustomerHeader />

        <main className="flex-1 p-6 bg-gray-50 overflow-auto space-y-5">
          {/* ── Title row ── */}
          <div className="flex items-start justify-between">
            <h1 className="text-xl font-bold text-gray-900">Transaction</h1>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search here..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-52"
                />
              </div>
              {/* Filter button with dropdown */}
              <div className="relative" ref={filterRef}>
                <button
                  onClick={() => setFilterMenu(v => !v)}
                  className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50"
                >
                  <SlidersHorizontal className="w-4 h-4 text-gray-500" />
                </button>
                {filterMenu && (
                  <div className="absolute right-0 top-10 z-40 bg-white rounded-xl shadow-xl border border-gray-100 py-2 w-52">
                    {[
                      { label: 'Successful Transaction', status: 'Successful' as TxStatus, icon: '☑' },
                      { label: 'Pending Transaction', status: 'Pending' as TxStatus, icon: '⊙' },
                      { label: 'Failed Transactions', status: 'Failed' as TxStatus, icon: '✕' },
                      { label: 'Ddate', status: null, icon: '📄' },
                    ].map(item => (
                      <button
                        key={item.label}
                        onClick={() => { setStatusFilter(item.status); setFilterMenu(false); }}
                        className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-gray-50 transition-colors ${
                          statusFilter === item.status ? 'text-green-600 font-medium' : 'text-gray-700'
                        }`}
                      >
                        <span className="text-gray-400">{item.icon}</span>
                        {item.label}
                      </button>
                    ))}
                    {statusFilter && (
                      <button
                        onClick={() => { setStatusFilter(null); setFilterMenu(false); }}
                        className="w-full px-4 py-2 text-xs text-red-500 hover:bg-red-50 text-left border-t border-gray-50"
                      >
                        Clear filter
                      </button>
                    )}
                  </div>
                )}
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                <MessageSquare className="w-4 h-4 text-gray-500" />
                Request (4)
              </button>
            </div>
          </div>

          {/* ── Table card ── */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-100">
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); if (tab === 'Buy') setShowBuyDropdown(v => !v); }}
                  className={`flex items-center gap-1 px-7 py-4 text-sm font-medium transition-colors relative whitespace-nowrap ${
                    activeTab === tab ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {tab}
                  {tab === 'Buy' && <ChevronDown className="w-3.5 h-3.5" />}
                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-t" />
                  )}
                </button>
              ))}
            </div>

            {/* Table */}
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-gray-500 text-xs font-medium">
                  <th className="px-6 py-3 text-left">Ref ID</th>
                  <th className="px-6 py-3 text-left">Customer</th>
                  <th className="px-6 py-3 text-left">Transaction Date</th>
                  <th className="px-6 py-3 text-left">Category</th>
                  <th className="px-6 py-3 text-left">Amount paid</th>
                  <th className="px-6 py-3 text-left">Balance</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.length === 0 ? (
                  <tr><td colSpan={8} className="px-6 py-20 text-center text-gray-400 text-sm">No transactions found</td></tr>
                ) : (
                  filtered.map(tx => (
                    <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-500 font-medium">{tx.refId}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={tx.customer.avatar} alt={tx.customer.name} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                          <span className="font-medium text-gray-800">{tx.customer.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-500">{tx.date}</td>
                      <td className="px-6 py-4 text-gray-600">{tx.category}</td>
                      <td className="px-6 py-4 text-gray-700 font-medium">{tx.amountPaid}</td>
                      <td className="px-6 py-4 text-gray-500">{tx.balance}</td>
                      <td className="px-6 py-4"><StatusBadge status={tx.status} /></td>
                      <td className="px-6 py-4 relative">
                        <button onClick={e => openMenu(e, tx.id)} className="p-1 hover:bg-gray-100 rounded-md transition-colors">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {/* ── Action dropdown ── */}
      {actionMenu && (
        <div
          ref={menuRef}
          className="fixed z-40 bg-white rounded-xl shadow-xl border border-gray-100 py-1 w-40"
          style={{ top: actionMenu.y + 4, left: actionMenu.x - 160 }}
        >
          <button
            onClick={() => {
              const tx = TRANSACTIONS.find(t => t.id === actionMenu.id);
              if (tx) { setSelectedTx(tx); setPageView('details'); setActionMenu(null); }
            }}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50"
          >
            <span className="text-gray-400">👁</span> View Details
          </button>
          <button
            onClick={() => {
              const tx = TRANSACTIONS.find(t => t.id === actionMenu.id);
              if (tx) { setSelectedTx(tx); setPageView('buildingDetail'); setActionMenu(null); }
            }}
            className="w-full flex items-center gap-2 px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 border-t border-gray-50"
          >
            <span className="text-gray-400">🏠</span> Property Detail
          </button>
        </div>
      )}
    </>
  );
};

export default CompanyTransactions;
