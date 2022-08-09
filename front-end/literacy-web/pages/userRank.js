import { dehydrate, QueryClient, useQuery } from "react-query";
import UserRanking from "../components/organism/page-rank/UserRanking";
import { fetchUserRank } from "./api/fetchUserRank";
import { useSelector } from 'react-redux';
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../components/organism/page-loading/Loading";
import Seo from "../components/seo/Seo";


export default function UserRank() {

  const userName = useSelector((state) => state.authSlice.email)
  const { isLoading, isError, error, data } = useQuery('userRank', () =>
    fetchUserRank(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    if (data) {
      let userData = data.find(v => v.userId === userName)
      userData.rank = data.findIndex(v => v.userId === userName) + 1
      setUserInfo(userData)
    }
  }, [data, userName])

  return (
    <div>
      <Seo title="Kotudy" subtitle="개인 순위"></Seo>
      {isLoading ? (
        <Loading></Loading>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <UserRanking userList={data} userInfo={userInfo}></UserRanking>
      )
      }
    </div>
  )

}

export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "userRank",
    async () => await fetchWordRank()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
