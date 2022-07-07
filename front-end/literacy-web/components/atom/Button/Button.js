import styles from './Button.module.css';

export default function Button(props) {
    return (
        <button className={`${styles.btn3} ${styles.custombtn}`}
            onClick={props.onClick}><span>{props.label}</span></button>
    )
}