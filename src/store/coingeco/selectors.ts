import { RootState } from "../reducers";

export const selectCoins = (state: RootState) => state.coingeco.coins;
export const selectCoinDetails = (state: RootState) => state.coingeco.details;
export const selectCoinMarketChart = (state: RootState) => state.coingeco.chart;
export const selectCoinCurrentPrice = (state: RootState) =>
  state.coingeco.details?.market_data.current_price.usd;
export const selectCoinValuation = (state: RootState) =>
  state.coingeco.details?.market_data.fully_diluted_valuation.usd;
export const selectCoin24High = (state: RootState) =>
  state.coingeco.details?.market_data.high_24h.usd;
export const selectCoin24Low = (state: RootState) =>
  state.coingeco.details?.market_data.low_24h.usd;
export const selectCoinMarketCap = (state: RootState) =>
  state.coingeco.details?.market_data.market_cap.usd;
