import DisplayTime from './Display';
import Button from './Manipulate';
import { useState } from 'react';
import './App.css';

function App() {
  const [time ,setTime]=useState({hrs:0 ,min:0 ,sec:0 ,millisec:0});
  const [interv,setInterv]=useState();
  const [status,setStatus]=useState(0);
  const [lapTimes,setLapTimes]=useState([]);
  const start=()=>{
     run();
     setStatus(1);
     setInterv(setInterval(run,10));
  }
  const stop=()=>{
     clearInterval(interv);
     setStatus(2);
  }
  const reset=()=>{
      clearInterval(interv);
      setStatus(0);
      setTime({hrs:0 ,min:0 ,sec:0 ,millisec:0})
  }
  const resume=()=>start();   

  const lap=()=>{
   clearInterval(interv);
   let newLaps=[...lapTimes];
   newLaps.splice(1,0,{hrs:time.hrs ,min:time.min ,sec:time.sec ,millisec:time.millisec});
   //console.log({lapTimes});
   setLapTimes(newLaps);
  }

  const deleteLap=()=>{
   let newLaps=[...lapTimes];
   newLaps.splice(0,1);
   setLapTimes(newLaps);
  }
  
  const run=()=>{
    if(time.millisec===60){
       time.sec++;
       time.millisec=0;
    }
    if(time.sec===60){
      time.min++;
      time.sec=0;
   }
   if(time.min===60){
    time.hrs++;
    time.min=0;
 }
 time.millisec++;
 return setTime({hrs:time.hrs ,min:time.min ,sec:time.sec ,millisec:time.millisec});
  } 
  
  
  
  return (
    <div>
      
       <DisplayTime time={time} lap={lap} />
       <Button start={start} resume={resume} reset={reset} stop={stop} lap={lap} deleteLap={deleteLap} status={status} lapTimes={lapTimes} />
       
    </div>
  );
}

export default App;
