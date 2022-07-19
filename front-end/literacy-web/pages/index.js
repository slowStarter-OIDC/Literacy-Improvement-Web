import styles from '../styles/Home.module.css';
import DescribePage from '../components/organism/page-describe/describePage';
import Dailyword from '../components/organism/page-dailyword/dailyword';
import OpenDictionary from '../components/organism/page-openDictionary/openDictionary';
import SearchWord from '../components/organism/SearchWordMeaning/searchWord';
import Logout from '../components/atom/kakaoButton/LogoutBtn';
import Seo from '../components/seo/Seo';

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
          <a name="openDictionary"></a>
          <OpenDictionary></OpenDictionary>
        </li>
        {/* <li>
          <input type="text" value={searchText} onChange={(e) => handleSearchText(e)} />
          <button label="검색">
            <Link href={`/testNaverSearch/${searchText}`}><a>네이버API</a></Link>
          </button>
        </li> */}
        <li><Logout></Logout></li>
      </ul>
    </div>
  )
}
