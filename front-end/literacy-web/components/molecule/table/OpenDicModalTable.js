import MiddleModalBox from '../../atom/ModalBox/MiddleModalBox';
import styles from './OpenDicModalTable.module.css';
import Link from 'next/link';
import { useState } from 'react';
import DeleteButton from '../../atom/Button/DeleteButton';

export default function OpenDicModalTable({ data, handleCloseClick }) {
    const [category, setCategory] = useState("");

    const onClick = ((e) => {
        location.href = `/word?word=${e.target.innerText}`;

    })


    return (
        <div className={styles.containner}>
            {
                data.map((item, index) => (
                    <div key={index} className={styles.width}><MiddleModalBox onClick={onClick}>{item.word.split('-')}</MiddleModalBox></div>
                ))
            }
            <p className={styles.arrow_box}>눌러서 검색!</p>
        </div>
    )
}
