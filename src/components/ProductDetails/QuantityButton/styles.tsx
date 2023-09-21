import styled from "styled-components";
import { Button, TextField } from "@mui/material";

export const ButtonController = styled(Button)`
  color: ${({ theme }) => theme.palette.text.primary};
  border: 1px solid ${({ theme }) => theme.palette.secondary.main};
  height: 3rem;
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.light};
    border: 1px solid ${({ theme }) => theme.palette.secondary.ligth};
  }
`;
export const InputController = styled(TextField)`
  height: 3rem;
  & .MuiOutlinedInput-root {
    & fieldset {
      border-radius: 0;
      border-color: ${({ theme }) => theme.palette.secondary.light};
    }
    &:hover fieldset {
      border-color: ${({ theme }) => theme.palette.secondary.light};
    }
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.palette.secondary.light};
    }
    & input {
      text-align: center;
      width: 6rem;
      color: ${({ theme }) => theme.palette.text.primary};
    }
  }
`;
