// pages/api/fetchDailyword.js
import axios from "axios";

export const fetchDailyword = async () => {
  

  const { data } = await axios.get(
    "https://10.110.179.10:32188/dailyWords"
  ).then((response) => {
    return response
  })
    .catch((error) => {
      console.log(error)
    });

  return data;
}
