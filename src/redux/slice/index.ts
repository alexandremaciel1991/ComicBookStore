import { CartStateType } from "@/types/CartType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartStateType = {
  comics: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addComicToCart: (state, action) => {
      if (state.comics.length > 0) {
        state.comics[0] = { ...state.comics[0], ...action.payload };
      } else {
        state.comics = [...initialState.comics, { ...action.payload }];
      }
    },
    addQuantityProduct: (state, action) => {
      if (state.comics.length > 0) {
        state.comics.find((comic, index) => {
          if (comic.id === action.payload.id) {
            state.comics[index].quantity = action.payload.quantity;
          }
        });
      } else {
        state.comics = [...initialState.comics, { ...action.payload }];
      }
    },
  },
});

export const { addComicToCart, addQuantityProduct } = cartSlice.actions;

export default cartSlice.reducer;
