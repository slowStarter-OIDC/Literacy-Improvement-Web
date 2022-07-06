import styles from './Meanbox.module.css';
import { useState, useCallback } from 'react';
import Link from 'next/link';

export default function Meanbox(props) {
  

  return (
      <div className={styles.box}>
        <Link href={{
            pathname: '/word',
            query: { word: props.word.lemma }
        }}>
            {props.word.lemma}
        </Link>
        <Link href={{
            pathname: '/word',
            query: { word: props.word.lemma }
        }}>
          {props.word.type}
        </Link>
      </div>
  )
}