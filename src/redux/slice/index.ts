import { CartStateType } from "@/types/CartType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartStateType = {
  comics: [],
  cartQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addComicToCart: (state, action) => {
      const comicExistInCart = state.comics.some(
        (comic) => comic.id === action.payload.id
      );
      state.cartQuantity = state.cartQuantity + action.payload.quantity;
      if (comicExistInCart) {
        state.comics = state.comics.map((comic) =>
          comic.id === action.payload.id
            ? { ...comic, quantity: comic.quantity + action.payload.quantity }
            : { ...comic }
        );
      } else {
        state.comics = [...state.comics, { ...action.payload }];
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
