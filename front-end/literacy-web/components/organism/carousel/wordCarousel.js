import React, { useEffect, useState } from "react";
import styles from "./WordCarousel.module.css";
import Card from "../../molecule/card/Card";
import PrevNextButton from "../../molecule/buttons/PrevNextButton";

export default function WordCarousel({ slideItems }) {

  const [slideTotal, setSlideTotal] = useState(slideItems.length);
  const [slideCurrent, setSlideCurrent] = useState(0);


  const slideLeft = () => {
    if (slideCurrent < 1) {
      setSlideCurrent(slideTotal - 1)
    }
    else {
      setSlideCurrent(slideCurrent - 1)
    }
  }

  const slideRight = () => {
    if (slideCurrent === slideTotal - 1) {
      setSlideCurrent(0)
    }
    else {
      setSlideCurrent(slideCurrent + 1)
    }
  }

  return (
    <div className={`${styles.box} ${styles.container}`}>
      {slideItems.map((slide, index) => {
        return (
          <div key={index} className={index === slideCurrent
            ? `${styles.slide} ${styles.active}`
            : `${styles.slide}`}
          >
            <Card content={slide}></Card>
          </div>
        )
      })}
      <div className={styles.btn_prevnext}>
        <PrevNextButton prevEvent={() => slideLeft()} nextEvent={() => slideRight()} />
      </div>
    </div>
  )
}
