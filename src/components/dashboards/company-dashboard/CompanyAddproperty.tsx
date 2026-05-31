// src/components/dashboards/company-dashboard/CompanyAddProperty.tsx
import { useState, useRef, DragEvent, ChangeEvent } from 'react';
import { CloudUpload, ChevronLeft, Star, MapPin, BedDouble, Bath, Car, CheckCircle, XCircle, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CustomerHeader from './CustomerHeader';


const Field = ({
  label, placeholder = 'Value', value, onChange, className = '',
}: { label?: string; placeholder?: string; value: string; onChange: (v: string) => void; className?: string }) => (
  <div className={`flex flex-col gap-1.5 ${className}`}>
    {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
    />
  </div>
);

// Property preview card (shared across confirmation states)
const PropertyPreviewCard = () => (
  <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
    <div className="flex gap-3 h-56">
      <div className="flex-[1.6] rounded-xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80" alt="hero" className="w-full h-full object-cover" />
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
    <div className="mt-4 space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-gray-900">Rendez House Bay</h3>
        <span className="flex items-center gap-1 text-sm font-semibold text-gray-700"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />4.6</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 text-gray-400 text-sm"><MapPin className="w-3.5 h-3.5" />Lagos, Nigeria</div>
        <div className="flex items-center gap-3 text-gray-400 text-sm">
          <span className="flex items-center gap-1"><BedDouble className="w-3.5 h-3.5" />3</span>
          <span className="flex items-center gap-1"><Bath className="w-3.5 h-3.5" />3</span>
          <span className="flex items-center gap-1"><Car className="w-3.5 h-3.5" />3</span>
        </div>
      </div>
      <p className="text-lg font-bold text-green-600">₦250,000</p>
      <div className="flex gap-8 pt-2">
        <div>
          <p className="text-xs font-semibold text-gray-700 mb-2">Property Realtor</p>
          <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="realtor" className="w-10 h-10 rounded-full object-cover" />
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-700 mb-2">Facilities</p>
          <div className="flex flex-wrap gap-2">
            {['Big swimmig pool', 'Big size garden', '24/7  electricity'].map((f, i) => (
              <span key={i} className="px-3 py-1 rounded-full border border-gray-200 text-xs text-gray-600">{f}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);


const StepForm = ({ onNext, onCancel }: { onNext: () => void; onCancel: () => void }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [form, setForm] = useState({
    propertyName: '', propertyType: '', price: '',
    facility1: '', facility2: '', facility3: '', facility4: '',
    location: '', city: '', currentStatus: '',
    locationDetail: '', bedrooms: '', bathrooms: '', parkingSpace: '',
    description: '',
  });
  const set = (k: keyof typeof form) => (v: string) => setForm(p => ({ ...p, [k]: v }));

  const handleFile = (file: File) => {
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = e => setPreviewUrl(e.target?.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <main className="flex-1 p-6 bg-gray-50 overflow-auto space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <button onClick={onCancel} className="text-gray-400 hover:text-gray-600"><ChevronLeft className="w-4 h-4" /></button>
          <h1 className="text-xl font-bold text-gray-900">Property</h1>
        </div>
        <p className="text-xs text-gray-400 ml-6">Properties &nbsp;›&nbsp; <span className="text-gray-500">Property Details</span></p>
      </div>

      {/* Upload zone */}
      <div
        onClick={() => fileInputRef.current?.click()}
        onDragOver={e => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files?.[0]; if (f) handleFile(f); }}
        className={`w-full border-2 border-dashed rounded-xl cursor-pointer flex flex-col items-center justify-center py-16 px-6 transition-colors ${dragOver ? 'border-green-400 bg-green-50' : 'border-gray-300 bg-white hover:border-green-400 hover:bg-green-50'}`}
      >
        {previewUrl ? (
          <div className="flex flex-col items-center gap-3">
            <img src={previewUrl} alt="preview" className="max-h-48 rounded-lg object-contain shadow" />
            <p className="text-xs text-gray-500">{fileName}</p>
            <p className="text-xs text-green-600 underline">Click to change image</p>
          </div>
        ) : (
          <>
            <CloudUpload className="w-12 h-12 text-green-600 mb-3" strokeWidth={1.5} />
            <p className="text-sm font-semibold text-gray-700">Drop your image here or <span className="text-green-600 underline">click on Browse</span></p>
            <p className="text-xs text-gray-400 mt-1">JPG, PNG or PDF file size not more than 10mb</p>
          </>
        )}
        <input ref={fileInputRef} type="file" accept="image/*,.pdf" className="hidden" onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
      </div>

      {/* Form */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-6">
        <div>
          <h2 className="text-base font-bold text-gray-900">Property Details</h2>
          <p className="text-xs text-gray-400 mt-0.5">Your message will be delivered to the receiver</p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <Field label="Property Name" value={form.propertyName} onChange={set('propertyName')} />
          <Field label="Property type" value={form.propertyType} onChange={set('propertyType')} />
          <Field label="Price" value={form.price} onChange={set('price')} />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700 block mb-1.5">Facilities</label>
          <div className="grid grid-cols-4 gap-4">
            <Field value={form.facility1} onChange={set('facility1')} />
            <Field value={form.facility2} onChange={set('facility2')} />
            <Field value={form.facility3} onChange={set('facility3')} />
            <Field value={form.facility4} onChange={set('facility4')} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <Field label="Location" value={form.location} onChange={set('location')} />
          <Field label="City" value={form.city} onChange={set('city')} />
          <Field label="Current Status" value={form.currentStatus} onChange={set('currentStatus')} />
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Field label="Location" value={form.locationDetail} onChange={set('locationDetail')} />
          <Field label="Bedrooms" value={form.bedrooms} onChange={set('bedrooms')} />
          <Field label="Bathrooms" value={form.bathrooms} onChange={set('bathrooms')} />
          <Field label="Parking space" value={form.parkingSpace} onChange={set('parkingSpace')} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Description</label>
          <textarea placeholder="Value" rows={4} value={form.description} onChange={e => set('description')(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white resize-none" />
        </div>
        <div className="flex justify-end gap-3 pt-2">
          <button onClick={onCancel} className="px-8 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">Cancel</button>
          <button onClick={onNext} className="px-8 py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-medium transition-colors">Next</button>
        </div>
      </div>
    </main>
  );
};


const AGENTS = [
  { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/44.jpg' },
  { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/52.jpg' },
  { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/60.jpg' },
  { name: 'Abubakar Isa', avatar: 'https://randomuser.me/api/portraits/men/71.jpg' },
];

const StepAssign = ({ onConfirm, onCancel }: { onConfirm: (success: boolean) => void; onCancel: () => void }) => {
  const [selectedAgent, setSelectedAgent] = useState<number | null>(null);
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', agentId: '' });
  const set = (k: keyof typeof form) => (v: string) => setForm(p => ({ ...p, [k]: v }));

  return (
    <main className="flex-1 p-6 bg-gray-50 overflow-auto">
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 space-y-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Assign Property to Realtor</h2>
          <p className="text-sm text-gray-400 mt-1">Active agents will be selected</p>
        </div>

        {/* Agent selector cards */}
        <div className="flex gap-4 flex-wrap">
          {AGENTS.map((agent, idx) => (
            <button
              key={idx}
              onClick={() => { setSelectedAgent(idx); setForm(p => ({ ...p, fullName: agent.name })); }}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 w-36 transition-all ${
                selectedAgent === idx ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
            >
              <img src={agent.avatar} alt={agent.name} className="w-16 h-16 rounded-full object-cover" />
              <span className="text-xs font-medium text-gray-700 text-center">{agent.name}</span>
            </button>
          ))}
        </div>

        {/* Form fields */}
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <Field label="Full Name" value={form.fullName} onChange={set('fullName')} />
            <Field label="Email" value={form.email} onChange={set('email')} />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <Field label="Phone Number" value={form.phone} onChange={set('phone')} />
            <Field label="Agent ID" placeholder="EFAB002" value={form.agentId} onChange={set('agentId')} />
          </div>
        </div>

        {/* Step dots */}
        <div className="flex items-center justify-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-gray-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-gray-700" />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => onConfirm(true)}
            className="px-16 py-3 bg-gray-700 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className="px-16 py-3 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </main>
  );
};

const StepConfirmation = ({ success, onBack, onRetry }: { success: boolean; onBack: () => void; onRetry: () => void }) => (
  <main className="flex-1 p-6 bg-gray-50 overflow-auto space-y-6">
    {/* Property preview */}
    <PropertyPreviewCard />

    {/* Success card */}
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-10 flex flex-col items-center text-center">
      {success ? (
        <>
          <div className="w-16 h-16 mb-4">
            {/* Green checkbox emoji-style icon */}
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
              <CheckCircle className="w-9 h-9 text-white fill-white" strokeWidth={2} />
            </div>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">Successful</h3>
          <p className="text-sm text-gray-400 mb-5">Your property has been successfully sent for validation</p>
          <button onClick={onBack} className="px-8 py-2.5 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg transition-colors">
            Back to Home
          </button>
        </>
      ) : (
        <>
          <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg mb-4">
            <XCircle className="w-9 h-9 text-white fill-white" strokeWidth={2} />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">Error</h3>
          <p className="text-sm text-gray-400 mb-5">Failed. Please try again or contact support if the issue persists.</p>
          <div className="flex items-center gap-3">
            <button onClick={onRetry} className="px-8 py-2.5 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-colors">Try Again</button>
            <button className="px-8 py-2.5 border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors">Get Help</button>
          </div>
        </>
      )}
    </div>
  </main>
);

type Step = 'form' | 'assign' | 'success' | 'error';

const CompanyAddPropertyCreate = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('form');

  return (
    <div className="flex flex-col h-full">
      <CustomerHeader />
      {step === 'form' && (
        <StepForm
          onNext={() => setStep('assign')}
          onCancel={() => navigate('/company/property')}
        />
      )}
      {step === 'assign' && (
        <StepAssign
          onConfirm={(ok) => setStep(ok ? 'success' : 'error')}
          onCancel={() => setStep('form')}
        />
      )}
      {step === 'success' && (
        <StepConfirmation
          success={true}
          onBack={() => navigate('/company/overview')}
          onRetry={() => setStep('form')}
        />
      )}
      {step === 'error' && (
        <StepConfirmation
          success={false}
          onBack={() => navigate('/company/overview')}
          onRetry={() => setStep('form')}
        />
      )}
    </div>
  );
};

export default CompanyAddPropertyCreate;
