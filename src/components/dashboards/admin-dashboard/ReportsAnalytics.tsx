import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  ResponsiveContainer, Tooltip, Legend,
} from 'recharts';
import CustomerHeader from './CustomerHeader';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const BAR_DATA = [
  { month: 'January',  Company: 15000, Agent: 23000, Customers: 29500 },
  { month: 'February', Company: 14500, Agent: 45000, Customers: 35500 },
  { month: 'March',    Company: 47500, Agent: 43000, Customers: 42000 },
  { month: 'April',    Company:  6000, Agent:  9500, Customers: 44500 },
  { month: 'May',      Company: 23500, Agent: 21500, Customers: 34000 },
  { month: 'June',     Company: 19500, Agent: 46000, Customers: 48000 },
];

// ─────────────────────────────────────────────────────────────────────────────
// Stat Card  (same shape as Overview)
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
// Custom Legend
// ─────────────────────────────────────────────────────────────────────────────
const CustomLegend = () => (
  <div className="flex items-center justify-center gap-6 mt-3">
    {[
      { label: 'Company',   color: '#2563eb' },
      { label: 'Agent',     color: '#15803d' },
      { label: 'Customers', color: '#fca5a5' },
    ].map(({ label, color }) => (
      <div key={label} className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: color }} />
        <span className="text-xs text-gray-500">{label}</span>
      </div>
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
const ReportsAnalytics = () => {
  const [dateRange] = useState('01, Jan - 31, June 2025');

  return (
    <div className="flex flex-col h-full">
      <CustomerHeader />

      <main className="flex-1 p-6 bg-gray-50 overflow-auto space-y-6">

        {/* ── Page title ── */}
        <h1 className="text-2xl font-bold text-gray-900">Reports &amp; Analytics</h1>

        {/* ── 3 Stat cards ── */}
        <div className="flex gap-4">
          <StatCard
            title="Total Users"
            value="257,587"
            iconBg="bg-blue-100"
            icon={
              <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            }
            change="+30%  vs last month"
          />
          <StatCard
            title="Total Properties"
            value="170,000"
            iconBg="bg-orange-100"
            icon={
              <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 9.75L12 3l9 6.75V21H3V9.75z" />
              </svg>
            }
            change="+3.5%  vs last month"
          />
          <StatCard
            title="Total Sold, Rented and Invested"
            value="752"
            iconBg="bg-orange-100"
            icon={
              <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            }
            change="+3.5%  vs last month"
          />
        </div>

        {/* ── Bar Chart card ── */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          {/* Chart header */}
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-bold text-gray-900">Total Users</h2>
            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-500 hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {dateRange}
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <BarChart
              data={BAR_DATA}
              barCategoryGap="30%"
              barGap={3}
            >
              <CartesianGrid vertical={false} stroke="#f0f0f0" strokeDasharray="4 4" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#9ca3af' }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#9ca3af' }}
                tickFormatter={(v) => v === 0 ? '0' : `${v / 1000}k`}
                domain={[0, 52000]}
                ticks={[0, 10000, 20000, 30000, 40000, 50000]}
              />
              <Tooltip
                formatter={(value: number, name: string) => [value.toLocaleString(), name]}
                contentStyle={{ borderRadius: 8, fontSize: 12, border: '1px solid #e5e7eb' }}
                cursor={{ fill: 'rgba(0,0,0,0.04)' }}
              />
              <Bar dataKey="Company"   fill="#2563eb" radius={[3, 3, 0, 0]} />
              <Bar dataKey="Agent"     fill="#15803d" radius={[3, 3, 0, 0]} />
              <Bar dataKey="Customers" fill="#fca5a5" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>

          <CustomLegend />
        </div>

      </main>
    </div>
  );
};

export default ReportsAnalytics;
