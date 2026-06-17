import { Copy, Download, Share2, X as CloseIcon } from 'lucide-react';

interface PaymentInvoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: 'Pending' | 'Completed';
}

const PaymentInvoiceModal = ({ isOpen, onClose, status }: PaymentInvoiceModalProps) => {
  if (!isOpen) return null;

  const handleCopyTransactionNumber = () => {
    navigator.clipboard.writeText('#456789356');
  };

  const handleDownloadReceipt = () => {
    console.log('Downloading receipt...');
  };

  const handleShareReceipt = () => {
    console.log('Sharing receipt...');
  };

  const handleReportIssue = () => {
    console.log('Reporting issue...');
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header with Email and Status */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">F</span>
              </div>
              <span className="font-medium text-gray-900">Kikikarisma@email.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-3 py-1 rounded text-xs font-medium ${getStatusStyles(status)}`}>
                {status}
              </span>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <CloseIcon className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Date */}
          <div className="mb-6">
            <span className="text-sm text-gray-600">Date: Sep 9, 2024 16:30:16</span>
          </div>

          {/* Payment Details Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b pb-2">Payment Details</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Sender's Name</span>
                <span className="font-medium text-gray-900">Isa Ibrahim Mathew</span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-gray-600">Method</span>
                <span className="font-medium text-gray-900">*******4307</span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-gray-600">Card Type</span>
                <span className="font-medium text-gray-900">Mastercard</span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-gray-600">House Rent Amount</span>
                <span className="font-medium text-gray-900">$30,000</span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-gray-600">Commission(2%)</span>
                <span className="font-medium text-gray-900">$600</span>
              </div>

              <div className="flex justify-between py-2">
                <span className="text-gray-600">VAT(5%)</span>
                <span className="font-medium text-gray-900">$1,500</span>
              </div>

              <div className="flex justify-between py-2 border-t pt-3">
                <span className="text-gray-600 font-medium">Total Amount Paid</span>
                <span className="font-semibold text-gray-900 text-lg">$32,100</span>
              </div>
            </div>
          </div>

          {/* Transaction Number with Copy */}
          <div className="mb-6">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Transaction number: #456789356</span>
              <button
                onClick={handleCopyTransactionNumber}
                className="p-1 hover:bg-gray-100 rounded text-gray-500 hover:text-gray-700"
                title="Copy transaction number"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Report Issue Button */}
          <div className="mb-6">
            <button
              onClick={handleReportIssue}
              className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 text-sm font-medium"
            >
              <CloseIcon className="w-4 h-4" />
              <span>Report an Issue</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleDownloadReceipt}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Download Receipt</span>
            </button>
            <button
              onClick={handleShareReceipt}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span className="text-sm font-medium">Share Receipt</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentInvoiceModal;