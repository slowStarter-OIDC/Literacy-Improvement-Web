import { dehydrate, QueryClient, useQuery } from "react-query";
import styles from "./MainQuiz.module.css";
import Link from 'next/link';

export default function MainQuiz() {


  return (
      <div className={styles.container}>
        <Link href="/quiz"><a>단어 공부하기</a></Link>
      </div>
  );
}

export async function getServerSideProps(context) {
}
