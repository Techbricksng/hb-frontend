import { useState } from 'react';
import { Plus, Paperclip, Camera, Smile } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const CONVERSATIONS = [
  {
    id: 1,
    name: 'Efb Real Estate',
    time: '15:20',
    preview: 'Typing',
    isTyping: true,
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/PNG_transparency_demonstration_1.png/240px-PNG_transparency_demonstration_1.png',
    avatarBg: 'bg-yellow-100',
    avatarLetter: 'E',
    avatarColor: 'text-yellow-700',
    unread: true,
  },
  {
    id: 2,
    name: 'Zarksy Real Estate',
    time: '15:20',
    preview: 'We are currently unable to upload.......',
    isTyping: false,
    avatarBg: 'bg-gray-100',
    avatarLetter: 'Z',
    avatarColor: 'text-gray-500',
  },
  {
    id: 3,
    name: 'Housewise Company',
    time: '15:20',
    preview: 'We are currently unable to upload.......',
    isTyping: false,
    avatarBg: 'bg-gray-100',
    avatarLetter: 'H',
    avatarColor: 'text-gray-400',
  },
  {
    id: 4,
    name: 'Housejob Company',
    time: '15:20',
    preview: 'We are currently unable to add.......',
    isTyping: false,
    avatarBg: 'bg-gray-200',
    avatarLetter: 'H',
    avatarColor: 'text-gray-500',
  },
  {
    id: 5,
    name: 'Houslet Company',
    time: '15:20',
    preview: 'Thank you for the updates...',
    isTyping: false,
    avatarBg: 'bg-blue-100',
    avatarLetter: 'H',
    avatarColor: 'text-blue-500',
  },
  {
    id: 6,
    name: 'Memona Real Estate Company',
    time: '15:20',
    preview: 'Thank you for the new update',
    isTyping: false,
    avatarBg: 'bg-red-500',
    avatarLetter: 'M',
    avatarColor: 'text-white',
  },
  {
    id: 7,
    name: 'Real Estate Deals',
    time: '15:20',
    preview: 'Typing',
    isTyping: true,
    avatarBg: 'bg-gray-800',
    avatarLetter: 'R',
    avatarColor: 'text-white',
  },
  {
    id: 8,
    name: 'Real Estate Deals',
    time: '15:20',
    preview: 'i was get back to you',
    isTyping: false,
    avatarBg: 'bg-orange-700',
    avatarLetter: 'R',
    avatarColor: 'text-white',
  },
];

const CHAT_MESSAGES = [
  {
    id: 1,
    date: 'Tuesday 12 Jan 2025',
    time: '15:20',
    text: 'Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.',
    isIncoming: true,
  },
  {
    id: 2,
    date: 'Tuesday 12 Jan 2025',
    time: '15:20',
    text: 'Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.',
    isIncoming: false,
  },
  {
    id: 3,
    date: 'Tuesday 12 Jan 2025',
    time: '15:20',
    text: 'Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.\nThanks and kindly reply me as a quick as possible',
    isIncoming: true,
  },
  {
    id: 4,
    date: 'Tuesday 12 Jan 2025',
    time: '15:20',
    text: 'Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.\nThanks and kindly reply me as a quick as possible',
    isIncoming: false,
  },
];

// Media file grid items — mixed types
const MEDIA_ITEMS = [
  { type: 'excel' }, { type: 'photo', src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=80&q=60' },
  { type: 'pdf' },  { type: 'photo', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=80&q=60' },
  { type: 'link' }, { type: 'photo', src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=80&q=60' },
  { type: 'photo', src: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=80&q=60' },
  { type: 'excel' }, { type: 'excel' },
  { type: 'photo', src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=80&q=60' },
  { type: 'pdf' }, { type: 'photo', src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=80&q=60' },
  { type: 'excel' }, { type: 'photo', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=80&q=60' },
  { type: 'link' },
  { type: 'photo', src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=80&q=60' },
  { type: 'photo', src: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=80&q=60' },
  { type: 'excel' }, { type: 'link' },
  { type: 'photo', src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=80&q=60' },
  { type: 'pdf' }, { type: 'photo', src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=80&q=60' },
  { type: 'excel' }, { type: 'photo', src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=80&q=60' },
  { type: 'link' }, { type: 'photo', src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=80&q=60' },
  { type: 'excel' }, { type: 'pdf' },
  { type: 'photo', src: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=80&q=60' },
  { type: 'link' }, { type: 'photo', src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=80&q=60' },
  { type: 'excel' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

const AvatarCircle = ({ name, avatarBg, avatarLetter, avatarColor, size = 'md' }: {
  name: string; avatarBg: string; avatarLetter: string; avatarColor: string; size?: 'sm' | 'md';
}) => {
  const dim = size === 'sm' ? 'w-8 h-8 text-xs' : 'w-10 h-10 text-sm';
  return (
    <div className={`${dim} rounded-full ${avatarBg} flex items-center justify-center font-bold ${avatarColor} flex-shrink-0`}>
      {avatarLetter}
    </div>
  );
};

const ExcelIcon = () => (
  <div className="w-full h-full bg-green-600 rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-lg">X</span>
  </div>
);

const PdfIcon = () => (
  <div className="w-full h-full bg-red-600 rounded-lg flex items-center justify-center">
    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM8 17h8v1H8v-1zm0-2h8v1H8v-1zm0-2h5v1H8v-1z"/>
    </svg>
  </div>
);

const LinkIcon = () => (
  <div className="w-full h-full bg-white border border-gray-200 rounded-lg flex items-center justify-center">
    <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  </div>
);

const MediaThumb = ({ item }: { item: typeof MEDIA_ITEMS[0] }) => (
  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
    {item.type === 'excel' && <ExcelIcon />}
    {item.type === 'pdf'   && <PdfIcon />}
    {item.type === 'link'  && <LinkIcon />}
    {item.type === 'photo' && item.src && (
      <img src={item.src} alt="media" className="w-full h-full object-cover" />
    )}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
const AdminMessages = () => {
  const [activeTab, setActiveTab] = useState<'Company' | 'Unread' | 'Read'>('Company');
  const [rightTab, setRightTab] = useState<'Chat' | 'Media Files'>('Chat');
  const [selectedId, setSelectedId] = useState(1);
  const [messageInput, setMessageInput] = useState('');

  const selected = CONVERSATIONS.find(c => c.id === selectedId) ?? CONVERSATIONS[0];

  return (
    <div className="flex flex-col h-full">
      <CustomerHeader />

      <main className="flex-1 flex overflow-hidden bg-white">

        {/* ── Left panel: conversation list ── */}
        <div className="w-[340px] flex-shrink-0 border-r border-gray-100 flex flex-col bg-white">

          {/* Header */}
          <div className="px-5 pt-5 pb-3 space-y-3">
            <h1 className="text-2xl font-bold text-gray-900">Messages</h1>

            {/* Search + compose */}
            <div className="flex items-center gap-2">
              <div className="flex-1 flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
                <input
                  type="text"
                  placeholder="Search Something"
                  className="flex-1 text-sm text-gray-600 outline-none bg-transparent"
                />
                <div className="w-6 h-6 bg-green-600 rounded-md flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                  </svg>
                </div>
              </div>
              <button className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors flex-shrink-0">
                <Plus className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 border-b border-gray-100">
              {(['Company (203)', 'Unread', 'Read'] as const).map((tab) => {
                const key = tab.replace(' (203)', '') as 'Company' | 'Unread' | 'Read';
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(key)}
                    className={`pb-2 text-sm font-medium transition-colors border-b-2 -mb-px ${
                      activeTab === key
                        ? 'border-gray-900 text-gray-900'
                        : 'border-transparent text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Conversation list */}
          <div className="flex-1 overflow-y-auto">
            {CONVERSATIONS.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedId(conv.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  selectedId === conv.id ? 'bg-green-50' : 'hover:bg-gray-50'
                }`}
              >
                <AvatarCircle
                  name={conv.name}
                  avatarBg={conv.avatarBg}
                  avatarLetter={conv.avatarLetter}
                  avatarColor={conv.avatarColor}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-800 truncate">{conv.name}</span>
                    <span className="text-xs text-gray-400 flex-shrink-0 ml-2">{conv.time}</span>
                  </div>
                  <p className={`text-xs truncate mt-0.5 ${conv.isTyping ? 'text-green-600 italic' : 'text-gray-400'}`}>
                    {conv.preview}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Right panel ── */}
        <div className="flex-1 flex flex-col min-w-0">

          {/* Chat / Media Files tabs */}
          <div className="flex border-b border-gray-100 px-6">
            {(['Chat', 'Media Files'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setRightTab(tab)}
                className={`py-4 px-4 text-sm font-medium border-b-2 -mb-px transition-colors ${
                  rightTab === tab
                    ? 'border-green-600 text-green-700'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ── Chat view ── */}
          {rightTab === 'Chat' && (
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5 bg-white">
                {CHAT_MESSAGES.map((msg) => (
                  <div key={msg.id}>
                    {msg.isIncoming ? (
                      /* Incoming — left aligned */
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 font-medium">{msg.date}</span>
                          <span className="text-xs text-gray-400">{msg.time}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <AvatarCircle
                            name={selected.name}
                            avatarBg={selected.avatarBg}
                            avatarLetter={selected.avatarLetter}
                            avatarColor={selected.avatarColor}
                            size="sm"
                          />
                          <p className="text-sm text-gray-700 leading-relaxed max-w-md whitespace-pre-line">
                            {msg.text}
                          </p>
                        </div>
                      </div>
                    ) : (
                      /* Outgoing — right aligned bubble */
                      <div className="flex justify-end">
                        <div className="bg-gray-100 rounded-2xl rounded-tr-none p-4 max-w-md relative">
                          <div className="flex items-center justify-between gap-6 mb-2">
                            <span className="text-xs text-gray-500 font-medium">{msg.date}</span>
                            <span className="text-xs text-gray-400">{msg.time}</span>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed text-right whitespace-pre-line">
                            {msg.text}
                          </p>
                          {/* Admin avatar */}
                          <div className="absolute -right-4 top-4 w-8 h-8 rounded-full bg-gray-300 overflow-hidden border-2 border-white">
                            <img
                              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&q=70"
                              alt="admin"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Message input */}
              <div className="px-6 py-4 border-t border-gray-100">
                <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-white">
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Smile className="w-5 h-5" />
                  </button>
                  <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="Message"
                    className="flex-1 text-sm text-gray-600 outline-none bg-transparent"
                  />
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <Camera className="w-5 h-5" />
                  </button>
                  <button className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── Media Files view ── */}
          {rightTab === 'Media Files' && (
            <div className="flex-1 overflow-y-auto p-6">
              <div className="flex flex-wrap gap-3">
                {MEDIA_ITEMS.map((item, idx) => (
                  <MediaThumb key={idx} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminMessages;
