import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const CartContainer = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 2rem;
  cursor: pointer;

  ${({ theme }) => theme.typography.cart}
`;

export const CartIcon = styled(ShoppingCartOutlinedIcon)`
  font-size: 2.5rem;
`;
