import { useState } from 'react';
import { Search, ChevronRight } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// ─────────────────────────────────────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────────────────────────────────────
type SupportTab = 'Help & Support' | 'FAQ';

const GUIDES = [
  {
    title: 'The details to look for when approving a property',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80',
  },
  {
    title: 'How to manage Agent/Customer relationship',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
  },
  {
    title: 'Common  Agents questions',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80',
  },
  {
    title: 'Common  Age',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
];

const FAQS = [
  { q: 'How do I approve a property listing?', a: 'Navigate to the Property section, find the pending property, click the 3-dot menu and select Approve. You can review all details before confirming.' },
  { q: 'How do I add a new realtor?', a: 'Go to Manage Agents, click the "+ Add Realtor" button in the top right, fill in the realtor details and submit for review.' },
  { q: 'How can I transfer a property from one agent to another?', a: 'Open Manage Agents, find the agent with the property, click their 3-dot menu, select "Transfer Realtor" and follow the steps to select properties and the receiving agent.' },
  { q: 'How do I view transaction details?', a: 'Go to Transactions, find the transaction in the table, click the 3-dot action menu and select "View Details" to see the full payment breakdown.' },
  { q: 'How do I export revenue data?', a: 'Navigate to the Revenue page and click the purple "Export Revenue" button in the top right. Your file will begin downloading automatically.' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
const CompanySupport = () => {
  const [activeTab, setActiveTab] = useState<SupportTab>('Help & Support');
  const [guideSearch, setGuideSearch] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    fullName: '', email: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof form) => (v: string) =>
    setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setForm({ fullName: '', email: '', subject: '', message: '' }); }, 3000);
  };

  const filteredGuides = GUIDES.filter(g =>
    g.title.toLowerCase().includes(guideSearch.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <CustomerHeader />

      <main className="flex-1 bg-white overflow-auto">

        {/* ── Tabs ── */}
        <div className="flex border-b border-gray-200 px-6">
          {(['Help & Support', 'FAQ'] as SupportTab[]).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 py-4 mr-8 text-sm font-medium transition-colors relative ${
                activeTab === tab ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900 rounded-t" />
              )}
            </button>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════
            HELP & SUPPORT TAB
        ══════════════════════════════════════════════════════════ */}
        {activeTab === 'Help & Support' && (
          <div className="px-6 py-8 space-y-10">

            {/* ── Hero heading + search ── */}
            <div className="space-y-5">
              <h1 className="text-3xl font-bold text-gray-900">Hi Esther, how can we help?</h1>
              <div className="relative max-w-xl">
                <input
                  type="text"
                  placeholder="Search how - tos and more"
                  value={guideSearch}
                  onChange={e => setGuideSearch(e.target.value)}
                  className="w-full pl-6 pr-14 py-4 border border-gray-200 rounded-full text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <Search className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* ── Guides section ── */}
            <div>
              <div className="flex items-center gap-4 mb-5">
                <h2 className="text-xl font-bold text-gray-900">Guides for getting started</h2>
                <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
                  Browse all topics <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Guide cards — horizontal scroll on small, grid on large */}
              <div className="flex gap-5 overflow-x-auto pb-2">
                {filteredGuides.map((guide, idx) => (
                  <button
                    key={idx}
                    className="flex-shrink-0 w-56 text-left group hover:opacity-90 transition-opacity"
                  >
                    <div className="h-40 rounded-xl overflow-hidden mb-3">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-800 leading-snug">{guide.title}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* ── Have a complaint form ── */}
            <div className="border-t border-gray-100 pt-8">
              <h2 className="text-xl font-bold text-gray-900 text-center mb-7">Have a complaint?</h2>

              {submitted ? (
                <div className="max-w-2xl mx-auto bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                  <p className="text-green-700 font-semibold">✓ Your complaint has been submitted successfully!</p>
                  <p className="text-green-600 text-sm mt-1">Our support team will get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="max-w-2xl mx-auto space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g John"
                      value={form.fullName}
                      onChange={e => set('fullName')(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
                    <input
                      type="email"
                      placeholder="@gmail.com"
                      value={form.email}
                      onChange={e => set('email')(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
                    <input
                      type="text"
                      placeholder="What is this about?"
                      value={form.subject}
                      onChange={e => set('subject')(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Describe your complaint in detail..."
                      value={form.message}
                      onChange={e => set('message')(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleSubmit}
                      className="px-10 py-3 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════
            FAQ TAB
        ══════════════════════════════════════════════════════════ */}
        {activeTab === 'FAQ' && (
          <div className="px-6 py-8 max-w-2xl space-y-3">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-100 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm font-semibold text-gray-800">{faq.q}</span>
                  <span className={`ml-3 flex-shrink-0 text-gray-400 text-lg transition-transform ${openFaq === idx ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 border-t border-gray-50">
                    <p className="text-sm text-gray-500 leading-relaxed pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </main>
    </div>
  );
};

export default CompanySupport;
