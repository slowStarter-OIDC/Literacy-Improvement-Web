import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Seo from '../components/seo/Seo'
import SearchWord from '../components/organism/SearchWordMeaning/SearchWord'
import Dailyword from '../components/organism/page-dailyword/Dailyword';
import DescribePage from '../components/organism/page-describe/DescribePage';
import Logout from '../components/atom/kakaoButton/LogoutBtn'
import OpenDictionary from '../components/organism/page-openDictionary/openDictionary'

export default function Home() {
  return (
    <div className={`${styles.container} ${styles.scroll_container}`}>
      <Seo title="Kotudy" subtitle="문해력 향상을 위해"></Seo>
      <ul>
        <li>
          <a name="searchWords"></a>
          <SearchWord></SearchWord>
        </li>
        <li>
          <DescribePage></DescribePage>
        </li>
        <li>
          <a name="dailyWords"></a>
          <Dailyword></Dailyword>
        </li>
        <li>
          <a name="openDictionary"><OpenDictionary></OpenDictionary></a>
        </li>
        <li><Logout></Logout></li>
      </ul>
    </div>
  )
}
