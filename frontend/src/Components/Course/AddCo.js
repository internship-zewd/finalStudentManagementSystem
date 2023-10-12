import React, { useState } from "react";
import "../DashContent/DashContent.css";
import axios from "axios";
import validator from "validator";
function AddCo() {
  const [courseName, setCoursename] = useState("");
  const [fee, setFee] = useState("");
  const [duration, setDuration] = useState("");
  const [errors, setErrors] = useState({});

   let handleSubmit=async(e)=>{
        e.preventDefault()
        let validationErrors={}
        let regcourseName=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/ ;

        if(!regcourseName.test(courseName)){
            validationErrors.courseName="Course name should consist of only letter";
        }else if(courseName.length<3){
            validationErrors.courseName="Course name is supposed to be atleast 3 characters"
        }else if(courseName.length>15){
            validationErrors.courseName="Course name should be less than 16 characters"
        }

        if(!fee.trim()){
            validationErrors.fee="Fill in Course fee"
        }else if(fee.length>6){
            validationErrors.fee="fee must not exceed 6 characters."
        }

        if(!duration.trim()){
            validationErrors.duration="Fill in Course duration in days";
        }else if(duration.length>4){
            validationErrors.duration="The duration in days should be less than 4 characters";

        }
        

        setErrors(validationErrors)
        if(Object.keys(validationErrors).length===0){
            alert('Course Added successfully!')
        }
        if(Object.keys(validationErrors).length===0){

        return await axios
        .post("http://localhost:8081/course/create",{courseName,fee,duration})
        .then((res)=>{console.log(res)})
        .catch((err)=>{
            if(err){
                console.log(err)
            }
        })}
        else{
            alert('try again')

            console.log(validationErrors)
           
        }

    if (!regcourseName.test(courseName)) {
      validationErrors.courseName = "Course name should consist of only letter";
    } else if (courseName.length < 3) {
      validationErrors.courseName =
        "Course name is supposed to be atleast 3 characters";
    } else if (courseName.length > 15) {
      validationErrors.courseName =
        "Course name should be less than 16 characters";
    }

    if (!fee.trim()) {
      validationErrors.fee = "Fill in Course fee";
    } else if (fee.length > 6) {
      validationErrors.fee = "fee must not exceed 6 characters.";
    }

    if (!duration.trim()) {
      validationErrors.duration = "Fill in Course duration in days";
    } else if (duration.length > 4) {
      validationErrors.duration =
        "The duration in days should be less than 4 characters";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Course Added successfully!");
    }
    if (Object.keys(validationErrors).length === 0) {
      return await axios
        .post("http://localhost:8081/course/create", {
          courseName,
          fee,
          duration,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          if (err) {
            console.log(err);
          }
        });
    } else {
      alert("try again");

      console.log(validationErrors);
    }
  };

  return (
    <div className="dashContent">
      <div className="overview">
        <div className="title">
          <i className="uil uil-books"></i>
          <span className="text">Course/Add Course</span>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Course Name</span>
                <input
                  type="text"
                  id="courseName"
                  required
                  value={courseName}
                  onChange={(e) => {
                    setCoursename(e.target.value);
                  }}
                  name="courseName"
                  placeholder="Enter Name of course"
                />
                <br />
                <div className="errors">
                  {errors.courseName}
                  <br />
                </div>
              </div>

              <div className="input-box">
                <span className="details">Tuition Fee</span>
                <input
                  type="number"
                  id="fee"
                  required
                  value={fee}
                  onChange={(e) => {
                    setFee(e.target.value);
                  }}
                  name="fee"
                  placeholder="Enter tuition fee"
                />
                <br />
                <div className="errors">{errors.fee}</div>
              </div>

              <div className="input-box">
                <span className="details">Expected Duration in Days</span>
                <input
                  type="number"
                  id="duration"
                  required
                  value={duration}
                  onChange={(e) => {
                    setDuration(e.target.value);
                  }}
                  name="duration"
                  placeholder="Enter duration"
                />
                <br />
                <div className="errors">{errors.duration}</div>
              </div>

              <button
                type="submit"
                className="btn btn-warning btnForAll"
                name="submit"
                onChange={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCo;
