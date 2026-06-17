
import { useState, useRef, useEffect } from 'react';
import { Search, SlidersHorizontal, MessageSquare, Plus, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CustomerHeader from './CustomerHeader';
import { ApproveModal, RejectModal } from './PropertyActionModals';

type TabType = 'New Request' | 'Approved' | 'Rejected';
type ActionMenu = { idx: number; x: number; y: number } | null;

interface PropertyRequest {
  id: string;
  realtor: { name: string; avatar: string };
  property: { name: string; image: string };
  category: 'Buy' | 'Rent' | 'Investment';
  date: string;
  requestReason: string;
}

const REQUESTS: PropertyRequest[] = [
  { id: '#HB111', realtor: { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' }, property: { name: 'Lekki Terrace Home', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=80&q=70' }, category: 'Buy', date: '11/7/16', requestReason: 'List Property' },
  { id: '#HB112', realtor: { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/44.jpg' }, property: { name: '2 Bedroom apartment', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=80&q=70' }, category: 'Rent', date: '4/4/18', requestReason: 'Rent Overdue' },
  { id: '#HB113', realtor: { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/52.jpg' }, property: { name: 'Ajah Mini Flat', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&q=70' }, category: 'Buy', date: '5/27/15', requestReason: 'List Property' },
  { id: '#HB114', realtor: { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/60.jpg' }, property: { name: 'Lexury Apartment', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=80&q=70' }, category: 'Buy', date: '7/11/19', requestReason: 'Repayment Due' },
  { id: '#HB114', realtor: { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/65.jpg' }, property: { name: 'Lexury Apartment', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=80&q=70' }, category: 'Buy', date: '8/16/13', requestReason: 'List Property' },
  { id: '#HB114', realtor: { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/71.jpg' }, property: { name: 'Lexury Apartment', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=80&q=70' }, category: 'Buy', date: '9/23/16', requestReason: 'List Property' },
  { id: '#HB114', realtor: { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/83.jpg' }, property: { name: 'Lexury Apartment', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=80&q=70' }, category: 'Buy', date: '1/15/12', requestReason: 'List Property' },
];

const CompanyPropertyRequests = () => {
  const [activeTab, setActiveTab] = useState<TabType>('New Request');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [actionMenu, setActionMenu] = useState<ActionMenu>(null);
  const [showApprove, setShowApprove] = useState(false);
  const [showReject, setShowReject] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const totalPages = 2;

  const tabs: TabType[] = ['New Request', 'Approved', 'Rejected'];

  const visibleRequests = activeTab === 'New Request'
    ? REQUESTS.filter(r =>
        r.property.name.toLowerCase().includes(search.toLowerCase()) ||
        r.realtor.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  // Close menu on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setActionMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const openMenu = (e: React.MouseEvent, idx: number) => {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setActionMenu({ idx, x: rect.right, y: rect.bottom });
  };

  return (
    <>
      <div className="flex flex-col h-full">
        <CustomerHeader />

        <main className="flex-1 p-6 bg-gray-50 overflow-auto space-y-5">
          {/* Page Title Row */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">All Request</h1>
              <p className="text-xs text-gray-400 mt-0.5">Total No of Request &nbsp;›&nbsp; <span className="font-medium text-gray-600">11</span></p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input type="text" placeholder="Search here..." value={search} onChange={e => setSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-56" />
              </div>
              <button className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
                <SlidersHorizontal className="w-4 h-4 text-gray-500" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
                <MessageSquare className="w-4 h-4 text-gray-500" />
                Request ({activeTab === 'New Request' ? 11 : 0})
              </button>
              <button onClick={() => navigate('/company/add-property')}
                className="flex items-center gap-2 px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
                <Plus className="w-4 h-4" />Add Property
              </button>
            </div>
          </div>

          {/* Tabs + Table */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex border-b border-gray-100">
              {tabs.map(tab => (
                <button key={tab} onClick={() => { setActiveTab(tab); setCurrentPage(1); }}
                  className={`px-8 py-4 text-sm font-medium transition-colors relative ${activeTab === tab ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}>
                  {tab}
                  {activeTab === tab && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800 rounded-t" />}
                </button>
              ))}
            </div>

            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-gray-500 text-xs font-medium">
                  <th className="px-6 py-3 text-left">ID</th>
                  <th className="px-6 py-3 text-left">Realtor</th>
                  <th className="px-6 py-3 text-left">Property</th>
                  <th className="px-6 py-3 text-left">Category</th>
                  <th className="px-6 py-3 text-left">Date</th>
                  <th className="px-6 py-3 text-left">Request Reason</th>
                  <th className="px-6 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {visibleRequests.length > 0 ? (
                  visibleRequests.map((req, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-500 font-medium">{req.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <img src={req.realtor.avatar} alt={req.realtor.name} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                          <span className="text-gray-700">{req.realtor.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={req.property.image} alt={req.property.name} className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
                          <span className="font-medium text-gray-800">{req.property.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-600">{req.category}</td>
                      <td className="px-6 py-4 text-gray-500">{req.date}</td>
                      <td className="px-6 py-4 text-gray-600">{req.requestReason}</td>
                      <td className="px-6 py-4 relative">
                        <button onClick={e => openMenu(e, idx)} className="p-1 hover:bg-gray-100 rounded-md transition-colors">
                          <MoreVertical className="w-4 h-4 text-gray-400" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="px-6 py-32 text-center text-gray-400 text-sm">No Pending Request</td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            {visibleRequests.length > 0 && (
              <div className="flex items-center justify-center gap-1 px-6 py-4 border-t border-gray-100">
                <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm">‹</button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button key={page} onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${currentPage === page ? 'bg-gray-800 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                    {page}
                  </button>
                ))}
                <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm">›</button>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* ── Floating action dropdown ── */}
      {actionMenu && (
        <div
          ref={menuRef}
          className="fixed z-40 bg-white rounded-xl shadow-xl border border-gray-100 py-1 w-40"
          style={{ top: actionMenu.y + 4, left: actionMenu.x - 160 }}
        >
          <button
            onClick={() => { setActionMenu(null); setShowApprove(true); }}
            className="w-full px-4 py-2.5 text-left text-sm text-green-600 font-medium hover:bg-green-50 transition-colors"
          >
            ✓ Approve
          </button>
          <button
            onClick={() => { setActionMenu(null); setShowReject(true); }}
            className="w-full px-4 py-2.5 text-left text-sm text-red-500 font-medium hover:bg-red-50 transition-colors"
          >
            ✕ Reject
          </button>
          <button
            onClick={() => setActionMenu(null)}
            className="w-full px-4 py-2.5 text-left text-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            View Details
          </button>
        </div>
      )}

      {/* ── Modals ── */}
      {showApprove && <ApproveModal onClose={() => setShowApprove(false)} />}
      {showReject && <RejectModal onClose={() => setShowReject(false)} />}
    </>
  );
};

export default CompanyPropertyRequests;
