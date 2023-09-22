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
import { ButtonGroup, useMediaQuery } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
interface ICardDetails {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}
export const CardDetails = ({ id, title, price, thumbnail }: ICardDetails) => {
  const formatPrice = useFormatPrice(price);
  const handleClick = () => {
    window.location.href = `/produto?id=${id}`;
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
          <BuyButton href="/">
            <LocalMallOutlinedIcon fontSize="large" />
          </BuyButton>
        </CardActionButtonGroup>
      </CardAction>
    </CardContainer>
  );
};
