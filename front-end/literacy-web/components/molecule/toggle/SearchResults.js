// 체크박스로 만든 토글

import { useState, Fragment } from "react";
import styles from "./SearchResults.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { addCategory } from "../../../store/modules/myOpenDictSlice";

const SearchResults = ({ setCategory }) => {
    const [content, setContent] = useState("")
    const [userInput, setUserInput] = useState("");
    const categoryList = useSelector((state) => state.myOpenDictSlice.category)
    const dispatch = useDispatch()


    const changeCategory = ((e) => {
        setContent(() => e.target.innerText)
        setCategory(() => e.target.innerText)
    })

    const clickAddCategory = () => {
        dispatch(addCategory(userInput))
    }

    return (
        <div>
            {content != "" ? <label id="ttt" htmlFor={styles.toggle_button} className={styles.toggle_button}>
                {content}</label> : <label id="ttt" htmlFor={styles.toggle_button} className={styles.toggle_button}>
                카테고리 종류▼</label>}
            <input type="checkbox" id={styles.toggle_button} />
            <div id={styles.toggle_contents}>
                <label htmlFor={styles.toggle_button} className={styles.close_button}>X</label>
                {categoryList?.map((item, index) => {
                    return (
                    <div className={styles.selection} key={index} onClick={(e) => changeCategory(e)}>{item}
                    </div>)
                })}
                <div className={styles.input_box}>
                    <input className={styles.input} type="text" onChange={(e) => setUserInput(e.target.value)}></input>
                    <button className={styles.add_button} onClick={() => clickAddCategory()}>+</button>
                </div>
                
            </div>
        </div >
    );
}
export default SearchResults;