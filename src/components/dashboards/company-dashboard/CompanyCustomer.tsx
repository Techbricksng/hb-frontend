// src/components/dashboards/company-dashboard/CompanyManageCustomers.tsx
import { useState } from 'react';
import { Search, SlidersHorizontal, MoreVertical } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// ── Types ─────────────────────────────────────────────────────────────────────
interface Customer {
  name: string;
  avatar: string;
  email: string;
  category: 'Buyer' | 'Renter' | 'Investor';
  totalTransaction: string;
  contactRealtor: { name: string; avatar: string };
  status: 'Active' | 'Inactive';
  registeredOn: string;
}

// ── Mock Data ─────────────────────────────────────────────────────────────────
const CUSTOMERS: Customer[] = [
  {
    name: 'Wade Warren',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
    email: 'deanna.curtis@example.com',
    category: 'Buyer',
    totalTransaction: '2 Purchased',
    contactRealtor: { name: 'Robert Fox', avatar: 'https://randomuser.me/api/portraits/men/22.jpg' },
    status: 'Active',
    registeredOn: '21/01/2025',
  },
  {
    name: 'Cameron Williamson',
    avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
    email: 'michael.mitc@example.com',
    category: 'Renter',
    totalTransaction: '0',
    contactRealtor: { name: 'Floyd Miles', avatar: 'https://randomuser.me/api/portraits/men/44.jpg' },
    status: 'Inactive',
    registeredOn: '21/01/2025',
  },
  {
    name: 'Esther Howard',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    email: 'deanna.curtis@example.com',
    category: 'Investor',
    totalTransaction: 'N6,000,000',
    contactRealtor: { name: 'Jerome Bell', avatar: 'https://randomuser.me/api/portraits/men/66.jpg' },
    status: 'Active',
    registeredOn: '21/01/2025',
  },
  {
    name: 'Brooklyn Simmons',
    avatar: 'https://randomuser.me/api/portraits/women/77.jpg',
    email: 'jackson.graham@example.com',
    category: 'Renter',
    totalTransaction: '1 Rent',
    contactRealtor: { name: 'Savannah Nguyen', avatar: 'https://randomuser.me/api/portraits/women/88.jpg' },
    status: 'Inactive',
    registeredOn: '21/01/2025',
  },
  {
    name: 'Leslie Alexander',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
    email: 'michelle.rivera@example.com',
    category: 'Buyer',
    totalTransaction: '1 Purchased',
    contactRealtor: { name: 'Ronald Richards', avatar: 'https://randomuser.me/api/portraits/men/13.jpg' },
    status: 'Active',
    registeredOn: '21/01/2025',
  },
  {
    name: 'Jenny Wilson',
    avatar: 'https://randomuser.me/api/portraits/women/24.jpg',
    email: 'jessica.hanson@example.com',
    category: 'Buyer',
    totalTransaction: '3 Purchased',
    contactRealtor: { name: 'Eleanor Pena', avatar: 'https://randomuser.me/api/portraits/women/35.jpg' },
    status: 'Active',
    registeredOn: '21/01/2025',
  },
  {
    name: 'Guy Hawkins',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    email: 'debbie.baker@example.com',
    category: 'Buyer',
    totalTransaction: '2 Purchased',
    contactRealtor: { name: 'Darrell Steward', avatar: 'https://randomuser.me/api/portraits/women/57.jpg' },
    status: 'Active',
    registeredOn: '21/01/2025',
  },
];

// ── Stat Card ─────────────────────────────────────────────────────────────────
interface StatCardProps {
  title: string;
  value: string;
  iconBg: string;
  icon: React.ReactNode;
  change?: string;
}

const StatCard = ({ title, value, iconBg, icon, change = '+3.5%  vs last month' }: StatCardProps) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3 flex-1 min-w-0">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-gray-500">{title}</span>
      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${iconBg}`}>
        {icon}
      </div>
    </div>
    <p className="text-3xl font-bold text-gray-900 leading-tight">{value}</p>
    <p className="text-xs text-green-600 font-medium">{change}</p>
  </div>
);

// ── Status Text ───────────────────────────────────────────────────────────────
const StatusText = ({ status }: { status: Customer['status'] }) => (
  <span className={`text-sm font-medium ${status === 'Active' ? 'text-green-600' : 'text-orange-500'}`}>
    {status}
  </span>
);

// ── Main Component ────────────────────────────────────────────────────────────
const CompanyManageCustomers = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const filtered = CUSTOMERS.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <CustomerHeader />

      {/* Body */}
      <main className="flex-1 p-6 bg-gray-50 overflow-auto space-y-6">

        {/* ── Stat Cards ── */}
        <div className="flex gap-4">
          <StatCard
            title="No of Properties"
            value="128"
            iconBg="bg-blue-100"
            icon={
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.75L12 3l9 6.75V21H3V9.75z" />
              </svg>
            }
          />
          <StatCard
            title="No of Realtors"
            value="12"
            iconBg="bg-orange-100"
            icon={
              <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
          />
          <StatCard
            title="No of Clients"
            value="24"
            iconBg="bg-orange-100"
            icon={
              <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
          />
          <StatCard
            title="Revenue"
            value="₦3,250,000"
            iconBg="bg-green-100"
            icon={
              <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          />
        </div>

        {/* ── Customers Table ── */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">

          {/* Title + Search Row */}
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-base font-semibold text-gray-900">Customer</h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search here..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-56"
                />
              </div>
              <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <SlidersHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Table */}
          <table className="w-full text-sm">
            <thead>
              <tr className="border-t border-b border-gray-100 text-gray-500 text-xs font-medium">
                <th className="px-6 py-3 text-left">Customer</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Total Transaction</th>
                <th className="px-6 py-3 text-left">Contact Realtor</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Registered On</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((customer, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">

                  {/* Customer */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={customer.avatar}
                        alt={customer.name}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                      />
                      <span className="font-medium text-gray-800">{customer.name}</span>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="px-6 py-4 text-gray-500 text-xs leading-relaxed">
                    {customer.email}
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4 text-gray-600">{customer.category}</td>

                  {/* Total Transaction */}
                  <td className="px-6 py-4 text-gray-600">{customer.totalTransaction}</td>

                  {/* Contact Realtor */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={customer.contactRealtor.avatar}
                        alt={customer.contactRealtor.name}
                        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                      />
                      <span className="text-gray-700 text-xs">{customer.contactRealtor.name}</span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <StatusText status={customer.status} />
                  </td>

                  {/* Registered On */}
                  <td className="px-6 py-4 text-gray-500">{customer.registeredOn}</td>

                  {/* Action */}
                  <td className="px-6 py-4">
                    <button className="p-1 hover:bg-gray-100 rounded-md transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>

          {/* ── Pagination ── */}
          <div className="flex items-center justify-center gap-1 px-6 py-4 border-t border-gray-100">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors text-sm"
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-gray-800 text-white'
                    : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors text-sm"
            >
              ›
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CompanyManageCustomers;
