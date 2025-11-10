import { createSlice } from "@reduxjs/toolkit";
import danhSachGhe from "./danhSachGhe.json";

const initialState = {
  seatsList: danhSachGhe,
  arraySeats: [],
};

const seatsBookingSlice = createSlice({
  name: "seatsBooking",
  initialState,
  reducers: {},
});

export default seatsBookingSlice.reducer;
