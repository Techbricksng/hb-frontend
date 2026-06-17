
import { Users } from 'lucide-react';
import icons from '../assets/realtor/icons.png';
import arrowTop from '../assets/arrow-top.png';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <Users className="w-8 h-8 text-gray-600" />,
      title: 'Seamless Property Listings',
      description: 'Easily upload, manage, and showcase your properties to a wide audience with our intuitive listing platform.'
    },
    {
      id: 2,
      icon: <Users className="w-8 h-8 text-gray-600" />,
      title: 'Verified Leads & High-Quality Buyers',
      description: 'Connect with serious buyers and investors, ensuring faster and more secure transactions.'
    },
    {
      id: 3,
      icon: <Users className="w-8 h-8 text-gray-600" />,
      title: 'Secure & Transparent Transactions',
      description: 'Conduct business with confidence using our secure payment and verification system.'
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8 text-gray-600" />,
      title: 'Dedicated Support & Marketing Tools',
      description: 'Get expert assistance, promotional tools, and marketing strategies to boost your property sales.'
    },
    {
      id: 5,
      icon: <Users className="w-8 h-8 text-gray-600" />,
      title: 'AI-Powered Matching',
      description: 'Our smart recommendation system connects you with the right buyers and properties based on preferences and market demand.'
    },
    {
      id: 6,
      icon: <Users className="w-8 h-8 text-gray-600" />,
      title: 'Real-Time Market Insights',
      description: 'Stay ahead with in-depth property analytics and trends to make informed decisions.'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-600 text-sm mb-4">Our Features</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            What Makes HouseBank Stand Out
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            Effortlessly buy, sell, and invest in real estate with HouseBank. Whether you're an agent, developer, or investor, we provide the tools and connections you need to close deals faster and grow your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors"
            >
              {/* Icon */}
              <div className="mb-6">
               
                <img src={icons} alt="Feature Icon" className="w-10 h-10 shadow-sm rounded-full" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to take your real estate business to the next level
          </h3>
          <button className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-lg transition-colors">
            <span>Start listing</span>
            <img 
                src={arrowTop}
                alt="arrow icon" 
                className="w-5 h-5"
              />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;