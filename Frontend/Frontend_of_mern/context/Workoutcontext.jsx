import { createContext,useReducer } from "react";
export const WorkoutContext = createContext();

export const WorkoutReducer = (state,action)=>{
    switch(action.type){
        case 'SET_WORKOUTS':
            return{
                Workouts:action.payload
            }
        case 'CREATE_WORKOUT':
            return{
                Workouts:[action.payload,...state.Workouts]
            }
        case 'DELETE_WORKOUT':
            return{
                Workouts:state.Workouts.filter((w)=>w._id !== action.payload._id)
            }
        default:
            return state;
    }
}
export const WorkoutContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(WorkoutReducer,{
        Workouts:[]
    })
    return(
        <WorkoutContext.Provider value ={{...state,dispatch}}>
            {children}
        </WorkoutContext.Provider>
    )
}
