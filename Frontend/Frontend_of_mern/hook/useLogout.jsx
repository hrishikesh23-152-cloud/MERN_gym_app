import { useAuthcontext } from "./useAuthhook";
import { Useworkoutcontext } from "./useWorkouthook";
export const useLogout = () => {
const {dispatch} = useAuthcontext();
const {dispatch:wdispatch} = Useworkoutcontext();
    const logout = () => {
        localStorage.removeItem('user');
        dispatch({type:'Logout'})
        wdispatch({type:'SET_WORKOUTS',payload:null})
    }
    return {logout};
}