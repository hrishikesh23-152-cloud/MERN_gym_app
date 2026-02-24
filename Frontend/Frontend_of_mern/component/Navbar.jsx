import { NavLink } from "react-router-dom"
import { useLogout } from "../hook/useLogout"
import { useAuthcontext } from "../hook/useAuthhook";
import { Navigate } from "react-router-dom";
export const Navbar = ()=>{
    const {user}= useAuthcontext();
    const {logout}=useLogout();
    // console.log(user.email);
    
    const handleclick=()=>{
        
        logout();
    }
    return (
        <header>
            <div className="navsection">
                <NavLink className="navlink" to="/">
                <h1>Gym</h1></NavLink>
                <div className="three" >
                    {
                        user && (<>
                        <span>{user.email}</span>
                        <button onClick={handleclick}>Logout</button>
                        </>)    
                    }
               {
                !user && (<>
                    <NavLink className="navlink" to="/login">Login</NavLink>
                    <NavLink className="navlink" to="/signup">Signup</NavLink>
                </>)
               }
                </div>
            </div>
        </header>
    )
}