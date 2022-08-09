import { dehydrate, QueryClient, useQuery } from "react-query";
import Loading from "../components/organism/page-loading/Loading";
import WordRanking from "../components/organism/page-rank/WordRanking";
import Seo from "../components/seo/Seo";
import { fetchWordRank } from "./api/fetchWordRank";

export default function WordRank() {

  const { isLoading, isError, error, data } = useQuery('wordRank', () =>
    fetchWordRank(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  if(data ) {
    console.log(data)
  }


  return (
    <div>
      <Seo title="Kotudy" subtitle="단어 순위"></Seo>
      {isLoading ? (
        <Loading></Loading>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
        <WordRanking wordList={data}></WordRanking>
        )
      }
    </div>
  )
}

export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "wordRank",
    async () => await fetchWordRank()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
