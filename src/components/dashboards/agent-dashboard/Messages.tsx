import { useState } from 'react';
import { Search, Plus, Smile, Paperclip, Send, MoreVertical } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

import firstUser from '../../../assets/1.png';
import secondUser from '../../../assets/2.png';
import thirdUser from '../../../assets/3.png';
import fourthUser from '../../../assets/4.png';
import fifthUser from '../../../assets/5.png';
import sixthUser from '../../../assets/6.png';

interface Message {
  id: string;
  text: string;
  timestamp: string;
  isOwn: boolean;
  date?: string;
}

interface Conversation {
  id: string;
  avatar: string;
  name: string;
  lastMessage: string;
  time: string;
  unread?: number;
}

const AgentMessagesChatPage = () => {
  const [selectedConversation, setSelectedConversation] = useState<string>('1');
  const [messageText, setMessageText] = useState('');
  const [activeTab, setActiveTab] = useState<'Chat' | 'Shared files'>('Chat');

  // Sample conversations data
  const conversations: Conversation[] = [
    {
      id: '1',
      avatar: firstUser,
      name: 'Real Estate Deals',
      lastMessage: 'Good, Am Well thank God',
      time: '15:20'
    },
    {
      id: '2',
      avatar: secondUser,
      name: 'Real Estate Deals',
      lastMessage: 'Good, Am Well thank God',
      time: '15:07'
    },
    {
      id: '3',
      avatar: thirdUser,
      name: 'Real Estate Deals',
      lastMessage: 'Good, Am Well thank God',
      time: '15:07'
    },
    {
      id: '4',
      avatar: fourthUser,
      name: 'Real Estate Deals',
      lastMessage: 'Good, Am Well thank God',
      time: '18:23'
    },
    {
      id: '5',
      avatar: fifthUser,
      name: 'Real Estate Deals',
      lastMessage: 'Good, Am Well thank God',
      time: '20:21'
    },
    {
      id: '6',
      avatar: sixthUser,
      name: 'Real Estate Deals',
      lastMessage: 'Good, Am Well thank God',
      time: '16:45'
    },
    {
      id: '7',
      avatar: thirdUser,
      name: 'Real Estate Deals',
      lastMessage: 'Good, Am Well thank God',
      time: '14:32'
    },
    {
      id: '8',
      avatar: firstUser,
      name: 'Real Estate Deals',
      lastMessage: 'Good, Am Well thank God',
      time: '18:30'
    }
  ];

  // Sample messages data
  const messages: Message[] = [
    {
      id: '1',
      text: 'Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.',
      timestamp: '15:20',
      isOwn: false,
      date: 'tuesday 12 Jan 2025'
    },
    {
      id: '2',
      text: 'Good evening , please do you have more properties in Abuja that i can',
      timestamp: '',
      isOwn: false
    },
    {
      id: '3',
      text: 'Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.\nThanks and kindly reply me as a quick as possible',
      timestamp: '15:20',
      isOwn: true,
      date: 'tuesday 12 Jan 2025'
    },
    {
      id: '4',
      text: 'Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.\nThanks and kindly reply me as a quick as possible',
      timestamp: '15:20',
      isOwn: false,
      date: 'tuesday 12 Jan 2025'
    },
    {
      id: '5',
      text: 'Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.\nThanks and kindly reply me as a quick as possible',
      timestamp: '15:20',
      isOwn: true,
      date: 'tuesday 12 Jan 2025'
    },
    {
      id: '6',
      text: 'Good evening , please do you have more properties in Abuja that i can buy, i need 3 bedroom flats.\nThanks and kindly reply me as a quick as possible',
      timestamp: '15:20',
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
    <div className="flex-1 bg-gray-50">
      {/* Top Header */}
      <CustomerHeader />

      {/* Main Content */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Left Sidebar - Conversations List */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          {/* Messages Header */}
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Messages</h2>
            
            {/* Search Bar */}
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search Something"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              <button className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Conversations List */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`flex items-center space-x-3 p-4 cursor-pointer hover:bg-gray-50 ${
                  selectedConversation === conversation.id ? 'bg-gray-100' : ''
                }`}
              >
                <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={conversation.avatar} 
                    alt={conversation.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold text-gray-900 truncate">
                      {conversation.name}
                    </h3>
                    <span className="text-xs text-gray-500">{conversation.time}</span>
                  </div>
                  <p className="text-xs text-gray-600 truncate">{conversation.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Chat Window */}
        <div className="flex-1 flex flex-col bg-white">
          {/* Chat Header with Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setActiveTab('Chat')}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'Chat'
                      ? 'text-gray-900 border-gray-900'
                      : 'text-gray-500 border-transparent hover:text-gray-700'
                  }`}
                >
                  Chat
                </button>
                <button
                  onClick={() => setActiveTab('Shared files')}
                  className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'Shared files'
                      ? 'text-gray-900 border-gray-900'
                      : 'text-gray-500 border-transparent hover:text-gray-700'
                  }`}
                >
                  Shared files
                </button>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id}>
                {/* Date Separator */}
                {message.date && (
                  <div className="flex items-center justify-center my-4">
                    <div className="bg-gray-200 px-4 py-1 rounded-full text-xs text-gray-600">
                      {message.date}
                    </div>
                    <span className="ml-auto text-xs text-gray-500">{message.timestamp}</span>
                  </div>
                )}

                {/* Message Bubble */}
                <div className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'} mb-2`}>
                  <div className="flex items-start space-x-2 max-w-md">
                    {!message.isOwn && (
                      <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={firstUser}
                          alt="User"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className={`px-4 py-3 rounded-lg ${
                      message.isOwn 
                        ? 'bg-gray-200 text-gray-900' 
                        : 'bg-white border border-gray-200 text-gray-900'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    </div>
                    {message.isOwn && (
                      <div className="w-8 h-8 bg-gray-700 rounded-full overflow-hidden flex-shrink-0">
                        <img 
                          src={secondUser}
                          alt="You"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input Area */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Smile className="w-5 h-5 text-gray-600" />
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Message"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full">
                  <Paperclip className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Send className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={handleSendMessage}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium"
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

export default AgentMessagesChatPage;