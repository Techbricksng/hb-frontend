import { useState } from 'react';
import { Calendar, Upload } from 'lucide-react';

const ReportScamContent = () => {
  const [formData, setFormData] = useState({
    // Your Information
    fullName: '',
    email: '',
    phoneNumber: '',
    
    // Scammer Information
    scammerName: '',
    scammerEmail: '',
    scammerPhone: '',
    message: '',
    
    // Scam Details
    whatHappened: '',
    whenHappened: '',
    lostMoney: '',
    amount: ''
  });

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm mb-2">Report a Scam</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Have you encountered a scam? Let us know!
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're committed to creating a safe and trustworthy environment for everyone. If you've come 
            across suspicious activities, fraudulent schemes, or deceptive practices, report them here.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl shadow-sm p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Your Information (Optional)</h2>
              
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g John"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="@gmail.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+234"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Details of the Scam Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Details of the Scam</h2>
                
                <div className="space-y-6">
                  {/* What Happened */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">What Happened?</label>
                    <textarea
                      placeholder="Describe the incident in detail..."
                      rows={4}
                      value={formData.whatHappened}
                      onChange={(e) => handleInputChange('whatHappened', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* When Did It Happen & Upload Files */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">When Did It Happen?</label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Select date"
                          value={formData.whenHappened}
                          onChange={(e) => handleInputChange('whenHappened', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors pr-10"
                        />
                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Upload Files</label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Screenshots, emails, chat logs, etc."
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors pr-10"
                        />
                        <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Did You Lose Money */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-3">Did You Lose Money? (Select one)</label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="lostMoney"
                          value="yes"
                          checked={formData.lostMoney === 'yes'}
                          onChange={(e) => handleInputChange('lostMoney', e.target.value)}
                          className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                        />
                        <span className="ml-2 text-gray-700">yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="lostMoney"
                          value="no"
                          checked={formData.lostMoney === 'no'}
                          onChange={(e) => handleInputChange('lostMoney', e.target.value)}
                          className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                        />
                        <span className="ml-2 text-gray-700">No</span>
                      </label>
                    </div>
                  </div>

                  {/* If Yes, How Much */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">If Yes, How Much?</label>
                    <input
                      type="text"
                      placeholder="Enter amount"
                      value={formData.amount}
                      onChange={(e) => handleInputChange('amount', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Scammer Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Scammer Information (if available)</h2>
              
              <div className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g John"
                    value={formData.scammerName}
                    onChange={(e) => handleInputChange('scammerName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="@gmail.com"
                    value={formData.scammerEmail}
                    onChange={(e) => handleInputChange('scammerEmail', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+234"
                    value={formData.scammerPhone}
                    onChange={(e) => handleInputChange('scammerPhone', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                  />
                </div>

                {/* Your Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea
                    placeholder="Description"
                    rows={8}
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="w-full h-[420px] px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => console.log('Form submitted:', formData)}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportScamContent;