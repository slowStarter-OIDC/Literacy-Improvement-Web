// pages/api/fetchKakaoLogin.js
import axios from "axios";

export const fetchKakaoLogin = async (code) => {

  const { data } = await axios.get(
    "https://175.45.193.46:32188/kakaoAuth/", {
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
