import "./popup.css";
import {React,useState,useEffect} from 'react';
import '../DashContent/DashContent.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export const ViewPopup=(props)=> {
  const {name,description,time,notify,date,status,id}=props.reminderProp
  const setTrigger=props.setTrigger
  const[complete,setComplete]=useState("")
  const[notifyMe,setNotifyMe]=useState("")
  useEffect(()=>{
    if(status===true){
      setComplete("Completed")

    }else{
      setComplete("Incomplete")
    }
    if(notify===true){
      setNotifyMe("On")
    }else{
      setNotifyMe("Off")
    }


  
  })
  

  return (props.trigger)?(
    
    <div className="popup-overlay">
        <div className="popup-content">
      <h2> Name:</h2> {name} 
      <h2> Description:</h2> {description}
      <h2> Date:</h2> {date}
      <h2> Time:</h2> {time}
      <h2> Status:</h2>{complete}
      <h2>Notification</h2>{notifyMe}

    
      <br/>
    <button className="btn btn-info btn-block" onClick={()=>{setTrigger(false)}}>close</button>
    {props.children}
    </div>
    </div>
    
  ):"";
};