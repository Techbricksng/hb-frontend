
const PropertyManagementWhyChooseUsPage = () => {
  return (
    <div className="bg-white">
      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Heading */}
          <div className="space-y-6 relative bottom-20">
            {/* Purple accent line */}
            <div className="w-1 h-37 bg-purple-400 relative top-32"></div>
            
            <div className="space-y-2 m-3 relative bottom-12">
              <p className="text-gray-600 text-lg">Why Choose us</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                What Makes Us Standout from others
              </h1>
            </div>
          </div>

          {/* Right Column - Benefits List */}
          <div className="space-y-6">
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <span className="font-semibold text-gray-800">Expert Management Team:</span> Years of experience managing residential and commercial properties.
                </p>
              </li>
              
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <span className="font-semibold text-gray-800">Tailored Solutions:</span> Customized services to suit your property type and goals.
                </p>
              </li>
              
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <span className="font-semibold text-gray-800">Technology-Driven:</span> Streamlined processes using modern tools for better efficiency.
                </p>
              </li>
              
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <span className="font-semibold text-gray-800">Proactive Approach:</span> Addressing potential issues before they become problems.
                </p>
              </li>
              
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  <span className="font-semibold text-gray-800">Client-Centric Service:</span> Clear communication and dedicated support at every step.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyManagementWhyChooseUsPage;