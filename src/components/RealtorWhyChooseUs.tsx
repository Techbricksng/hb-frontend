import dashboard from '../assets/realtor/dashboard.png';
const WhyChooseUsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">
          {/* Left Content - Why Choose Us */}
          <div className="text-white p-12 rounded-2xl" style={{ backgroundColor: '#161D17' }}>
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-200">
              Why Choose Us?
            </h1>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h3 className="font-semibold text-white mb-2">Customer-Centric Approach:</h3>
                <p className="text-sm leading-relaxed">
                  Your satisfaction is our priority. We listen, understand, and deliver solutions tailored to your needs.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Transparency and Integrity:</h3>
                <p className="text-sm leading-relaxed">
                  Honesty and fairness guide everything we do.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Market Expertise:</h3>
                <p className="text-sm leading-relaxed">
                  With a deep understanding of the real estate market, we provide insights to help you make confident decisions.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">End-to-End Support:</h3>
                <p className="text-sm leading-relaxed">
                  From property search to closing the deal, we are with you every step of the way.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative">
            {/* Dashboard Container */}
           <img src={dashboard} alt="Dashboard Preview" className="w-full h-auto rounded-2xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center">
          <button className="bg-green-700 hover:bg-green-800 text-white px-12 py-4 rounded-2xl text-lg font-medium transition-colors shadow-lg" >
            Sign up
          </button>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsPage;