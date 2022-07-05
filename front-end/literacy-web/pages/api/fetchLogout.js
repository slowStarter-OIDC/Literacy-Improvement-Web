// pages/api/fetchKakaoLogin.js
import axios from "axios";
import { removeCookies } from "cookies-next";

export const fetchLogout = async () => {
  removeCookies('userID');

  const { data } = await axios.post(
    "http://61.255.221.125:9999/logout"
  ).then((response) => {
    return response
  })
    .catch((error) => {
      console.log(error)
    });

  return data;
}
