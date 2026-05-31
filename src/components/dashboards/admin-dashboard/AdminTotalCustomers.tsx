import { useState, useRef, useEffect } from 'react';
import { Search, SlidersHorizontal, MoreVertical, Eye, Trash2, Plus } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

type CustTab = 'All Customers' | 'New Entries' | 'Active Customer' | 'Inactive Accounts';
type CustStatus = 'Active' | 'Inactive';
type PageView = 'list' | 'grid';

interface Customer {
  id: string;
  name: string;
  avatar: string;
  email: string;
  phone: string;
  totalInquiries: number;
  favoritesProperties: number;
  dateRegistered: string;
  status: CustStatus;
  noOfProperties: number;
  typeOfProperties: string;
  company: string;
}

const CUSTOMERS: Customer[] = [
  { id:'1',  name:'David Elias',    avatar:'https://randomuser.me/api/portraits/men/32.jpg',    email:'contact@efab.com',       phone:'+23490548624', totalInquiries:15, favoritesProperties:5, dateRegistered:'4/4/18',  status:'Active',   noOfProperties:2, typeOfProperties:'Investment, Buy,', company:'Efab, Pepsico' },
  { id:'2',  name:'Ronald Richards',avatar:'https://randomuser.me/api/portraits/men/44.jpg',    email:'ronald@efab.com',        phone:'+23490548624', totalInquiries:4,  favoritesProperties:4, dateRegistered:'8/15/17', status:'Active',   noOfProperties:2, typeOfProperties:'Investment, Buy,', company:'Efab, Pepsico' },
  { id:'3',  name:'Jacob Jones',    avatar:'https://randomuser.me/api/portraits/men/52.jpg',    email:'jacob@efab.com',         phone:'+23490548624', totalInquiries:12, favoritesProperties:2, dateRegistered:'8/16/13', status:'Active',   noOfProperties:2, typeOfProperties:'Investment, Buy,', company:'Efab, Pepsico' },
  { id:'4',  name:'Dianne Russell', avatar:'https://randomuser.me/api/portraits/men/60.jpg',    email:'dianne@efab.com',        phone:'+23490548624', totalInquiries:3,  favoritesProperties:3, dateRegistered:'8/30/14', status:'Active',   noOfProperties:2, typeOfProperties:'Investment, Buy,', company:'Efab, Pepsico' },
  { id:'5',  name:'Guy Hawkins',    avatar:'https://randomuser.me/api/portraits/men/65.jpg',    email:'guy@efab.com',           phone:'+23490548624', totalInquiries:4,  favoritesProperties:4, dateRegistered:'3/4/16',  status:'Active',   noOfProperties:2, typeOfProperties:'Investment, Buy,', company:'Efab, Pepsico' },
  { id:'6',  name:'Cody Fisher',    avatar:'https://randomuser.me/api/portraits/women/44.jpg',  email:'cody@efab.com',          phone:'+23490548624', totalInquiries:7,  favoritesProperties:3, dateRegistered:'5/10/15', status:'Active',   noOfProperties:2, typeOfProperties:'Investment, Buy,', company:'Efab, Pepsico' },
  { id:'7',  name:'John Bello',     avatar:'https://randomuser.me/api/portraits/men/71.jpg',    email:'contact@efab.com',       phone:'+23490548624', totalInquiries:15, favoritesProperties:5, dateRegistered:'4/4/18',  status:'Active',   noOfProperties:2, typeOfProperties:'Investment, Buy,', company:'Efab, Pepsico' },
  { id:'8',  name:'Amina Yusuf',    avatar:'https://randomuser.me/api/portraits/women/55.jpg',  email:'support@bilaad.ng',      phone:'+23490548624', totalInquiries:4,  favoritesProperties:4, dateRegistered:'8/15/17', status:'Inactive', noOfProperties:2, typeOfProperties:'Investment, Buy,', company:'Efab, Pepsico' },
  { id:'9',  name:'Sarah Johnson',  avatar:'https://randomuser.me/api/portraits/women/24.jpg',  email:'info@cosgrowth.com',     phone:'+23490548624', totalInquiries:12, favoritesProperties:2, dateRegistered:'8/16/13', status:'Active',   noOfProperties:2, typeOfProperties:'Investment, Buy,', company:'Efab, Pepsico' },
  { id:'10', name:'David Obi',      avatar:'https://randomuser.me/api/portraits/men/83.jpg',    email:'info@castlerealty.ng',   phone:'+23490548624', totalInquiries:3,  favoritesProperties:3, dateRegistered:'8/30/14', status:'Inactive', noOfProperties:2, typeOfProperties:'Investment, Buy,', company:'Efab, Pepsico' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Status Badge
// ─────────────────────────────────────────────────────────────────────────────
const StatusBadge = ({ status }: { status: CustStatus }) => {
  const map: Record<CustStatus, string> = {
    Active:   'bg-blue-50 border border-blue-200 text-blue-600',
    Inactive: 'bg-red-50 border border-red-200 text-red-500',
  };
  return <span className={`px-3 py-1 rounded-full text-xs font-medium ${map[status]}`}>{status}</span>;
};

// ─────────────────────────────────────────────────────────────────────────────
// Stat Card
// ─────────────────────────────────────────────────────────────────────────────
const StatCard = ({ title, value, iconBg, icon, change, highlight }: {
  title: string; value: string; iconBg: string; icon: React.ReactNode; change: string; highlight?: boolean;
}) => (
  <div className={`rounded-xl border p-5 flex flex-col gap-3 flex-1 min-w-0 ${highlight ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-100 shadow-sm'}`}>
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-gray-500">{title}</span>
      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${iconBg}`}>{icon}</div>
    </div>
    <p className="text-3xl font-bold text-gray-900 leading-tight">{value}</p>
    <p className="text-xs font-medium text-green-600">{change}</p>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Customer Card (floating avatar style — matches image exactly)
// ─────────────────────────────────────────────────────────────────────────────
const CustomerCard = ({ customer }: { customer: Customer }) => (
  <div className="relative pt-10 flex flex-col">
    {/* Floating avatar */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
      <img
        src={customer.avatar}
        alt={customer.name}
        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
      />
    </div>
    {/* Card body */}
    <div className="bg-gray-50 rounded-2xl pt-12 pb-5 px-5 flex flex-col items-center gap-2 shadow-sm border border-gray-100 flex-1">
      <h3 className="text-base font-bold text-gray-900">{customer.name}</h3>
      <span className={`px-4 py-0.5 rounded-full border text-xs font-medium ${
        customer.status === 'Active'
          ? 'border-green-400 text-green-600'
          : 'border-red-400 text-red-500'
      }`}>
        {customer.status}
      </span>
      <div className="w-full mt-2 space-y-2">
        {[
          ['Name:',               'Musa Joseph'],
          ['Phone Number:',       customer.phone],
          ['Email Address:',      customer.email],
          ['No of Properties:',   customer.noOfProperties],
          ['Type of Properties:', customer.typeOfProperties],
          ['Company:',            customer.company],
        ].map(([label, value]) => (
          <div key={String(label)} className="flex items-start justify-between">
            <span className="text-xs text-gray-400 flex-shrink-0">{label}</span>
            <span className="text-xs font-medium text-gray-700 text-right ml-2 max-w-[55%]">{value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Customers Grid Page
// ─────────────────────────────────────────────────────────────────────────────
const CustomersGridPage = ({ customers, onBack }: { customers: Customer[]; onBack: () => void }) => {
  const [search, setSearch] = useState('');
  const filtered = customers.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <CustomerHeader />
      <main className="flex-1 p-6 bg-white overflow-auto">
        {/* Title + Search */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button onClick={onBack} className="text-gray-400 hover:text-gray-600 text-sm">←</button>
            <h1 className="text-xl font-bold text-gray-900">Customers ({customers.length})</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search here..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-52"
              />
            </div>
            <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
              <SlidersHorizontal className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-3 gap-x-6 gap-y-10">
          {filtered.map(customer => (
            <CustomerCard key={customer.id} customer={customer} />
          ))}
        </div>
      </main>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
const AdminTotalCustomers = () => {
  const [activeTab, setActiveTab]     = useState<CustTab>('All Customers');
  const [search, setSearch]           = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageView, setPageView]       = useState<PageView>('list');
  const [actionMenu, setActionMenu]   = useState<{ id: string; x: number; y: number } | null>(null);
  const [showDelete, setShowDelete]   = useState<Customer | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const totalPages = 5;

  const tabCounts = {
    'All Customers':    566,
    'New Entries':       55,
    'Active Customer':  355,
    'Inactive Accounts': 54,
  };
  const tabs = Object.keys(tabCounts) as CustTab[];

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setActionMenu(null);
    };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const filtered = CUSTOMERS.filter(c => {
    const q = search.toLowerCase();
    const matchSearch = c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q);
    const matchTab =
      activeTab === 'All Customers'     ? true :
      activeTab === 'New Entries'       ? c.dateRegistered > '8/1/16' :
      activeTab === 'Active Customer'   ? c.status === 'Active' :
      activeTab === 'Inactive Accounts' ? c.status === 'Inactive' : true;
    return matchSearch && matchTab;
  });

  const openMenu = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setActionMenu({ id, x: rect.right, y: rect.bottom });
  };

  // Sub view — grid of customer cards
  if (pageView === 'grid') {
    return (
      <CustomersGridPage
        customers={filtered.length > 0 ? filtered : CUSTOMERS}
        onBack={() => setPageView('list')}
      />
    );
  }

  return (
    <>
      <div className="flex flex-col h-full">
        <CustomerHeader />
        <main className="flex-1 p-6 bg-gray-50 overflow-auto space-y-6">

          {/* Greeting + Add Company */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-400">Hello John Isa</p>
              <h1 className="text-2xl font-bold text-gray-900">Good Morning</h1>
            </div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
              <Plus className="w-4 h-4" />Add Company
            </button>
          </div>

          {/* Stat Cards */}
          <div className="flex gap-4">
            <StatCard title="Total Properties" value="1500" iconBg="bg-blue-100" change="+3.5%  vs last month"
              icon={<svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.75L12 3l9 6.75V21H3V9.75z" /></svg>} />
            <StatCard title="Companies" value="342" iconBg="bg-pink-100" change="+5%  vs last month"
              icon={<svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3" /></svg>} />
            <StatCard title="Total Realtor" value="1,230" iconBg="bg-orange-100" change="+3.5%  vs last month"
              icon={<svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4a4 4 0 11-8 0 4 4 0 018 0z" /></svg>} />
            <StatCard title="Total  Customers" value="5,430" iconBg="bg-orange-100" change="+5%  vs last month" highlight
              icon={<svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} />
            <StatCard title="Platform Growth" value="+12%" iconBg="bg-green-100" change="+3.5%  vs last month"
              icon={<svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>} />
          </div>

          {/* Table card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Tabs + Search */}
            <div className="flex items-center border-b border-gray-100">
              <div className="flex flex-1 px-2 overflow-x-auto">
                {tabs.map(tab => (
                  <button key={tab} onClick={() => { setActiveTab(tab); setCurrentPage(1); }}
                    className={`px-4 py-3.5 text-sm font-medium transition-colors relative whitespace-nowrap ${activeTab === tab ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}>
                    {tab} ({tabCounts[tab]})
                    {activeTab === tab && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-t" />}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 px-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input type="text" placeholder="Search here..." value={search} onChange={e => setSearch(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-48" />
                </div>
                <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
                  <SlidersHorizontal className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[800px]">
                <thead>
                  <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                    <th className="px-6 py-3 text-left">Customer Name</th>
                    <th className="px-6 py-3 text-left">Email</th>
                    <th className="px-6 py-3 text-left">Phone Number</th>
                    <th className="px-6 py-3 text-left">Total Inquiries</th>
                    <th className="px-6 py-3 text-left">Favorites Properties</th>
                    <th className="px-6 py-3 text-left">Date Registered</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.length === 0 ? (
                    <tr><td colSpan={8} className="px-6 py-20 text-center text-gray-400 text-sm">No customers found</td></tr>
                  ) : filtered.map(c => (
                    <tr key={c.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={c.avatar} alt={c.name} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                          <span className="font-medium text-gray-800">{c.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-500 text-xs">{c.email}</td>
                      <td className="px-6 py-4 text-gray-600 text-xs">{c.phone}</td>
                      <td className="px-6 py-4 text-gray-700 font-medium text-center">{c.totalInquiries}</td>
                      <td className="px-6 py-4 text-gray-700 font-medium text-center">{c.favoritesProperties}</td>
                      <td className="px-6 py-4 text-gray-500">{c.dateRegistered}</td>
                      <td className="px-6 py-4"><StatusBadge status={c.status} /></td>
                      <td className="px-6 py-4 relative">
                        <button onClick={e => openMenu(e, c.id)} className="p-1 hover:bg-gray-100 rounded-md">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-1 px-6 py-4 border-t border-gray-100">
              <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm">‹</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button key={page} onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium ${currentPage === page ? 'bg-gray-800 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{page}</button>
              ))}
              <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm">›</button>
            </div>
          </div>
        </main>
      </div>

      {/* 3-dot dropdown */}
      {actionMenu && (
        <div ref={menuRef} className="fixed z-40 bg-white rounded-xl shadow-xl border border-gray-100 py-1 w-44"
          style={{ top: actionMenu.y + 4, left: actionMenu.x - 176 }}>
          <button
            onClick={() => { setPageView('grid'); setActionMenu(null); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50">
            <Eye className="w-4 h-4 text-gray-400" />View Details
          </button>
          <button
            onClick={() => { const c = CUSTOMERS.find(x => x.id === actionMenu.id)||null; setShowDelete(c); setActionMenu(null); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 border-t border-gray-50">
            <Trash2 className="w-4 h-4 text-gray-400" />Delete
          </button>
        </div>
      )}

      {/* Delete Confirm */}
      {showDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
          <div className="bg-white rounded-2xl shadow-2xl w-[400px] p-6 space-y-4 text-center">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto">
              <Trash2 className="w-7 h-7 text-red-500" />
            </div>
            <h2 className="text-base font-bold text-gray-900">Delete Customer?</h2>
            <p className="text-sm text-gray-400">Are you sure you want to remove <span className="font-semibold text-gray-700">{showDelete.name}</span>?</p>
            <div className="flex gap-3 pt-2">
              <button onClick={() => setShowDelete(null)} className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg">Delete</button>
              <button onClick={() => setShowDelete(null)} className="flex-1 py-3 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminTotalCustomers;
