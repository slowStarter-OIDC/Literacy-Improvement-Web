// pages/api/fetchKakaoLogin.js
import axios from "axios";

export const fetchKakaoLogin = async (code) => {

  const { data } = await axios.get(
    "http://61.255.221.125:9999/kakaoAuth/", {
      params: {
        code: code
      }
    }
  ).then((response) => {
    return response
  })
    .catch((error) => {
      console.log(error)
    });

  return data;
}
