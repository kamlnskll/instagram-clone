import { useReducer, createContext, useEffect } from "react";

// createContext for storing to check user authentication
export const userContext = createContext()

// Reducer for login/logout functionality
export function userReducer(state, action) {
switch (action.type) {
case 'LOGIN': {
return { user: action.payload }
}
case 'LOGOUT': {
return { user: null }
}
default: 
return state
}
}

export const UserContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(userReducer, {
        user: null,
    })

// Check local storage for stored token
useEffect(() => {
const token = JSON.parse(localStorage.getItem('token'))
if(token){
    dispatch({type: 'LOGIN', payload: token})
} else{
    console.log('Please login')
}}, [])

return (
<userContext.Provider value={{...state, dispatch}}>
{children}
</userContext.Provider>
)

}