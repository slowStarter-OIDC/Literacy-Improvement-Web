import { dehydrate, QueryClient, useQuery } from "react-query";
import Wordlayout from "../components/organism/page-word/Wordlayout";
import { useRouter } from 'next/router';
import { fetchWords } from "./api/fetchWords";
import Loading from "../components/organism/page-loading/Loading";
import Seo from "../components/seo/Seo";

export default function Word() {

  const router = useRouter();
  const word = router.query.word;
  let check = 0;
  let isNoItem = false;

  const { isLoading, isError, error, data } = useQuery(['word', word], () =>
    fetchWords(word),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  let words = null;
  if (data) {
    words = data.channel.item
    if (words) {
      check = 1;
    }
    if (data.channel.item.length === 0) {
      isNoItem = true
    }
  }

  return (
    <div>
      <Seo title="검색 결과" subtitle={word}></Seo>
      {check == 1 ? <Wordlayout word={word} words={words} ></Wordlayout> : <Loading label="검색 중 ..."></Loading>}
      {isNoItem ? <div>검색 결과가 없습니다.</div> : <></>}
    </div>
  );
}
export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "word",
    async () => await fetchWords(word)
  );
  console.log(queryClient);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
