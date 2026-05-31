import { useState, useRef, useEffect } from 'react';
import { Search, SlidersHorizontal, MoreVertical, Eye, Trash2, Plus } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

type AgentTab = 'All Realtor' | 'New Entries' | 'Verified Realtor' | 'Suspended Realtor';
type AgentStatus = 'Active' | 'Pending' | 'Suspended';
type PageView = 'list' | 'grid';

interface Agent {
  id: string; name: string; avatar: string; company: string; listedProperties: number;
  email: string; phone: string; dateRegistered: string; status: AgentStatus;
  houseBankId: string; closedDeals: number; yearsExp: string; bio: string;
}

const AGENTS: Agent[] = [
  { id:'1',  name:'David Elias',    avatar:'https://randomuser.me/api/portraits/men/32.jpg',    company:'Efab Real Estate Agency',  listedProperties:7,  email:'contact@efab.com',       phone:'(406) 555-0120', dateRegistered:'4/4/18',   status:'Active',    houseBankId:'2015421', closedDeals:15, yearsExp:'2 Years', bio:'Excellence Performer' },
  { id:'2',  name:'Abigail Ibrahim',avatar:'https://randomuser.me/api/portraits/women/55.jpg',  company:'Dole Real Estate Agency',  listedProperties:5,  email:'abigail@dole.com',       phone:'(229) 555-0109', dateRegistered:'8/15/17',  status:'Active',    houseBankId:'2015421', closedDeals:15, yearsExp:'1 Years', bio:'Excellence Performer' },
  { id:'3',  name:'Agnes Ishaya',   avatar:'https://randomuser.me/api/portraits/women/44.jpg',  company:'Efab Real Estate Agency',  listedProperties:3,  email:'agnes@efab.com',         phone:'(208) 555-0112', dateRegistered:'8/16/13',  status:'Active',    houseBankId:'2015421', closedDeals:15, yearsExp:'2 Years', bio:'Excellence Performer' },
  { id:'4',  name:'Azeez Haruna',   avatar:'https://randomuser.me/api/portraits/men/44.jpg',    company:'Efab Real Estate Agency',  listedProperties:4,  email:'azeez@efab.com',         phone:'(629) 555-0129', dateRegistered:'12/4/17',  status:'Active',    houseBankId:'2015421', closedDeals:15, yearsExp:'3 Years', bio:'Excellence Performer' },
  { id:'5',  name:'Amina Umar',     avatar:'https://randomuser.me/api/portraits/women/77.jpg',  company:'Efab Real Estate Agency',  listedProperties:5,  email:'amina@efab.com',         phone:'(319) 555-0115', dateRegistered:'7/27/13',  status:'Active',    houseBankId:'2015421', closedDeals:15, yearsExp:'2 Years', bio:'Excellence Performer' },
  { id:'6',  name:'Okon',           avatar:'https://randomuser.me/api/portraits/men/52.jpg',    company:'Efab Real Estate Agency',  listedProperties:4,  email:'okon@efab.com',          phone:'(319) 555-0116', dateRegistered:'7/27/14',  status:'Active',    houseBankId:'2015421', closedDeals:15, yearsExp:'1 Years', bio:'Excellence Performer' },
  { id:'7',  name:'John Bello',     avatar:'https://randomuser.me/api/portraits/men/60.jpg',    company:'Efab',                     listedProperties:5,  email:'contact@efab.com',       phone:'(406) 555-0120', dateRegistered:'4/4/18',   status:'Active',    houseBankId:'2015422', closedDeals:12, yearsExp:'3 Years', bio:'Excellence Performer' },
  { id:'8',  name:'Amina Yusuf',    avatar:'https://randomuser.me/api/portraits/women/24.jpg',  company:'Bilaad',                   listedProperties:4,  email:'support@bilaad.ng',      phone:'(229) 555-0109', dateRegistered:'8/15/17',  status:'Active',    houseBankId:'2015423', closedDeals:10, yearsExp:'2 Years', bio:'Excellence Performer' },
  { id:'9',  name:'Sarah Johnson',  avatar:'https://randomuser.me/api/portraits/women/12.jpg',  company:'Cosgrowth',                listedProperties:0,  email:'info@cosgrowth.com',     phone:'(208) 555-0112', dateRegistered:'8/16/13',  status:'Pending',   houseBankId:'2015424', closedDeals:0,  yearsExp:'Beginner', bio:'New Entrant' },
  { id:'10', name:'David Obi',      avatar:'https://randomuser.me/api/portraits/men/65.jpg',    company:'eBay',                     listedProperties:5,  email:'info@ebay.com',          phone:'(629) 555-0129', dateRegistered:'12/4/17',  status:'Suspended', houseBankId:'2015425', closedDeals:8,  yearsExp:'4 Years', bio:'Under Review' },
  { id:'11', name:'Agbo Joseph',    avatar:'https://randomuser.me/api/portraits/men/71.jpg',    company:'SwiftHomes',               listedProperties:5,  email:'support@swifthomes.ng',  phone:'(319) 555-0115', dateRegistered:'7/27/13',  status:'Active',    houseBankId:'2015426', closedDeals:20, yearsExp:'5 Years', bio:'Excellence Performer' },
];

