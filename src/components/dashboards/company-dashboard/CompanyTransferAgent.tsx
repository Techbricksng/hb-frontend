import { useState } from 'react';
import { MapPin, BedDouble, Bath, Car, Heart, ChevronLeft, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CustomerHeader from './CustomerHeader';

const TRANSFER_PROPERTIES = [
  {
    name: 'Rendez House Bay',
    price: 'N250,000',
    location: 'Lagos, Nigeria',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=70',
    description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
  },
  {
    name: 'Rendez House Bay',
    price: 'N250,000',
    location: 'Lagos, Nigeria',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=300&q=70',
    description: 'A beautiful house that resonates the beauty of lagos, affordable and friendly environment',
  },
];

const TRANSFER_AGENTS = [
  { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', properties: 3 },
  { name: 'Seman Ilesa', avatar: 'https://randomuser.me/api/portraits/men/44.jpg', properties: 2 },
  { name: 'Issac Johnson', avatar: 'https://randomuser.me/api/portraits/men/52.jpg', properties: 1 },
  { name: 'Michael Solomon', avatar: 'https://randomuser.me/api/portraits/men/60.jpg', properties: 0 },
  { name: 'Seman Ilesa', avatar: 'https://randomuser.me/api/portraits/men/71.jpg', properties: 2 },
];

const SuccessCard = ({
  title, subtitle, onDone,
}: { title: string; subtitle: string; onDone: () => void }) => (
  <div className="flex flex-col items-center justify-center min-h-[300px] bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
    <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg mb-5">
      <CheckCircle className="w-9 h-9 text-white fill-white" strokeWidth={2} />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2 whitespace-pre-line">{title}</h3>
    <p className="text-sm text-gray-400 leading-relaxed">{subtitle}</p>
    <button
      onClick={onDone}
      className="mt-6 px-8 py-2.5 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg transition-colors"
    >
      Done
    </button>
  </div>
);

type PageState = 'form' | 'transferSuccess' | 'exportSuccess';

const CompanyTransferAgent = () => {
  const navigate = useNavigate();
  const [pageState, setPageState] = useState<PageState>('form');
  const [selectedProps, setSelectedProps] = useState<number[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null);
  const [form, setForm] = useState({
    fullName: 'Ibrahim Haruna',
    email: 'ibrahimharuna@gmail.com',
    phone: '+2349075616876',
    licenseId: 'AD0011243',
    noOfProperty: '2',
  });

  const toggleProp = (idx: number) =>
    setSelectedProps(prev => prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]);

  const set = (k: keyof typeof form) => (v: string) =>
    setForm(p => ({ ...p, [k]: v }));

  const selectedAgentName = selectedAgent !== null ? TRANSFER_AGENTS[selectedAgent].name : 'Abubakar Isah';

  if (pageState === 'transferSuccess') {
    return (
      <div className="flex flex-col h-full">
        <CustomerHeader />
        <main className="flex-1 p-6 bg-gray-50 flex items-center justify-center">
          <div className="w-full max-w-lg">
            <SuccessCard
              title={'Property Transfer\nSuccessfully'}
              subtitle={`You have  successfully transfer ${selectedProps.length || 2} properties  from ${form.fullName}   to\n${selectedAgentName}`}
              onDone={() => navigate('/company/realtors')}
            />
          </div>
        </main>
      </div>
    );
  }

  if (pageState === 'exportSuccess') {
    return (
      <div className="flex flex-col h-full">
        <CustomerHeader />
        <main className="flex-1 p-6 bg-gray-50 flex items-center justify-center">
          <div className="w-full max-w-lg">
            <SuccessCard
              title="Export Successful"
              subtitle="Your file will download in the next few seconds"
              onDone={() => setPageState('form')}
            />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <CustomerHeader />

      <main className="flex-1 p-6 bg-gray-50 overflow-auto space-y-6">
        {/* Back + Title */}
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/company/realtors')} className="text-gray-400 hover:text-gray-600">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Select Assets to Transfer</h1>
            <p className="text-sm text-gray-400 mt-0.5">Choose Properties (Select one or multiple properties to transfer)</p>
          </div>
        </div>

        {/* ── Property selection ── */}
        <div className="flex gap-4 flex-wrap">
          {TRANSFER_PROPERTIES.map((prop, idx) => (
            <button
              key={idx}
              onClick={() => toggleProp(idx)}
              className={`w-56 rounded-xl border-2 overflow-hidden text-left transition-all shadow-sm ${
                selectedProps.includes(idx) ? 'border-green-500' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <div className="relative">
                <img src={prop.image} alt={prop.name} className="w-full h-36 object-cover" />
                <button
                  onClick={e => e.stopPropagation()}
                  className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow"
                >
                  <Heart className="w-3.5 h-3.5 text-gray-400" />
                </button>
                {selectedProps.includes(idx) && (
                  <div className="absolute inset-0 bg-green-500/10 flex items-center justify-center">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-3 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-900 truncate">{prop.name}</span>
                  <span className="text-xs font-bold text-gray-700 ml-1 flex-shrink-0">{prop.price}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <MapPin className="w-3 h-3" />
                  <span className="text-xs">{prop.location}</span>
                </div>
                <p className="text-xs text-gray-400 leading-tight line-clamp-3">{prop.description}</p>
                <div className="flex items-center gap-2 text-gray-400 text-xs pt-0.5">
                  <span className="flex items-center gap-0.5"><BedDouble className="w-3 h-3" />3</span>
                  <span className="flex items-center gap-0.5"><Bath className="w-3 h-3" />3</span>
                  <span className="flex items-center gap-0.5"><Car className="w-3 h-3" />3</span>
                  <span className="flex items-center gap-0.5">🏠 3</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* ── Select Realtor ── */}
        <div>
          <h2 className="text-base font-bold text-gray-900 mb-4">Select  Realor</h2>
          <div className="flex gap-4 flex-wrap">
            {TRANSFER_AGENTS.map((agent, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedAgent(idx);
                  setForm(p => ({ ...p, fullName: agent.name }));
                }}
                className={`w-40 flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  selectedAgent === idx ? 'border-green-500 bg-green-50' : 'border-gray-100 bg-white hover:border-gray-200'
                }`}
              >
                <img src={agent.avatar} alt={agent.name} className="w-16 h-16 rounded-full object-cover" />
                <span className="text-xs font-medium text-gray-800 text-center">{agent.name}</span>
                <span className="text-xs font-semibold text-orange-500">{agent.properties} Properties</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Form ── */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-5">
          <div className="grid grid-cols-2 gap-5">
            {[['Full Name', 'fullName'], ['Email', 'email']].map(([label, key]) => (
              <div key={key} className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">{label}</label>
                <input
                  type="text"
                  value={form[key as keyof typeof form]}
                  onChange={e => set(key as keyof typeof form)(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-5">
            {[['Phone Number', 'phone'], ['License  ID', 'licenseId'], ['No of Property', 'noOfProperty']].map(([label, key]) => (
              <div key={key} className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">{label}</label>
                <input
                  type="text"
                  value={form[key as keyof typeof form]}
                  onChange={e => set(key as keyof typeof form)(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setPageState('transferSuccess')}
              className="px-10 py-3 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg transition-colors"
            >
              Transfer Property
            </button>
            <button
              onClick={() => navigate('/company/realtors')}
              className="px-10 py-3 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancle
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyTransferAgent;
