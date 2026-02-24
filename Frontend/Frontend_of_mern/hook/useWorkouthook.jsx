import { WorkoutContext } from "../context/Workoutcontext";
import { use, useContext } from "react";

export const Useworkoutcontext = ()=>{
    const context = useContext(WorkoutContext);
    
    return context;
}