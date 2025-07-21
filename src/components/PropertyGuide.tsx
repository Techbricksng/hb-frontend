
import laptopImage from '../assets/laptop-mockup.png'; 
import laptopImageOne from '../assets/laptop-mockup-1.png'; 

const PropertyGuide = () => {
  const faqData = [
    {
      question: "What documents do I need to rent a property?",
      answer: "Typically, you'll need ID proof, income proof, and references. Requirements may vary by landlord. We Typically, you'll need ID proof, income proof, and references. Requirements may vary by landlord. Typically, you'll need ID proof, income proof, and references. Requirements may vary by landlord. Typically, you'll need ID proof, income proof, and references. Requirements may vary by landlord."
    },
    {
      question: "How do I know if a property is right for me?",
      answer: "Consider location, budget, amenities, and your long-term needs. Our agents can help you evaluate properties based on your specific requirements."
    },
    {
      question: "What's the typical rental process timeline?",
      answer: "From search to move-in usually takes 2-4 weeks, depending on availability and paperwork processing times."
    },
    {
      question: "Are utilities included in the rent?",
      answer: "This varies by property. Some include basic utilities while others don't. Always check the lease agreement carefully."
    },
    {
      question: "How does HouseBank ensure property quality?",
      answer: "We personally vet all listings and maintain strict quality standards. Our team conducts regular property inspections."
    }
  ];

  const FaqItem = ({ question, answer, index }: { 
    question: string; 
    answer: string; 
    index: number; 
  }) => (
    <div className="mb-6">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-700 flex items-center justify-center mt-0.5">
          <span className="text-white text-sm font-medium">{index + 1}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-gray-800 font-medium text-base leading-relaxed">
            {question}
          </h3>
          <div className="mt-2">
            <p className="text-gray-600 text-sm leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      {/* First Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Discover the easiest way to get a new property in Nigeria
              </h1>
            </div>

            {/* FAQ Items - All expanded by default */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* Right Content - Laptop Image */}
          <div className="relative h-full">
            <div className="w-full h-full min-h-[500px] bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl overflow-hidden">
              <img 
                src={laptopImage} 
                alt="Laptop Mockup" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Mirror Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Laptop Image */}
          <div className="relative lg:order-1 h-full">
          <div className="w-full h-full min-h-[500px] bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl overflow-hidden flex items-center justify-center p-4">
            <img 
                src={laptopImageOne} 
                alt="Laptop Mockup" 
                className="h-auto w-auto object-contain"
            />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our streamlined property acquisition process
              </h2>
            </div>

            {/* FAQ Items - All expanded by default */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FaqItem
                  key={`second-${index}`}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyGuide;