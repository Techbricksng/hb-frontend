import { ArrowRight, Eye, Heart } from 'lucide-react';


import featuredArticleImage from '../assets/blog/real-estate-meeting.png';
import modernVillaImage from '../assets/blog/modern-villa.png';
import houseEntranceImage from '../assets/blog/house-entrance.png';
import suburbHousesImage from '../assets/blog/suburb-houses.png';

interface Article {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  bulletPoints: string[];
  views: number;
  likes: number;
}

const BlogArticlesPage = () => {
  const featuredArticle: Article = {
    id: 1,
    title: "Top 5 Emerging Real Estate Markets in 2024",
    date: "15 December 2024",
    image: featuredArticleImage,
    description: "Discover the hottest regions to invest in, based on market data and growth trends.",
    bulletPoints: [
      "Key features of these markets.",
      "Potential ROI and risks.",
      "Expert recommendations for investors."
    ],
    views: 0,
    likes: 0
  };

  const articles: Article[] = [
    {
      id: 2,
      title: "Top 5 Emerging Real Estate Markets in 2024",
      date: "15 December, 2024",
      image: modernVillaImage,
      description: "Discover the hottest regions to invest in, based on market data and growth trends.",
      bulletPoints: [
        "Key features of these markets.",
        "Potential ROI and risks.",
        "Expert recommendations for investors."
      ],
      views: 0,
      likes: 0
    },
    {
      id: 3,
      title: "Top 5 Emerging Real Estate Markets in 2024",
      date: "15 December, 2024",
      image: houseEntranceImage,
      description: "Discover the hottest regions to invest in, based on market data and growth trends.",
      bulletPoints: [
        "Key features of these markets.",
        "Potential ROI and risks.",
        "Expert recommendations for investors."
      ],
      views: 0,
      likes: 0
    },
    {
      id: 4,
      title: "Top 5 Emerging Real Estate Markets in 2024",
      date: "15 December, 2024",
      image: suburbHousesImage,
      description: "Discover the hottest regions to invest in, based on market data and growth trends.",
      bulletPoints: [
        "Key features of these markets.",
        "Potential ROI and risks.",
        "Expert recommendations for investors."
      ],
      views: 0,
      likes: 0
    }
  ];

  const handleReadFullArticle = (articleId: number) => {
    console.log('Read full article:', articleId);
    // Handle navigation to full article
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Article */}
        <div className="bg-white rounded-2xl shadow-sm mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <p className="text-sm text-gray-500 mb-4">
                {featuredArticle.date}
              </p>
              
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                "{featuredArticle.title}"
              </h1>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredArticle.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                {featuredArticle.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => handleReadFullArticle(featuredArticle.id)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center space-x-2 w-fit"
              >
                <span>Read Full Article</span>
              </button>
            </div>
            
            {/* Right Image */}
            <div className="aspect-square lg:aspect-auto">
              <img 
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              {/* Article Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Article Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-3">
                  {article.date}
                </p>
                
                <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
                  "{article.title}"
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.description}
                </p>
                
                <ul className="space-y-1 mb-6">
                  {article.bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-600 text-xs">{point}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Article Footer */}
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => handleReadFullArticle(article.id)}
                    className="flex items-center space-x-1 text-gray-600 hover:text-purple-600 transition-colors group"
                  >
                    <span className="text-sm font-medium">Read Full Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{article.views}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{article.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogArticlesPage;