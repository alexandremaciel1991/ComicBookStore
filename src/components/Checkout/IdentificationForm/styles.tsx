import { TextField, FormGroup, FormControl, Typography } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 1450px;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 100%;
    margin: 1rem 0;
  }
  ${({ theme }) => theme.breakpoints.down("xl")} {
    max-width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 1rem 0;
    align-items: center;
  }
`;

export const FormGroupStyle = styled(FormGroup)`
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 1rem 0;
    align-items: center;
    justify-content: space-around;
  }
`;

export const Title = styled(Typography)`
  ${({ theme }) => theme.typography.h2}
`;

export const FormControlStyle = styled(FormControl)`
  margin: 0 2rem;
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 1rem 0;
  }
`;

export const InputStyle = styled(TextField)<{ $width?: string }>`
  width: ${({ $width }) => ($width ? $width : "20rem")};
  & input {
    ${({ theme }) => theme.typography.body2}
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100%;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: block;
  background-color: ${({ theme }) => theme.palette.success.main};
  color: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.success.main};
  padding: 0.5rem 3rem;

  border-radius: 0.5rem;
  height: 3.7rem;
  ${({ theme }) => theme.typography.button};
  width: 145px;
  align-self: end;
  &:hover {
    background-color: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.success.main};
    border: 1px solid ${({ theme }) => theme.palette.success.main};
  }

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 1rem auto;
  }
`;
