import "./popup.css";
import {React} from 'react';
import '../DashContent/DashContent.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export const ViewPopup=(props)=> {
  const studentProp=props.studentProp
  const setTrigger=props.setTrigger
  

  

  return (props.trigger) ? (
    <div className="popup-overlay">
      <div className="popup-content"> 
          <button className="btn btn-info btn-block">Print</button>
        

        <div className="report-card">
          {/* School Logo and Basic Information */}
          <div className="school-info">
            <img src="../../resourse/images" alt="School Logo" />
            <p>ZEWD ACADEMY</p>
            <p>Address</p>
            {/* Add more basic information about the school */}
          </div>

          {/* Student Profile */}
          <div className="profile-info">
            <div className="profile-column">
              <h2>Student Profile</h2>
              <p>Full Name: </p>
              <p>Date of Birth: </p>
              <p>Gender: </p>
            </div>
            <div className="profile-column">
              <p>Course: </p>
              <p>Class:</p>
              <p>Admission Date:</p>
            </div>
            <div className="profile-column">
              {/* Add more student profile information here */}
            </div>
          </div>

          {/* Course and Assessments */}
          <div className="course-info">
            <h2>Grade Report</h2>
            <p>Course Name: Science</p>
            <ul>
              <li>Assessment 1</li>
              <li>Assessment 2</li>
              <li>Assessment 3</li>
              {/* Add more assessments */}
            </ul>
          </div>
        </div>
        {props.children}
      </div>
      </div>
    
  ) : "";
};