import "./popup.css";
import {React} from 'react';
import '../DashContent/DashContent.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const ViewPopup=(props)=> {
  const studentProp=props.studentProp
  const setTrigger=props.setTrigger
  

  

  return (props.trigger)?(
    
    <div className="popup-overlay">
        <div className="popup-content">
      <h5> Id:</h5> {studentProp.id}
      <h5> Full Name:</h5> {studentProp.username} 
      <h5> Email:</h5> {studentProp.email}
      <h5> Phone Number:</h5> {studentProp.phonenumber}
      <h5> Course:</h5> {studentProp.course}
      <h5> Payment Status:</h5> {studentProp.paymentStatus}
      <h5> Admission Date:</h5> {studentProp.addmitiondate}
      <br/>
    <button className="btn btn-info btn-block" onClick={()=>{setTrigger(false)}}>close</button>
    {props.children}
    </div>
    </div>
    
  ):"";
};