import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  width: 15rem;
  height: 5.5rem;
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 16.4rem;
    padding: 1rem 0;
    height: 7.6rem;
  }
`;

export const LogoLink = styled.a`
  outline: none;
  width: 100%;
  align-items: center;
  display: inline-flex;
  position: relative;
  vertical-align: middle;
  z-index: 1;
`;
