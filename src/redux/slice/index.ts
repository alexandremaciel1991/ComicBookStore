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
      console.log("Akii");
      const comicExistInCart = state.comics.some(
        (comic) => comic.id === action.payload.id
      );
      state.cartQuantity = action.payload.quantity;
      console.log(action.payload.quantity);
      if (comicExistInCart) {
        state.comics = state.comics.map((comic) =>
          comic.id === action.payload.id
            ? { ...comic, quantity: action.payload.quantity }
            : { ...comic }
        );
      } else {
        state.comics = [...state.comics, { ...action.payload }];
      }
    },
  },
});

export const { addComicToCart } = cartSlice.actions;

export default cartSlice.reducer;
