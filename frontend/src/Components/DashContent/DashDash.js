import React from 'react';
import { useState,useEffect } from 'react';
import '../../App.css';
import Sidebar from "../../layout/Sidebar/Sidebar"
import ContentTop from '../ContentTop/ContentTop';
import DashContent from './DashContent';
import axios from 'axios';
import {Notification} from "../To-Do/Notification"


function DashDashboard() {
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
                 <DashContent />
              </section>
             
        </section>
    </div>
    
  )
}

export default DashDashboard