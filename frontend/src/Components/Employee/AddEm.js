import React, { useState } from 'react'
import '../DashContent/DashContent.css'
import axios from 'axios';
import "./AddEm.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import validator from 'validator';

function  AddEm () {

    const [employeeType, setEmployeeType] = useState("")
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [salary, setSalary] = useState('');
    const [errors,setErrors]=useState({});
    const [password,setPassword]=useState('');



    let handleSubmit=async(e)=>{
        e.preventDefault()
        let validationErrors={}
        let regEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        // const regPassword=/[A-Z]/.test(p) && /[0-9]/.test(p) && !/[aeiou]/.test(p) && /^[@#][A-Za-z0-9]{7,13}$/
        let regName=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/ ;
        // const regName=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
        
        if(!employeeType.trim()){
            validationErrors.employeeType="Pick the employee type";
        }
        if(!regName.test(firstName)){
            validationErrors.firstName="Employee's first name should consist of only letters";
        }else if(firstName.length<3){
            validationErrors.firstName="Employee's first name is supposed to be atleast 3 characters";
        }else if(firstName.length>15){
            validationErrors.firstName="Emplloyee's first name should be less than 16 characters";
            validationErrors.firstName="Employee's first name should be less than 16 characters"
        }
        if(!regName.test(middleName)){
            validationErrors.middleName="Employee's middle name should consist of only letter";
        }else if(middleName.length<3){
            validationErrors.middleName="Employee's middle name is supposed to be atleast 3 characters"
        }else if(middleName.length>15){
            validationErrors.middleName="Employee's middle name should be less than 16 characters"
        }
        if(!regName.test(lastName)){
            validationErrors.lastName="Employee's last name should consist of only letter"
        }else if(lastName.length<3){
            validationErrors.lastName="Employee's last name is supposed to be atleast 3 characters"
        }else if(lastName.length>15){
            validationErrors.lastName="Employee's last name should be less than 16 characters"
        }
        if(!email.trim()){
            validationErrors.email="Fill in employee's email"
        }else if(!regEmail.test(email)){
            validationErrors.email="email is not in the correct format"
        }
        if(!password.trim()){
            validationErrors.password="fill in the password of the employee"}

        // else if(!regPassword.test(password)){
        //     validationErrors.password="Password should contains one Capital letter, should start with special character @ or #"
        // }


        if(!phone.trim()){
            validationErrors.phone="Fill in employee's phone number"
        }
        if(!salary.trim()){
            validationErrors.salary="Fill in employee's salary"
        }else if(salary.length>6){
            validationErrors.salary="salary must not exceed 6 characters."
        }
        
        if(!phone.trim()){
            validationErrors.phone="Fill in employee's phone number"
        }

        setErrors(validationErrors)
       
        if(Object.keys(validationErrors).length===0){

        return await axios
        .post(`http://localhost:8081/${employeeType}/create`,{firstName,middleName,lastName,email,password,phone,salary})
        .then((res)=>{alert(res.data)})
        .catch((err)=>{
            if(err){
                console.log(err)
            }
        })}
        else{
            alert('try again')

            console.log(validationErrors)
            console.log(employeeType)
        }

    }


       
    return (
        <div className="dashContent">
            <div className="overview">
                <div className="title">
                    <i className="uil uil-suitcase"></i>
                    <span className="text">Employee/Add Employee</span>
                </div>
                <div className="container">
                <div className="content">
                <form onSubmit={handleSubmit}>
                        <div className="user-details">

                            <div className="input-box">
                            <div className="gender-details">
                                    <span className="details">Employee Type</span>
                                    <select id='employeeType' name='employeeType' value={employeeType} onChange={(e) => {setEmployeeType(e.target.value)}}required >

                                        <option value="" selected="selected">select type</option>
                                        <option value='admin'>Admin</option>
                                        <option value='manager'>Manager</option>
                                        <option value='accountant'>Accountant</option>
                                        <option value='instructor'>Instructor</option>
                                    </select>
                                </div>
                                <div className="errors">{errors.employeeType}<br/></div>
                            </div>

                            <div className="input-box">
                                <span className="details">First Name:</span>
                                <input type='text' id='firstName' required value={firstName} onChange={(e) => { setFirstName(e.target.value) }} name='firstName' placeholder='First Name of employee' autoComplete='off' /><br />
                                <div className="errors">{errors.firstName}<br/></div>
                            </div>


                            <div className="input-box">
                                <span className="details">Middle Name:</span>
                                <input type='text' id='middleName' required value={middleName} onChange={(e) => { setMiddleName(e.target.value) }} name='middleName' placeholder='Middle Name of employee' autoComplete='off' /><br />
                                <div className="errors">{errors.middleName}</div>
                            </div>

                            <div className="input-box">
                                <span className="details">Last Name:</span>
                                <input type='text' id='lastName' required value={lastName} onChange={(e) => { setLastName(e.target.value) }} name='lastName' placeholder='Last Name of employee' autoComplete='off' /><br />
                                <div className="errors">{errors.lastName}</div>
                            </div>

                            <div className="input-box">
                                <span className="details">Email:</span>
                                <input type='email' id='email' required value={email} onChange={(e) => { setEmail(e.target.value) }} name='email' placeholder='Email' autoComplete='off' /><br />
                                <div className="errors">{errors.email}</div>
                            </div>

                            <div className="input-box">
                                <span className="details">Password:</span>
                                <input type='password' id='password' required value={password} onChange={(e)=>{setPassword(e.target.value )}} name='password' placeholder="Enter employees's password" autoComplete='off'/>
                                <div className="errors">{errors.password}</div>
                            </div>

                            <div className="input-box">
                                <span className="details">Phone:</span>
                                <input type='tel' id='phone' required value={phone} onChange={(e) => { setPhone(e.target.value) }} name='phone' placeholder='Phone Number' autoComplete='off' /><br />
                                <div className="errors">{errors.phone}</div>
                            </div>


                            <div className="input-box">
                                <span className="details">Salary:</span>
                                <input type='number' id='salary' required value={salary} onChange={(e) => { setSalary(e.target.value) }} name='salary' placeholder='Enter Salary' autoComplete='off' /><br />
                                <div className="errors">{errors.salary}</div>
                            </div>

                                                         
                                
                                <button type='submit' className="btn btn-warning" name='submit' onChange={handleSubmit} >Submit</button>
                                </div>
                      
                      
                    </form>
                </div>
            </div>

        </div>
        </div>


)
    }
    export default AddEm;