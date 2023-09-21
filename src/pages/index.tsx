import { Banner } from "@/components/Banner";
import { BasicBreadcrumbs } from "@/components/BasicBreadcrumbs";
import { TopAppBar } from "@/components/Header/TopAppBar";
import { CardList } from "@/components/ListProducts/CardList";
import { Loading } from "@/components/Loading";
import { PaginationResult } from "@/components/Pagination/PaginationResult";
import { getComicsList } from "@/services/ListProductCard";
import { ComicTypes } from "@/types/ComicType";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

interface IHOME {
  total: number;
  results: ComicTypes[];
  offset: number;
  count: number;
  limit: number;
  page: number;
  loadingStatus: boolean;
}

export default function Home({
  results,
  total,
  offset,
  count,
  page,
  loadingStatus = false,
}: IHOME) {
  const breadcrumbs = ["Home"];
  const [loading, setLoading] = useState<boolean>(loadingStatus);
  return (
    <>
      <TopAppBar /> <Banner /> <BasicBreadcrumbs breadcrumbs={breadcrumbs} />
      {!loading ? (
        <>
          <PaginationResult
            totalItens={total}
            offset={offset}
            count={count}
            showTotalItens={true}
            page={page}
            setLoading={setLoading}
          />
          <CardList data={results} />
          <PaginationResult
            totalItens={total}
            offset={offset}
            count={count}
            page={page}
            setLoading={setLoading}
          />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const page = context.query.page
      ? parseInt(context.query.page as string)
      : 1;
    const offset = (page - 1) * 20;
    const data = await getComicsList(offset);
    const loadingStatus = false;

    return { props: { ...data, page: page, loadingStatus: loadingStatus } };
  } catch (error) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
};
