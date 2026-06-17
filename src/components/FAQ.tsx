import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([1]); // Second item expanded by default

  const faqData = [
    {
      id: 0,
      question: "How do I search for rental properties on your website?",
      answer: ""
    },
    {
      id: 1,
      question: "What documents do I need to rent a property?",
      answer: "Typically, you'll need ID proof, income proof, and references. Requirements may vary by landlord."
    },
    {
      id: 2,
      question: "Are utilities included in the rent?",
      answer: ""
    },
    {
      id: 3,
      question: "Can I negotiate the rent?",
      answer: ""
    },
    {
      id: 4,
      question: "What happens if I need to break my lease early?",
      answer: ""
    },
    // Duplicate for second column
    {
      id: 5,
      question: "How do I search for rental properties on your website?",
      answer: ""
    },
    {
      id: 6,
      question: "What documents do I need to rent a property?",
      answer: "Typically, you'll need ID proof, income proof, and references. Requirements may vary by landlord."
    },
    {
      id: 7,
      question: "Are utilities included in the rent?",
      answer: ""
    },
    {
      id: 8,
      question: "Can I negotiate the rent?",
      answer: ""
    },
    {
      id: 9,
      question: "What happens if I need to break my lease early?",
      answer: ""
    }
  ];

  const toggleItem = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const FAQItem = ({ faq, isExpanded }: { faq: typeof faqData[0], isExpanded: boolean }) => (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => toggleItem(faq.id)}
        className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-gray-800 font-medium text-base pr-4 leading-relaxed">
          {faq.question}
        </h3>
        <div className="flex-shrink-0">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400" />
          )}
        </div>
      </button>
      
      {isExpanded && faq.answer && (
        <div className="pb-6 -mt-2">
          <p className="text-gray-600 text-sm leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );

  // Split FAQ data into two columns
  const leftColumnFAQs = faqData.slice(0, 5);
  const rightColumnFAQs = faqData.slice(5, 10);

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Content */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Column */}
            <div className="p-8 lg:pr-4">
              <div className="space-y-0">
                {leftColumnFAQs.map((faq) => (
                  <FAQItem
                    key={faq.id}
                    faq={faq}
                    isExpanded={expandedItems.includes(faq.id)}
                  />
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gray-100 transform -translate-x-1/2"></div>

            {/* Right Column */}
            <div className="p-8 lg:pl-4 border-t lg:border-t-0 lg:border-l border-gray-100">
              <div className="space-y-0">
                {rightColumnFAQs.map((faq) => (
                  <FAQItem
                    key={faq.id}
                    faq={faq}
                    isExpanded={expandedItems.includes(faq.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <button className="px-8 py-3 text-gray-700 border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors font-medium">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;