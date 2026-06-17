import { ArrowRight } from 'lucide-react';

import heroBackground from '../assets/about/hero-building-bg.png';

const AboutSlide = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground}
          alt="Modern building architecture"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Welcome Badge */}
        <div className="mb-8">
          <span className="inline-block px-4 py-2  bg-opacity-20 text-white text-md font-medium rounded-full border-white border-opacity-30">
            Welcome to HouseBank
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
          Dream Home Meets Trusted Expertise
        </h1>

        {/* Description Text */}
        <div className="space-y-6 mb-12">
          <p className="text-lg sm:text-xl text-white text-opacity-90 leading-relaxed max-w-4xl mx-auto">
            At HouseBank, we pride ourselves on being more than just a real estate agency, we are your partners in finding the perfect space to live, work, and thrive.
          </p>
          <p className="text-lg sm:text-xl text-white text-opacity-90 leading-relaxed max-w-4xl mx-auto">
            Whether you're searching for a family home, an investment property, or a commercial space, we are committed to helping you achieve your goals with professionalism and care
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-8 rounded-lg transition-colors duration-200 group">
            <span className="text-lg">Explore Properties</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSlide;