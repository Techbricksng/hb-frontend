import { useState, useRef, useEffect } from 'react';
import {
  Search, SlidersHorizontal, MoreVertical, ChevronDown, Plus,
  Star, MapPin, BedDouble, Bath, Car, MessageCircle, Phone, CheckCircle, Bell
} from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// ─────────────────────────────────────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────────────────────────────────────
type PropTab    = 'All Properties' | 'Active Listing' | 'Sold' | 'Rented' | 'Investment';
type PropStatus = 'Available' | 'Active' | 'Rented' | 'Active Investment' | 'Suspended' | 'Pendeing';
type PageView   = 'list' | 'details' | 'activeListing' | 'success';

interface Property {
  id: string; name: string; image: string; address: string;
  company: string; price: string; assignRealtor: string;
  category: 'Buy' | 'Rent' | 'Invest'; status: PropStatus;
  location?: string; inquiries?: number; dateListed?: string;
}

const PROPERTIES: Property[] = [
  { id:'1', name:'Lexury Apartment', image:'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=120&q=70', address:'2972 Westheimer Rd. Santa Ana, Illinois 85486',      company:'Efab',      price:'₦120M',      assignRealtor:'Wade Warren',       category:'Buy',   status:'Available', location:'Abuja',  inquiries:14, dateListed:'7/18/17' },
  { id:'2', name:'Lexury Apartment', image:'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=120&q=70', address:'2118 Thornridge Cir. Syracuse, Connecticut 35624', company:'Bilaad',    price:'₦4.5M/year', assignRealtor:'Cameron Williamson',category:'Rent',  status:'Available', location:'Lagos',  inquiries:5,  dateListed:'12/4/17' },
  { id:'3', name:'Lexury Apartment', image:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=70', address:'4517 Washington Ave. Manchester, Kentucky 39495',   company:'Cosgrowth', price:'₦150M',      assignRealtor:'Admin',             category:'Invest',status:'Available', location:'Bauchi', inquiries:0,  dateListed:'8/30/14' },
  { id:'4', name:'Lexury Apartment', image:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=120&q=70', address:'4517 Washington Ave. Manchester, Kentucky 39495', company:'eBay',      price:'₦120M',      assignRealtor:'Brooklyn Simmons',  category:'Invest',status:'Available', location:'Lagos',  inquiries:0,  dateListed:'1/15/12' },
  { id:'5', name:'Lexury Apartment', image:'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=120&q=70', address:'2715 Ash Dr. San Jose, South Dakota 83475',       company:'Cosgrowth', price:'₦170M',      assignRealtor:'Guy Hawkins',       category:'Buy',   status:'Suspended', location:'Lagos',  inquiries:12, dateListed:'1/28/17' },
  { id:'6', name:'Factory store',    image:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=120&q=70', address:'2715 Ash Dr. San Jose, South Dakota 83475',       company:'Efab',      price:'₦6.5M/year', assignRealtor:'Robert Fox',        category:'Rent',  status:'Suspended', location:'Lagos',  inquiries:1,  dateListed:'9/18/16' },
  { id:'7', name:'Factory store',    image:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=120&q=70', address:'2715 Ash Dr. San Jose, South Dakota 83475',       company:'Efab',      price:'₦2.5M/year', assignRealtor:'Robert Fox',        category:'Rent',  status:'Pendeing',  location:'Abuja',  inquiries:0,  dateListed:'6/21/19' },
  { id:'8', name:'Factory store',    image:'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=120&q=70', address:'2715 Ash Dr. San Jose, South Dakota 83475',       company:'Efab',      price:'₦4.5M/year', assignRealtor:'Robert Fox',        category:'Rent',  status:'Pendeing',  location:'Abuja',  inquiries:12, dateListed:'6/19/14' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Status Badge
// ─────────────────────────────────────────────────────────────────────────────
const StatusBadge = ({ status }: { status: PropStatus }) => {
  const map: Record<PropStatus, string> = {
    'Available':         'border border-blue-300 text-blue-500',
    'Active':            'border border-green-400 text-green-600',
    'Rented':            'border border-red-400 text-red-500',
    'Active Investment': 'border border-green-400 text-green-600',
    'Suspended':         'border border-red-400 text-red-500',
    'Pendeing':          'border border-orange-400 text-orange-500',
  };
  return <span className={`px-3 py-1 rounded-full text-xs font-medium bg-white ${map[status]}`}>{status}</span>;
};

// ─────────────────────────────────────────────────────────────────────────────
// Contact Panel (reusable for Company + Realtor)
// ─────────────────────────────────────────────────────────────────────────────
const ContactPanel = ({ title, avatar, data }: {
  title: string;
  avatar: string;
  data: { label: string; value: string; isStatus?: boolean }[];
}) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
    <h3 className="text-base font-bold text-gray-900 text-center">{title}</h3>
    <div className="flex flex-col items-center gap-2">
      <img src={avatar} alt={title} className="w-20 h-20 rounded-full object-cover" />
      <div className="flex items-center gap-2 mt-1">
        <button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
          <MessageCircle className="w-4 h-4 text-gray-600" />
        </button>
        <button className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
          <Phone className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
    <div className="space-y-3 pt-1">
      {data.map(({ label, value, isStatus }) => (
        <div key={label} className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{label}</span>
          {isStatus ? (
            <span className="px-4 py-0.5 rounded-full border border-green-400 text-green-600 text-xs font-medium">{value}</span>
          ) : (
            <span className="text-sm font-medium text-gray-800 text-right max-w-[180px]">{value}</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Property Details Page
// ─────────────────────────────────────────────────────────────────────────────
const PropertyDetails = ({ prop, onBack, onLiftSuspension }: {
  prop: Property;
  onBack: () => void;
  onLiftSuspension: () => void;
}) => {
  const isSuspended = prop.status === 'Suspended';
  const [lifted, setLifted] = useState(false);

  const handleLift = () => {
    setLifted(true);
    onLiftSuspension(); // propagate to list
  };

  return (
    <div className="flex flex-col h-full">
      <CustomerHeader />
      <main className="flex-1 p-6 bg-white overflow-auto">

        {/* Lift Suspension button — centered at top, only for suspended */}
        {isSuspended && !lifted && (
          <div className="flex justify-center mb-5">
            <button
              onClick={() => handleLift()}
              className="px-8 py-2.5 bg-gray-900 hover:bg-black text-white text-sm font-medium rounded-lg transition-colors"
            >
              Lift Suspension
            </button>
          </div>
        )}
        {lifted && (
          <div className="flex justify-center mb-5">
            <div className="px-6 py-2 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm font-medium">
              ✓ Suspension lifted successfully
            </div>
          </div>
        )}

        <div className="flex gap-6 items-start">
          {/* ── Left: Property Details ── */}
          <div className="flex-1 min-w-0 bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-5">
            <h2 className="text-base font-bold text-gray-900">Property Details</h2>

            {/* Gallery */}
            <div className="flex gap-3 h-[300px]">
              <div className="flex-[1.6] rounded-xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1582407947304-fd86f28f7e34?w=600&q=80" alt="hero" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-2 flex-[0.9]">
                {[
                  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=70',
                  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&q=70',
                  'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=300&q=70',
                ].map((src, i) => (
                  <div key={i} className="flex-1 rounded-xl overflow-hidden">
                    <img src={src} alt={`g${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Price + Status */}
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-green-600">₦2,250,000</span>
              <StatusBadge status={lifted ? 'Available' : prop.status} />
            </div>

            {/* Name + Rating */}
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-gray-900">Rendez House Bay</h3>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-semibold text-gray-700">4.6</span>
              </div>
            </div>

            {/* Location + Specs */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                <MapPin className="w-4 h-4" /><span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" />3</span>
                <span className="flex items-center gap-1"><Bath className="w-4 h-4" />3</span>
                <span className="flex items-center gap-1"><Car className="w-4 h-4" />3</span>
              </div>
            </div>

            {/* Suspended — Reason block */}
            {isSuspended && !lifted ? (
              <div className="bg-red-50 rounded-xl p-4 space-y-2">
                <h4 className="text-sm font-bold text-gray-900">Reason for Suspending Property</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-gray-900">Property Description</h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                </p>
              </div>
            )}

            <button onClick={onBack} className="text-sm text-gray-400 hover:text-gray-600 transition-colors">← Back to list</button>
          </div>

          {/* ── Right: Company + Realtor ── */}
          <div className="w-72 flex-shrink-0 space-y-5">
            <ContactPanel
              title="Company contact person's Details"
              avatar="https://randomuser.me/api/portraits/men/75.jpg"
              data={[
                { label: 'Full Name',             value: 'Oakwood Luxury Apartment' },
                { label: 'HouseBank Account ID:', value: 'HB2116750' },
                { label: 'Contact Email:',         value: 'infor@efab.com' },
                { label: 'Phone Number:',          value: '+2349900226' },
                { label: 'Status:',               value: 'Active', isStatus: true },
              ]}
            />
            <ContactPanel
              title="Realtor Details"
              avatar="https://randomuser.me/api/portraits/men/44.jpg"
              data={[
                { label: 'Full Name',             value: 'Oakwood Luxury Apartment' },
                { label: 'HouseBank Account ID:', value: 'HB2116750' },
                { label: 'Contact Email:',         value: 'Oakwood@gmail.com' },
                { label: 'Phone Number:',          value: '+2349900226' },
                { label: 'Status:',               value: 'Active', isStatus: true },
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Success State
// ─────────────────────────────────────────────────────────────────────────────
const SuccessState = ({ onDone }: { onDone: () => void }) => (
  <div className="flex flex-col h-full">
    <CustomerHeader />
    <main className="flex-1 flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm w-full max-w-lg px-10 py-14 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg mb-5">
          <CheckCircle className="w-9 h-9 text-white fill-white" strokeWidth={2} />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Successfully Deleted</h3>
        <p className="text-sm text-gray-400">Review Successfully deleted</p>
        <button onClick={onDone} className="mt-6 px-8 py-2.5 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg transition-colors">Done</button>
      </div>
    </main>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Send Notification Modal
// ─────────────────────────────────────────────────────────────────────────────
const SendNotificationModal = ({ prop, onClose }: { prop: Property; onClose: () => void }) => {
  const [sent, setSent] = useState(false);
  const [message, setMessage] = useState('');

  if (sent) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
        <div className="bg-white rounded-2xl shadow-2xl w-[440px] px-10 py-14 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg mb-5">
            <CheckCircle className="w-9 h-9 text-white fill-white" strokeWidth={2} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Notification Sent</h3>
          <p className="text-sm text-gray-400">Your notification has been sent successfully.</p>
          <button onClick={onClose} className="mt-6 px-8 py-2.5 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg">Done</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-[480px] p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-gray-900">Send Notification</h2>
          <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-lg">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <p className="text-sm text-gray-500">Send a notification about <span className="font-medium text-gray-700">{prop.name}</span> to the assigned realtor.</p>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea rows={4} placeholder="Enter your message..." value={message} onChange={e => setMessage(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none" />
        </div>
        <div className="flex gap-3 pt-1">
          <button onClick={() => setSent(true)}
            className="flex-1 py-3 bg-gray-900 hover:bg-black text-white text-sm font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
            <Bell className="w-4 h-4" />Send Notification
          </button>
          <button onClick={onClose} className="flex-1 py-3 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// SOLD TAB — Data & Components
// ─────────────────────────────────────────────────────────────────────────────
interface SoldProperty {
  id: string;
  name: string;
  price: string;
  company: string;
  assignRealtor: string;
  amountPaid: string;
  paymentStatus: 'Completed' | 'Inprogress';
  paymentDuration: string;
  closedDate: string;
}

const SOLD_PROPERTIES: SoldProperty[] = [
  { id:'s1', name:'Studio Apartment, Yaba',    price:'₦120M',   company:'Efab',      assignRealtor:'Wade Warren',       amountPaid:'₦120M',  paymentStatus:'Completed',  paymentDuration:'1 Time',    closedDate:'7/18/17'  },
  { id:'s2', name:'4BR Duplex, Ikeja',         price:'₦4.5M',   company:'Bilaad',    assignRealtor:'Cameron Williamson',amountPaid:'₦4.5M',  paymentStatus:'Completed',  paymentDuration:'6 Months',  closedDate:'12/4/17'  },
  { id:'s3', name:'Land Plot, Ibadan',         price:'₦150M',   company:'Cosgrowth', assignRealtor:'Admin',             amountPaid:'₦110M',  paymentStatus:'Inprogress', paymentDuration:'6 Months',  closedDate:'-'        },
  { id:'s4', name:'Lexury 4BR Duplex, Ikeja',  price:'₦2.5M',   company:'eBay',      assignRealtor:'Brooklyn Simmons',  amountPaid:'₦2.5M',  paymentStatus:'Completed',  paymentDuration:'12 Months', closedDate:'1/15/12'  },
  { id:'s5', name:'Lexury 4BR Duplex, Ikeja',  price:'₦4.5M',   company:'Cosgrowth', assignRealtor:'Guy Hawkins',       amountPaid:'₦2M',    paymentStatus:'Inprogress', paymentDuration:'3 Months',  closedDate:'-'        },
];

// Sold Stat Card
const SoldStatCard = ({ title, value, iconBg, icon, change }: {
  title: string; value: string; iconBg: string; icon: React.ReactNode; change: string;
}) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3 flex-1 min-w-0">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-gray-500">{title}</span>
      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${iconBg}`}>{icon}</div>
    </div>
    <p className="text-2xl font-bold text-gray-900 leading-tight">{value}</p>
    <p className="text-xs font-medium text-green-600">{change}</p>
  </div>
);

// Sold Payment Status Badge
const SoldStatusBadge = ({ status }: { status: 'Completed' | 'Inprogress' }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
    status === 'Completed'
      ? 'border-green-400 text-green-600 bg-white'
      : 'border-orange-400 text-orange-500 bg-white'
  }`}>{status}</span>
);

// Info Row helper
const InfoRow = ({ label, value, valueClass = '' }: { label: string; value: React.ReactNode; valueClass?: string }) => (
  <div className="flex items-start justify-between py-2.5 border-b border-gray-50 last:border-0">
    <span className="text-sm text-gray-500 flex-shrink-0">{label}</span>
    <span className={`text-sm text-right ml-4 ${valueClass || 'text-gray-800 font-medium'}`}>{value}</span>
  </div>
);

// Property Details Modal — Inprogress (Image 1) and Completed (Image 2)
const SoldPropertyDetails = ({ prop, onClose }: { prop: SoldProperty; onClose: () => void }) => {
  const isCompleted = prop.paymentStatus === 'Completed';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">Property Details</h2>
          <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="p-6 grid grid-cols-2 gap-5">
          {/* ── Property Information ── */}
          <div className="bg-gray-50 rounded-xl p-5 space-y-0">
            <h3 className="text-base font-bold text-gray-900 mb-3">Property Information</h3>
            <InfoRow label="Name:" value="Oakwood Luxury Apartment" />
            <InfoRow label="Address:" value="5TH Avenue Gwarinpa Abuja" />
            <InfoRow label="Type:" value="2-Bedroom Apartment" />
            <InfoRow label={isCompleted ? "Rental Duration" : "Payment Duration"} value={isCompleted ? "1 Time payment" : "3 months"} />
            <InfoRow label="Deal close Date" value="01-01-2025" />
            <InfoRow label="Status:" value={
              isCompleted
                ? <span className="px-4 py-0.5 rounded-full border border-blue-300 text-blue-500 text-xs font-medium">owned</span>
                : <span className="px-4 py-0.5 rounded-full border border-orange-400 text-orange-500 text-xs font-medium">Under Review</span>
            } />
          </div>

          {/* ── Payment Information ── */}
          <div className="bg-gray-50 rounded-xl p-5 space-y-0">
            <h3 className="text-base font-bold text-gray-900 mb-3">Payment Information</h3>
            <InfoRow label="Total Amount Paid:" value={isCompleted ? "N6, 000, 000" : "N6, 000, 000"} />
            {!isCompleted && <InfoRow label="Balance" value="N16, 000, 000" valueClass="text-red-500 font-bold" />}
            <InfoRow label="Payment Date:" value={isCompleted ? "25th-December-2024" : "25th-April-2024"} />
            <InfoRow label="Payment Method:" value="Bank Transfer" />
            <InfoRow label="Last Payment Date::" value="25th-December-2024" />
            <InfoRow label={isCompleted ? "Next Payment Date::" : "Next Payment Due Date:"} value={isCompleted ? "NULL" : "25th-May-2025"} />
            {!isCompleted && <InfoRow label="No of transactions:" value="3" />}
            <InfoRow label="Payment Status::" value={
              isCompleted
                ? <span className="px-4 py-0.5 rounded-full border border-green-400 text-green-600 text-xs font-medium">Completed</span>
                : <span className="px-4 py-0.5 rounded-full border border-orange-400 text-orange-500 text-xs font-medium">Inprogress</span>
            } />
          </div>

          {/* ── Company Information ── */}
          <div className="bg-gray-50 rounded-xl p-5 space-y-0">
            <h3 className="text-base font-bold text-gray-900 mb-3">Company Information</h3>
            <InfoRow label="Realtor Name:" value="Christian Musa" />
            <InfoRow label="Agency Name:" value="Adron Home" />
            <InfoRow label="Contact:" value="07035532345" />
            <InfoRow label="License Number:" value="REA-20250001" />
            <InfoRow label="Status:" value={
              <span className="px-4 py-0.5 rounded-full border border-green-400 text-green-600 text-xs font-medium">Active</span>
            } />
          </div>

          {/* ── Other Information ── */}
          <div className="bg-gray-50 rounded-xl p-5 space-y-0">
            <h3 className="text-base font-bold text-gray-900 mb-3">Other Information</h3>
            <div className="flex items-center justify-between py-2.5 border-b border-gray-50">
              <span className="text-sm text-gray-500">Reports</span>
              <button className="px-4 py-0.5 rounded-full border border-gray-300 text-gray-600 text-xs font-medium hover:bg-gray-100 transition-colors">View</button>
            </div>
            <InfoRow label="Days active before closing" value="18" />
            <InfoRow label="Purchase Reference Number" value="REF23411" />
            <div className="flex items-center justify-between py-2.5">
              <span className="text-sm text-gray-500">Property Documents</span>
              {isCompleted
                ? <span className="px-4 py-0.5 rounded-full bg-gray-400 text-white text-xs font-medium">Received</span>
                : <span className="px-4 py-0.5 rounded-full border border-orange-400 text-orange-500 text-xs font-medium">Pending</span>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface InvestmentRecord {
  id: string;
  customer: { name: string; avatar: string };
  totalInvestment: number;
  company: string;
  investmentPlan: string;
  amount: string;
  totalRoi: string;
  roiColor: 'green' | 'red';
  status: 'Active' | 'Matured';
}

const INVESTMENTS: InvestmentRecord[] = [
  { id:'i1', customer:{ name:'Cameron Williamson', avatar:'https://randomuser.me/api/portraits/men/33.jpg' }, totalInvestment:2, company:'Efab',      investmentPlan:'3 Months',  amount:'N6, 000 000',  totalRoi:'N8, 300 000',  roiColor:'green', status:'Active'  },
  { id:'i2', customer:{ name:'Brooklyn Simmons',   avatar:'https://randomuser.me/api/portraits/women/77.jpg'}, totalInvestment:1, company:'Bilaad',    investmentPlan:'4 Months',  amount:'N1, 000 000',  totalRoi:'N1, 200 000',  roiColor:'red',   status:'Matured' },
  { id:'i3', customer:{ name:'Leslie Alexander',   avatar:'https://randomuser.me/api/portraits/women/12.jpg'}, totalInvestment:1, company:'Cosgrowth', investmentPlan:'6 Months',  amount:'N2, 000 000',  totalRoi:'N3, 500 000',  roiColor:'red',   status:'Matured' },
  { id:'i4', customer:{ name:'Guy Hawkins',        avatar:'https://randomuser.me/api/portraits/men/46.jpg'  }, totalInvestment:1, company:'eBay',      investmentPlan:'12 Months', amount:'N5, 000 000',  totalRoi:'N7, 000 000',  roiColor:'green', status:'Active'  },
  { id:'i5', customer:{ name:'Jacob Jones',        avatar:'https://randomuser.me/api/portraits/women/24.jpg'}, totalInvestment:1, company:'Cosgrowth', investmentPlan:'6 Months',  amount:'N3, 000 000',  totalRoi:'N6, 000 000',  roiColor:'green', status:'Active'  },
  { id:'i6', customer:{ name:'Abubakar Isa',       avatar:'https://randomuser.me/api/portraits/men/32.jpg'  }, totalInvestment:1, company:'Cosgrowth', investmentPlan:'4 Months',  amount:'N10, 000 000', totalRoi:'N12, 600 000', roiColor:'red',   status:'Matured' },
];

// Investment Status Badge
const InvestmentStatusBadge = ({ status }: { status: 'Active' | 'Matured' }) => (
  status === 'Active'
    ? <span className="px-4 py-1 rounded-full border border-green-400 text-green-600 text-xs font-medium bg-white">Active</span>
    : <span className="px-4 py-1 rounded-full bg-green-700 text-white text-xs font-medium">Matured</span>
);

// ─────────────────────────────────────────────────────────────────────────────
// RENTED TAB — Data & Components
// ─────────────────────────────────────────────────────────────────────────────
interface RentedProperty {
  id: string;
  name: string;
  price: string;
  company: string;
  assignAgent: string;
  paymentStatus: 'Completed' | 'Inprogress';
  paymentDuration: string;
  rentState: 'Active' | 'due';
  closedDate: string;
}

const RENTED_PROPERTIES: RentedProperty[] = [
  { id:'r1', name:'Studio Apartment, Yaba',   price:'₦120k/year',     company:'Efab',      assignAgent:'Wade Warren',        paymentStatus:'Completed', paymentDuration:'1 Time',    rentState:'Active', closedDate:'7/18/17' },
  { id:'r2', name:'4BR Duplex, Ikeja',        price:'₦4.5M/year',     company:'Bilaad',    assignAgent:'Cameron Williamson', paymentStatus:'Completed', paymentDuration:'1 Time',    rentState:'Active', closedDate:'12/4/17' },
  { id:'r3', name:'Land Plot, Ibadan',        price:'₦150M/ 6 months',company:'Cosgrowth', assignAgent:'Admin',              paymentStatus:'Completed', paymentDuration:'1 Time',    rentState:'Active', closedDate:'12/4/17' },
  { id:'r4', name:'Lexury 4BR Duplex, Ikeja', price:'₦2.5M/year',     company:'eBay',      assignAgent:'Brooklyn Simmons',   paymentStatus:'Completed', paymentDuration:'1 Time',    rentState:'Active', closedDate:'1/15/12' },
  { id:'r5', name:'Lexury 4BR Duplex, Ikeja', price:'₦4/ 3 motnhs',   company:'Cosgrowth', assignAgent:'Guy Hawkins',        paymentStatus:'Completed', paymentDuration:'1 Time',    rentState:'due',    closedDate:'12/4/17' },
  { id:'r6', name:'Lexury 4BR Duplex, Ikeja', price:'₦4/ 3 motnhs',   company:'Cosgrowth', assignAgent:'Guy Hawkins',        paymentStatus:'Completed', paymentDuration:'1 Time',    rentState:'due',    closedDate:'12/4/17' },
];

// Rented Stat Card
const RentedStatCard = ({ title, value, iconBg, icon, change }: {
  title: string; value: string; iconBg: string; icon: React.ReactNode; change: string;
}) => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3 flex-1 min-w-0">
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-gray-500">{title}</span>
      <div className={`w-9 h-9 rounded-full flex items-center justify-center ${iconBg}`}>{icon}</div>
    </div>
    <p className="text-2xl font-bold text-gray-900 leading-tight">{value}</p>
    <p className="text-xs font-medium text-green-600">{change}</p>
  </div>
);

// Rented Payment Status Badge
const RentedPaymentBadge = ({ status }: { status: 'Completed' | 'Inprogress' }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
    status === 'Completed' ? 'border-green-400 text-green-600 bg-white' : 'border-orange-400 text-orange-500 bg-white'
  }`}>{status}</span>
);

// Rent State Badge
const RentStateBadge = ({ state }: { state: 'Active' | 'due' }) => (
  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
    state === 'Active' ? 'border-blue-300 text-blue-500 bg-white' : 'border-red-400 text-red-500 bg-white'
  }`}>{state}</span>
);

// Rented Property Details Modal (Image 2 = Completed/Active, Image 1 = Due)
const RentedPropertyDetails = ({ prop, onClose }: { prop: RentedProperty; onClose: () => void }) => {
  const isDue = prop.rentState === 'due';
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">Property Details</h2>
          <button onClick={onClose} className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <div className="p-6 grid grid-cols-2 gap-5">
          {/* Property Information */}
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="text-base font-bold text-gray-900 mb-3">Property Information</h3>
            <InfoRow label="Name:" value="Oakwood Luxury Apartment" />
            <InfoRow label="Address:" value="5TH Avenue Gwarinpa Abuja" />
            <InfoRow label="Type:" value="2-Bedroom Apartment" />
            <InfoRow label="Rental Duration" value="1 Time payment" />
            <InfoRow label="Deal close Date" value="01-01-2025" />
            <InfoRow label="Status:" value={
              isDue
                ? <span className="px-4 py-0.5 rounded-full border border-red-400 text-red-500 text-xs font-medium">Due</span>
                : <span className="px-4 py-0.5 rounded-full border border-blue-300 text-blue-500 text-xs font-medium">Active</span>
            } />
          </div>

          {/* Payment Information */}
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="text-base font-bold text-gray-900 mb-3">Payment Information</h3>
            <InfoRow label="Total Amount Paid:" value="N120, 000" />
            <InfoRow label="Payment Date:" value="25th-December-2024" />
            <InfoRow label="Payment Method:" value="Bank Transfer" />
            <InfoRow label="Last Payment Date::" value="25th-December-2024" />
            <InfoRow label="Next Payment Date::" value="NULL" />
            <InfoRow label="Payment Status::" value={
              <span className="px-4 py-0.5 rounded-full border border-green-400 text-green-600 text-xs font-medium">Completed</span>
            } />
          </div>

          {/* Company Information */}
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="text-base font-bold text-gray-900 mb-3">Company Information</h3>
            <InfoRow label="Realtor Name:" value="Christian Musa" />
            <InfoRow label="Agency Name:" value="Adron Home" />
            <InfoRow label="Contact:" value="07035532345" />
            <InfoRow label="License Number:" value="REA-20250001" />
            <InfoRow label="Status:" value={
              <span className="px-4 py-0.5 rounded-full border border-green-400 text-green-600 text-xs font-medium">Active</span>
            } />
          </div>

          {/* Other Information */}
          <div className="bg-gray-50 rounded-xl p-5">
            <h3 className="text-base font-bold text-gray-900 mb-3">Other Information</h3>
            <div className="flex items-center justify-between py-2.5 border-b border-gray-50">
              <span className="text-sm text-gray-500">Reports</span>
              <button className="px-4 py-0.5 rounded-full border border-gray-300 text-gray-600 text-xs font-medium hover:bg-gray-100 transition-colors">View</button>
            </div>
            <InfoRow label="Days active before Renting" value="21 days" />
            <InfoRow label="Rent Reference Number" value="REF23411" />
            <div className="flex items-center justify-between py-2.5">
              <span className="text-sm text-gray-500">Payment Receipt</span>
              <span className="px-4 py-0.5 rounded-full bg-gray-400 text-white text-xs font-medium">Received</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Active Listing — View Property Modal (Image 1)
// ─────────────────────────────────────────────────────────────────────────────
const ActiveListingView = ({ prop, onClose }: { prop: Property; onClose: () => void }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
    <div className="bg-white rounded-2xl shadow-2xl w-[920px] max-h-[90vh] overflow-y-auto p-6 space-y-5">
      {/* Gallery */}
      <div className="flex gap-3 h-[280px]">
        <div className="flex-[1.6] rounded-xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80" alt="hero" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col gap-2 flex-[0.9]">
          {[
            'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=300&q=70',
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=70',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&q=70',
          ].map((src, i) => (
            <div key={i} className="flex-1 rounded-xl overflow-hidden">
              <img src={src} alt={`g${i}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Name + Rating */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-gray-900">Rendez House Bay</h3>
        <div className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /><span className="text-sm font-semibold text-gray-700">4.6</span></div>
      </div>

      {/* Location + Price + Specs + Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-gray-500 text-sm"><MapPin className="w-4 h-4" /><span>Lagos, Nigeria</span></div>
        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <span className="flex items-center gap-1"><BedDouble className="w-4 h-4" />3</span>
          <span className="flex items-center gap-1"><Bath className="w-4 h-4" />3</span>
          <span className="flex items-center gap-1"><Car className="w-4 h-4" />3</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-green-600">₦250,000</span>
        <span className="px-4 py-1 rounded-full border border-blue-300 text-blue-500 text-xs font-medium">Active</span>
      </div>

      {/* Contact + Facilities row */}
      <div className="flex gap-5">
        {/* Contact cards */}
        <div className="flex gap-4">
          {[
            { title: 'Efab contact Person', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
            { title: 'Property Realtor',    avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
          ].map(card => (
            <div key={card.title} className="border border-gray-100 rounded-xl p-4 flex flex-col items-center gap-2 w-36">
              <p className="text-xs font-semibold text-gray-700 text-center">{card.title}</p>
              <img src={card.avatar} alt={card.title} className="w-14 h-14 rounded-full object-cover" />
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><MessageCircle className="w-3.5 h-3.5 text-gray-600" /></button>
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"><Phone className="w-3.5 h-3.5 text-gray-600" /></button>
              </div>
            </div>
          ))}
        </div>

        {/* Facilities */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-gray-800 mb-3">Facilities</p>
          <div className="flex flex-wrap gap-2">
            {['Big swimmig pool', 'Big size garden', '24/7  electricity', 'Near Trail Station', '4 car Parking', 'Personal Theater'].map((f, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg border border-gray-200 text-xs text-gray-600">{f}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button onClick={onClose} className="px-8 py-2.5 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">Close</button>
      </div>
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Send Notification to Company Modal (Image 2)
// ─────────────────────────────────────────────────────────────────────────────
const SendFeedbackModal = ({ prop, onClose }: { prop: Property; onClose: () => void }) => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ contact: '', email: 'Infor@efab.com', phone: '080300008900', subject: '', message: '' });
  const set = (k: keyof typeof form) => (v: string) => setForm(p => ({ ...p, [k]: v }));

  if (sent) return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-[440px] px-10 py-14 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg mb-5">
          <CheckCircle className="w-9 h-9 text-white fill-white" strokeWidth={2} />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Notification Sent</h3>
        <p className="text-sm text-gray-400">Your message has been delivered to {prop.company}.</p>
        <button onClick={onClose} className="mt-6 px-8 py-2.5 bg-gray-800 text-white text-sm font-medium rounded-lg">Done</button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-[640px] p-7 space-y-5">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Send Notification to {prop.company}</h2>
          <p className="text-sm text-gray-400 mt-0.5">Your message will be delivered to the receiver</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Contact Person</label>
            <input type="text" placeholder="Value" value={form.contact} onChange={e => set('contact')(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input type="email" value={form.email} onChange={e => set('email')(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input type="text" value={form.phone} onChange={e => set('phone')(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Subject</label>
            <input type="text" placeholder="enter subject" value={form.subject} onChange={e => set('subject')(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea rows={4} placeholder="Value" value={form.message} onChange={e => set('message')(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none" />
        </div>
        <div className="flex items-center justify-center gap-4 pt-1">
          <button onClick={() => setSent(true)} className="px-12 py-3 bg-gray-900 hover:bg-black text-white text-sm font-medium rounded-xl transition-colors">Send</button>
          <button onClick={onClose} className="px-12 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors">Cancel</button>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Suspend Property Modal (Image 3)
// ─────────────────────────────────────────────────────────────────────────────
const SuspendPropertyModal = ({ prop, onClose, onSuspended }: {
  prop: Property; onClose: () => void; onSuspended: () => void;
}) => {
  const [form, setForm] = useState({ contact: '', email: 'Infor@efab.com', phone: '080300008900', subject: '', reason: '' });
  const set = (k: keyof typeof form) => (v: string) => setForm(p => ({ ...p, [k]: v }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-[640px] p-7 space-y-5">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Suspend Property</h2>
          <p className="text-sm text-gray-400 mt-0.5">suspend property that valuate HouseBank rule and regulation</p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Contact Person</label>
            <input type="text" placeholder="Value" value={form.contact} onChange={e => set('contact')(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input type="email" value={form.email} onChange={e => set('email')(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input type="text" value={form.phone} onChange={e => set('phone')(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-gray-700">Subject</label>
            <input type="text" placeholder="enter subject" value={form.subject} onChange={e => set('subject')(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Reason for suspension</label>
          <textarea rows={4} placeholder="Value" value={form.reason} onChange={e => set('reason')(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 resize-none" />
        </div>
        <div className="flex items-center justify-center gap-4 pt-1">
          <button onClick={onSuspended} className="px-12 py-3 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-xl transition-colors">Suspended</button>
          <button onClick={onClose} className="px-12 py-3 border border-gray-300 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors">Cancel</button>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
const AdminPropertyManagement = () => {
  const [activeTab, setActiveTab]         = useState<PropTab>('All Properties');
  const [search, setSearch]               = useState('');
  const [currentPage, setCurrentPage]     = useState(1);
  const [pageView, setPageView]           = useState<PageView>('list');
  const [selectedProp, setSelectedProp]   = useState<Property | null>(null);
  const [actionMenu, setActionMenu]       = useState<{ id: string; x: number; y: number } | null>(null);
  const [showNotification, setShowNotification] = useState<Property | null>(null);
  const [showAddProperty, setShowAddProperty]   = useState(false);
  const [showActiveView, setShowActiveView]     = useState<Property | null>(null);
  const [showFeedback, setShowFeedback]         = useState<Property | null>(null);
  const [showSuspend, setShowSuspend]           = useState<Property | null>(null);
  const [suspendedIds, setSuspendedIds]         = useState<Set<string>>(new Set());
  const [showSoldDetails, setShowSoldDetails]   = useState<SoldProperty | null>(null);
  const [showRentedDetails, setShowRentedDetails] = useState<RentedProperty | null>(null);
  const [showInvestmentDetails, setShowInvestmentDetails] = useState<InvestmentRecord | null>(null);
  // Track which property IDs have had suspension lifted
  const [liftedIds, setLiftedIds]         = useState<Set<string>>(new Set());
  const menuRef  = useRef<HTMLDivElement>(null);
  const totalPages = 5;
  const tabs: PropTab[] = ['All Properties', 'Active Listing', 'Sold', 'Rented', 'Investment'];

  // Resolve effective status (lifted suspension = Available)
  const effectiveStatus = (prop: Property): PropStatus =>
    prop.status === 'Suspended' && liftedIds.has(prop.id) ? 'Available' : prop.status;

  useEffect(() => {
    const h = (e: MouseEvent) => { if (menuRef.current && !menuRef.current.contains(e.target as Node)) setActionMenu(null); };
    document.addEventListener('mousedown', h);
    return () => document.removeEventListener('mousedown', h);
  }, []);

  const filtered = PROPERTIES.filter(p => {
    const q = search.toLowerCase();
    const matchSearch = p.name.toLowerCase().includes(q) || p.company.toLowerCase().includes(q) || p.assignRealtor.toLowerCase().includes(q);
    const matchTab =
      activeTab === 'All Properties' ? true :
      activeTab === 'Active Listing' ? p.status === 'Available' || p.status === 'Active' :
      activeTab === 'Sold'           ? p.status === 'Active Investment' :
      activeTab === 'Rented'         ? p.status === 'Rented' :
      activeTab === 'Investment'     ? p.category === 'Invest' : true;
    return matchSearch && matchTab;
  });

  const openMenu = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setActionMenu({ id, x: rect.right, y: rect.bottom });
  };

  // Sub views
  if (pageView === 'details' && selectedProp) return (
    <PropertyDetails
      prop={{ ...selectedProp, status: effectiveStatus(selectedProp) }}
      onBack={() => setPageView('list')}
      onLiftSuspension={() => {
        setLiftedIds(prev => new Set(prev).add(selectedProp.id));
      }}
    />
  );
  if (pageView === 'success') return <SuccessState onDone={() => setPageView('list')} />;

  return (
    <>
      <div className="flex flex-col h-full">
        <CustomerHeader />
        <main className="flex-1 p-6 bg-gray-50 overflow-auto space-y-5">

          {/* Title + Search + Add Property */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Property</h1>
              <p className="text-xs text-gray-400 mt-0.5">
                {activeTab === 'Active Listing'
                  ? <>Total active listing &nbsp;›&nbsp; <span className="font-medium text-gray-600">213</span></>
                  : <>Manage Property Listings &nbsp;›&nbsp; <span className="font-medium text-gray-600">1500</span></>
                }
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input type="text" placeholder="Search here..." value={search} onChange={e => setSearch(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-52" />
              </div>
              <button className="p-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50">
                <SlidersHorizontal className="w-4 h-4 text-gray-500" />
              </button>
              <button
                onClick={() => setShowAddProperty(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <Plus className="w-4 h-4" />Add Property
              </button>
            </div>
          </div>

          {/* ── SOLD TAB: Top Summary Metrics + Landed Properties Table ── */}
          {activeTab === 'Sold' && (
            <>
              <div>
                <h2 className="text-base font-bold text-gray-900 mb-4">Top Summary Metrics</h2>
                <div className="flex gap-4">
                  <SoldStatCard title="Total Sold" value="350" iconBg="bg-blue-100" change="+3.5%  vs last month"
                    icon={<svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.75L12 3l9 6.75V21H3V9.75z" /></svg>} />
                  <SoldStatCard title="Estimated Total Value" value="₦4.2 Billion" iconBg="bg-pink-100" change="+3.5%  vs last month"
                    icon={<svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
                  <SoldStatCard title="Avg. Days on Market" value="18" iconBg="bg-orange-100" change="+3.5%  vs last month"
                    icon={<svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>} />
                  <SoldStatCard title="Companies Closed Deals" value="75" iconBg="bg-orange-100" change="+5%  vs last month"
                    icon={<svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3" /></svg>} />
                  <SoldStatCard title="Realtor Involved" value="75" iconBg="bg-green-100" change="+3.5%  vs last month"
                    icon={<svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4a4 4 0 11-8 0 4 4 0 018 0z" /></svg>} />
                </div>
              </div>

              {/* Landed Properties Table */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100">
                  <h2 className="text-base font-bold text-gray-900">Landed Properties</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[800px]">
                    <thead>
                      <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                        <th className="px-6 py-3 text-left">Property</th>
                        <th className="px-6 py-3 text-left">Price</th>
                        <th className="px-6 py-3 text-left">Company</th>
                        <th className="px-6 py-3 text-left">Assign Realtor</th>
                        <th className="px-6 py-3 text-left">Amount Paid</th>
                        <th className="px-6 py-3 text-left">Payment Status</th>
                        <th className="px-6 py-3 text-left">Payment Duration</th>
                        <th className="px-6 py-3 text-left">Closed Date</th>
                        <th className="px-6 py-3 text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {SOLD_PROPERTIES.map(prop => (
                        <tr key={prop.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-800">{prop.name}</td>
                          <td className="px-6 py-4 text-gray-700">{prop.price}</td>
                          <td className="px-6 py-4 text-gray-600">{prop.company}</td>
                          <td className="px-6 py-4 text-gray-600">{prop.assignRealtor}</td>
                          <td className="px-6 py-4 text-gray-700 font-medium">{prop.amountPaid}</td>
                          <td className="px-6 py-4"><SoldStatusBadge status={prop.paymentStatus} /></td>
                          <td className="px-6 py-4 text-gray-600">{prop.paymentDuration}</td>
                          <td className="px-6 py-4 text-gray-500">{prop.closedDate}</td>
                          <td className="px-6 py-4 relative">
                            <button onClick={e => openMenu(e, prop.id)} className="p-1 hover:bg-gray-100 rounded-md transition-colors">
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
                  <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm">‹</button>
                  {[1,2,3,4,5].map(p => (
                    <button key={p} className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium ${p === 1 ? 'bg-gray-800 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{p}</button>
                  ))}
                  <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm">›</button>
                </div>
              </div>
            </>
          )}

          {/* ── RENTED TAB: Top Summary Metrics + Rented Properties Table ── */}
          {activeTab === 'Rented' && (
            <>
              <div>
                <h2 className="text-base font-bold text-gray-900 mb-4">Top Summary Metrics</h2>
                <div className="flex gap-4">
                  <RentedStatCard title="Total Rent" value="350" iconBg="bg-blue-100" change="+3.5%  vs last month"
                    icon={<svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.75L12 3l9 6.75V21H3V9.75z" /></svg>} />
                  <RentedStatCard title="Estimated Total Rent" value="₦1.4 Billion" iconBg="bg-pink-100" change="+3.5%  vs last month"
                    icon={<svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
                  <RentedStatCard title="Rent Due" value="18" iconBg="bg-orange-100" change="+3.5%  vs last month"
                    icon={<svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>} />
                  <RentedStatCard title="Companies Involved" value="54" iconBg="bg-orange-100" change="+5%  vs last month"
                    icon={<svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3" /></svg>} />
                  <RentedStatCard title="Realtor Involved" value="44" iconBg="bg-green-100" change="+3.5%  vs last month"
                    icon={<svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4a4 4 0 11-8 0 4 4 0 018 0z" /></svg>} />
                </div>
              </div>

              {/* Rented Properties Table */}
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[900px]">
                    <thead>
                      <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                        <th className="px-6 py-3 text-left">Property</th>
                        <th className="px-6 py-3 text-left">Price</th>
                        <th className="px-6 py-3 text-left">Company</th>
                        <th className="px-6 py-3 text-left">Assign Agent</th>
                        <th className="px-6 py-3 text-left">Payment Status</th>
                        <th className="px-6 py-3 text-left">Payment Duration</th>
                        <th className="px-6 py-3 text-left">Rent state</th>
                        <th className="px-6 py-3 text-left">Closed Date</th>
                        <th className="px-6 py-3 text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {RENTED_PROPERTIES.map(prop => (
                        <tr key={prop.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-gray-800">{prop.name}</td>
                          <td className="px-6 py-4 text-gray-600">{prop.price}</td>
                          <td className="px-6 py-4 text-gray-600">{prop.company}</td>
                          <td className="px-6 py-4 text-gray-600">{prop.assignAgent}</td>
                          <td className="px-6 py-4"><RentedPaymentBadge status={prop.paymentStatus} /></td>
                          <td className="px-6 py-4 text-gray-600">{prop.paymentDuration}</td>
                          <td className="px-6 py-4"><RentStateBadge state={prop.rentState} /></td>
                          <td className="px-6 py-4 text-gray-500">{prop.closedDate}</td>
                          <td className="px-6 py-4 relative">
                            <button onClick={e => openMenu(e, prop.id)} className="p-1 hover:bg-gray-100 rounded-md transition-colors">
                              <MoreVertical className="w-4 h-4 text-gray-400" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-center gap-1 px-6 py-4 border-t border-gray-100">
                  <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm">‹</button>
                  {[1,2,3,4,5].map(p => (
                    <button key={p} className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium ${p === 1 ? 'bg-gray-800 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{p}</button>
                  ))}
                  <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm">›</button>
                </div>
              </div>
            </>
          )}
          {activeTab !== 'Sold' && activeTab !== 'Rented' && activeTab !== 'Investment' && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="flex border-b border-gray-100 px-2 overflow-x-auto">
              {tabs.map(tab => (
                <button key={tab} onClick={() => { setActiveTab(tab); setCurrentPage(1); }}
                  className={`flex items-center gap-1 px-5 py-3.5 text-sm font-medium transition-colors relative whitespace-nowrap ${activeTab === tab ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}>
                  {tab}{tab === 'Sold' && <ChevronDown className="w-3.5 h-3.5" />}
                  {activeTab === tab && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-t" />}
                </button>
              ))}
            </div>
            <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                  <th className="px-6 py-3 text-left">Property</th>
                  <th className="px-6 py-3 text-left">
                    {activeTab === 'Active Listing' ? 'Category' : 'Address'}
                  </th>
                  <th className="px-6 py-3 text-left">Company</th>
                  {activeTab !== 'Active Listing' && <th className="px-6 py-3 text-left">Price</th>}
                  <th className="px-6 py-3 text-left">Assign Realtor</th>
                  {activeTab === 'Active Listing' ? (
                    <>
                      <th className="px-6 py-3 text-left">Location</th>
                      <th className="px-6 py-3 text-left">Price</th>
                      <th className="px-6 py-3 text-left">Inquiries</th>
                      <th className="px-6 py-3 text-left">Date Listed</th>
                    </>
                  ) : (
                    <>
                      <th className="px-6 py-3 text-left">Category</th>
                      <th className="px-6 py-3 text-left">Status</th>
                    </>
                  )}
                  <th className="px-6 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map(prop => (
                  <tr key={prop.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img src={prop.image} alt={prop.name} className="w-12 h-10 rounded-lg object-cover flex-shrink-0" />
                        <span className="font-medium text-gray-800">{prop.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {activeTab === 'Active Listing' ? prop.category : <span className="text-xs text-gray-500 leading-relaxed max-w-[170px] block">{prop.address}</span>}
                    </td>
                    <td className="px-6 py-4 text-gray-600">{prop.company}</td>
                    {activeTab !== 'Active Listing' && <td className="px-6 py-4 text-gray-700 font-medium">{prop.price}</td>}
                    <td className="px-6 py-4 text-gray-600">{prop.assignRealtor}</td>
                    {activeTab === 'Active Listing' ? (
                      <>
                        <td className="px-6 py-4 text-gray-600">{prop.location}</td>
                        <td className="px-6 py-4 text-gray-700 font-medium">{prop.price}</td>
                        <td className="px-6 py-4 text-gray-600 text-center">{prop.inquiries ?? '-'}</td>
                        <td className="px-6 py-4 text-gray-500">{prop.dateListed}</td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4 text-gray-600">{prop.category}</td>
                        <td className="px-6 py-4"><StatusBadge status={effectiveStatus(prop)} /></td>
                      </>
                    )}
                    <td className="px-6 py-4 relative">
                      <button onClick={e => openMenu(e, prop.id)} className="p-1 hover:bg-gray-100 rounded-md transition-colors">
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>{/* end overflow-x-auto */}
            <div className="flex items-center justify-center gap-1 px-6 py-4 border-t border-gray-100">
              <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm">‹</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button key={page} onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium ${currentPage === page ? 'bg-gray-800 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{page}</button>
              ))}
              <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm">›</button>
            </div>
          </div>
          )}{/* end non-special tabs */}

          {/* ── INVESTMENT TAB ── */}
          {activeTab === 'Investment' && (
            <>
              <div>
                <h2 className="text-base font-bold text-gray-900 mb-4">Top Summary Metrics</h2>
                <div className="flex gap-4">
                  <RentedStatCard title="Total Rent" value="350" iconBg="bg-blue-100" change="+3.5%  vs last month"
                    icon={<svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.75L12 3l9 6.75V21H3V9.75z" /></svg>} />
                  <RentedStatCard title="Estimated Total Rent" value="₦1.4 Billion" iconBg="bg-pink-100" change="+3.5%  vs last month"
                    icon={<svg className="w-5 h-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} />
                  <RentedStatCard title="Rent Due" value="18" iconBg="bg-orange-100" change="+3.5%  vs last month"
                    icon={<svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>} />
                  <RentedStatCard title="Companies Involved" value="54" iconBg="bg-orange-100" change="+5%  vs last month"
                    icon={<svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3" /></svg>} />
                  <RentedStatCard title="Realtor Involved" value="44" iconBg="bg-green-100" change="+3.5%  vs last month"
                    icon={<svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6-4a4 4 0 11-8 0 4 4 0 018 0z" /></svg>} />
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[900px]">
                    <thead>
                      <tr className="border-b border-gray-100 text-gray-400 text-xs font-medium">
                        <th className="px-6 py-3 text-left">Customer</th>
                        <th className="px-6 py-3 text-left">Total Investment</th>
                        <th className="px-6 py-3 text-left">Company</th>
                        <th className="px-6 py-3 text-left">Investment Plan</th>
                        <th className="px-6 py-3 text-left">Amount</th>
                        <th className="px-6 py-3 text-left">Total ROI</th>
                        <th className="px-6 py-3 text-left">Status</th>
                        <th className="px-6 py-3 text-left">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {INVESTMENTS.map(inv => (
                        <tr key={inv.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img src={inv.customer.avatar} alt={inv.customer.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
                              <span className="font-medium text-gray-800">{inv.customer.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-600 text-center">{inv.totalInvestment}</td>
                          <td className="px-6 py-4 text-gray-600">{inv.company}</td>
                          <td className="px-6 py-4 text-gray-600">{inv.investmentPlan}</td>
                          <td className="px-6 py-4 text-gray-700">{inv.amount}</td>
                          <td className={`px-6 py-4 font-medium ${inv.roiColor === 'green' ? 'text-blue-600' : 'text-orange-500'}`}>{inv.totalRoi}</td>
                          <td className="px-6 py-4"><InvestmentStatusBadge status={inv.status} /></td>
                          <td className="px-6 py-4 relative">
                            <button onClick={e => openMenu(e, inv.id)} className="p-1 hover:bg-gray-100 rounded-md transition-colors">
                              <MoreVertical className="w-4 h-4 text-gray-400" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="flex items-center justify-center gap-1 px-6 py-4 border-t border-gray-100">
                  <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm">‹</button>
                  {[1,2,3,4,5].map(p => (
                    <button key={p} className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium ${p === 1 ? 'bg-gray-800 text-white' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{p}</button>
                  ))}
                  <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm">›</button>
                </div>
              </div>
            </>
          )}
        </main>
      </div>

      {/* ── 3-dot dropdown ── */}
      {actionMenu && (
        <div ref={menuRef} className="fixed z-40 bg-white rounded-xl shadow-xl border border-gray-100 py-1 w-52"
          style={{ top: actionMenu.y + 4, left: actionMenu.x - 208 }}>
          {activeTab === 'Sold' ? (
            <button
              onClick={() => { const p = SOLD_PROPERTIES.find(x => x.id === actionMenu.id)||null; if(p) setShowSoldDetails(p); setActionMenu(null); }}
              className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50">
              View Details
            </button>
          ) : activeTab === 'Rented' ? (
            <button
              onClick={() => { const p = RENTED_PROPERTIES.find(x => x.id === actionMenu.id)||null; if(p) setShowRentedDetails(p); setActionMenu(null); }}
              className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50">
              View Details
            </button>
          ) : activeTab === 'Investment' ? (
            <button
              onClick={() => { const inv = INVESTMENTS.find(x => x.id === actionMenu.id)||null; if(inv) setShowInvestmentDetails(inv); setActionMenu(null); }}
              className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50">
              View Details
            </button>
          ) : activeTab === 'Active Listing' ? (
            <>
              <button onClick={() => { const p = PROPERTIES.find(x => x.id === actionMenu.id)||null; if(p) setShowActiveView(p); setActionMenu(null); }}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50">View</button>
              <button onClick={() => { const p = PROPERTIES.find(x => x.id === actionMenu.id)||null; if(p) setShowSuspend(p); setActionMenu(null); }}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 border-t border-gray-50">Suspend</button>
              <button onClick={() => { const p = PROPERTIES.find(x => x.id === actionMenu.id)||null; if(p) setShowFeedback(p); setActionMenu(null); }}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 border-t border-gray-50">Send feedback to company</button>
            </>
          ) : (
            <>
              <button onClick={() => { const p = PROPERTIES.find(x => x.id === actionMenu.id)||null; if(p){ setSelectedProp(p); setPageView('details'); } setActionMenu(null); }}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50">View Details</button>
              <button onClick={() => { const p = PROPERTIES.find(x => x.id === actionMenu.id)||null; if(p) setShowNotification(p); setActionMenu(null); }}
                className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 border-t border-gray-50">Send Notification</button>
            </>
          )}
        </div>
      )}

      {/* ── Send Notification Modal (all tabs) ── */}
      {showNotification && <SendNotificationModal prop={showNotification} onClose={() => setShowNotification(null)} />}

      {/* ── Sold Property Details Modal ── */}
      {showSoldDetails && <SoldPropertyDetails prop={showSoldDetails} onClose={() => setShowSoldDetails(null)} />}

      {/* ── Rented Property Details Modal ── */}
      {showRentedDetails && <RentedPropertyDetails prop={showRentedDetails} onClose={() => setShowRentedDetails(null)} />}

      {/* ── Investment Details Modal ── */}
      {showInvestmentDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-4">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Investment Details</h2>
              <button onClick={() => setShowInvestmentDetails(null)} className="p-1.5 hover:bg-gray-100 rounded-lg">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
                <img src={showInvestmentDetails.customer.avatar} alt={showInvestmentDetails.customer.name} className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <p className="text-base font-bold text-gray-900">{showInvestmentDetails.customer.name}</p>
                  <InvestmentStatusBadge status={showInvestmentDetails.status} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  ['Company', showInvestmentDetails.company],
                  ['Investment Plan', showInvestmentDetails.investmentPlan],
                  ['Total Investment', String(showInvestmentDetails.totalInvestment)],
                  ['Amount', showInvestmentDetails.amount],
                  ['Total ROI', showInvestmentDetails.totalRoi],
                  ['Status', showInvestmentDetails.status],
                ].map(([label, value]) => (
                  <div key={label} className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs text-gray-400 mb-1">{label}</p>
                    <p className={`text-sm font-semibold ${label === 'Total ROI' ? (showInvestmentDetails.roiColor === 'green' ? 'text-blue-600' : 'text-orange-500') : 'text-gray-900'}`}>{value}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-end pt-2">
                <button onClick={() => setShowInvestmentDetails(null)} className="px-8 py-2.5 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Active Listing modals ── */}
      {showActiveView && <ActiveListingView prop={showActiveView} onClose={() => setShowActiveView(null)} />}
      {showFeedback   && <SendFeedbackModal  prop={showFeedback}  onClose={() => setShowFeedback(null)} />}
      {showSuspend    && (
        <SuspendPropertyModal
          prop={showSuspend}
          onClose={() => setShowSuspend(null)}
          onSuspended={() => {
            setSuspendedIds(prev => new Set(prev).add(showSuspend.id));
            setShowSuspend(null);
          }}
        />
      )}

      {/* ── Add Property Modal ── */}
      {showAddProperty && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
          <div className="bg-white rounded-2xl shadow-2xl w-[600px] p-6 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-gray-900">Add Property</h2>
              <button onClick={() => setShowAddProperty(false)} className="p-1.5 hover:bg-gray-100 rounded-lg">
                <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[['Property Name','e.g Luxury Apartment'],['Property Type','e.g Buy / Rent / Invest'],['Price','e.g ₦120M'],['Company','e.g Efab'],['Assign Realtor','e.g Wade Warren'],['Location','e.g Lagos, Nigeria'],['Bedrooms','e.g 3'],['Bathrooms','e.g 2']].map(([label, ph]) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-gray-700">{label}</label>
                  <input type="text" placeholder={ph} className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <button onClick={() => setShowAddProperty(false)} className="flex-1 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">Add Property</button>
              <button onClick={() => setShowAddProperty(false)} className="flex-1 py-3 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPropertyManagement;
