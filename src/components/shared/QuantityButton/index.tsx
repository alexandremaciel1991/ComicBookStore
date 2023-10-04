import { ButtonController, ButtonGroupStyle, InputController } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ComicTypesCart } from "@/types/CartType";

interface IQuantityButton {
  id: number;
  setProductQuantity?(value: number): void;
}
export const QuantityButton = ({ id, setProductQuantity }: IQuantityButton) => {
  const { comics } = useSelector(
    (rootReducer: any) => rootReducer.comicReducer
  );
  const [count, setCount] = useState<number>(1);

  const updateCount = (value: number) => {
    setCount(value);
    if (setProductQuantity) {
      setProductQuantity(value);
    }
  };

  // const handleChange = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   if (!isNaN(Number(event.target.value))) {
  //     updateCount(Math.max(Number(event.target.value), 1));
  //   }
  // };

  const handleClickSum = () => {
    updateCount(count + 1);
  };

  const handleClickSub = () => {
    updateCount(count - 1);
  };

  useEffect(() => {
    const comicExistInCart = comics.some(
      (comic: ComicTypesCart) => comic.id === id
    );

    if (comicExistInCart) {
      comics.map((comic: ComicTypesCart) => {
        if (comic.id === id) {
          setCount(comic.quantity);
        }
      });
    } else {
      setCount(1);
    }
  }, []);

  return (
    <ButtonGroupStyle>
      <ButtonController onClick={() => handleClickSub()} disabled={count === 1}>
        <RemoveIcon fontSize="small" />
      </ButtonController>
      <InputController size="small" value={count} disabled />
      <ButtonController onClick={() => handleClickSum()}>
        <AddIcon fontSize="small" />
      </ButtonController>
    </ButtonGroupStyle>
  );
};
