import { useState } from "react";
import { useAuthcontext } from "./useAuthhook";

export const useLogin = ()=>{
     const {dispatch} = useAuthcontext();
    const [error,seterror] = useState(null);
    const [loading,setloading] = useState(null);
   

    const login = async (email,password)=>{
        setloading(true);
        seterror(null);
        const response = await fetch("http://localhost:4000/MERN/Auth/login",{
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
           
            localStorage.setItem('user',JSON.stringify(json))
            dispatch({type:"Login",payload:json})
             setloading(false)
        }
        console.log(json.email);
        
       
    }
     return {login,loading,error}
}