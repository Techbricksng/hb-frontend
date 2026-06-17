import { useState } from 'react';
import { Plus, ChevronRight } from 'lucide-react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, Tooltip, PieChart, Pie, Cell, Legend
} from 'recharts';
import CustomerHeader from './CustomerHeader';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const TREND_DATA = [
  { month: 'Jan', value: 520 },
  { month: 'Feb', value: 530 },
  { month: 'Mar', value: 610 },
  { month: 'Apr', value: 680 },
  { month: 'May', value: 720 },
  { month: 'Jun', value: 748 },
  { month: 'Jul', value: 752 },
];

const DONUT_DATA = [
  { name: 'Prime Estate', value: 65, color: '#2563eb' },
  { name: 'Efab',         value: 30, color: '#15803d' },
  { name: 'Adrons Home',  value: 25, color: '#fb923c' },
];

const ACTIVITIES = [
  {
    category: 'Company',
    time: '11:45am',
    description: 'Prime Estate signed up',
    date: '27/04/2025',
  },
  {
    category: 'Agent',
    time: '11:00am',
    description: 'Michael Adesina listed a new property: "4-Bedroom Duplex in Lekki"',
    date: '27/04/2025',
  },
  {
    category: 'Customer',
    time: '10:45am',
    description: 'Chiamaka Oke sent an inquiry about "Banana Island Luxury Home"',
    date: '27/04/2025',
  },
];

