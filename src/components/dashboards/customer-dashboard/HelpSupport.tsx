import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  ArrowRight, 
  AlertCircle,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// Import guide images - replace with your actual image imports
import guideImg1 from '../../../assets/guide-1.png';
import guideImg2 from '../../../assets/guide-2.png';
import guideImg3 from '../../../assets/guide-3.png';
import CustomerHelpSearch from './CustomerHelpSearchPage';
import CustomerFAQz from './CustomerFAQ';

interface GuideItem {
  id: number;
  title: string;
  image: string;
}

interface FAQItem {
  id: number;
  question: string;
  answer?: string;
}

interface ContactMethod {
  icon: React.ReactNode;
  label: string;
  value: string;
  type: 'phone' | 'email' | 'address';
}

const CustomerHelpSupport = () => {
  const [chatMessage, setChatMessage] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const guides: GuideItem[] = [
    { id: 1, title: "Getting Started on HouseBank", image: guideImg1 },
    { id: 2, title: "Finding the right place for you", image: guideImg2 },
    { id: 3, title: "Paying for a property", image: guideImg3 }
  ];

  const contactMethods: ContactMethod[] = [
    { icon: <Phone className="w-5 h-5" />, label: "Call Us", value: "+234906666647", type: "phone" },
    { icon: <Mail className="w-5 h-5" />, label: "Text Message", value: "support@housebank.com", type: "email" }
  ];

  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (chatMessage.trim()) {
      console.log('Chat message sent:', chatMessage);
      setChatMessage('');
    }
  };

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Header */}
      <CustomerHeader />

      {/* Main Content */}
      <div className="p-6 max-w-7xl mx-auto">
        
        {/* Search */}
        <CustomerHelpSearch />

        {/* Guides Section */}
        <div className="flex space-x-8 items-center justify-center mb-8 text-center">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Guides for getting started
          </h1>
          <p 
            className="text-gray-600 cursor-pointer relative -top-1"
          >
            Browse all topics <span>&gt;</span>
          </p>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div 
                key={guide.id} 
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 text-center">
                    {guide.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <CustomerFAQz />

        {/* Contact + Recommended Section */}
        <div className="flex flex-col md:flex-row gap-12 items-start w-full max-w-5xl mx-auto mt-12">
          
          {/* Contact Form */}
          <div className="bg-gray border border-gray-100 rounded-2xl p-8 w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            <form className="space-y-6" onSubmit={handleChatSubmit}>
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="e.g John"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="@gmail.com"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Your Message
                </label>
                <textarea
                  placeholder="Description"
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                className="bg-green-700 text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Recommended Section */}
          <div className="flex flex-col space-y-8 w-full md:w-1/2 items-start">
            
            <div className="mb-4">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                Recommended for you
              </h2>
            </div>

            <div className="gap-6">
              
              {/* Identity Verification Card */}
              <div className="bg-gray border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow mb-5">
                <div className="flex items-center space-x-2 mb-6">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-medium text-orange-500 uppercase tracking-wide">
                    ACTION REQUIRED
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Your identity is not fully verified
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Identity verification helps us know that you are really you. It is 
                    one of the ways we keep HouseBank users secure.
                  </p>
                </div>

                <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group">
                  <span className="text-gray-700 font-medium">Continue verification</span>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Explore Neighborhoods Card */}
              <div className="bg-gray border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Explore
                  </h3>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    Great Neighborhoods
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    We connect you directly with the person who knows the most 
                    about the property for sale — the listing agent.
                  </p>
                </div>

                <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors group">
                  <span className="text-gray-700 font-medium">Explore</span>
                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          </div>
        </div>

                 <footer className="w-full bg-white py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <div className='block px-2'>
        <h1 className='text-2xl font-bold mb-3'>General Inquries/Support</h1>
        {/* Support Email */}
        <a
          href="mailto:Support@housebank.com"
          className="text-blue-500 font-semibold hover:underline"
        >
          Support@housebank.com
        </a>
            </div>

            <div className='block px-4'>
             <h1 className='text-2xl font-bold mb-3'>Contact us with</h1>
        {/* Social Icons */}
        <div className="flex space-x-6 text-blue-500 text-2xl">
           
          <a href="#" className="hover:text-blue-400">
            <Instagram />
          </a>
          <a href="#" className="hover:text-blue-400">
            <Facebook />
          </a>
          <a href="#" className="hover:text-blue-400">
            <Linkedin />
          </a>
        </div>
        </div>

      </div>
    </footer>

      </div>
    </div>
  );
};

export default CustomerHelpSupport;
