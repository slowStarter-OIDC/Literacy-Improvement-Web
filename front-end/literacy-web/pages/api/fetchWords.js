
import axios from "axios";

export const fetchWords = async (txt) => {
    const access_key = process.env.OPENDICT_API_KEY;
    let q = '';
    const num = 20;
    const sort = "dict"; // dict / popular
    const method = "include" // exact / include / start 

    if (txt != null) {
        q = txt;
    }
    const { data } = await axios.get(
        "https://opendict.korean.go.kr/api/search", {
        params: {
            key: access_key,
            q: q,
            num: num,
            sort: sort,
            req_type: 'json',
            advanced: 'y',
            method: method,
        }
    }
    ).then((response) => {
        return response;
    }).catch((error) => console.log(error))

    return data;
}