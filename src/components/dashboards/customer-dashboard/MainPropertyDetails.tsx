import { useState } from 'react';
import { 
  MapPin, 
  Star,
  Bed,
  Bath,
  Square,
  Phone,
  MessageSquare,
  Bell, 
  ChevronDown, 
  Search
} from 'lucide-react';
import CustomerHeader from './CustomerHeader';
import ManImage from '../../../assets/4.png'
import WomanImage from '../../../assets/3.png'

// Type definitions
interface Facility {
  name: string;
}

interface Realtor {
  id: number;
  name: string;
  avatar: string;
  subtitle: string;
}

const CustomerPropertyDetailsPageOne = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // Sample data
  const facilities: Facility[] = [
    { name: 'Big swimming pool' },
    { name: 'Near Trail Station' },
    { name: 'Big size garden' },
    { name: '4 Car Parking' },
    { name: '24/7 electricity' },
    { name: 'Personal Theater' }
  ];

  const realtors: Realtor[] = [
    {
      id: 1,
      name: 'Christian Musa',
      avatar: WomanImage,
      subtitle: '2 Schedule appointments'
    },
    {
      id: 2,
      name: 'Isa Abdullahi',
      avatar: ManImage,
      subtitle: '2 Schedule appointments'
    }
  ];

  const handleSendMessage = () => {
    console.log('Sending message:', { selectedDate, selectedTime, fullName, phone, message });
    // Handle form submission
  };

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Header */}
     <CustomerHeader />
      <div className="p-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Images and Info */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200">
              {/* Main Image and Gallery */}
              <div className="grid grid-cols-2 gap-2 p-2">
                {/* Main Large Image */}
                <div className="row-span-2">
                  <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                      <span className="text-gray-500">Property Exterior</span>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">Available</span>
                    </div>
                  </div>
                </div>
                
                {/* Smaller Images */}
                <div className="grid grid-rows-3 gap-2">
                  <div className="bg-gray-200 rounded-lg h-24 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Bedroom</span>
                  </div>
                  <div className="bg-gray-200 rounded-lg h-24 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Living Room</span>
                  </div>
                  <div className="bg-gray-200 rounded-lg h-24 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Kitchen</span>
                  </div>
                </div>
              </div>

              {/* Property Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className='block'>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">Rendez House Bay</h1>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">Lagos, Nigeria</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">N2,250,000</div>
                    <div className="flex items-center float-right mt-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.6</span>
                    </div>

                    
                <div className="flex space-x-4 mt-10 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Bed className="w-4 h-4 mr-2" />
                    <span className="text-sm">3</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Bath className="w-4 h-4 mr-2" />
                    <span className="text-sm">3</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Square className="w-4 h-4 mr-2" />
                    <span className="text-sm">3</span>
                  </div>
                </div>
                  </div>
                </div>

               

                {/* Action Buttons */}
               <div className="flex items-center space-x-4">
                <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-medium">
                    Buy Now
                </button>
                <button className="ml-auto border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-lg font-medium">
                    Add to wishlist
                </button>
                </div>

              </div>
            </div>

            {/* Some Facilities */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Some Facilities</h2>
              <div className="flex flex-wrap gap-2">
                {facilities.map((facility, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm"
                  >
                    {facility.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Property Description */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Property Description</h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>

          {/* Right Column - Realtors and Contact Form */}
          <div className="space-y-6">
            {/* Realtors */}
           <div className="bg-white rounded-xl p-6">
  <h3 className="text-lg font-semibold text-gray-900 mb-4">Realtors</h3>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
    {realtors.map((realtor) => (
      <div 
        key={realtor.id} 
        className="flex flex-col items-center text-center p-4 rounded-lg"
      >
        {/* Profile Image */}
        <img 
          src={realtor.avatar} 
          alt={realtor.name} 
          className="w-16 h-16 rounded-full object-cover mb-3"
        />

        {/* Name */}
        <h4 className="font-small text-gray-900">{realtor.name}</h4>

        {/* Subtitle */}
        <p className="text-xs text-red-500 mb-3">{realtor.subtitle}</p>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
            <MessageSquare className="w-5 h-5 text-white" />
          </button>
          <button className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50">
            <Phone className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    ))}
  </div>
</div>


            {/* Schedule a TOUR */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Schedule a TOUR</h3>
              <div className="space-y-4">
                {/* Date Input */}
                <div>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-500"
                    placeholder="dd/mm/yyyy"
                  />
                </div>

                {/* Time Input */}
                <div>
                  <input
                    type="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-500"
                    placeholder="12:00pm"
                  />
                </div>

                {/* Full Name Input */}
                <div>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-500"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+234"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-500 resize-none"
                  />
                </div>

               {/* Send Button */}
                <div className="flex justify-center">
                <button 
                    onClick={handleSendMessage}
                    className="w-40 bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium"
                >
                    Send
                </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPropertyDetailsPageOne;