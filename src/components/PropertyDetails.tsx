import { useState } from 'react';
import { Share, Heart, MapPin, Users, Car, Shield, Home, Sun, Star, ChevronLeft, ChevronRight } from 'lucide-react';

// You'll need to add these images to your assets folder
import mainImage from '../assets/property/main-dining.png';
import livingRoom from '../assets/property/living-room.png';
import staircase from '../assets/property/staircase.png';
import garage from '../assets/property/garage.png';
import bedroom from '../assets/property/bedroom.jpg';
import landlordPhoto from '../assets/property/landlord.png';
import bell from '../assets/property/vector.png';

const PropertyDetail = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(1);
  const [currentMonth, setCurrentMonth] = useState(0); // January = 0
  const [currentYear, setCurrentYear] = useState(2025);
  const [isSaved, setIsSaved] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const amenities = [
    { icon: <Home className="w-4 h-4" />, text: 'Spacious bedroom' },
    { icon: <Home className="w-4 h-4" />, text: 'Standard built gym house' },
    { icon: <Users className="w-4 h-4" />, text: 'Spacious living room' },
    { icon: <Shield className="w-4 h-4" />, text: 'Security post' },
    { icon: <Car className="w-4 h-4" />, text: 'Car park facility' },
    { icon: <Home className="w-4 h-4" />, text: 'Private lounge' },
    { icon: <Sun className="w-4 h-4" />, text: '24/7 solar roofing sheet' }
  ];

  const paymentBreakdown = [
    { label: 'House Rent', amount: '70k naira' },
    { label: 'Security Fee', amount: '10k naira' },
    { label: 'Electricity Bill', amount: '30k naira' },
    { label: 'Damages Fee', amount: '10k naira' }
  ];

  // Calendar helper functions
  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
    setSelectedDate(null); // Reset selected date when changing months
  };

  const renderCalendarDays = () => {
    const daysCount = daysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="py-2 text-sm"></div>
      );
    }

    // Add days of the month
    for (let day = 1; day <= daysCount; day++) {
      days.push(
        <button
          key={day}
          onClick={() => setSelectedDate(day)}
          className={`py-2 text-sm rounded-lg hover:bg-gray-100 transition-colors ${
            selectedDate === day ? 'bg-black text-white' : 'text-gray-700'
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Zukariya property</h1>
          <div className="flex items-center space-x-4">
          <button
                onClick={() => {
                    const shareURL = window.location.href;
                    navigator.clipboard.writeText(shareURL)
                    .then(() => alert('Link copied to clipboard!'))
                    .catch(() => alert('Failed to copy link.'));
                }}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
                >
                <Share className="w-4 h-4" />
                <span className="text-sm">Share</span>
         </button>

            <button 
              onClick={() => setIsSaved(!isSaved)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
              <span className="text-sm">Save</span>
            </button>
          </div>
        </div>

        {/* Image Gallery - Full Width at Top */}
        <div className="mb-8">
          <div className="grid grid-cols-4 grid-rows-2 gap-4 h-96">
            {/* Main large image - spans 2 columns and 2 rows */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden">
              <img 
                src={mainImage}
                alt="Dining area"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Top right image */}
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={livingRoom}
                alt="Living room"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top far right image */}
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={staircase}
                alt="Staircase"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom right image */}
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={garage}
                alt="Garage"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom far right with +20 overlay */}
            <div className="relative rounded-2xl overflow-hidden">
                <img 
                    src={bedroom}
                    alt="Bedroom"
                    className="w-full h-full object-cover"
                />
                
                <a
                    href="/gallery" // or use onClick for modals
                    className="absolute inset-0 bg-white text-black rounded-full m-13 ml-24 w-24 h-24 p-3 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform"
                >
                    <div className="text-xl font-bold">+20</div>
                    <div className="text-sm">More</div>
                    <div className="text-sm">pictures</div>
                </a>
            </div>

          </div>
        </div>

        {/* Main Content - Two Column Layout Below Images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Info */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Zukariya Property, Lagos.</h2>
              <div className="flex items-center text-gray-600 mb-6">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">Lagos,island Nigeria</span>
              </div>
            </div>

            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">About this property</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Looking for a cozy and comfortable place to call home? Look no further than this charming house up for rent in a vicinity near a water. This house features three bedrooms, two bathrooms, a spacious living room, a modern kitchen, and a lovely backyard. You'll love the natural light, the hardwood floors, and the fireplace that add warmth and character to this house. Plus, you'll enjoy the convenience of living close to local amenities such as restaurants, schools, and public transportation. And best of all, you'll have access to the beautiful water views and recreational activities that the nearby lake offers. Whether you're looking for a peaceful retreat or just relaxing by the shore, you'll find plenty of ways to unwind and have fun in this neighbourhood. Don't miss this opportunity to rent this amazing house.
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-gray-600">{amenity.icon}</div>
                    <span className="text-sm text-gray-700">{amenity.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Landlord Section */}
            <div className="shadow-md  rounded-2xl p-7 w-[500px]">

            <div className="flex shadow-md rounded-2xl p-6 items-center justify-between mb-8 w-full">


              <div className="block items-start space-x-4 mb-4">
                <img 
                  src={landlordPhoto}
                  alt="James Abodunrin"
                  className="w-16 h-16 rounded-full object-cover"
                />

                <h4 className="font-semibold text-gray-900 mb-2 mt-2">James Abodunrin</h4>
                <p className="text-sm text-gray-600">Landlord</p>
                <div className="flex items-center mt-1 mb-2">
                  {[1,2,3,4].map((star) => (
                    <Star key={star} className="w-4 h-4 text-400 fill-current" style={{ color: '#455C47' }} />
                  ))}
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
                
              </div>
              
              <div className="block mb-4">
              <div className="text-left  mb-4">
                      <div className="text-1xl font-bold text-gray-900">15</div>
                      <div className="text-sm text-gray-600">Reviews</div>
                    </div>
                    <div className="text-left  mb-4">
                      <div className="flex items-center space-x-1">
                      <div className="text-1xl font-bold text-gray-900">4</div>
                        <Star className="w-3 h-3 text-400 fill-current" style={{ color: '#455C47' }} />
                      </div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                
                 <div className="text-left mb-4">
                    <p className="text-1xl font-medium text-gray-900 mb-1">20</p>
                    <p className="text-sm text-gray-600">years of been a landlord</p>
                </div>
              </div>
            </div>

              <p className="text-sm text-gray-600 mb-4">
                Mr. Abodunrin is a landlord who rents out his apartment to tenants who are looking for a comfortable and affordable place to live. He has been in the real estate business for over 10 years and has a reputation for being fair and reliable. He takes good care of his property and ensures that it is well-maintained and secure. He is always available to address any issues or concerns that his tenants may have. He values his relationship with his tenants and strives to provide them with a pleasant living experience.
              </p>

              <button className="relative left-36 w-40 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium mb-2">
                Send Message
              </button>
              <p className="text-xs text-blue-500 text-center">
                To protect your payment, never transfer money or communicate outside the website or app
              </p>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Payment Breakdown */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-lg text-center font-semibold text-gray-900 mb-4" style={{ color: '#455C47' }}>Payment Breakdown</h3>
              
              <div className="flex space-x-2 mb-6">
                <button className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium bg-white">
                  Buy
                </button>
                <button className="flex-1 py-2 px-4 border border-gray-300 rounded-lg text-sm font-medium bg-gray-50">
                  Invest
                </button>
              </div>

              <div className="space-y-3 mb-4">
                {paymentBreakdown.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="text-gray-900">{item.amount}</span>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span>120k naira</span>
                </div>
              </div>

              <div className="flex space-x-2 mb-4">
                <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg text-sm font-medium">
                  Schedule a Call
                </button>
                <button className="flex-1 border border-gray-300 py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-50">
                  Book Inspection
                </button>
              </div>

              <p className="text-xs text-gray-500 flex items-center">
                <span className="text-orange-500 mr-1">
                  <img src={bell} alt="Notification" className="inline w-2 h-3" /> 
                </span>
                Note: 5% will be deducted for the transaction
              </p>
            </div>

            {/* Schedule a Call */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">Schedule a call</h3>
             
            <div className="bg-white border rounded-2xl p-6">
             
              <div className="flex items-center justify-between mb-4">
                <button 
                  onClick={() => navigateMonth('prev')}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                <span className="font-medium text-gray-900">
                  {months[currentMonth]} {currentYear}
                </span>
                <button 
                  onClick={() => navigateMonth('next')}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-xs text-gray-500 text-center py-2 font-medium">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {renderCalendarDays()}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center space-x-2 mb-6 relative left-19">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-lg font-semibold">4.0 ·8 reviews</span>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Cleanliness', rating: 90 },
                  { label: 'Standard', rating: 85 },
                  { label: 'Eco friendly Environment', rating: 70 },
                  { label: 'Spaces', rating: 80 },
                  { label: 'Car park facility', rating: 95 },
                  { label: 'Security', rating: 75 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-sm text-gray-600 w-32 flex-shrink-0">{item.label}</span>
                    <div className="flex-2 mx-4 bg-gray-200 rounded-full h-1">
                      <div 
                        className="bg-gray-800 h-1 rounded-full" 
                        style={{ width: `${item.rating}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;