import React from 'react'
import './ContentTop.css'
import {Link} from "react-router-dom"
import {useEffect,useState} from 'react';
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';



function ContentTop(props) {
  const {click}=props
  const [notifs,setNotifs]=useState(false)
  const [isVisible,setIsVisible]=useState(notifs)
  const [isInvisible,setIsInvisible]=useState(!notifs)


  console.log(notifs )


  const getNotification=async()=>{
    await axios.get(`http://localhost:8081/todo/getDue`)
    .then((res)=>{
      console.log(res.data)
      const todos=res.data
      console.log(todos.length)
      if (todos.length>0){setNotifs(true)}
    else{
      setNotifs(false)
    }})
    .catch((err)=>{
      if(err){console.log(err)}
    })
      
  
  }
  

useEffect(()=>{
  setIsVisible(notifs)
  setIsInvisible(!notifs)
  
},[notifs])
useEffect(()=>{
  getNotification()
},[notifs])
  
  return (
    <div className="top">
                 
                <i className="uil uil-bars sidebarToggle"  onClick={click} ></i>
            
            

                <div className="searchBox">
                    <i className="uil uil-search"></i>
                    <input type="text" placeholder="Search here..."/>
                </div>

               <div className="dropdown">
                 <button  className="dropbtn">
                    <i className="uil uil-user profile"></i></button>
                       <div id="dropDownP" className="dropDownPContent">
                           <a href="#"><i className="uil uil-user-square"></i>Profile</a>
                           <a href="#"><i className="uil uil-setting"></i>Setting</a>
                           <a href="#"><i className="uil uil-signout"></i>Logout</a>
                        </div>
                </div>
                
               {isVisible && <button><Link  style={{ textDecoration: 'none' }}to={{pathname:"../To-Do/Notification"}} ><div class="notification-icon"><i class="uil uil-bell notify animated-bell"></i><span class="notification-dot"></span></div></Link></button> } 
                
                {isInvisible && <button><Link  style={{ textDecoration: 'none' }}to={{pathname:"../To-Do/Notification"}} ><i className="uil uil-bell notify"></i></Link></button>}
               
                <button><Link  style={{ textDecoration: 'none' }}to={{pathname:"../To-Do/Archive"}} ><i className="uil uil-schedule toDo"></i></Link></button>
            </div>
  )
}

export default ContentTop