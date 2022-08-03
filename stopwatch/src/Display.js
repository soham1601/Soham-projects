
import './App.css';
import Button from './Manipulate';

function DisplayTime(props){
     
    
    return(
        <div>
        <div className="btn">
        <span>{(props.time.hrs>=10)? props.time.hrs :"0"+props.time.hrs} :: </span>
        <span>{(props.time.min>=10)? props.time.min :"0"+props.time.min} :: </span>
        <span>{(props.time.sec>=10)? props.time.sec :"0"+props.time.sec} :: </span>
        <span>{(props.time.millisec>=10)? props.time.millisec :"0"+props.time.millisec} </span>
        
    </div>
    <div>
          <Button />
      </div>
    </div>
    );
}
export default DisplayTime; 