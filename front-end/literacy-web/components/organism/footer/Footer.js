//for header banner
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer(props) {
  return (
    <div className={styles.container}>
      <dl className={`${styles.resources_wrap} ${styles.dl}`}>
        {/* 출처표시 */}
        <dt className={styles.dt}>자료제공</dt>
        <dd className={styles.dd}>
          <a href="https://stdict.korean.go.kr/main/main.do" className={styles.dicname}>표준국어대사전</a>
          <span className={styles.dicinfo}>
            <span className={styles.organization}>국립국어원</span>
          </span>
        </dd>

        <dd className={styles.dd}>
          <a href="https://opendict.korean.go.kr/main" className={styles.dicname}>우리말샘</a>
          <span className={styles.dicinfo}>
            <span className={styles.organization}>국립국어원</span>
          </span>
        </dd>
      </dl>
      <div className={styles.footer_inner}>
        <div className={styles.links}>
          <a id="opsContentModife" >콘텐츠 수정 |</a>
          <a id="opsReportError" > 오류 신고</a>
        </div>
        <div className={styles.policy}>
          본 콘텐츠의 저작권은 제공처에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적 책임을 질 수 있습니다.<p></p>
          <div className={styles.copyright}>
            <a className={styles.logo}>
              <Image className={styles.logo} alt="slowStarter logo" src="/images/slowStarter_logo.png" width={100} height={40}></Image>
            </a>
            <em>Copyright ©</em>
            <a target="_blank">slowStarter.</a>
            <span>All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  )
}