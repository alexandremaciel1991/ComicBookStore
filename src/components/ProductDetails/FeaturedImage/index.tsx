import { ImageContainer, ImageDetails, ShowImage } from "./styles";

interface IFeaturedImage {
  src: string;
}
export const FeaturedImage = ({ src }: IFeaturedImage) => {
  return (
    <ImageContainer>
      <ImageDetails>
        <ShowImage src={src} alt="Teste" fill />
      </ImageDetails>
    </ImageContainer>
  );
};
