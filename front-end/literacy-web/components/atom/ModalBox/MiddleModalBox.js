import styles from './MiddleModalBox.module.css';

export default function MiddleModalBox({ children, onClick }) {

    return (
        <div className={styles.box} onClick={onClick}>
            {children}
        </div>
    )
}
