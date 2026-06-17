import React, { useState } from 'react';
import { Calendar, Upload } from 'lucide-react';

const ReportConcernContent = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    incidentDate: '',
    description: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {/* Main Container */}
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Report neighborhood concern
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto">
            We're committed to creating a safe and trustworthy environment for everyone. If you've any issues about your neighborhood, kindly let us know
          </p>
        </div>

        {/* Form Container */}
        <div className=" rounded-2xl p-8">
          <div className="space-y-8">
            
            {/* Your Information Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Your Information (Optional)
              </h2>

              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="e.g John"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="@gmail.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="+234"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                />
              </div>
            </div>

            {/* Details of the incident Section */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Details of the incident
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* When Did It Happen */}
                <div className="space-y-2">
                  <label htmlFor="incidentDate" className="block text-sm font-medium text-gray-700">
                    When Did It Happen?
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="incidentDate"
                      name="incidentDate"
                      value={formData.incidentDate}
                      onChange={handleInputChange}
                      placeholder="Select date"
                      className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                    />
                    <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                {/* Upload Files */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Upload Files
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      id="fileUpload"
                    />
                    <label
                      htmlFor="fileUpload"
                      className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors cursor-pointer flex items-center text-gray-500"
                    >
                      Screenshots, emails, chatlogs
                    </label>
                    <Upload className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* What Happened */}
              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  What Happened?
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Description"
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                onClick={handleSubmit}
                className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportConcernContent;