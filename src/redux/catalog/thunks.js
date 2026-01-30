import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const LIMIT = 4;
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const getCatalog = createAsyncThunk(
  "catalog/get",
  async (page = 1, thunkAPI) => {
    try {
      const res = await axios.get("/campers", {
        params: {
          page,
          limit: LIMIT,
        },
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
