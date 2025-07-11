import TestimonialCarousel from './TestimonialCarousel.tsx';
import { ITestimonalData } from '../types/user.ts';
import React from 'react';

interface ILeftPanelProps {
  testimonialData: ITestimonalData[];
}

const AuthLeftPanel: React.FC<ILeftPanelProps> = ({ testimonialData }) => {
  return (
    <div className="w-full bg-[color:var(--color-dark)] grid grid-rows-[20%_20%_auto] p-10 h-full text-[color:var(--color-text)] rounded-r-xl bg-auto bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxwYXRoIGZpbGw9IiMwMGMwMDAiIGZpbGwtb3BhY2l0eT0iMC4yIiBkPSJNMCwyMDBjMTUwLDAsNDUwLDQwMCw1MDAsMzUwQzU1MCwzMDAsODUwLDQ1MCwxMDAwLDIwMHY4MDBIMHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMDBjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMyIgZD0iTTAsNDAwYzE1MCwwLDMwMCwyMDAsNTAwLDMwMEM3MDAsNTAwLDg1MCw3MDAsOTUwLDUwMGMxMDAsLTIwMCwxMDAsLTUwLDE1MCwtMTAwdjYwMEgweiI+PC9wYXRoPjwvc3ZnPg==')]">
      <div className="">
        <div className="w-10 h-10 bg-transparent flex items-center justify-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 12H20V16H24V12Z" fill="white" />
            <path d="M12 20H8V24H12V20Z" fill="white" />
            <path d="M24 20H20V24H24V20Z" fill="white" />
            <path d="M32 20H28V24H32V20Z" fill="white" />
            <path d="M12 28H8V32H12V28Z" fill="white" />
            <path d="M24 28H20V32H24V28Z" fill="white" />
            <path d="M32 28H28V32H32V28Z" fill="white" />
            <path d="M12 12H8V16H12V12Z" fill="white" />
          </svg>
        </div>
      </div>

      <div className="">
        <h1 className="text-2xl mb-4 font-semibold">
          Rent, Buy & Invest with HouseBank
        </h1>
        <p className="text-lg leading-6 opacity-90 text-pretty">
          Be in control of your next house for Rent, Buy or Investment, you are
          in charge.
        </p>
        <p className="text-lg leading-6 opacity-90 text-pretty">
          Sign up and be in control of the future
        </p>
      </div>

      <div className="w-full self-end overflow-auto">
        <TestimonialCarousel testimonials={testimonialData} />
      </div>
    </div>
  );
};

export default AuthLeftPanel;
