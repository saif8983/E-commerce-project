import "./App.css"
import React from "react";
// const bakenData = () => {
//     return {
//         name: "Mohammed saif ali",
//         age: 27,
//         income: 100000,
//     }
// }
class Fethcingdatafile extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mohammed saif ali",
            age: 27,
            income: 100000,
            tax: 0,
            isLoading: false,

        }
    }
    componentDidMount() {
        console.log("mounting complete")
        this.setState({ isLoading: true });
        setTimeout(() => {
            //const fetchData = bakenData()
            this.setState({  isLoading: false })
        }, 4000)

    }
    async shouldComponentUpdate(nextProps,nextState){
        console.log(nextState.user.income)
        console.log(nextState.tax)
         if(nextState.name==='Mohammed saif ali'){
        return  true
    }
        else{
        return false}
    }
    componentDidUpdate(prevProps,prevState){
        //console.log(prevState.tax)
        if(this.state.tax!==prevState.tax&&this.state.income<=250000){
        this.setState({tax:0})
    }
        
    }
    render() {
        const isLoading = this.state.isLoading
        return (
            <>
                {isLoading ? <p>Loading Backend Data</p> :
                    <>
                        <div className="inputComp1">
                            <label for='name'>Name of User is :</label>
                            <input id='name' onChange={(e)=>{
                                const inputName=e.target.value
                                this.setState({name:inputName})
                            }}></input>
                            <label for='age'>Age of User is :</label>
                            <input id='age' onChange={(e)=>{
                                const inputAge=e.target.value
                                this.setState({age:inputAge})
                            }}></input>
                            <label for='income' >Income of User is:</label>
                            <input id='income' onChange={(e)=>{
                                const inputIncome=e.target.value
                                this.setState({income:inputIncome})
                            }}></input>
                            <p> Tax of User is : {this.state.tax}</p>
                            
                            <button onClick={() => {
                                const income = this.state.income;
                                this.setState({ tax: income * 0.3 })
                            }}>Calculate</button>
                        </div>
                    </>
                }
            </>
        )
    }
}
export default Fethcingdatafile;