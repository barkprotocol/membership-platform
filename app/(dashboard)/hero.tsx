"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonAction: () => void;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonLabel, buttonAction }) => {
  return (
    <section className="relative bg-gray-900 text-white py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://ucarecdn.com/0c2a1b21-f836-4343-9d35-19386c7f7f4d/hero-background.jpg" // Update this URL as needed
          alt="Hero Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-xl sm:text-2xl leading-relaxed">
          {subtitle}
        </p>
        <Button
          onClick={buttonAction}
          variant="primary"
          className="mt-8 bg-sand-500 text-white hover:bg-sand-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sand-400 transition ease-in-out duration-300"
        >
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
};
