import { Banner } from "@/components/Banner";
import { BasicBreadcrumbs } from "@/components/BasicBreadcrumbs";
import { TopAppBar } from "@/components/Header/TopAppBar";
import { Product } from "@/components/ProductDetails/Product";
import { getComicDetails, getCreators } from "@/services/ProductService";
import { ComicTypes } from "@/types/ComicType";
import { CreatorType } from "@/types/CreatorType";
import { useMediaQuery } from "@mui/material";
import { GetServerSideProps } from "next";

interface IProduto {
  data: ComicTypes;
  creators: CreatorType[];
}
export default function Produto({ data, creators }: IProduto) {
  const breadcrumbs = ["Home", "Detalhes"];
  const matches = useMediaQuery("(max-width:900px)");
  return (
    <>
      <TopAppBar /> {!matches && <Banner />}
      <BasicBreadcrumbs breadcrumbs={breadcrumbs} />
      <Product product={data} creators={creators} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const id = !!context.query.id && parseInt(context.query.id as string);
    if (id) {
      const [product, creators] = await Promise.all([
        getComicDetails(id),
        getCreators(id),
      ]);
      return {
        props: {
          data: { ...product.results[0] },
          creators: { ...creators.results },
        },
      };
    } else {
      return {
        redirect: {
          destination: "/404",
          permanent: false,
        },
      };
    }
  } catch (error) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
};
