import './App.css'
const Signup=()=>{
    return(
    <>
  <div className='SignUp'>
    <label for='UserName'>Name:</label>
    <input id='UserName' type='text'></input>
    <label for='fatherName'>Father Name:</label>
    <input id='fatherName' type='text'></input>
    <label for='education'>Education:</label>
    <input id='education'></input>
    <label for='mobileNum'>Mobile no:</label>
    <input id='mobileNum'></input>
    <label for='emailId'>Email id:</label>
    <input id='emailId'></input>
    <label for='pass'>Password:</label>
    <input id='mobileNum' type='password'></input>
    <button type='summite' className='btn'>Register Now</button>
  </div>
    </>
    )
  }
export default Signup

