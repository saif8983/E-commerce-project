
import './App.css';
//import InputComponent from './inputClasscomponent';
//import FethcingDataFile from './bakendData'
import { useState } from 'react';
const Clock = () => {
  const [time, Updatetime] = useState()
  setInterval(() => {
    let date = new Date()
    let currentTime = date.toLocaleTimeString()
    Updatetime(currentTime)
  }, 1000)
  return (
    <>
      <div className='clockTime'>
        <h1>My name is Saif</h1>
        <p>time is {time}</p>
      </div>
      
    </>
  );
}


export default Clock;
