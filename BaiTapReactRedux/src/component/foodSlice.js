import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodList: [
    { name: "Combo", price: 150000, quantity: 0, img: "./img/combo.jpg" },
    { name: "Lẻ bắp", price: 70000, quantity: 0, img: "./img/popcorn.webp" },
    { name: "Lẻ nước", price: 50000, quantity: 0, img: "./img/drink.jpg" },
  ],
  foodCart: [],
};

const foodBookingSlice = createSlice({
  name: "foodBooking",
  initialState,
  reducers: {
    addFoodToCart: (state, action) => {
      const name = action.payload;
      const foodInList = state.foodList.find((food) => {
        return food.name === name;
      });

      foodInList.quantity += 1;

      const index = state.foodCart.findIndex((food) => {
        return food.name === name;
      });

      if (index === -1) {
        state.foodCart.push({
          name: foodInList.name,
          price: foodInList.price,
          img: foodInList.img,
          quantity: 1,
        });
      } else {
        state.foodCart[index].quantity += 1;
      }
    },

    decreaseFoodInCart: (state, action) => {
      const name = action.payload;
      const index = state.foodCart.findIndex((food) => {
        return food.name === name;
      });
      if (index === -1) return;

      state.foodCart[index].quantity -= 1;
      if (state.foodCart[index].quantity <= 0) {
        state.foodCart.splice(index, 1);
      }

      const foodInList = state.foodList.find((food) => {
        return food.name === name;
      });
      if (foodInList && foodInList.quantity > 0) {
        foodInList.quantity -= 1;
      }
    },

    removeFoodFromCart: (state, action) => {
      const name = action.payload;
      const index = state.foodCart.findIndex((food) => {
        return food.name === name;
      });
      if (index === -1) {
        return;
      }

      const quantity = state.foodCart[index].quantity;
      state.foodCart.splice(index, 1);

      const foodInList = state.foodList.find((food) => {
        return food.name === name;
      });
      if (foodInList) {
        foodInList.quantity = Math.max(
          0,
          (foodInList.quantity || 0) - quantity
        );
      }
    },

    resetFoodCart: (state) => {
      state.foodCart = [];
      state.foodList = state.foodList.map((food) => ({ ...food, quantity: 0 }));
    },

    setFoodList: (state, action) => {
      state.foodList = action.payload;
    },
  },
});

export const {
  addFoodToCart,
  decreaseFoodInCart,
  removeFoodFromCart,
  resetFoodCart,
  setFoodList,
} = foodBookingSlice.actions;

export const selectFoodList = (state) => {
  return state.foodBookingReducer.foodList;
};
export const selectFoodCart = (state) => {
  return state.foodBookingReducer.foodCart;
};

export default foodBookingSlice.reducer;
