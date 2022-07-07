import axios from 'axios';

export const addToDictionary = async (word, mean) => {
    const { data } = await axios.get("http://61.255.221.125:9999/addToNote", {
        params: {
            q: word,
            p: mean
        },
    })
}

export const deleteNote = async (word) => {
    const { data } = await axios.get("http://61.255.221.125:9999/deleteFromNote", {
        params: {
            word: word,
        },
    })
}

