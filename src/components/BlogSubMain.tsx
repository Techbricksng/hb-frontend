import { ChevronRight } from 'lucide-react';

// You'll need to add these images to your assets folder
import modernHouseExterior from '../assets/blog/modern-house-exterior.png';
import modernDiningRoom from '../assets/blog/modern-dining-room.png';
import happyManOutdoor from '../assets/blog/happy-man-outdoor.png';
import creditScoreMeeting from '../assets/blog/credit-score-meeting.png';
import realEstateConsultation from '../assets/blog/real-estate-consultation.png';
import phoneInHands from '../assets/blog/phone-in-hands.png';
import modernStaircase from '../assets/blog/modern-staircase.png';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  size: 'large' | 'medium' | 'small';
}

const PopularBlogGridPage = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Is Now the Right Time to Sell Your Home?",
      date: "15 December, 2024",
      image: modernHouseExterior,
      size: 'large'
    },
    {
      id: 2,
      title: "Top 5 Homebuying Mistakes and How to Avoid Them",
      date: "15 December, 2024",
      image: modernDiningRoom,
      size: 'large'
    },
    {
      id: 3,
      title: "10 Ways to Boost Your Home's Value Before Selling",
      date: "15 December, 2024",
      image: happyManOutdoor,
      size: 'medium'
    },
    {
      id: 4,
      title: "Why Your Credit Score Matters in Real Estate",
      date: "15 December, 2024",
      image: creditScoreMeeting,
      size: 'medium'
    },
    {
      id: 5,
      title: "Top 5 Emerging Real Estate Markets in 2024",
      date: "15 December, 2024",
      image: realEstateConsultation,
      size: 'medium'
    },
    {
      id: 6,
      title: "Is Now the Right Time to Sell Your Home?",
      date: "15 December, 2024",
      image: phoneInHands,
      size: 'large'
    },
    {
      id: 7,
      title: "Top 5 Homebuying Mistakes and How to Avoid Them",
      date: "15 December, 2024",
      image: modernStaircase,
      size: 'large'
    }
  ];

  const handleReadMore = (postId: number) => {
    console.log('Read more for post:', postId);
    // Handle navigation to full blog post
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Popular Blog
          </h2>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors group">
            <span className="text-sm font-medium">See More</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-4 gap-6">
          
          {/* Row 1 - Two large cards */}
          <div className="lg:col-span-2">
            <article 
              className="group cursor-pointer h-full"
              onClick={() => handleReadMore(blogPosts[0].id)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3">
                    {blogPosts[0].date}
                  </p>
                  <Link to={`/blog-details`} className="block">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-tight">
                    "{blogPosts[0].title}"
                  </h3>
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <div className="lg:col-span-2">
            <article 
              className="group cursor-pointer h-full"
              onClick={() => handleReadMore(blogPosts[1].id)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={blogPosts[1].image}
                    alt={blogPosts[1].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3">
                    {blogPosts[1].date}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-tight">
                    "{blogPosts[1].title}"
                  </h3>
                </div>
              </div>
            </article>
          </div>

          {/* Row 2 - Three medium cards */}
          {blogPosts.slice(2, 5).map((post) => (
            <article 
              key={post.id}
              className="group cursor-pointer"
              onClick={() => handleReadMore(post.id)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3">
                    {post.date}
                  </p>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-tight">
                    "{post.title}"
                  </h3>
                </div>
              </div>
            </article>
          ))}

          {/* Row 3 - Two large cards */}
          <div className="lg:col-span-2">
            <article 
              className="group cursor-pointer h-full"
              onClick={() => handleReadMore(blogPosts[5].id)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={blogPosts[5].image}
                    alt={blogPosts[5].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3">
                    {blogPosts[5].date}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-tight">
                    "{blogPosts[5].title}"
                  </h3>
                </div>
              </div>
            </article>
          </div>

          <div className="lg:col-span-2">
            <article 
              className="group cursor-pointer h-full"
              onClick={() => handleReadMore(blogPosts[6].id)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={blogPosts[6].image}
                    alt={blogPosts[6].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3">
                    {blogPosts[6].date}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-tight">
                    "{blogPosts[6].title}"
                  </h3>
                </div>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PopularBlogGridPage;