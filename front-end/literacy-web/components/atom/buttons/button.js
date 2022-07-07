import styles from './Button.module.css'
export default function Button({ types, label, onClick, size, variant }) {

  return (
    <button className={styles.button} onClick={() => onClick()}>
      <span className="screen-reader-text"></span>
      {label}
    </button>
  )
}
