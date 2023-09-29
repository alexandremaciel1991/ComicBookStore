export type ComicTypesCart = {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  quantity: number;
};

export type CartStateType = {
  comics: ComicTypesCart[];
  cartQuantity: number;
};
