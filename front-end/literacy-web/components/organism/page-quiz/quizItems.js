import { dehydrate, QueryClient, useQuery } from "react-query";
import QuizCarousel from "../carousel/QuizCarousel";
import styles from "./QuizItems.module.css";
import { fetchQuizItem } from "../../../pages/api/fetchQuizItem";
import Loading from "../page-loading/Loading";

export default function QuizItems() {

  const { isLoading, isError, error, data } = useQuery('getQuizContent', () =>
    fetchQuizItem(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const test = "wef"


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>우리말 뜻풀이</h2>
      {isLoading ? (
        <div>
          <Loading></Loading>
        </div>
      ) : isError ? (
        <div>서버 점검중</div>
      ) :
        <div>
          <QuizCarousel slideItems={data} />
        </div>
      }
    </div>
  );
}

export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "getQuizContent",
    async () => await fetchQuizItem()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
