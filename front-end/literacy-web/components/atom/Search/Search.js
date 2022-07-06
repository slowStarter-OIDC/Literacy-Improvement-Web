import styles from './Search.module.css';
import { useState, useCallback } from 'react';

export default function Search(props) {


    return (
        <div className={styles.container}>
            <input type="text" className={styles.input} placeholder="입력해주세요" onChange={props.getText} />
        </div>
    )
}