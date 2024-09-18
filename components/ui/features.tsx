"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  backgroundImage: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, backgroundImage }) => {
  return (
    <Card
      className={cn(
        "relative bg-gray-800 text-white shadow-xl overflow-hidden rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl",
        "group"
      )}
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black opacity-50" /> {/* Darker overlay for better text contrast */}
      <CardHeader className="relative flex items-center space-x-4 p-6">
        <div className="flex-shrink-0 text-sand-500">
          {icon}
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl font-semibold text-white drop-shadow-lg">
            {title}
          </CardTitle>
          <CardDescription className="mt-1 text-sm text-gray-300 drop-shadow-md">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
};

const Features: React.FC = () => {
  return (
    <section className="bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">Our Features</h2>
          <p className="mt-4 text-lg text-gray-300">
            Discover the features that make BARK Club unique.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Exclusive Collections"
            description="Access to exclusive NFT collections available only to BARK Club members."
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Exclusive Collections"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2 2m0 0l2-2m-2 2V7a5 5 0 015-5h5a5 5 0 015 5v7l2-2m-2 2l-2 2m0 0v5a5 5 0 01-5 5H8a5 5 0 01-5-5v-5z"
                />
              </svg>
            }
            backgroundImage="https://www.flaticon.com/free-icon-font/followcollection_9291831?page=1&position=3&term=collection&origin=search&related_id=9291831"
          />
          <FeatureCard
            title="Airdrops"
            description="Participate in exclusive airdrops and receive rewards."
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Airdrops"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 13v-3a4 4 0 00-4-4H7a4 4 0 00-4 4v3m0 0v4a4 4 0 004 4h10a4 4 0 004-4v-4m-4 4V10m-4 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            }
            backgroundImage="https://www.flaticon.com/free-icon-font/humanitarian-mission_16769842?page=1&position=3&term=airdrop&origin=search&related_id=16769842"
          />
          <FeatureCard
            title="Community Engagement"
            description="Join a vibrant community and engage with fellow NFT enthusiasts."
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Community Engagement"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804a6 6 0 010-8.708m13.758 0a6 6 0 010 8.708m-7.578 3.164a6 6 0 01-3.16-6.508M17 8a6 6 0 01-7.078 7.904m-.963 3.717a6 6 0 012.434-7.489m4.907 2.283a6 6 0 01-2.236 1.73m-2.068-.604a6 6 0 01-2.468-3.091M12 4a6 6 0 016 6"
                />
              </svg>
            }
            backgroundImage="https://www.flaticon.com/free-icon-font/population-globe_17484846?page=1&position=13&term=community&origin=search&related_id=17484846"
          />
          <FeatureCard
            title="Exclusive Rewards"
            description="Earn rewards through various engagement opportunities and milestones."
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Exclusive Rewards"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 2a2 2 0 00-2 2v16a2 2 0 004 0V4a2 2 0 00-2-2zm0 18h-1a2 2 0 010-4h2a2 2 0 010 4h-1zm-4-6a1 1 0 010-2 1 1 0 010 2zm8-2a1 1 0 010-2 1 1 0 010 2z"
                />
              </svg>
            }
            backgroundImage="https://www.flaticon.com/free-icon-font/medal_12617004?page=1&position=18&term=rewards&origin=search&related_id=12617004"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
