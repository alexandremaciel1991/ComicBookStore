import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSelector } from "react-redux";
import {
  Container,
  ImageContainer,
  ProductBody,
  ProductTitle,
  TableCellBody,
  TableCellStyle,
} from "./styles";
import Image from "next/image";
import { formatPriceFunction } from "@/utils/formatPrice";
import { QuantityButton } from "@/components/shared/QuantityButton";
import { ComicTypesCart } from "@/types/CartType";

export const ProductSelect = () => {
  const { comics } = useSelector(
    (rootReducer: any) => rootReducer.comicReducer
  );
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table aria-label="Produtos Selecionados">
          <TableHead>
            <TableRow>
              <TableCellStyle align="left">Produto</TableCellStyle>
              <TableCellStyle align="center">Quantidade</TableCellStyle>
              <TableCellStyle align="center">Valor Unitário</TableCellStyle>
              <TableCellStyle align="center">Valor Total</TableCellStyle>
            </TableRow>
          </TableHead>
          <TableBody>
            {comics.map((comic: ComicTypesCart, index: number) => {
              return (
                <TableRow key={comic.id}>
                  <TableCellBody scope="row" align="left">
                    <ProductBody>
                      <ImageContainer>
                        <Image
                          src={comic.thumbnail}
                          alt={comic.title}
                          width={80}
                          height={106}
                        />
                      </ImageContainer>
                      <ProductTitle>{comic.title}</ProductTitle>
                    </ProductBody>
                  </TableCellBody>
                  <TableCellBody align="center">
                    <QuantityButton id={comic.id} />
                  </TableCellBody>
                  <TableCellBody align="center">
                    {formatPriceFunction(comic.price)}
                  </TableCellBody>
                  <TableCellBody align="center">
                    {formatPriceFunction(comic.price)}
                  </TableCellBody>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
