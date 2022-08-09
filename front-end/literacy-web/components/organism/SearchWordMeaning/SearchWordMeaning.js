import Button from '../../atom/Button/Button';
import Search from '../../atom/Search/Search';
import { useState, useCallback } from 'react';
import styles from './SearchWordMeaning.module.css';

export default function SearchWordMeaning(props) {

    //click event
    const [account, setAccount] = useState("");

    const onClick = (() => {
        props.getAccount(account);
        props.getistrue(1);
    })

    //for search
    const getText = ((e) => {
        setAccount(e.target.value);
    })


    return (
        <div className={styles.container}>
            <Search getText={getText}></Search>
            <Button onClick={onClick} label="검색"></Button>
        </div>
    )
}
