import React, { useState, useEffect } from "react";
import "../DashContent/DashContent.css";
import validator from "validator";
import "./Addst.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function AddSt() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(null);
  const [phonenumber, setPhonenumber] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [admissionDate, setAdmissionDate] = useState("");
  const [course, setCourse] = useState(null);
  const [classs, setClasss] = useState(null);
  const [dob, setDob] = useState("");
  const [registno, setRegistno] = useState("");
  const [errors, setErrors] = useState("");
  const [transcript, setTranscript] = useState(null);
  const [classFetched, setClassFetched] = useState([]);
  const [courseFetched, setCourseFetched] = useState([]);

  useEffect(() => {
    getCourse();
  }, []);

  const getCourse = async () => {
    await axios
      .get("http://localhost:8081/course/getAll")
      .then((res) => {
        console.log(res.data);
        setCourseFetched(res.data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };

  const getClass = async (id) => {
    console.log("Im in here");
    console.log(id);
    await axios
      .get(`http://localhost:8081/class_room/getByCourse/${id}`)
      .then((res) => {
        setClassFetched(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        }
      });
  };

  const handleCourse = (e) => {
    setCourse(e);
    getClass(e);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (gender === null) {
      validationErrors.gender = "Pick the student's gender";
    }
    if (!username.trim()) {
      validationErrors.username = "Fill in the student's full name";
    } else if (username.length < 8) {
      validationErrors.username =
        "Student's fullname is supposed to be atleast 3 characters";
    } else if (username.length > 45) {
      validationErrors.username =
        "Estudent's fullname should be less than 45 characters";
    }
    if (!email.trim()) {
      validationErrors.email = "Fill in student's email";
    } else if (!regEmail.test(email)) {
      validationErrors.email = "email is not in the correct format";
    }

    // else if(!regPassword.test(password)){
    //     validationErrors.password="Password should contains one Capital letter, should start with special character @ or #"
    // }

    if (!phonenumber.trim()) {
      validationErrors.phone = "Fill in student's phone number";
    }

    if (paymentStatus === null) {
      validationErrors.paymentStatus = "Pick the student's payment status";
    }
    // if(!admissionDate.trim()){
    //     validationErrors.admissionDate="Fill in student's admissionDate"
    // }else if(!validator.isDate(admissionDate)){
    //     validationErrors.admissionDate="Enter a valid date"
    // }
    if (course === null) {
      validationErrors.course = "Pick the course the student is enrolling to";
    }
    if (classs === null) {
      validationErrors.class = "Assign the student in a class";
    }

    if (!dob.trim()) {
      validationErrors.dob = "Fill in student's date of birth";
    } else if (!validator.isDate(dob)) {
      validationErrors = "Enter a valid date";
    }
    // if(transcript===null){
    //     validationErrors.transcript="Attach student's transcript file";
    // }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Registered Successfully!");
    }
    if (Object.keys(validationErrors).length === 0) {
      return await axios
        .post("http://localhost:8081/student", {
          username,
          email,
          phonenumber,
          gender,
          paymentStatus,
          admissionDate,
          course,
          classs,
          dob,
          registno,
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
    }
  };

  return (
    <div className="dashContent">
      <div className="overview">
        <div className="title">
          <i className="uil uil-graduation-cap"></i>
          <span className="text">Student/Add Student</span>
        </div>
        <div className="container">
          <div className="content">
            <form onSubmit={handleSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter your name"
                    required
                    minLength={6}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                  <div className="errors">
                    {errors.username}
                    <br />
                  </div>
                </div>

                <div className="input-box">
                  <span className="details">Email </span>
                  <input
                    type="email"
                    placeholder="Enter your Email "
                    name="email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <div className="errors">
                    {errors.email}
                    <br />
                  </div>
                </div>

                <div className="input-box">
                  <span className="details">Mobile Number</span>
                  <input
                    type="text"
                    placeholder="09--------"
                    name="phonenumber"
                    required
                    maxlength="10"
                    onChange={(e) => {
                      setPhonenumber(e.target.value);
                    }}
                  />
                  <div className="errors">
                    {errors.phonenumber}
                    <br />
                  </div>
                </div>

                <div className="input-box">
                  <span className="details">Gender</span>
                  <select
                    required
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    name="gender"
                  >
                    <option value={null} selected="selected">
                      Select
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <div className="errors">
                    {errors.gender}
                    <br />
                  </div>
                </div>

                <div className="input-box">
                  <span className="details">Course</span>
                  <option value={null} selected="selected">
                    Select Course
                  </option>
                  <select
                    required
                    onChange={(e) => {
                      handleCourse(e.target.value);
                    }}
                    name="course"
                  >
                    {courseFetched.map((cors) => (
                      <option value={cors.id}>{cors.name}</option>
                    ))}
                  </select>
                  <div className="errors">
                    {errors.course}
                    <br />
                  </div>
                </div>

                <div className="input-box">
                  <span className="details">Class</span>
                  <select
                    required
                    onChange={(e) => {
                      setClasss(e.target.value);
                    }}
                    name="classs"
                  >
                    <option value={null} selected="selected">
                      Select Class
                    </option>
                    {classFetched.map((clas) => (
                      <option value={clas.id}>
                        {clas.full_identification}
                      </option>
                    ))}
                  </select>

                  <div className="errors">
                    {errors.class}
                    <br />
                  </div>
                </div>

                <div className="input-box">
                  <div className="gender-details">
                    <span className="details">Payment Status</span>
                    <select
                      required
                      onChange={(e) => {
                        setPaymentStatus(e.target.value);
                      }}
                      name="paymentStatus"
                    >
                      <option value={null}>select one</option>
                      <option value="half">Half_Paid</option>
                      <option value="full">Full_Paid</option>
                      <option value="unpaid">Unpaid</option>
                    </select>
                  </div>
                  <div className="errors">
                    {errors.paymentStatus}
                    <br />
                  </div>
                </div>

                <div className="input-box">
                  <span className="details">Date of Birth</span>
                  <input
                    type="date"
                    placeholder=""
                    id="Date"
                    name="dob"
                    required
                    onChange={(e) => {
                      setDob(e.target.value);
                    }}
                  />
                  <div className="errors">
                    {errors.dob}
                    <br />
                  </div>
                </div>

                <button
                  className="btn btn-warning btnForAll"
                  type="submit"
                  onChange={handleSubmit}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AddSt;
