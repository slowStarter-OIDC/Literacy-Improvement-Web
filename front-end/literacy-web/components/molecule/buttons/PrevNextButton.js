import Button from "../../atom/Button/Button";
import styles from "./PrevNextButton.module.css";

export default function PrevNextButton({ prevEvent, nextEvent }) {
  return (
    <div className={styles.container}>
      <Button label={"❮"} onClick={() => prevEvent()}></Button>
      <Button label={"❯"} onClick={() => nextEvent()}></Button>
    </div>
  )
}
