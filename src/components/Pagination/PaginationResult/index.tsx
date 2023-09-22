import { useMediaQuery } from "@mui/material";
import {
  PaginationControlledStyle,
  SearchResultContainer,
  Text,
} from "./styles";
import { Dispatch, SetStateAction } from "react";

interface IPaginationResult {
  totalItens: number;
  offset: number;
  count: number;
  showTotalItens?: boolean;
  page: number;
  setLoading: Dispatch<SetStateAction<boolean>>;
}
export const PaginationResult = ({
  totalItens,
  offset,
  count,
  showTotalItens,
  page,
  setLoading,
}: IPaginationResult) => {
  const matches = useMediaQuery("(max-width:900px)");
  return (
    <SearchResultContainer $showItens={showTotalItens}>
      {(!matches || !showTotalItens) && (
        <PaginationControlledStyle
          totalItens={totalItens}
          offset={offset}
          count={count}
          page={page}
          setLoading={setLoading}
        />
      )}
      {showTotalItens && (
        <Text variant="body2">
          <strong> Total de Itens:</strong> {totalItens}
        </Text>
      )}
    </SearchResultContainer>
  );
};
