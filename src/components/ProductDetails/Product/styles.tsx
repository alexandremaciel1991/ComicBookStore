import { CardContent, CardHeader, Collapse, Typography } from "@mui/material";
import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 1450px;
  margin: 2rem auto;
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100%;
  }
`;

export const ComicPurchase = styled.div`
  width: 100%;
  margin: 2rem auto;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }
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
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const Price = styled(Typography)`
  ${({ theme }) => theme.typography.h2};
  ${({ theme }) => theme.breakpoints.down("md")} {
    order: 1;
  }
`;

export const ImageCreator = styled(Image)`
  margin: 1rem;
`;
