// src/components/dashboards/company-dashboard/CompanyManageRealtor.tsx
import { useState } from 'react';
import { Search, SlidersHorizontal, Plus, Trash2, MoreVertical } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// ── Types ─────────────────────────────────────────────────────────────────────
interface Realtor {
  name: string;
  avatar: string;
  address: string;
  email: string;
  contact: string;
  noOfProperties: number;
  date: string;
  status: 'Active' | 'Inactive';
}

// ── Mock Data ─────────────────────────────────────────────────────────────────
const REALTORS: Realtor[] = [
  {
    name: 'Abubakar Isa',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    address: 'Gwarinpa Abuja',
    email: 'isa@gmail.com',
    contact: '+2349077445566',
    noOfProperties: 3,
    date: '21/01/2025',
    status: 'Active',
  },
  {
    name: 'Ibrahim Abud',
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    address: 'Gwarinpa Abuja',
    email: 'isa@gmail.com',
    contact: '+2349077445566',
    noOfProperties: 5,
    date: '21/01/2025',
    status: 'Active',
  },
  {
    name: 'Abubakar Musa',
    avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
    address: 'Gwarinpa Abuja',
    email: 'isa@gmail.com',
    contact: '+2349077445566',
    noOfProperties: 0,
    date: '21/01/2025',
    status: 'Inactive',
  },
  {
    name: 'Aminu Isa',
    avatar: 'https://randomuser.me/api/portraits/men/61.jpg',
    address: 'Gwarinpa Abuja',
    email: 'isa@gmail.com',
    contact: '+2349077445566',
    noOfProperties: 2,
    date: '21/01/2025',
    status: 'Active',
  },
  {
    name: 'Emmanuel John',
    avatar: 'https://randomuser.me/api/portraits/men/71.jpg',
    address: 'Gwarinpa Abuja',
    email: 'isa@gmail.com',
    contact: '+2349077445566',
    noOfProperties: 4,
    date: '21/01/2025',
    status: 'Active',
  },
  {
    name: 'Albert Mike',
    avatar: 'https://randomuser.me/api/portraits/men/83.jpg',
    address: 'Gwarinpa Abuja',
    email: 'isa@gmail.com',
    contact: '+2349077445566',
    noOfProperties: 3,
    date: '21/01/2025',
    status: 'Active',
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

// ── Status Badge ──────────────────────────────────────────────────────────────
const StatusBadge = ({ status }: { status: Realtor['status'] }) => {
  const map: Record<Realtor['status'], string> = {
    Active:   'bg-white text-green-700 border border-green-300',
    Inactive: 'bg-white text-red-500 border border-red-300',
  };
  return (
    <span className={`px-4 py-1 rounded-full text-xs font-medium ${map[status]}`}>
      {status}
    </span>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
const CompanyManageRealtor = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const filtered = REALTORS.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.email.toLowerCase().includes(search.toLowerCase())
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
            title="No of Agents"
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

        {/* ── Realtors Table ── */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">

          {/* Search + Action Buttons Row */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            {/* Search */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search here..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-64"
                />
              </div>
              <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                <SlidersHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => (window.location.href = '/company/new-agent')}
                className="flex items-center gap-2 px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4" />
                Add Agent
              </button>
              <button className="flex items-center gap-2 px-5 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-lg transition-colors">
                <Trash2 className="w-4 h-4 text-gray-500" />
                Remove Agent
              </button>
            </div>
          </div>

          {/* Table */}
          <table className="w-full text-sm">
            <thead>
              <tr className="text-gray-500 text-xs font-medium border-b border-gray-100">
                <th className="px-6 py-3 text-left">Agent</th>
                <th className="px-6 py-3 text-left">Address</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Contact</th>
                <th className="px-6 py-3 text-left">No of Properties</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((realtor, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  {/* Agent */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={realtor.avatar}
                        alt={realtor.name}
                        className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                      />
                      <span className="font-medium text-gray-800">{realtor.name}</span>
                    </div>
                  </td>

                  {/* Address */}
                  <td className="px-6 py-4 text-gray-600">{realtor.address}</td>

                  {/* Email */}
                  <td className="px-6 py-4 text-gray-600">{realtor.email}</td>

                  {/* Contact */}
                  <td className="px-6 py-4 text-gray-600">{realtor.contact}</td>

                  {/* No of Properties */}
                  <td className="px-6 py-4 text-gray-700 font-medium text-center">
                    {realtor.noOfProperties}
                  </td>

                  {/* Date */}
                  <td className="px-6 py-4 text-gray-600">{realtor.date}</td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <StatusBadge status={realtor.status} />
                  </td>

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
        </div>

        {/* ── Pagination ── */}
        <div className="flex items-center justify-center gap-1">
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

      </main>
    </div>
  );
};

export default CompanyManageRealtor;
