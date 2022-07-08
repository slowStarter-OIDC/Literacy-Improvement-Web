// pages/api/fetchWordRank.js
import axios from "axios";

export const fetchWordRank = async () => {

  const { data } = await axios.post(
    "http://61.255.221.125:9999/wordRank"
  ).then((response) => {
    return response
  })
    .catch((error) => {
      console.log(error)
    });

  return data;
}
