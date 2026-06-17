
import { Users, Home, DollarSign } from 'lucide-react';

import realtorBackground from '../assets/realtor/handshake-background.png';
import companyOne from '../assets/company1.png';
import companyTwo from '../assets/company2.png';
import companyThree from '../assets/company3.png';
import companyFour from '../assets/company4.png';

const BecomeRealtor = () => {
  const statistics = [
    {
      id: 1,
      icon: <Users className="w-8 h-8 text-gray-700" />,
      number: '20,000+',
      label: 'Registered Agents'
    },
    {
      id: 2,
      icon: <Home className="w-8 h-8 text-gray-700" />,
      number: '50k+',
      label: 'Houses Uploaded'
    },
    {
      id: 3,
      icon: <span className="text-2xl font-bold text-gray-700">₦</span>,
      number: '₦15M',
      label: 'Amount Agents Paid'
    }
  ];

  return (
    <div className="bg-white">
    <div className="relative min-h-screen flex flex-col justify-center items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={realtorBackground}
          alt="Professional handshake meeting"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-20">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
          Become an Realtor
        </h1>

        {/* Description Text */}
        <p className="text-lg sm:text-xl text-white text-opacity-90 leading-relaxed mb-10 max-w-3xl mx-auto">
          Effortlessly buy, sell, and invest in real estate with HouseBank. Whether you're an agent, developer, or investor, we provide the tools and connections you need to close deals faster and grow your business.
        </p>

        {/* Register Button */}
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-12 rounded-lg transition-colors duration-200 text-lg">
          Register Now
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statistics.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-white/30 backdrop-blur-sm border border-white border-opacity-30 rounded-2xl p-8 text-center"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>

              {/* Number */}
              <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-white text-opacity-80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
     {/* Partners Section */}
     <section className="bg-gray-50 py-16">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Partners</h2>
       
       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
         {/* Partner 1 - Check D'Deck Homes */}
         <div className="flex flex-col items-center space-y-2">
           <img src={companyOne} alt="Check D'Deck Homes" className="w-26 h-26 mb-2" />
         </div>

         {/* Partner 2 - Lane*Wey */}
         <div className="flex flex-col items-center space-y-2">
           <div className="text-center">
             <img src={companyTwo} alt="Lane*Wey" className="w-26 h-26 mb-2" />
           </div>
         </div>

         {/* Partner 3 - Telos Properties */}
         <div className="flex flex-col items-center space-y-2">
           <div className="text-center">
             <div className="flex items-center space-x-2">
               <img src={companyThree} alt="Telos Properties" className="w-16 h-11 mb-2" />
               <div>
                
               </div>
             </div>
           </div>
         </div>

         {/* Partner 4 - Golden Partner */}
         <div className="flex flex-col items-center space-y-2">
          
           <img src={companyFour} alt="Golden Partner" className="w-full h-full object-cover rounded-full" />
           
         </div>
       </div>
     </div>
   </section>
   </div>
  );
};

export default BecomeRealtor;