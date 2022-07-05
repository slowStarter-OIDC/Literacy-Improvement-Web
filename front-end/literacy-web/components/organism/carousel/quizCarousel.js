import React, { useEffect, useState } from "react";
import styles from "./QuizCarousel.module.css";
import PrevNextButton from "../../molecule/buttons/prevnextButton";
import PrevButton from "../../molecule/buttons/prevButton";
import QuizItem from "../../molecule/quizItem/quizitem";
import Button from "../../atom/Button/Button";
import { useSelector } from 'react-redux';
import { useMutation } from "react-query";
import { fetchQuizResult } from "../../../pages/api/fetchQuizResult";
import { useRouter } from "next/router";


export default function QuizCarousel({slideItems}) {

  const email = useSelector((state) => state.authSlice.email)
  const [slideTotal, setSlideTotal] = useState(slideItems.length-1);
  const [slideCurrent, setSlideCurrent] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isSubmitAnswer, setIsSubmitAnswer] = useState(false);
  const router = useRouter();


  const mutation = useMutation(score => {
    let body = {score: score}

    return fetchQuizResult(body)
  })

  let answerList = []
  answerList.length = slideTotal+1

  const slideLeft = () => {
    if (slideCurrent < 1) {
      setSlideCurrent(slideTotal)
    }
    else {
      setSlideCurrent(slideCurrent - 1)
    }
  }

  const slideRight = () => {
    if (slideCurrent > slideTotal) {
      setSlideCurrent(slideTotal + 1)
    }
    else {
      setSlideCurrent(slideCurrent + 1)
    }
  }

  const countAnswer = (isAnswer) => {
    {isAnswer? setCorrectCount(correctCount + 1) : {}}
    slideRight()
  }

  const setAnswerList = (userAnswer) => {
    answerList[slideCurrent] = userAnswer
  }

  const submitAnswer = () => {
    // 퀴즈 결과 제출, 포인트 제출 (backendAPI-post로 전송)
    setIsSubmitAnswer(true)
    mutation.mutate(correctCount)
  }

  const quizSummary = (
    <div className={styles.container_summary}>
      <div className={styles.summary}>
        <h2>{correctCount}점</h2>
        <h2>{correctCount}/{slideTotal+1}</h2>
      </div>
      <ul>
        {slideItems.map((slide, index) => {
          return (
            <li key={String(index)} className={styles.answer}>{slide.word} - {slide.word_mean}</li>
          )
        })}
      </ul>
    </div>
  )
  
  const gotoHome = () => {
    router.push('/')
  }

  return (
    <div className={`${styles.box} ${styles.container}`}>
      <div className={styles.content}>
        <div>
          {(slideCurrent<=slideTotal)?
          // 퀴즈가 진행중
            slideItems.map((slide, index) => {
              return (
                <div key={slide.word+index} className={index === slideCurrent 
                  ? `${styles.slide} ${styles.active}` 
                  : `${styles.slide}`}
                >
                  <QuizItem
                  content={slide} 
                  setAnswerList={setAnswerList} 
                  countAnswer={countAnswer}>
                  </QuizItem>
                </div>
              )
            }):
            // 퀴즈가 끝나면
            <div className={styles.end_quiz_container}>
              <h3 className={styles.text}>퀴즈가 종료되었습니다!</h3>
              {isSubmitAnswer
              ?quizSummary
              :<Button className={styles.submit_button} label="제출하기" onClick={() => submitAnswer()}></Button>
              }
            </div>
          }
        </div>
        <div className={styles.btn_prevnext}>
          {slideCurrent>slideTotal
          ?(isSubmitAnswer?<Button label="홈으로" onClick={() => gotoHome()}></Button>:<PrevButton prevEvent={() => slideLeft()}/>)
          :<PrevNextButton prevEvent={() => slideLeft()} nextEvent={() => slideRight()}/>
          }
        </div>
      </div>
    </div>
  )
}
