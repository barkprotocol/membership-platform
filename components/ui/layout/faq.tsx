import * as React from "react";
import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is BARK Club?",
    answer: "BARK Club is a community-focused platform offering exclusive NFT collections, airdrops, and interactive features for our members.",
  },
  {
    question: "How can I claim a CNFT?",
    answer: "You can claim a CNFT by clicking the 'Claim' button on the CNFT card. Ensure you are logged in and have the necessary permissions.",
  },
  {
    question: "How do I contact support?",
    answer: "For any support queries, please visit our FAQ page.",
  },
  {
    question: "Where can I find more information?",
    answer: "For more information about our collections and features, check out our About Us page.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-white dark:bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border-t border-gray-300 dark:border-gray-600">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full py-4 px-6 text-left font-semibold text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors duration-300 ease-in-out"
              >
                <span className="text-lg">{item.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="py-4 px-6 text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
          <div className="mt-6 px-6 space-y-4">
            <p className="text-gray-600 dark:text-gray-300">
              For additional questions, please visit our <Link href="/pages/faq" className="text-orange-400 hover:text-orange-300 underline">FAQ page</Link>.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              For more information about our collections and features, check out our <Link href="/pages/about" className="text-orange-400 hover:text-orange-300 underline">About Us page</Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
