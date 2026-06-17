import { useState } from 'react';
import { Search, Plus, Settings, Bell, Paperclip, Camera, Send } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// Import profile images - replace with your actual image imports
import estherProfile from '../../../assets/1.png';
import userAvatar from '../../../assets/3.png';
import houseIcon from '../../../assets/6.png';

interface Contact {
  id: number;
  name: string;
  lastMessage: string;
  time: string;
  avatar: string;
  isActive?: boolean;
}

interface Message {
  id: number;
  text: string;
  timestamp: string;
  isOwn: boolean;
  avatar?: string;
}

const MessagesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [messageText, setMessageText] = useState('');
  const [activeContact, setActiveContact] = useState(1);

  const contacts: Contact[] = [
    {
      id: 1,
      name: "Real Estate Deals",
      lastMessage: "Typing...",
      time: "15:20",
      avatar: userAvatar,
      isActive: true
    },
    {
      id: 2,
      name: "Real Estate Deals",
      lastMessage: "I was get back to you",
      time: "15:20",
      avatar: userAvatar
    },
    {
      id: 3,
      name: "Real Estate Deals",
      lastMessage: "Typing...",
      time: "15:20",
      avatar: userAvatar
    },
    {
      id: 4,
      name: "Real Estate Deals",
      lastMessage: "I was get back to you",
      time: "15:30",
      avatar: houseIcon
    },
    {
      id: 5,
      name: "Real Estate Deals",
      lastMessage: "I was get back to you",
      time: "15:20",
      avatar: userAvatar
    },
    {
      id: 6,
      name: "Real Estate Deals",
      lastMessage: "I was get back to you",
      time: "15:30",
      avatar: houseIcon
    },
    {
      id: 7,
      name: "Real Estate Deals",
      lastMessage: "I was get back to you",
      time: "15:30",
      avatar: userAvatar
    },
    {
      id: 8,
      name: "Real Estate Deals",
      lastMessage: "I was get back to you",
      time: "15:30",
      avatar: houseIcon
    }
  ];

  const messages: Message[] = [
    {
      id: 1,
      text: "Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.",
      timestamp: "tuesday 12 Jan 2025                                                                                              15:20",
      isOwn: false,
      avatar: userAvatar
    },
    {
      id: 2,
      text: "Good evening , please do you have more properties in Abuja that i can",
      timestamp: "",
      isOwn: true
    },
    {
      id: 3,
      text: "Good evening , please do you have more properties in Abuja that",
      timestamp: "tuesday 12 Jan 2025                                                                                              15:20",
      isOwn: true,
      avatar: estherProfile
    },
    {
      id: 4,
      text: "Good evening , please do you have more properties in Abuja that i can",
      timestamp: "",
      isOwn: true
    },
    {
      id: 5,
      text: "Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.\nThanks and kindly reply me as a quick as possible",
      timestamp: "tuesday 12 Jan 2025                                                                                              15:20",
      isOwn: false,
      avatar: userAvatar
    },
    {
      id: 6,
      text: "Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.\nThanks and kindly reply me as a quick as possible",
      timestamp: "",
      isOwn: true
    },
    {
      id: 7,
      text: "Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.\nThanks and kindly reply me as a quick as possible",
      timestamp: "tuesday 12 Jan 2025                                                                                              15:20",
      isOwn: true,
      avatar: estherProfile
    },
    {
      id: 8,
      text: "Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.\nThanks and kindly reply me as a quick as possible",
      timestamp: "",
      isOwn: true
    }
  ];

  const handleSendMessage = () => {
    if (messageText.trim()) {
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Header */}
      <CustomerHeader />

      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Sidebar */}
        <div className="w-80 bg-white border-r border-gray-200">
          {/* Messages Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Messages</h2>
              <div className="flex items-center space-x-2">
                <button className="p-1 text-gray-400 hover:text-gray-600 relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search Something"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600">
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Contacts List */}
          <div className="overflow-y-auto">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => setActiveContact(contact.id)}
                className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-100 ${
                  activeContact === contact.id ? 'bg-green-50' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 mr-3">
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900 truncate">{contact.name}</h3>
                    <span className="text-xs text-gray-500">{contact.time}</span>
                  </div>
                  <p className={`text-sm truncate ${
                    contact.lastMessage === 'Typing...' ? 'text-green-600' : 'text-gray-600'
                  }`}>
                    {contact.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                <img
                  src={estherProfile}
                  alt="Esther Emmanuel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Esther Emmanuel</h3>
                <p className="text-sm text-gray-500">Tenant</p>
              </div>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={message.id}>
                {/* Timestamp */}
                {message.timestamp && (
                  <div className="text-center">
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {message.timestamp}
                    </span>
                  </div>
                )}
                
                {/* Message */}
                <div className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'} mb-2`}>
                  {!message.isOwn && message.avatar && (
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-2 flex-shrink-0">
                      <img
                        src={message.avatar}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.isOwn
                      ? 'bg-gray-200 text-gray-900'
                      : 'bg-white border border-gray-200 text-gray-900'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                  
                  {message.isOwn && message.avatar && (
                    <div className="w-8 h-8 rounded-full overflow-hidden ml-2 flex-shrink-0">
                      <img
                        src={message.avatar}
                        alt="You"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-end space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Message"
                  className="w-full pl-4 pr-20 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <Paperclip className="w-4 h-4" />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <button
                onClick={handleSendMessage}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors font-medium"
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

export default MessagesPage;