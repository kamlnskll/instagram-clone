import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL
const profileURL = process.env.REACT_APP_BACKEND_PROFILE_URL

// @ts-ignore
const token = JSON.parse(localStorage.getItem('token'))

axios.defaults.headers.common = { 'Authorization':  `Bearer ${token}` }


export const getProfileUsernameandProfilePic = async () => {

    try {
    const data = await axios.get(`${baseURL}${profileURL}/getprofiledata`)
    return data.data
    
    } catch (error) {console.log(error)}
    
    }

export const getProfileId = async () => {

        try {
        const data = await axios.get(`${baseURL}${profileURL}/getprofiledata`)
        return data.data
        
        } catch (error) {console.log(error)}
        
        }

export const getProfileDataToEdit = async () => {

    try {
        const data = await axios.get(`${baseURL}${profileURL}/editprofiledata`)
        return data.data
    } catch (error) {
        console.log(error)
    }

}

export const submitProfileDataEdit = async (fullName: string, userName: string, website: string, bio: string) => {

    try {

        const data = {
            fullName: fullName,
            userName: userName,
            website: website,
            bio: bio
        }

        const updatedData = await axios.put(`${baseURL}${profileURL}/editprofiledata`, data)
        return updatedData.data

    } catch (error) {
        console.log(error)

    }


}