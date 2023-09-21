import { CardContent, CardHeader, Collapse, Typography } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 1450px;
  margin: 2rem auto;
`;

export const ComicPurchase = styled.div`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
`;
export const PurchaseCard = styled.div`
  width: 33rem;
  height: 15rem;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Price = styled(Typography)`
  ${({ theme }) => theme.typography.h2};
`;

export const ImageCreator = styled(Image)`
  margin: 1rem;
`;
