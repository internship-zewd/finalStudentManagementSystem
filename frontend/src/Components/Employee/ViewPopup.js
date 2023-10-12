import {React} from 'react';
// import "../../css/Popup.css";
export const ViewPopup=(props)=> {


  const employeeProp=props.employeeProp
  const setTrigger=props.setTrigger
  console.log(employeeProp)
  // const type=data.employee_type

  

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h5>{employeeProp.employee_type}'s Id: </h5>
        <p> {employeeProp.id_tag}</p>
        <h5>{employeeProp.employee_type}'s name: </h5>
        <p>
          {" "}
          {employeeProp.first_name} {employeeProp.middle_name}{" "}
          {employeeProp.last_name}
        </p>
        <h5>{employeeProp.employee_type}'s email:</h5>
        <p> {employeeProp.email}</p>
        <h5>{employeeProp.employee_type}'s phone:</h5>
        <p> {employeeProp.phone}</p>
        <h5>{employeeProp.employee_type}'s salary:</h5>
        <p> {employeeProp.salary}</p>
        <h5>{employeeProp.employee_type}'s employment date:</h5>
        <p> {employeeProp.createdAt}</p>
        <button
          className="close-btn btn btn-secondary"
          onClick={() => {
            setTrigger(false);
          }}
        >
          close
        </button>
        <button
          className="print-btn btn btn-warning"
          // onClick={() => {
          //   setTrigger(false);
          // }}
        >
          print
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};