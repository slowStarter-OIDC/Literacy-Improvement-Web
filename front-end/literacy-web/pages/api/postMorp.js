// pages/api/postMorp.js
import axios from "axios";

export const postMorp = async (text) => {
  const access_key = process.env.ETRI_API_KEY;
  const analysisCode = "wsd_poly";

  // axios.defaults.baseURL = 'https://kotudy.netlify.app/' ;

  let txt = "슬로우스타터 우승"

  if (text) {
    txt = text
  }

  const requestJson = {
    'access_key': access_key,
    'argument': {
      'text': txt,
      'analysis_code': analysisCode
    }
  };

  const { data } = await axios.post(
    "http://aiopen.etri.re.kr:8000/WiseNLU", requestJson,
    // {
    //   headers: { 'X-Requested-With': 'XMLHttpRequest' },
    // },
  ).then((response) => {
    return response;
  }).catch((error) => console.log(error))

  return data;
}