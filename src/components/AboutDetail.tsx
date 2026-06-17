
import { ArrowRight, Star } from 'lucide-react';


import handshakeImage from '../assets/about/handshake-meeting.png';
import close from '../assets/close.png';
import star from '../assets/about/star.png';
import arrowTop from '../assets/about/arrowTop.png';


const AboutCompany = () => {
  const topFeatures = [
    {
      id: 1,
      title: 'Explore',
      subtitle: 'Great Neighborhoods',
      description: 'We connect with directly to the person that knows the most about property for sale, the listing agent.',
      backgroundColor: 'bg-white',
      borderColor: 'border-gray-200'
    },
    {
      id: 2,
      title: 'Find Highly',
      subtitle: 'Rated Best Property',
      description: 'We connect with directly to the person that knows the most about property for sale, the listing agent.',
      backgroundColor: 'bg-purple-100',
      borderColor: 'border-purple-200'
    },
    {
      id: 3,
      title: 'Discover',
      subtitle: 'Quality Buildings',
      description: 'We connect with directly to the person that knows the most about property for sale, the listing agent.',
      backgroundColor: 'bg-white',
      borderColor: 'border-gray-200'
    }
  ];

  const bottomFeatures = [
    {
      id: 1,
      icon: <Star className="w-8 h-8 text-purple-600" />,
      title: 'Our Mission',
      description: 'To connect people with properties that inspire them and meet their needs while ensuring a seamless and rewarding process for all our clients.',
      additionalText: 'At HouseBank Real Estate, we don\'t just sell properties—we help you build a foundation for your future. Let\'s find your dream home today!'
    },
    {
      id: 2,
      icon: <Star className="w-8 h-8 text-purple-600" />,
      title: 'Our Vision',
      description: 'To be the trusted leader in real estate, transforming lives by providing exceptional properties and services that inspire dreams, build communities, and create lasting value for generations to come.'
    },
    {
      id: 3,
      icon: <Star className="w-8 h-8 text-purple-600" />,
      title: 'Our Aim',
      description: 'At HouseBank Real Estate, our goal is to make property ownership and investment seamless, trustworthy, and rewarding. We strive to connect individuals and businesses with the perfect spaces while fostering lasting relationships built on transparency, expertise, and care. Your dream property is our mission.'
    }
  ];

  const whyChooseUsPoints = [
    {
      title: 'Customer-Centric Approach:',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver solutions tailored to your needs.'
    },
    {
      title: 'Transparency and Integrity:',
      description: 'Honesty and fairness guide everything we do.'
    },
    {
      title: 'Market Expertise:',
      description: 'With a deep understanding of the real estate market, we provide insights to help you make confident decisions.'
    },
    {
      title: 'End-to-End Support:',
      description: 'From property search to closing the deal, we are with you every step of the way.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {topFeatures.map((feature) => (
            <div key={feature.id} className={`${feature.backgroundColor} ${feature.borderColor} border rounded-2xl p-6 shadow-sm relative`}>
              {/* Close Icon */}
              <div className="p-2 mb-3">
                <img src={close} alt="Close" className="w-5 h-5 cursor-pointer relative right-2" />
              </div>
              
              <div className="space-y-4 mb-6">
                <h3 className="text-xl font-bold text-gray-900">{feature.title}<br/>{feature.subtitle}</h3>
               
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="w-full flex justify-end">
                <button 
                    className="flex items-center space-x-2 p-1 text-gray-500 hover:text-gray-700 font-medium rounded-xl text-md border border-green-700 border-opacity-30"
                >
                    <span className='text-green-800 text-sm hover:text-green-800 relative left-1'>Explore</span>
                    <img src={arrowTop} className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Who We Are Section */}
        <div className="mb-16">
          <div className="mb-4">
            <span className="text-sm font-medium text-gray-600">Who We Are</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
                We are Best in Property Management Trusted by 10 Million Buyers
              </h2>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                Founded on a passion for connecting people with the right properties, HouseBank Real Estate has grown to become a trusted name in the real estate industry. Our team of experienced agents combines market insight with personalized service, ensuring you receive the guidance you need at every step of your property journey.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-8 mb-8">
            {/* Left Content */}
            <div className="relative left-27 bottom-13 w-[440px] text-white p-8 rounded-2xl" style={{ backgroundColor: '#312630' }}>
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="space-y-2">
                {whyChooseUsPoints.map((point, index) => (
                  <div key={index}>
                    <span className="">{point.title}</span>
                    <span className="ml-1">{point.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={handshakeImage}
                alt="Business handshake meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {bottomFeatures.map((feature) => (
            <div key={feature.id} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <img src={star} alt="Star Icon" className="w-11 h-11 text-purple-600 mb-1" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              {feature.additionalText && (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.additionalText}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Explore Properties Button */}
        <div className="text-center">
          <button className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
            <span>Explore Properties</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;