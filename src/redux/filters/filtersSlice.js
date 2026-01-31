import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "",
  transmission: "",
  equipment: {
    AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setForm(state, action) {
      state.form = action.payload;
    },
    setTransmission(state, action) {
      state.transmission = action.payload;
    },
    toggleEquipment(state, action) {
      const key = action.payload;
      state.equipment[key] = !state.equipment[key];
    },
    resetFilters: () => initialState,
  },
});

export const {
  setLocation,
  setForm,
  setTransmission,
  toggleEquipment,
  resetFilters,
} = filtersSlice.actions;
export const selectFilters = (state) => state.filters;
export const filtersReducer = filtersSlice.reducer;
