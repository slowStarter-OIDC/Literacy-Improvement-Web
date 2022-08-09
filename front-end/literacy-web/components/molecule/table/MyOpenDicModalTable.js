import MiddleModalBox from '../../atom/ModalBox/MiddleModalBox';
import styles from './OpenDicModalTable.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { deleteOpenWord } from '../../../lib/openDictionary';

export default function OpenDicModalTable({ children, data, handleCloseClick, onClose }) {
    const [category, setCategory] = useState("");


    const router = useRouter()

    const refreshServerSide = () => {
        router.replace(router.asPath)
    }

    const onClick = ((e) => {
        location.href = `/word?word=${e.target.innerText}`;

    })

    const deleteWord = ((i) => {
        deleteOpenWord(i.id);
        refreshServerSide();
        alert(i.word + '가 삭제되었습니다.');
        onClose();
    })




    return (
        <div className={styles.containner}>
            {
                data.map((item, index) => (
                    <div className={styles.width} key={index}>
                        <MiddleModalBox onClick={onClick}>{item.word.split('-')}</MiddleModalBox>
                        <button onClick={() => deleteWord(item)}>x</button>
                    </div>
                ))
            }
        </div>
    )
}
