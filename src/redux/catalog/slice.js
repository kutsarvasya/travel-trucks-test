import { createSlice } from "@reduxjs/toolkit";
import { getCatalog } from "./thunks";

const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCatalog.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getCatalog.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getCatalog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectCatalog = (state) => state.catalog.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const catalogReduser = catalogSlice.reducer;
