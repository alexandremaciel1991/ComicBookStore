import { IdentificationForm } from "@/components/Checkout/IdentificationForm";
import { ProductSelect } from "@/components/Checkout/ProductSelect";
import { TopAppBar } from "@/components/Header/TopAppBar";
import { useSelector } from "react-redux";

export default function Checkout() {
  const { comics } = useSelector(
    (rootReducer: any) => rootReducer.comicReducer
  );

  return (
    <>
      <TopAppBar />
      <ProductSelect />
      <IdentificationForm />
    </>
  );
}
