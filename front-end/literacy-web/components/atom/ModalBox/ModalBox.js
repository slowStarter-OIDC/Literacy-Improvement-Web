import styles from './ModalBox.module.css';

export default function ModalBox({ children }) {

    return (
        <div className={styles.box}>
            {children}
        </div>
    )
}
