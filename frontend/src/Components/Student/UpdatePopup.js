import {useState} from "react";
import '../DashContent/DashContent.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';



export const UpdatePopup=(props)=>{

    const setTrigger=props.setTrigger
    const updateProp=props.updateProp
    const id=updateProp.id

    const [username, setUsername] = useState(updateProp.username);
    const [email, setEmail] = useState(updateProp.email);
    const [gender, setGender] = useState(updateProp.gender);
    const [phonenumber, setPhonenumber] = useState(updateProp.phonenumber);
    const [paymentStatus, setPaymentStatus] = useState(updateProp.paymentStatus);
    const [addmitiondate, setAddmitiondate] = useState(updateProp.addmitiondate);
    const [course, setCourse] = useState(updateProp.course);
    const [classs, setClasss] = useState(updateProp.classs);
    const [dob, setDob] = useState(updateProp.dob);
    const [registno, setRegistno] = useState(updateProp.registno);
   
   
// console.log(updateProp.id)


const handleSubmit = async(e) => {
  //  e.preventDefault();
   
    return await axios
    .post("http://localhost:8081/student",{username,email,phonenumber,gender,paymentStatus,addmitiondate,course,classs,dob,registno})
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        if(err){
            console.log(err)
        }
    })
}

    return(props.trigger)?(
        
        

        <div className="dashContent">
        <div className="overview">
            <div className="title">
                <i className="uil uil-graduation-cap"></i>
                <span className="text">Student/Add Student</span>
            </div>
            <div className="container">

                <div className="content">
                <div className="popup">
                  <div className="popup-inner">
                    <form onSubmit={handleSubmit}>
                        <div className="user-details">
                            <div className="input-box">
                                <span className="details">Full Name</span>
                                <input type="text" name="username" placeholder="Enter your name" defaultValue={updateProp.username} required minLength={6} onChange={(e)=>{setUsername(e.target.value )}} />
                            </div>

                            <div className="input-box">
                                <span className="details">Email </span>
                                <input type="email" placeholder="Enter your Email " name="email" defaultValue={updateProp.email} required onChange={(e)=>{setEmail(e.target.value )}} />

                            </div>

                            <div className="input-box">
                                <span className="details">Mobile Number</span>
                                <input type="number" placeholder="09--------" name="phonenumber"  defaultValue={updateProp.phonenumber} required maxlength="10" onChange={(e)=>{setPhonenumber(e.target.value )}} />

                            </div>

                            <div className="input-box">
                                <span className="details">Gender</span>
                                <select required onChange={(e)=>{setGender(e.target.value )}} name="gender" defaultalue={updateProp.gender}>
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>

                            </div>

                            <div className="input-box">

                                <span className="details">Course</span>
                                <select required onChange={(e)=>{setCourse(e.target.value )}} name="course" defaultValue={updateProp.course} >
                                    <option value="">Select Course</option>
                                    <option value='graphic-design'>Graphic design</option>
                                        <option value='digital-marketing'>Digital marketing</option>
                                        <option value='photography'>Photography</option>
                                        <option value='animation'>Animation and motion design</option>
                                </select>

                            </div>

                            <div className="input-box">

                                <span className="details">Class</span>
                                <select required onChange={(e)=>{setClasss(e.target.value )}} name="classs" defaultValue={updateProp.classs}>
                                    <option value="">Select Class</option>
                                    <option value="a">A</option>
                                    <option value="b">B</option>
                                    <option value="b">C</option>
                                </select>
                            </div>

                            <div className="input-box">
                                <span className="details">Transcript</span>
                                <input type="file" accept="pdf/*" required  />
                            </div>

                            <div className="input-box">
                                <div className="gender-details">
                                    <span className="details">Payment Status</span>
                                    <select required onChange={(e)=>{setPaymentStatus(e.target.value )}} name="paymentStatus" defaultValue={updateProp.paymentStatus}>
                                        <option value=""></option>
                                        <option value="half">Half_Paid</option>
                                        <option value="full">Full_Paid</option>
                                        <option value="unpaid">Unpaid</option>
                                    </select>
                                </div>
                            </div>


                            <div className="input-box">
                                <span className="details">Date of Birth</span>
                                <input type="date" placeholder="" id="Date" name="dob" defaultValue={updateProp.dob} required onChange={(e)=>{setDob(e.target.value )}} />
                            </div>
                            <div className="input-box">
                                <span className="details">Admission Date</span>
                                <input type="date" placeholder="" id="Date" name="addmitiondate" defaultValue={updateProp.addmitiondate} required onChange={(e)=>{setAddmitiondate(e.target.value )}} />
                            </div>

                            <div className="input-box">
                                <span className="details">Registration Number</span>
                                <input type="text" placeholder="Registration Number" name="registno" defaultValue={updateProp.registno}  required maxlength="10" onChange={(e)=>{setRegistno(e.target.value )}} />

                            </div>


                            <button className="btn btn-info btn-block"
                                type="submit" onChange={handleSubmit}

                            >Update</button>

                        </div>
                    </form>
                    <button className="close-btn" onClick={ ()=>{setTrigger(false)}}> close </button>
        {props.children}
                </div>
                </div>
                </div>
            </div>

        </div>


       
    </div>
    
   ):"";
};