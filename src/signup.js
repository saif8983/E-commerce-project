import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
const Signup=()=>{
  const history = useNavigate();

  const [inpval, setInpval] = useState({
      name: "",
      mobile: "",
      email: "",
      password: ""
  })

 

  const [data,setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
      // console.log(e.target.value);


      const { value, name } = e.target;
      // console.log(value,name);


      setInpval(() => {
          return {
              ...inpval,
              [name]: value
          }
      })

  }

  const addData = (e) => {
      e.preventDefault();

      const { name, mobile, email, password } = inpval;

      if (name === "") {
          alert(' name field is requred!');
      } else if (email === "") {
           alert('email field is requred');
      } else if (!email.includes("@")) {
           alert('plz enter valid email addres');
      } else if (mobile === "") {
           alert('date field is requred');
      } else if (password === "") {
           alert('password field is requred');
      } else if (password.length < 5) {
           alert('password length greater five');
      } else {
          console.log("data added succesfully");
          localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
          history("/Login")

      }

  }
    return(
    <>
    <form>
  <div className='SignUp'>
    <label for='UserName' >Name:</label>
    <input id='UserName' type='text' name="name" onChange={getdata}></input>
    <label for='mobileNum'>Mobile no:</label>
    <input id='mobileNum' name="mobile" onChange={getdata}></input>
    <label for='emailId'>Email id:</label>
    <input id='emailId' name="email" onChange={getdata}></input>
    <label for='pass'>Password:</label>
    <input id='pass' type='password' name="password" onChange={getdata}></input>
    <button type='submite' className='btn' onClick={addData} >Register Now</button>
  </div>
  </form>
    </>
    )
  }
export default Signup

