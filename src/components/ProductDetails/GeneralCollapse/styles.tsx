import styled from "styled-components";
import { Card, CardContent, CardHeader } from "@mui/material";

export const CardContainer = styled(Card)`
  margin: 2rem 0;
  min-width: 30rem;
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 30rem;
    margin: 1rem auto;
  }
`;

export const DescriptionHeader = styled(CardHeader)`
  cursor: pointer;
`;

export const Description = styled(CardContent)`
  ${({ theme }) => theme.typography.body2}
`;
