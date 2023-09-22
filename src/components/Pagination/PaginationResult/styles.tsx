import styled from "styled-components";
import { PaginationControlled } from "../PaginationController";
import { Typography } from "@mui/material";

export const SearchResultContainer = styled.div<{ $showItens?: boolean }>`
  width: 145rem;
  height: 7.6rem;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 1rem;
  justify-content: ${({ $showItens }) =>
    $showItens ? "space-between" : "center"};
  padding: 1rem;
  align-items: center;
  ${({ theme }) => theme.typography.body1}
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100%;
    padding: 0;
    height: 100%;
    margin: 1rem auto;
  }
`;
export const PaginationControlledStyle = styled(PaginationControlled)`
  ${({ theme }) => theme.typography.h1}
`;

export const Text = styled(Typography)`
  ${({ theme }) => theme.typography.body2}
`;
