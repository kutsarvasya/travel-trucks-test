import { configureStore } from "@reduxjs/toolkit";
import { catalogReduser } from "./catalog/slice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import { favoritesReducer } from "./favorites/favoritesSlice";
import { filtersReducer } from "./filters/filtersSlice";

const persistConfig = {
  key: "favorites",
  storage,
};

const persistedFavoritesReducer = persistReducer(
  persistConfig,
  favoritesReducer,
);

export const store = configureStore({
  reducer: {
    catalog: catalogReduser,
    favorites: persistedFavoritesReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
