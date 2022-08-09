import Button from "../../atom/Button/Button";
import styles from "./PrevButton.module.css";

export default function PrevButton({ prevEvent }) {
  return (
    <div className={styles.container}>
      <Button label={"❮ 이전"} onClick={() => prevEvent()}></Button>
    </div>
  )
}
