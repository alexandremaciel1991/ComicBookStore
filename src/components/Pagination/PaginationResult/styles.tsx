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
`;
export const PaginationControlledStyle = styled(PaginationControlled)`
  ${({ theme }) => theme.typography.h1}
`;

export const Text = styled(Typography)`
  ${({ theme }) => theme.typography.body2}
`;
