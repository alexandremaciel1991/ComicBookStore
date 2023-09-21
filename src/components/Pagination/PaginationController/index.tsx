import { Pagination, PaginationProps } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type IPagination = {
  totalItens: number;
  offset: number;
  count: number;
  setLoading: Dispatch<SetStateAction<boolean>>;
} & PaginationProps;
export const PaginationControlled = ({
  totalItens,
  offset,
  count,
  size,
  page,
  setLoading,
  ...rest
}: IPagination) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setLoading(true);
    window.location.href = `?page=${value}`;
  };

  const totalPage = Math.floor(totalItens / count);
  return (
    <Pagination
      count={totalPage}
      onChange={handleChange}
      size={size}
      page={page}
      {...rest}
    />
  );
};
