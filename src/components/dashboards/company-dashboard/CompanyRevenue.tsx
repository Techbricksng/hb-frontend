// src/components/dashboards/company-dashboard/CompanyRevenue.tsx
import { useState } from 'react';
import { Download, CalendarDays } from 'lucide-react';
import CustomerHeader from './CustomerHeader';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  AreaChart, Area, ReferenceLine
} from 'recharts';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];

const REVENUE_DATA = [
  { month: 'Jan', dark: 12000, light: 8000 },
  { month: 'Feb', dark: 16000, light: 10000 },
  { month: 'Mar', dark: 22000, light: 14000 },
  { month: 'Apr', dark: 28000, light: 18000 },
  { month: 'May', dark: 30000, light: 20000 },
  { month: 'Jun', dark: 0, light: 0 },
  { month: 'Jul', dark: 0, light: 0 },
  { month: 'Aug', dark: 0, light: 0 },
  { month: 'Sep', dark: 0, light: 0 },
  { month: 'Oct', dark: 0, light: 0 },
];

const VALUATION_DATA = [
  { month: 'Jan', value: 20000 },
  { month: 'Feb', value: 120000 },
  { month: 'Mar', value: 210000 },
  { month: 'Apr', value: 310000 },
  { month: 'May', value: 430000 },
  { month: 'Jun', value: 580000 },
  { month: 'Jul', value: 700000 },
  { month: 'Aug', value: 690000 },
  { month: 'Sep', value: 0 },
  { month: 'Oct', value: 0 },
];

// ─────────────────────────────────────────────────────────────────────────────
// Stat Card
// ─────────────────────────────────────────────────────────────────────────────
const StatCard = ({
  title, value, iconBg, icon, highlight = false,
}: {
  title: string; value: string; iconBg: string; icon: React.ReactNode; highlight?: boolean;
}) => (
  <div className={`rounded-xl border p-5 flex flex-col gap-3 flex-1 min-w-0 ${highlight ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-100 shadow-sm'}`}>
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-gray-500">{title}</span>
      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${iconBg}`}>{icon}</div>
    </div>
    <p className="text-3xl font-bold text-gray-900 leading-tight">{value}</p>
    <p className="text-xs text-green-600 font-medium">+3.5%  vs last month</p>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Custom tooltip for area chart
// ─────────────────────────────────────────────────────────────────────────────
const ValuationTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length && payload[0].value > 0) {
    return (
      <div className="bg-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow">
        N{payload[0].value.toLocaleString()}
      </div>
    );
  }
  return null;
};

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
const CompanyRevenue = () => {
  const [exportSuccess, setExportSuccess] = useState(false);

  const handleExport = () => {
    setExportSuccess(true);
    setTimeout(() => setExportSuccess(false), 3000);
  };

  const yFormatter = (v: number) => v === 0 ? 'N20k' : `N${(v / 1000).toFixed(0)}k`;

  return (
    <div className="flex flex-col h-full">
      <CustomerHeader />

      <main className="flex-1 p-6 bg-white overflow-auto space-y-6">

        {/* ── Title + Export button ── */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900">Revenue</h1>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            Export Revenue
          </button>
        </div>

        {/* Export toast */}
        {exportSuccess && (
          <div className="fixed top-6 right-6 z-50 bg-green-600 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-lg flex items-center gap-2 animate-pulse">
            ✓ Export Successful — file downloading...
          </div>
        )}

        {/* ── Stat Cards ── */}
        <div className="flex gap-4">
          <StatCard
            title="No of Properties"
            value="128"
            iconBg="bg-blue-100"
            icon={<svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.75L12 3l9 6.75V21H3V9.75z" /></svg>}
          />
          <StatCard
            title="No of Realtor"
            value="12"
            iconBg="bg-orange-100"
            icon={<svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
          />
          <StatCard
            title="No of Clients"
            value="24"
            iconBg="bg-orange-100"
            icon={<svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
          />
          <StatCard
            title="Revenue Generated"
            value="₦3,250,000"
            iconBg="bg-green-100"
            highlight
            icon={<svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
        </div>

        {/* ── Charts row ── */}
        <div className="flex gap-6">

          {/* Revenue Overview — stacked bar chart */}
          <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-bold text-gray-900">Revenue Overview</h2>
              <div className="flex items-center gap-2 text-xs text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5">
                <CalendarDays className="w-3.5 h-3.5" />
                01, Jan - 31, Mar 2025
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={REVENUE_DATA} barSize={28} barGap={2}>
                <CartesianGrid vertical={false} stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#9ca3af' }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#9ca3af' }}
                  tickFormatter={yFormatter}
                  width={44}
                />
                <Tooltip
                  cursor={{ fill: 'rgba(0,0,0,0.04)' }}
                  formatter={(v: number) => [`N${(v / 1000).toFixed(0)}k`, '']}
                  contentStyle={{ borderRadius: 8, fontSize: 12 }}
                />
                <Bar dataKey="light" stackId="a" fill="#86efac" radius={[0, 0, 0, 0]} />
                <Bar dataKey="dark" stackId="a" fill="#16a34a" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Property Valuation — area chart */}
          <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-sm font-bold text-gray-900">Property Valuation</h2>
              <span className="text-xs text-gray-500 font-medium">Lekki Lagos Nigeria</span>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={VALUATION_DATA}>
                <defs>
                  <linearGradient id="valGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#16a34a" stopOpacity={0.15} />
                    <stop offset="95%" stopColor="#16a34a" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="#f0f0f0" strokeDasharray="4 4" />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#9ca3af' }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: '#9ca3af' }}
                  tickFormatter={() => 'N20k'}
                  width={44}
                />
                <Tooltip content={<ValuationTooltip />} />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#16a34a"
                  strokeWidth={2.5}
                  fill="url(#valGrad)"
                  dot={(props: any) => {
                    if (!props.payload.value) return <g key={props.key} />;
                    return (
                      <circle
                        key={props.key}
                        cx={props.cx}
                        cy={props.cy}
                        r={5}
                        fill="#16a34a"
                        stroke="#fff"
                        strokeWidth={2}
                      />
                    );
                  }}
                  activeDot={{ r: 7, fill: '#16a34a', stroke: '#fff', strokeWidth: 2 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CompanyRevenue;
