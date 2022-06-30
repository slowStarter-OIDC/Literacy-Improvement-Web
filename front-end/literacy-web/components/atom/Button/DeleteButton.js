import { deleteOpen } from '../../../lib/openDictionary';
import styles from './DeleteButton.module.css';

export default function DeleteButton(props) {
  return (
    <button className={styles.button_delete} onClick={() => { deleteOpen(props.data) }}>-</button>
  )
}