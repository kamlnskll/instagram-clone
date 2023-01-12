import jwtDecode from "jwt-decode"

export const checkIfValidToken = () => {
    const userToken: any = localStorage.getItem('token')
    const { exp }: any = jwtDecode(userToken)
    // @ts-ignore
    if(exp && userToken && Date.now() >= exp * 1000){
      localStorage.removeItem('token')
      window.location.reload()
    } else {
      return
    }
  }
  