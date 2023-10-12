import React from 'react';
import { useState } from 'react';
import './App.css';
import Sidebar from "../../layout/Sidebar/Sidebar"
import ContentTop from './Components/ContentTop/ContentTop';
import Attendance from './Attendance';


function AttendanceDashboard() {
  const [sidebarClose, setSidebarClose] = useState(false);
  const handleClick= () => {
    setSidebarClose(!sidebarClose);
  }
  return (
       <div className="full_content">
        <section>
                              
          
             <Sidebar sidebarClose={sidebarClose}  click={handleClick}/>
             <section className="dashboard">
                <ContentTop click={handleClick}/>
                 <Attendance />
              </section>
             
        </section>
    </div>
    
  )
}

export default AttendanceDashboard