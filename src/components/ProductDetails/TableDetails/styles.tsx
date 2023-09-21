import styled from "styled-components";
import { TableCell, TableContainer } from "@mui/material";

export const Container = styled(TableContainer)`
  max-width: 75rem;
  margin-top: 2rem;
`;

export const TableCellStyle = styled(TableCell)`
  ${({ theme }) => theme.typography.body2}
`;
