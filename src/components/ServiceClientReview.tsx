import { Star } from 'lucide-react';

import team1 from '../assets/about/team-1.png';
import team2 from '../assets/about/team-2.png';
import team4 from '../assets/about/team-4.png';

const ClientReviewsPage = () => {
  return (
    <div className="bg-white">
      {/* Client Reviews Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Client Reviews</h1>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            At House Bank Real Estate, our clients are at the heart of everything we do. Here's what some of our 
            happy clients have to say about their experiences with us:
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Review 1 - Sarah O. */}
          <div className="bg-gray-50 rounded-2xl p-8 relative">
            {/* Profile Image */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                 src={team2}
                 alt="Sarah O." 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">"Seamless Home Buying Experience!"</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "I can't thank House Bank Real Estate enough for helping me find my dream home. The 
                process was so smooth, and my agent was incredibly patient and professional. Highly 
                recommend!"
              </p>
              
              {/* Rating and Name */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Sarah O., Home Buyer</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Review 2 - Adebayo K. */}
          <div className="bg-white border-2 border-gray-300 rounded-2xl p-8 relative">
            {/* Profile Image */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={team1}
                  alt="Adebayo K." 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">"Profitable Investment Advice!"</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "I wanted to invest in real estate but didn't know where to start. Their investment advisors gave me 
                excellent recommendations, and now I'm seeing great returns on my property. They really know their 
                stuff!"
              </p>
              
              {/* Rating and Name */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">Adebayo K., Investor</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Review 3 - James T. */}
          <div className="bg-gray-50 rounded-2xl p-8 relative">
            {/* Profile Image */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={team4}
                  alt="James T." 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">"Effortless Renting Process!"</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                "I needed a rental property quickly, and the team at House Bank Real Estate made it happen. They guided 
                me through the listings, organized viewings, and handled the paperwork efficiently. I'm thrilled with 
                my new apartment!"
              </p>
              
              {/* Rating and Name */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                  <span className="text-sm font-medium text-gray-900">James T., Tenant</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientReviewsPage;