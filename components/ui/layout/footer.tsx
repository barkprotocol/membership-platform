"use client";

import React from 'react';
import { FaTwitter, FaDiscord, FaGithub, FaMedium } from 'react-icons/fa';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 border-t border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="flex flex-col items-center justify-between space-y-8 sm:space-y-0 sm:flex-row sm:justify-between">
          {/* Navigation Links */}
          <nav className="flex flex-col items-center space-y-4 sm:space-y-0 sm:space-x-8 sm:flex-row">
            <Link href="/privacy-policy" className="text-gray-300 hover:text-gray-100 transition duration-300 ease-in-out text-base sm:text-lg">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-300 hover:text-gray-100 transition duration-300 ease-in-out text-base sm:text-lg">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-gray-100 transition duration-300 ease-in-out text-base sm:text-lg">
              Contact Us
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4 sm:space-x-6">
            <a href="https://twitter.com/bark_protocol" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 hover:text-gray-100 transition duration-300 ease-in-out" />
            </a>
            <a href="https://discord.gg/bark_protocol" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <FaDiscord className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 hover:text-gray-100 transition duration-300 ease-in-out" />
            </a>
            <a href="https://github.com/barkprotocol" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <FaGithub className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 hover:text-gray-100 transition duration-300 ease-in-out" />
            </a>
            <a href="https://www.medium.com/company/@barkprotocol" target="_blank" rel="noopener noreferrer" aria-label="Medium">
              <FaMedium className="h-6 w-6 sm:h-8 sm:w-8 text-gray-400 hover:text-gray-100 transition duration-300 ease-in-out" />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-6 text-center">
          <p className="text-sm sm:text-base text-gray-400">
            &copy; {new Date().getFullYear()} BARK Protocol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
