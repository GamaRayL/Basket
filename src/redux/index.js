import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./card/reducer";

export const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});
