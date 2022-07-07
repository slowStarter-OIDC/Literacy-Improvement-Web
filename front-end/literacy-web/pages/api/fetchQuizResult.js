// pages/api/fetchQuizResult.js
import axios from "axios";

export const fetchQuizResult = async (body) => {

  const { data } = await axios.post(
    "http://61.255.221.125:9999/postQuizResult", body
  ).then((response) => {
    return response
  })
    .catch((error) => {
      console.log(error)
    });

  return data;
}
