// pages/api/fetchQuizItem.js
import axios from "axios";

export const fetchQuizItem = async () => {

  const { data } = await axios.get(
    "http://61.255.221.125:9999/wordQuiz"
  ).then((response) => {
    return response
  })
    .catch((error) => {
      console.log(error)
    });

  if (data === undefined)
    return true;

  return data;
}
