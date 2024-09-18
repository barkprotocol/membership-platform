import React from "react";

interface CNFTCardProps {
  name: string;
  description: string;
  features: string[];
  price: number;
  onClaim: () => void;
  image: string;
  rates?: { // Make rates optional
    rateSOLUSD?: number;
    rateSOLEUR?: number;
    rateBARKUSD?: number;
    rateBARKEUR?: number;
  };
}

const CNFTCard: React.FC<CNFTCardProps> = ({
  name,
  description,
  features,
  price,
  onClaim,
  image,
  rates = {} // Default to an empty object if not provided
}) => {
  // Use optional chaining and nullish coalescing to handle potentially undefined values
  const solUsdPrice = rates.rateSOLUSD?.toFixed(2) ?? 'N/A';
  const solEurPrice = rates.rateSOLEUR?.toFixed(2) ?? 'N/A';
  const barkUsdPrice = rates.rateBARKUSD?.toFixed(2) ?? 'N/A';
  const barkEurPrice = rates.rateBARKEUR?.toFixed(2) ?? 'N/A';

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">{name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      <ul className="mt-4">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300">
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <p className="text-lg font-medium text-gray-900 dark:text-white">
          Price: ${price.toFixed(2)}
        </p>
        <div className="mt-2">
          <p>Current SOL Price: ${solUsdPrice} USD / €{solEurPrice} EUR per SOL</p>
          <p>BARK Price: ${barkUsdPrice} USD / €{barkEurPrice} EUR per BARK</p>
        </div>
        <button
          onClick={onClaim}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Claim
        </button>
      </div>
    </div>
  );
};

export default CNFTCard;
