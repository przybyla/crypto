import { ICoin } from "../interfaces/Coin";
import { ICoinDetails } from "../interfaces/CoinDetails";
import { IListResponse } from "../interfaces/ListResponse";
import { IObjectResponse } from "../interfaces/ObjectResponse";
import { ICoinMarketChart } from "../interfaces/MarketChart";
import fetch from "../utils/fetch";

export const getCoinsRequest = (): Promise<IListResponse<ICoin>> =>
  fetch.get("coins/markets?vs_currency=usd");

export const getCoinDetailsRequest = (
  coinId: string
): Promise<IObjectResponse<ICoinDetails>> =>
  fetch.get(`/coins/${coinId}?localization=false`);

export const getCoinMarketChartRequest = (
  coinId: string,
  days: string
): Promise<IObjectResponse<ICoinMarketChart>> =>
  fetch.get(
    `/coins/${coinId}/market_chart?vs_currency=usd&days=${days}&interval=hourly`
  );
