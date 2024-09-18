"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Features from '@/components/ui/features';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: "url('https://ucarecdn.com/93413ee3-c509-497d-8f55-f9fa4589e6de/barkmascottrasparentbg.png')" }}>
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      
      {/* Content Section */}
      <div className="relative py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Welcome to <span className="text-sand">BARK Club</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300">
              Join our exclusive community and unlock access to premium NFT collections, participate in exciting airdrops, and engage with like-minded enthusiasts. At BARK Protocol, we’re committed to delivering exceptional experiences and rewards.
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                href="#cnft-cards"
                className="bg-sand text-white hover:bg-sand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sand transition ease-in-out duration-300 px-6 py-3 text-base sm:text-lg flex items-center"
              >
                Discover More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Cards Section */}
      <Features />
    </section>
  );
};

export default Hero;
