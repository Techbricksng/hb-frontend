import React from 'react';

const PropertyServicesPage = () => {
  return (
    <div className="bg-white ">
      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-600 text-lg mb-4">Property management we Provide</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">What We DO</h1>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 - Tenant Management */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tenant Management</h3>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>
                <span className="font-semibold text-gray-800">Tenant Screening:</span> We conduct thorough background checks to find reliable tenants.
              </p>
              <p>
                <span className="font-semibold text-gray-800">Lease Agreements:</span> Drafting, negotiation, and renewal of lease contracts.
              </p>
              <p>
                <span className="font-semibold text-gray-800">Tenant Support:</span> Providing 24/7 assistance for tenant queries and concerns.
              </p>
            </div>
          </div>

          {/* Service Card 2 - Rent Collection */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Rent Collection and Financial Management</h3>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>Automated rent collection with on-time disbursements.</p>
              <p>Regular financial reporting, including income, expenses, and tax documents.</p>
              <p>Handling late payments and implementing penalties where necessary.</p>
            </div>
          </div>

          {/* Service Card 3 - Maintenance */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Maintenance and Repairs</h3>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>Scheduling routine property inspections.</p>
              <p>Coordinating maintenance and emergency repairs with trusted contractors.</p>
              <p>Preventative measures to preserve the property's value and reduce costs.</p>
            </div>
          </div>

          {/* Service Card 4 - Marketing (Left) */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing and Vacancy Minimization</h3>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>Professional property listings with high-quality images and compelling descriptions.</p>
              <p>Advertising across major platforms and social media to attract tenants quickly.</p>
              <p>Streamlined tenant placement process to minimize vacancy periods.</p>
            </div>
          </div>

          {/* Service Card 5 - Marketing (Right) - Duplicate for layout */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing and Vacancy Minimization</h3>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>Professional property listings with high-quality images and compelling descriptions.</p>
              <p>Advertising across major platforms and social media to attract tenants quickly.</p>
              <p>Streamlined tenant placement process to minimize vacancy periods.</p>
            </div>
          </div>

          {/* Service Card 6 - Legal Compliance */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Legal and Regulatory Compliance</h3>
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p>Ensuring adherence to local laws, safety regulations, and zoning codes.</p>
              <p>Assistance with eviction procedures when necessary.</p>
              <p>Guidance on property insurance and liability requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyServicesPage;