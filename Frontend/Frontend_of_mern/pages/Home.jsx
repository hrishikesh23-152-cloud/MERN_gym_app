import { useState,useEffect } from "react";
import { Workoutdetails } from "../component/Workoutdetails";
import { Wokroutform } from "../component/Wform";
import { Useworkoutcontext } from "../hook/useWorkouthook";
import { useAuthcontext } from "../hook/useAuthhook";
export const Home = ()=>{
           const{ Workouts,dispatch} = Useworkoutcontext();
           const {user} = useAuthcontext();
    useEffect(()=>{

        const fetchworkouts = async ()=>{
            const response = await fetch("http://localhost:4000/MERN",{
                headers:{
                    'Authorization':`Bearer ${user.token}`
                }
            })

            const data = await response.json();
            if(response.ok ){
              dispatch({type:'SET_WORKOUTS',payload:data})
            }
            else{
                 
            }
        }
        if(user){
            fetchworkouts();
        }
    },[user])
    return(
        <div className="home">
            <Wokroutform/>
            <div className="work">
                {
                    Workouts && Workouts.map((index)=>{
                        return(
                            <Workoutdetails key={index._id} details = {index}/>
                        )
                    })
                }
            </div>
            
        </div>
    )
}