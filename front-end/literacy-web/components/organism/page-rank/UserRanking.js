import styles from "./UserRanking.module.css";


export default function UserRanking({userList, userInfo}) {

  let rank_base_url = "https://ssl.nexon.com/s2/game/maplestory/renewal/common/ranking_num0"


  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src="https://ssl.nexon.com/s2/game/maplestory/renewal/common/category_icon08.png"></img>
        <h2>개인 순위</h2>
      </div>
      <div className={styles.content_header}>
        <div className={styles.profile_icon}><img className={styles.img} src={userInfo.image} alt="아이콘 이미지"></img></div>
        <div className={styles.info}>
          <div className={styles.name}><span>{userInfo.userId}</span></div>
          <div className={styles.prev_rank}>
            <span className={styles.ranking}>{userInfo.rank}</span>
            등
          </div>
          <div className={styles.prev_score}><span>{userInfo.point}점</span></div>
        </div>
      </div>
      <table className={styles.table}>
        <caption className={styles.caption}>"사용자" "순위"</caption>
        <colgroup>
          <col width="170"/>
          <col width="180"/>
          <col width="369"/>
          <col width="331"/>
          <col width="*"/>
        </colgroup>
        <thead className={styles.thead}>
          <tr>
            <th align="left" scope="col">순위</th>
            <th align="left" scope="col">프로필</th>
            <th align="left" scope="col">사용자</th>
            <th align="left" scope="col">점수</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {userList.map((user, index) => {
            return (
              <tr className={styles.tr} key={index}>
                <td>
                  {index<=2
                    ?<img src={rank_base_url+(index+1)+".png"}></img>
                    :<span className={styles.rank_num}>{index+1}</span>
                  }
                  </td>
                <td><img className={styles.img} src={user.image}></img></td>
                <td>{user.userId}</td>
                <td>{user.point}점</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}