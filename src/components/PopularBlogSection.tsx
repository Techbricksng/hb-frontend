import { ChevronRight } from 'lucide-react';

// You'll need to add these images to your assets folder
import modernHouseImage from '../assets/hbCover/modern-house-exterior.png';
import diningRoomImage from '../assets/hbCover/modern-dining-room.png';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
}

const PopularBlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Is Now the Right Time to Sell Your Home?",
      date: "15 December, 2024",
      image: modernHouseImage
    },
    {
      id: 2,
      title: "Top 5 Homebuying Mistakes and How to Avoid Them",
      date: "15 December, 2024", 
      image: diningRoomImage
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Popular Blog
          </h2>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors group">
            <span className="text-sm font-medium">See More</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer"
            >
              {/* Blog Post Card */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                {/* Blog Post Image */}
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Blog Post Content */}
                <div className="p-6">
                  {/* Date */}
                  <p className="text-sm text-gray-500 mb-3">
                    {post.date}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-tight">
                    "{post.title}"
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBlogSection;