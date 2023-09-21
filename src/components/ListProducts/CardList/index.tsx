import { ComicTypes } from "@/types/ComicType";
import { CardDetails } from "../Cards";
import { CardContainer } from "./styles";

interface ICardList {
  data: ComicTypes[];
}
export const CardList = ({ data }: ICardList) => {
  return (
    <CardContainer>
      {data.map((comic) => {
        return (
          <CardDetails
            key={comic.id}
            id={comic.id}
            title={comic.title}
            price={comic.prices[0].price}
            thumbnail={comic.thumbnail.path + "." + comic.thumbnail.extension}
          />
        );
      })}
    </CardContainer>
  );
};
