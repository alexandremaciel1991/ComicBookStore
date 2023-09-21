import { BannerContainer, BannerImage } from "./styles";

export const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage
        src="/img/banner.png"
        alt="Banner Marvel Central"
        fill
        priority
      />
    </BannerContainer>
  );
};
