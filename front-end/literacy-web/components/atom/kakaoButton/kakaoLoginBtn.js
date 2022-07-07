import Link from 'next/link';
import styles from './KakaoLoginBtn.module.css';

export default function KakaoLoginBtn() {

  return (
    <div className='container'>
      <Link href="/api/kakaoAuth">
        <button className={styles.button}></button>
      </Link>
    </div>
  )
}