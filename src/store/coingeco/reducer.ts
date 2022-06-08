import { createReducer } from "@reduxjs/toolkit";
import { ICoin } from "../../interfaces/Coin";
import { ICoinDetails } from "../../interfaces/CoinDetails";
import { ActionStatus } from "../../interfaces/ActionStatus";
import {
  getCoinDetails,
  getCoins,
  getCoinMarketChart,
  clearCoinMarketChart,
  clearCoinDetails,
} from "./actions";
import { ICoinMarketChart } from "../../interfaces/MarketChart";

interface InitState {
  coins: ICoin[];
  status: ActionStatus;
  details: ICoinDetails | null;
  chart: ICoinMarketChart | null;
}
const initState: InitState = {
  coins: [],
  status: "IDLE",
  details: null,
  chart: null,
};
export const coingeco = createReducer(initState, (builder) =>
  builder
    .addCase(getCoins.fulfilled, (state, { payload }) => {
      state.coins = payload.data;
    })
    .addCase(getCoinDetails.fulfilled, (state, { payload }) => {
      state.details = payload.data;
    })
    .addCase(getCoinMarketChart.fulfilled, (state, { payload }) => {
      state.chart = payload.data;
    })
    .addCase(clearCoinMarketChart, (state) => {
      state.chart = initState.chart;
    })
    .addCase(clearCoinDetails, (state) => {
      state.details = initState.details;
    })
    .addMatcher(
      (action) => action.type.endsWith("/pending"),
      (state) => {
        state.status = "PENDING";
      }
    )
    .addMatcher(
      (action) => action.type.endsWith("/rejected"),
      (state) => {
        state.status = "REJECTED";
      }
    )
    .addMatcher(
      (action) => action.type.endsWith("/fulfilled"),
      (state) => {
        state.status = "FULFILLED";
      }
    )
);
