import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchOpenDictionary } from "../../../pages/api/fetchOpenDictionary";
import { useState } from "react";
import styles from "./OpenDictionary.module.css";
import Link from 'next/link';
import OpenDictionaryModal from "../Modal/OpenDictionaryModal";
import { categorize } from "../../../lib/categorize";
import { useSelector, useDispatch } from 'react-redux';
import Loading from "../page-loading/Loading";
import { setCategory } from "../../../store/modules/myOpenDictSlice";

export default function OpenDictionary() {

  const category = useSelector((state) => state.myOpenDictSlice.category)

  const { isLoading, isError, error, data } = useQuery('openDictionary', () =>
    fetchOpenDictionary(),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );
  const dispatch = useDispatch()

  //data 카테고리화
  let dictionaryList;
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);

  if (data) {
    dictionaryList = categorize(data);
    if (category.length === 0){
      dispatch(setCategory(dictionaryList))
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>오픈 사전</div>
      <div className={styles.button_mydictionary}><Link href="/myopendictionary"><a>나의 사전 확인하기</a></Link></div>
      {isLoading ? (
        <Loading></Loading>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul className={styles.dictionary_list}>
          {dictionaryList?.map((dict, index) => {
            return (
              <li className={styles.item} key={index} onClick={() => { setShowModal(true); setSelectedCategory(dict) }} >
                <span>{dict.category}</span>
                <span className={styles.userId} >{dict.userId.split('@', 1)}</span>
              </li>
            )
          })}
        </ul>
      )}
      <OpenDictionaryModal
        onClose={() => setShowModal(false)}
        show={showModal}
        title={selectedCategory.category ? selectedCategory.category : "error"}
        maskClosable={true}
        data={selectedCategory ? selectedCategory : "error"}
      >
      </OpenDictionaryModal>
    </div>
  );
}

export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    "openDictionary",
    async () => await fetchOpenDictionary()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}