import {
  ComicPurchase,
  Container,
  ImageCreator,
  Price,
  PurchaseCard,
} from "./styles";
import { useFormatPrice } from "@/hooks/useFormatPrice";
import { ComicPurchaseDescription } from "../ComicPurchaseDescription";
import { QuantityButton } from "../QuantityButton";
import { PurchaseButton } from "../ComicPurchaseDescription/styles";
import { ComicTypes } from "@/types/ComicType";
import { ImageSlide } from "../ImageGallery";
import { CreatorType } from "@/types/CreatorType";
import { GeneralCollapse } from "../GeneralCollapse";
import { TableDetails } from "@/components/ProductDetails/TableDetails";

interface IProduct {
  product: ComicTypes;
  creators: CreatorType[];
}
export const Product = ({ product, creators }: IProduct) => {
  const formatPrice = useFormatPrice(product.prices[0].price);
  const formatUrlImage = (extension: string, path: string) => {
    return path + "." + extension;
  };

  return (
    <Container>
      <ComicPurchase>
        <ImageSlide images={product.images} />
        <ComicPurchaseDescription
          title={product.title}
          description={product.description}
        >
          <PurchaseCard>
            <QuantityButton />
            <Price variant="body2" align="center">
              {formatPrice}
            </Price>
            <PurchaseButton>Comprar</PurchaseButton>
          </PurchaseCard>
        </ComicPurchaseDescription>
      </ComicPurchase>

      <GeneralCollapse title="Descrição Completa">
        {product.description}

        <TableDetails
          id={product.id}
          isbn={product.isbn}
          digitalId={product.digitalId}
          format={product.format}
          issueNumber={product.issueNumber}
          pageCount={product.pageCount}
          upc={product.upc}
        />
      </GeneralCollapse>
      <GeneralCollapse title="Criadore(s)">
        {Object.entries(creators).map((item) => {
          return (
            <ImageCreator
              key={item[0] + item[1].id}
              src={formatUrlImage(
                item[1].thumbnail.extension,
                item[1].thumbnail.path
              )}
              alt={item[1].firstName}
              width={103.45}
              height={150}
            />
          );
        })}
      </GeneralCollapse>
    </Container>
  );
};
