"use client";

import * as React from "react";
import Hero from "@/components/ui/layout/hero";
import Footer from "@/components/ui/layout/footer";
import CNFTCard from "@/components/ui/cnft-card";
import ClubCard from "@/components/ui/club-card"; 
import FAQSection from "@/components/ui/layout/faq";

const SOL_TO_USD_RATE = 1.5; // Example rate for USD
const SOL_TO_EUR_RATE = 1.4; // Example rate for EUR

const cnftData = [
  {
    name: "BARK",
    description: "Join the Underdogs Club and embody the spirit of resilience and camaraderie. As a member, you'll support charitable causes and gain access to exclusive features and rewards that highlight the essence of our mascot's valor and community support.",
    features: ['Access to Marketplace', 'Members Badge', 'Community Support Features'],
    price: 1.5,
    image: "https://ucarecdn.com/31907163-7e33-4844-9515-d0a0cea6e2ef/donation_sol.png"
  },
  {
    name: "Barker",
    description: "Become a member of the Peaky Barkers. Enjoy elite status with standard support, monthly updates, and exclusive access to events that support social good.",
    features: ['All Basic Features', 'Standard Support', 'Monthly Updates'],
    price: 1.5,
    image: "https://ucarecdn.com/31907163-7e33-4844-9515-d0a0cea6e2ef/donation_sol.png"
  },
  {
    name: "Sparky",
    description: "Join the Sparky Bros for priority support and access to exclusive NFT drops. Your participation aids charitable initiatives and enhances your club experience.",
    features: ['All Standard Features', 'Priority Support', 'Exclusive NFT Drops'],
    price: 1.5,
    image: "https://ucarecdn.com/31907163-7e33-4844-9515-d0a0cea6e2ef/donation_sol.png"
  },
  {
    name: "Bruno",
    description: "Be a part of the Bruno Clan and enjoy top-tier community benefits. Get early access to new features and dedicated support while supporting social causes.",
    features: ['All Premium Features', 'Dedicated Support', 'Early Access to New Features'],
    price: 1.5,
    image: "https://ucarecdn.com/31907163-7e33-4844-9515-d0a0cea6e2ef/donation_sol.png"
  },
  {
    name: "Trixie",
    description: "Become a Trixie Legend with ultimate features and VIP access. Enjoy personalized support, special rewards, and contribute to impactful charitable efforts.",
    features: ['Ultimate Features', 'Exclusive Access', 'Personalized Support'],
    price: 1.5,
    image: "https://ucarecdn.com/31907163-7e33-4844-9515-d0a0cea6e2ef/donation_sol.png"
  },
  {
    name: "Tommy",
    description: "Join the elite ranks with Tommy CNFTs. Receive top-tier benefits, VIP access, and special rewards while supporting meaningful social causes.",
    features: ['Top-Tier Features', 'VIP Access', 'Special Rewards'],
    price: 1.5,
    image: "https://ucarecdn.com/31907163-7e33-4844-9515-d0a0cea6e2ef/donation_sol.png"
  }
];

const clubData = [
  {
    name: "Sparky Bros",
    description: "Join the Sparky Bros to enjoy exclusive NFT drops, priority support, and all standard features.",
    benefits: ['Exclusive NFT Drops', 'Priority Support', 'All Standard Features'],
    image: "https://ucarecdn.com/737dd13d-78cf-4b60-9b64-d234db013beb/Sparkytoken.png",
    onJoin: () => alert('Joined Sparky Bros Club!')
  },
  {
    name: "The Peaky Barkers",
    description: "Become a Peaky Barker and enjoy standard support, monthly updates, and access to exclusive events.",
    benefits: ['Standard Support', 'Monthly Updates', 'Exclusive Events'],
    image: "https://ucarecdn.com/6fb2af1b-978f-4a8f-bd5c-b68db4458c9d/Barker.png",
    onJoin: () => alert('Joined The Peaky Barkers Club!')
  },
  {
    name: "Underdogs",
    description: "Join the Underdogs to access our community's exclusive events and rewards.",
    benefits: ['Event Access', 'Exclusive Rewards', 'Monthly Newsletters'],
    image: "https://ucarecdn.com/74392932-2ff5-4237-a1fa-e0fd15725ecc/bark.svg",
    onJoin: () => alert('Joined Underdogs Club!')
  }
];

const HomePage: React.FC = () => {
  const handleClaim = async (name: string) => {
    try {
      const response = await fetch(`/api/claim-cnft?name=${name}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN || ""}`,
        },
        body: JSON.stringify({ cnftName: name }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to claim CNFT: ${errorText}`);
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
      <Hero
        title="Welcome to BARK Club"
        subtitle="Explore exclusive NFT collections, participate in airdrops, and engage with our vibrant community."
        buttonLabel="Get Started"
        buttonAction={() => window.scrollTo({ top: document.getElementById('cnft-cards')?.offsetTop || 0, behavior: 'smooth' })}
      />

      <section id="cnft-cards" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Explore Our CNFT Collection
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {cnftData.map(cnft => (
              <CNFTCard
                key={cnft.name}
                name={cnft.name}
                description={cnft.description}
                features={cnft.features}
                price={cnft.price}
                onClaim={() => handleClaim(cnft.name)}
                image={cnft.image}
                alt={`Image of ${cnft.name}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="clubs" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Join Our Clubs
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {clubData.map(club => (
              <ClubCard
                key={club.name}
                name={club.name}
                description={club.description}
                benefits={club.benefits}
                image={club.image}
                onJoin={club.onJoin}
                alt={`Image of ${club.name}`}
              />
            ))}
          </div>
        </div>
      </section>

      <FAQSection />

      <Footer />
    </main>
  );
};

export default HomePage;
