import { ButtonController, ButtonGroupStyle, InputController } from "./styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";

export const QuantityButton = () => {
  const [count, setCount] = useState<number>(1);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCount(Math.max(Number(event.target.value), 1));
  };
  return (
    <ButtonGroupStyle>
      <ButtonController
        onClick={() => setCount((prev: number) => prev - 1)}
        disabled={count === 1}
      >
        <RemoveIcon fontSize="small" />
      </ButtonController>
      <InputController size="small" onChange={handleChange} value={count} />
      <ButtonController onClick={() => setCount((prev: number) => prev + 1)}>
        <AddIcon fontSize="small" />
      </ButtonController>
    </ButtonGroupStyle>
  );
};
