import { configureStore } from "@reduxjs/toolkit";
import seatsBookingReducer from "./../component/slice";
import foodBookingReducer from "./../component/foodSlice";

const Store = configureStore({
  reducer: {
    seatsBookingReducer,
    foodBookingReducer,
  },
});

export default Store;
