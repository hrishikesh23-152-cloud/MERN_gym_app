import { useState } from "react";
import { useAuthcontext } from "./useAuthhook";

export const useSignup = ()=>{
     const {dispatch} = useAuthcontext();
    const [error,seterror] = useState(null);
    const [loading,setloading] = useState(null);
   

    const signup = async (email,password)=>{
        setloading(true);
        // seterror(null);
        const response = await fetch("https://mern-gym-app-d753.onrender.com/MERN/Auth/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email,password})
        })
        const json = await response.json()
        if(!response.ok){
            setloading(false)
            seterror(json.error)
        }
        if(response.ok){
            setloading(false)
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type:"Login",payload:json})
        }
       
    }
     return {signup,loading,error}
}
