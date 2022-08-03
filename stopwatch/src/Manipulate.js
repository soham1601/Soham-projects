import React from 'react';
import './App.css';


    
    function Button(props){
        return(
        <div>
            {(props.status===0)?
                <button onClick={props.start}>Start</button>:""
        }
        {(props.status===1)?
            <div>
                <button onClick={props.stop}>Stop </button> 
                <button onClick={props.reset}>Reset </button>
            </div>:""
    }
    {(props.status===2)?
            <div>
             <button onClick={props.resume}>Resume </button> 
             <button onClick={props.lap}>Create Lap</button> 
             <button onClick={props.deleteLap}>Delete Lap</button>  
             <button onClick={props.reset}>Reset </button>
            </div>:""
    }
            
            
            {props.lapTimes &&
            //props.lapTimes.map((lap) => <code>{JSON.stringify(lap)}</code>)}
             props.lapTimes.map((lap) => <code> {lap.hrs} : {lap.min} : {lap.sec} : {lap.millisec} <br></br></code>)}
    </div>
        );
 
    
}
export default Button;