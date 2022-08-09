import styles from './AfterSearchWordMeaning.module.css';
import Meanbox from "../../molecule/meanbox/Meanbox";

export default function AfterSearchWordMeaning({ sentences }) {


    return (
        <div className={styles.container} >
            {
                sentences.map((item, index) => (
                    <div key={index}>{
                        item.morp.map((word) => (
                            <div className={styles.sentences} key={word.id}>
                                <Meanbox word={word.lemma} type={word.type}></Meanbox>
                            </div>
                        ))}
                    </div>
                ))
            }
        </div>
    );
}
