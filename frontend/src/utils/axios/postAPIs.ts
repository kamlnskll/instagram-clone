import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL
const postURL = process.env.REACT_APP_BACKEND_POST_URL

export const getAllPosts = async () => {
    try {
        const data = await axios.get(`${baseURL}/posts/getallposts`)
        return data.data
        // payload = data
        // console.log(data)
        // return payload
    } catch(error){console.log(error)}
}

