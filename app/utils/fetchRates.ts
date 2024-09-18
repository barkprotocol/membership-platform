const COINGECKO_API_URL = process.env.NEXT_PUBLIC_COINGECKO_API_URL || 'https://api.coingecko.com/api/v3/simple/price';

interface RatesResponse {
  solana?: {
    usd?: number;
    eur?: number;
  };
  bark?: {
    usd?: number;
    eur?: number;
  };
}

interface Rates {
  rateSOLUSD: number;
  rateSOLEUR: number;
  rateBARKUSD: number;
  rateBARKEUR: number;
}

export const fetchRates = async (): Promise<Rates> => {
  try {
    const response = await fetch(`${COINGECKO_API_URL}?ids=solana,bark&vs_currencies=usd,eur`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: RatesResponse = await response.json();
    
    return {
      rateSOLUSD: data.solana?.usd ?? 0,
      rateSOLEUR: data.solana?.eur ?? 0,
      rateBARKUSD: data.bark?.usd ?? 0,
      rateBARKEUR: data.bark?.eur ?? 0,
    };
  } catch (error) {
    console.error('Error fetching rates:', error);
    throw new Error('Failed to fetch rates');
  }
};
