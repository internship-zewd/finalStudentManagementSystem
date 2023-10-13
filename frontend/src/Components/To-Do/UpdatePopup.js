import {useState,useEffect } from "react";
import '../DashContent/DashContent.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './popup.css'

export const UpdatePopup=(props)=>{

    let reminderProp=props.reminderProp
    let name = reminderProp.name
    let description = reminderProp.description
    let time = reminderProp.time
    let date = reminderProp.date
    let status= reminderProp.status
    let id = reminderProp.id
    let notify = reminderProp.notify
    useEffect(()=>{

       
        setReminder(reminderProp)
    setCheck(notify)

    
        console.log(notify)
    
    },[notify])
    

    const setTrigger=props.setTrigger
   
    // {name,description,time,notify,date,status,id}=reminderProp
    const [reminder,setReminder]=useState({})
    const [errors, setErrors] = useState('');
    const [check,setCheck]=useState(true)


    const handleNotify=(e)=>{
    
        const event=e.target.checked
        console.log(reminder)
        console.log(event)
        setCheck(event)
        setReminder((preValue)=>(
            {...preValue,notify:event}
            ))
    
        // console.log(checked)
         

    
    }

    const handleChange=(e)=>{
        const {name,value}=e.target
        setReminder((preValue)=>(
            {...preValue,[name]:value}
        ))
        

    }
   
      
    let handleSubmit = async(e) => {
        e.preventDefault()
        console.log(reminder)
        e.preventDefault();
        if (notify) {
            // Send a notification request to the server
            console.log('Notification request sent!');
          }
        let validationErrors = {}
        if (name.trim() === '') {
            validationErrors.name = 'Name is required.';
          }
      
          if (date.trim() === '') {
            validationErrors.date = 'Date is required.';
          }
      
          if (time.trim() === '') {
            validationErrors.time = 'Time is required.';
          }
      
          if (description.trim() === '') {
            validationErrors.description = 'Description is required.';
          }
        
      

        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            alert('Updated Successfully!')
            console.log(reminder.notify )
            
        return await axios
        .put(`http://localhost:8081/todo/updatePopup/${id}`,{reminder})
        .then((res)=>{console.log(res)

            setTrigger(false)
            window.location.reload()
        })
        .catch((err)=>{
            if(err){
                console.log(err)
            }
        })} else{
        alert('try again')
    } }
  




    return(props.trigger)?(
        
        

        <div className="popup-overlay">
        <div className="overview">
                    <div className="title">
                    <i className="uil uil-schedule toDo"></i>
                        <span className="text">To-Do/Add Remainder</span>
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
                                    <input type="text" name="name" placeholder="Enter name of the remainder"  required defaultValue={name} onChange={(e)=>{handleChange(e)}} />
                                    <div className="errors">{errors.name}<br/></div>
                                </div>

                                <div className="input-box">
                                    <span className="details">Date: </span>
                                    <input type="date" placeholder="Enter the date for the remainder " name="date" required defaultValue={date} onChange={(e)=>{handleChange(e)}} />
                                    <div className="errors">{errors.date}<br/></div>
                                </div>

                                <div className="input-box">
                                    <span className="details">Time:</span>
                                    <input type="time" placeholder="Enter time for the remainder" name="time"  required defaultValue={time} onChange={(e)=>{handleChange(e)}} />
                                    <div className="errors">{errors.time}<br/></div>
                                </div>

                                <div className="input-box">
                                    <span className="details">Description</span>
                                    <textarea type="text" rows="50" cols="50" placeholder="Description about the Remainder..." name="description"  required defaultValue={description} onChange={(e)=>{handleChange(e)}} />
                                    <div className="errors">{errors.description}<br/></div>
                                </div>
                                <div className="input-box">
                                    <span className="details">Status</span>
                                    <select  name="status" required defaultValue={status} onChange={(e)=>{handleChange(e)}}>
                                        <option value="">select status</option>
                                        <option value={true}>Completed</option>
                                        <option value={false}>Incomplete</option>
                                    </select>
                                </div>
                               
                                <label>
                                     <input style={{ width: 30}}
                                         name="notify"
                                         type="checkbox"
                                         checked={check}
                                         onChange={(e)=>{handleNotify(e)}}
                                            />
                                          Notify me
                                          </label>
                                         

                                <button className="btn btn-warning"
                                    type="submit" onChange={(e)=>{
                                        handleSubmit(e)
                                        }}

                                >Submit</button>

                            </div>
                        </form>
                    <button className="close-btn" onClick={ ()=>{setTrigger(false)}}> close </button>
        {props.children}
        </div>
        </div>
        
                </div>
                </div>
         

      


       
   
    
   ):"";
};