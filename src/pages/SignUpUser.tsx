import { useState } from 'react';
import AuthTitle from '../components/AuthTitle.tsx';
import { authContainerStyle, authInputStyle } from './SignIn.tsx';
import Button from '../components/Button.tsx';

export default function SignUpUser() {
  const [formData, setFormData] = useState({
    userType: '',
    email: '',
    phone: '',
  });

  const handleSubmit = () => {
    console.log(formData);
  };

  const handleUserTypeChange = (type: string) => {
    setFormData({
      ...formData,
      userType: formData.userType === type ? '' : type,
    });
  };

  return (
    <div className={authContainerStyle}>
      <AuthTitle
        headerText="Sign Up"
        subtitle="Have an account?"
        linkText="Sign In"
      />
      <div>
        {/* Category Selection */}
        <div className="mb-8 w-full">
          <label className="block mb-6 font-medium text-gray-800 text-[19px]">
            Select Category
          </label>
          <div className="flex gap-6">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="userType"
                value="buyer"
                checked={formData.userType === 'buyer'}
                onChange={() => handleUserTypeChange('buyer')}
                className={authInputStyle}
              />
              <span className="ml-3 text-gray-700 text-base">Buyer</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                name="userType"
                value="seller"
                checked={formData.userType === 'seller'}
                onChange={() => handleUserTypeChange('seller')}
                className={authInputStyle}
              />
              <span className="ml-3 text-gray-700 text-base">Seller</span>
            </label>
          </div>
        </div>

        {/* Email Address */}
        <div className="mb-8 w-full">
          <label className="block mb-3 font-medium text-gray-800 text-[19px]">
            Email Address
          </label>
          <input
            type="email"
            className={authInputStyle}
            placeholder="e.g john@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        {/* Phone Number */}
        <div className="mb-8 w-full">
          <label className="block mb-3 font-medium text-gray-800 text-[19px]">
            Phone Number
          </label>
          <div className="relative">
            <input
              type="tel"
              className={authInputStyle}
              placeholder="+234 800 000 0000"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 0A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 12.5 0h-9zM12 14.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v11z"
                  fill="currentColor"
                />
                <path
                  d="M8 12.5a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/5 mt-8">
        <Button text="Send Code" onClick={handleSubmit} />
      </div>
    </div>
  );
}
