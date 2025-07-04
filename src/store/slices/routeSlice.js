// src/redux/slices/routeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/utils/api";

// Thunk to fetch routes
export const fetchRoutes = createAsyncThunk(
  "route/fetchRoutes",
  async (coordinates, { rejectWithValue }) => {
    try {
      const {data} = await api("get-route", { coordinates }, "POST");
      return {data, coordinates}; // Assuming response is JSON
    } catch (error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
);

// Slice definition
const routeSlice = createSlice({
  name: "route",
  initialState: {
    status: "idle",     // "idle" | "loading" | "succeeded" | "failed"
    data: null,
    coordinates: null,
    error: null,
  },
  reducers: {
    clearRoute: (state) => {
      state.status = "idle";
      state.data = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoutes.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchRoutes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.coordinates = action.payload.coordinates
      })
      .addCase(fetchRoutes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Something went wrong";
      });
  },
});

// Selector
export const selectRoute = (state) => state.route.data;
export const selectStatus = (state) => state.route.status;
export const selectCoordinates = (state) => state.route.coordinates;

// Exports
export const { clearRoute } = routeSlice.actions;
export default routeSlice.reducer;
