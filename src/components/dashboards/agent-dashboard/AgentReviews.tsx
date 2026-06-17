import { useState } from 'react';
import { Search, Filter, MoreVertical, Star, FileText, AlertCircle } from 'lucide-react';
import CustomerHeader from './CustomerHeader';
import property1 from '../../../assets/property/1.png';
import filter from '../../../assets/filter.png';

interface Review {
  id: string;
  propertyPhoto: string;
  propertyName: string;
  address: string;
  date: string;
  rating: number;
  reviewText: string;
}

const AgentReviewPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<number | null>(null);
  const [openActionMenuId, setOpenActionMenuId] = useState<string | null>(null);

  const reviews: Review[] = [
    {
      id: '1',
      propertyPhoto: property1,
      propertyName: 'Luxury Apartment',
      address: 'Gwarinpa Abuja',
      date: '21/01/2025',
      rating: 4,
      reviewText: 'rafekem gilawofa when I wamed Xadure pm'
    },
    {
      id: '2',
      propertyPhoto: property1,
      propertyName: 'Luxury Apartment',
      address: 'Gwarinpa Abuja',
      date: '21/01/2025',
      rating: 5,
      reviewText: 'rafekem gilawofa when I wamed Xadure pm'
    },
    {
      id: '3',
      propertyPhoto: property1,
      propertyName: 'Luxury Apartment',
      address: 'Gwarinpa Abuja',
      date: '21/01/2025',
      rating: 4,
      reviewText: 'rafekem gilawofa when I wamed Xadure pm'
    },
    {
      id: '4',
      propertyPhoto: property1,
      propertyName: 'Luxury Apartment',
      address: 'Gwarinpa Abuja',
      date: '21/01/2025',
      rating: 4,
      reviewText: 'rafekem gilawofa when I wamed Xadure pm'
    },
    {
      id: '5',
      propertyPhoto: property1,
      propertyName: 'Luxury Apartment',
      address: 'Gwarinpa Abuja',
      date: '21/01/2025',
      rating: 4,
      reviewText: 'rafekem gilawofa when I wamed Xadure pm'
    },
    {
      id: '6',
      propertyPhoto: property1,
      propertyName: 'Luxury Apartment',
      address: 'Gwarinpa Abuja',
      date: '21/01/2025',
      rating: 4,
      reviewText: 'rafekem gilawofa when I wamed Xadure pm'
    },
    {
      id: '7',
      propertyPhoto: property1,
      propertyName: 'Luxury Apartment',
      address: 'Gwarinpa Abuja',
      date: '21/01/2025',
      rating: 4,
      reviewText: 'rafekem gilawofa when I wamed Xadure pm'
    },
    {
      id: '8',
      propertyPhoto: property1,
      propertyName: 'Luxury Apartment',
      address: 'Gwarinpa Abuja',
      date: '21/01/2025',
      rating: 4,
      reviewText: 'rafekem gilawofa when I wamed Xadure pm'
    },
    {
      id: '9',
      propertyPhoto: property1,
      propertyName: 'Luxury Apartment',
      address: 'Gwarinpa Abuja',
      date: '21/01/2025',
      rating: 4,
      reviewText: 'rafekem gilawofa when I wamed Xadure pm'
    }
  ];

  const handleFilterSelect = (rating: number) => {
    setSelectedFilter(selectedFilter === rating ? null : rating);
    setShowFilterMenu(false);
  };

  const handleViewReview = (reviewId: string) => {
    console.log('Viewing review:', reviewId);
    setOpenActionMenuId(null);
  };

  const handleReportReview = (reviewId: string) => {
    console.log('Reporting review:', reviewId);
    setOpenActionMenuId(null);
  };

  const filteredReviews = selectedFilter
    ? reviews.filter(review => review.rating === selectedFilter)
    : reviews;

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Top Header */}
      <CustomerHeader />

      {/* Main Content */}
      <div className="p-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Review</h1>
              <p className="text-sm text-gray-500">Total Reviews 2 102</p>
            </div>
            
           {/* Search and Filter Section */}
            <div className="flex items-center justify-between mb-6 gap-4">

            {/* Search Bar + Filter */}
            <div className="flex items-center space-x-3 bg-white border border-gray-200 rounded-full px-3 py-2">
                {/* Search Icon */}
                <Search className="w-5 h-5 text-gray-400" />

                {/* Search Input */}
                <input
                type="text"
                placeholder="Search here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-sm text-gray-900 placeholder-gray-500 w-64"
                />

                {/* Filter Button with Dropdown */}
                <div className="relative">
                <button
                    onClick={() => setShowFilterMenu(!showFilterMenu)}
                    className="p-1 hover:bg-gray-100 rounded-full transition"
                >
                     <img 
                src={filter} 
                className="w-4 h-4 text-gray-400" 
                />
                </button>

                {/* Filter Dropdown Menu */}
                {showFilterMenu && (
                    <div className="absolute right-0 top-full mt-3 w-56 bg-white rounded-xl shadow-lg border border-gray-200 z-20">
                    <div className="p-2">
                        <div className="text-xs font-medium text-gray-500 uppercase mb-2 px-2">
                        Filter Menu List
                        </div>

                        <button
                        onClick={() => handleFilterSelect(1)}
                        className={`w-full flex items-center px-3 py-2 text-sm hover:bg-gray-50 rounded ${
                            selectedFilter === 1 ? 'bg-gray-50' : ''
                        }`}
                        >
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-2" />
                        <span>1 star rating</span>
                        </button>

                        <button
                        onClick={() => handleFilterSelect(2)}
                        className={`w-full flex items-center px-3 py-2 text-sm hover:bg-gray-50 rounded ${
                            selectedFilter === 2 ? 'bg-gray-50' : ''
                        }`}
                        >
                        {[...Array(2)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        ))}
                        <span className="ml-1">2 stars ratings</span>
                        </button>

                        <button
                        onClick={() => handleFilterSelect(4)}
                        className={`w-full flex items-center px-3 py-2 text-sm hover:bg-gray-50 rounded ${
                            selectedFilter === 4 ? 'bg-gray-50' : ''
                        }`}
                        >
                        {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        ))}
                        <span className="ml-1">4 stars ratings</span>
                        </button>

                        <button
                        onClick={() => handleFilterSelect(5)}
                        className={`w-full flex items-center px-3 py-2 text-sm hover:bg-gray-50 rounded ${
                            selectedFilter === 5 ? 'bg-gray-50' : ''
                        }`}
                        >
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        ))}
                        <span className="ml-1">5 stars ratings</span>
                        </button>
                    </div>
                    </div>
                )}
                </div>
            </div>

            {/* Export Button */}
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition">
                Export
            </button>
            </div>

            
          </div>

          {/* Reviews Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Property Photo & Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Review
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredReviews.map((review) => (
                  <tr key={review.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded overflow-hidden flex-shrink-0">
                          <img 
                            src={review.propertyPhoto} 
                            alt={review.propertyName}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-sm text-gray-900">{review.propertyName}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{review.address}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{review.date}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm text-gray-900">{review.rating}/5</span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="max-w-xs">
                        {renderStars(review.rating)}
                        <p className="text-sm text-gray-600 mt-1">{review.reviewText}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="relative">
                        <button 
                          onClick={() => setOpenActionMenuId(openActionMenuId === review.id ? null : review.id)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <MoreVertical className="w-4 h-4 text-gray-600" />
                        </button>
                        
                        {/* Action Dropdown Menu */}
                        {openActionMenuId === review.id && (
                          <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                            <div className="p-2">
                              <div className="text-xs font-medium text-gray-500 uppercase mb-2 px-2">
                                Review Action
                              </div>
                              
                              <button
                                onClick={() => handleViewReview(review.id)}
                                className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                              >
                                <FileText className="w-4 h-4 mr-2" />
                                View Review
                              </button>
                              
                              <button
                                onClick={() => handleReportReview(review.id)}
                                className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                              >
                                <AlertCircle className="w-4 h-4 mr-2" />
                                Report Review
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentReviewPage;