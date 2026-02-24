import React from 'react'
import { useState } from "react"
import { useSignup } from '../hook/useSignup';
export default function Signup() {
  const {signup,loading,error} = useSignup();
  const [email,setemail]= useState("");
  const [password,setpassword] = useState("")
  const handlesubmit = async  (e) => {
    e.preventDefault();
    // console.log(email,password);
    await signup(email,password);
    
  }
  return (
    <div className='signup'> 
   <form onSubmit={handlesubmit} >
      <h3>Sign up</h3>
      <div>
        <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email'/>
      </div>
      <div>
        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Password'/>
      </div>
      <button disabled ={loading}>Register</button>
      {error && <div className='error_h'>{error}</div>}
    </form>
    </div> 
   
  )
}


