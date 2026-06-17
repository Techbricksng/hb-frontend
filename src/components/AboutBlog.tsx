import { useState } from 'react';
import { MapPin, Building, DollarSign, Search, MessageCircle, ThumbsUp, ArrowRight } from 'lucide-react';

// You'll need to add these blog images to your assets folder
import blogImage1 from '../assets/about/modern-apartments.png';
import blogImage2 from '../assets/about/house-porch.png';
import blogImage3 from '../assets/about/suburban-houses.png';

const BlogPage = () => {
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    propertyType: '',
    priceRange: ''
  });

  const [likes, setLikes] = useState<{ [key: number]: number }>({
    1: 0,
    2: 0,
    3: 0
  });

  const [comments] = useState<{ [key: number]: number }>({
    1: 0,
    2: 0,
    3: 0
  });

  const blogPosts = [
    {
      id: 1,
      image: blogImage1,
      date: '15 December, 2024',
      title: '"Top 5 Emerging Real Estate Markets in 2024"',
      description: 'Discover the hottest regions to invest in, based on market data and growth trends.',
      bulletPoints: [
        'Key features of these markets.',
        'Potential ROI and risks.',
        'Expert recommendations for investors.'
      ]
    },
    {
      id: 2,
      image: blogImage2,
      date: '01 January, 2025',
      title: '"Top 5 Emerging Real Estate Markets in 2024"',
      description: 'Discover the hottest regions to invest in, based on market data and growth trends.',
      bulletPoints: [
        'Key features of these markets.',
        'Potential ROI and risks.',
        'Expert recommendations for investors.'
      ]
    },
    {
      id: 3,
      image: blogImage3,
      date: '01 January, 2025',
      title: '"Top 5 Emerging Real Estate Markets in 2024"',
      description: 'Discover the hottest regions to invest in, based on market data and growth trends.',
      bulletPoints: [
        'Key features of these markets.',
        'Potential ROI and risks.',
        'Expert recommendations for investors.'
      ]
    }
  ];

  const handleLike = (postId: number) => {
    setLikes(prev => ({
      ...prev,
      [postId]: prev[postId] + 1
    }));
  };

  const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Blog Image */}
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="p-6 space-y-4">
        {/* Date */}
        <div className="text-sm text-gray-500 font-medium">
          {post.date}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 leading-tight">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {post.description}
        </p>

        {/* Bullet Points */}
        <ul className="space-y-2">
          {post.bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4">
          {/* Read More */}
          <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors group">
            <span className="text-sm font-medium">Read More</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Interactions */}
          <div className="flex items-center space-x-4">
            {/* Comments */}
            <div className="flex items-center space-x-1 text-gray-500">
              <button className="hover:text-gray-700 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </button>
              <span className="text-sm">{comments[post.id]}</span>
            </div>

            {/* Likes */}
            <div className="flex items-center space-x-1 text-gray-500">
              <button 
                onClick={() => handleLike(post.id)}
                className="hover:text-red-500 transition-colors"
              >
                <ThumbsUp className="w-4 h-4" />
              </button>
              <span className="text-sm">{likes[post.id]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Search */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Blog</h1>
          
          {/* Search Bar */}
          <div className="flex items-center space-x-4">
            <div className="relative right-15 bg-white rounded-full p-2 shadow-sm flex items-center space-x-4">
              {/* Location Filter */}
              <div className="flex items-center space-x-2 px-4 py-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter Location"
                  value={searchFilters.location}
                  onChange={(e) => setSearchFilters(prev => ({...prev, location: e.target.value}))}
                  className="text-sm text-gray-600 bg-transparent outline-none w-32"
                />
              </div>

              <div className="w-px h-6 bg-gray-200"></div>

              {/* Property Type Filter */}
              <div className="flex items-center space-x-2 px-4 py-2">
                <Building className="w-4 h-4 text-gray-400" />
                <select
                  value={searchFilters.propertyType}
                  onChange={(e) => setSearchFilters(prev => ({...prev, propertyType: e.target.value}))}
                  className="text-sm text-gray-600 bg-transparent outline-none appearance-none w-40"
                >
                  <option value="">Enter Property type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="condo">Condo</option>
                </select>
                <svg className="w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div className="w-px h-6 bg-gray-200"></div>

              {/* Price Range Filter */}
              <div className="flex items-center space-x-2 px-4 py-2">
                <DollarSign className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Price Range"
                  value={searchFilters.priceRange}
                  onChange={(e) => setSearchFilters(prev => ({...prev, priceRange: e.target.value}))}
                  className="text-sm text-gray-600 bg-transparent outline-none w-28"
                />
              </div>

              {/* Search Button */}
              <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors">
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* See More Button */}
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
              <span className="text-sm font-medium">See More</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;