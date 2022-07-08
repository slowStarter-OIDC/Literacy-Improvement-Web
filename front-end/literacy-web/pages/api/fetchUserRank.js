// pages/api/fetchUserRank.js
import axios from "axios";

export const fetchUserRank = async (code) => {

  const { data } = await axios.post(
    "http://61.255.221.125:9999/userRank/"
  ).then((response) => {
    return response
  })
    .catch((error) => {
      console.log(error)
    });

  return data;
}
