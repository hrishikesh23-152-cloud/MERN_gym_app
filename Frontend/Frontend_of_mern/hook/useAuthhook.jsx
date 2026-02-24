import { AuthContext } from "../context/Userauthcontext";
import { useContext } from "react";

export const useAuthcontext = ()=>{
    const context = useContext(AuthContext);
    
    return context;
}