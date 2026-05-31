import { useState, useRef, useEffect } from 'react';
import {
  Search, SlidersHorizontal, MoreVertical, Eye, Trash2, Plus,
  Download, MapPin, BedDouble, Bath, Car, ChevronRight, MessageCircle, Phone
} from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// ─────────────────────────────────────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────────────────────────────────────
type CompanyTab = 'All companies' | 'New Entries' | 'Active' | 'Suspended';
type CompanyStatus = 'Active' | 'Inactive' | 'Pending' | 'Suspended';
type PageView = 'list' | 'details';

interface Company {
  id: string;
  companyId: string;
  name: string;
  logo: string;
  contactPerson: string;
  email: string;
  phone: string;
  properties: number;
  realtorCount: number;
  dateRegistered: string;
  status: CompanyStatus;
  housebankId: string;
  registrationDate: string;
  specialization: string;
  location: string;
  verifiedStatus: 'Verified' | 'Pending' | 'Suspended';
}

const COMPANIES: Company[] = [
  { id:'1', companyId:'HB001', name:'Dole',          logo:'https://randomuser.me/api/portraits/men/32.jpg',  contactPerson:'Robert Fox',       email:'contact@efab.com',       phone:'+2349075616876', properties:56, realtorCount:15, dateRegistered:'4/4/18',   status:'Active', housebankId:'AD0011243', registrationDate:'20/02/2006', specialization:'Residential, Commercial, Luxury, etc.', location:'5th Avenue Gwarimpa Abuja', verifiedStatus:'Verified' },
  { id:'2', companyId:'HB002', name:'Bilaad',        logo:'https://randomuser.me/api/portraits/men/44.jpg',  contactPerson:'Esther Howard',    email:'support@bilaad.ng',      phone:'+2349075616877', properties:46, realtorCount:12, dateRegistered:'8/15/17',  status:'Active', housebankId:'AD0011244', registrationDate:'10/05/2010', specialization:'Residential, Commercial',                location:'4th Avenue Victoria Island',  verifiedStatus:'Verified' },
  { id:'3', companyId:'HB003', name:'Castle Realty', logo:'https://randomuser.me/api/portraits/men/52.jpg',  contactPerson:'Courtney Henry',   email:'info@castlerealty.ng',   phone:'+2349075616878', properties:63, realtorCount:12, dateRegistered:'5/19/12',  status:'Active', housebankId:'AD0011245', registrationDate:'15/08/2008', specialization:'Luxury, Commercial',                    location:'Lekki Phase 1, Lagos',        verifiedStatus:'Verified' },
  { id:'4', companyId:'HB004', name:'Castle Realty', logo:'https://randomuser.me/api/portraits/men/60.jpg',  contactPerson:'Jacob Jones',      email:'info@castlerealty.ng',   phone:'+2349075616879', properties:43, realtorCount:22, dateRegistered:'8/30/14',  status:'Active', housebankId:'AD0011246', registrationDate:'22/11/2012', specialization:'Residential, Investment',                location:'Ikeja GRA, Lagos',            verifiedStatus:'Verified' },
  { id:'5', companyId:'HB005', name:'Castle Realty', logo:'https://randomuser.me/api/portraits/men/65.jpg',  contactPerson:'Jacob Jones',      email:'info@castlerealty.ng',   phone:'+2349075616880', properties:43, realtorCount:22, dateRegistered:'8/30/14',  status:'Active', housebankId:'AD0011247', registrationDate:'01/03/2014', specialization:'Commercial, Luxury',                    location:'Wuse 2, Abuja',               verifiedStatus:'Verified' },
  { id:'6', companyId:'HB006', name:'Castle Realty', logo:'https://randomuser.me/api/portraits/men/71.jpg',  contactPerson:'Jacob Jones',      email:'info@castlerealty.ng',   phone:'+2349075616881', properties:43, realtorCount:22, dateRegistered:'8/30/14',  status:'Active', housebankId:'AD0011248', registrationDate:'07/07/2015', specialization:'Residential',                           location:'Maitama, Abuja',              verifiedStatus:'Verified' },
  { id:'7', companyId:'HB007', name:'Castle Realty', logo:'https://randomuser.me/api/portraits/men/83.jpg',  contactPerson:'Leslie Alexander', email:'info@castlerealty.ng',   phone:'+2349075616882', properties:52, realtorCount:21, dateRegistered:'5/7/16',   status:'Active', housebankId:'AD0011249', registrationDate:'12/09/2016', specialization:'All categories',                        location:'Garki, Abuja',                verifiedStatus:'Pending' },
];

