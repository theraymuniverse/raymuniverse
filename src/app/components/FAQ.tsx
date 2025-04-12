"use client"
import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    question: "What services does your agency offer?",
    answer: "We specialize in end-to-end product development including UI/UX design, branding, and full-stack development tailored for startups and growing businesses."
  },
  {
    question: "How long does a typical project take?",
    answer: "MVP development typically takes 2-4 weeks. Complex projects may require 8-12 weeks. We prioritize rapid delivery without compromising quality."
  },
  {
    question: "Do you offer custom pricing?",
    answer: "Yes, we provide flexible pricing models to match your project scope and budget. Book a consultation to discuss your specific requirements."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Absolutely. We offer tiered support packages to keep your digital products secure, updated, and performing optimally post-launch."
  },
  {
    question: "Can you work with clients remotely?",
    answer: "We're a fully remote team with global clients. Our processes are optimized for seamless remote collaboration across timezones."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-black text-white" id="faqs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with full-width impact */}
        <div className="w-full border-t border-b border-gray-800 py-16 mb-16">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              FAQ
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Common questions about our process and services
            </p>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="group">
              <button
                className={`flex justify-between items-center w-full text-left p-6 rounded-lg transition-all duration-300 ${
                  openIndex === index 
                    ? 'bg-gray-900 border border-gray-800' 
                    : 'bg-gray-900/50 hover:bg-gray-900 border border-gray-800/50 hover:border-gray-700'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg md:text-xl font-medium pr-4">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 p-1 rounded-full transition-colors ${
                  openIndex === index 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-400 group-hover:bg-gray-700'
                }`}>
                  {openIndex === index ? <FiMinus size={20} /> : <FiPlus size={20} />}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-900/80 rounded-b-lg border-l border-r border-b border-gray-800 animate-fadeIn">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}