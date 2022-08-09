//for Navigation bar
import Link from 'next/link';
import { useState } from 'react';
import styles from './Nav.module.css';
import { useRouter } from "next/router";
import Image from 'next/image';

export default function Nav() {
    const [check, setCheck] = useState(false);

    const index = {
        home: "#home",
        dailyWords: "#dailyWords",
        quiz: "#quiz",
        dictionary: "#myDictionary",
        openDictionary: "#openDictionary",
        searchWords: "#searchWords"
    };

    const router = useRouter();

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>

                    <li className={styles.test}><Link href="/"><a className={styles.a}><img className={styles.img} src="/images/picture01.png" alt="home" /></a></Link></li>
                    {router.pathname === '/' ?
                        <>
                            <li className={styles.li}><Link href={index.dailyWords}><a className={styles.a} ><img className={styles.img2} src="/images/daily_word.png" /></a></Link></li>
                            <li className={styles.li}><Link href={index.searchWords} ><a className={styles.a} href={index.searchWords}><img className={styles.img2} src="/images/search_word02.png" /></a></Link></li>
                            <li className={styles.li}><Link href={index.openDictionary}><a className={styles.a} ><img className={styles.img2} src="/images/openDictionary.png" /></a></Link></li>
                        </> :
                        <>
                            <li className={styles.li}><Link href="/"><a className={styles.a} href={index.dailyWords}><img className={styles.img2} src="/images/daily_word.png" /></a></Link></li>
                            <li className={styles.li}><Link href="/"><a className={styles.a} href={index.searchWords}><img className={styles.img2} src="/images/search_word02.png" /></a></Link></li>
                            <li className={styles.li}><Link href="/"><a className={styles.a} href={index.openDictionary}><img className={styles.img2} src="/images/openDictionary.png" /></a></Link></li>
                        </>
                    }
                    <li className={styles.li}><Link href="/quiz"><a className={styles.a} ><img className={styles.img2} src="/images/quiz02.png" /></a></Link></li>
                    <li className={styles.li}><Link href="/dictionary"><a className={styles.a} ><img className={styles.img2} src="/images/myDictionary.png" /></a></Link></li>
                    <li className={styles.li}>
                        <button className={styles.title_ranking} onClick={() => setCheck(!check)}>
                            <img className={styles.img2} src="/images/ranking01.png" />
                        </button>
                        {check ?
                            <div className={styles.body_ranking}>
                                <Link href="/userRank"><a className={styles.a} onClick={() => { setCheck(false) }} >
                                    <img className={styles.user_ranking} src="/images/user_ranking01.png" /></a>
                                </Link>
                                <Link href="/wordRank"><a className={styles.a} onClick={() => { setCheck(false) }} >
                                    <img className={styles.word_ranking} src="/images/word_ranking01.png" /></a>
                                </Link>
                            </div> : <></>}
                    </li>
                </ul>
            </nav>
        </div>
    )
}