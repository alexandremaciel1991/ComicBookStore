import { addQuantityProduct } from "@/redux/slice";
import { ButtonController, ButtonGroupStyle, InputController } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ComicTypesCart } from "@/types/CartType";

interface IQuantityButton {
  id: number;
}
export const QuantityButton = ({ id }: IQuantityButton) => {
  const { comics } = useSelector(
    (rootReducer: any) => rootReducer.comicReducer
  );
  const [count, setCount] = useState<number>(1);
  const dispatch = useDispatch();

  const updateCount = (value: number) => {
    dispatch(
      addQuantityProduct({
        id: id,
        quantity: value,
      })
    );
    setCount(value);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    updateCount(Math.max(Number(event.target.value), 1));
  };

  const handleClick = () => {
    updateCount(count + 1);
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
      <ButtonController
        onClick={() => setCount((prev: number) => prev - 1)}
        disabled={count === 1}
      >
        <RemoveIcon fontSize="small" />
      </ButtonController>
      <InputController size="small" onChange={handleChange} value={count} />
      <ButtonController onClick={() => handleClick()}>
        <AddIcon fontSize="small" />
      </ButtonController>
    </ButtonGroupStyle>
  );
};
