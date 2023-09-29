import { useSelector } from "react-redux";
import { CartContainer, CartIcon } from "./styles";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useRouter } from "next/router";

export const HeaderCart = () => {
  const { comics, cartQuantity } = useSelector(
    (rootReducer: any) => rootReducer.comicReducer
  );

  const router = useRouter();
  const redirectCheckout = () => {
    router.push("/checkout");
  };

  return (
    <CartContainer onClick={redirectCheckout}>
      {cartQuantity}
      <CartIcon />
    </CartContainer>
  );
};
