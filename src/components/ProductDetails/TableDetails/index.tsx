import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, TableCellStyle } from "./styles";

interface ITableDetails {
  id: number;
  digitalId: number;
  issueNumber: number;
  isbn: string;
  upc: string;
  format: string;
  pageCount: number;
}
export const TableDetails = ({
  id,
  digitalId,
  issueNumber,
  isbn,
  upc,
  format,
  pageCount,
}: ITableDetails) => {
  return (
    <Container component={Paper}>
      <Table aria-label="Descrição do Quadrinho">
        <TableBody>
          <TableRow>
            <TableCellStyle component="th" scope="row">
              id
            </TableCellStyle>
            <TableCellStyle align="right">{id}</TableCellStyle>
          </TableRow>
          <TableRow>
            <TableCellStyle component="th" scope="row">
              ID Digital
            </TableCellStyle>
            <TableCellStyle align="right">{digitalId}</TableCellStyle>
          </TableRow>
          <TableRow>
            <TableCellStyle component="th" scope="row">
              Numero da Edição
            </TableCellStyle>
            <TableCellStyle align="right">{issueNumber}</TableCellStyle>
          </TableRow>
          <TableRow>
            <TableCellStyle component="th" scope="row">
              isbn
            </TableCellStyle>
            <TableCellStyle align="right">{isbn}</TableCellStyle>
          </TableRow>
          <TableRow>
            <TableCellStyle component="th" scope="row">
              Código Universal de Produtos (UPC)
            </TableCellStyle>
            <TableCellStyle align="right">{upc}</TableCellStyle>
          </TableRow>
          <TableRow>
            <TableCellStyle component="th" scope="row">
              Formato
            </TableCellStyle>
            <TableCellStyle align="right">{format}</TableCellStyle>
          </TableRow>
          <TableRow>
            <TableCellStyle component="th" scope="row">
              Número de Páginas
            </TableCellStyle>
            <TableCellStyle align="right">{pageCount}</TableCellStyle>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
};
