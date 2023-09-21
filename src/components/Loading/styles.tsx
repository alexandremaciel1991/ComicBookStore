import styled from "styled-components";
import Skeleton from "@mui/material/Skeleton";

export const LoadingContainer = styled.div`
  width: 145rem;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
  border-radius: 1rem;
  justify-content: "center";
  padding: 1rem;
  align-items: center;
  ${({ theme }) => theme.typography.body1}
`;

export const SkeletonStyle = styled(Skeleton)`
  margin: 0.5rem;
`;
