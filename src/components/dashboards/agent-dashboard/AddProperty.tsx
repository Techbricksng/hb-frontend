import { useState, useRef } from 'react';
import { Upload } from 'lucide-react';

const AgentAddListPropertyPage = () => {
  const [propertyName, setPropertyName] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [price, setPrice] = useState('');
  const [facilities, setFacilities] = useState<string[]>([]);
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');

  const [mainImage, setMainImage] = useState<string | null>(null);
  const [additionalImages, setAdditionalImages] = useState<(string | null)[]>([null, null]); // two upload boxes

  // Refs for hidden file inputs
  const mainImageInputRef = useRef<HTMLInputElement | null>(null);
  const additionalImageRefs = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
  ];

  const availableFacilities = [
    'Big swimming pool',
    'Near Trail Station',
    'Big size garden',
    '4 Car Parking',
    '24/7 electricity',
    'Personal Theater',
  ];

  const handleFacilityToggle = (facility: string) => {
    setFacilities(prev =>
      prev.includes(facility)
        ? prev.filter(f => f !== facility)
        : [...prev, facility]
    );
  };

  // ---- Image Upload Handlers ----

  const handleMainImageUpload = () => {
    mainImageInputRef.current?.click();
  };

  const onMainImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMainImage(URL.createObjectURL(file));
    }
  };

  const handleAdditionalImageUpload = (index: number) => {
    additionalImageRefs[index].current?.click();
  };

  const onAdditionalImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const updated = [...additionalImages];
      updated[index] = imageUrl;
      setAdditionalImages(updated);
    }
  };

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">List Property</h1>
          <button
            className="px-6 py-2 text-white rounded-lg transition-colors font-medium flex items-center space-x-2"
            style={{ backgroundColor: '#785E77' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a4259'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#785E77'}
          >
            <span>+</span>
            <span>Add Property</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* Image Upload Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            {/* Main Image */}
            <div className="lg:col-span-2 relative">
              <input
                type="file"
                accept="image/*"
                ref={mainImageInputRef}
                onChange={onMainImageChange}
                className="hidden"
              />
              <div
                onClick={handleMainImageUpload}
                className="w-full h-64 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-green-500 transition-colors bg-gray-50 overflow-hidden"
              >
                {mainImage ? (
                  <img
                    src={mainImage}
                    alt="Main property"
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">Click to upload main image</p>
                  </div>
                )}
              </div>
            </div>

            {/* Additional Images (2 boxes) */}
            <div className="space-y-4">
              {additionalImages.map((img, index) => (
                <div key={index} className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    ref={additionalImageRefs[index]}
                    onChange={(e) => onAdditionalImageChange(e, index)}
                    className="hidden"
                  />
                  <div
                    onClick={() => handleAdditionalImageUpload(index)}
                    className="w-full h-28 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-green-500 transition-colors bg-gray-50 overflow-hidden"
                  >
                    {img ? (
                      <img
                        src={img}
                        alt={`Additional ${index}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-1" />
                        <p className="text-gray-500 text-xs">Upload image</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Property Details Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Property Details</h2>
            <p className="text-sm text-gray-500 mb-6">Your message will be delivered to the receiver</p>

            {/* Property Name, Type, Price */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Name</label>
                <input
                  type="text"
                  value={propertyName}
                  onChange={(e) => setPropertyName(e.target.value)}
                  placeholder="Oakwood Luxury Apartment"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                <input
                  type="text"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  placeholder="2-Bedroom Apartment"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="6,000,000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Facilities */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">Facilities</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {availableFacilities.map((facility) => (
                  <div
                    key={facility}
                    onClick={() => handleFacilityToggle(facility)}
                    className={`px-4 py-2 border rounded-lg cursor-pointer transition-colors text-sm ${
                      facilities.includes(facility)
                        ? 'bg-green-50 border-green-500 text-green-700'
                        : 'border-gray-300 text-gray-600 hover:border-gray-400'
                    }`}
                  >
                    {facility}
                  </div>
                ))}
              </div>
            </div>

            {/* Location and City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="5TH Avenue Gwarinpa Abuja"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-end">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Abuja"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div className="ml-4">
                  <span className="inline-block px-4 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg">
                    Approved
                  </span>
                </div>
              </div>
            </div>

            {/* Property Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Property Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentAddListPropertyPage;
