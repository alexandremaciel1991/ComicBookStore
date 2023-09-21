import {
  Button,
  BuyButton,
  CardAction,
  CardContainer,
  Price,
  ProductDetails,
  ProductImage,
  Text,
  TitleContent,
} from "./styles";
import Image from "next/image";
import { useFormatPrice } from "@/hooks/useFormatPrice";
import { ButtonGroup } from "@mui/material";
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
  return (
    <CardContainer>
      <ProductDetails onClick={handleClick}>
        <ProductImage>
          <Image src={thumbnail} alt="capa" fill />
        </ProductImage>
        <TitleContent>
          <Text variant="body2" align="center">
            {title}
          </Text>
        </TitleContent>
      </ProductDetails>
      <CardAction>
        <Price variant="body2" align="center">
          {formatPrice}
        </Price>
        <ButtonGroup>
          <Button href={`/produto?id=${id}`}>Detalhes</Button>
          <BuyButton href="/">
            <LocalMallOutlinedIcon fontSize="large" />
          </BuyButton>
        </ButtonGroup>
      </CardAction>
    </CardContainer>
  );
};
