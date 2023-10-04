import { AppBar, Box, InputBase, Toolbar } from "@mui/material";
import styled from "styled-components";

export const BoxStyle = styled(Box)`
  height: 10.5rem;
  ${({ theme }) => theme.breakpoints.down("md")} {
    height: 15rem;
  }
`;
export const AppBarStyle = styled(AppBar)`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const MobileTop = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const ToolbarStyle = styled(Toolbar)`
  justify-content: space-between;
  max-width: 1450px;
  margin: auto;
  width: 100%;
  padding: 2rem 0;
  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 36rem;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  ${({ theme }) => theme.breakpoints.down("xl")} {
    max-width: 100%;
  }
`;

export const UserContainer = styled(Toolbar)`
  display: flex;
  float: right;
`;
