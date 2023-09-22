import styled from "styled-components";
import { Button, TextField, Typography } from "@mui/material";

export const Container = styled.div`
  width: 1450px;
  margin: 2rem auto;
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100%;
    margin: 1rem auto;
  }
  ${({ theme }) => theme.breakpoints.down("xl")} {
    max-width: 100%;
  }
`;

export const ComicContainer = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  position: relative;
  max-width: 80.5rem;
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 30rem;
    margin: 1rem auto;
  }
`;
export const Title = styled(Typography)`
  ${({ theme }) => theme.typography.h2}
  margin-bottom: 1.2rem;
`;

export const Description = styled(Typography)`
  width: 100%;
  ${({ theme }) => theme.typography.body2}
  height: 6.2rem;
  display: -webkit-box;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const SeeMore = styled(Button)`
  display: block;
  color: ${({ theme }) => theme.palette.text.primary};
  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  width: 9.6rem;
  height: 3.7rem;
  margin-top: 1rem;
  ${({ theme }) => theme.typography.button1};
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.light};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100%;
  }
`;

export const PurchaseButton = styled(Button)`
  display: block;
  color: ${({ theme }) => theme.palette.white};
  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  background-color: ${({ theme }) => theme.palette.success.main};
  width: 100%;
  height: 3.7rem;
  margin-top: 1rem;
  ${({ theme }) => theme.typography.button};
  &:hover {
    background-color: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.success.main};
    border: 1px solid ${({ theme }) => theme.palette.success.main};
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    order: 3;
  }
`;
