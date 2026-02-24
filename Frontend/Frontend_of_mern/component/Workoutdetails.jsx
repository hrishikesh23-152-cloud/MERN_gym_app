import { Useworkoutcontext } from "../hook/useWorkouthook"
import { useAuthcontext } from "../hook/useAuthhook";
export const Workoutdetails = ({details}) =>{
    const {dispatch} = Useworkoutcontext();
    const {user} = useAuthcontext();
    const handledelete = async()=>{
        if(!user){
            
            return
        }
        const response = await fetch('https://mern-gym-app-d753.onrender.com/MERN/' + details._id,{
            method:'DELETE',
            headers:{
                'Authorization':`Bearer ${user.token}`
            }
        })
        const data = await response.json();
        if(response.ok){
            console.log("Deleted successfully",data)
            dispatch({type:'DELETE_WORKOUT',payload:data})
        }
    }
    return(
        <div className="details">
            <h3>{details.title}</h3>
            <p>Load:{details.load}</p>
            <p>Reps:{details.reps}</p>
            <p>Crated {details.createdAt}</p>
            <button className="b" onClick={handledelete}>Delete</button>
        </div>
    )

}
