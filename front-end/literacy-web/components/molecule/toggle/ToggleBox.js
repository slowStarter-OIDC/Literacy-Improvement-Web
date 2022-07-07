// 토글의 show, hide를 true/false로의 값으로 구현하지 않고 만들기
import { useState, Fragment } from "react";
import styles from './ToggleBox.module.css';

const SearchResults = props => {
    const [shownComments, setShownComments] = useState({});

    const toggleComment = id => {
        setShownComments(prevShownComments => ({
            ...prevShownComments,
            [id]: !prevShownComments[id]
        }));
    };

    return (
        <Fragment>
            {props.search_results ? props.search_results.map(obj => (
                <div key={obj.id}>

                    <div className={styles.cover}>{obj.text}</div>
                    {obj.comment ? (
                        <button className={styles.cover} onClick={() => toggleComment(obj.id)}>Toggle</button>
                    ) : null}
                    {shownComments[obj.id] ? <p>{obj.comment}</p> : null}
                </div>
            )) : <></>}
        </Fragment>
    );
}
export default SearchResults;