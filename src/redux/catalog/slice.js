import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getCatalog, getItemById } from "./thunks";

const initialState = {
  tems: [],
  total: 0,
  page: 1,
  selectedItem: null,
  loading: false,
  error: null,
};
const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    resetCatalog: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCatalog.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getCatalog.fulfilled, (state, action) => {
        state.loading = false;
        const { items, total, page } = action.payload;
        state.items = page === 1 ? items : [...state.items, ...items];
        state.total = total;
        state.page = page;
      })
      .addCase(getCatalog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getItemById.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(getItemById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedItem = action.payload;
      })
      .addCase(getItemById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectPage = (state) => state.catalog.page;

export const selectCatalog = (state) => state.catalog.items;
export const selectLoading = (state) => state.catalog.loading;
export const selectError = (state) => state.catalog.error;
export const selectTotal = (state) => state.catalog.total;
export const selectSelectedItem = (state) => state.catalog.selectedItem;
export const selectTotaPages = createSelector([selectTotal], (total) => {
  return Math.ceil(total / 4);
});
export const { resetCatalog } = catalogSlice.actions;
export const catalogReduser = catalogSlice.reducer;