const StatusBadge = ({ status }: { status: AgentStatus }) => {
  const map: Record<AgentStatus, string> = {
    Active:    'bg-blue-50 border border-blue-200 text-blue-600',
    Pending:   'bg-orange-50 border border-orange-200 text-orange-500',
    Suspended: 'bg-red-50 border border-red-200 text-red-500',
  };
  return <span className={`px-3 py-1 rounded-full text-xs font-medium ${map[status]}`}>{status}</span>;
};

// ─────────────────────────────────────────────────────────────────────────────
// Realtor Card (Image layout)
// ─────────────────────────────────────────────────────────────────────────────
const RealtorCard = ({ agent }: { agent: Agent }) => (
  <div className="relative pt-10 flex flex-col">
    {/* Floating avatar */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
      <img src={agent.avatar} alt={agent.name}
        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md" />
    </div>
    {/* Card body */}
    <div className="bg-gray-50 rounded-2xl pt-12 pb-5 px-5 flex flex-col items-center gap-2 shadow-sm border border-gray-100 flex-1">
      <h3 className="text-base font-bold text-gray-900">{agent.name}</h3>
      <span className={`px-4 py-0.5 rounded-full border text-xs font-medium ${
        agent.status === 'Active' ? 'border-green-400 text-green-600' :
        agent.status === 'Suspended' ? 'border-red-400 text-red-500' :
        'border-orange-400 text-orange-500'
      }`}>{agent.status}</span>
      <div className="w-full mt-2 space-y-2">
        {[
          ['Company:', agent.company],
          ['HouseBank ID:', agent.houseBankId],
          ['Closed Deals:', agent.closedDeals],
          ['No of Properties:', agent.listedProperties],
          ['Year of Experience:', agent.yearsExp],
          ['Bio / Motivation:', agent.bio],
        ].map(([label, value]) => (
          <div key={String(label)} className="flex items-center justify-between">
            <span className="text-xs text-gray-400">{label}</span>
            <span className="text-xs font-medium text-gray-700 text-right max-w-[55%]">{value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Realtors Grid Page
// ─────────────────────────────────────────────────────────────────────────────
const RealtorsGridPage = ({ agents, onBack }: { agents: Agent[]; onBack: () => void }) => {
  const [search, setSearch] = useState('');
  const filtered = agents.filter(a => a.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="flex flex-col h-full">
      <CustomerHeader />
      <main className="flex-1 p-6 bg-white overflow-auto">
        {/* Title + search */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button onClick={onBack} className="text-gray-400 hover:text-gray-600 text-sm">←</button>
            <h1 className="text-xl font-bold text-gray-900">Realtors ({agents.length})</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input type="text" placeholder="Search here..." value={search} onChange={e => setSearch(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-52" />
            </div>
            <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50">
              <SlidersHorizontal className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* 3-column card grid */}
        <div className="grid grid-cols-3 gap-x-6 gap-y-10">
          {filtered.map(agent => (
            <RealtorCard key={agent.id} agent={agent} />
          ))}
        </div>
      </main>
    </div>
  );
};

// Stat Card
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

const AdminTotalAgent = () => {
  const [activeTab, setActiveTab] = useState<AgentTab>('All Realtor');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageView, setPageView] = useState<PageView>('list');
  const [actionMenu, setActionMenu] = useState<{ id: string; x: number; y: number } | null>(null);
  const [showDelete, setShowDelete] = useState<Agent | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const totalPages = 5;

  const tabCounts = { 'All Realtor': 342, 'New Entries': 45, 'Verified Realtor': 30, 'Suspended Realtor': 15 };
  const tabs = Object.keys(tabCounts) as AgentTab[];

  useEffect(() => {
    const h = (e: MouseEvent) => { if (menuRef.current && !menuRef.current.contains(e.target as Node)) setActionMenu(null); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const filtered = AGENTS.filter(a => {
    const q = search.toLowerCase();
    const matchSearch = a.name.toLowerCase().includes(q) || a.company.toLowerCase().includes(q) || a.email.toLowerCase().includes(q);
    const matchTab =
      activeTab === 'All Realtor'        ? true :
      activeTab === 'New Entries'        ? a.status === 'Pending' :
      activeTab === 'Verified Realtor'   ? a.status === 'Active' :
      activeTab === 'Suspended Realtor'  ? a.status === 'Suspended' : true;
    return matchSearch && matchTab;
  });

  const openMenu = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setActionMenu({ id, x: rect.right, y: rect.bottom });
  };

  // Sub view — grid of realtor cards
  if (pageView === 'grid') {
    return <RealtorsGridPage agents={filtered.length > 0 ? filtered : AGENTS} onBack={() => setPageView('list')} />;
  }

  return (
    <>
      <div className="flex flex-col h-full">
        <CustomerHeader />
        <main className="flex-1 p-6 bg-gray-50 overflow-auto space-y-6">
          {/* Greeting + Add Company */}
          <div className="flex items-start justify-between">
            <div><p className="text-sm text-gray-400">Hello John Isa</p><h1 className="text-2xl font-bold text-gray-900">Good Morning</h1></div>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"><Plus className="w-4 h-4" />Add Company</button>
          </div>

          {/* Stat Cards */}
          <div className="flex gap-4">
            <StatCard title="Total Properties" value="1500" iconBg="bg-blue-100" change="+3.5%  vs last month"
              icon={<svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.75L12 3l9 6.75V21H3V9.75z" /></svg>} />
            <StatCard title="Companies" value="342" iconBg="bg-pink-100" change="+5%  vs last month"
              icon={<svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3" /></svg>} />
            <StatCard title="Total Realtor" value="1,230" iconBg="bg-orange-100" change="+3.5%  vs last month" highlight
              icon={<svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4a4 4 0 11-8 0 4 4 0 018 0z" /></svg>} />
            <StatCard title="Total  Customers" value="5,430" iconBg="bg-orange-100" change="+5%  vs last month"
              icon={<svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} />
            <StatCard title="Platform Growth" value="+12%" iconBg="bg-green-100" change="+3.5%  vs last month"
              icon={<svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>} />
          </div>

          {/* Table card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Tabs + Search */}
            <div className="flex items-center border-b border-gray-100">
              <div className="flex flex-1 px-2">
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
                <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50"><SlidersHorizontal className="w-4 h-4 text-gray-500" /></button>
              </div>
            </div>

            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                  <th className="px-6 py-3 text-left">Realtor</th>
                  <th className="px-6 py-3 text-left">Company</th>
                  <th className="px-6 py-3 text-left">Listed Properties</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">Phone Number</th>
                  <th className="px-6 py-3 text-left">Date Registered</th>
                  <th className="px-6 py-3 text-left">Status</th>
                  <th className="px-6 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.length === 0 ? (
                  <tr><td colSpan={8} className="px-6 py-20 text-center text-gray-400 text-sm">No agents found</td></tr>
                ) : filtered.map(agent => (
                  <tr key={agent.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-800">
                    <div className="flex items-center gap-3">
                      <img src={agent.avatar} alt={agent.name} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                      {agent.name}
                    </div>
                  </td>
                    <td className="px-6 py-4 text-gray-600">{agent.company}</td>
                    <td className="px-6 py-4 text-gray-700 font-medium text-center">{agent.listedProperties}</td>
                    <td className="px-6 py-4 text-gray-500 text-xs">{agent.email}</td>
                    <td className="px-6 py-4 text-gray-600 text-xs">{agent.phone}</td>
                    <td className="px-6 py-4 text-gray-500">{agent.dateRegistered}</td>
                    <td className="px-6 py-4"><StatusBadge status={agent.status} /></td>
                    <td className="px-6 py-4 relative">
                      <button onClick={e => openMenu(e, agent.id)} className="p-1 hover:bg-gray-100 rounded-md"><MoreVertical className="w-4 h-4 text-gray-400" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      {actionMenu && (
        <div ref={menuRef} className="fixed z-40 bg-white rounded-xl shadow-xl border border-gray-100 py-1 w-44"
          style={{ top: actionMenu.y + 4, left: actionMenu.x - 176 }}>
          <button onClick={() => { setPageView('grid'); setActionMenu(null); }} className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50"><Eye className="w-4 h-4 text-gray-400" />View Details</button>
          <button onClick={() => { const a = AGENTS.find(x => x.id === actionMenu.id)||null; setShowDelete(a); setActionMenu(null); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 border-t border-gray-50"><Trash2 className="w-4 h-4 text-gray-400" />Delete</button>
        </div>
      )}
      {showDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
          <div className="bg-white rounded-2xl shadow-2xl w-[400px] p-6 space-y-4 text-center">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto"><Trash2 className="w-7 h-7 text-red-500" /></div>
            <h2 className="text-base font-bold text-gray-900">Delete Realtor?</h2>
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

export default AdminTotalAgent;
