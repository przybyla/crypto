export interface ICoinDetails {
  id: string;
  symbol: string;
  name: string;
  description: string;
  market_cap_rank: string;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  market_data: {
    current_price: { usd: number };
    market_cap: { usd: number };
    fully_diluted_valuation: { usd: number };
    high_24h: { usd: number };
    low_24h: { usd: number };
  };
}
