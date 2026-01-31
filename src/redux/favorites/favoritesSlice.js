import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      const exists = state.ids.includes(id);

      state.ids = exists
        ? state.ids.filter((x) => x !== id)
        : [...state.ids, id];
    },
  },
});
export const selectIsFavorite = (id) => (state) =>
  state.favorites.ids.includes(id);

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
