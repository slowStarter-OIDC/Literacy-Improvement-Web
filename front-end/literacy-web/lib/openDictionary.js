import axios from 'axios';

export const addToOpen = async (body) => {
    const { data } = await axios.get("http://61.255.221.125:9999/addToOpen", {
        params: {
            morpheme: body.morpheme,
            word: body.word,
            mean: body.mean,
            category: body.category
        }
    })
}



export const deleteOpenWord = async (id) => {
    const body = {
        id: id
    }
    const { data } = await axios.post("http://61.255.221.125:9999/deleteFromOpen", body)
}

export const deleteOpen = async (category) => {
    const { data } = await axios.get("http://61.255.221.125:9999/deleteOpenCategory", {
        params: {
            category: category
        }
    })
}


