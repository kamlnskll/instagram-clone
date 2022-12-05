import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL
const postURL = process.env.REACT_APP_BACKEND_POST_URL

// @ts-ignore
const token = JSON.parse(localStorage.getItem('token'))

axios.defaults.headers.common = { 'Authorization':  `Bearer ${token}` }


export const getAllPosts = async () => {
    try {
        const data = await axios.get(`${baseURL}${postURL}/getallposts`)
        return data.data
        // payload = data
        // console.log(data)
        // return payload
    } catch(error){console.log(error)}
}

export const getSubscribedPosts = async () => {

try {
const data = await axios.get(`${baseURL}${postURL}/getsubscribedposts`)
// console.log(token)
return data.data

} catch (error) {console.log(error)}

}

export const createNewPost = async (caption: string, photo: string, ) => {
try{

const data = {
caption: caption, 
photo: photo,
}

const post = await axios.post(`${baseURL}${postURL}/createpost`, { data })
return post

} catch (err) {
    console.log(err)
}


}


