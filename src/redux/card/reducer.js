import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    itemsInCard: [],
  },
  reducers: {
    increasePrice: (state, action) => {
      state.itemsInCard = state.itemsInCard.map((product) => ({
        ...product,
        totalPrice: product.totalPrice + action.payload,
      }));
    },
    increaseQuantity: (state, action) => {
      state.itemsInCard = state.itemsInCard.map((product) => ({
        ...product,
        quantity: product.quantity + action.payload,
      }));
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
  increasePrice,
  increaseQuantity,
} = cardSlice.actions;
export default cardSlice.reducer;
