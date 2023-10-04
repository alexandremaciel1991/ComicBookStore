import { ButtonGroup, Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

export const CardContainer = styled(Card)`
  width: 270px;
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  margin: 1rem;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 36rem;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0;
  }
`;
export const ProductDetails = styled.div`
  cursor: pointer;
`;
export const TitleContent = styled(CardContent)`
  height: 8rem;
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
`;

export const ProductImage = styled.div`
  width: 100%;
  height: 19rem;
  position: relative;
  text-align: center;
  background-color: #f5f5f5;
`;

export const Text = styled(Typography)`
  ${({ theme }) => theme.typography.body2};
`;

export const Price = styled(Typography)`
  ${({ theme }) => theme.typography.h4};
  margin: 1rem 0;
`;

export const Button = styled.a`
  display: block;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 0.7rem 2.5rem;
  border-radius: 0.5rem;
  margin: 0 auto;
  height: 3.7rem;
  ${({ theme }) => theme.typography.button};
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.light};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 1rem auto;
  }
`;

export const BuyButton = styled(Button)`
  cursor: pointer;
  color: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  background-color: ${({ theme }) => theme.palette.success.main};
  &:hover {
    background-color: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.success.main};
    border: 1px solid ${({ theme }) => theme.palette.success.main};
  }
`;

export const CardAction = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 15rem;
  }
`;

export const CardActionButtonGroup = styled(ButtonGroup)`
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;
