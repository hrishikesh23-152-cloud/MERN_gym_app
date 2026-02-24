import { createContext, useReducer,useEffect} from "react";

export const AuthContext = createContext();
export const authreducer = (state, action) => {
    switch (action.type){
        case 'Login':
            return{
                user:action.payload
            }
        case 'Logout':
            return{
                user:null
            }
        default:
            return state;
    }
}
export const AuthcontextProvider = ({ children }) => {
  const [state,dispatch] = useReducer(authreducer,{
    user: null
  })
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'));  
    if(user){
        dispatch({type:'Login',payload:user})
    }
},[])
  return(
    <AuthContext.Provider value={{...state,dispatch}}>
        {children}
    </AuthContext.Provider>
  )
  }