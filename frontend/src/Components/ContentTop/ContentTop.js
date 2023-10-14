import React from 'react'
import './ContentTop.css'
import {Link} from "react-router-dom"


function ContentTop({click}) {
  
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
                
                <button><Link  style={{ textDecoration: 'none' }}to={{pathname:"../To-Do/Notification"}} ><i className="uil uil-bell notify" ></i></Link></button>
                {/* {console.log(localStorage.getItem("access-token"))} */}
                <button><Link  style={{ textDecoration: 'none' }}to={{pathname:"../To-Do/Archive"}} ><i className="uil uil-schedule toDo"></i></Link></button>
            </div>
  )
}

export default ContentTop