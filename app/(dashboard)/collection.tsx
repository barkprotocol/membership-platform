"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Hero and Footer Components
const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-gray-900 text-white py-16"
      style={{
        backgroundImage: `url('https://ucarecdn.com/93413ee3-c509-497d-8f55-f9fa4589e6de/barkmascottrasparentbg.png')`, // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional: Add a dark overlay */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Discover Exclusive CNFTs
          </h1>
          <p className="mt-4 text-xl">
            Explore our curated collection and claim your unique digital assets today.
          </p>
          <Button
            variant="default"
            className="mt-6 bg-gray-800 hover:bg-gray-700 text-white"
            onClick={() => window.scrollTo({ top: document.getElementById("cnft-cards")?.offsetTop ?? 0, behavior: "smooth" })}
          >
            Explore Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} BARK Protocol. All rights reserved.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 justify-center md:justify-start">
              <li>
                <a href="/about" className="hover:underline">About</a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">Contact</a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

// CNFTCard Component
const USDC_RATE = 1.00; // Example rate, you can fetch this dynamically

interface CNFTCardProps {
  name: string;
  description: string;
  features: string[];
  price: number; // Price in USDC
  onClaim: () => void;
  image: string;
}

const CNFTCard: React.FC<CNFTCardProps> = ({ name, description, features, price, onClaim, image }) => {
  return (
    <Card className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <Image src={image} alt={name} width={500} height={300} className="object-cover w-full h-48" />
      <CardHeader className="p-4">
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{name}</CardTitle>
        <CardDescription className="text-gray-700 dark:text-gray-300 mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-4">
          <div className="text-lg font-semibold text-gray-900 dark:text-white">Price: ${price.toFixed(2)} USDC</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Rate: ${USDC_RATE.toFixed(2)} per USDC</div>
        </div>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="mr-2 text-green-500">&#10003;</span> {feature}
            </li>
          ))}
        </ul>
        <Button
          variant="default"
          className="mt-4 bg-gray-900 hover:bg-gray-700 text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          onClick={onClaim}
        >
          Claim Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </CardContent>
    </Card>
  );
};

// HomePage Component
export default function HomePage() {
  const handleClaim = async (name: string) => {
    try {
      const response = await fetch(`/api/claim-cnft?name=${name}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}` // Replace with your token or authentication method
        },
        body: JSON.stringify({ cnftName: name }),
      });

      if (!response.ok) {
        throw new Error("Failed to claim CNFT");
      }

      const data = await response.json();
      alert(`Successfully claimed ${name} CNFT!`);
      console.log(data);

    } catch (error) {
      console.error("Error claiming CNFT:", error);
      alert("An error occurred while claiming your CNFT. Please try again later.");
    }
  };

  return (
    <main className="bg-white dark:bg-gray-900">
      <Hero />

      {/* CNFT Cards Section */}
      <section id="cnft-cards" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Explore Our CNFT Collection
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <CNFTCard
              name="Underdogs"
              description="A special collection celebrating the spirit of community and resilience. Unlock exclusive features and rewards."
              features={['Access to Marketplace', 'Members Badge', 'Basic Features']}
              price={50}
              onClaim={() => handleClaim('Underdogs')}
              image="https://ucarecdn.com/31907163-7e33-4844-9515-d0a0cea6e2ef/donation_sol.png" // Replace with actual image URL
            />
            <CNFTCard
              name="The Peaky Barkers"
              description="Join the elite Peaky Barkers club. Enjoy standard support, monthly updates, and access to exclusive events."
              features={['All Basic Features', 'Standard Support', 'Monthly Updates']}
              price={75}
              onClaim={() => handleClaim('The Peaky Barkers')}
              image="https://ucarecdn.com/31907163-7e33-4844-9515-d0a0cea6e2ef/donation_sol.png" // Replace with actual image URL
            />
            <CNFTCard
              name="Sparky Bros"
              description="Be part of the Sparky Bros. Enjoy exclusive NFT drops, priority support, and all standard features."
              features={['All Standard Features', 'Priority Support', 'Exclusive NFT Drops']}
              price={100}
              onClaim={() => handleClaim('Sparky Bros')}
              image="https://ucarecdn.com/31907163-7e33-4844-9515-d0a0cea6e2ef/donation_sol.png" // Replace with actual image URL
            />
            <CNFTCard
              name="Clan"
              description="Join the Clan for dedicated support and early access to new features. Experience top-tier community benefits."
              features={['All Premium Features', 'Dedicated Support', 'Early Access to New Features']}
              price={125}
              onClaim={() => handleClaim('Clan')}
              image="https://ucarecdn.com/31907163-7e33-4844-9515-d0a0cea6e2ef/donation_sol.png" // Replace with actual image URL
            />
            <CNFTCard
              name="Legends"
              description="Become a Legend with ultimate features and VIP access. Enjoy personalized support and special rewards."
              features={['Ultimate Features', 'Exclusive Access', 'Personalized Support']}
              price={150}
              onClaim={() => handleClaim('Legends')}
              image="https://ucarecdn.com/31907163-7e33-4844-9515-d0a0cea6e2ef/donation_sol.png" // Replace with actual image URL
            />
            <CNFTCard
              name="Elite"
              description="The Elite CNFT offers top-tier features and VIP access. Receive special rewards and enjoy unparalleled benefits."
              features={['Top-Tier Features', 'VIP Access', 'Special Rewards']}
              price={200}
              onClaim={() => handleClaim('Elite')}
              image="https://ucarecdn.com/31907163-7e33-4844-9515-d0a0cea6e2ef/donation_sol.png" // Replace with actual image URL
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
