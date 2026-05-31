import { useState } from 'react';
import { Smile, Paperclip, Camera } from 'lucide-react';
import CustomerHeader from './CustomerHeader';

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────
const REVIEWS = [
  { id: 1,  name: 'Wade Warren',      address: 'Gwarinpa Abuja', date: '21/01/2025', category: 'Customer', rating: 4, avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=64&q=70' },
  { id: 2,  name: 'Cameron William',  address: 'Gwarinpa Abuja', date: '21/01/2025', category: 'Agent',    rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&q=70' },
  { id: 3,  name: 'Esther Howard',    address: 'Gwarinpa Abuja', date: '21/01/2025', category: 'Agent',    rating: 4, avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=64&q=70' },
  { id: 4,  name: 'Brooklyn Simmons', address: 'Gwarinpa Abuja', date: '21/01/2025', category: 'Customer', rating: 4, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&q=70' },
  { id: 5,  name: 'Leslie Alexander', address: 'Gwarinpa Abuja', date: '21/01/2025', category: 'Customer', rating: 4, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&q=70' },
  { id: 6,  name: 'Leslie Alexander', address: 'Gwarinpa Abuja', date: '21/01/2025', category: 'Agent',    rating: 4, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&q=70' },
  { id: 7,  name: 'Leslie Alexander', address: 'Gwarinpa Abuja', date: '21/01/2025', category: 'Agent',    rating: 5, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&q=70' },
  { id: 8,  name: 'Leslie Alexander', address: 'Gwarinpa Abuja', date: '21/01/2025', category: 'Customer', rating: 4, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&q=70' },
  { id: 9,  name: 'Leslie Alexander', address: 'Gwarinpa Abuja', date: '21/01/2025', category: 'Agent',    rating: 4, avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&q=70' },
  { id: 10, name: 'Brooklyn Simmons', address: 'Gwarinpa Abuja', date: '21/01/2025', category: 'Agent',    rating: 4, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&q=70' },
];

const REVIEW_TEXT = 'i effortless got exactly what i wanted. Kudos to you';
const TOTAL_PAGES = 5;

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────
const StarRating = ({ rating, max = 5 }: { rating: number; max?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: max }).map((_, i) => (
      <svg
        key={i}
        className={`w-3.5 h-3.5 ${i < rating ? 'text-yellow-400' : 'text-gray-200'}`}
        fill="currentColor" viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
const AdminReviews = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [menuOpenId, setMenuOpenId] = useState<number | null>(null);

  // Modal states
  const [deleteTargetId, setDeleteTargetId] = useState<number | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);
  const [replyTargetId, setReplyTargetId] = useState<number | null>(null);
  const [replyMessage, setReplyMessage] = useState('');

  const replyTarget = REVIEWS.find(r => r.id === replyTargetId);

  const handleDeleteConfirm = () => {
    setShowDeleteConfirm(false);
    setShowDeleteSuccess(true);
    setTimeout(() => setShowDeleteSuccess(false), 2000);
  };

  const handleMenuAction = (action: 'reply' | 'delete', id: number) => {
    setMenuOpenId(null);
    if (action === 'reply') {
      setReplyTargetId(id);
    } else {
      setDeleteTargetId(id);
      setShowDeleteConfirm(true);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <CustomerHeader />

      <main className="flex-1 p-6 bg-gray-50 overflow-auto space-y-4">

        {/* ── Page header ── */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Review</h1>
            <p className="text-xs text-gray-400 mt-0.5">
              Total Reviews {'>'} 102
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white w-56">
              <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
              </svg>
              <input type="text" placeholder="Search here..." className="flex-1 text-sm text-gray-500 outline-none bg-transparent" />
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 010 2H4a1 1 0 01-1-1zm3 4h10M6 12h10m-7 4h4" />
              </svg>
            </div>

            {/* Export */}
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors">
              Export
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
            </button>

            {/* This Month */}
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 text-sm font-medium rounded-lg transition-colors">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              This Month
            </button>
          </div>
        </div>

        {/* ── Table ── */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 text-gray-500 text-xs font-medium bg-white">
                <th className="px-5 py-3 text-left">Registered Users</th>
                <th className="px-5 py-3 text-left">Address</th>
                <th className="px-5 py-3 text-left">Date</th>
                <th className="px-5 py-3 text-left">Categories</th>
                <th className="px-5 py-3 text-left">Rating</th>
                <th className="px-5 py-3 text-left">Review</th>
                <th className="px-5 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {REVIEWS.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  {/* User */}
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <img src={row.avatar} alt={row.name} className="w-9 h-9 rounded-full object-cover flex-shrink-0" />
                      <span className="font-medium text-gray-800 text-sm">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 text-gray-500 text-xs">{row.address}</td>
                  <td className="px-5 py-4 text-gray-500 text-xs">{row.date}</td>
                  <td className="px-5 py-4 text-gray-600 text-sm">{row.category}</td>
                  {/* Rating */}
                  <td className="px-5 py-4">
                    <div className="space-y-0.5">
                      <StarRating rating={row.rating} />
                      <span className="text-xs text-gray-400">{row.rating}/5</span>
                    </div>
                  </td>
                  {/* Review text */}
                  <td className="px-5 py-4 max-w-[180px]">
                    <div className="space-y-0.5">
                      <StarRating rating={row.rating} />
                      <p className="text-xs text-gray-500 leading-relaxed">{REVIEW_TEXT}</p>
                    </div>
                  </td>
                  {/* Action kebab */}
                  <td className="px-5 py-4 relative">
                    <button
                      onClick={() => setMenuOpenId(menuOpenId === row.id ? null : row.id)}
                      className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="19" r="1.5" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    {menuOpenId === row.id && (
                      <div className="absolute right-8 top-3 z-20 bg-white border border-gray-100 rounded-lg shadow-lg w-36 py-1">
                        <button
                          onClick={() => handleMenuAction('reply', row.id)}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          Reply
                        </button>
                        <div className="border-t border-gray-100" />
                        <button
                          onClick={() => handleMenuAction('delete', row.id)}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          Delete Review
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* ── Pagination ── */}
          <div className="flex items-center justify-center gap-1 px-5 py-4 border-t border-gray-100">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                  currentPage === i + 1
                    ? 'bg-green-700 text-white'
                    : 'border border-gray-200 text-gray-500 hover:bg-gray-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(TOTAL_PAGES, p + 1))}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </main>

      {/* ── Delete Confirm Modal ── */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
          <div className="bg-white rounded-2xl shadow-2xl w-[440px] p-8 flex flex-col items-center gap-5">
            <span className="text-5xl text-gray-500 font-bold">?</span>
            <p className="text-sm text-gray-500">Do you want to delete the review?</p>
            <div className="flex gap-3 w-full">
              <button
                onClick={handleDeleteConfirm}
                className="flex-1 py-3 bg-green-800 hover:bg-green-900 text-white text-sm font-medium rounded-lg transition-colors"
              >
                Confirm
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-3 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Delete Success Modal ── */}
      {showDeleteSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
          <div className="bg-white rounded-2xl shadow-2xl w-[440px] p-10 flex flex-col items-center gap-3">
            {/* Green check icon */}
            <div className="w-16 h-16 bg-gradient-to-b from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg mb-1">
              <svg className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-base font-bold text-gray-900">Successfully Deleted</p>
            <p className="text-sm text-gray-400">Review Successfully deleted</p>
          </div>
        </div>
      )}

      {/* ── Reply Modal ── */}
      {replyTargetId !== null && replyTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6">
          <div className="bg-white rounded-2xl shadow-2xl w-[480px] overflow-hidden">
            {/* Review card */}
            <div className="p-5 space-y-3">
              {/* User header */}
              <div className="flex items-center gap-2">
                <img src={replyTarget.avatar} alt={replyTarget.name} className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">{replyTarget.name}</p>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                    {replyTarget.category}
                  </span>
                </div>
              </div>

              {/* Date / time */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-700">Tuesday 12 Jan 2025</span>
                <span className="text-xs text-gray-400">15:20</span>
              </div>

              {/* Stars + review */}
              <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                <StarRating rating={replyTarget.rating} />
                <p className="text-xs text-gray-600">{REVIEW_TEXT}</p>
              </div>
            </div>

            {/* Message input */}
            <div className="px-5 pb-5">
              <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-3 bg-white">
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Smile className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                  placeholder="Message"
                  className="flex-1 text-sm text-gray-600 outline-none bg-transparent"
                />
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Paperclip className="w-5 h-5" />
                </button>
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Camera className="w-5 h-5" />
                </button>
                <button
                  onClick={() => { setReplyTargetId(null); setReplyMessage(''); }}
                  className="px-5 py-2 bg-green-700 hover:bg-green-800 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Reply
                </button>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={() => setReplyTargetId(null)}
              className="absolute top-4 right-4 p-1.5 hover:bg-gray-100 rounded-lg"
            >
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminReviews;
