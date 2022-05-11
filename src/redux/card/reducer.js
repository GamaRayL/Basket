import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    itemsInCard: [],
  },
  reducers: {
    increasePrice: (state, action) => {
      state.itemsInCard = state.itemsInCard.map(
        (product) => product.price + action.payload
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

export const { setItemInCard, deleteItemFromCard, increasePrice } =
  cardSlice.actions;
export default cardSlice.reducer;