const COMPANY_REALTORS = [
  { name:'Abubakar Isa', avatar:'https://randomuser.me/api/portraits/men/32.jpg', properties:202 },
  { name:'Seman Ilesa',  avatar:'https://randomuser.me/api/portraits/men/44.jpg', properties:170 },
  { name:'Micheal Solomon', avatar:'https://randomuser.me/api/portraits/men/52.jpg', properties:120 },
  { name:'Joseph Michael', avatar:'https://randomuser.me/api/portraits/men/60.jpg', properties:17 },
  { name:'Lex Luthor',   avatar:'https://randomuser.me/api/portraits/men/65.jpg', properties:1 },
  { name:'Habigail Elijah', avatar:'https://randomuser.me/api/portraits/women/44.jpg', properties:1 },
  { name:'Damon Sultan', avatar:'https://randomuser.me/api/portraits/men/71.jpg', properties:1 },
  { name:'Dusin Samstan', avatar:'https://randomuser.me/api/portraits/men/83.jpg', properties:1 },
  { name:'Ayo Samuel',   avatar:'https://randomuser.me/api/portraits/men/11.jpg', properties:1 },
];

const COMPANY_CUSTOMERS = [
  { name:'Abubakar Isa', avatar:'https://randomuser.me/api/portraits/men/32.jpg', label:'1 Investment',        color:'text-orange-500' },
  { name:'Seman Ilesa',  avatar:'https://randomuser.me/api/portraits/men/44.jpg', label:'2 Rented  properties',color:'text-green-600'  },
  { name:'Micheal Solomon', avatar:'https://randomuser.me/api/portraits/men/52.jpg', label:'1 Building',      color:'text-blue-500'   },
  { name:'Joseph Michael', avatar:'https://randomuser.me/api/portraits/men/60.jpg', label:'2 investment',    color:'text-orange-500' },
  { name:'Lex Luthor',   avatar:'https://randomuser.me/api/portraits/men/65.jpg', label:'1 Land',             color:'text-green-600'  },
  { name:'Habigail Elijah', avatar:'https://randomuser.me/api/portraits/women/44.jpg', label:'3 Buildings',   color:'text-blue-500'   },
  { name:'Habigail Elijah', avatar:'https://randomuser.me/api/portraits/women/55.jpg', label:'1 Building',    color:'text-blue-500'   },
];

const COMPANY_PROPERTIES = Array.from({ length: 7 }, (_, i) => ({
  id: `p${i}`,
  image: [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&q=60',
    'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=200&q=60',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=200&q=60',
    'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=200&q=60',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=200&q=60',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=60',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=200&q=60',
  ][i],
  name: 'Rendez House Bay',
  price: 'N250,000',
  location: 'Lagos, Nigeria',
}));

// ─────────────────────────────────────────────────────────────────────────────
// Status Badge (list)
// ─────────────────────────────────────────────────────────────────────────────
const StatusBadge = ({ status }: { status: CompanyStatus }) => {
  const map: Record<CompanyStatus, string> = {
    Active:    'border border-blue-300 text-blue-500',
    Inactive:  'border border-orange-300 text-orange-500',
    Pending:   'border border-gray-300 text-gray-500',
    Suspended: 'border border-red-400 text-red-500',
  };
  return <span className={`px-3 py-1 rounded-full text-xs font-medium bg-white ${map[status]}`}>{status}</span>;
};

