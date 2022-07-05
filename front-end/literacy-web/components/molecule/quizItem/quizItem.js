import { useState } from 'react';
import styles from './QuizItem.module.css';

export default function QuizItem({content, countAnswer, setAnswerList}) {


  let isAnswer = false
  let answer = ""

  const onClickAnswer = (userAnswer) => {
    answer = userAnswer
    if (userAnswer === content.word_mean) {
      isAnswer = true
    } else {
      isAnswer = false
    }
    countAnswer(isAnswer)
    setAnswerList(answer)
  }

  let randomItems = [
    content.word_mean, 
    content.wrong_answer1, 
    content.wrong_answer2, 
    content.wrong_answer3
  ]

  const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
  }
  shuffle(randomItems)
  
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.question}>"{content.word}"의 뜻은?</h2>
        <div className={styles.button_container}>
          {randomItems.map((example, index) => {
            return (
              <a key={index} className={styles.item} onClick={() => onClickAnswer(example)}><p><span>{example}</span></p></a>
            )
          })}
        </div>
      </div>
    </div>
  )
}