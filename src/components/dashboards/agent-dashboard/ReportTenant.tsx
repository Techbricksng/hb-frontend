import { Calendar, Upload } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// A helper component for the checkboxes to reduce repetition
const CheckboxItem = ({ id, label }: { id: string, label: string }) => (
  <div className="relative flex items-start">
    <div className="flex h-6 items-center">
      <input
        id={id}
        name={id}
        type="checkbox"
        className="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500"
      />
    </div>
    <div className="ml-3 text-sm leading-6">
      <label htmlFor={id} className="text-gray-700">
        {label}
      </label>
    </div>
  </div>
);

// Helper component for standard form inputs
const FormInput = ({ id, label, placeholder, type = "text" }: { id: string, label: string, placeholder: string, type?: string }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={id}
      id={id}
      className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm"
      placeholder={placeholder}
    />
  </div>
);

const ReportTenantPage = () => {
  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Uses the same header as your DashboardPage */}
      <CustomerHeader />

      {/* Main Content Area */}
      <main className="p-6 md:p-10">
        <div className="max-w-5xl mx-auto bg-white p-8 md:p-10 rounded-lg shadow-sm border border-gray-200">
          
          {/* Form Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Report Tenant's Conduct
            </h1>
            <p className="mt-2 text-sm text-gray-600 max-w-2xl mx-auto">
              If you have encountered any issues with this agent conduct, please report your concerns. We take
              complaints seriously and will review your report to ensure fair and professional conduct within our platform.
            </p>
          </div>

          {/* Form Body */}
          <form onSubmit={(e) => e.preventDefault()}>
            {/* Reason for Reporting */}
            <div className="mb-8">
              <label className="block text-base font-semibold text-gray-900 mb-4">
                Reason for Reporting (Select one or more)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                <CheckboxItem id="property-damage" label="Property Damage" />
                <CheckboxItem id="fake-documentation" label="Fake Documentation" />
                <CheckboxItem id="lease-violations" label="Lease Violations" />
                <CheckboxItem id="fake-payment" label="Fake Payment Receipt" />
                <CheckboxItem id="uncooperative" label="Uncooperative Tenant" />
                <CheckboxItem id="other" label="Other (please specify)" />
              </div>
            </div>

            {/* Main Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
              
              {/* Left Column */}
              <div className="space-y-6">
                {/* Date of Incident */}
                <div>
                  <label htmlFor="incident-date" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                    Date of Incident:
                  </label>
                  <div className="relative flex w-full rounded-lg border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-green-500">
                    <input
                      type="text"
                      id="incident-date"
                      placeholder="Select date"
                      className="flex-1 px-4 py-2.5 text-sm placeholder-gray-400 border-0 focus:outline-none"
                    />
                    <button
                      type="button"
                      className="px-4 py-2.5 bg-gray-50 border-l border-gray-300 text-gray-500 hover:bg-gray-100"
                    >
                      <Calendar className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Details of the Incident */}
                <div>
                  <label htmlFor="details" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                    Details of the Incident
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    rows={8}
                    className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm"
                    placeholder="Description"
                  ></textarea>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Supporting Evidence */}
                <div>
                  <label htmlFor="evidence" className="block text-sm font-medium leading-6 text-gray-900 mb-2">
                    Supporting Evidence (Optional)
                  </label>
                  <div className="relative flex w-full rounded-lg border border-gray-300 overflow-hidden focus-within:ring-2 focus-within:ring-green-500">
                    <input
                      type="text"
                      id="evidence"
                      placeholder="Screenshots, emails, chat logs,"
                      className="flex-1 px-4 py-2.5 text-sm placeholder-gray-400 border-0 focus:outline-none"
                    />
                    <button
                      type="button"
                      className="px-4 py-2.5 bg-gray-50 border-l border-gray-300 text-gray-500 hover:bg-gray-100"
                    >
                      <Upload className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Your Information */}
                <div className="space-y-6">
                  <h3 className="text-base font-semibold text-gray-900">
                    Your Information (Confidential)
                  </h3>
                  <div className="space-y-4">
                    <FormInput
                      id="full-name"
                      label="Full Name"
                      placeholder="e.g John"
                    />
                    <FormInput
                      id="email"
                      label="Email"
                      placeholder="@gmail.com"
                      type="email"
                    />
                    <FormInput
                      id="phone"
                      label="Phone Number"
                      placeholder="+234"
                      type="tel"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-center items-center gap-4 mt-10 pt-6 border-t border-gray-200">
              <button
                type="submit"
                className="bg-gray-900 text-white px-10 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Send
              </button>
              <button
                type="button"
                className="bg-white text-gray-700 px-10 py-2.5 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
};

export default ReportTenantPage;