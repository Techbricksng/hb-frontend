import { useState, useRef, useEffect } from 'react';
import { Search, Plus, Smile, Paperclip, Camera } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// ─────────────────────────────────────────────────────────────────────────────
// Types & Data
// ─────────────────────────────────────────────────────────────────────────────
type MsgTab = 'Chat' | 'Request' | 'Media Files';

interface Message {
  id: number;
  from: 'them' | 'me';
  text: string;
  date: string;
  time: string;
}

interface Conversation {
  id: number;
  name: string;
  avatar: string;
  preview: string;
  time: string;
  isTyping: boolean;
  useIcon?: boolean;
}

const CONVERSATIONS: Conversation[] = [
  { id: 1, name: 'Real Estate Deals', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', preview: 'Typing', time: '15:20', isTyping: true },
  { id: 2, name: 'Real Estate Deals', avatar: 'https://randomuser.me/api/portraits/men/44.jpg', preview: 'I was get back to you', time: '15:20', isTyping: false },
  { id: 3, name: 'Real Estate Deals', avatar: 'https://randomuser.me/api/portraits/men/52.jpg', preview: 'Typing', time: '15:20', isTyping: true, useIcon: true },
  { id: 4, name: 'Real Estate Deals', avatar: 'https://randomuser.me/api/portraits/men/60.jpg', preview: 'I was get back to you', time: '15:20', isTyping: false, useIcon: true },
  { id: 5, name: 'Real Estate Deals', avatar: 'https://randomuser.me/api/portraits/men/65.jpg', preview: 'Typing', time: '15:20', isTyping: true },
  { id: 6, name: 'Real Estate Deals', avatar: 'https://randomuser.me/api/portraits/men/71.jpg', preview: 'I was get back to you', time: '15:20', isTyping: false, useIcon: true },
  { id: 7, name: 'Real Estate Deals', avatar: 'https://randomuser.me/api/portraits/men/83.jpg', preview: 'Typing', time: '15:20', isTyping: true },
  { id: 8, name: 'Real Estate Deals', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', preview: 'I was get back to you', time: '15:20', isTyping: false, useIcon: true },
];

const MESSAGES: Message[] = [
  {
    id: 1, from: 'them',
    text: 'Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.',
    date: 'tuesday 12 Jan 2025', time: '15:20',
  },
  {
    id: 2, from: 'me',
    text: 'Good evening , please do you have more properties in Abuja that i can',
    date: 'tuesday 12 Jan 2025', time: '15:20',
  },
  {
    id: 3, from: 'them',
    text: 'Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.\nThanks and kindly reply me as a quick as possible',
    date: 'tuesday 12 Jan 2025', time: '15:20',
  },
  {
    id: 4, from: 'me',
    text: 'Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.\nThanks and kindly reply me as a quick as possible',
    date: 'tuesday 12 Jan 2025', time: '15:20',
  },
  {
    id: 5, from: 'me',
    text: 'Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.\nThanks and kindly reply me as a quick as possible',
    date: 'tuesday 12 Jan 2025', time: '15:20',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Conversation List Item
// ─────────────────────────────────────────────────────────────────────────────
const ConvItem = ({
  conv, active, onClick,
}: { conv: Conversation; active: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors rounded-xl ${
      active ? 'bg-green-600' : 'hover:bg-gray-50'
    }`}
  >
    {conv.useIcon ? (
      <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9.75L12 3l9 6.75V21H3V9.75z" />
        </svg>
      </div>
    ) : (
      <img src={conv.avatar} alt={conv.name} className="w-10 h-10 rounded-full object-cover flex-shrink-0" />
    )}
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between">
        <span className={`text-sm font-semibold truncate ${active ? 'text-white' : 'text-gray-800'}`}>
          {conv.name}
        </span>
        <span className={`text-xs flex-shrink-0 ml-2 ${active ? 'text-green-100' : 'text-gray-400'}`}>
          {conv.time}
        </span>
      </div>
      <p className={`text-xs truncate mt-0.5 ${
        active ? 'text-green-100' : conv.isTyping ? 'text-green-500 italic' : 'text-gray-400'
      }`}>
        {conv.preview}
      </p>
    </div>
  </button>
);

// ─────────────────────────────────────────────────────────────────────────────
// Message Bubble
// ─────────────────────────────────────────────────────────────────────────────
const MsgBubble = ({ msg, myAvatar }: { msg: Message; myAvatar: string }) => {
  const isMe = msg.from === 'me';
  return (
    <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} gap-2`}>
      {/* Date/time header */}
      <div className={`flex items-center justify-between w-full px-1`}>
        <span className="text-xs text-gray-400">{msg.date}</span>
        <span className="text-xs text-gray-400">{msg.time}</span>
      </div>

      {isMe ? (
        // Sent — dark gray bubble, right aligned with avatar
        <div className="flex items-end gap-2 justify-end w-full">
          <div className="bg-gray-700 text-white rounded-2xl rounded-tr-sm px-5 py-4 max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-wide mb-2 text-gray-300">
              {msg.text.split('\n')[0].toUpperCase()}
            </p>
            {msg.text.split('\n').slice(1).map((line, i) => (
              <p key={i} className="text-sm text-gray-200 leading-relaxed">{line}</p>
            ))}
            {msg.text.split('\n').length === 1 && (
              <p className="text-sm text-gray-200 leading-relaxed">{msg.text}</p>
            )}
          </div>
          <img src={myAvatar} alt="me" className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
        </div>
      ) : (
        // Received — white/gray bg, left aligned with avatar
        <div className="flex items-start gap-3 w-full">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="them" className="w-8 h-8 rounded-full object-cover flex-shrink-0 mt-1" />
          <div className="max-w-sm">
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{msg.text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
const CompanyMessages = () => {
  const [activeConv, setActiveConv] = useState(0);
  const [msgTab, setMsgTab] = useState<MsgTab>('Chat');
  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>(MESSAGES);
  const bottomRef = useRef<HTMLDivElement>(null);
  const msgTabs: MsgTab[] = ['Chat', 'Request', 'Media Files'];

  const myAvatar = 'https://randomuser.me/api/portraits/women/68.jpg';

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      from: 'me',
      text: input.trim(),
      date: 'tuesday 12 Jan 2025',
      time: '15:20',
    }]);
    setInput('');
  };

  const filteredConvs = CONVERSATIONS.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <CustomerHeader />

      {/* ── Two-panel body ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── LEFT PANEL: Conversation list ── */}
        <div className="w-80 flex-shrink-0 border-r border-gray-100 flex flex-col bg-white">
          {/* Title */}
          <div className="px-5 pt-5 pb-4">
            <h1 className="text-xl font-bold text-gray-900 mb-4">Messages</h1>
            {/* Search + Plus */}
            <div className="flex items-center gap-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search Something"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-green-600 rounded-lg flex items-center justify-center">
                  <Search className="w-3.5 h-3.5 text-white" />
                </button>
              </div>
              <button className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center hover:bg-green-700 transition-colors flex-shrink-0">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Conversation list */}
          <div className="flex-1 overflow-y-auto px-3 space-y-1 pb-4">
            {filteredConvs.map((conv, idx) => (
              <ConvItem
                key={conv.id}
                conv={conv}
                active={activeConv === idx}
                onClick={() => setActiveConv(idx)}
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT PANEL: Chat ── */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Tabs */}
          <div className="flex border-b border-gray-100 px-6">
            {msgTabs.map(tab => (
              <button
                key={tab}
                onClick={() => setMsgTab(tab)}
                className={`px-6 py-4 text-sm font-medium transition-colors relative ${
                  msgTab === tab ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {tab}
                {msgTab === tab && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-t" />
                )}
              </button>
            ))}
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
            {msgTab === 'Chat' ? (
              messages.map(msg => (
                <MsgBubble key={msg.id} msg={msg} myAvatar={myAvatar} />
              ))
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                No {msgTab.toLowerCase()} yet
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* ── Input bar ── */}
          <div className="border-t border-gray-100 px-6 py-4">
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3">
              <button className="text-gray-400 hover:text-gray-600 flex-shrink-0">
                <Smile className="w-5 h-5" />
              </button>
              <input
                type="text"
                placeholder="Message"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
                className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              />
              <div className="flex items-center gap-2 flex-shrink-0">
                <button className="text-gray-400 hover:text-gray-600">
                  <Paperclip className="w-4 h-4" />
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <Camera className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={sendMessage}
                className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-xl transition-colors flex-shrink-0"
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyMessages;
