import Image from "next/image";
import styled from "styled-components";

export const ImageContainer = styled.div`
  margin: 2rem auto;
  position: relative;
`;
export const ImageDetails = styled.div`
  height: 40rem;
  & > img {
    height: 40rem;
  }
`;

export const ShowImage = styled(Image)`
  object-fit: contain;
`;
