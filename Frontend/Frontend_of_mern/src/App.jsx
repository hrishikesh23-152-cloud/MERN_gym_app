import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Navbar } from "../component/Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import {Navigate} from "react-router-dom";
import { useAuthcontext } from "../hook/useAuthhook";
function App() {
  const {user} = useAuthcontext();
  return(
    <div className="Hero">
      <BrowserRouter>
      <Navbar/>
      <div className="pages">
        <Routes>
          <Route path="/" element={user ? <Home/> : <Navigate to ="/login" />}/>
          <Route path="login" element={!user ? <Login/> : <Navigate to="/"/>}/>
          <Route path="signup" element={!user ? <Signup/> : <Navigate to="/"/>}/>  
          
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App
