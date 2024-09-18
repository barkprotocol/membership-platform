import React from 'react';
import CNFTCard from './cnft-card';

const CNFTCardsList: React.FC = () => {
  // Define card data here
  const cardData = [
    {
      name: 'Sparky the Fearless',
      description: 'A bold NFT that embodies strength and courage.',
      features: ['Limited Edition', 'Exclusive Airdrop Access', 'Royalty Rewards'],
      price: 2.5,
      image: '/path/to/sparky.jpg',
      onClaim: () => alert('Claim Sparky NFT')
    },
    {
      name: 'Trixie the Clever',
      description: 'A cunning NFT that symbolizes intelligence and creativity.',
      features: ['AI Driven Insights', 'Governance Participation', 'Special Access'],
      price: 3.0,
      image: '/path/to/trixie.jpg',
      onClaim: () => alert('Claim Trixie NFT')
    },
    {
      name: 'Bruno the Brave',
      description: 'An NFT representing resilience and bravery.',
      features: ['Dynamic Staking Rewards', 'Charity Support', 'Royalty Payments'],
      price: 4.0,
      image: '/path/to/bruno.jpg',
      onClaim: () => alert('Claim Bruno NFT')
    },
    // Add more CNFT card data here...
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cardData.map((card, index) => (
        <CNFTCard
          key={index}
          name={card.name}
          description={card.description}
          features={card.features}
          price={card.price}
          image={card.image}
          onClaim={card.onClaim}
        />
      ))}
    </div>
  );
};

export default CNFTCardsList;
