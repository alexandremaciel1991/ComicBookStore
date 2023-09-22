import styled from "styled-components";
export const Container = styled.div`
  width: 1450px;
  height: 20px;
  position: relative;
  margin: 0 auto;
  ${({ theme }) => theme.breakpoints.down("xl")} {
    max-width: 100%;
  }
`;
