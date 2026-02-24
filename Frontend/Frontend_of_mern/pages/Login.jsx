// import React from 'react'
import { useState } from "react"
import {useLogin} from "../hook/useLogin"
export default function Login(){
      const [email,setemail]= useState("");
      const [password,setpassword] = useState("")
      const {login,loading,error} = useLogin();
        const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(email,password);
    await login(email,password)

  }
  return (
    <div className='login'>
       <form onSubmit={handlesubmit} >
      <h3>Log in</h3>
      <div>
        <input type="email" value={email} onChange={(e) => setemail(e.target.value)}placeholder="Email" />
      </div>
      <div>
        <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Password" />
      </div>
      <button disabled={loading}>Log in</button>
      {error && <div className="error_h">{error}</div>}
    </form>
    </div>
  )
}


