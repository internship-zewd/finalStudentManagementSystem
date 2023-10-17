import React from 'react'
import { useState } from 'react';
import '../DashContent/DashContent.css'
import './Remainder.css'
import axios from 'axios';

function AddRemainder() {
  const [errors, setErrors] = useState([]);
  const id_tag=localStorage.getItem('id_tag')
  const username=localStorage.getItem('username')
  const role=localStorage.getItem('role')
  console.log(role)

  const [reminder,setReminder]=useState({
    name:"",
    date:"",
    time:"",
    description:"",
    notify:true,
    days:0,
    username:username,
    user:id_tag,
    role: role
});


const handleNotify=(e)=>{
    const {name,checked}=e.target
    setReminder((preValue)=>(
        {...preValue,[name]:checked}
    ))

}
const handleChange=(e)=>{
e.preventDefault()

const {name,value}=e.target

setReminder((preValue)=>(
{...preValue,[name]:value}
))
}

const handleSubmit=async(e)=>{
e.preventDefault()
console.log(reminder)
e.preventDefault();
        if (reminder.notify===true) {
            // Send a notification request to the server
            console.log('Notification request sent!');
          }
        let validationErrors = {}
        if (reminder.name.trim() === '') {
            validationErrors.name = 'Name is required.';
          }
      
          if (reminder.date.trim() === '') {
            validationErrors.date = 'Date is required.';
          }
      
          if (reminder.time.trim() === '') {
            validationErrors.time = 'Time is required.';
          }
      
          if (reminder.description.trim() === '') {
            validationErrors.description = 'Description is required.';
          }
      
          if (Object.keys(validationErrors).length === 0) {
            alert('Remainder Added Successfully!')
        await axios.post(`http://localhost:8081/todo/create`,{reminder})
                  .then((res)=>{
                    console.log(res)
                    })
                    .catch((err)=>{
                      if(err){
                        console.log(err)
                      }})}
                      else{
                        alert('try again')
                      }}



    // const [name, setName] = useState('');
    // const [date, setDate] = useState('');
    // const [time, setTime] = useState('');
    // const [description, setDescription]= useState('');
    // const [notifyMe, setNotifyMe] = useState(false);

    // const handleCheckboxChange = (event) => {
    //     setNotifyMe(event.target.checked);
    //   };
    
        

    
  return (
    <div className="dashContent">
        <div className="overview">
                    <div className="title">
                    <i className="uil uil-schedule toDo"></i>
                        <span className="text">To-Do/Add Remainder</span>
                    </div>

                </div>


                  <div className="container">
                  <div className="title">
                  <span className="text">New Remainder</span>
                    </div>

                    <div className="content">
                        <form onSubmit={handleSubmit}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Name:</span>
                                    <input type="text" name="name" placeholder="Reminder name"  required maxLength={30} onChange={(e)=>{handleChange(e)}} />
                                    <div className="errors">{errors.name}<br/></div>
                                </div>

                                <div className="input-box">
                                    <span className="details">Date: </span>
                                    <input type="date" placeholder="MM/DD/YY" name="date" required onChange={(e)=>{handleChange(e)}} />
                                    <div className="errors">{errors.date}<br/></div>
                                </div>

                                <div className="input-box">
                                    <span className="details">Time:</span>
                                    <input type="time" placeholder="time for the remainder" name="time"  required  onChange={(e)=>{handleChange(e)}} />
                                    <div className="errors">{errors.time}<br/></div>
                                </div>

                                <div className="input-box">
                                    <span className="details">Description</span>
                                    <textarea type="text" rows="50" cols="50" placeholder="the description of the reminder..." name="description"  required  onChange={(e)=>{handleChange(e)}} />
                                    <div className="errors">{errors.description}<br/></div>
                                </div>

                                <div className="input-box">
                                    <span className="details">Remind me before: </span>
                                    <input type="number" placeholder="number of days" name="days" required onChange={(e)=>{handleChange(e)}} />
                                    <div className="errors">{errors.days}<br/></div>
                                </div>
                                                                        
                                <label>
                                     <input style={{ width: 30}}
                                         name="notify"
                                         type="checkbox"
                                         checked={reminder.notify}
                                         onChange={(e)=>{handleNotify(e)}}
                                            />
                                          Notify me
                                          </label>
                                

                                <button className="btn btn-warning" type="submit" onChange={()=>{handleSubmit()}}>Submit</button>

                            </div>
                        </form>
                
                </div>
                </div>
                </div>
  )
}


export default AddRemainder

