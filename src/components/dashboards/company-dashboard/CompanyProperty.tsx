// src/components/dashboards/company-dashboard/CompanyProperty.tsx
import { useState } from 'react';
import { Search, SlidersHorizontal, Eye, MessageCircle, MoreVertical } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// ── Types ────────────────────────────────────────────────────────────────────
interface Property {
  id: string;
  name: string;
  image: string;
  realtor: { name: string; avatar: string };
  category: 'Buy' | 'Rent' | 'Investment';
  price: string;
  performance: { views: number; comments: number };
  status: 'Available' | 'Rented' | 'Sold';
}

// ── Mock data ─────────────────────────────────────────────────────────────────
const PROPERTIES: Property[] = [
  {
    id: '#HB111',
    name: 'Lekki Terrace Home',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=80&q=70',
    realtor: { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    category: 'Buy',
    price: 'N33,000000',
    performance: { views: 12, comments: 10 },
    status: 'Available',
  },
  {
    id: '#HB111',
    name: 'Lekki Terrace Home',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=80&q=70',
    realtor: { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    category: 'Buy',
    price: 'N33,000000',
    performance: { views: 12, comments: 10 },
    status: 'Available',
  },
  {
    id: '#HB112',
    name: 'Banana Island Duplex',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80&q=70',
    realtor: { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/45.jpg' },
    category: 'Rent',
    price: 'N1,500,000',
    performance: { views: 12, comments: 10 },
    status: 'Rented',
  },
  {
    id: '#HB113',
    name: 'Ajah Mini Flat',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&q=70',
    realtor: { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/55.jpg' },
    category: 'Investment',
    price: 'N5,000 000',
    performance: { views: 12, comments: 10 },
    status: 'Available',
  },
  {
    id: '#HB114',
    name: 'Lexury Apartment',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=80&q=70',
    realtor: { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/60.jpg' },
    category: 'Buy',
    price: 'N36,000000',
    performance: { views: 12, comments: 10 },
    status: 'Available',
  },
  {
    id: '#HB114',
    name: 'Lexury Apartment',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=80&q=70',
    realtor: { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/65.jpg' },
    category: 'Buy',
    price: 'N36,000000',
    performance: { views: 12, comments: 10 },
    status: 'Sold',
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
const StatusBadge = ({ status }: { status: Property['status'] }) => {
  const map: Record<Property['status'], string> = {
    Available: 'bg-green-50 text-green-700 border border-green-200',
    Rented:    'bg-red-50 text-red-600 border border-red-200',
    Sold:      'bg-gray-200 text-gray-700 border border-gray-300',
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${map[status]}`}>
      {status}
    </span>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
const CompanyPropertyPager = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const filtered = PROPERTIES.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.id.toLowerCase().includes(search.toLowerCase())
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

        {/* ── Properties Table ── */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Table Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-base font-semibold text-gray-900">All Listed Properties</h2>
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
              <tr className="bg-gray-50 text-gray-500 text-xs font-medium uppercase tracking-wide">
                <th className="px-6 py-3 text-left">ID</th>
                <th className="px-6 py-3 text-left">Property</th>
                <th className="px-6 py-3 text-left">Realtor</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Performance</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((property, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  {/* ID */}
                  <td className="px-6 py-4 text-gray-500 font-medium">{property.id}</td>

                  {/* Property */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                      />
                        <a href={`/company/property-details/${property.id}`} className="font-medium text-gray-800 hover:underline">
                        {property.name}
                        </a>
                    </div>
                  </td>

                  {/* Realtor */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={property.realtor.avatar}
                        alt={property.realtor.name}
                        className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                      />
                      <span className="text-gray-700">{property.realtor.name}</span>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4 text-gray-600">{property.category}</td>

                  {/* Price */}
                  <td className="px-6 py-4 text-gray-800 font-medium">{property.price}</td>

                  {/* Performance */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-green-600">
                        <Eye className="w-4 h-4" />
                        <span className="font-medium">{property.performance.views}</span>
                      </span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <MessageCircle className="w-4 h-4" />
                        <span className="font-medium">{property.performance.comments}</span>
                      </span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <StatusBadge status={property.status} />
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

export default CompanyPropertyPager;
