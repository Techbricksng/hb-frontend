import { useState } from 'react';
import { MessageCircle, ThumbsUp, ArrowRight } from 'lucide-react';

// You'll need to add these blog images to your assets folder
import blogImage1 from '../assets/blog-1.png';
import blogImage2 from '../assets/blog-2.png';
import blogImage3 from '../assets/blog-3.png';

const BlogSection = () => {
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

  const blogData = [
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

  const handleLike = (blogId: number) => {
    setLikes(prev => ({
      ...prev,
      [blogId]: prev[blogId] + 1
    }));
  };

  const BlogCard = ({ blog }: { blog: typeof blogData[0] }) => (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Blog Image */}
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="p-6 space-y-4">
        {/* Date */}
        <div className="text-sm text-gray-500 font-medium">
          {blog.date}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 leading-tight">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {blog.description}
        </p>

        {/* Bullet Points */}
        <ul className="space-y-2">
          {blog.bulletPoints.map((point, index) => (
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
              <span className="text-sm">{comments[blog.id]}</span>
            </div>

            {/* Likes */}
            <div className="flex items-center space-x-1 text-gray-500">
              <button 
                onClick={() => handleLike(blog.id)}
                className="hover:text-red-500 transition-colors"
              >
                <ThumbsUp className="w-4 h-4" />
              </button>
              <span className="text-sm">{likes[blog.id]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Blog</h2>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors">
            <span className="text-sm font-medium">See More</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;