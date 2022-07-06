// pages/api/fetchDailyword.js
import axios from "axios";

export const fetchDailyword = async () => {

  const { data } = await axios.get(
    "http://61.255.221.125:9999/dailyWords"
  ).then((response) => {
    return response
  })
    .catch((error) => {
      console.log(error)
    });

  return data;
}
