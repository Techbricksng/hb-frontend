import TestimonialCarousel from './TestimonialCarousel.tsx';
import { ITestimonalData } from '../types/user.ts';
import React from 'react';

interface ILeftPanelProps {
  testimonialData: ITestimonalData[];
}

const AuthLeftPanel: React.FC<ILeftPanelProps> = ({ testimonialData }) => {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden rounded-r-xl">
      {/* Animated Green Aurora Background */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="aurora1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ff00" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#00cc00" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#00aa00" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="aurora2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00ff88" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#00dd44" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00bb22" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            {/* First flowing wave */}
            <path 
              d="M0,200 Q100,100 200,150 T400,200 L400,600 Q300,500 200,550 T0,600 Z" 
              fill="url(#aurora1)"
              className="animate-pulse"
            />
            
            {/* Second flowing wave */}
            <path 
              d="M0,400 Q150,300 300,350 T400,400 L400,800 Q250,700 100,750 T0,800 Z" 
              fill="url(#aurora2)"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            
            {/* Third accent wave */}
            <path 
              d="M0,600 Q200,500 400,600 L400,800 L0,800 Z" 
              fill="url(#aurora1)"
              opacity="0.3"
              className="animate-pulse"
              style={{ animationDelay: '2s' }}
            />
          </svg>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full p-8 text-white">
        
        {/* Logo Section */}
        <div className="mb-8">
          <div className="w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <svg
              width="32"
              height="32"
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

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center max-w-sm">
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Rent, Buy & Invest with HouseBank
          </h1>
          <p className="text-lg leading-relaxed opacity-90 mb-4">
            Be in control of your next house for Rent, Buy or Investment, you are in charge.
          </p>
          <p className="text-lg leading-relaxed opacity-90">
            Sign up and be in control of the future
          </p>
        </div>

        {/* Testimonial Section - Bottom */}
        <div className="mt-auto">
          <TestimonialCarousel testimonials={testimonialData} />
        </div>
      </div>

      {/* Additional glow effects */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-green-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-green-300 rounded-full opacity-20 blur-3xl"></div>
    </div>
  );
};

export default AuthLeftPanel;