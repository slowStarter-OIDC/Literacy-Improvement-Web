import MyDictionary from "../components/organism/page-myDictionary/myDictionary";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { getMyDictionary } from "./api/getMyDictionary";
import NoLogin from "../components/organism/noLogin/NoLogin";
import Seo from "../components/seo/Seo";

export default function myDictionary() {

  const { isLoading, isError, error, data } = useQuery('mydictionary', () =>
    getMyDictionary(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );


  return (
    <div>
      <Seo title="Kotudy" subtitle="나만의 단어장"></Seo>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div><NoLogin></NoLogin></div>
      ) : (<div>
        <MyDictionary dictionary={data}></MyDictionary>
      </div>)}
    </div>
  )
}


export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "mydictionary",
    async () => await getMyDictionary()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
