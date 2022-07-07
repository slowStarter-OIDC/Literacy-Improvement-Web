// pages/api/postMorp.js
import axios from "axios";

export const postMorp = async (text) => {
    const access_key = '9c46ad05-ca7a-4326-8a93-64501b67e95b';
    const analysisCode = "wsd_poly";

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
        "http://aiopen.etri.re.kr:8000/WiseNLU", requestJson
    ).then((response) => {
        return response;
    }).catch((error) => console.log(error))

    return data;
}