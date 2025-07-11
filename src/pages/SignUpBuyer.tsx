import { useState } from 'react';
import AuthTitle from '../components/AuthTitle.tsx';
import Button from '../components/Button.tsx';
import { authContainerStyle, authInputStyle } from './SignIn.tsx';

export default function SignUpBuyer() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    cacNumber: '',
    idFile: null as File | null,
    cacFile: null as File | null,
    companyName: '',
    companyAddress: '',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const { name } = e.target;
      setFormData({ ...formData, [name]: e.target.files[0] });
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
        {/* Company Name and Address Row */}
        <div className="flex gap-4 mb-6 w-full">
          <div className="flex-1">
            <label className="block mb-2 font-medium text-gray-800 text-[19px]">
              Company's Name
            </label>
            <input
              type="text"
              className={authInputStyle}
              placeholder="e.g ABC Corp"
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
        <div className="mb-6 w-full">
          <label className="block mb-2 font-medium text-gray-800 text-[19px]">
            CAC Registration No
          </label>
          <input
            type="text"
            className={authInputStyle}
            placeholder="23323433099"
            value={formData.cacNumber}
            onChange={(e) =>
              setFormData({ ...formData, cacNumber: e.target.value })
            }
          />
        </div>

        {/* Email Address */}
        <div className="mb-6 w-full">
          <label className="block mb-2 font-medium text-gray-800 text-[19px]">
            Email Address
          </label>
          <input
            type="email"
            className={authInputStyle}
            placeholder="e.g. john@company.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        {/* Phone Number */}
        <div className="mb-6 w-full">
          <label className="block mb-2 font-medium text-gray-800 text-[19px]">
            Phone Number
          </label>
          <div className="relative">
            <input
              type="tel"
              className={authInputStyle}
              placeholder="+234"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 12L3 7L4.4 5.55L7 8.15V0H9V8.15L11.6 5.55L13 7L8 12Z"
                  fill="#4A5568"
                />
                <path
                  d="M2 16C1.45 16 0.979002 15.804 0.587002 15.412C0.195002 15.02 -0.000664969 14.5493 1.69779e-06 14V11H2V14H14V11H16V14C16 14.55 15.804 15.021 15.412 15.413C15.02 15.805 14.5493 16.0007 14 16H2Z"
                  fill="#4A5568"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* File Uploads */}
        <div className="mb-6 w-full">
          <label className="block mb-4 font-medium text-gray-800 text-[19px]">
            Verification
          </label>
          <div className="flex gap-4">
            <div className="flex-1">
              <div
                className="w-full h-12 bg-white border border-gray-300 rounded-md flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors px-4"
                onClick={() => document.getElementById('id-upload')?.click()}
              >
                <span className="text-[16px] text-gray-600 truncate mr-2">
                  {formData.idFile ? formData.idFile.name : 'Upload ID Card'}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-gray-400 flex-shrink-0"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              </div>
              <input
                type="file"
                id="id-upload"
                name="idFile"
                className="hidden"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
              />
            </div>

            <div className="flex-1">
              <div
                className="w-full h-12 bg-white border border-gray-300 rounded-md flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors px-4"
                onClick={() => document.getElementById('cac-upload')?.click()}
              >
                <span className="text-[16px] text-gray-600 truncate mr-2">
                  {formData.cacFile
                    ? formData.cacFile.name
                    : 'Upload CAC Document'}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="text-gray-400 flex-shrink-0"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <input
                type="file"
                id="cac-upload"
                name="cacFile"
                className="hidden"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-2/5 mt-8">
        <Button text="Sign Up" onClick={handleSubmit} />
      </div>
    </div>
  );
}
