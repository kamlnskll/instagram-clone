import { useUserContext } from "./useUserContext";
import { useNavigate } from "react-router";

export const logoutUser = () => {

    const { dispatch } = useUserContext
    const navigate = useNavigate

const logout = () => {

// Remove stored token and dispatch logout to context, then navigate
localStorage.removeItem('token')
dispatch ({type: 'LOGOUT'})


}

return { logout }

}