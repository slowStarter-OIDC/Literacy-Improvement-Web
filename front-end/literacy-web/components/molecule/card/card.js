import Link from 'next/link';
import styles from './Card.module.css';

export default function Card({ content }) {

  const searchWord = () => {
    content.word
  }

  return (
    <div className={styles.container}>
      <Link href={{
        pathname: '/word',
        query: { word: content.word }
      }} passHref>
        <div className={styles.word} lang="ko" onClick={() => searchWord()}>{content.word}</div>
      </Link>
      <Link href={{
        pathname: '/word',
        query: { word: content.word }
      }} passHref>
        <div className={styles.morphem}>({content.morpheme})</div>
      </Link>
      <Link href={{
        pathname: '/word',
        query: { word: content.word }
      }} passHref>
        <p className={styles.mean}>{content.mean}</p>
      </Link>
      <p className={styles.arrow_box}>눌러서 검색!</p>
    </div>
  )
}
