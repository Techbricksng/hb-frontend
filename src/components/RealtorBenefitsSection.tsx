
import arrowTop from '../assets/arrow-top.png';

// You'll need to add this image to your assets folder
import keyHandoverImage from '../assets/realtor/key-handover.png';

const BenefitsSection = () => {
  const developerBenefits = [
    {
      id: 1,
      title: 'Maximize Your Sales',
      description: 'Reach a targeted audience and attract more buyers.'
    },
    {
      id: 2,
      title: 'Data-Driven Marketing',
      description: 'Use real-time insights to improve your sales strategy.'
    },
    {
      id: 3,
      title: 'High-Quality Exposure',
      description: 'Showcase your projects with stunning visuals and virtual tours.'
    },
    {
      id: 4,
      title: 'Direct Investor Connections',
      description: 'Connect with serious investors ready to fund your projects.'
    },
    {
      id: 5,
      title: 'End-to-End Support',
      description: 'From listing to closing, we streamline the entire process.'
    }
  ];

  const realtorBenefits = [
    {
      id: 1,
      title: 'Expand Your Reach',
      description: 'Get your listings in front of serious buyers and investors.'
    },
    {
      id: 2,
      title: 'Lead Management',
      description: 'Access verified leads and manage inquiries with ease.'
    },
    {
      id: 3,
      title: 'Fast & Secure Transactions',
      description: 'Close deals efficiently with our secure platform.'
    },
    {
      id: 4,
      title: 'AI-Powered Property Matching',
      description: 'Get matched with buyers looking for properties like yours.'
    },
    {
      id: 5,
      title: 'Professional Branding',
      description: 'Enhance your credibility with a customized agent profile.'
    }
  ];

  const BenefitItem = ({ item, index }: { item: typeof developerBenefits[0], index: number }) => (
    <div className="flex items-start space-x-3 mb-6">
      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="text-xs font-bold">{index + 1}</span>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-6xl font-bold text-gray-900 leading-tight mb-4">
                Benefits for{' '}
                <span className="text-green-600">Realtor &</span>{' '}
                Developers
              </h2>
              <p className="text-gray-600 text-lg">
                Grow Your Real Estate Business with HouseBank
              </p>
            </div>

            {/* Image */}
            <div className="mb-8">
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src={keyHandoverImage}
                  alt="Key handover between realtor and clients"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

            {/* Call to Action */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Join HouseBank today and take your real estate career to new heights!
              </h3>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            
            {/* For Property Developers Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                For Property Developers
              </h3>
              <div>
                {developerBenefits.map((benefit, index) => (
                  <BenefitItem key={benefit.id} item={benefit} index={index} />
                ))}
              </div>
            </div>

            {/* For Real Estate Realtor Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                For Real Estate Realtor
              </h3>
              <div>
                {realtorBenefits.map((benefit, index) => (
                  <BenefitItem key={benefit.id} item={benefit} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
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

export default BenefitsSection;