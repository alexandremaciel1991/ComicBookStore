import styled from "styled-components";

export const CardContainer = styled.div`
  width: 1450px;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  ${({ theme }) => theme.breakpoints.down("md")} {
    max-width: 100%;
  }
  ${({ theme }) => theme.breakpoints.down("xl")} {
    max-width: 100%;
  }
`;
