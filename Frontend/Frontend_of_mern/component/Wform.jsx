import { use, useState } from "react"
import { Useworkoutcontext } from "../hook/useWorkouthook";
import { useAuthcontext } from "../hook/useAuthhook";
export const Wokroutform = () =>{
    const [title,settitle] = useState("");
    const [load,setload] = useState("");
    const [reps,setrips] = useState("");
    const [error,seterror] = useState(null)
    const { dispatch} = Useworkoutcontext();
    const {user} = useAuthcontext();
    const submitfu = async(e)=>{
        e.preventDefault()
        if(!user){
            seterror("You must be logged in")
            return
        }
        console.log(user)
        const  values = {title,load,reps};
            const response = await fetch("https://mern-gym-app-d753.onrender.com/MERN",{
                method:"POST",
                body:JSON.stringify(values),
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':`Bearer ${user.token}`
                }
            })
            const json = await response.json()
            if(!response.ok){
                seterror(json.error)
            }
            if(response.ok){
                dispatch({type:'CREATE_WORKOUT',payload:json})
                seterror(null);
                setload(0)
                setrips(0)
                settitle("")
                console.log("OK")
            }
    }
    return(
        <form action="" className="form" onSubmit={submitfu}>
            <h3>Workout Form</h3>
            <input type="text" onChange={(e)=>settitle(e.target.value)} value={title} id="title" placeholder="Title" /> <br />
            <input type="number" name="" id="load" onChange={(e)=>setload(e.target.value)} value={load} placeholder="Load" /><br/>
            <input type="number" name="" id="reps" onChange={(e)=>setrips(e.target.value)} value={reps} placeholder="Reps" /><br/><br/>
            <button className="btn1">Add Details</button>
            {error &&   <div className="error_h" >{error}</div>}
        </form>
    )
}
