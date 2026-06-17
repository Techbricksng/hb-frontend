

const AntiDiscriminationPageContent = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Anti Discrimination
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Fighting discrimination and making rent easy and investments opportunity accessible to everyone
          </p>
        </div>

        {/* Anti Discrimination Methods */}
        <div className="space-y-8 mb-16">
          {/* Method 1 */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              1. Using real data
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We examine how rents and investments are being handled on our platform. Statistical analyses help us find opportunities to make Housebank accessible to everyone
            </p>
          </div>

          {/* Method 2 */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              2. Protecting privacy.
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We analyze trends in aggregate and don't associate perceived race information with specific people or accounts.
            </p>
          </div>

          {/* Method 3 */}
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-gray-900">
              3. Constant Updates
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our team continues to identify new ways to make Airbnb more open and equitable.
            </p>
          </div>
        </div>

        {/* Our Ongoing Work Section */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Our ongoing work
          </h1>

          {/* Feature 1: Instant Rent Feature */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              1. Instant Rent Feature.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                The Instant Rent feature on HouseBank allows tenants to secure rental properties or investment opportunities without requiring prior approval from property owners. This feature helps create a more streamlined and equitable renting process by supporting objective and transparent transactions.
              </p>
              <p>
                Recent updates to include a more comprehensive evaluation of tenant profiles have further enhanced the effectiveness of Instant Rent, making it easier for tenants with a positive track record to successfully secure properties or investment options through HouseBank.
              </p>
              <p>
                Let me know if you'd like additional adjustments!
              </p>
              <p className="text-sm">4o</p>
            </div>
          </div>

          {/* Feature 2: Enhanced Property Owner Features */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              2. Enhanced property Owner features.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                New tools introduced on HouseBank help property owners respond to rental inquiries and investment requests more promptly, increasing the overall success rate of completed transactions. These improvements include highlighting pending rental or investment requests more prominently in the property owner's dashboard.
              </p>
              <p>
                As a result, fewer requests are left unanswered, effectively increasing the number of tenants who successfully rent a property or investors who secure real estate opportunities through HouseBank.
              </p>
            </div>
          </div>

          {/* Feature 3: Reviews */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              3. Reviews
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                To further enhance the review process, we've introduced a feature that allows primary applicants to add co-tenants or collaborators with HouseBank accounts to their rental or investment applications.
              </p>
              <p>
                This feature ensures that co-tenants or collaborators can also receive reviews for their participation, even if they were not the primary applicant. By fostering accountability and transparency, this system helps build trust and increases successful outcomes within the HouseBank community.
              </p>
            </div>
          </div>

          {/* Feature 4: Introducing Preferred Names */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">
              4. Introducing preferred names
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                At HouseBank, we've implemented a new feature allowing tenants, property owners, and investors to display their preferred names on their profiles after confirming their legal name. This enhancement fosters a more personalized and welcoming environment within our platform.
              </p>
              <p>
                Additionally, we've improved the process for addressing concerns about being referenced with incorrect identifiers in reviews or communications. If a tenant, property owner, or investor reports such an issue, we will promptly replace the identifier with the user's preferred name to ensure respect and inclusivity across all interactions.
              </p>
              <p>
                This initiative reflects our commitment to creating a respectful and inclusive community for all members of the HouseBank platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiDiscriminationPageContent;