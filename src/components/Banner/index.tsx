import { BannerContainer, BannerImage } from "./styles";

export const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage
        src="/img/banner.png"
        alt="Banner Marvel Central"
        width={1450}
        height={450}
        priority
      />
    </BannerContainer>
  );
};
