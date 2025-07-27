import { useState } from 'react';
import logo1 from '../assets/logo1.png';

const HousebankCoverPage = () => {
  const [activeTab, setActiveTab] = useState('For Listed Properties');

  const tabs = ['For Listed Properties', 'For Users'];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Housebank Cover
          </h1>

          {/* Navigation Tabs */}
          <div className="flex space-x-8 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm font-medium pb-2 transition-colors ${
                  activeTab === tab
                    ? 'text-gray-600 border-b-2 border-green-bolder'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-black rounded-lg p-12 text-center mb-8">
          <div className="flex justify-center mb-4">
            <img src={logo1} alt="Housebank Logo" className="h-16 w-19" />
          </div>
          <h2 className="text-white text-2xl font-bold">
            Housebank Cover
          </h2>
        </div>

        {/* Content Sections */}
        <div className="space-y-8 text-gray-700">
          
          {/* Introduction Paragraph */}
          <div className="space-y-4">
            <p className="leading-relaxed">
              Every property comes with HouseBank cover for our users. If there's a serious issue with your rental that your Host can't resolve, we'll assist in finding you a similar space... 
              Whether you're searching for a family home, an investment property, or a commercial space, our commitment is to your satisfaction. If any issues arise, your Host remains your best point of 
              contact and will likely address the matter quickly. You can also reach out to them directly to discuss your concerns.
            </p>
            <p className="leading-relaxed">
              At HouseBank, we're dedicated to helping you achieve your housing goals with professionalism and care.
            </p>
          </div>

          {/* User Identity Verification */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              User identity verification
            </h3>
            <p className="leading-relaxed">
              Our comprehensive verification system checks details such as name, address, government ID, and more to confirm the identity of every users registered on this platform
            </p>
          </div>

          {/* Renting Screening */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Renting screening
            </h3>
            <p className="leading-relaxed">
              Our proprietary technology analyzes hundreds of factors for every users that want to rent an apartment, carefully reservation and blocks certain bookings that show a high risk for disruptive 
              parties and property damage
            </p>
          </div>

          {/* Inaccurate Listing */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Inaccurate listing
            </h3>
            <div className="space-y-4">
              <p className="leading-relaxed">
                At HouseBank, we're committed to transparency and trust. That's why we offer Inaccurate Listing Protection to safeguard your interests.
              </p>
              <p className="leading-relaxed">
                If a property listing is found to be significantly inaccurate—whether in description, amenities, or condition—we'll take immediate action. This includes assisting you in finding an alternative 
                property, negotiating compensation, or providing a refund if necessary.
              </p>
              <p className="leading-relaxed">
                Your confidence in our listings is our priority, and we ensure every step of your real estate journey is met with professionalism and care.
              </p>
            </div>
          </div>

          {/* How Housebank Cover Works */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              How Housebank cover work for rent and Investment
            </h3>
            <div className="space-y-4">
              <p className="leading-relaxed">
                At HouseBank, we're here to ensure your experience is seamless and stress-free.
              </p>
              <p className="leading-relaxed">
                Our HouseBank Assurance provides support for serious issues with your property rental. This includes cases like your rent cancelling prior to your move-in, the property 
                having fewer rooms than listed, a different type of space being provided (e.g., a private room instead of an entire home), or a major advertised feature such as heating, a pool, 
                or a kitchen being unavailable. However, it doesn't cover minor inconveniences, like a broken tiles.
              </p>
            </div>
          </div>

          {/* Issue Resolution Process */}
          <div>
            <p className="leading-relaxed mb-4">
              Here's what to do if an issue arises with your rental:
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="font-bold text-gray-900 min-w-[20px]">1.</span>
                <p className="leading-relaxed">
                  <span className="font-semibold">Document the Issue:</span> Take clear photos or videos of the problem, if possible.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold text-gray-900 min-w-[20px]">2.</span>
                <p className="leading-relaxed">
                  <span className="font-semibold">Contact Your Host:</span> Reach out to your Host within 72 hours of discovering the issue. Describe the problem and give them a chance to resolve it.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-bold text-gray-900 min-w-[20px]">3.</span>
                <p className="leading-relaxed">
                  <span className="font-semibold">Reach Out to Us:</span> If your rented property issue doesn't get resolved or the house agent doesn't respond, contact HouseBank support as soon as possible.
                </p>
              </div>
            </div>
            <p className="leading-relaxed mt-4">
              We'll review the situation, and if it qualifies under HouseBank Cover, we'll assist you in finding a similar property, subject to availability at comparable pricing. If a similar 
              property isn't available or you choose not to re-rent, we'll provide a full or partial refund.
            </p>
            <p className="leading-relaxed mt-4">
              At HouseBank, your peace of mind is our priority.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HousebankCoverPage;