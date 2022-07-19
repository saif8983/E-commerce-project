import "./App.css"
import React,{useState} from "react";
function Input(props){
    const {id,updateFunction}=props
    return(
        <input id={id} onChange={(e)=>{
            let value=e.target.value
            updateFunction(value)
        }}></input>
    )
}
const FormAlert=()=>{
        const [userName,updateUserName]=useState()
        const [email,emailUpdate]=useState()
        const [mobileNo,updateMobile]=useState()
    return(
        <div className="main_container">
        <div className="form_container">
        
        <h4>Enter Name {userName} </h4>
        <Input id="userName" updateFunction={updateUserName}/>
        {/* <input type="text" id="input1" onChange={(event)=>{
            let changeInput1=event.target.value
            updateUserName(changeInput1)
        }}/> */}
        <h4>Enter Email {email}</h4>
        <Input id="email" updateFunction={emailUpdate}/>
        {/* <input type="text" id="input2" onChange={(event1)=>{
            let changeInput2=event1.target.value
            emailUpdate(changeInput2)
        }} /> */}
        <h4>Enter Number {mobileNo}</h4>
        <Input id="mobileNo" updateFunction={updateMobile}/>
        {/* <input type="text" id="input3" onChange={(event2)=>{
            let changeInput3=event2.target.value
            updateMobile(changeInput3)
        }}/> */}
        <button onClick={()=>{alert(`${userName} ${email} ${mobileNo}`)}} >Click Me!</button>
        </div>
        </div>
        
    )

}
export default FormAlert