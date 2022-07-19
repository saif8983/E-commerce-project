import "./App.css"
import React from "react";

class InputComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "saif",
            email: "saif@gmail",
            mobile: "8983",
            isLodingData:true
        }
    }
componentDidMount(){
    console.log("mounting complete")
    setTimeout(()=>{
        this.setState({isLodingData:false})},4000)

}
// shouldComponentUpdate(nextProps,nextState){
//     console.log("first state",this.state.username)
//     console.log("last state ",nextState)
// if(nextState.username==='asim')
//     return true  
//     else
//     return false
// }
// componentDidUpdate(){
//     console.log("mounting updated")
// }
    render() {
        return (
            <>
                 <div className="inputComp"> 
                 <h1> data is loading {`${this.state.isLodingData}`}</h1>
                    <h4>Enter Name {this.state.username} </h4>
                    <input id="input1" onChange={(event) => {
                        let changeInput1 = event.target.value
                        this.setState({ username: changeInput1 })

                    }}></input>
                     <h4>Enter Email {this.state.email}</h4>

                    <input type="text" id="input2" onChange={(event1) => {
                        let changeInput2 = event1.target.value
                        this.setState({ email: changeInput2 })
                    }} ></input>
                    <h4>Enter Number {this.state.mobile}</h4>

                    <input type="text" id="input3" onChange={(event2) => {
                        let changeInput3 = event2.target.value
                        this.setState({ mobile: changeInput3 })
                    }}></input> 
                 </div> 
            </>
        )
    }
}
export default InputComponent