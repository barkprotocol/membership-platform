"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What is the Underdogs Members Club?',
    answer: 'The Underdogs Members Club is an exclusive community of NFT holders who can stake their NFTs to earn rewards, participate in governance, and trade NFTs in a decentralized marketplace.',
  },
  {
    question: 'How do I join the Underdogs Members Club?',
    answer: 'To join, simply mint or purchase one of our exclusive Underdogs NFTs. Once you have an NFT, you’ll gain access to the full range of benefits including staking, voting, and marketplace features.',
  },
  {
    question: 'What rewards can I earn by staking my NFTs?',
    answer: 'By staking your NFTs, you can earn rewards such as governance tokens, special NFT drops, and other exclusive perks. The rewards may vary based on your membership tier.',
  },
  {
    question: 'How does the decentralized marketplace work?',
    answer: 'Our marketplace allows members to buy, sell, and trade Underdogs NFTs. It is fully decentralized and supports royalty payments, ensuring creators are rewarded with each resale.',
  },
  {
    question: 'What membership tiers are available?',
    answer: 'We offer four membership tiers: Bronze, Silver, Gold, and Platinum. Each tier offers different benefits and rewards. You can select your tier by choosing an NFT from our collection.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-gray-100 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg border border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 text-left text-lg font-medium text-gray-900 focus:outline-none"
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-700 border-t border-gray-200">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
