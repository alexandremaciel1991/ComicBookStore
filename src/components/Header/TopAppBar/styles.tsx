import { AppBar, InputBase, Toolbar } from "@mui/material";
import styled from "styled-components";

export const AppBarStyle = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const ToolbarStyle = styled(Toolbar)`
  justify-content: space-between;
  max-width: 1450px;
  margin: auto;
  width: 100%;
  padding: 2rem 0;
`;
