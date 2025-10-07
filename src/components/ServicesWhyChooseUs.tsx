

const ServicesWhyChooseUsPage = () => {
  return (
    <div className="bg-white">
      {/* Why Choose Us Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-gray-600 text-base mb-4">Services we Provide</h3>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Why Choose Us?</h1>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 - Expertise You Can Trust */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Expertise You Can Trust</h3>
            <p className="text-gray-600 leading-relaxed">
              Years of experience in real estate and investment.
            </p>
          </div>

          {/* Card 2 - Client-Centric Approach */}
          <div className="bg-purple-100 border border-purple-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Client-Centric Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              Tailored services to meet your unique needs.
            </p>
          </div>

          {/* Card 3 - Transparency and Integrity */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Transparency and Integrity</h3>
            <p className="text-gray-600 leading-relaxed">
              Clear communication and ethical practices.
            </p>
          </div>

          {/* Card 4 - Client-Centric Approach */}
          <div className="bg-purple-100 border border-purple-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Client-Centric Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              Tailored services to meet your unique needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesWhyChooseUsPage;