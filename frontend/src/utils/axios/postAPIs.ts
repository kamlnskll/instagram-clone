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

export const checkIfLikedByUser = async (postId: any) => {

    try {
    const checkLikes = await axios.get(`${baseURL}${postURL}/${postId}/checklikes`)
    return checkLikes.data    
    } catch (err) {
        console.log(err)
    }
    
    
    }

export const deletePost = async (postId: any) => {
try{
const deletePost = await axios.delete(`${baseURL}${postURL}/${postId}/deletepost`).then(res => console.log(res.data))
return deletePost

} catch(err){
    console.log(err)
}
}

export const editPost = async (postId: any, caption: string) => {

try{
const editPost = await axios.put(`${baseURL}${postURL}/${postId}/editpost`, {
    caption: caption
}).then(res => console.log(res))
return editPost

} catch (err) {
    console.log(err)
}

}

export const getPostById = async (postId: any) => {

try {
const getPost = await axios.get(`${baseURL}${postURL}/post/${postId}`)
return getPost.data
} catch(err) {

    console.log(err)

}

}

