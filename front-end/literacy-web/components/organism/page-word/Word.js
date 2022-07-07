import WordList from "../../molecule/wordlist/WordList";
import styles from "./Word.module.css";
import { addToDictionary } from "../../../lib/myDictionary";


export default function Word({ word, words }) {

    const addMyDictionary = (addWord, addMean) => {
        addToDictionary(addWord, addMean);
        
        alert(`"` + addWord + `"가 추가되었습니다!`)
    }


    return (
        <div className={styles.container}>
            <div className={styles.main_content}>
                <div className={styles.title}>
                    {word}
                </div>
                <ul className={styles.item_cover}>
                    {
                        words.map((item, index) => (
                            <div key={index}>
                                <li><WordList word={item.word} content={item.sense[0]} addMyDictionary={addMyDictionary} index={index} ></WordList></li>
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
