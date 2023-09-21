import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Thumbnail } from "@/types/ComicType";
import { ImageContainer, ImageDetails, ShowImage } from "./styles";

interface IImageSlide {
  images: Thumbnail[];
}
export const ImageSlide = ({ images }: IImageSlide) => {
  const formatUrlImage = (extension: string, path: string) => {
    return path + "." + extension;
  };

  return (
    <ImageContainer>
      <Carousel>
        {images?.map((thumbnail, i) => {
          return (
            <ImageDetails key={thumbnail.path + i}>
              <img src={formatUrlImage(thumbnail.extension, thumbnail.path)} />
            </ImageDetails>
          );
        })}
      </Carousel>
    </ImageContainer>
  );
};
