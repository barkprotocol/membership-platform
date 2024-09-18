// components/ui/club-card.tsx
import * as React from "react";

interface ClubCardProps {
  name: string;
  description: string;
  benefits: string[];
  image: string;
  onJoin: () => void;
}

const ClubCard: React.FC<ClubCardProps> = ({
  name,
  description,
  benefits,
  image,
  onJoin,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{description}</p>
        <ul className="mt-4 space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-gray-700 dark:text-gray-400">- {benefit}</li>
          ))}
        </ul>
        <button
          onClick={onJoin}
          className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-green-500 dark:hover:bg-orange-600"
        >
          Join Club
        </button>
      </div>
    </div>
  );
};

export default ClubCard;