// ─────────────────────────────────────────────────────────────────────────────
// Add Company Modal
// ─────────────────────────────────────────────────────────────────────────────
const AddCompanyModal = ({ onClose }: { onClose: () => void }) => {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', address: '', cac: '' });
  const set = (k: keyof typeof form) => (v: string) => setForm(p => ({ ...p, [k]: v }));

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://housebank.com/join/company').catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (sent) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
        <div className="bg-white rounded-2xl shadow-2xl w-[440px] px-10 py-14 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg mb-5">
            <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Request Sent</h3>
          <p className="text-sm text-gray-400">You have successfully sent request to <span className="font-medium text-gray-600">{form.name || 'the company'}</span> to join your team</p>
          <button onClick={onClose} className="mt-6 px-8 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg">Done</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-[640px] overflow-hidden">
        <div className="px-7 pt-6 pb-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Add Company</h2>
              <p className="text-xs text-gray-400 mt-0.5">Share link to company</p>
            </div>
            <button onClick={handleCopyLink} className="flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-700 font-medium">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
              {copied ? 'Copied!' : 'Copy link to company'}
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200" />
        <div className="px-7 py-6 space-y-5 bg-gray-50">
          <h3 className="text-sm font-bold text-gray-900">Manually Add Company</h3>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5"><label className="text-sm font-medium text-gray-700">Company's Name</label><input type="text" placeholder="Value" value={form.name} onChange={e => set('name')(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300" /></div>
            <div className="flex flex-col gap-1.5"><label className="text-sm font-medium text-gray-700">Email</label><input type="email" placeholder="Value" value={form.email} onChange={e => set('email')(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300" /></div>
            <div className="flex flex-col gap-1.5"><label className="text-sm font-medium text-gray-700">Company's Address</label><input type="text" placeholder="Value" value={form.address} onChange={e => set('address')(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300" /></div>
            <div className="flex flex-col gap-1.5"><label className="text-sm font-medium text-gray-700">CAC Number</label><input type="text" placeholder="Value" value={form.cac} onChange={e => set('cac')(e.target.value)} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300" /></div>
          </div>
          <div className="flex items-center justify-center gap-4 pt-2">
            <button onClick={() => setSent(true)} className="px-12 py-3 bg-gray-900 hover:bg-black text-white text-sm font-medium rounded-xl transition-colors">Send Invite</button>
            <button onClick={onClose} className="px-12 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Company Details Page (Image 1)
// ─────────────────────────────────────────────────────────────────────────────
const CompanyDetailsPage = ({ company, onBack }: { company: Company; onBack: () => void }) => {
  const [realtorSearch, setRealtorSearch] = useState('');
  const [customerSearch, setCustomerSearch] = useState('');
  const [propSearch, setPropSearch] = useState('');

  const filteredRealtors = COMPANY_REALTORS.filter(r => r.name.toLowerCase().includes(realtorSearch.toLowerCase()));
  const filteredCustomers = COMPANY_CUSTOMERS.filter(c => c.name.toLowerCase().includes(customerSearch.toLowerCase()));

  return (
    <div className="flex flex-col h-full">
      <CustomerHeader />
      <main className="flex-1 p-6 bg-white overflow-auto space-y-8">

        {/* Company header */}
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-gray-400 hover:text-gray-600 text-sm">←</button>
          <img src={company.logo} alt={company.name} className="w-8 h-8 rounded-full object-cover" />
          <h1 className="text-xl font-bold text-gray-900">{company.name} Real Estate Company</h1>
        </div>

        {/* ── Two-column: Contact Info + Documents ── */}
        <div className="flex gap-10">
          {/* Contact Information */}
          <div className="flex-1 space-y-3">
            <h2 className="text-base font-bold text-gray-900">Contact Information</h2>
            {[
              ['Contact Person:', company.contactPerson],
              ["Company's Phone Number:", company.phone],
              ['Email:', company.email],
              ['Housebank Id :', company.housebankId],
              ['Registration Date:', company.registrationDate],
              ['Specialization:', company.specialization],
              ['Location:', company.location],
            ].map(([label, value]) => (
              <div key={label} className="flex items-start justify-between">
                <span className="text-sm text-gray-400 flex-shrink-0">{label}</span>
                <span className="text-sm text-gray-700 text-right ml-4 max-w-xs">{value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Status:</span>
              <span className="px-4 py-0.5 rounded-full border border-green-400 text-green-600 text-xs font-medium">
                {company.verifiedStatus}
              </span>
            </div>
          </div>

          {/* Company's Document */}
          <div className="w-72 flex-shrink-0 space-y-4">
            <h2 className="text-base font-bold text-gray-900">Company's Document</h2>
            <div className="space-y-3">
              {[
                ['Identification Card', 'Download  ID Card'],
                ['CAC Certificate', 'Certificate of CAC'],
              ].map(([label, btnText]) => (
                <div key={label} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{label}</span>
                  <button className="flex items-center gap-1.5 px-4 py-1.5 border border-gray-200 rounded-full text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    <Download className="w-3.5 h-3.5" />{btnText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Company Realtors ── */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-gray-900">Company Realtors</h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5" />
                <input type="text" placeholder="Search here..." value={realtorSearch} onChange={e => setRealtorSearch(e.target.value)}
                  className="pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-green-500 w-44" />
              </div>
              <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50"><SlidersHorizontal className="w-3.5 h-3.5 text-gray-500" /></button>
              <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">See all <ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {filteredRealtors.map((r, i) => (
              <div key={i} className="flex-shrink-0 flex flex-col items-center gap-2 w-28">
                <img src={r.avatar} alt={r.name} className="w-16 h-16 rounded-full object-cover" />
                <p className="text-xs font-medium text-gray-800 text-center">{r.name}</p>
                <p className="text-xs font-semibold text-orange-500">{r.properties} Properties</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Customers ── */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-gray-900">Customers</h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5" />
                <input type="text" placeholder="Search here..." value={customerSearch} onChange={e => setCustomerSearch(e.target.value)}
                  className="pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-green-500 w-44" />
              </div>
              <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50"><SlidersHorizontal className="w-3.5 h-3.5 text-gray-500" /></button>
              <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">See all <ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {filteredCustomers.map((c, i) => (
              <div key={i} className="flex-shrink-0 bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center gap-2 w-36 shadow-sm">
                <img src={c.avatar} alt={c.name} className="w-16 h-16 rounded-full object-cover" />
                <p className="text-xs font-medium text-gray-800 text-center">{c.name}</p>
                <p className={`text-xs font-semibold text-center ${c.color}`}>{c.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Properties ── */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-bold text-gray-900">Properties</h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5" />
                <input type="text" placeholder="Search here..." value={propSearch} onChange={e => setPropSearch(e.target.value)}
                  className="pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-green-500 w-44" />
              </div>
              <button className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50"><SlidersHorizontal className="w-3.5 h-3.5 text-gray-500" /></button>
              <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">See all <ChevronRight className="w-4 h-4" /></button>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {COMPANY_PROPERTIES.map((prop, i) => (
              <div key={i} className="flex-shrink-0 w-44 rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="relative h-28">
                  <img src={prop.image} alt={prop.name} className="w-full h-full object-cover" />
                  <button className="absolute top-2 right-2 w-6 h-6 bg-white/80 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </button>
                </div>
                <div className="p-2.5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-900 truncate">{prop.name}</span>
                    <span className="text-xs font-bold text-gray-700 ml-1">{prop.price}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <MapPin className="w-2.5 h-2.5" /><span className="text-xs">{prop.location}</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-tight line-clamp-2">A beautiful house that resonates the beauty of lagos, affordable and friendly environment</p>
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <span className="flex items-center gap-0.5"><BedDouble className="w-2.5 h-2.5" />3</span>
                    <span className="flex items-center gap-0.5"><Bath className="w-2.5 h-2.5" />3</span>
                    <span className="flex items-center gap-0.5"><Car className="w-2.5 h-2.5" />3</span>
                    <span>🏠 3</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
const AdminManageCompanies = () => {
  const [activeTab, setActiveTab]         = useState<CompanyTab>('All companies');
  const [search, setSearch]               = useState('');
  const [currentPage, setCurrentPage]     = useState(1);
  const [pageView, setPageView]           = useState<PageView>('list');
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [actionMenu, setActionMenu]       = useState<{ id: string; x: number; y: number } | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<Company | null>(null);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [showAddCompany, setShowAddCompany] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const totalPages = 5;

  const tabs: { label: string; key: CompanyTab; count: number }[] = [
    { label: 'All companies', key: 'All companies', count: 342 },
    { label: 'New Entries',   key: 'New Entries',   count: 45  },
    { label: 'Active',        key: 'Active',         count: 30  },
    { label: 'Suspended',     key: 'Suspended',      count: 15  },
  ];

  useEffect(() => {
    const h = (e: MouseEvent) => { if (menuRef.current && !menuRef.current.contains(e.target as Node)) setActionMenu(null); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const filtered = COMPANIES.filter(c => {
    const q = search.toLowerCase();
    const matchSearch = c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q) || c.contactPerson.toLowerCase().includes(q);
    const matchTab =
      activeTab === 'All companies' ? true :
      activeTab === 'New Entries'   ? c.status === 'Pending' :
      activeTab === 'Active'        ? c.status === 'Active' :
      activeTab === 'Suspended'     ? c.status === 'Suspended' : true;
    return matchSearch && matchTab;
  });

  const openMenu = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setActionMenu({ id, x: rect.right, y: rect.bottom });
  };

  const handleDelete = () => {
    setShowDeleteConfirm(null);
    setDeleteSuccess(true);
    setTimeout(() => setDeleteSuccess(false), 3000);
  };

  // Sub view
  if (pageView === 'details' && selectedCompany) {
    return <CompanyDetailsPage company={selectedCompany} onBack={() => setPageView('list')} />;
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
            <button onClick={() => setShowAddCompany(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
              <Plus className="w-4 h-4" />Add Company
            </button>
          </div>

          {/* Table card */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Tabs + Search */}
            <div className="flex items-center border-b border-gray-100">
              <div className="flex flex-1 overflow-x-auto px-2">
                {tabs.map(({ label, key, count }) => (
                  <button key={key} onClick={() => { setActiveTab(key); setCurrentPage(1); }}
                    className={`px-5 py-3.5 text-sm font-medium transition-colors relative whitespace-nowrap ${activeTab === key ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}>
                    {label} ({count})
                    {activeTab === key && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-t" />}
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
              <table className="w-full text-sm min-w-[900px]">
                <thead>
                  <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                    <th className="px-6 py-3 text-left">Company ID</th>
                    <th className="px-6 py-3 text-left">Company</th>
                    <th className="px-6 py-3 text-left">Contact Person</th>
                    <th className="px-6 py-3 text-left">Email</th>
                    <th className="px-6 py-3 text-left">Properties</th>
                    <th className="px-6 py-3 text-left">Realtor Count</th>
                    <th className="px-6 py-3 text-left">Date Registered</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {filtered.length === 0 ? (
                    <tr><td colSpan={9} className="px-6 py-20 text-center text-gray-400 text-sm">No companies found</td></tr>
                  ) : filtered.map(company => (
                    <tr key={company.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-500 font-medium">{company.companyId}</td>
                      <td className="px-6 py-4 font-medium text-gray-800">{company.name}</td>
                      <td className="px-6 py-4 text-gray-600">{company.contactPerson}</td>
                      <td className="px-6 py-4 text-gray-500 text-xs">{company.email}</td>
                      <td className="px-6 py-4 text-gray-700 font-medium text-center">{company.properties}</td>
                      <td className="px-6 py-4 text-gray-700 font-medium text-center">{company.realtorCount}</td>
                      <td className="px-6 py-4 text-gray-500">{company.dateRegistered}</td>
                      <td className="px-6 py-4"><StatusBadge status={company.status} /></td>
                      <td className="px-6 py-4 relative">
                        <button onClick={e => openMenu(e, company.id)} className="p-1 hover:bg-gray-100 rounded-md transition-colors">
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
            onClick={() => { const c = COMPANIES.find(x => x.id === actionMenu.id)||null; if(c){ setSelectedCompany(c); setPageView('details'); } setActionMenu(null); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50">
            <Eye className="w-4 h-4 text-gray-400" />View Details
          </button>
          <button
            onClick={() => { const c = COMPANIES.find(x => x.id === actionMenu.id)||null; setShowDeleteConfirm(c); setActionMenu(null); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 border-t border-gray-50">
            <Trash2 className="w-4 h-4 text-gray-400" />Delete
          </button>
        </div>
      )}

      {/* Delete Confirm */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
          <div className="bg-white rounded-2xl shadow-2xl w-[400px] p-6 space-y-4 text-center">
            <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto"><Trash2 className="w-7 h-7 text-red-500" /></div>
            <h2 className="text-base font-bold text-gray-900">Delete Company?</h2>
            <p className="text-sm text-gray-400">Are you sure you want to remove <span className="font-semibold text-gray-700">{showDeleteConfirm.name}</span>?</p>
            <div className="flex gap-3 pt-2">
              <button onClick={handleDelete} className="flex-1 py-3 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg">Delete</button>
              <button onClick={() => setShowDeleteConfirm(null)} className="flex-1 py-3 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Success Toast */}
      {deleteSuccess && (
        <div className="fixed top-6 right-6 z-50 bg-green-600 text-white text-sm font-medium px-5 py-3 rounded-xl shadow-lg">
          ✓ Company deleted successfully
        </div>
      )}

      {/* Add Company Modal */}
      {showAddCompany && <AddCompanyModal onClose={() => setShowAddCompany(false)} />}
    </>
  );
};

export default AdminManageCompanies;
