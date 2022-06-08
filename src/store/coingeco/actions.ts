import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCoinsRequest,
  getCoinDetailsRequest,
  getCoinMarketChartRequest,
} from "../../api/coingeco";

export const getCoins = createAsyncThunk("coins/getCoins", () =>
  getCoinsRequest()
);
export const getCoinDetails = createAsyncThunk(
  "coins/getCoinDetails",
  (coinId: string) => getCoinDetailsRequest(coinId)
);
export const getCoinMarketChart = createAsyncThunk(
  "coins/getCoinMarketChart",
  ({ coinId, days }: { coinId: string; days: string }) =>
    getCoinMarketChartRequest(coinId, days)
);
export const clearCoinMarketChart = createAction("coins/clearCoinMarketChart");
export const clearCoinDetails = createAction("coins/clearCoinDetails");
