import { useState } from 'react';
import { Search, SlidersHorizontal, ChevronUp, ChevronDown } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// ─────────────────────────────────────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────────────────────────────────────
type NotifTab = 'All Notification' | 'Property Updates' | 'Realtor Request' | 'Client Request';

interface Notification {
  id: number;
  title: string;
  body: string;
  time: string;
  tab: NotifTab[];
}

const NOTIFICATIONS: Notification[] = [
  {
    id: 1,
    title: 'Property Transferred',
    body: 'Your property "Luxury Apartment, Downtown" has been successfully transferred.',
    time: '2 mins ago',
    tab: ['All Notification', 'Property Updates'],
  },
  {
    id: 2,
    title: 'Pending Payment',
    body: 'Your invoice for "Apartment Lease Renewal" is due in 3 days.',
    time: '10 mins ago',
    tab: ['All Notification', 'Client Request'],
  },
  {
    id: 3,
    title: 'Realtor Deleted',
    body: 'You have successfully removed Realtor Jane Smith from your account.',
    time: '1 hour ago',
    tab: ['All Notification', 'Realtor Request'],
  },
  {
    id: 4,
    title: 'New Property Listed',
    body: 'A new property "Banana Land Duplex" has been listed by your realtor.',
    time: '2 hours ago',
    tab: ['All Notification', 'Property Updates'],
  },
  {
    id: 5,
    title: 'Client Request Received',
    body: 'A new client has submitted a request to view "Rendez House Bay".',
    time: '3 hours ago',
    tab: ['All Notification', 'Client Request'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Notification Row
// ─────────────────────────────────────────────────────────────────────────────
const NotifRow = ({
  notif,
  expanded,
  onToggle,
  read,
}: {
  notif: Notification;
  expanded: boolean;
  onToggle: () => void;
  read: boolean;
}) => (
  <div
    className={`border-b border-gray-100 last:border-0 transition-colors ${
      !read ? 'bg-gray-50' : 'bg-white'
    }`}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-start justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-start gap-3 flex-1 min-w-0">
        {expanded
          ? <ChevronUp className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
        }
        <div className="flex-1 min-w-0">
          <span className={`text-sm font-semibold ${read ? 'text-gray-500' : 'text-gray-900'}`}>
            {notif.title}
          </span>
          {expanded && notif.body && (
            <p className="text-sm text-gray-400 mt-1 leading-relaxed">{notif.body}</p>
          )}
        </div>
      </div>
      <span className="text-xs text-gray-400 ml-4 flex-shrink-0 mt-0.5">{notif.time}</span>
    </button>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
const CompanyNotifications = () => {
  const [activeTab, setActiveTab] = useState<NotifTab>('All Notification');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<Set<number>>(new Set([2, 3]));
  const [readAll, setReadAll] = useState(false);
  const [read, setRead] = useState<Set<number>>(new Set());

  const tabs: NotifTab[] = ['All Notification', 'Property Updates', 'Realtor Request', 'Client Request'];

  const filtered = NOTIFICATIONS.filter(n => {
    const matchTab = n.tab.includes(activeTab);
    const matchSearch = n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.body.toLowerCase().includes(search.toLowerCase());
    return matchTab && matchSearch;
  });

  const toggleExpand = (id: number) => {
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
    // mark as read when opened
    setRead(prev => new Set(prev).add(id));
  };

  const markAllRead = () => {
    setReadAll(true);
    setRead(new Set(NOTIFICATIONS.map(n => n.id)));
  };

  return (
    <div className="flex flex-col h-full">
      <CustomerHeader />

      <main className="flex-1 p-6 bg-gray-50 overflow-auto">
        {/* ── Title row ── */}
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-bold text-gray-900">Notification</h1>
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
            <button
              onClick={markAllRead}
              className="text-sm text-gray-500 hover:text-gray-700 font-medium px-2 py-1 transition-colors"
            >
              Mark all as read
            </button>
          </div>
        </div>

        {/* ── Tabs ── */}
        <div className="flex border-b border-gray-200 mb-0">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 text-sm font-medium transition-colors relative whitespace-nowrap ${
                activeTab === tab ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-t" />
              )}
            </button>
          ))}
        </div>

        {/* ── Notification list ── */}
        <div className="bg-white rounded-b-xl border border-t-0 border-gray-200 shadow-sm overflow-hidden">
          {filtered.length === 0 ? (
            <div className="py-20 text-center text-gray-400 text-sm">No notifications</div>
          ) : (
            filtered.map(notif => (
              <NotifRow
                key={notif.id}
                notif={notif}
                expanded={expanded.has(notif.id)}
                onToggle={() => toggleExpand(notif.id)}
                read={read.has(notif.id) || readAll}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default CompanyNotifications;
