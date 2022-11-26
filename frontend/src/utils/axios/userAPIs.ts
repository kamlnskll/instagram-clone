import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_BASE_URL
const userURL = process.env.REACT_APP_BACKEND_USER_URL

export const registerNewUser = async (email: string, fullName: string, userName: string, password: string) => {

    try { await axios.post(`${baseURL}${userURL}/register`, {
            email: email,
            fullName: fullName,
            userName: userName,
            password: password
        }).then(function (response) {
            console.log(response.data)
            const token = response.data.token
              // Save user json data to localStorage
            localStorage.setItem('token', JSON.stringify(token))
            return response
   
        })} catch (error) {console.log('This is the error', error)}
    }

export const loginUser = async (userName: string, password: string) => {
try{
    await axios.post(`${baseURL}${userURL}/login`, {
    // email: email,
    userName: userName,
    password: password
    }).then(function (response){
        console.log(response.data)
        const token = response.data.token
        // Save user json data to localStorage
        localStorage.setItem('token', JSON.stringify(token))
        return response
    })

} catch (error) {console.log('This is the error', error)}

}


