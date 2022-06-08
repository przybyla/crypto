import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { coingeco } from "./coingeco/reducer";

const rootReducer = combineReducers({ coingeco });

const initStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }),
  });
};

const store = initStore();

export default store;

export type RootState = ReturnType<typeof store.getState>;
