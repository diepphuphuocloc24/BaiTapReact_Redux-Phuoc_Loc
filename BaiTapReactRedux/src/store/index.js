import { configureStore } from "@reduxjs/toolkit";
import seatsBookingReducer from "./../component/slice";

const Store = configureStore({
  reducer: {
    seatsBookingReducer,
  },
});

export default Store;
