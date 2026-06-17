import { useState } from 'react';
import AuthTitle from '../components/AuthTitle.tsx';
import Button from '../components/Button.tsx';
import { authContainerStyle, authInputStyle } from './SignIn.tsx';

export default function SignUpSeller() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyAddress: '',
    cacNumber: '',
    email: '',
    phone: '',
    idFile: null as File | null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, idFile: e.target.files[0] });
    }
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className={authContainerStyle}>
      <AuthTitle
        headerText="Sign Up"
        subtitle="Have an account?"
        linkText="Sign In"
      />
      <div>
        {/* Company Name & Address Row */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <label className="block mb-2 font-medium text-gray-800 text-[19px]">
              Company's Name
            </label>
            <input
              type="text"
              className={authInputStyle}
              placeholder="e.g John"
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
            />
          </div>

          <div className="flex-1">
            <label className="block mb-2 font-medium text-gray-800 text-[19px]">
              Company's Address
            </label>
            <input
              type="text"
              className={authInputStyle}
              placeholder="e.g 123 Main Street"
              value={formData.companyAddress}
              onChange={(e) =>
                setFormData({ ...formData, companyAddress: e.target.value })
              }
            />
          </div>
        </div>

        {/* CAC Registration Number */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-800 text-[19px]">
            CAC Registration No
          </label>
          <input
            type="text"
            className={authInputStyle}
            placeholder="e.g RC123456"
            value={formData.cacNumber}
            onChange={(e) =>
              setFormData({ ...formData, cacNumber: e.target.value })
            }
          />
        </div>

        {/* Email Address */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-800 text-[19px]">
            Email Address
          </label>
          <input
            type="email"
            className={authInputStyle}
            placeholder="e.g john@company.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        {/* Phone Number */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-800 text-[19px]">
            Phone Number
          </label>
          <input
            type="tel"
            className={authInputStyle}
            placeholder="+234"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>

        {/* File Upload */}
        <div className="mb-8">
          <label className="block mb-2 font-medium text-gray-800 text-[19px]">
            Verification
          </label>
          <div
            className="w-full h-12 px-4 bg-white border border-gray-300 rounded-md flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors duration-200 focus-within:ring-2 focus-within:ring-green-500 focus-within:border-green-500"
            onClick={() => document.getElementById('id-upload')?.click()}
          >
            <span className="text-[16px] text-gray-600">
              {formData.idFile ? formData.idFile.name : 'Upload ID Card'}
            </span>
            <span className="text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </span>
          </div>
          <input
            type="file"
            id="id-upload"
            className="hidden"
            onChange={handleFileChange}
            accept=".jpg,.jpeg,.png,.pdf"
          />
        </div>
      </div>
      <div className="w-2/5 mt-8">
        <Button text="Sign Up" onClick={handleSubmit} />
      </div>
    </div>
  );
}
