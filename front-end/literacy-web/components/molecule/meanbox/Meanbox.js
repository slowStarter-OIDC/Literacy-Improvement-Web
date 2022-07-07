import styles from './Meanbox.module.css';
import { useState, useCallback } from 'react';
import Link from 'next/link';

export default function Meanbox({word, type}) {

    const POS = ["NNG", "NNP", "NR", "NP", "VV", "VA", "VX", "MM", "MAG", "MAJ"];
    //일반 명사, 고유 명사, 수사, 대명사, 동사, 형용사, 보조 동사, 보조 형용사, 관형사, 부사
    const typeMap = {
        "NNG": "일반 명사",
        "NNP": "고유 명사", 
        "NR": "수사",
        "NP": "대명사", 
        "VV": "동사", 
        "VA": "형용사",
        "VX": "보조 동사",
        "MM": "보조 형용사", 
        "MAG": "관형사", 
        "MAJ": "부사",
    }
    console.log(typeMap)

    return (
        <div className={styles.box}>
            <Link href={{
                pathname: '/word',
                query: { word: word }
            }}
                passHref
            >
                <p className={styles.word}>{word}</p>
            </Link>
            <Link href={{
                pathname: '/word',
                query: { word: word }
            }}>
                <p className={styles.type}>{"["+typeMap[type]+"]"}</p>
            </Link>
        </div>
    )
}