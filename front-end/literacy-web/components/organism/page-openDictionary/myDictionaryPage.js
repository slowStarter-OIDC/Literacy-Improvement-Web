import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchMyDictionary } from "../../../pages/api/fetchMyDictionary";
import styles from "./MyDictionaryPage.module.css";
import MyOpenDictionaryModal from "../Modal/MyOpenDictionaryModal";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setData } from "../../../store/modules/myOpenDictSlice";
import { fetchMyOpenDictionary } from "../../../pages/api/fetchOpenDictionary";
import { myCategorize } from "../../../lib/categorize";
import DeleteButton from "../../atom/Button/DeleteButton";

export default function MyDictionaryPage() {

  const userID = useSelector((state) => state.authSlice.email)

  const { isLoading, isError, error, data } = useQuery(['myOpenDictionary', userID], () =>
    fetchMyOpenDictionary(userID),
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);

  //data 카테고리화
  let dictionaryList;
  if (data) {
    dictionaryList = myCategorize(data);
    dispatch(setData(dictionaryList));
  }


  return (
    <div className={styles.container}>
      <div className={styles.title}>나의 오픈사전</div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <ul className={styles.dictionary_list}>
          {dictionaryList.map((dict, index) => {
            return (
              <li className={styles.item} key={index} onClick={() => { setShowModal(true); setSelectedCategory(dict) }}>
                <DeleteButton data={dict.category}></DeleteButton>
                <span className={styles.dict_title}>{dict.category}</span>
              </li>
            )
          })}
        </ul>
      )}
      <MyOpenDictionaryModal
        onClose={() => setShowModal(false)}
        show={showModal}
        title={selectedCategory.category ? selectedCategory.category : "error"}
        maskClosable={true}
        data={selectedCategory ? selectedCategory : "error"}
      >
      </MyOpenDictionaryModal>
    </div>
  );
}

export async function getServerSideProps(context) {

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(
    'myOpenDictionary',
    async () => await fetchMyDictionary()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
