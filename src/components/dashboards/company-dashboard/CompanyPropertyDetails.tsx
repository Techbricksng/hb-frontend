// src/components/dashboards/company-dashboard/CompanyPropertyDetails.tsx
import { useState } from 'react';
import { MapPin, Star, MessageCircle, Phone, BedDouble, Bath, Car } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// ── Types ─────────────────────────────────────────────────────────────────────
interface Review {
  rating: number;
  text: string;
}

// ── Mock Data ─────────────────────────────────────────────────────────────────
const REVIEWS: Review[] = [
  { rating: 4, text: 'i effortless got exactly what i wanted. Kudos to you' },
  { rating: 4, text: 'i effortless got exactly what i wanted. Kudos to you' },
  { rating: 4, text: 'i effortless got exactly what i wanted. Kudos to you' },
];

const FACILITIES = [
  'Big swimmig pool',
  'Near Trail Station',
  'Big size garden',
  '4 car Parking',
  '24/7  electricity',
  'Personal Theater',
];

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&q=80',
  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80',
];

// ── Star Rating ───────────────────────────────────────────────────────────────
const StarRating = ({ rating, max = 5 }: { rating: number; max?: number }) => (
  <div className="flex items-center gap-0.5">
    {Array.from({ length: max }, (_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`}
      />
    ))}
  </div>
);

// ── Donut Progress ────────────────────────────────────────────────────────────
const DonutProgress = ({ percent }: { percent: number }) => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="flex items-center justify-center py-2">
      <div className="relative w-36 h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 128 128">
          {/* Track */}
          <circle cx="64" cy="64" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="14" />
          {/* Progress */}
          <circle
            cx="64"
            cy="64"
            r={radius}
            fill="none"
            stroke="#16a34a"
            strokeWidth="14"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-800">{percent}%</span>
        </div>
      </div>
    </div>
  );
};

// ── Main Component ────────────────────────────────────────────────────────────
const CompanyPropertyDetails = () => {

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <CustomerHeader />

      {/* Body */}
      <main className="flex-1 p-6 bg-gray-50 overflow-auto">

        {/* Page Title + Breadcrumb */}
        <div className="mb-5">
          <h1 className="text-xl font-bold text-gray-900">Property</h1>
          <p className="text-xs text-gray-400 mt-0.5">
            Properties &nbsp;›&nbsp; <span className="text-gray-500">Property Details</span>
          </p>
        </div>

        {/* ── Two-column Layout ── */}
        <div className="flex gap-6 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="flex-1 min-w-0 space-y-5">

            {/* Gallery */}
            <div className="flex gap-3 h-[360px]">
              {/* Hero Image */}
              <div className="flex-[1.7] rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=700&q=80"
                  alt="Property Hero"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Side thumbnails */}
              <div className="flex flex-col gap-3 flex-[0.9]">
                {GALLERY_IMAGES.map((src, idx) => (
                  <div key={idx} className="flex-1 rounded-xl overflow-hidden">
                    <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Price + Status */}
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-green-600">₦250,000</span>
              <span className="px-4 py-1.5 rounded-full border border-blue-400 text-blue-500 text-sm font-medium">
                Available
              </span>
            </div>

            {/* Title + Rating */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Rendez House Bay</h2>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-semibold text-gray-700">4.6</span>
              </div>
            </div>

            {/* Location + Specs */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <span className="flex items-center gap-1">
                  <BedDouble className="w-4 h-4" /> 3
                </span>
                <span className="flex items-center gap-1">
                  <Bath className="w-4 h-4" /> 3
                </span>
                <span className="flex items-center gap-1">
                  <Car className="w-4 h-4" /> 3
                </span>
              </div>
            </div>

            {/* Facilities */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">Facilities</h3>
              <div className="flex flex-wrap gap-2">
                {FACILITIES.map((f, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 text-xs font-medium bg-white"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Property Description */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-2">Property Description</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              </p>
            </div>

          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="w-72 flex-shrink-0 space-y-4">

            {/* Realtor Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center">
              <h3 className="text-sm font-semibold text-gray-800 mb-4">Realtor</h3>
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Realtor"
                className="w-20 h-20 rounded-full object-cover mb-3"
              />
              <p className="text-base font-bold text-gray-900">Ibrahim Haruna</p>
              <p className="text-xs text-green-600 mt-0.5 mb-4">1 Scheduled appointment</p>
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                  <MessageCircle className="w-4 h-4 text-gray-600" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Progress Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">Progress</h3>
              <DonutProgress percent={75} />
            </div>

            {/* Reviews Card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 space-y-4">
              <h3 className="text-sm font-semibold text-gray-800">Reviews</h3>
              {REVIEWS.map((review, idx) => (
                <div key={idx} className={idx > 0 ? 'pt-4 border-t border-gray-50' : ''}>
                  <StarRating rating={review.rating} />
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default CompanyPropertyDetails;
