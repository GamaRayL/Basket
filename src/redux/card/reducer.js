import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    itemsInCard: [],
  },
  reducers: {
    increaseQuantity: (state, action) => {
      state.itemsInCard = state.itemsInCard.map((product) =>
        action.payload.id === product.id
          ? {
              ...product,
              quantity: product.quantity + action.payload.quantity,
            }
          : product
      );
    },
    decreaseQuantity: (state, action) => {
      state.itemsInCard = state.itemsInCard.map((product) =>
        action.payload.id === product.id
          ? {
              ...product,
              quantity: product.quantity - action.payload.quantity,
            }
          : product
      );
    },
    setItemInCard: (state, action) => {
      state.itemsInCard.push(action.payload);
    },
    deleteItemFromCard: (state, action) => {
      state.itemsInCard = state.itemsInCard.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const {
  setItemInCard,
  deleteItemFromCard,
  increaseQuantity,
  decreaseQuantity,
} = cardSlice.actions;
export default cardSlice.reducer;
