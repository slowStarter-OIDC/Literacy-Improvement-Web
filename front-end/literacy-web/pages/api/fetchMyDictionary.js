import axios from 'axios';

export const addToDictionary = async (word, mean) => {
    const { data } = await axios.get("https://101.79.11.3:9999/addToNote", {
        params: {
            q: word,
            p: mean
        },
    })
}

export const deleteNote = async (id) => {
    const { data } = await axios.post("https://101.79.11.3:9999/deleteFromNote", id)
}
