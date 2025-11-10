import { createSlice } from "@reduxjs/toolkit";
import danhSachGhe from "./danhSachGhe.json";

const initialState = {
  seatsList: danhSachGhe,
  arrayCart: [],
};

const seatsBookingSlice = createSlice({
  name: "seatsBooking",
  initialState,
  reducers: {
    setArraySeat: (state, action) => {
      const selectedSeat = action.payload;
      const index = state.arrayCart.findIndex(
        (seat) => seat.soGhe === selectedSeat.soGhe
      );

      if (index !== -1) {
        state.arrayCart.splice(index, 1);
      } else {
        state.arrayCart.push(selectedSeat);
      }
    },

    resetSeatsCart: (state) => {
      state.arrayCart = [];
    },
  },
});

export const { setArraySeat, resetSeatsCart } = seatsBookingSlice.actions;

export default seatsBookingSlice.reducer;
