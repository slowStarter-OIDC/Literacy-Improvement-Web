// pages/api/getMyDictionary.js
import axios from "axios";

export const getMyDictionary = async () => {

  const { data } = await axios.get("http://61.255.221.125:9999/myPage")
    .then((response) => {
      return response
    })
    .catch((error) => {
      console.log(error)
    });

  return data;
}