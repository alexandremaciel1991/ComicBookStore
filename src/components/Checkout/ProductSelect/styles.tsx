import styled from "styled-components";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Image from "next/image";

export const Container = styled.div`
  width: 1450px;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 100%;

    & div {
      width: 100%;
    }
  }
  ${({ theme }) => theme.breakpoints.down("xl")} {
    max-width: 100%;
  }
`;
export const TableCellStyle = styled(TableCell)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.text.primary};

  ${({ theme }) => theme.typography.h5}
`;

export const TableCellBody = styled(TableCell)`
  ${({ theme }) => theme.typography.h5}
`;

export const ProductBody = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down("md")} {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 20%;
  & img {
    margin: 0 auto;
  }
`;

export const ProductTitle = styled.span`
  margin-left: 2rem;
  ${({ theme }) => theme.typography.h5}
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 1rem 0;
  }
`;
