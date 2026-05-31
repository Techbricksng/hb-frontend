import { useState } from 'react';
import { Search, SlidersHorizontal, MessageCircle, Plus } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// ─────────────────────────────────────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────────────────────────────────────
interface RankedRealtor {
  rank: 1 | 2 | 3;
  name: string;
  avatar: string;
  houseBankId: string;
  totalCustomers: number;
  noOfProperties: number;
  yearOfExperience: string;
  bioMotivation: string;
}

const RANKED_REALTORS: RankedRealtor[] = [
  {
    rank: 1,
    name: 'Solomon Joseph',
    avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
    houseBankId: '2015421',
    totalCustomers: 252,
    noOfProperties: 20,
    yearOfExperience: '3 Years',
    bioMotivation: 'Excellence Performer',
  },
  {
    rank: 2,
    name: 'David Elias',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    houseBankId: '2015421',
    totalCustomers: 120,
    noOfProperties: 20,
    yearOfExperience: '1 Years',
    bioMotivation: 'Excellence Performer',
  },
  {
    rank: 3,
    name: 'Sade Okesola',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    houseBankId: '2015421',
    totalCustomers: 50,
    noOfProperties: 20,
    yearOfExperience: '2 Years',
    bioMotivation: 'Excellence Performer',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Rank Card
// ─────────────────────────────────────────────────────────────────────────────
const RankCard = ({ realtor, elevated }: { realtor: RankedRealtor; elevated?: boolean }) => {
  const isFirst = realtor.rank === 1;

  return (
    <div className={`relative flex flex-col items-center ${elevated ? '-mt-16' : 'mt-8'}`}>
      {/* Avatar + rank badge */}
      <div className="relative mb-[-28px] z-10">
        <img
          src={realtor.avatar}
          alt={realtor.name}
          className={`rounded-full object-cover border-4 border-white shadow-lg ${isFirst ? 'w-24 h-24' : 'w-20 h-20'}`}
        />
        <span className={`absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shadow ${
          isFirst ? 'bg-gray-800' : 'bg-gray-500'
        }`}>
          {realtor.rank}
        </span>
      </div>

      {/* Card body */}
      <div className={`w-72 rounded-2xl pt-10 pb-6 px-6 ${isFirst ? 'bg-green-50 border border-green-100 shadow-md' : 'bg-gray-50 border border-gray-100 shadow-sm'}`}>
        <h3 className={`text-center font-bold mb-4 ${isFirst ? 'text-lg text-gray-900' : 'text-base text-gray-800'}`}>
          {realtor.name}
        </h3>
        <div className="space-y-2.5">
          {[
            ['HouseBank ID', realtor.houseBankId],
            ['Total Customers', realtor.totalCustomers],
            ['No of properties', realtor.noOfProperties],
            ['Year of Experience', realtor.yearOfExperience],
            ['Bio / Motivation', realtor.bioMotivation],
          ].map(([label, value]) => (
            <div key={String(label)} className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{label}</span>
              <span className="text-xs font-medium text-gray-700">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
const CompanyRealtorRanking = () => {
  const [search, setSearch] = useState('');

  // Podium order: rank 2 left, rank 1 center, rank 3 right
  const podiumOrder = [
    RANKED_REALTORS.find(r => r.rank === 2)!,
    RANKED_REALTORS.find(r => r.rank === 1)!,
    RANKED_REALTORS.find(r => r.rank === 3)!,
  ];

  return (
    <div className="flex flex-col h-full">
      <CustomerHeader />

      <main className="flex-1 p-6 bg-gray-50 overflow-auto">
        {/* Page title row */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold text-gray-900">Realtor Ranking</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Total Realtor RANKING &nbsp;›&nbsp; <span className="font-medium text-gray-600">3</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search here..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-56"
              />
            </div>
            <button className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50">
              <SlidersHorizontal className="w-4 h-4 text-gray-500" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
              <MessageCircle className="w-4 h-4 text-gray-500" />
              Request (11)
            </button>
            <button className="flex items-center gap-2 px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
              <Plus className="w-4 h-4" />Add Realtor
            </button>
          </div>
        </div>

        {/* Podium */}
        <div className="flex items-end justify-center gap-6 pt-24 pb-10">
          {podiumOrder.map(realtor => (
            <RankCard
              key={realtor.rank}
              realtor={realtor}
              elevated={realtor.rank === 1}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default CompanyRealtorRanking;
