import { PurchaseCard } from "../Product/styles";
import {
  ComicContainer,
  Container,
  Description,
  SeeMore,
  Title,
} from "./styles";
import { ButtonGroup } from "@mui/material";

import { ReactNode } from "react";

interface IComicPurchaseDescription {
  title: string;
  description: string;
  children: ReactNode;
}
export const ComicPurchaseDescription = ({
  title,
  description,
  children,
}: IComicPurchaseDescription) => {
  const handleClick = () => {
    window.location.href = "#description";
  };
  return (
    <ComicContainer>
      <Title variant="h2">{title}</Title>
      <Description variant="body2">{description}</Description>
      <SeeMore onClick={handleClick}> Ver Mais</SeeMore>
      <Container>{children}</Container>
    </ComicContainer>
  );
};
