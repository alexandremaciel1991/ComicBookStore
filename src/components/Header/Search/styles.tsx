import { InputBase } from "@mui/material";
import styled from "styled-components";
export const SearchContainer = styled.div`
  position: relative;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.palette.text.primary};
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
  }
  margin-right: 2rem;
  margin-left: 2rem;
  height: 4rem;
  width: 73rem;
`;

export const SearchIconWrapper = styled.div`
  color: ${({ theme }) => theme.palette.text.primary};
  padding: 0 1rem;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid;
  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const StyledInputBase = styled(InputBase)`
  color: inherit;
  height: 100%;
  width: 73rem;
  color: ${({ theme }) => theme.palette.text.primary};
  & .MuiInputBase-input {
    padding: 0.8rem 0.8rem 0.8rem 0;
    padding-left: calc(1rem + 4rem);
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    width: 100%;
  }
`;
