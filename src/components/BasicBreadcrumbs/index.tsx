import { Breadcrumbs, Typography } from "@mui/material";
import { Container } from "./styles";

interface IBasicBreadcrumbs {
  breadcrumbs: string[];
}
export const BasicBreadcrumbs = ({ breadcrumbs }: IBasicBreadcrumbs) => {
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map((b, i) => {
          return (
            <Typography key={b + i} variant="h5">
              {b}
            </Typography>
          );
        })}
      </Breadcrumbs>
    </Container>
  );
};
