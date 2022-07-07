import styles from './Loading.module.css';

export default function Loading(props) {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3 className={styles.title}>{props.label}</h3>
        <div className={styles.load_wrapp}>
          <div className={styles.load_4}>
            <div className={styles.ring_1}></div>
          </div>
        </div>
      </div>
    </div>
  )
}