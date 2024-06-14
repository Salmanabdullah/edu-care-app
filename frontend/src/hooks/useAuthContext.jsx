import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if(!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  const logout = () => {
    context.dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('user');
  };

  return { ...context, logout };
}