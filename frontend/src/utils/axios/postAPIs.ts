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

const post = await axios.post(`${baseURL}${postURL}/createpost`, {
    caption: caption, 
    photo: photo,
 })
console.log(post)
return post

} catch (err) {
    console.log(err)
}


}

export const likePostToggle = async (postId: any) => {

try {
const likePost = await axios.post(`${baseURL}${postURL}/${postId}/togglelike`).then(res => console.log(res.data))

} catch (err) {
    console.log(err)
}


}


// export const sendImgtoCloudinary = async (formData: any) => {

// const data = { image: formData }


// try{
//     const getLink = await axios.post(`${baseURL}${postURL}/upload`, data, { headers: {
//     "Content-Type": "multipart/form-data",
//     }})
//     console.log(getLink)
//     return getLink
// }
//  catch(err) {
//     console.log(err)
// }
// }

