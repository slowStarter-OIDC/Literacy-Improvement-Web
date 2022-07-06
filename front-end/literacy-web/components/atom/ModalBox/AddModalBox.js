import styles from './AddModalBox.module.css';

export default function AddModalBox({ children, onClick }) {

    return (
        <div onClick={onClick} className={styles.box}>
            {children}
        </div>
    )
}
