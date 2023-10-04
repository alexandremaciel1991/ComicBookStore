import {
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
import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";

export interface ICardDetails {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}
export const CardDetails = ({ id, title, price, thumbnail }: ICardDetails) => {
  const formatPrice = useFormatPrice(price);
  const handleClick = () => {
    router.push(`/produto?id=${id}`);
  };
  const router = useRouter();

  const matches = useMediaQuery("(max-width:900px)");
  return (
    <CardContainer>
      <ProductDetails onClick={handleClick}>
        <ProductImage>
          <Image src={thumbnail} alt="capa" width={124} height={190} />
        </ProductImage>
        {!matches && (
          <TitleContent>
            <Text variant="body2" align="left">
              {title}
            </Text>
          </TitleContent>
        )}
      </ProductDetails>
      <CardAction>
        {matches && (
          <TitleContent onClick={handleClick}>
            <Text variant="body2" align="left">
              {title}
            </Text>
          </TitleContent>
        )}
        <Price variant="body2" align="center">
          {formatPrice}
        </Price>
      </CardAction>
    </CardContainer>
  );
};