const PROPERTIES = [
  {
    name: 'Lexury Apartment',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=120&q=70',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    company: 'Efab',
    price: '₦120M',
    agent: 'Wade Warren',
    category: 'Buy',
    status: 'Available',
  },
  {
    name: 'Lexury Apartment',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=120&q=70',
    address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    company: 'Bilaad',
    price: '₦4.5M/year',
    agent: 'Cameron Williamson',
    category: 'Rent',
    status: 'Available',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Stat Card
// ─────────────────────────────────────────────────────────────────────────────
const StatCard = ({
  title, value, iconBg, icon, change, changeColor = 'text-green-600',
}: {
  title: string; value: string; iconBg: string; icon: React.ReactNode;
  change: string; changeColor?: string;
}) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3 flex-1 min-w-0">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-gray-500">{title}</span>
      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${iconBg}`}>{icon}</div>
    </div>
    <p className="text-3xl font-bold text-gray-900 leading-tight">{value}</p>
    <p className={`text-xs font-medium ${changeColor}`}>{change}</p>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Custom donut label
// ─────────────────────────────────────────────────────────────────────────────
const DonutLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  const pct = Math.round(percent * 100);
  if (pct < 10) return null;
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={700}>
      {pct}%
    </text>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
const AdminOverview = () => {
  const [showAddCompany, setShowAddCompany] = useState(false);

  return (
    <div className="flex flex-col h-full">
      <CustomerHeader />

      <main className="flex-1 p-6 bg-gray-50 overflow-auto space-y-6">

        {/* ── Title row ── */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-gray-400">Hello John Isa</p>
            <h1 className="text-2xl font-bold text-gray-900">Good Morning</h1>
          </div>
          <button
            onClick={() => setShowAddCompany(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Company
          </button>
        </div>

        {/* ── 5 Stat cards ── */}
        <div className="flex gap-4">
          <StatCard title="Total Properties" value="1500" iconBg="bg-blue-100"
            icon={<svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.75L12 3l9 6.75V21H3V9.75z" /></svg>}
            change="+3.5%  vs last month" />
          <StatCard title="Companies" value="342" iconBg="bg-pink-100"
            icon={<svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3" /></svg>}
            change="+3.5%  vs last month" />
          <StatCard title="Total Realtor" value="1,230" iconBg="bg-orange-100"
            icon={<svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
            change="+3.5%  vs last month" />
          <StatCard title="Total  Customers" value="5,430" iconBg="bg-orange-100"
            icon={<svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
            change="+5%  vs last month" />
          <StatCard title="Platform Growth" value="+12%" iconBg="bg-green-100"
            icon={<svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>}
            change="+3.5%  vs last month" />
        </div>

        {/* ── Charts + Activity row ── */}
        <div className="flex gap-5">

          {/* Properties Listed Trend */}
          <div className="flex-[1.4] bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <h2 className="text-sm font-bold text-gray-900 mb-4">Properties Listed Trend</h2>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={TREND_DATA}>
                <defs>
                  <linearGradient id="trendGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#16a34a" stopOpacity={0.18} />
                    <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#f0f0f0" strokeDasharray="4 4" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#9ca3af' }} />
                <YAxis
                  axisLine={false} tickLine={false}
                  tick={{ fontSize: 11, fill: '#9ca3af' }}
                  domain={[0, 780]}
                  ticks={[0, 520, 610, 680, 750, 752]}
                  width={36}
                />
                <Tooltip formatter={(v: number) => [v, 'Properties']} contentStyle={{ borderRadius: 8, fontSize: 12 }} />
                <Area
                  type="monotone" dataKey="value"
                  stroke="#16a34a" strokeWidth={2.5}
                  fill="url(#trendGrad)"
                  dot={{ r: 5, fill: '#16a34a', stroke: '#fff', strokeWidth: 2 }}
                  activeDot={{ r: 7, fill: '#16a34a', stroke: '#fff', strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Top Performing Companies */}
          <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col">
            <h2 className="text-sm font-bold text-gray-900 mb-3">Top Performing Companies</h2>
            <div className="flex flex-col items-center flex-1 justify-center">
              <PieChart width={200} height={180}>
                <Pie
                  data={DONUT_DATA} cx={100} cy={90}
                  innerRadius={52} outerRadius={88}
                  dataKey="value" labelLine={false}
                  label={DonutLabel}
                  startAngle={90} endAngle={-270}
                >
                  {DONUT_DATA.map((entry, idx) => (
                    <Cell key={idx} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
              {/* Legend */}
              <div className="space-y-2 w-full mt-2">
                {DONUT_DATA.map(d => (
                  <div key={d.name} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: d.color }} />
                      <span className="text-gray-600">{d.name}</span>
                    </div>
                    <span className="font-medium text-gray-800">{d.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-gray-900">Recent Activites</h2>
              <button className="text-xs text-gray-400 hover:text-gray-600 transition-colors">See all</button>
            </div>
            <div className="space-y-3">
              {ACTIVITIES.map((act, idx) => (
                <div key={idx} className="border border-gray-100 rounded-lg p-3 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-800">{act.category}</span>
                    <span className="text-xs text-gray-400">{act.time}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{act.description}</p>
                  <p className="text-xs text-gray-400">{act.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Recently Added Properties ── */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-base font-bold text-gray-900">Recently Added Properties</h2>
            <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 transition-colors">
              See All <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                <th className="px-6 py-3 text-left">Property</th>
                <th className="px-6 py-3 text-left">Address</th>
                <th className="px-6 py-3 text-left">Company</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Assign Agent</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {PROPERTIES.map((prop, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={prop.image} alt={prop.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                      <span className="font-medium text-gray-800">{prop.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-xs leading-relaxed max-w-[160px]">{prop.address}</td>
                  <td className="px-6 py-4 text-gray-600">{prop.company}</td>
                  <td className="px-6 py-4 text-gray-700 font-medium">{prop.price}</td>
                  <td className="px-6 py-4 text-gray-600">{prop.agent}</td>
                  <td className="px-6 py-4 text-gray-600">{prop.category}</td>
                  <td className="px-6 py-4">
                    <span className="px-4 py-1 rounded-full border border-blue-300 text-blue-500 text-xs font-medium">
                      {prop.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="p-1 hover:bg-gray-100 rounded-md transition-colors">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>

      {/* ── Add Company Modal ── */}
      {showAddCompany && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
          <div className="bg-white rounded-2xl shadow-2xl w-[480px] p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-gray-900">Add Company</h2>
              <button onClick={() => setShowAddCompany(false)} className="p-1.5 hover:bg-gray-100 rounded-lg">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            {[
              ['Company Name', 'e.g Prime Estates'],
              ['Email', 'company@email.com'],
              ['Phone Number', '+234...'],
              ['Address', 'e.g Lagos, Nigeria'],
            ].map(([label, placeholder]) => (
              <div key={label} className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">{label}</label>
                <input type="text" placeholder={placeholder}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              <button onClick={() => setShowAddCompany(false)}
                className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
                Add Company
              </button>
              <button onClick={() => setShowAddCompany(false)}
                className="flex-1 py-3 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminOverview;
