import './App.css'
const Login=()=>{
    return(
        <>
            <div className='login'>
                <label for='emailId'>Email id:</label>
                <input id='emailId'></input>
                <label for='pass'>Password:</label>
                <input id='pass'></input>
                <button className='logbtn'>login in</button>
            </div>
        </>
    )
}
export default Login