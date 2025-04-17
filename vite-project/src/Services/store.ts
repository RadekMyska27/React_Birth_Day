import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./api.ts";
import globalReducer from "./appSlice.ts";

export const store = configureStore({
  reducer: {
    appState: globalReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type
export type AppDispatch = typeof store.dispatch;
