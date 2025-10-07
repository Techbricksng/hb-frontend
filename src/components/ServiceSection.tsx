
import { ArrowRight } from 'lucide-react';

const ServicesDetailPage = () => {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-30">
        <div className="text-center mb-20">
          <h3 className="text-gray-600 text-lg mb-4">Services we Provide</h3>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">What We Do For You</h1>
        </div>

        {/* Service 1 - Property Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80"
                alt="Hand holding house keys" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 bg-purple-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-1xl lg:text-3xl font-bold text-gray-900 mb-6">Property Management</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We handle every aspect of managing your property so you can enjoy the benefits 
              without the stress.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Tenant screening, placement, and support.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Rent collection and income disbursement.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Maintenance, repairs, and regular property inspections.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Legal compliance and documentation.</span>
              </li>
            </ul>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              <strong>What You Get:</strong> Peace of mind knowing your property is in expert hands while 
              maximizing returns.
            </p>
            
            <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Service 2 - Property Valuation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left - Content */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Property Valuation</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Understand the true value of your property with our accurate and reliable valuation 
              services.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Market analysis and data-driven insights.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Expert assessment of residential, commercial, and land properties.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Comprehensive reports for sales, purchases, or investment decisions.</span>
              </li>
            </ul>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              <strong>What You Get:</strong> Confidence in making informed real estate decisions backed by expert 
              evaluations.
            </p>
            
            <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right - Image */}
          <div>
            <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80"
                alt="Property valuation with house model and coins" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Service 3 - Property Exchange */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Business handshake with house model" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 bg-purple-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Property Exchange</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Looking to upgrade, downsize, or diversify your portfolio? Our property exchange 
              service makes transitions easy.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Seamless swapping of properties to suit your evolving needs.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Wide network of listings for residential, commercial, and investment properties.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Transparent and efficient processes to match you with the perfect exchange.</span>
              </li>
            </ul>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              <strong>What You Get:</strong> Flexibility to adapt your property portfolio without the hassle of 
              traditional sales.
            </p>
            
            <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Service 4 - Investment Portfolio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Investment Portfolio</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Grow your wealth with tailored real estate investment strategies.
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Portfolio analysis and optimization.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Access to high-yield investment opportunities.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Expert guidance on market trends and forecasts.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3">•</span>
                <span className="text-gray-600">Strategic advice for diversifying and maximizing returns.</span>
              </li>
            </ul>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              <strong>What You Get:</strong> A lucrative and secure investment portfolio aligned with your financial 
              goals.
            </p>
            
            <button className="border border-gray-400 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <span>Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right - Image */}
          <div>
            <div className="w-full h-80 lg:h-96 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Professional woman working on investment portfolio" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesDetailPage;