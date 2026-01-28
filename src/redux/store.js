import { configureStore } from "@reduxjs/toolkit";
import { catalogReduser } from "./catalog/slice";

export const store = configureStore({
  reducer: {
    catalog: catalogReduser,
  },
});
