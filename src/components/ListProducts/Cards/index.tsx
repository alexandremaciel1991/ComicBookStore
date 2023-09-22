import {
  Button,
  BuyButton,
  CardAction,
  CardActionButtonGroup,
  CardContainer,
  Price,
  ProductDetails,
  ProductImage,
  Text,
  TitleContent,
} from "./styles";
import Image from "next/image";
import { useFormatPrice } from "@/hooks/useFormatPrice";
import { useMediaQuery } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useDispatch } from "react-redux";
import { addComicToCart } from "@/redux/slice";
import { useRouter } from "next/router";

export interface ICardDetails {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}
export const CardDetails = ({ id, title, price, thumbnail }: ICardDetails) => {
  const formatPrice = useFormatPrice(price);
  const dispatch = useDispatch();
  const handleClick = () => {
    window.location.href = `/produto?id=${id}`;
  };
  const router = useRouter();
  const shoppingComic = () => {
    dispatch(addComicToCart({ id, title, price, thumbnail, quantity: 1 }));
    router.push("/checkout");
  };

  const matches = useMediaQuery("(max-width:900px)");
  return (
    <CardContainer>
      <ProductDetails onClick={handleClick}>
        <ProductImage>
          <Image src={thumbnail} alt="capa" fill />
        </ProductImage>
        {!matches && (
          <TitleContent>
            <Text variant="body2" align="center">
              {title}
            </Text>
          </TitleContent>
        )}
      </ProductDetails>
      <CardAction>
        {matches && (
          <TitleContent onClick={handleClick}>
            <Text variant="body2" align="center">
              {title}
            </Text>
          </TitleContent>
        )}
        <Price variant="body2" align="center">
          {formatPrice}
        </Price>
        <CardActionButtonGroup>
          <Button href={`/produto?id=${id}`}>Detalhes</Button>
          <BuyButton onClick={shoppingComic}>
            <LocalMallOutlinedIcon fontSize="large" />
          </BuyButton>
        </CardActionButtonGroup>
      </CardAction>
    </CardContainer>
  );
};
