import { useState } from 'react';
import { Copy, Twitter, Facebook, Instagram, Linkedin, ChevronRight } from 'lucide-react';

// You'll need to add this image to your assets folder
import realEstateMeetingImage from '../assets/blog/real-estate-meeting.png';

interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

const BlogArticlePageDetails = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [copySuccess, setCopySuccess] = useState(false);

  const tableOfContents: TableOfContentsItem[] = [
    { id: 'introduction', title: 'Introduction', level: 1 },
    { id: 'choosing-best-properties', title: 'Choosing the best properties in 2025', level: 1 },
    { id: 'financial-executions', title: 'How to make the best financial executions', level: 1 },
    { id: 'discover-hottest-regions', title: 'How to discover the hottest regions to invest in', level: 1 },
    { id: 'potential-roi', title: 'Potential ROI and risks', level: 1 },
    { id: 'expert-recommendations', title: 'Expert recommendations for investors', level: 1 },
    { id: 'more-resources', title: 'More resources', level: 1 },
    { id: 'conclusion', title: 'Conclusion', level: 1 }
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const handleSocialShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent("Top 5 Emerging Real Estate Markets in 2025");
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            "Top 5 Emerging Real Estate Markets in 2025"
          </h1>
          
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Discover the hottest regions to invest in, based on market data and growth trends.
          </p>
          
          <ul className="space-y-2 mb-8">
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-600">Key features of these markets.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-600">Potential ROI and risks.</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
              <span className="text-gray-600">Expert recommendations for investors.</span>
            </li>
          </ul>
        </header>

        {/* Hero Image */}
        <div className="mb-8">
          <div className="aspect-[16/7] rounded-2xl overflow-hidden">
            <img 
              src={realEstateMeetingImage}
              alt="Real estate meeting - professionals discussing property investment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Meta and Social Sharing */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-6 border-b border-gray-200">
          <div className="mb-4 sm:mb-0">
            <p className="text-sm text-gray-600 mb-1">
              Written by: <span className="font-medium text-gray-900">Moses Sunday</span>
            </p>
            <p className="text-sm text-gray-600">
              Published on: <span className="font-medium text-gray-900">15th December 2024</span>
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              onClick={handleCopyLink}
              className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              title="Copy Link"
            >
              <Copy className="w-4 h-4" />
              <span className="text-sm">{copySuccess ? 'Copied!' : 'Copy Link'}</span>
            </button>
            
            <button
              onClick={() => handleSocialShare('twitter')}
              className="p-2 text-gray-600 hover:text-blue-400 transition-colors"
              title="Share on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => handleSocialShare('facebook')}
              className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              title="Share on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </button>
            
            <button
              className="p-2 text-gray-600 hover:text-pink-500 transition-colors"
              title="Share on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => handleSocialShare('linkedin')}
              className="p-2 text-gray-600 hover:text-blue-700 transition-colors"
              title="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Table of Contents - Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <nav className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                <ul className="space-y-2">
                  {tableOfContents.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={`text-left w-full text-sm transition-colors hover:text-green-600 flex items-center space-x-2 ${
                          activeSection === item.id 
                            ? 'text-green-600 font-medium' 
                            : 'text-gray-600'
                        }`}
                      >
                        <span className="w-1 h-1 bg-current rounded-full flex-shrink-0"></span>
                        <span>{item.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Article Content */}
          <main className="lg:col-span-3">
            <div className="prose prose-gray max-w-none">
              
              {/* Introduction Section */}
              <section id="introduction" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The real estate industry is constantly evolving, shaped by economic trends, technological advancements, and shifting consumer 
                  demands. As we look ahead to 2025, certain markets are standing out as the next big opportunities for investors, developers, 
                  and aspiring homeowners. These emerging real estate hubs are characterized by rapid growth, innovative developments, and 
                  untapped potential that promise high returns and vibrant living environments.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're an investor seeking lucrative opportunities or a homeowner dreaming of a perfect community, understanding 
                  these markets can help you stay ahead of the curve. Join us as we delve into the top five emerging real estate markets of 2025, 
                  exploring the factors driving their growth and why they're set to become the new hotspots for property development and 
                  investment.
                </p>
              </section>

              {/* Choosing Best Properties Section */}
              <section id="choosing-best-properties" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Choosing the best properties in 2025</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The real estate industry is constantly evolving, shaped by economic trends, technological advancements, and shifting consumer 
                  demands. As we look ahead to 2025, certain markets are standing out as the next big opportunities for investors, developers, 
                  and aspiring homeowners. These emerging real estate hubs are characterized by rapid growth, innovative developments, and 
                  untapped potential that promise high returns and vibrant living environments.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're an investor seeking lucrative opportunities or a homeowner dreaming of a perfect community, understanding 
                  these markets can help you stay ahead of the curve. Join us as we delve into the top five emerging real estate markets of 2025, 
                  exploring the factors driving their growth and why they're set to become the new hotspots for property development and 
                  investment.
                </p>
              </section>

              {/* Financial Executions Section */}
              <section id="financial-executions" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How to make the best financial executions</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The real estate industry is constantly evolving, shaped by economic trends, technological advancements, and shifting consumer 
                  demands. As we look ahead to 2025, certain markets are standing out as the next big opportunities for investors, developers, 
                  and aspiring homeowners. These emerging real estate hubs are characterized by rapid growth, innovative developments, and 
                  untapped potential that promise high returns and vibrant living environments.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're an investor seeking lucrative opportunities or a homeowner dreaming of a perfect community, understanding 
                  these markets can help you stay ahead of the curve. Join us as we delve into the top five emerging real estate markets of 2025, 
                  exploring the factors driving their growth and why they're set to become the new hotspots for property development and 
                  investment.
                </p>
              </section>

              {/* Discover Hottest Regions Section */}
              <section id="discover-hottest-regions" className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How to discover the hottest regions to invest in</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The real estate industry is constantly evolving, shaped by economic trends, technological advancements, and shifting consumer 
                  demands. As we look ahead to 2025, certain markets are standing out as the next big opportunities for investors, developers, 
                  and aspiring homeowners. These emerging real estate hubs are characterized by rapid growth, innovative developments, and 
                  untapped potential that promise high returns and vibrant living environments.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're an investor seeking lucrative opportunities or a homeowner dreaming of a perfect community, understanding 
                  these markets can help you stay ahead of the curve. Join us as we delve into the top five emerging real estate markets of 2025, 
                  exploring the factors driving their growth and why they're set to become the new hotspots for property development and 
                  investment.
                </p>
              </section>

            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BlogArticlePageDetails;