
import { BrowserRouter as Router, Route, Link,Routes} 
        from "react-router-dom";
import "./App.css"
import Login from "./login";
import Signup from "./signup";
import Details from "./Detauls";
const Navbar=()=>{
    return(
    <>
    <Router>
    <div className='Nave_Bar' >
     <h3  >Positronx</h3>
     <p ><Link to="login">log in</Link></p>
     <p ><Link to="signUp">sign up</Link></p>
     </div>
    <Routes>
            <Route exact path="login" element={<Login/>} />
          <Route exact path="signUp" element={<Signup />} /> 
          <Route path='/details' element={<Details />} />
          </Routes>
   
     </Router>
    </>
    
    )
  }
  export default Navbar
