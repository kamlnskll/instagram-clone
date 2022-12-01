import { useContext } from 'react'
import { userContext } from '../context/auth.js'

// Used to set token globally, after logging in we save it to the context to access throughout the app.

export const useUserContext = () => {
const context = useContext(userContext)
if(!context){
    throw Error('Context must be used within the appropriate provider.')
}

return context
}