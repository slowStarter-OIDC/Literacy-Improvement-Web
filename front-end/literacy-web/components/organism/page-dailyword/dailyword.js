import { dehydrate, QueryClient, useQuery } from "react-query";
import WordCarousel from "../carousel/wordCarousel";
import { fetchDailyword } from "../../../pages/api/fetchDailyword";
import styles from "./Dailyword.module.css";
import Loading from "../page-loading/Loading";

export default function Dailyword() {

  const { isLoading, isError, error, data } = useQuery('dailyword', () =>
    fetchDailyword(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          오늘의 단어
        </div>
        {isLoading ? (
          <Loading></Loading>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div>
            <WordCarousel slideItems={data}></WordCarousel>
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "dailyword",
    async () => await fetchDailyword()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
