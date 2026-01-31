import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const LIMIT = 4;
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

const buildParams = (page, filters) => {
  const params = { page, limit: LIMIT };

  if (filters.location.trim()) {
    params.location = filters.location.trim();
  }

  if (filters.transmission) {
    params.transmission = filters.transmission; // "automatic"
  }
  if (filters.form) {
    params.form = filters.form;
  }

  Object.entries(filters.equipment).forEach(([key, value]) => {
    if (value) params[key] = true;
  });

  return params;
};

export const getCatalog = createAsyncThunk(
  "catalog/get",
  async ({ page = 1 } = {}, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const filters = state.filters;
      const res = await axios.get("/campers", {
        params: buildParams(page, filters),
      });
      const { total, items } = res.data;
      return { total, items, page };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const getItemById = createAsyncThunk(
  "catalog/getById",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/campers/${id}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
